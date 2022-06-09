<template>
<v-card
class="mx-auto"
    style="max-width: 780px;">
<v-toolbar flat dark >
    <v-card-title class="text-h6 font-weight-regular">
        Informe
      </v-card-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
</v-toolbar>
    <v-form
        ref="form"
        v-model="form"
        lazy-validation
        class="pa-4 pt-6"
    >
        <v-text-field
        v-model="title"
        label="Titulo"
        required
        ></v-text-field>

        <v-text-field
        v-model="description"
        label="Descripción"
        required
        ></v-text-field>

        <!-- <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Tipo es necesario']"
        label="Tipo"
        required
        ></v-select> -->

        <v-btn
          color="error"
          class="mr-4"
          @click="$refs.form.reset()"
        >
        Borrar Todo
        </v-btn>
        <v-btn
          @click="submitReport()"
        >
        Enviar Reporte
        </v-btn>

        
  </v-form>
</v-card>
</template>

<script>
import axios from 'axios';

export default ({
    name:'ReportForm',
    data: () => ({
      form: false,
      title: "",
      description: "",
      select: undefined,
      // items: [
      //   'Urgente',
      //   'Sospechoso',
      //   'Avistamiento',
      //   'Soporte',
      // ],
    }),
    methods: {
      submitReport() {
        let body = JSON.stringify(
          { 
            userid: localStorage.user,
            // date: new Date(),
            title: this.title,
            description: this.description,
            status: 0,
        });
        axios.post(this.$serverBaseURL + "report/add", body, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          if (response.status == 200) {
            this.$router.push({ path: '/reports' , replace: 'true'}).catch((error) => {
              console.log(error)
            });
          }
        });
      }
    }
})
</script>
