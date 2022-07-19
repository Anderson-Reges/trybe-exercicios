function encode(string) {
    for (let index = 0; index < string.length; index += 1) {
      switch (string[index]) {
      case 'a':
        string = string.replaceAll(string[index], '1');
        break;
      case 'e':
        string = string.replaceAll(string[index], '2');
        break;
      case 'i':
        string = string.replaceAll(string[index], '3');
        break;
      case 'o':
        string = string.replaceAll(string[index], '4');
        break;
      case 'u':
        string = string.replaceAll(string[index], '5');
        break;
      }
    }
    return string;
  }
  
  function decode(string) {
    for (let index = 0; index < string.length; index += 1) {
      switch (string[index]) {
      case '1':
        string = string.replaceAll(string[index], 'a');
        break;
      case '2':
        string = string.replaceAll(string[index], 'e');
        break;
      case '3':
        string = string.replaceAll(string[index], 'i');
        break;
      case '4':
        string = string.replaceAll(string[index], 'o');
        break;
      case '5':
        string = string.replaceAll(string[index], 'u');
        break;
      }
    }
    return string;
  }

module.exports = encode