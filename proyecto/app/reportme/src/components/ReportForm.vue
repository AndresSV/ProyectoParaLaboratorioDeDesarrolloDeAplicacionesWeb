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
        v-model="valid"
        lazy-validation
        class="pa-4 pt-6"
    >
        <v-text-field
        v-model="message"
        :counter="10"
        label="Asunto"
        required
        ></v-text-field>

        <v-text-field
        v-model="message"
        label="Descripción"
        required
        ></v-text-field>

        <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Tipo es necesario']"
        label="Tipo"
        required
        ></v-select>

  <v-file-input
    :rules="rules"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Enviar fotografía"
    prepend-icon="mdi-camera"
    label="Fotografía"
    show-size
    multiple

  >
  <template v-slot:selection="{ text }">
      <v-chip
        small
        label
        color="primary"
      >
        {{ text }}
      </v-chip>
    </template></v-file-input>

        <v-btn
        color="error"
        class="mr-4"
        @click="reset"
        >
        Borrar Todo
        </v-btn>

        <v-btn
        >
        Enviar Reporte
        </v-btn>

        
  </v-form>
</v-card>
</template>

<script>

export default ({
    name:'ReportForm',
    data: () => ({
        items: [
        'Urgente',
        'Sospechoso',
        'Avistamiento',
        'Soporte',
      ],
    })
})
</script>
