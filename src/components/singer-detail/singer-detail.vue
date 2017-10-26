<template>
    <transition name="slide">
        <div class="singer-detail">

        </div>
    </transition>

</template>
<script>
    import { mapGetters } from 'vuex'
    import { getSingerDetail } from 'api/singer'
    import { ERR_OK } from 'api/config'
    export default{
        computed: {
            ...mapGetters([
                'singer'
            ])
        },
        created() {
            console.log(this.singer)
            this._getSingerDetail(this.singer)
        },
        methods: {
            _getSingerDetail(singer) {
                if (!singer.id) {
                    this.$router.push('/singer')
                    return
                }
                getSingerDetail(singer.id).then((res) => {
                    if (res.code === ERR_OK) {
                        console.log(res.data)
                    }
                })
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    .singer-detail
        position: fixed
        left: 0
        top: 0
        right: 0
        bottom: 0
        z-index: 100
        background-color: $color-background

    .slide-enter-active, .slide-leave-active
        transition: all 0.3s

    .slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)
</style>
