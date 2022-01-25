const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const User = require('../models/user');

exports.signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed.');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  bcrypt
    .hash(password, 12)
    .then(hashedPw => {
      const user = new User({
        email: email,
        password: hashedPw,
        name: name
      });
      return user.save();
    })
    .then(result => {
      res.status(201).json({ message: 'User created!', userId: result._id });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.login = (req, res, next) => {
  
  console.log("req.body --> ", req.body);

  const email = req.body.email;
  const password = req.body.password;

  console.log("email: ", email);
  console.log("password: ", password);

  let loadedUser;
  
  /****** MOCK DATA ***************/

  if(!email || !password) {
    console.log("No user and password sent, setting mock data instead!!!");
    loadedUser = {_id:123, email: 'nunotest@tesmail.com', password: 'secretpassword'};
  } else {
    loadedUser = {_id:123, email: email, password: password};
  }

  const token = jwt.sign(
    {
      email: loadedUser.email,
      userId: loadedUser._id.toString(),
      // added some properties to make the token unique in each session
      "iat": Date.now(),
      "exp": 10*60,  //new Date(Date.now() + 10*60*1000), // 10 mins
      "jti": uuidv4() //"3F2504E0-4F89-11D3-9A0C-0305E82C3301"
    },
    'somesupersecretsecret',
    // { expiresIn: '1h' }
  );

  // get refresh token
  // store it on DB
  let refreshToken = this.createRefreshToken();

  res.status(200).json(
    { 
      accessToken: token,
      userId: loadedUser._id.toString(),
      refreshToken: refreshToken
    });

  /********END OF MOCK DATA ************************/


  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        const error = new Error('A user with this email could not be found.');
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then(isEqual => {
      if (!isEqual) {
        const error = new Error('Wrong password!');
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser._id.toString()
        },
        'somesupersecretsecret',
        { expiresIn: '1h' }
      );
      res.status(200).json({ token: token, userId: loadedUser._id.toString() });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createRefreshToken = (req, res) => {
  let expiredAt = new Date();

  expiredAt.setSeconds(expiredAt.getSeconds() + 24 * 3600 /* 24 hours */);  // config.jwtRefreshExpiration

  console.log("expiredAt: ", expiredAt.getHours + ":" + expiredAt.getMinutes);

  let _token = uuidv4();

  let refreshToken = {
    token: _token,
    userId: "user123",//user.id,
    expiryDate: expiredAt.getTime(),
  };

  console.log("refreshToken: ", refreshToken);

  return refreshToken.token;
}


