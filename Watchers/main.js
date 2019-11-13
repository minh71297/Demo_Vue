// Demo for Watcher 
var app9 = new Vue({
	el: '#app9',
	data: {
		name: 'Tran Tuan Minh', //First name
		kg: 0,
		gram: 0,
	},
	watch: {
		name: function() {
			// alert(this.name); //After changing name, this function is called
		},
		kg: function() {
			this.gram = this.kg ? this.kg * 1000 : 0;
		},
		gram: function() {
			this.kg = this.gram ? this.gram/1000 : 0;
		},
	}
});
app9.name = 'This name has been changed !'; //Change the name
