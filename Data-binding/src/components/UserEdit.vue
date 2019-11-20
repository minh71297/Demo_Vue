<template>
	<div class="component">
		<h3>Edit User</h3>
		<p>My age is: {{ editage }}</p>
		<button @click="editAge">Edit age</button>
	</div>
</template>

<script>
	import { eventBus } from '../main'
	export default {
		props: ['editage'],
		methods: {
			editAge () {
				this.editage += 1
				// this.$emit('ageWasEdited', this.editage)
				eventBus.$emit('ageWasEdited', this.editage)
			}
		}
	}
</script>