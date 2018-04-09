<template>
  <div class="container">
      <div class="comments-list">
          <div class="item">
              <div class="head-img">
                  <img src="../../../static/imgs/index/0.jpg" alt="用户头像">
              </div>
              <div class="details">
                  <p class="name">可爱小姐姐</p>
                  <p class="words">猫咪这么可爱，和我家的好像啊！</p>
              </div>
              <div class="time"><span class="subtime">昨天</span>09:21</div>
          </div>

           <div class="item">
              <div class="head-img">
                  <img src="../../../static/imgs/index/0.jpg" alt="用户头像">
              </div>
              <div class="details">
                  <p class="name">可爱小姐姐</p>
                  <p class="words">猫咪这么可爱，和我家的好像啊！</p>
              </div>
              <div class="time"><span class="subtime">昨天</span>09:21</div>
          </div>
      </div>
      <div class="add-comment">
          <input type="text" placeholder="发表评论..." class="inputs">
          <span class="submit">发表</span>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {},
  methods: {
  },
  created () {
  }
}
</script>

<style scoped>
/*placeholder字体颜色*/  
::-webkit-input-placeholder { /* WebKit browsers */  
    font-family: 'PingFang SC';
    color: #000;
    font-size: 32rpx;
    opacity: .5;
}  
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */  
    font-family: 'PingFang SC';
    color: #000;
    font-size: 32rpx;
    opacity: .5;
}  
::-moz-placeholder { /* Mozilla Firefox 19+ */  
     font-family: 'PingFang SC';
    color: #000;
    font-size: 32rpx;
    opacity: .5;
}  
:-ms-input-placeholder { /* Internet Explorer 10+ */  
     font-family: 'PingFang SC';
    color: #000;
    font-size: 32rpx;
    opacity: .5; 
}

.comments-list {
    width: 100%;
}
.item{
    position: relative;
    padding: 40rpx;
    display: flex;
    align-items: center;
    border-bottom: 2rpx solid #e0e0e0;
}
.head-img ,.details{
    display: inline-block;
}
 .head-img img{
     width: 66rpx;
     height: 66rpx;
     border-radius: 50%;
     margin-right: 26rpx;
 }
 .time {
    position: absolute;
    top: 40rpx;
    right: 40rpx;
    font-family: "HelveticaNeueLTPro Lt";
    font-size: 22rpx;
    color: #000;
    opacity: 0.7;
 }
 .time .subtime {
    margin-right: 12rpx;
  }
 .details .name {
     font-family: 'PingFang SC';
     font-weight: bold;
     font-size: 26rpx;
     margin-bottom: 16rpx;
 }
 .details .words {
     font-family: 'PingFang SC';
     font-size: 26rpx;
 }
 .add-comment{
     width: 100%;
     background-color: #fff;
     padding: 10rpx 0;
     position: fixed;
     bottom: 0;
 }
 .inputs {
    width: 532rpx;
    height: 66rpx;
    border-radius: 33rpx;
    padding-left: 40rpx;
    margin-left: 40rpx;
    float: left;
    background-color: #f1f1fa;
    font-family: 'PingFang SC';
    color: #000;
    font-size: 32rpx;
    opacity: .5;
 }
 .submit{
     float: right;
     margin-right: 40rpx;
     line-height: 66rpx;
      font-family: 'PingFang SC';
    color: #000;
    font-size: 32rpx;
 }
</style>
