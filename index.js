layui.config({
  version: '1545041465443' //为了更新 js 缓存，可忽略
})

layui.use(
  ['laydate', 'laypage', 'layer', 'table', 'element'],
  function () {
    var laypage = layui.laypage, //分页
      layer = layui.layer, //弹层
      table = layui.table //表格

    //执行一个 table 实例
    table.render({
      elem: '#demo',
      url: './persons.json', // 数据接口,
      title: '用户表',
      page: true, //开启分页,
      toolbar: 'default', //开启工具栏，此处显示默认图标，可以自定义模板，详见文档,
      totalRow: true, //开启合计行,
      cols: [ // 列数目
        [ //表头
          {field: 'orderId', title: '订单编号'},
          {field: 'thirdPartyOrder', title: '第三方订单'},
          {field: 'status', title: '订单状态'},
          {field: 'facilitator', title: '服务商'},
          {field: 'time', title: '时间'},
          {field: 'payer', title: '付款人'},
          {field: 'usdtNumber', title: 'USDT数量'},
          {field: 'sum', title: '金额(CNY)'},
          {fixed: 'right', title: '相关操作', toolbar: '#barDemo'}
        ]
      ]
    })

    //监听行工具事件
    //注：tool 是工具条事件名，order 是 table 原始容器的属性 lay-filter="对应的值"
    table.on('tool(order)', function (obj) {
      var layEvent = obj.event //获得 lay-event 对应的值
      if (layEvent === 'detail') {
        layer.msg('详情操作')
      } else if (layEvent === 'log') {
        layer.msg('日志操作')
      }
    })

    //分页
    laypage.render({
      elem: 'pageDemo', //分页容器的id
      count: 10, //总页数
      skin: '#FBCD6C', //自定义选中色值
      skip: true, //开启跳页
      jump: function (obj, first) {
        if (!first) {
          layer.msg('第' + obj.curr + '页', {offset: 'b'})
        }
      }
    })
  }
)

