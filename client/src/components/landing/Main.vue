<template>
	<div>
		<section class="main-area">
			<div class="generic_picture picture-left"></div>
			<div class="generic_picture picture-middle"></div>
			<div class="generic_picture picture-right">></div>
		</section>
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped>

.main-area {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	margin: 50px 0 50px 0;
}

.generic_picture { 
	margin: 0 20px 0 20px;
	height: 450px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat; 
}

.picture-left {
  background-image: url("../../assets/images/left.jpg");
}

.picture-middle {
  background-image: url("../../assets/images/middle.jpg");
}

.picture-right {
  background-image: url("../../assets/images/right.jpg");
}


</style>