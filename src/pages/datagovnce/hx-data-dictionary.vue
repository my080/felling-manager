<template>
	<div>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm search-form">
			<div class="search-row">
				<el-form-item class="form-item" label="系统" prop="name">
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in systems" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item class="form-item" label="子系统" prop="name">
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in systems" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item class="form-item" label="数据标准" prop="name">
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in dataOptions" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
			</div>
			<div class="search-row">
				<el-form-item class="form-item" label="英文词根" prop="name">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item class="form-item" label="中文词根" prop="name">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item class="form-item" label="英文全称" prop="name">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
			</div>
			<div class="search-row">
				<el-form-item class="form-item" label="创建人" prop="name">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
			</div>
			<div class="search-row">
				<el-form-item class="form-item" prop="name">
					<el-button size="small" type="primary">搜索</el-button>
					<el-button size="small">重置</el-button>
				</el-form-item>
			</div>
		</el-form>
		<el-table :data="tableData" @row-dblclick='rowDbClick' border style="width: 100%">
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination class="pager" background layout="prev, pager, next" :total="1000">
		</el-pagination>

		<hx-data-dictionary-operate ref="dataDictionaryOperate"></hx-data-dictionary-operate>
	</div>
</template>

<script>
	import DataDictionaryOperate from './components/data-dictionay/hx-data-dictionary-operate.vue'

	export default {
		components: {
			'hx-data-dictionary-operate': DataDictionaryOperate
		},
		data() {
			return {
				dataDictionaryOperate: null,
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
				ruleForm: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				dataOptions: [{
					value: '1',
					label: '企业级'
				}, {
					value: '2',
					label: '住建部'
				}, {
					value: '3',
					label: '应用级'
				}, {
					value: '4',
					label: '自定义'
				}],
				systems: [{
					value: '1',
					label: '工艺平台'
				}, {
					value: '2',
					label: '业务平台'
				}],
				rules: {
					name: [{
							required: true,
							message: '请输入活动名称',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 5,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						}
					],
					region: [{
						required: true,
						message: '请选择活动区域',
						trigger: 'change'
					}],
					date1: [{
						type: 'date',
						required: true,
						message: '请选择日期',
						trigger: 'change'
					}],
					date2: [{
						type: 'date',
						required: true,
						message: '请选择时间',
						trigger: 'change'
					}],
					type: [{
						type: 'array',
						required: true,
						message: '请至少选择一个活动性质',
						trigger: 'change'
					}],
					resource: [{
						required: true,
						message: '请选择活动资源',
						trigger: 'change'
					}],
					desc: [{
						required: true,
						message: '请填写活动形式',
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			rowDbClick() {
				this.dataDictionaryOperate.show()
			},
			init() {
				this.dataDictionaryOperate = this.$refs.dataDictionaryOperate
			},
			handleEdit() {
				this.$notify({
					title: '提示',
					message: '这是一个通知效果！',
					duration: 0
				});
			},
			handleDelete() {
				this.$message({
					message: '看一下删除效果！',
					type: 'success'
				});
			}
		},
		mounted() {
			this.init()
		}
	}
</script>

<style>
	.search-row {
		display: flex;
	}

	.pager {
		margin-top: 10px;
		text-align: right;
	}
</style>
