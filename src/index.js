module.exports = function check(str, bracketsConfig) {
  let strSpl = str.split('')
    for (let i = 0; i < strSpl.length; i++) {
        let curElem = strSpl[i];
        let nextElem = strSpl[i + 1];
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (curElem == bracketsConfig[j][0] && nextElem == bracketsConfig[j][1]) {
                strSpl.splice(i, 2)
                i = -1
            }
        }
    }
    return strSpl.length !== 0 ? false : true
}
