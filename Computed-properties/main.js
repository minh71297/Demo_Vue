// Demo for methods and computed properties
var app8 = new Vue({
	el: '#app8',
	data: {
		name: 'Tran Tuan Minh'  //First value
	},
	computed: {
		convertToUpper: {
			get: function(){
				return this.name.toUpperCase();
			},
			set: function(name){
				this.name = name;
			}
		}
	},
});
app8.convertToUpper = 'My name is not Minh'; // Set another value for "name"
