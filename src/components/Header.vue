<template>
  <div>
    <div class="menus">
      <v-list class="menus-list">
        <v-list-item
          v-for="item in menuItems"
          class="fixed-menu"
          dark
          :key="item.title"
          @click="scrollTo(item.to)"
          >
          <v-list-item-action class="fixed-item">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content class="text-uppercase fixed-text">{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
    <v-navigation-drawer color="#32475B" dark v-model="sidebar" v-if="sidebar" app>
        <v-list>
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            @click="scrollTo(item.to), sidebar = !sidebar"
            >
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
<style scoped>
.menus {
  display: none;
}
@media only screen and (min-width: 1280px) {
  .menus{
    display: block !important;
    position: fixed;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    z-index: 10001;
  }
  .menus .menus-list{
    margin: 0;
    padding: 0;
    background: none;
  }
  .menus .fixed-menu{
    margin: 0;
    padding: 0;
  }
  .menus .fixed-item{
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: #1CD8D2;
    display: block;
    text-align: center;
    position: relative;
    margin: 0 !important;
  }

  .menus .fixed-text{
    position: absolute;
    margin-top: 5px;
    top: 0;
    left: -120px;
    width: 130px;
    height: 40px;
    color: #1CD8D2;
    background: rgba(245, 245, 245, 1);
    font-weight: bold;
    align-items: center;
    justify-content: center;
    z-index: -1;
    opacity: 0;
    backface-visibility: hidden;
    transition: 0.5s;
    pointer-events: none !important;
  }
  .menus .fixed-menu:hover .fixed-text{
    opacity: 1;
    backface-visibility: visible;
    left: 40px
  }
}
.v-app-bar.v-app-bar--fixed{
  z-index: 10001;
}
.v-navigation-drawer {
  z-index: 10002;
}
</style>