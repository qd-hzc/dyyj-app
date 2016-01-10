/**
 * 生成js模板
 * @param {Object} templateStr
 * @param {Object} data
 */
function _render(templateStr, data) {
	return templateStr.replace(/\{([\w\.]*)\}/g, function(str, key) {
		var keys = key.split("."),
			v = data[keys.shift()];
		for (var i = 0, l = keys.length; i < l; i++)
			v = v[keys[i]];
		return (typeof v !== "undefined" && v !== null) ? v : "";
	});
}
/**
 * 设置用户id
 * @param {Object} userId
 */
function setUserId(userId) {
	window.localStorage.setItem("___userID", userId);
}
/**
 * 获取用户id
 */
function getUserId() {
	return window.localStorage.getItem("___userID");
}