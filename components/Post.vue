<template lang="html">
  <li class="media" v-if="post.user">
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="post.user.icon">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{post.user.name}}</strong>
          <br>
          <span v-html="formattedPost" />
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left"></div>
        <div class="level-right">
          <a class="level-item">
            <a target="_self" :href="`/posts/${post['.key']}`" class="icon is-small"><i class="fa fa-eye"></i></a>
          </a>
        </div>
      </nav>
    </div>
  </li>
</template>

<script>
import h from 'htmlspecialchars'
import { link } from 'autolinker'


import Vue from 'vue'
import VueNativeNotification from 'vue-native-notification'
 
Vue.use(VueNativeNotification, {
  requestOnNotify: true
})

export default {
  props: {
    post: Object
  },
  computed: {
    formattedPost () {
      return link(h(this.post.body))
    }
  },
  mounted() {
	console.log('show notifi')
	this.$notification.show('연두색의저주', {
		body: '당신은 연두저주에걸렸습니다. 저주를 풀려면 흔적을 남기고가세요..'
	}, {})
  }
}
</script>

<style lang="css">
</style>
