<template>
  <div>
    <v-navigation-drawer color="#32475B" dark v-model="sidebar" v-if="sidebar" app>
        <v-list>
          <v-list-item
            v-for="item in menuItems"
            :key="item.title">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content class="text-uppercase">{{ item.title }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    <v-app-bar color="#32475B" dark dense app>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar">
        </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        {{ appTitle }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          v-for="item in menuItems"
          @click="scrollTo(item.to)"
          :key="item.title">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  props: ['appTitle'],
  methods:{
    scrollTo(id) {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      });
    }
  },
  data(){
    return {
      sidebar: false,
      menuItems: [
        { title: 'About me', to: 'about-me', icon: 'mdi-account-circle' },
        { title: 'Education', to: 'education',icon: 'mdi-school' },
        { title: 'Experiences', to: 'experiences', icon: 'mdi-chart-timeline' },
        { title: 'Technologies', to: 'technologies', icon: 'mdi-code-braces' },
        { title: 'Projects', to: 'projects', icon: 'mdi-code-tags-check' }
     ]
    }
  },
};
</script>