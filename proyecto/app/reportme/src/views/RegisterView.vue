<template>
    <div class="registerDiv">
        <v-row id="headerContainer" cols="12">
        </v-row>
        <v-row id="registerContainer">
            <div>
                <signup id="registerForm"></signup>
            </div>
        </v-row>
                <v-row id="headerContainer" cols="12">
        </v-row>

    </div>
</template>

<script>
export default {
    name:'RegisterView',
    components: {
        signup
    }
}
import signup from '../components/SignUpForm.vue'
</script>

<style scoped>
    #registerContainer{
        justify-content: center;
    }
    #headerContainer{
        margin-left: 15rem;
        margin-top: 2rem;
    }
    #registerForm {
        margin-top: 1rem;
    }
    #mainContainer {
        margin-top: 2rem;
    }
    #header{
        font-family: Roboto;
        position: relative;
        font-size: 3rem;
        font-weight: 500;
        color: #000001;
        margin-top: 5rem;
        margin-left: 2.5rem;
    }
</style>