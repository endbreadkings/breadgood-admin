<template>
  <v-container fluid mt-0 pa-0 fill-height>
    <v-layout child-flex>
      <v-data-table
        :headers="headers"
        :items="termsList"
        class="elevation-1 "
        calculate-widths
        item-key="id"
        hide-default-footer
        :loading="isLoading"
        loading-text="Loading... Please wait"
      >
        <template v-slot:body="props">
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(item, index) in props.items"
              :key="index"
            >
              <v-expansion-panel-header>
                {{ item.executionDate }} 적용된 약관
              </v-expansion-panel-header>
              <v-expansion-panel-content v-html="item.content">
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </template>

        <!-- dialog -->
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>{{ termsTitle }}</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <router-link
              :to="`/terms/${$route.params.termsTypeId}/form`"
              tag="v-btn"
            >
              <v-btn color="primary" dark class="mb-2">
                <b>추가</b>
              </v-btn>
            </router-link>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-layout>
  </v-container>
</template>

<script>
import { fetchTermsDetail } from "../api/terms";
export default {
  name: "TermDetails",

  data() {
    return {
      imageAccept:
        "image/png, image/jpeg, image/jpg, image/svg, image/webp, image/gif",
      headers: [
        {
          text: "약관",
          value: "name",
          sortable: false
        }

        // { text: "", value: "actions", sortable: false }
      ],
      isLoading: true,
      termsTitle: "",
      termsList: [],
      termsTypeId: null
    };
  },

  async created() {
    this.termsTypeId = this.$route.params.termsTypeId;
    await this.initialize();
    this.isLoading = false;
  },
  methods: {
    async initialize() {
      const { data } = await fetchTermsDetail(this.termsTypeId);
      this.termsTitle = data.title;
      this.termsList = data.termsList;
    }
  }
};
</script>
