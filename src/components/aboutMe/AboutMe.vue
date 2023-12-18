<template lang="pug">
.about-me.p-10
    h2.uppercase A little about me
    .content-about-me.flex
        .flex.justify-center.items-center.flex-1.pr-4
            p {{ content }}
        .img-profile.flex-1
            img(src="@/assets/me-1.jpg")

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  
})
export default class AboutMe extends Vue {
    content = "With 1 year of experience, I am a dedicated front-end developer proficient in ReactJS, NextJS, VueJS, and TypeScript. I have successfully delivered projects using these technologies, building interactive and efficient web applications. I am skilled in creating responsive user interfaces and implementing smooth navigation experiences. As an adaptable learner, I stay updated with the latest industry trends and continuously enhance my skills to deliver high-quality solutions. I am enthusiastic about collaborating with cross-functional teams and contributing to the success of projects through effective communication and teamwork."
}
</script>

<style scoped>
img{
    width:100%
}

.about-me h2 {
    font-size: 40px;
    font-weight:700;
    padding-bottom: 10px;
    color: white;
}

.content-about-me p {
    font-size: 18px;
    color: white;
}
</style>
