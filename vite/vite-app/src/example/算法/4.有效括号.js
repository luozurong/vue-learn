/**
 * 给定一只括号'(', ')', '{', '}', '[', ']'的字符串S,判断字符串是否有效
 * 有效的字符串需满足
 * 1. 左括号必须相同类型的右括号闭合
 * 2. 左括号必须正确的顺序闭合
 * 
 * 例子1:输入：s = "()"
 * 输出：true
 * 
 * 例子2:输入：s = "()[]{}"
 * 输出：true
 * 
 * 例子3:输入：s = "(]"
 * 输出：false
 * 
 * 例子4:输入：s = "([)]"
 * 输出：false
 */

var isValid = function (s) {
  var stack = []
  for (let i = 0; i < s.length; i ++) {
    const start = s[i]
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i])
    } else {
      const end = stack[stack.length - 1]
      if ((start === ')' && end === '(') ||
          (start === ']' && end === '[') ||
          (start === '}' && end === '{')
      ) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

console.log(isValid('()}]'))