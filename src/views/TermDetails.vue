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
              <v-expansion-panel-content>
                {{ item.content }}
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
            <v-btn color="primary" dark class="mb-2">
              <b>추가</b>
            </v-btn>
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
      termsDetail: null,
      isLoading: true
    };
  },

  async created() {
    await this.initialize();
    this.isLoading = false;
  },
  methods: {
    async initialize() {
      const termsTypeId = this.$route.params.termsTypeId;

      const { data } = await fetchTermsDetail(termsTypeId);
      this.termsTitle = data.title;
      this.termsList = data.termsList;
    }
  }
};
</script>
