<template>
    <div class="popupWrapper d-flex align-items-center justify-content-center" @click.stop.self="close">
        <div class="popupWindow">
            <popup-header :title="popupTitle" @close="close()"/>
            <component v-if="popupBodyComponent" :is="popupBodyComponent"></component>
        </div>
    </div>
</template>

<script>
import popupHeader from './popupHeader.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'popup',
    data: function() {
        return {}
    },
    computed: {
        ...mapGetters([
            'getPopupObj'
        ]),
        popupTitle: function () {
            return (this.getPopupObj && this.getPopupObj.title)? this.getPopupObj.title : null
        },
        popupBodyComponent: function () {
            return (this.getPopupObj && this.getPopupObj.bodyComponent)? this.getPopupObj.bodyComponent : false
        }
    },
    methods: {
        ...mapActions([
            'closePopup'
        ]),
        close: function () {
            this.closePopup()
        }
    },
    components: {
        popupHeader
    }
}
</script>

<style lang="scss" scoped>
.popupWrapper{
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(16, 156, 241, 0.25);

    .popupWindow{
        background-color: #FFF;
        min-width: 326px;
        min-height: 500px;
        border-radius: 8px;
        padding: 18px;
    }
}
</style>
