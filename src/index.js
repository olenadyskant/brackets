module.exports = function check(str, bracketsConfig) {
  function checkBrackets(txt) {
    for (var i = 0; i < bracketsConfig.length; i++) {
      var pairedBr = bracketsConfig[i][0] + bracketsConfig[i][1];
      if (txt.includes(pairedBr))
        return checkBrackets(txt.split(pairedBr).join(''))
    }
    return txt;
  }
  return checkBrackets(str).length === 0;
}
