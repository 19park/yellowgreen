<template>
  <section class="container" :style="{ backgroundColor: `yellowgreen`}">
	<!--<img src="~/assets/y1.png"/>//-->
    <div>
      <h1 class="title">
        yellowgreen
      </h1>
      <h2 class="subtitle">
        yellowgreen project
      </h2>
		<div class="cell-container">
			<div class="cell" 
			 :style="{ 
			 backgroundImage: `url(${backgroundUrl})` ,
			 backgroundSize: 'cover' 
			 }"
			 @click="anim">
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
  font-size: 100px;
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

.links {
  padding-top: 15px;
}

.cell-container {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin: 0 auto;
}

.cell-container .cell {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #000;
}

.cell-container .cell:nth-child(3n) {
  margin-right: 0;
}
.cell-container .cell:nth-child(27n) {
  margin-bottom: 0;
}

.cell-move {
  transition: transform 1s;
}
</style>

