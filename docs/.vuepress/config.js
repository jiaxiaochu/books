module.exports = {
	// title:"吹花小筑工作室",
	// description:"贾志翔的个人工作室",
	title:"知行合一",
	description:"知行合一",
	themeConfig: {
		nav: [
			// 设置导航栏
			{ text: '首页', link: '/' },
			{text: '测试页面', link: '/test/'},
			{ text: '开发环境配置', link: 'https://jiaxiaochu.gitee.io/mybook/' },
			{ text: 'Python入门指北', link: 'https://jiaxiaochu.gitee.io/ibook/' },
		  	// 下拉列表显示分组
		  {
			  text: '下拉列表显示分组总',
			  items: [
				  {
					  text: '下拉列表显示分组一',
					  items: [
						  {text: '测试分组菜单一',link: 'https://jiaxiaochu.gitee.io/mybook/'},
						  {text: '测试分组菜单二',link: 'https://jiaxiaochu.gitee.io/ibook/'},
					  ]
				  },
				  {
					  text: '下拉列表显示分组二',
					  items: [
						  {text: '测试分组菜单三',link: 'https://space.bilibili.com/316347293'},
						  {text: '测试分组菜单四',link: 'http://www.jiazhixiang.xyz/'},
					  ]
				  },
			  ]
		  },
		  			// 显示下拉菜单列表
					  {
						text: 'Languages',
						items: [
						  { text: 'Chinese', link: '/language/chinese' },
						  { text: 'English', link: '/language/english' }
						]
					  },
		],
		// 侧边栏设置
		sidebar: {
			'/foo/':[
				'',
				'one',
				'two',
			],
			'/configuration/':[
				'',
				// '包含Windows、Mac、Linux三大系统详解视屏',
				'Vmware虚拟机安装和配置Ubuntu系统',
				'Mac系统Python、PyCharm安装及使用方法详解'
			]
			// '/bar/':[
			// 	'',
			// 	'three',
			// 	'four'
			// ]
		},
	}
}

