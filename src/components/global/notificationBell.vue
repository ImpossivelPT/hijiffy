<template>
    <span class="notificaionBellWrapper">
        <img class="bellIcon" src="@/assets/icons/bell-regular.svg" />
        <span class="indicator"></span>
    </span>
</template>

<script>
export default {
    name: 'notificationBell',
    data: function() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.notificaionBellWrapper{
    position: relative;
    
    .bellIcon{
        height: 23px;
    }

    .indicator{
        position: absolute;
        background-color: #f7685b;
        height: 9px;
        width: 9px;
        border: 1px solid #FFF;
        border-radius: 50%;
        right: 1px;
        top: 1px;    
    }
}
</style>
