// V-Bind Demo
var app4 = new Vue({
	el: '#app4',
	data: {
		message: 'Test of v-bind',
		// Truyen class kieu Object
		isActive: true,
		// Truyen class kieu Object trong data
		showClass : {
            "active" : true
            },
        // Truyen class kieu mang
		activeClass: "active",
		errorClass: "error",
		// Truyen style kieu Object
		activeColor: 'blue',
		fontSize: 35,
		// Thay doi kieu truyen style
		styleObject: {
        color: 'blue',
        fontSize: '35px',
		fontWeight: 'bold',
   		},
   		// Truyen style kieu array
   		addActive: {
       	"background" : "blue",
       	"font-size" : "20px"
   		},
   		addError : {
       	"color" : "red",
   		}
	},
	methods: {
		changeClass() {
			if (this.isActive === true)
			this.isActive = false
			else this.isActive = true;
		}
	},
});