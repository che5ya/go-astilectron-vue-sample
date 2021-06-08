import Astor  from '@/Astor.js'

export default {
    methods: {
        __trigger: function(name, payload, callback = null) {
            if (callback != null) {
                this.__onCallback(name, callback, true);
            }
            var eventName = this.__getPrivateEventName(name);
            Astor.trigger(eventName, payload);
        },
        __onCallback(name, callback, once = false) {
            this.__listen(name + '.callback', callback, once);
        },
        __listen: function(name, callback, once = false) {
            var eventName = this.__getPrivateEventName(name);
            Astor.listen(eventName, callback, once);
        },
        __remove: function(name, callback) {
            var eventName = this.__getPrivateEventName(name);
            Astor.remove(eventName, callback);
        },
        __getPrivateEventName: function(name) {
            return 'component.' + this._uid + '.' + name;
        },
        __astor: function() {
            return Astor;
        }
    }
}