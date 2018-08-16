<template>
  <section class="container" :style="{ backgroundColor: `yellowgreen`}">
	<!--<img src="~/assets/y1.png"/>//-->
	<!--
	:style="{ 
	backgroundImage: `url(${backgroundUrl})` ,
	backgroundSize: 'cover' 
	}
	//-->
    <div>
      <h1 class="title">
        yellowgreen
      </h1>
      <h2 class="subtitle">
        yellowgreen project
      </h2>
		<div class="cell-container">
			<div class="cell" @click="anim">
			 <img src="~/assets/y1.png"/>
			 </div>
		</div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import backgroundUrl from '~/assets/y1.png'


export default {
	data (){
		return{
			backgroundUrl
		}
	},
  components: {
    AppLogo
  },
  methods: {
	anim() {
		
	}
  }
}
</script>

<style>
@media all and (max-width:500px){
	h1 { font-size:1rem; }
	h2 { font-size:.8rem; }
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.cell {
  width:100%;
  min-height:100px;
}
</style>

