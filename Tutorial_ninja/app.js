// new Vue({
// 	el:"#vue-app",
// 	data: {
// 		name: "Shaun",
// 		age: 27,
// 		x:0,
// 		y:0,
// 		job: "Ninja",
// 		website: 'http://www.thenetninja.co.uk',
// 		websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja</a>'
// 	},
// 	methods: {
// 		greet: function(time){
// 			return 'Good '+time+' '+this.name
// 		},
// 		add: function(inc){
// 			this.age+=inc;
// 		},
// 		subtract: function(dec){
// 			this.age-=dec
// 		},
// 		updateXY:function(event){
// 			console.log(event)
// 			this.x = event.offsetX;
// 			this.y = event.offsetY;
// 		},
// 		click: function(){
// 			alert('You clicked me!')
// 		},
// 		logName: function(){
// 			console.log('you entered your name')
// 		},
// 		logAge: function(){
// 			console.log('you enetered your age')
// 		}
// 	}
// });

//for html starting from twoWayDataBinding
// new Vue({
// 	el:"#vue-app",
// 	data: {
// 		name: "",
// 		age: 20,
// 		a:0,
// 		b:0,
// 		available: false,
// 		nearby:false,
// 		error: false,
// 		success: false
// 	},
// 	methods: {
// 		// addToA: function(){
// 		// 	return this.a + this.age
// 		// },
// 		// addToB: function(){
// 		// 	return this.b +this.age
// 		// }
// 	},
// 	computed: {
// 		addToA: function(){
// 			console.log('Added to a')
// 			return this.a + this.age
// 		},
// 		addToB: function(){
// 			console.log('Added to b')
// 			return this.b +this.age
// 		},
// 		compClasses: function(){
// 			return {
// 				available: this.available,
// 				nearby: this.nearby
// 			}
// 		}
// 	}
// });

//v-for
// new Vue({
// 	el:"#vue-app",
// 	data: {
// 		characters: ['Mario','luigi','Yoshi','Bowser'],
// 		ninjas: [
// 			{name:'Ryu', age:25},
// 			{name:'Yoshi', age:35},
// 			{name:'Ken', age:55}
// 		]
// 	},
// 	methods: {

// 	},
// 	computed: {

// 	}
// });

//punch bag Game
new Vue({
	el:"#vue-app",
	data: {
		health: 100,
		ended: false,
	},
	methods: {
		punch: function(){
			this.health-=10
			if(this.health <=0){
				this.ended = true;
			}
		},
		restart: function(){
			this.health = 100;
			this.ended = false;
		}
	},
	computed: {

	}
});