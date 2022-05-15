import parseTemplatToTokens from './parseTemplateToTokens'
import './code/index.js'

// 全局提供SG_TemplateEngine对象
window.SSG_TemplateEngine = {
  render (templateStr, data) {
    // 调用parseTemplatToTokens函数，让模版变成tokens
    var tokens = parseTemplatToTokens(templateStr)
    console.log(tokens)
  }
}

