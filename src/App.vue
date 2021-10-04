<template>
    <div id="app" class="d-flex h-100 flex-column">
        <popup v-if="showPopup" />
        <router-view />
    </div>
</template>

<script>
import popup from "@/components/popup/popup";
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["getShowPopup"]),
        showPopup: function () {
            return this.getShowPopup
        },
    },
    components: {
        popup,
    },
};
</script>

<style lang="scss">
@import "@/assets/scss/_global.scss";
html,
body {
    height: 100%;
    margin: 0;
    background-color: #f5f6f8;
}

#app {
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #707683;
}
</style>
