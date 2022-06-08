<template>
    <div>
        <LoginSection></LoginSection>
    </div>
</template>

<script>
import LoginSection from "../components/loginForm.vue";

export default ({
    name: "LoginView",
    components: {
        LoginSection,
    },
});
</script>