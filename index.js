//© 2018 Jonathon Powell

class TextConverter {
	//Plain ASCII string to hexadecimal string
	TextToHex(text) {
		var hex = '';
		for(var i=0; i < text.length; i++) {
			hex += text.charCodeAt(i).toString(16);
		}
		return hex;
	}
	
	//Hexadecimal string to array of bytes
	HexToAOB(hex_string){
		//If any, remove spaces for proper parsing
		//ex: 4F 4A = 4F4A
		hex_string = hex_string.replace(" ", "")
		
		let result = []
		while(hex_string.length > 0){
			//Each two characters is expected to be 1 byte
			//Read only the first byte
			result.push(parseInt('0x' + hex_string.substring(0,2)))
			
			//First byte processed, remove it so next loop can process the next byte
			hex_string = hex_string.substring(2)
		}
		
		return result; 
	}
	
	//Hexadecimal string to C++'s array of bytes
	CPP_HexToAOB (hex_string) {
		//If any, remove spaces for proper parsing
		//ex: 4F 4A = 4F4A
		hex_string = hex_string.replace(" ", "")
		
		let result = "{"
		while(hex_string.length > 0){
			//Each two characters is expected to be 1 byte
			//Read only the first byte
			//Use 0x so compilers will know it is a hex value
			result += "0x" + hex_string.substring(0,2)
			if(hex_string.length > 2)
				result += ", "
			//First byte processed, remove it so next loop can process the next byte
			hex_string = hex_string.substring(2)
		}
		result += "}"
		
		return result; 
	}
}

module.exports = new TextConverter()