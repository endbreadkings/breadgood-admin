<template>
  <v-app id="inspire" background-color="#F4F4F4">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs10 sm5 md3>
          <v-card class="elevation-6">
            <v-toolbar dark color="primary">
              <v-toolbar-title><b>빵긋</b> 😊 </v-toolbar-title>
            </v-toolbar>
            <v-form @submit.prevent="formSubmit" v-model="valid">
              <v-card-text>
                <v-text-field
                  prepend-icon="mdi-account"
                  v-model="email"
                  label="이메일"
                  type="text"
                  :autofocus="autofocus"
                  required
                  :rules="emailRules"
                  @keyup.enter="formSubmit"
                ></v-text-field>
                <v-text-field
                  v-model="pwsd"
                  id="password"
                  prepend-icon="mdi-lock"
                  label="비밀번호"
                  type="password"
                  :rules="pwsdRules"
                  @keyup.enter="formSubmit"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" :disabled="!valid" @click="formSubmit"
                  >로그인</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import apiErrorParser from "@/utils/ApiErrorParser";
export default {
  name: "Login",
  data() {
    return {
      valid: false,
      autofocus: true,
      email: "",
      emailRules: [
        v => !!v || "이메일을 입력해주세요.",
        v => /.+@.+\..+/.test(v) || "올바른 이메일을 입력해주세요."
      ],
      pwsd: "",
      pwsdRules: [v => !!v || "비밀번호를 입력해주세요."]
    };
  },
  methods: {
    async formSubmit() {
      if (!this.valid) {
        return;
      }
      const userData = {
        email: this.email,
        password: this.pwsd
      };
      try {
        const result = await this.$store.dispatch("LOGIN", userData);
        console.log("result", result);
        this.$router.push("/dashBoard");
      } catch (error) {
        error.response.data.code = -2001;
        apiErrorParser(error.response);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
