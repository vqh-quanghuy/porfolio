<template>
  <div class="education-section">
    <v-container class="pa-5">
      <h3 class="sub-heading font-weight-black text-uppercase">Education</h3>
      <v-col md="9" sm="12" cols="12">
        <v-timeline
          class="my-5"
          dense
        >
          <v-timeline-item
            v-for="item in educationData" :key="item.title"
            small
            color="white"
          >
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card :elevation="hover ? 24 : 1">
                  <v-card-title class="text-h6 font-weight-bold timeline-title">
                    {{item.title}}
                  </v-card-title>
                  <v-card-text class="font-weight-medium timeline-text">
                    {{item.text}}
                  </v-card-text>
                </v-card>
              </template>
            </v-hover>
          </v-timeline-item>
        </v-timeline>
      </v-col>
      <h5 class="font-weight-bold achievements my-5">Other achievements and certificates:</h5>
      <p class="font-weight-medium sub-achievements" v-for="achievement in achievements" :key="achievement.name"><span class="mdi mdi-checkbox-marked-outline success--text mr-2"></span>{{achievement.name}}</p>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    educationData: [
      { title: 'Course: Technician in PHP Open-source Language', text: '06/2019 at CSC - University Of Science (HCMUS)', },
      { title: 'Course: Technician in Full-stack Javascript', text: '08/2020 at Cybersoft Academy', },
      { title: 'Graduate Bachelor of Information Technology', text: '11/2020 at Van Hien University', },
    ],
    achievements: [
      { name: "PHP Open-source Technician" },
      { name: "TOEIC: 810 points" },
      { name: "2D Graphics Design Technician" },
      { name: "Effect and Video Making Technician" },
    ]
  }),
}
</script>
<style scoped>
.education-section{
  background: #32475B;
}
.theme--light.v-timeline:before {
  background: white;
}
.sub-heading{
  font-size: 40px;
  line-height: 63px;
  color: #fff;
}
.achievements{
  font-size: 24px;
  color: #fff;
}
.sub-achievements{
  font-size: 20px;
  color: #fff;
}
@media only screen and (max-width: 600px) {
  .col-12 {
    padding: 0px !important;
  }
  .sub-heading{
    font-size: 32px;
    line-height: 42px;
    color: #fff;
  }
  .achievements{
    font-size: 18px;
    color: #fff;
  }
  .sub-achievements{
    font-size: 16px;
    color: #fff;
  }
  .timeline-title{
    font-size: 1rem !important;
  }
  .timeline-text{
    font-size: 0.8rem !important;
  }
}
</style>