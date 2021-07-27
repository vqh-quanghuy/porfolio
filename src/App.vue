<template>
  <v-app>
    <Header :appTitle="appTitle"/>
    <v-main>
      <AboutMe id="about-me" />
      <Education id="education" />
      <Experiences id="experiences" />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experiences from './components/Experiences.vue';

export default {
  name: 'App',
  components: {
    Header,
    AboutMe,
    Education,
    Experiences
  },

  data: () => ({
    appTitle: `Vu Quang Huy's Porfolio`,
  }),
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
*{
  font-family: 'Roboto', sans-serif;
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