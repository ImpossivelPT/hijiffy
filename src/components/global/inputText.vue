<template>
    <input class="inputText" type="text" :placeholder="placeHolder" />
</template>

<script>
export default {
    name: 'inputText',
    props: {
        placeHolder: {
            type: String
        }
    },
    data: function() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.inputText{
    border: none;
    width: 100%;
    &:active,
    &:focus{
        border: none;
        outline: none;
    }
}
</style>
