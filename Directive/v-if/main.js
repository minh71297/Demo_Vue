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