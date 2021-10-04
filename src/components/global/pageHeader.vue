<template>
    <div class="pageHeader d-flex flex-row align-items-center justify-content-between">
        <img class="logo" src="@/assets/images/global/logo.png" alt="HiJiffy Logo" />
        <searchBox class="searchWrapper d-flex flex-grow-1" />
        <notification-bell />
        <avatar class="headerAvatar" :image="user.photo" :height="'46px'" :width="'46px'" :shape="'circle'"/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import searchBox from '@/components/global/searchBox'
import notificationBell from '@/components/global/notificationBell'
import avatar from '@/components/global/avatar'

export default {
    name: 'pageHeader',
    data: function() {
        return {}
    },
    computed: {
        ...mapGetters([
            'getCurrentUser'
        ]),
        user: function() {
            return this.getCurrentUser
        }
    },
    components: {
        searchBox,
        notificationBell,
        avatar
    }
}
</script>

<style lang="scss" scoped>
.pageHeader {
    padding: 7px 38px;
    background-color: #FFF;
    flex: 0 1 auto;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(149,149,149,0.27); 
    box-shadow: 0px 0px 15px 0px rgba(149,149,149,0.27);
    z-index: 2;

    .logo{
        height: 18px;
        margin-right: 80px;
    }

    .headerAvatar{
        margin-left: 48px;
    }
}
</style>
