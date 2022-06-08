<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="">
                <v-col cols="2" id="logoCol"><img src="../assets/logo.png" id="Logo"></v-col>
                <v-col cols="10" id="headerCol">
                    <span :class="[$vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4']" 
                        class="font-weight-black">
                        Bienvendio a ReportMe
                    </span>
                    <div id="">
                    </div>
                </v-col>
            </v-col>
            <v-col cols ="12">
                <v-container fluid fill-height>
                    <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>Login form</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                <v-text-field
                                    prepend-icon="mdi-account"
                                    name="login"
                                    label="Login"
                                    type="text"
                                ></v-text-field>
                                <v-text-field
                                    id="password"
                                    prepend-icon="mdi-lock"
                                    name="password"
                                    label="Password"
                                    type="current-password"
                                ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" to="/">Login</v-btn>
                                <v-btn color="primary" to="/signup">Sign Up</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                    </v-layout>
                </v-container>  
            </v-col>
        </v-row>
    </v-container>
</template>


<script>

export default {
    name: "loginSection",
    created() {
    },
    data() {
        return {
            usernameInput: '',
            passwordInput: '',
            isValidUser: false,

            msg: {
                usernameInput: '',
                passwordInput: ''
            }
        }
    },
    computed: {
    }
}
</script>