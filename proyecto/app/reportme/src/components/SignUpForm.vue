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
            v-model="form.first"
            :rules="rules.name"
            filled
            color="black"
            counter="6"
            label="Nombre"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="form.first"
            :rules="rules.name"
            filled
            color="black"
            counter="6"
            label="Apellido"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-text-field
        v-model="phone"
        filled
        color="black"
        label="Número de celular"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="[rules.email]"
        filled
        color="black"
        label="Correo electrónico"
        type="email"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="[rules.password, rules.length(6)]"
        filled
        color="black"
        counter="6"
        label="Contraseña"
        style="min-height: 96px"
        type="new-password"
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
        :disabled="!form"
        :loading="isLoading"
        class="white--text"
        color="deep-purple accent-4"
        depressed
      >
        Registrarte
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default ({
    name: "RegisterForm",
    data: () => ({
      agreement: false,
      dialog: false,
      email: undefined,
      form: false,
      isLoading: false,
      password: undefined,
      phone: undefined,
      rules: {
        email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
        required: v => !!v || 'This field is required',
      },
    }),
  });
</script>