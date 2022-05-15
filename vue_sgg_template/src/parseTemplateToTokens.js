import Scanner from './Scanner.js'

/**
 * 将模版字符串变为tokens
 */
export default function parseTemplateToTokens (templateStr) {
    var tokens = []
    // 创建扫描器
    var scanner = new Scanner(templateStr)
    var words;
    // 扫描器工作
    while(!scanner.eos()) {
      // 收集开始标记出现的文字
      words = scanner.scanUtil('{{') 
      // 存起来
      if (words !== '') {
        tokens.push(['text', words])
      }
      // 过双大括号
      scanner.scan('{{')
      // 收集开始标记出现之前的文字
      words = scanner.scanUtil('}}')
      // 存起来
      if (words) {
        tokens.push(['name', words])
      }
      // 过双打括号
      scanner.scan('}}')
    }
    return tokens
}