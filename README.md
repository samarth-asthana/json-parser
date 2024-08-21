# JSON Parser with Arbitrary Precision

This project provides a JavaScript function to parse JSON strings while handling arbitrary precision for numeric values.

## Logic

- **Purpose**: Converts numeric values in JSON strings to maintain precision using the `big.js` library.
- **Precision Handling**: Ensures that both large integers and floating-point numbers are accurately represented.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/samarth-asthana/json-parser.git
   cd json-parser
   npm install
   node test.js
   ```

The project uses the big.js library to handle arbitrary precision for integers and floating-point numbers.
Ensure jsonParser.js and test.js are in the same directory or adjust paths if necessary.
