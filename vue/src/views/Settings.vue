<template>
  <div id="settings-view">
    <div class="title">Settings</div>
    <div><button @click="onBtnClick">Click me</button></div>
    <div>{{message}}</div>
  </div>
</template>

<script>
import Astor  from '@/mixins/Astor.js'
import Activator  from '@/mixins/Activator.js'

export default {
  name: 'settings',
  mixins: [Astor, Activator],
  data() {
    return {
      message: "This is the settings page"
    }
  },
  methods: {
    onSampleMessage2: function(payload) {
      console.log("onSampleMessage2")
      this.message = this.message + ' - ' + payload
    },
    onSampleMessage3: function(payload) {
      console.log("onSampleMessage3")
      this.message = this.message + ' - ' + payload.data
    },
    onBtnClick: function() {
      this.__trigger('sample.message3', {data: "btn clicked"}, this.onSampleMessage3)
    }
  },
  mounted: function() {
    this.__astor().listen('sample.message2', this.onSampleMessage2);
  }
}
</script>

<style scoped lang="scss">
    @import "~@/styles/views/_SettingsView.scss";
</style>
