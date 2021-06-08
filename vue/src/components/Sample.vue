<template>
    <div class="Sample">
        <div><button @click="btn1Click">Click me</button></div>
        <div>{{message}}</div>
        <div><button @click="btn2Click">Or Click me</button></div>
    </div>
</template>

<script>
import Astor  from '@/mixins/Astor.js'

export default {
    name: 'sample',
    mixins: [Astor],
    props: ['device'],
    data: function() {
        return {
            message: 'Sample',
        }
    },
    methods: {
        changeText: function(payload) {
            console.log("changeText")
            this.message = payload.data
        },
        btn1Click: function() {
            this.__trigger('sample.message3', {data: "btn1 clicked"}, this.changeText)
        },
        btn2Click: function() {
            this.__astor().trigger('sample.message3', {data: "btn2 clicked"})
        }
    },
    mounted: function() {
        console.log(this.appConfig.appname);
        this.__astor().listen('sample.message3.callback', this.changeText);
    }
}
</script>

<style scoped lang="scss">
    @import "~@/styles/components/_Sample.scss";
</style>