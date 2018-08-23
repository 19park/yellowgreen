<template>
  <div class="container">
	<div class="columns">
      <TheUserInfo class="column is-narrow is-3" />
      <div class="column is-narrow is-9">
			<form name="form1" method="post" onsubmit="return false;">

				<div style="text-align:left;margin-bottom:30px;">
					<div class="card">
					  <div class="card-content">
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
					  </div>
					  <footer class="card-footer">
						 <p class="card-footer-item">
							<a class="button is-success" @click="SignUp();" style="margin-right:10px"><span>가입하기</span></a>
							<a class="button is-outlined" href="/">메인으로</a>
						 </p>
					  </footer>
					</div>
				</div>

			</form>
		</div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import firebase from 'firebase'
import TheUserInfo from '~/components/TheUserInfo.vue'

if (process.browser) {
	let Loading =require('vue-loading-overlay')
	require('vue-loading-overlay/dist/vue-loading.min.css')

	Vue.use(Loading);
}

export default {
	data () {
		return {
			email: null,
			password: null
		}
	},
	components:{
		TheUserInfo
	},
	methods: {
		SignUp () {
			if (!this.email){ 
				alert("이메일을 입력해주세요")
				this.$refs.USR_EMAIL.focus()
				return
			}
			if (!this.password){ 
				alert("비밀번호를 입력해주세요")
				this.$refs.USR_PWD.focus()
				return
			}

			let loader = this.$loading.show()
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user)=>{
				alert("가입이 완료되었어용ㅋ")
				this.$router.push('/')
				loader.hide()
			}).catch((err)=>{
				alert(`이런,,\n${ err.message }`)
				loader.hide()
				return false
			})
		},
		verfityEmail(){ 
			user.sendEmailVerification().then(function() {
			  alert('인증 전송');
			}).catch(function(error) {
			  alert(error.message);
			})
		}
	}
}
</script>

<style scoped>
body { background-color:#99FE00; }

.container {
  display: flex;
  flex-direction: column;
}

.column a { color:#000; }
</style>
