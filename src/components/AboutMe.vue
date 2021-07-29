<template>
  <div class="aboutme-section">
    <v-container class="pa-5">
      <ul class="background">
        <li class="square"></li>
        <li class="square"></li>
        <li class="square"></li>
        <li class="square"></li>
        <li class="square"></li>
      </ul>
      <v-row class="my-6">
        <v-col md="6" sm="12" cols="12">
          <div class="my-6 intro-heading font-weight-black">
            <h2>Hello, my name is Huy</h2> 
            <h2>A Web Developer</h2>
          </div>
          <v-btn data-aos="zoom-in-up" data-aos-duration="1500" x-large class="font-weight-bold my-4 primary-btn" @click="downloadCV()"> Get my CV
            <v-icon
            large
            right
            dark
            class="px-4"
            >
              mdi-file-download
            </v-icon>
          </v-btn>
          <br>
          <v-chip 
            data-aos="fade-left" 
            data-aos-delay="1500"
            data-aos-duration="1500" 
            class="contact-link" 
            label 
            href="mailto:vqh.quanghuy@gmail.com">
            Or contact with me?
          </v-chip>
        </v-col>
        <v-col md="6" sm="12" cols="12" class="d-flex justify-center">
          <div 
            class="outside-avt"
            data-aos="fade-up"
            data-aos-duration="2000">
            <v-img
              max-height="400"
              max-width="300"
              :src="require('@/assets/porfo-avt.png')"
              class="avt-image">
            </v-img>
            <div class="avt-square"></div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  methods: {
    downloadCV(){
      axios.get('http://localhost:8080/VuQuangHuy_CV_Developer.pdf', {
        responseType: 'blob',
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        let fname = 'VuQuangHuy_CV_Developer.pdf';
        link.href = url;
        link.setAttribute('download', fname);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
    }
  }
}
</script>

<style scoped>
.aboutme-section{
  background: linear-gradient(360deg, #32475B 0%, #3FB2A2 100%);
}
.intro-heading h2{
  font-size: 48px;
  line-height: 63px;
  color: #fff;
  overflow: hidden;
  border-right: .15em solid #fff;
  white-space: nowrap;
}
.intro-heading h2:nth-child(1){
  width: 11em;
  -webkit-animation: type 2s steps(40, end), blink-caret .5s step-end infinite;;
  animation: type 2s steps(40, end), blink-caret .5s step-end infinite;;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.intro-heading h2:nth-child(2){
  width: 8em;
  opacity: 0;
  -webkit-animation: type2 2s steps(40, end), blink-caret .5s step-end infinite;;
  animation: type2 2s steps(40, end), blink-caret .5s step-end infinite;;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.contact-link{
  font-size: 16px !important;
  color: #fff !important;
  text-decoration: none;
  cursor: pointer;
  background: none !important;;
  padding: 0;
}
.contact-link::before{
  background: none;
}
.outside-avt{
  position: relative;
  height: 400px;
  width: 300px;
  background: #93EDC7;
}
.avt-image{
  position: absolute;
  z-index: 2;
  bottom: 0;
}
.avt-square{
  position: absolute;
  transform: translate(-40%,220%);
  overflow: hidden;
  height: 140px;
  width: 140px;
  background: linear-gradient(90deg, #1CD8D2 0%, #92EDC7 99.99%, #93EDC7 100%);
}
.avt-square:after{
  animation: shine 3s ease-in-out infinite;
  animation-fill-mode: forwards;  
  content: "";
  position: absolute;
  top: -30%;
  left: -280%;
  width: 250%;
  height: 250%;
  opacity: 0;
  transform: rotate(-30deg);
  
  background: rgba(255, 255, 255, 0.13);
  background: linear-gradient(
    to right, 
    rgba(255, 255, 255, 0.13) 0%,
    rgba(255, 255, 255, 0.13) 77%,
    rgba(255, 255, 255, 0.5) 92%,
    rgba(255, 255, 255, 0.0) 100%
  );
}
.avt-square:active:after {
  opacity: 0;
}
@keyframes type {
  0% {
    width: 0;
  }
  99.9% {
    border-right: .15em solid #fff;
  }
  100% {
    border: none;
  }
}

@-webkit-keyframes type {
  0% {
    width: 0;
  }
  99.9% {
    border-right: .15em solid #fff;
  }
  100% {
    border: none;
  }
}

@keyframes type2 {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: .15em solid #fff;
  }
  100% {
    opacity: 1;
    border: none;
  }
}

@-webkit-keyframes type2 {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: .15em solid #fff;
  }
  100% {
    opacity: 1;
    border: none;
  }
}
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #fff; }
}
@keyframes shine{
  10% {
    opacity: 1;
    top: -30%;
    left: -280%;
    transition-property: left, top, opacity;
    transition-duration: 0.5s, 0.5s, 0.15s;
    transition-timing-function: ease;
  }
  100% {
    opacity: 0;
    top: -90%;
    left: 0%;
    transition-property: left, top, opacity;
  }
}
@keyframes cube {
    from {
        transform: scale(0) rotate(0deg) translate(-50%, -50%);
        opacity: 1;
        left: 0vw;
    }
    to {
        transform: scale(5) rotate(450deg) translate(50%, 50%);
        opacity: 0;
        left: 100vw;
    }
}

.background {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
.background li {
  position: inherit;
  top: 80vh;
  width: 10px;
  height: 10px;
  border: solid 1px #e5e5e5;
  color: transparent;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: cube 8s ease-in-out both infinite;
}
.background li:nth-child(0) {
  animation-delay: 0s;
  top: 20vh;
  border-color: #fff;
}

.background li:nth-child(1) {
  animation-delay: 1s;
  top: 71vh;
}

.background li:nth-child(2) {
  animation-delay: 2s;
  top: 40vh;
}

.background li:nth-child(3) {
  animation-delay: 3s;
  top: 6vh;
}

.background li:nth-child(4) {
  animation-delay: 4s;
  top: 8vh;
}

.background li:nth-child(5) {
  animation-delay: 5s;
  top: 60vh;
}
@media only screen and (max-width: 600px) {
  .intro-heading h2{
    font-size: 30px;
    line-height: 40px;
    color: #fff;
    overflow: hidden;
    border-right: .15em solid #fff;
    white-space: nowrap;
  }
  .intro-heading h2:nth-child(1){
    width: 11em;
    -webkit-animation: type 2s steps(40, end), blink-caret .5s step-end infinite;;
    animation: type 2s steps(40, end), blink-caret .5s step-end infinite;;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  .intro-heading h2:nth-child(2){
    width: 8em;
    opacity: 0;
    -webkit-animation: type2 2s steps(40, end), blink-caret .5s step-end infinite;;
    animation: type2 2s steps(40, end), blink-caret .5s step-end infinite;;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  .primary-btn{
    font-size: 1rem !important;
  }
}
</style>