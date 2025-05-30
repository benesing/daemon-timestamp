# daemon-timestamp

Local timestamp formatting for daemon logs in Node.js.

After copying this silly function into a half-dozen different
projects, I have decided to make it a package.

The function returns a timestamp string that is the same
across locales and is formatted with a brief timezone of
the machine its running on.

## Installation

```sh
npm install daemon-timestamp
```

## Usage

### ES Modules
```javascript
import timestamp from "daemon-timestamp";
console.log(`${timestamp()} - server started`);
```

### CommonJS
```javascript
// Option 1: Direct default import
const { default: timestamp } = require("daemon-timestamp");
console.log(`${timestamp()} - server started`);

// Option 2: Module object
const timestampModule = require("daemon-timestamp");
console.log(`${timestampModule.timestamp()} - server started`);
```

## Format

Returns timestamps in the format: `YYYY-MM-DD HH:MM:SS ±HHMM`

- Uses local timezone with offset
- Zero-padded values for consistent formatting
- Perfect for daemon and server logs

## License

MIT © Ben Singer
