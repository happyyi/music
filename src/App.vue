<template>
    <div id="app">
        <m-header></m-header>
        <tab></tab>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import Tab from 'components/tab/tab'
    import MHeader from 'components/m-header/m-header'
    export default {
        name: 'app',
        components: {Tab, MHeader}
    }
</script>

<style>

</style>
