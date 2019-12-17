<template>
	<div class="left-menu">
		<div class="search-area">
			<el-input placeholder="请输入内容" prefix-icon="el-icon-search">
			</el-input>
		</div>
		<div class="tree-area">
			<el-tree class="filter-tree" :data="data" :default-expanded-keys="[10]" :props="defaultProps" :filter-node-method="filterNode"
			ref="tree" @node-click="nodeClick">
			</el-tree>
		</div>
	</div>
</template>

<script>
	export default {
		watch: {
			filterText(val) {
				this.$refs.tree.filter(val);
			}
		},
		methods: {
			filterNode(value, data) {
				if (!value) return true;
				return data.label.indexOf(value) !== -1;
			},
			nodeClick(node) {
				if (node.hasOwnProperty('path') && node.path) {
					this.$router.push(node.path)
				}
			}
		},
		data() {
			return {
				filterText: '',
				data: [{
					id: 1,
					label: '系统管理',
					children: [{
						id: 4,
						label: '菜单管理',
						children: [{
							id: 9,
							label: '菜单管理'
						}, {
							id: 10,
							label: '角色菜单分配'
						},{
							id: 9,
							label: '系统按钮管理'
						}, {
							id: 10,
							label: '菜单角色批量分配'
						}]
					},{
						id: 4,
						label: '菜单管理',
						children: [{
							id: 9,
							label: '三级 1-1-1'
						}, {
							id: 10,
							label: '三级 1-1-2'
						}]
					},{
						id: 4,
						label: '菜单管理',
						children: [{
							id: 9,
							label: '三级 1-1-1'
						}, {
							id: 10,
							label: '三级 1-1-2'
						}]
					},{
						id: 4,
						label: '菜单管理',
						children: [{
							id: 9,
							label: '三级 1-1-1'
						}, {
							id: 10,
							label: '三级 1-1-2'
						}]
					}]
				}, {
					id: 10,
					label: '数据标准',
					children: [{
						id: 31,
						label: '词根定义',
						path: '/root-definition'
					}, {
						id: 32,
						label: '数据字典定义',
						path: '/data-dictionary'
					}, {
						id: 33,
						label: '元数据定义',
						path: '/unit-data'
					}, {
						id: 34,
						label: '选项代码定义',
						path: '/option-detail'
					}, {
						id: 35,
						label: '响应信息定义',
						path: '/response-message'
					}, {
						id: 36,
						label: '列表结构定义',
						path: '/vocabulary'
					}]
				}, {
					id: 2,
					label: '数据标准',
					children: [{
						id: 5,
						label: '二级 2-1'
					}, {
						id: 6,
						label: '二级 2-2'
					}]
				}, {
					id: 3,
					label: '架构管控',
					children: [{
						id: 7,
						label: '二级 3-1'
					}, {
						id: 8,
						label: '二级 3-2'
					}]
				}, {
					id: 3,
					label: '组件模型',
					children: [{
						id: 7,
						label: '二级 3-1'
					}, {
						id: 8,
						label: '二级 3-2'
					}]
				}, {
					id: 3,
					label: '测试配置',
					children: [{
						id: 7,
						label: '二级 3-1'
					}, {
						id: 8,
						label: '二级 3-2'
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			};
		}
	};
</script>

<style>
	.left-menu {
		height: 100%;
		width: 300px;
		border-right: 1px solid #e8e9ed;
		display: flex;
		flex-direction: column;
	}
	.tree-area {
		flex-grow: 1;
		overflow-y: auto;
	}
	.search-area {
		padding: 6px;
	}
	.tree-area {
		overflow-y: auto;
	}
</style>
