// Lifecycle Hook Demo
var app = new Vue({
	el: '#app',
	data() {
		return {
	      property: 'Blank'
		}
	},
	beforeCreate() {
		console.log('beforeCreate Hook')
		alert('beforeCreate Hook')
	},
	computed: {
    propertyComputed() {
      console.log('I change when this.property changes.');
      return this.property;
    	}
 	},
	created() {
		this.property = 'Example property update.';
    	console.log('propertyComputed will update, as this.property is now reactive.');
	},
	beforeMount() {
		console.log(`this.$el doesn't exist yet, but it will soon!`)
	},
	mounted() {
		console.log(this.$el.textContent)
	},
});

var app2 = new Vue({
	el: '#app2',
	data() {
	    return {
	      counter: 0
	  }
    },
	beforeUpdate() {
		console.log(this.counter) // Logs the counter value every second, before the DOM updates.
	},
	updated() {
		// Fired every second, should always be true
    	console.log(+this.$refs['dom-element'].textContent === this.counter)
	},
	// created() {
	//     setInterval(() => {
	//       this.counter++
	//     }, 2000)
 //  	}
});

	// beforeDestroy() {

	// },
	// destroyed() {},