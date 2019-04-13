
<h1>This project is Nodejs Microservice to fetch stockquotes.</h1>

**Description**
This microservice is a microservice that automatically fetches stock quotes from remote api(s).
It will use an Eureka client (Nodejs) to publish itself for service registration and discovery. It
can only be accessed through the gateway (Zuul) which will have authorization to do so.

**DB**
-MongoDB v4.0 combined with Mongoose ODM
-ElasticSearch v7.0.0

**DB**
NOT IMPLEMENTED YET
It has a MVC user interface.

**Schedulers**
NOT IMPLEMENTED YET
cron jobs to fetch scheduled (every 15 mins) stock quotes (1 for each minute) requests.

**Authentication and Authorization**


**Configuration**
configure the time intervals to fetch data, 1, 5, 10 and 15 minutes
configure how many points
(to be described)