
const menusData = [
	{
		title: '测试页面',
		icon: 'icon iconfont icon-zujian',
		dep: 2,
		children: [
			{
				title: '绘图',
				icon: 'el-icon-edit',
				path: '/home/test/'
			},
			{
				title: '树状图',
				icon: 'el-icon-edit',
				path: '/home/treeData/'
			},
			{
				title: '力',
				icon: 'el-icon-edit',
				path: '/home/power/'
			},
			{
				title: '画布',
				icon: 'el-icon-edit',
				path: '/home/canvas/'
			},
			{
				title: '动画',
				icon: 'el-icon-edit',
				path: '/home/animation/'
			},
			{
				title: 'css',
				icon: 'el-icon-edit',
				path: '/home/css/'
			},
			{
				title: 'pseudo',
				icon: 'el-icon-edit',
				path: '/home/pseudo/'
			},
			{
				title: 'phone',
				icon: 'el-icon-edit',
				path: '/home/phone/'
			},
			{
				title: 'hover',
				icon: 'el-icon-edit',
				path: '/home/hover/'
			}
		]
	},
	{
		title: '系统管理',
		icon: 'icon iconfont icon-xitong-',
		dep: 3,
		children: [
			{
				title: '菜单管理',
				icon: 'icon iconfont icon-menu',
				children: [
					{
						title: '菜单管理',
						icon: 'el-icon-edit',
						path: ''
					},
					{
						title: '角色菜单分配',
						icon: 'el-icon-edit',
						path: ''
					},
					{
						title: '角色菜单分配',
						icon: 'el-icon-edit',
						path: ''
					}
				]
			},
			{
				title: '用户管理',
				icon: 'icon iconfont icon-yonghu1',
				children: [
					{
						title: '用户管理',
						icon: 'el-icon-edit',
						path: ''
					},
					{
						title: '角色管理',
						icon: 'el-icon-edit',
						path: ''
					},
					{
						title: '角色用户分配',
						icon: 'el-icon-edit',
						path: ''
					},
					{
						title: '角色与子系统关系',
						icon: 'el-icon-edit',
						path: ''
					}
				]
			},
			{
				title: '系统参数',
				icon: 'icon iconfont icon-shezhi',
				children: [
					{
						title: '参数管理',
						icon: 'el-icon-edit',
						path: ''
					},
					{
						title: 'excel模板',
						icon: 'el-icon-edit',
						path: ''
					}
				]
			},
			{
				title: '日志查询',
				icon: 'icon iconfont icon-rizhi',
				children: [
					{
						title: '操作日志查询',
						icon: 'el-icon-edit',
						path: ''
					}
				]
			}
		]
	},
	{
		title: '数据标准',
		icon: 'icon iconfont icon-biaozhun',
		dep: 2,
		children: [
			{
				title: '元数据定义',
				icon: 'el-icon-edit',
				path: ''
			},
			{
				title: '数据字典定义',
				icon: 'el-icon-edit',
				path: ''
			},
			{
				title: '词根定义',
				icon: 'el-icon-edit',
				path: ''
			},
			{
				title: '选项明细定义',
				icon: 'el-icon-edit',
				path: ''
			}
		]
	},
	{
		title: '数据模型',
		icon: 'icon iconfont icon-chanpinmoxing',
		dep: 2,
		children: [
			{
				title: '数据表维护',
				icon: 'el-icon-edit',
				path: ''
			},
			{
				title: '数据表维护新',
				icon: 'el-icon-edit',
				path: ''
			}
		]
	},
	{
		title: '架构管控',
		icon: 'icon iconfont icon-shangwutubiao-',
		dep: 2,
		children: [
			{
				title: '系统定义',
				icon: 'el-icon-edit',
				path: ''
			},
			{
				title: '子系统定义',
				icon: 'el-icon-edit',
				path: ''
			},
			{
				title: '接口标准',
				icon: 'el-icon-edit',
				path: ''
			}
		]
	},
	{
		title: '组件管理',
		icon: 'icon iconfont icon-zujian',
		dep: 2,
		children: [
			{
				title: '子域模块',
				icon: 'el-icon-edit',
				path: ''
			},
			{
				title: '交易组件',
				icon: 'el-icon-edit',
				path: ''
			},
			{
				title: '服务组件',
				icon: 'el-icon-edit',
				path: ''
			},
			{
				title: '单元组件',
				icon: 'el-icon-edit',
				path: ''
			},
			{
				title: '函数组件',
				icon: 'el-icon-edit',
				path: ''
			},
			{
				title: '批量组件',
				icon: 'el-icon-edit',
				path: ''
			}
		]
	}
]

export default menusData
