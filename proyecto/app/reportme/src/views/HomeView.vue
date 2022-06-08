<template>
  <section id="landing_page">
        <v-row no-gutters>
          <v-img
            height="667"
            width="1280"
            src="../assets/background.jpeg"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="white--text mx-auto"
                  justify="center"
                >
                  <v-col
                    class="white--text text-center"
                    cols="12"
                    tag="h1"
                  >
                    <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >
                      WELCOME TO
                    </span>

                    <br>
                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                      class="font-weight-black"
                    >
                      ReportMe
                    </span>
                  </v-col>

                  <v-btn
                    v-if = "!getLogged"
                    class="align-self-end"
                    outlined
                    @click="redirectToLogin"
                    
                  >
                    Log In
                  </v-btn>
                  <v-col
                    class="white--text text-center"
                    cols="12"
                    tag="h1"
                  >
                    <span 
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >
                      Tu herramienta de superviviencia post-apocalyptica
                    </span>
                  </v-col>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-row>
      </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  methods: {
    redirectToLogin() {
      this.$router.push({ path: '/login' , replace: 'true'}).catch((error) => {
          console.log(error)
        });
    }
  },
  computed: {
    getLogged(){
      return localStorage.logged;
    }
  }
}
</script>
