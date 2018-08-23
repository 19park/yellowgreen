<template>
  <div id="app">
		<nuxt/>
  </div>
</template>

<style>
	.page-enter-active,
	.page-leave-active {
	  transition: opacity 0.5s;
	}
	.page-enter,
	.page-leave-active {
	  opacity: 0.3;
	}

	.bounce-enter-active {
	  animation: bounce-in 0.8s;
	}
	.bounce-leave-active {
	  animation: bounce-out 0.5s;
	}
	@keyframes bounce-in {
	  0% {
		 transform: scale(0);
	  }
	  50% {
		 transform: scale(1.5);
	  }
	  100% {
		 transform: scale(1);
	  }
	}
	@keyframes bounce-out {
	  0% {
		 transform: scale(1);
	  }
	  50% {
		 transform: scale(1.5);
	  }
	  100% {
		 transform: scale(0);
	  }
	}
</style>