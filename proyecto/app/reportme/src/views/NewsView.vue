<template>
  <v-app id="inspire">
    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
          <v-col
            cols="12"
          >
            <v-card>

              <v-list two-line>
                <template v-for="n in reports">
                  <v-list-item :key="n.reportId" >
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Reporte {{n.reportId}}, {{ n.title }}</v-list-item-title>

                      <v-list-item-subtitle>
                        {{n.date.substring(0,10)}}
                      </v-list-item-subtitle>
                        <p>{{n.description}}</p>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      drawer: null,
      reports: {},
    }),
    beforeMount() {
            axios.get(this.$serverBaseURL + 'report/all').then(response => {
                if(response.status == 200){
                  this.reports = response.data
                  console.log(this.reports)
                }
            }).catch((error) => {
                this.$emit('invalidCredentials', error);
            });
    }
  }
</script>