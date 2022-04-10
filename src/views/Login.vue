<template>
  <v-app id="inspire" background-color="#F4F4F4">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs10 sm5 md3>
          <v-card class="elevation-6">
            <v-toolbar dark color="primary">
              <v-toolbar-title fluid>좋은 하루입니다. 😊 </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="mdi-account"
                  v-model="email"
                  label="이메일"
                  type="text"
                  :autofocus="autofocus"
                  required
                  :rules="emailRules"
                ></v-text-field>
                <v-text-field
                  v-model="pwsd"
                  id="password"
                  prepend-icon="mdi-lock"
                  label="비밀번호"
                  type="password"
                  :rules="pwsdRules"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" to="/">로그인</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      autofocus: true,
      email: "goodgood@breadgood.com",
      emailRules: [
        v => !!v || "이메일을 입력해주세요.",
        v => /.+@.+\..+/.test(v) || "올바른 이메일을 입력해주세요."
      ],
      pwsd: "1234",
      pwsdRules: [v => !!v || "비밀번호를 입력해주세요."]
    };
  }
};
</script>

<style lang="scss" scoped>
.theme--light.v-application {
  background-color: #5c5c5c;
}
</style>
