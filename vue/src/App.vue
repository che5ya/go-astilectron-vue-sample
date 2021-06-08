<template>
<div>
    <div id="header">
      <div id="headnav">&nbsp;</div>
    <span>{{title}}</span>
    </div>
    
    <div id="navigation">
        <MainIcon title="" v-tooltip.right="'Main'" class="navicon" v-bind:class="[activeView ===  'main'  ? 'navicon-active' : 'navicon-inactive' ]" @click="setActiveView('main')"/>
        <SettingsIcon title="" v-tooltip.right="'Settings'" class="navicon" v-bind:class="[activeView === 'settings' ? 'navicon-active' : 'navicon-inactive' ]" @click="setActiveView('settings')"/>
    </div>

    <div id="main">
        <MainView v-show="activeView === 'main'"></MainView>
        <SettingsView v-show="activeView === 'settings'"></SettingsView>
    </div>
</div>
</template>

<script>
import Astor  from '@/mixins/Astor.js'
import Storage  from '@/mixins/Storage.js'

import MainIcon from 'vue-material-design-icons/Palette.vue'
import SettingsIcon from 'vue-material-design-icons/Settings.vue'

import MainView from '@/views/Main'
import SettingsView from '@/views/Settings'


export default {
  name: 'app',
  mixins: [Astor, Storage],
  components: {
    MainView,
    SettingsView,
    SettingsIcon,
    MainIcon,
  },
  data () {
      return { 
          activeView: 'settings',

      }
  },
  methods: {
    /**
     * change the actove view
     */
    setActiveView: function (view) {
      this.activeView = view;
    },
  },
  mounted: function() {   
    /**
     * Timining problem: use nextTick emit view activated event on start up.
     */
    this.$nextTick(() => {
      this.__astor().emit('view.' + this.activeView + '.activated');
    });

    var activeView = this.storage().get('activeView');
    if(activeView) {
      this.activeView = activeView;
    }
  },
  watch: {
    /**
     * if activeView change then send cutom events
     * for view activated and deactivated
     */
    activeView: function (val) {
      var activeView = this.storage().get('activeView');
      if(activeView) {
        this.__astor().emit('view.' + activeView + '.deactivated');
      }

      this.storage().set('activeView', val);
      this.__astor().emit('view.' + val + '.activated');
    }
  }
}
</script>

<style lang="scss">
  @import "~@/styles/_App.scss";
</style>
