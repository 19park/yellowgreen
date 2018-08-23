<template lang="html">
	<div class="timeline">
		<TheTimeLinePostArea v-if="user" />
		<ul class="posts">
		<transition-group name="post">
		  <Post class="post" :post="post" :key="post['.key']" v-for="post in posts" v-if="post.user" />
		</transition-group>
		</ul>
		<ul class="policy-list cf">
			<li><a href="/policy">*개인정보취급방침</a></li>
			<li><a href="/policy-online">*이용약관</a></li>
		</ul>
	</div>
</template>

<script>
import Post from '~/components/Post.vue'
import { mapGetters } from 'vuex'
import TheTimeLinePostArea from '~/components/TheTimeLinePostArea.vue'

export default {
  components: {
    Post,
    TheTimeLinePostArea
  },
  computed: {
    ...mapGetters(['user', 'posts'])
  }
}
</script>

<style scoped>
.timeline {
  height: calc(100vh - 140px);
}

.timeline .posts{
  height: calc(100% - 80px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.post-enter-active {
  animation: slideIn 0.3s linear;
}

/*! float 적용 요소 감싸는 클래스 - clearfix */
.cf:before,
.cf:after {content: " "; display: block;overflow:hidden;clear:both;height:0; }
.cf{*zoom: 1; }

.policy-list { display:block; margin:30px 0; }
.policy-list li { float:left; }
.policy-list li>a { color:#000; }

@keyframes slideIn {
  0% {opacity: 0.0}
  100% {opacity: 1.0}
}
</style>
