export default {
    methods: {
        storage: function() {
            var appname = this.appConfig.appname
            return {
                get: function(name) {
                    var key = appname + '.' + name;
                    return JSON.parse(localStorage.getItem(key));
                },
                set: function(name, value) {
                    var key = appname + '.' + name;
                    localStorage.setItem(key, JSON.stringify(value));
                }
            }
        }
    }
}