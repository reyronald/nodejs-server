const PORT = 3000;
const IP = 'localhost';
const NODE_ENV = 'DEV';

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const contentLength = require('express-content-length-validator');
const helmet = require('helmet');

const app = express();

const server = http.createServer(app);

class ApplicationConfig {
  static init(app) {
    let _root = process.cwd();
    let _nodeModules = '/node_modules/';

    app.use(express.static(_root + _nodeModules));
    app.use(bodyParser.text({type: "*/*"}));
    app.use(morgan('dev', { immediate: false }));
    app.use(contentLength.validateMax({max: 999}));
    app.use(helmet());
  }
}

ApplicationConfig.init(app);

function initRoutes(app) {
  const startTime = new Date();

  app.route('/*')
    .get((req, res) => {
        const uptime = `${new Date() - startTime}ms`;
        res.status(200).json({ startTime, uptime });
      }
    )
    .post((req, res) => {
      setTimeout(() => {
          const json = JSON.stringify(JSON.parse(req.body), null, 2);
          const headers = JSON.stringify(req.headers, null, 2);
          console.log('HEADERS');
          console.log(headers);
          console.log('PRETTY BODY');
          console.log(json);
          console.log('RAW BODY');
          console.log(req.body);
          console.log();
      }, 100);
    	res.status(200).json(req.body);
    });
}

initRoutes(app);

const startServer = () => {
  server.listen(PORT, IP, () => {
    console.log('Express server listening on %s:%s in %s mode', IP, PORT, NODE_ENV);
  });
};

setImmediate(startServer);

exports = module.exports = app;
