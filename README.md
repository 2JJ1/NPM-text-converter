

# text-converter

Converts text to other forms


# Installing

Using NPM

    npm i text-converter

# Example
#### Import

    const textConverter = require('text-converter')

#### Convert a string to it's hexadecimal value as string

    textConverter.TextToHex('my string')
    //Returns '6d7920737472696e67'
 
#### Convert hexadecimal string to byte array

    textConverter.HexToAOB('6d7920737472696e67')
    //Returns decimal array containing each byte
    //[109, 121, 32, 115, 116, 114, 105, 110, 103]

#### Convert hexadecimal string to C++ byte array

    textConverter.CPP_HexToAOB('6d7920737472696e67')
    //Returns c++ hex array as string containing each byte
    //"{0x6d, 0x79, 0x20, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67}"
