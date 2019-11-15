Vue.component('button-counter', {
  data: function () {
    return {
      count: 0,
      time: 'time'
    }
  },
  methods: {
  	changetext() {
  		this.count++;
  		if (this.count > 1) {
  			this.time = 'times';
  		}
  		return this.time;
  	}
  },
  template: 
		'<button v-on:click="changetext" >You have clicked {{ count }} {{ time }}.</button>'
  
})

var app = new Vue({
	el: '#app',
})

Vue.component('blog-post', {
	props: ['title'],
	template: '<h3>This is the title: {{title}}</h3>'
})

var app = new Vue({
	el: '#app2',
})