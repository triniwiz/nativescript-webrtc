<template>
	<Page>
		<GridLayout rows="*,*,*">
			<WebRTCView @loaded="remoteLoaded" row="0" ref="remoteVideoView"></WebRTCView>
			<GridLayout verticalAlignment="center" horizontalAlignment="center" row="1" rows="auto,auto,auto"
						columns="auto,auto,auto">
				<Button @tap="makeCall" row="0" col="1" text="Call"/>
				<Button row="1" col="0" text="Switch"/>
				<Button row="1" col="2" text="Mute"/>
				<Button @tap="endCall" row="2" col="1" text="End"/>
			</GridLayout>
			<WebRTCView @loaded="localLoaded" row="2" ref="localVideoView"></WebRTCView>
		</GridLayout>
	</Page>
</template>

<script>
	import { StandardService } from '../services/standard';
	let service;
	export default {
		computed: {
			standardService: function () {
				return service;
			}
		},
		mounted() {
			service = new StandardService();
			this.standardService.init();
		},
		methods: {
			makeCall(event) {
				this.standardService.makeCall(event);
			},
			endCall(event) {
				this.standardService.endCall(event);
			},
			remoteLoaded(event) {
				this.standardService.remoteView = event.object;
			}, localLoaded(event) {
				this.standardService.localView = event.object;
				this.standardService.localView.mirror = true;
			}

		}
	};
</script>
