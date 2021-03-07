const express = require('express');

const portfolioController = require('../controllers/portfolio.controller');

const router = express.Router();

router.post('/portfolio', portfolioController.getPortfolio);