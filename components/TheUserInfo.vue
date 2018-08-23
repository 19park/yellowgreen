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
      <a class="button is-danger" @click="callAuth">Google Login</a>
		<a class="button is-primary" @click="facebookLogin">Facebook Login</a>
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
		alert(3);
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
