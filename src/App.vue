<template>
  <v-app>
    <template v-if="isLogin">
      <v-app-bar app color="grey900" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <div class="d-flex align-center" @click="drawer = true"></div>

        <v-spacer></v-spacer>
        <span class="mr-2"><b>빵긋 관리자</b></span>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/images/login-hello.png"
          transition="scale-transition"
          width="40"
        />
      </v-app-bar>

      <v-navigation-drawer
        class="primary accent-4"
        v-model="drawer"
        dark
        color="grey900"
        absolute
        temporary
        height="100vh"
      >
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block color="grey700" @click="logout">
              <span style="font-size:16px">나가기</span>
            </v-btn>
          </div>
        </template>
        <v-spacer></v-spacer>
      </v-navigation-drawer>
    </template>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLogin"])
  },
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
    items: [
      { title: "대시보드", icon: "mdi-view-dashboard", link: "/dashboard" },
      { title: "약관 관리", icon: "mdi-account-box", link: "/terms" },
      { title: "최애빵 관리", icon: "mdi-folder-heart", link: "/bread/style" },
      {
        title: "리뷰 이모지 관리",
        icon: "mdi-emoticon",
        link: "/emoji"
      },
      {
        title: "빵집 카테고리 관리",
        icon: "mdi-shape",
        link: "/bakery/category"
      },
      {
        title: "빵집 관리",
        icon: "mdi-glasses",
        link: "/bakery"
      }
    ]
  }),
  methods: {
    async logout() {
      this.$store.commit("LOGOUT");
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.theme--light.v-application {
  background-color: #1e1e1e;
}

.v-list-item--active {
  background-color: #4579ff;
  color: white;
}
</style>
