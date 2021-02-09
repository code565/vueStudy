const storgeEs = {}
/**
 * 增加localStorage
 * @param {*} key 
 * @param {*} val 
 */
storgeEs.setLocal = function(key, val) {
    var setting = arguments[0]
    if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
        for (var i in setting) {
            localStorage.setItem(i, JSON.stringify(setting[i]))
        }
    } else {
        localStorage.setItem(key, JSON.stringify(val))
    }
}
/**
 * 获取localStorage
 * @param {*} key
 */
storgeEs.getLocal = function(key) {
    if (key) return JSON.parse(localStorage.getItem(key))
    return null
}
/**
 * 移除localStorage
 * @param {*} key
 */
storgeEs.removeLocal = function (key) {
    localStorage.removeItem(key)
}
export default storgeEs