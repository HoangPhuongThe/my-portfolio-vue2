<template lang="pug">
.banner
	.main-content.text-center.uppercase.relative
		.concept.concept-one.relative.overflow-hidden
			.hover.cursor-pointer(v-for="i in 10" :class="`hover-${i}`")
			h1.cursor-pointer.relative Ryan's Portfolio
		.content.absolute.overflow-hidden 
			.content-container.overflow-hidden
				span.content-container-text My skills are
				ul.content-container-list 
					li.content-container-list-item(v-for="(item, index) in items" :class="`item-${item}`" :key="index") {{ item }}
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import './animationBanner.css';


export default class Banner extends Vue {
	items:string[] =["javascript", "reactjs","vuejs","nextjs"]
}
</script>

<style scoped>
/* banner */.banner {
  background: url("https://i.imgur.com/AaEXEjU.jpg")
		no-repeat center center / cover;
    height: 500px;
    width:100%;
}

footer {
	text-align: center;
	padding: 1em;
	max-width: 80px;
	position: fixed;
	top: 0;
	right: 25px;
	a {
		text-decoration: none;
		display: inline-block;
		width: 45px;
		height: 45px;
		border-radius: 50%;
		background: transparent;
		border: 1px dashed #fff;
		color: #fff;
		margin: 5px;
		&:hover {
			background: rgba(255, 255, 255, 0.1);
		}
		.icons {
			margin-top: 12px;
			display: inline-block;
			font-size: 20px;
		}
	}
}

.main-content {
	height: 500px;
}

h1 {
	color: #fff;
	font: 900 59px Montserrat;
	text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.concept {
	padding: 5em;
	height: 500px;
	scroll-snap-align: center;
	&:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: radial-gradient(rgba(0, 0, 0, 0.3), transparent);
		opacity: 0;
		transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
	}
	&:hover:before {
		opacity: 0.5;
	}
}

.concept-one {
	display: grid;
	grid: repeat(3, 1fr)/ repeat(3, 1fr);
	padding: 8em;
	
}

h1 {
		position: absolute;
		margin: auto;
		left: 0;
		right: 0;
		top: 50%;
		margin-top: -30px;
		transition: 0.5s ease;
		z-index: 0;
		letter-spacing: 25px;
	}
	.hover {
		z-index: 1;
	}
	.hover-1:hover ~ h1 {
		left: 30px;
		margin-top: -10px;
	}
	.hover-2:hover ~ h1 {
		margin-top: -10px;
	}
	.hover-3:hover ~ h1 {
		right: 30px;
		margin-top: -10px;
	}
	.hover-4:hover ~ h1 {
		left: 30px;
	}
	.hover-6:hover ~ h1 {
		right: 30px;
	}
	.hover-7:hover ~ h1 {
		left: 30px;
		margin-top: -50px;
	}
	.hover-8:hover ~ h1 {
		margin-top: -50px;
	}
	.hover-9:hover ~ h1 {
		right: 30px;
		margin-top: -50px;
	}


</style>

<!-- <template>
  <div class="banner relative">
    <div class="main-content text-center uppercase relative">
      <div class="concept concept-one relative overflow-hidden">
          <div v-for="i in 9" :key="i" :class="`hover-${i}`" class="hover cursor-pointer"></div>
          <h1 class="cursor-pointer relative">Ryan's Portfolio</h1>
      </div>
    </div>
  </div>
</template> -->

