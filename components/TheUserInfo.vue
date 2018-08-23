<template lang="html">
  <div class="userinfo">
	 <div class="" v-if="user">
		 <div class="media">
			<figure class="media-left" v-if="user.displayName">
			  <p class="image is-64x64">
				 <img :src="user.photoURL">
			  </p>
			</figure>
			<div class="media-content">
			  <div class="content">
				 <p v-if="user.displayName">
					<strong>{{user.displayName}}</strong>
				 </p>
				 <p v-else>
					<strong>{{user.email}} 님!</strong>
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
		<a class="button is-info" @click="facebookLogin">Facebook Login</a>
		<a class="button is-warning" @click="isModal = true">Email Login</a>
		<a class="button is-dark" href="/join">member join!</a>
    </div>

	  <div class="modal" :class="{ 'is-active': isModal }">
		  <div class="modal-background"></div>
		  <div class="modal-card">
			 <header class="modal-card-head">
				<p class="modal-card-title">일반로그인</p>
				<button class="delete" @click="isModal=false"></button>
			 </header>
			 <section class="modal-card-body">
				<div class="field is-horizontal">
				  <div class="field-label is-normal">
					 <label class="label">아이디</label>
				  </div>
				  <div class="field-body">
					 <div class="field">
						<p class="control">
						  <input class="input" ref="USR_EMAIL" name="USR_EMAIL" type="email" v-model="email" placeholder="test@test.com" required>
						</p>
					 </div>
				  </div>
				</div>

				<div class="field is-horizontal">
				  <div class="field-label is-normal">
					 <label class="label">비밀번호</label>
				  </div>
				  <div class="field-body">
					 <div class="field">
						<p class="control">
						  <input class="input" ref="USR_PWD" name="USR_PWD" type="password" v-model="password" placeholder="이메일 비밀번호" required>
						</p>
					 </div>
				  </div>
				</div>
			 </section>
			 <footer class="modal-card-foot">
				<button class="button is-success" @click="emailLogin()">로그인</button>
				<button class="button" @click="isModal=false">닫기</button>
			 </footer>
		  </div>
		</div>
  </div>

</template>

<script>
import Vue from 'vue'
import firebase from 'firebase'
import { mapGetters, mapActions } from 'vuex'

if (process.browser) {
	let Loading =require('vue-loading-overlay')
	require('vue-loading-overlay/dist/vue-loading.min.css')

	Vue.use(Loading);
}

export default {
  data(){
	return {
		isModal: false,
		email: null,
		password: null
	}
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['callAuth', 'callAuthFacebook', 'callAuthEmail', 'signOut']),
	 facebookLogin () {
		this.callAuthFacebook().then((res)=>{
			top.location.reload()
		}).catch((e)=>{
			console.log(e)
		})
	 },
	 emailLogin () {
		let loader = this.$loading.show()
		let obj = {
			email: this.email,
			password: this.password
		}

		this.callAuthEmail(obj).then((res)=>{
			top.location.reload()
		}).catch((e)=>{
			alert(`이런,,${e.message}`)
			loader.hide()
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
