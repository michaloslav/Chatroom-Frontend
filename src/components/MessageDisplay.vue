<template lang="pug">
	.MessageDisplay(:class="{fromUser}")
		span.username {{message.username}}
		div(@click="toggleShowTime")
			.message {{message.text}}
			transition(name="slide")
				div.time(v-if="showTime")
					span {{localeTime}}
</template>

<script>
export default {
	name: "MessageDisplay",
	data: () => ({
		showTime: false,
	}),
	props: {
		message: Object
	},
	computed: {
		fromUser(){
			return this.message.username === this.$store.state.username
		},
		localeTime(){
			return this.message.time.toLocaleTimeString()
		},
	},
	methods: {
		toggleShowTime(){
			this.showTime = !this.showTime
		},
	},
}
</script>

<style lang="sass">
	.MessageDisplay
		margin: .5rem
		width: calc(100% - 1rem)

		&:not(:last-child)
			margin-bottom: 1.5rem

		.username
			font-size: .85rem

		.message
			min-height: 1.5rem
			min-width: 3rem
			max-width: 85vw
			display: inline-block
			padding: .5rem .75rem
			border-radius: 1rem
			margin-top: .25rem
			cursor: pointer

		&.fromUser
			float: right
			text-align: right

			.message
				background-color: #64c1ff
				color: white

		&:not(.fromUser) .message
			background-color: #e6e6e6
	
	.time
		overflow: hidden
	
	.slide-enter-active,
	.slide-leave-active
		transition: height .25s cubic-bezier(.75, .2, .2, .75)

	.slide-enter,
	.slide-leave-to
		height: 0

	.slide-leave,
	.slide-enter-to
		height: 1rem
</style>
