<template>
  <div class="technologies-section">
    <v-container class="pa-5">
      <h3 
      data-aos="zoom-in-down"
      data-aos-duration="500"
      class="sub-heading font-weight-black text-uppercase text-center">Technologies</h3>
      <v-row class="my-4" justify="center">
        <v-col 
          data-aos="zoom-in-down" 
          data-aos-duration="500"
          v-for="logo in technologiesData" :key="logo.title" md="2" sm="3" cols="6">
          <v-card
            class="pa-2 d-flex align-content-center technologies-card tech-img"
            outlined
            elevation="2"
            tile
          >
            <v-img :src="logo.src"
              contain
              max-width="100%"
              max-height="100%"
              >
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: ['techLogo'],
  data() {
    return {
      technologiesData: [
        { title: "PHP logo", src: this.techLogo[0] },
        { title: "JS logo", src: this.techLogo[1] },
        { title: "MySQL logo", src: this.techLogo[2] },
        { title: "Linux logo", src: this.techLogo[3] },
        { title: "Laravel logo", src: this.techLogo[4] },
        { title: "VueJS logo", src: this.techLogo[5] },
        { title: "NodeJS logo", src: this.techLogo[6] },
        { title: "Git logo", src: this.techLogo[7] },
        { title: "Illustrator logo", src: this.techLogo[8] },
        { title: "Photoshop logo", src: this.techLogo[9] },
      ]
    }
  }
}
</script>
<style scoped>
.sub-heading{
  font-size: 40px;
  line-height: 63px;
  color: #32475B;
}
.tech-img{
  overflow: hidden;
  position: relative;
  filter: grayscale(100%);
  transition: 0.5s;
}
.tech-img:hover{
  filter: none;
}
.tech-img:after{
  content: "";
  position: absolute;
  top: -264%;
  left: -181%;
  width: 200%;
  height: 250%;
  opacity: 0;
  transform: rotate(30deg);
  background: linear-gradient(to right, rgba(255, 255, 255,0.13)0%,rgba(255,255,255,0.13)77%,rgba(255,255,255,0.5)92%,rgba(255,255,255,0.0)100%);
}
.tech-img:hover:after{
  opacity: 1;
  top: -40%;
  left: -40%;
  transition-property: left, top, opacity;
  transition-duration: 1s,1s,0.15s;
  transition-timing-function: ease;
}
.technologies-card{
  height: 100px;
}
@media only screen and (max-width: 600px) {
  .sub-heading{
    font-size: 32px;
    line-height: 42px;
  }
}
@media only screen and (max-device-width: 1280px) {
  .tech-img{
    filter: none;
  }
  .tech-img:after{
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
}
</style>