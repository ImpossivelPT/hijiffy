<template>
    <span class="searchBoxWrapper">
        <img class="searchIcon" src="@/assets/icons/search-solid.svg" />
        <input-text class="inputSearch" placeHolder="Global Search"/>
    </span>
</template>

<script>
import inputText from '@/components/global/inputText'
export default {
    name: 'searchBox',
    data: function() {
        return {
        }
    },
    components: {
        inputText
    }
}
</script>

<style lang="scss" scoped>
.searchBoxWrapper{

    .searchIcon{
        height: 20px;
    }

    .inputSearch{
        margin-left: 15px;
    }
}
</style>
