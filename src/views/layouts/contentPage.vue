<template>
    <div class="contentPage d-flex flex-column h-100">
        <page-header />
        <router-view class="content flex-fill"/>
        <page-footer />
    </div>
</template>

<script>

import pageHeader from '@/components/global/pageHeader';
import pageFooter from '@/components/global/pageFooter';

export default {
    name: 'contentPage',
    components: {
        pageHeader,
        pageFooter
    }
}
</script>

<style lang="scss" scoped>
.contentPage{
    background:#F5F6F8;

}
</style>