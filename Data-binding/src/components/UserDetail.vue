<template>
	<div class="component">
		<h3>User Details</h3>
		<p>My age: {{ childage }}</p>
		<button v-on:click="changeAge">Change my age</button>
		<hr>
	</div>
</template>

<script>
	import { eventBus } from '../main'
	export default {
		props: ['childage'],
		methods: {
			changeAge() {
				this.childage = 30
				this.$emit('ageWasUpdated',this.childage)
			}
		},
		 created () {
        	eventBus.$on('ageWasEdited', (age) => {
            this.childage = age
        	})
    	}  
	}
</script>


