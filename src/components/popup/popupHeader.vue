<template>
    <div class="popupHeader d-flex justify-content-between">
        <div>{{title}}</div>
        <img @click="clickClose()" class="closeIcon pointer" src="@/assets/icons/times-solid.svg" alt="Close">
    </div>
</template>

<script>
export default {
    name: 'popupHeader',
    props:{
        title:{
            type: String
        }
    },
    data: function() {
        return {}
    },
    computed: {
    },
    methods: {
        clickClose: function () {
            this.$emit('close')
        }
    },
    components: {
    }
}
</script>

<style lang="scss" scoped>
.popupWrapper{
    .closeIcon{
        height: 22px;
    }
}
</style>
