const fs = require('fs');
const logger = require('../index');

const checkResult = path => {
  if (fs.existsSync(path)) {
    console.log('Success\n');
    fs.unlinkSync(path);
  } else {
    console.log('Failed\n');
  }
};

console.log('Logging to logs.txt');
logger.log('My first log');
checkResult('logs.txt');

console.log('Logging to test/test.log');
logger.log('My second log', 'test/test.log');
checkResult('test/test.log');

console.log('Changing global path to my-logs.txt');
logger.path = 'my-logs.txt';
logger.log('My third log');
checkResult('my-logs.txt');
