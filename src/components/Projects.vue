<template>
  <div class="projects-section">
    <v-container class="pa-5">
      <h3 data-aos="zoom-in-down"
        data-aos-duration="500"
        class="sub-heading font-weight-black text-uppercase text-center">Projects</h3>
      <v-row class="my-4">
        <v-col data-aos="fade-up"
          dense v-for="project in projects" :key="project.title" class="d-flex flex-column" lg="4" md="6" sm="6" cols="12">
          <v-card
            class="mx-auto flex d-flex flex-column"
            max-width="100%"
            raised>
            <v-img
              max-width="100%"
              max-height="250"
              min-height="250"
              :src="project.src"
            ></v-img>
            <v-card-title>{{ project.title }}</v-card-title>
            <v-card-text>
              <div>{{ project.desc }}</div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>

            <v-card-text>
              Technologies use:
              <v-chip-group
                column
              >
                <v-chip
                  v-for="techno in project.tech"
                  :key="techno"
                  text-color="white"
                  label
                >
                  {{ techno }}
                </v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: ['projectImages'],
  data () {
    return {
      projects: [
        { 
          title: "Booking Hotel Room Project",
          desc: "My graduate project, as required to clone main functions of Booking.com. I perform a website with main hotel's booking function, admin dashboard and hotel owner check user's booking information,...",
          src: this.projectImages[0],
          tech: [
            "PHP", "Laravel", "Vanilla JS", "Laravel Blade"
          ]
        },
        { 
          title: "Real Estate Brokerage",
          desc: "Build a website handle agency for real estate brokerage.",
          src: this.projectImages[1],
          tech: [
            "PHP", "Laravel", "Vanilla JS", "Laravel Blade"
          ]
        },
        { 
          title: "MBTI Personality Test Project",
          desc: "Build a new internal function with quizz test to calculate points then classify employee's personality.",
          src: this.projectImages[2],
          tech: [
            "PHP", "Laravel", "Vanilla JS", "Restful API"
          ]
        },
        { 
          title: "Vhuers Online",
          desc: "A event site welcome Van Hien University 24 years anniversary",
          src: this.projectImages[3],
          tech: [
            "NodeJS", "Express", "VueJS", "Restful API", "HTML Canvas"
          ]
        },
        { 
          title: "Personal Porfolio",
          desc: "Personal site show off my education, projects and work experiences",
          src: this.projectImages[4],
          tech: [
            "VueJS", "Vuetify",
          ]
        },
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
.v-chip{
  font-weight: bold;
  background: linear-gradient(90deg, #1CD8D2 0%, #93EDC7 100%) !important;
  pointer-events: none;
}
.v-card{
  box-shadow: 3px solid #32475B !important;
}
@media only screen and (max-width: 600px) {
  .sub-heading{
    font-size: 32px;
    line-height: 42px;
  }
}
</style>