<template lang="html">
  <li class="media" v-if="post.user">
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="post.user.icon" v-if="post.user.icon"/>
		  <img src="/email.png" v-else/>
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong v-if="post.user.name">{{post.user.name}}</strong>
			 <strong v-else>{{post.user.email}}</strong>
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

export default {
  props: {
    post: Object
  },
  computed: {
    formattedPost () {
      return link(h(this.post.body))
    }
  }
}
</script>

<style lang="css">
</style>
