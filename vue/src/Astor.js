import Vue from 'vue';
/* eslint-disable */
const Astor = {
    eventBus: new Vue(),
    init: function() {
        this.log('init');
        document.addEventListener('astilectron-ready', this.onAstilectronReady.bind(this));
    },
    onAstilectronReady: function() {
        this.log('astilectron is ready');
        astilectron.onMessage(this.onAstilectronMessage.bind(this));
    },
    onAstilectronMessage: function(message) {
        if (message) {
            this.log('GO -> Vue', message);
            this.emit(message.name, message.payload);
        }
    },
    trigger: function(name, payload = {}) {
        this.log('trigger', {name: name, payload: payload});
        astilectron.sendMessage({name: name, payload: payload}, this.onAstilectronMessage.bind(this));
    },
    emit: function(name, payload = {}) {
        this.log('emit', {name: name, payload: payload});
        this.eventBus.$emit(name, payload);
    },
    listen: function(name, callback, once = false) {
        if (once) {
            this.log('listen once', {name: name, callback: callback});
            this.eventBus.$once(name, callback);
        } else {
            this.log('listen', {name: name, callback: callback});
            this.eventBus.$on(name, callback);
        }
    },
    remove: function(name, callback) {
        this.eventBus.$off(name, callback);
    },
    log: function (message, data) {
        if (data) {
            console.log('ASTOR| ' + message, data);
        } else {
            console.log('ASTOR| ' + message);
        }
    }
}

export default Astor;