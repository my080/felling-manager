const DataDictionary = r => require.ensure([], () => r(require('@/pages/datagovnce/hx-data-dictionary.vue')),
	'data-dictionary')
const OptionDetail = r => require.ensure([], () => r(require('@/pages/datagovnce/hx-option-detail.vue')),
	'option-detail')
const ResponseMessage = r => require.ensure([], () => r(require('@/pages/datagovnce/hx-response-message.vue')),
	'response-message')
const RootDefinition = r => require.ensure([], () => r(require('@/pages/datagovnce/hx-root-definition.vue')),
	'root-definition')
const UnitData = r => require.ensure([], () => r(require('@/pages/datagovnce/hx-unit-data.vue')), 'unit-data')
const Vocabulary = r => require.ensure([], () => r(require('@/pages/datagovnce/hx-vocabulary.vue')), 'vocabulary')

const dataRoutes = [{
		'path': '/data-dictionary',
		'name': 'data-dictionary',
		'component': DataDictionary
	},
	{
		'path': '/option-detail',
		'name': 'option-detail',
		'component': OptionDetail
	},
	{
		'path': '/response-message',
		'name': 'response-message',
		'component': ResponseMessage
	},
	{
		'path': '/root-definition',
		'name': 'root-definition',
		'component': RootDefinition
	},
	{
		'path': '/unit-data',
		'name': 'unit-data',
		'component': UnitData
	},
	{
		'path': '/vocabulary',
		'name': 'vocabulary',
		'component': Vocabulary
	}
]

export default dataRoutes
