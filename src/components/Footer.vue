<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="justify-center">
        <strong class="subheading">React me on social networks!<menu type="context"></menu></strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="social in socialNetworks"
          :key="social.icon"
          :href="social.to"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ social.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vu Quang Huy's porfolio</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      socialNetworks: [
        {icon: 'mdi-facebook', to: 'https://www.facebook.com/vqh.quanghuy/'},
        {icon: 'mdi-github', to: 'https://github.com/vqh-quanghuy'},
        {icon: 'mdi-linkedin', to: 'https://www.linkedin.com/in/vqh-quanghuy/'},
      ],
    }),
  }
</script>
<style scoped>
.v-card__title{
  background-color:  #57C293 !important;
  border-color:  #57C293 !important;
}
.v-card__text{
  background-color:  #32475B !important;
  border-color:  #32475B !important;
}
@media only screen and (max-width: 600px) {
  .subheading{
    width: 100%;
  }
}
</style>