// First Demo
var app = new Vue({
	el: '#app',
	data: {
		message: 'This is First Demo',
	},
	methods: {
		showMessage : function(){
            return  "[" + this.message + "]";
        }
	}
});