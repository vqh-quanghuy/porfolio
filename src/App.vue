<template>
  <v-app>
    <Header :appTitle="appTitle"/>
    <v-main>
      <AboutMe :avtImage="avtImage" id="about-me" />
      <Education id="education" />
      <Experiences id="experiences" />
      <Technologies :techLogo="techLogo" id="technologies" />
      <Projects :projectImages="projectImages" id="projects" />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experiences from './components/Experiences.vue';
import Technologies from './components/Technologies.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  created(){
    this.projectImages = [
      require('@/assets/porfo-projects/booking-project.png'),
      require('@/assets/porfo-projects/real-esate-project.png'),
      require('@/assets/porfo-projects/mbti-project.png'),
      require('@/assets/porfo-projects/24yrs-anniversary-project.png'),
      require('@/assets/porfo-projects/porfolio-project.png'),
    ];
    this.techLogo = [
      require('@/assets/tech-logo/PHP-logo.png'),
      require('@/assets/tech-logo/JavaScript-logo.png'),
      require('@/assets/tech-logo/MySQL-Logo.wine.png'),
      require('@/assets/tech-logo/linux-logo.png'),
      require('@/assets/tech-logo/laravel-logo.png'),
      require('@/assets/tech-logo/VueJS-logo.png'),
      require('@/assets/tech-logo/NodeJS-logo.png'),
      require('@/assets/tech-logo/Git-logo.png'),
      require('@/assets/tech-logo/Illustrator-logo.png'),
      require('@/assets/tech-logo/Photoshop-logo.png'),
    ];
    this.avtImage = require('@/assets/porfo-avt.png');
    document.title = "Vu Quang Huy's Porfolio"
  },
  components: {
    Header,
    AboutMe,
    Education,
    Experiences,
    Technologies,
    Projects,
    Footer
  },
  data: () => ({
    appTitle: `Vu Quang Huy's Porfolio`,
    avtImage: '',
    techLogo: [],
    projectImages: [],
  }),
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
*{
  font-family: 'Roboto', sans-serif;
}
::-webkit-scrollbar{
  width: 0.8em;
}
::-webkit-scrollbar-thumb{
  background: #1CD8D2;
}
::-webkit-scrollbar-track{
  background-color: #93EDC7;
}
:root{
  scrollbar-color: #1CD8D2 #93EDC7 !important;
  scrollbar-width: thin !important;
}
.primary-btn{
  transition: 0.5s;
  width: 50%;
  background-size: 150% auto;
  font-size: 1.2rem !important;
  color: white !important;
  background-image: linear-gradient(90deg, #1CD8D2 0%, #93EDC7 100%);
}
.primary-btn:hover {
  background-position: right center;
}
</style>