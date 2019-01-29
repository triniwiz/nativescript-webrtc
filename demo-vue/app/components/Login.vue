<template>
  <Page>
    <GridLayout rows="*,auto,auto,*">
      <TextField margin="0 20 10 20" row="1" hint="UserName" :text="username"/>
      <Button margin="0 20" row="2" text="Enter" @tap="login"/>
    </GridLayout>
  </Page>
</template>

    <script>
    import SocketService from '../services/basic'
    import * as settings from 'tns-core-modules/application-settings';
export default {
  data() {
    return {
      username: ""
    };
  },
  computed:{
      socket: function(){
          return SocketService.getInstance();
      }
  },mounted() {
      this.socket.connect();
  },
  methods: {
    login(event) {
      this.socket.emit("add user", {
        username: this.username
      });
      settings.setString("me", this.username);
    }
  }
};
</script>
