<template>
	<Page>
		<ActionBar title="Welcome to NativeScript-Vue WebRTC!"/>
		<StackLayout>
			<Button text="Basic WebRTC" @tap="toBasic"/>
			<Button text="Standard WebRTC" @tap="toStandard"/>
		</StackLayout>
	</Page>
</template>

<script>
	import Standard from './Standard'
	import Login from './Login'
    export default {
        methods: {
            toBasic(event) {
				this.$navigateTo(Login)
            },
            toStandard(event) {
                this.$navigateTo(Standard)
            }
        }
    };
</script>

<style scoped>
	ActionBar {
		background-color: #53ba82;
		color: #ffffff;
	}
</style>
