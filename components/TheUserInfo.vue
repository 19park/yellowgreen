<template lang="html">
  <div class="userinfo">
	 <div class="" v-if="user">
		 <div class="media">
			<figure class="media-left">
			  <p class="image is-64x64">
				 <img :src="user.photoURL">
			  </p>
			</figure>
			<div class="media-content">
			  <div class="content">
				 <p>
					<strong>{{user.displayName}}</strong>
				 </p>
			  </div>
			</div>
		 </div>
		 <div class="btn-area">
			<a class="button is-default" @click="signOut">로그아웃</a>
		 </div>
	 </div>

    <div class="usr-area" v-else>
      <a class="button is-danger" @click="callAuth">구글이로 로그인하자</a>
		<a class="button is-primary" @click="facebookLogin">페북이로 로그인하자</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['callAuth', 'callAuthFacebook', 'signOut']),
	 facebookLogin () {
		this.callAuthFacebook().then(()=>{
			top.location.reload()
		}).catch((e)=>{
			console.log(e)
		})
	 }
  }
}
</script>

<style lang="css">
	body { background-color:#99FE00; }
	.btn-area { margin-top:15px; }
	.btn-area a { display:block; margin-bottom:10px; }
	.usr-area a { display:block; margin-bottom:10px; }
</style>
