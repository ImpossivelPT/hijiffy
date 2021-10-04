<template>
    <button class="clickButton">{{btnLabel}}</button>
</template>

<script>
export default {
    name: 'clickButton',
    props:{
        label:{
            type: String
        }
    },
    data: function() {
        return {
        }
    },
    computed:{
        btnLabel: function() {
            return this.label? this.label : 'Click Button'
        }
    }
}
</script>

<style lang="scss" scoped>
.clickButton{
    color: #FFF;
    background-color: #109cf1;
    border: none;
    border-radius: 5px;
    padding: 9px 39px;
    -webkit-box-shadow: 5px 5px 16px -4px rgba(16,156,241,0.67); 
    box-shadow: 5px 5px 16px -4px rgba(16,156,241,0.67);
}
</style>