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

// Instance Demo
var mv1 = new Vue({
    el: '#app2',
    data: {
        replymessage: 'This is a Demo for Instance',
    },
});
 
var mv2 = new Vue({
    el: '#verapp2',
    data: {
        newreplymessage: 'A new message is incoming !!!',
    },
});

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

// v-if Demo
var app5 = new Vue({
	el: '#app5',
	data: {
		user: 'Hassan Djirdeh',
 		city: 'Toronto',
	},
	methods: {
		changeCity() {
			if (this.city === 'Toronto') {
				this.city = 'Lagos';
			} else {
				this.city = 'Toronto';
				}
			}
	},
});

// v-for Demo
var app6 = new Vue({
	el: "#app6",
	data: {
		numbers: [1, 10, 100, 1000, 10000],
		books: [
			{id: 1, name: 'LifeofPi'},
			{id: 2, name: 'HelloWorld'},
			{id: 3, name: 'Gumball'}
		],
	},
	methods: {

	},
});

// v-model Demo
var app7 = new Vue({
	el: "#app7",
	data: {
		message: null,
		checked: false,
		foodordered: [],
		foodchecked: null,
		selected: '',
	},
	methods: {

	},
});

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

const tweets = [
	{
	 id: 1,
	 name: 'James',
	 handle: '@jokerjames',
	 img: './images/james.png',
	 tweet: "If you don't succeed, dust yourself off...",
	 likes: 10,
	},
	{
	 id: 2,
	 name: 'Fatima',
	 handle: '@fantasticfatima',
	 img: './images/fatima.png',
	 tweet: 'Better late than never but never late...',
	 likes: 12,
	},
	{
	 id: 3,
	 name: 'Xin',
	 handle: '@xeroxin',
	 img: './images/xin.png',
	 tweet: 'Beauty in the struggle...',
	 likes: 18,
	}
]

Vue.component('tweetcomponent', {
 	template: 
 	`		
			<div class="box">
				<article class="media">
					<div class="media-left">
						<figure class="image is-64x64">
							<img :src="tweet.img">
						</figure>
					</div>
					<div class="media-content">
						<div class="content">
							<p>
								<strong>{{tweet.name}}</strong>
								<small>{{tweet.handle}}</small>
								<br> {{tweet.tweet}}
							</p>
						</div>
						<div class="level-left">
							<a class="level-item">
								<span class="icon is-small">
									<i class="fas fa-heart"></i>
								</span>
								<span class="likes">
									{{tweet.likes}}
								</span>
							</a>
						</div>
					</div>
				</article>
			</div>
			<div class="control has-icon-left">
				<input class="input is-small" placeholder="Tweet your reply...">
				<span class="icon is-small is-left">
					<i class="fas fa-envelope"></i>
				</span>
			</div>
	`,
	props: ['tweets'],
 });

var app10 = new Vue({
	el: '#app10',
	data: {
		tweets
	},
});
 
