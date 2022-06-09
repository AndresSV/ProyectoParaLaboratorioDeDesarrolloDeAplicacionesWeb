<template>
  <v-card
    class="mx-auto"
    style="max-width: 500px;"
  >
    <v-toolbar
      color="orange accent-4"
      cards
      dark
      flat
    >
      <v-card-title class="text-h6 font-weight-regular">
        Registrarte
      </v-card-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-form
      ref="form"
      v-model="form"
      class="pa-4 pt-6"
    >
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="name"
            filled
            color="black"
            label="Nombre"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="lastname"
            filled
            color="black"
            label="Apellido"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-text-field
        v-model="username"
        filled
        color="black"
        label="Nombre de Usuario"
        type="email"
      ></v-text-field>
      <v-text-field
        v-model="phone"
        filled
        color="black"
        label="Número de celular"
        type="tel"
      ></v-text-field>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        text
        @click="$refs.form.reset()"
      >
        Borrar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        class="white--text"
        color="deep-purple accent-4"
        depressed
        @click="signup()"
      >
        Registrarte
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios'

  export default ({
    name: "RegisterForm",
    data: () => ({
      form: false,
      name: undefined,
      lastname: undefined,
      username: undefined,
      phone: undefined,
    }),
    methods: {
      signup(){
        let body = JSON.stringify(
          { 
            userid: this.username,
            name : this.name, // date: new Date(),
            lastname: this.lastname,
            phone: this.phone,
            privilege: 'User',
        });
        axios.post(this.$serverBaseURL + "user/add", body, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          if (response.status == 200) {
            this.$router.push({ path: '/' , replace: 'true'}).catch((error) => {
              console.log(error)
            });
          }
        });
      }
    }
  });
</script>