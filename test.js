const parseJSON = require("./jsonParser");

const jsonString = `{
    "int": "123456789012345678901234567890",
    "float": "12345.6789012345678901234567890",
    "array": ["1", "2", "3.1415926535"],
    "object": {
        "key": "987654321098765432109876543210"
    }
}`;

const parsedObject = parseJSON(jsonString);

console.log(parsedObject);
