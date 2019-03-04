<template>
  <div class="wrapper-box">
    <ul class="lottery-box">
      <li>
        <img src="../assets/images/1.png"
             alt="">
        <div class="cover"></div>
      </li>
      <li>
        <img src="../assets/images/2.png"
             alt="">
        <div class="cover"></div>
      </li>
      <li>
        <img src="../assets/images/3.png"
             alt="">
        <div class="cover"></div>
      </li>
      <li>
        <img src="../assets/images/4.png"
             alt="">
        <div class="cover"></div>
      </li>
      <li class="start">
        <img src="../assets/images/start.png"
             alt="">
      </li>
      <li>
        <img src="../assets/images/5.png"
             alt="">
        <div class="cover"></div>
      </li>
      <li>
        <img src="../assets/images/6.png"
             alt="">
        <div class="cover"></div>
      </li>
      <li>
        <img src="../assets/images/7.png"
             alt="">
        <div class="cover"></div>
      </li>
      <li>
        <img src="../assets/images/8.png"
             alt="">
        <div class="cover"></div>
      </li>
    </ul>
    <div class="result"></div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  mounted () {
    var oLi = $('.lottery-box li')
    var arr = [0, 1, 2, 5, 8, 7, 6, 3]
    var len = arr.length
    var flag = false // 抽奖的状态

    $('.start').click(function () {
      if (flag) return
      $('.result').hide()
      start(random(0, 8))
      flag = true
    })

    // 点击立即抽奖 顺时针旋转
    function start (num) {
      var speed = 100
      var round = 4 // 默认圈数
      var roundNum = round * len
      var n = 0 // 转动了多少次
      var timer
      timer = setTimeout(turn, speed)
      function turn () {
        var index = arr[n % 8]
        oLi.removeClass('active').eq(index).addClass('active')
        console.log(oLi)
        n++
        console.log(n)
        if (n > roundNum + num) {
          clearTimeout(timer)
          result(index)
          return
        } else if (n > roundNum && n < roundNum + num) {
          speed += 150
        }
        timer = setTimeout(turn, speed)
      }
    }

    // 生成随机数
    function random (min, max) {
      return parseInt(Math.random() * (max - min) + min)
    }

    // 处理结果
    function result (index) {
      var str = ''
      switch (index) {
        case 0:
          str = '金币+20'
          break
        case 1:
          str = '5元现金券'
          break
        case 2:
          str = '10元现金券'
          break
        case 3:
          str = '15元现金券'
          break
        case 5:
          str = '金币+50'
          break
        case 6:
          str = '谢谢参与'
          break
        case 7:
          str = '金币+100'
          break
        case 8:
          str = '30元现金券'
      }
      setTimeout(function () {
        $('.result').html(str).show()
        flag = false
      }, 800)
    }
  }
}
</script>

<style scoped>
.wrapper-box {
  position: relative;
  width: 3rem;
  height: 3rem;
  margin: 0.3rem auto;
}
.box {
  width: 3rem;
  height: 3rem;
}
li {
  position: relative;
  float: left;
  width: 1rem;
  height: 1rem;
}
li img {
  width: 100%;
  height: 100%;
}
.cover {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 1rem;
  height: 1rem;
  background-image: url("../assets/images/cover.png");
  background-size: 100% 100%;
}
.active .cover {
  display: block !important;
}
.result {
  display: none;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -0.8rem;
  width: 1.6rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border: 0.03rem solid #000;
  border-radius: 0.2rem;
  text-align: center;
  background: #ff6a91;
  color: #fff;
}
</style>
