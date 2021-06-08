export default {
    methods: {
        getView: function() {
            return this.$options.name;
        },
    },
    mounted: function() {
        // if callback definend then listen event
        if (this.onViewActivated) {
            this.__astor().listen('view.' + this.getView() + '.activated', this.onViewActivated);
        }
        
        // if callback definend then listen event
        if (this.onViewDeactivated) {
            this.__astor().listen('view.' + this.getView() + '.deactivated', this.onViewDeactivated);
        }
    }
}