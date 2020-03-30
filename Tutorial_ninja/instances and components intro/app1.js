Vue.component('greeting', {
	template: '<p> Hey there, I am {{name}} . <button v-on:click="changeName">Change name</button> </p>',
	data: function(){
		return {
			name: 'Yoshi'
		}
	},
	methods: {
		changeName: function(){
			this.name = 'Mario';
		}
	}
})

var one = new Vue({
	el:"#vue-app-one",
	data: {
		title: 'Vue app One'
	},
	methods: {

	},
	computed: {
		greet: function(){
			return 'Hello from app one'
		}
	}
});

var two = new Vue({
	el:"#vue-app-two",
	data: {
		title: 'Vue app two'
	},
	methods: {
		changeTitle: function(){
			one.title = 'Title changed!'
		}
	},
	computed: {
		greet: function(){
			return 'Yo dudes this is app two speaking to you'
		}
	}
});