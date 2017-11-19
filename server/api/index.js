const router = require('express').Router();

const userRouter = require('./users'); 
router.use('/user', userRouter); 

const companyRouter = require('./companies'); 
router.use('/user', userRouter); 

const subscriptionRouter = require('./subscriptions'); 
router.use('/user', userRouter); 

module.exports = router;