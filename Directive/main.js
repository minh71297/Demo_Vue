// Directive Demo
var app3 = new Vue({
	el: '#app3',
	data: {
		variableA: 5,
		variableB: 6,
		sum: 0,
		alertmessage: 'Double click to change this !',
		mousedown: 'Click here',
		mousemove: 'Move your mouse now :>',
		textbox: '',
	},
	methods: {
		caculate() {
			this.sum = this.variableA + this.variableB;
		},
		alertMessage() {
			this.alertmessage = this.alertmessage === 'Double click to change this !' ? 'Testing the dblclick' : 'Double click to change this !';
		},
		mouseDown() {
			this.mousedown = 'Hey! YOU DID IT :D';
		},
		mouseMove() {
			this.mousemove = 'Congrats!';
		},
		keyPress() {
			this.textbox = 'You typed something !';
		}
	},
	// watch: {
	// 	sum: function(){
	// 		this.variableA = 20;
	// 	}
	// }
});