<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="">
                <v-col cols="10" id="headerCol">
                    <span :class="[$vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4']" 
                        class="font-weight-black">
                        Bienvendio a ReportMe
                    </span>
                    <div id="">
                    </div>
                </v-col>
            </v-col>
        </v-row>
        <v-row no-gutters>
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
                                    v-model="username"
                                    prepend-icon="mdi-account"
                                    name="username"
                                    label="Login"
                                    type="username"
                                ></v-text-field>
                                <v-text-field
                                    v-model="password"
                                    id="password"
                                    prepend-icon="mdi-lock"
                                    name="password"
                                    label="Password"
                                    type="password"
                                ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" @click="loginReq()">Login</v-btn>
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
import axios from 'axios'

export default {
    name: "loginSection",
    created() {
    },
    data() {
        return {
            username: '',
            password: '',
        }
    },
    beforeMount() {
        if (localStorage.user) {
            this.redirectToHome();
        }
    },
    methods: {
        loginReq(){
            const body = JSON.stringify({username:this.username, password:this.password});
            axios.post(this.$serverBaseURL + 'login', body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if(response.status == 200){
                    console.log("WELCOME")
                    localStorage.logged = true;
                    localStorage.user = this.username;
                    this.redirectToHome();
                }
            }).catch((error) => {
                this.$emit('invalidCredentials', error);
            });
        },
        redirectToHome() {
            this.$router.push({ path: '/' , replace: 'true'}).catch((error) => {
                console.log(error)
            });
            location.reload();
        }
    }
}
</script>