<template>
  <v-app id="app">
    <v-app-bar
      app
      color="white"
    >
      <v-toolbar-title class="font-weight-black headline">
        ReportMe
      </v-toolbar-title>
      <v-tabs>
        <v-tab @click="redirectToHome()">Inicio</v-tab>
        <v-tab @click="redirectToNews()">Reportes</v-tab>
        <v-tab @click="redirectToForm()">Formulario</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
  <!-- <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div> -->
</template>

<script>

export default {
  name: 'App',
  
  components: {
  },
  methods: {
    redirectToHome() {
      this.$router.push({ path: '/' , replace: 'true'}).catch((error) => {
          console.log(error)
        });
    },
    redirectToNews() {
      this.$router.push({ path: '/reports' , replace: 'true'}).catch((error) => {
          console.log(error)
        });
    },
    redirectToForm() {
      this.$router.push({ path: '/report' , replace: 'true'}).catch((error) => {
          console.log(error)
        });
    },
  },
  data: () => ({
    //
  }),
};
</script>
