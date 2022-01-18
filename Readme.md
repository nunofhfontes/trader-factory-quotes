
<h1>Trader Factory Project -> trader-factory-quotes</h1>

**This project is a Nodejs Microservice to fetch stockquotes.**

**Description**<br>
This microservice is a microservice that automatically fetches stock quotes from remote api(s) and stores them
in two different databases, MongoDB and ElasticSearch.
The stock's historic data will be persisted and analyzed by other microservices.
The service looks for quotes in specific and periodic time intervals, 1, 5, 10 or 15 minutes. And these can be configured. 

The microservice has a document to register which stocks has to look for when fetching for quotes. Administrator users
can add, remove and disable stock symbols in order to collect quotes for those symbols or to just stop collecting. For those
purposes the following endpoints will be accesible, /add-symbol, /remove-symbol, /disable-symbol via http POST carrying 
the necessary information (JSON format) in it's body.  There is also a function to look for quotes for some symbols in
a given time interval.

It will use an Eureka client (Nodejs) to publish itself for service registration and discovery. It
can only be accessed through the gateway (Zuul) which will have authorization to do so.

**App Structure**<br>
– routes
 auth.routes.js: POST signup & login
 user.routes.js: GET users listings, public & protected resources

– middlewares
 is-auth.js: verify Token, check User roles in database

– controllers
 auth.controller.js: handle signup & login actions
 portfolio.controller.js: return protected content

– models for MongoDB Mongoose
 user.model.js
 quote.model.js
 portfolio.model.js

– app.js: import and initialize necessary modules and routes, listen for connections.

**User Interface**<br>
NOT IMPLEMENTED YET<br>
It has a simple user interface built using the MVC concept to configure the microservice

**DB**<br>
-MongoDB v4.0 combined with Mongoose ODM <br>
-ElasticSearch v7.0.0

**Schedulers**<br>
NOT IMPLEMENTED YET<br>
cron jobs to fetch scheduled (every 15 mins) stock quotes (1 for each minute) requests.

**Authentication and Authorization**


**Configuration**<br>
configure the time intervals to fetch data, 1, 5, 10 and 15 minutes<br>
configure how many points<br>
(to be described)<br>