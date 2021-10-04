<template>
    <div class="paginationWrapper">
        <img @click="clickPrevious()" class="arrowImg" :class="{'off':currentPage == 1}" src="@/assets/icons/chevron-left-solid.svg" alt="Arrow Left">
        <span @click="clickPrevious()" class="prevBtn" :class="{'off':currentPage == 1}">Prev</span>
        <span @click="goToPage(page)" class="pageNr" :class="{'selected':page == currentPage}"  v-for="page in totalPagesCalculated" :key="page">{{page}}</span>
        <span @click="clickNext()" class="nextBtn" :class="{'off':currentPage == totalPagesCalculated}">Next</span>
        <img @click="clickNext()" class="arrowImg" :class="{'off':currentPage == totalPagesCalculated}" src="@/assets/icons/chevron-right-solid.svg" alt="Arrow Right">
    </div>
</template>

<script>
export default {
    name: 'pagination',
    props:{
        currentPage: {
            type: Number,
            default: 1
        },
        totalPages: {
            type: Number
        },
        totalItems: {
            type: Number,
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 1
        },
    },
    data: function() {
        return {}
    },
    computed: {
        totalPagesCalculated: function () {
            if(this.totalPages){
                return this.totalPages
            } else {
                return Math.ceil(this.totalItems / this.itemsPerPage)
            }
        }
    },
    methods: {
        clickNext: function () {
            if(this.currentPage < this.totalPagesCalculated){
                this.$emit('nextPage')
            }
        },
        clickPrevious: function () {
            if(this.currentPage > 1){
                this.$emit('previousPage')
            }
        },
        goToPage: function (pageNr) {
            this.$emit('goToPage', pageNr)
        }
    }
}
</script>

<style lang="scss" scoped>
.paginationWrapper{
    .arrowImg{
        height: 20px;

    }
    
    .off{
        opacity: 0.4;
    }

    span, img{
        margin: 0 5px;
        cursor: pointer;
    }

    .pageNr{
        &.selected{
            color: #109cf1;
        }
    }
}
</style>
