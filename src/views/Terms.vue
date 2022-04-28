<template>
  <v-container fluid mt-0 pa-0 fill-height>
    <v-layout child-flex>
      <v-data-table
        :headers="headers"
        :items="termsTypes"
        class="elevation-1 "
        calculate-widths
        item-key="id"
        hide-default-footer
        :loading="isLoading"
        loading-text="Loading... Please wait"
      >
        <template v-slot:body="props">
          <tr v-for="(item, index) in props.items" :key="index">
            <td>
              <router-link tag="a" :to="/terms/ + item.id">
                {{ item.name }}
              </router-link>
            </td>
            <td>{{ item.required ? "필수" : "선택" }}</td>
            <td>
              <a :href="item.link" target="_blank">{{ item.link }}</a>
            </td>
          </tr>
        </template>

        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>약관타입</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <router-link :to="`/termstype/form`" tag="v-btn">
              <v-btn color="primary" dark class="mb-2">
                <b>새로만들기</b>
              </v-btn>
            </router-link>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-layout>
  </v-container>
</template>

<script>
import { fetchTermsTypes } from "../api/terms";
export default {
  name: "Terms",

  data() {
    return {
      headers: [
        { text: "약관타입명", sortable: false },
        { text: "가입시 필수동의여부", sortable: false },
        { text: "적용된 약관 링크", sortable: false }
      ],
      termsTypes: [],
      isLoading: true
    };
  },

  async created() {
    await this.initialize();
    this.isLoading = false;
  },
  methods: {
    async initialize() {
      const { data } = await fetchTermsTypes();
      console.log("data", data);
      data.forEach(term => {
        this.termsTypes.push({
          id: term.typeId,
          name: term.name,
          required: term.required,
          link: `${process.env.VUE_APP_API_URL_BASE}${term.termsLink}`
        });
      });
    }
  }
};
</script>
