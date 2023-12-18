<template lang="pug"> 
.my-project.container 
    .box(v-for="(item,index) in imgSrc" :class="`box-${index+1}`") 
        .cover
            img(:src="item")
        button
            div
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import "./style.css"

export default class MyProject extends Vue {
    imgSrc: string[] = [
        "https://i.imgur.com/RnhDrC2.png",
        "https://i.imgur.com/XLzWOCc.png",
        "https://i.imgur.com/o41TXTR.png",
        "https://i.imgur.com/hpeidR2.png"
    ]
}

</script>
<style scoped>
.my-project.container {
    background: url("@/assets/me-2.jpg")
		no-repeat center center / cover;
    height: 500px;
    width:100%;
}

</style>