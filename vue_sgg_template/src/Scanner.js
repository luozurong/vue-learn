/**
 * 扫描类
 */
export default class Scanner {
  constructor (templateStr) {
    console.log('我是scanner', templateStr)
    this.templateStr = templateStr
    // 指针
    this.pos = 0;
    // 尾巴，一开始是模版字符串
    this.tail = templateStr
  }
  // 功能弱，就是走过指定内容，没有返回的值
  scan (tag) {
    if (this.tail.indexOf(tag) === 0) {
      // tag有多长，比如{{长度是2，就让指针后移2位
      this.pos += tag.length
      // 尾巴也要改变
      this.tail = this.templateStr.substring(this.pos)
    }
  }
  // 让指针进行扫描，直到遇见指定内容结束，并且能够返回结束之前路过的文字
  scanUtil (stopTag) {
    // 记录一下执行本方法的时候pos的值
    const pos_backup = this.pos
    // 当尾巴的开头不是stopTag时候，就说明还没有扫描stopTag
    // && 防止找不到，那么循环要停止
    while (this.tail.indexOf(stopTag) != 0 && !this.eos()) {
      this.pos++
      // 改变尾巴为当前指针这个字符串开始，到最后的全部字符串
      this.tail = this.templateStr.substr(this.pos)
    }
    return this.templateStr.substring(pos_backup, this.pos)
  }

  //指针是否已经到头，返回布尔值
  eos () {
    return this.pos >= this.templateStr.length
  }
}