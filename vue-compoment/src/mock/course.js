import Mock from 'mockjs'

var result = Mock.mock({
  code: 200,
  msg: '操作成功',
  data: {
    current_page: 1,
    last_page: 18,
    total: 178,
    "list|10": [
      {
        id: "@id",  //模拟id
        "price|100-200.1-2": 100, //模拟小数，在计算机中也称浮点数
        "has_buy|1": [0, 1], //模拟状态值,0,1,2,
        title: "@ctitle",  //模拟中文标题
        address: "@county(true)",  //模拟省市县
        "teachers_list|1": [
          {
            course_basis_id: "@id",
            id: "@id",
            teacher_avatar: "@image('150x120', '#ff0000', '1909A')",  //模拟图片
            teacher_name: "@cname"  //模拟中文姓名
          }
        ]
      }
    ]
  }
})

export default result