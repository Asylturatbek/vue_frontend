new Vue({
	el:"#vue-app",
	data: {
		output: 'Your food yo'
	},
	methods: {
		readRefs: function(){
			console.log(this.$refs)
			console.log(this.$refs.test.innerText)
			console.log(this.$refs.sagyn.value)
			this.output = this.$refs.sagyn.value
		}
	},
	computed: {
		greet: function(){
			return 'Hello from app one'
		}
	}
});
