# Logger

Date and prepend logs to your log file(s) with a simple function.

The documentation is available [here](https://purplnay.github.io/logger/global.html#logger).

## Installation

- With npm: `npm install --save purpl-logger`

- With yarn: `npm add purpl-logger`

## Usage

- Logging to `logs.txt` (default path):

```javascript
const { log } = require('purpl-logger');

log('My first log');
log('My second log); // The most recent log will appear first in logs.txt
```

- Changing your log file (globally):

```javascript
const logger = require('purpl-logger');

logger.path = 'logs/my-log-file';
logger.log('Logging to my-log-file');

logger.path = 'logs/my-other-log-file';
logger.log('Logging to my-other-log-file');
```

- Specifying a log file to the log function:

```javascript
const { log } = require('purpl-logger');

log('Logging to my-logs.txt', 'my-logs.txt');
log('Logging to logs/some-file.log', 'logs/some-file.log');
```
