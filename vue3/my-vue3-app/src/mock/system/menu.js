import Mock from 'mockjs'

var result = Mock.mock({
  code: 200,
  msg: '操作成功',
  data: [
    {menuName: '我的博主库', menuUrl: '/blogger', menuChildren: [
      {menuName: '合作伙伴', menuUrl: '/blogger/list'}
    ]}
  ]
})

export default result