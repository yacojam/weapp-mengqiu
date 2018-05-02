<template>
  <div class="user-shows-content">
    <moment-item v-for="(item, index) in listData" :moment="item" :key="index">
    </moment-item>
  </div>
</template>

<script>
import momentItem from './moment-item'

export default {
  components: {
    momentItem
  },
  data () {
    return {
      imgList: [
        '/static/imgs/index/feed_icon_like_nor@2x.png'
      ],
      loved: false
    }
  },
  props: {
    showStar: {
      type: Boolean,
      'default': false
    },
    lifeStatusData: {
      type: Array
    },
    loveNum: {
      type: Number,
      default: 0
    },
    commentNum: {
      type: Number,
      default: 0
    },
    refId: {
      type: Number,
      default: 0
    }
  },

  computed: {
    listData () {
      let _data = this.lifeStatusData
      let className = 'less'
      for (let i in _data) {
        if (_data[i].imgSrc.length > 4) {
          className = 'more'
        }
        if (_data[i].imgSrc.length >= 2 && _data[i].imgSrc.length <= 4) {
          className = 'normal'
        }
        _data[i] = Object.assign(_data[i], { className })

        className = 'less'
      }
      return _data
    }
  }
}
</script>

<style scoped>
.user-shows-content {
  padding: 0 0;
  background-color: #fff;
}
</style>

