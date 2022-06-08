<template>
  <v-app>
    <v-main>
      <NavBar></NavBar>
      <section id="landing_page">
        <v-row no-gutters>
          <v-img
            height="667"
            width="1280"
            src="./assets/background.jpeg"
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
                    class="align-self-end"
                    outlined
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
      <RegisterView></RegisterView>
      <LogInView></LogInView>
      <NewsView></NewsView>
      <SubmitReportView></SubmitReportView>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import RegisterView from "./views/RegisterView.vue";
import LogInView from "./views/LogInView.vue";
import SubmitReportView from "./views/SubmitReportView.vue";
import NewsView from "./views/NewsView.vue";

export default {
  name: 'App',

  components: {
    NavBar,
    RegisterView,
    LogInView,
    SubmitReportView,
    NewsView
},

  data: () => ({
    //
  }),
};
</script>
