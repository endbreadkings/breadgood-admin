<template>
  <v-container fluid width="100%">
    <v-layout align-start justify-center>
      <v-data-table
        :headers="headers"
        :items="categories"
        class="elevation-1 "
        dark
      >
        <template v-slot:[`item.color`]="{ item }">
          <v-chip :color="item.color" dark>
            {{ item.calories }}
          </v-chip>
        </template>
        <template v-slot:[`item.titleColoredImgUrl`]="{ item }">
          <v-img :src="item.titleColoredImgUrl" max-width="100" />
        </template>
        <template v-slot:[`item.titleUncoloredImgUrl`]="{ item }">
          <v-img :src="item.titleUncoloredImgUrl" max-width="100" />
        </template>
        <template v-slot:[`item.makerImgUrl`]="{ item }">
          <v-img :src="item.makerImgUrl" max-width="100" />
        </template>
        <template v-slot:[`item.content`]="{ item }">
          <pre v-html="item.content"></pre>
        </template>

        <!-- dialog -->
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>빵집 카테고리</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  <b>추가</b>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.name"
                          label="Dessert name"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.calories"
                          label="Calories"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.fat"
                          label="Fat (g)"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.carbs"
                          label="Carbs (g)"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.protein"
                          label="Protein (g)"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "BakeryCategory",
  components: {},
  data() {
    return {
      headers: [
        {
          text: "제목",
          value: "title",
          sortable: false
        },
        {
          text: "대표 색상 이미지",
          value: "titleColoredImgUrl",
          sortable: false
        },
        {
          text: "대표 흑백 이미지",
          value: "titleUncoloredImgUrl",
          sortable: false
        },
        { text: "마커 이미지", value: "makerImgUrl", sortable: false },
        { text: "색상", value: "color", sortable: false },
        { text: "내용", value: "content", sortable: false }
        // { text: "", value: "actions", sortable: false }
      ],
      categories: [
        {
          id: 2,
          title: "음료&빵",
          titleColoredImgUrl:
            "https://d74hbwjus7qtu.cloudfront.net/admin/cate1_blue.svg",
          titleUncoloredImgUrl:
            "https://d74hbwjus7qtu.cloudfront.net/admin/cate1_white.svg",
          color: "#4579FF",
          makerImgUrl: "https://d74hbwjus7qtu.cloudfront.net/admin/pin_on.png",
          sortNumber: 1,
          content: "커피&차와 함께 빵을\n즐길수 있는 베이커리 카페"
        },
        {
          id: 1,
          title: "빵에집중",
          titleColoredImgUrl:
            "https://d74hbwjus7qtu.cloudfront.net/admin/cate2_yellow.svg",
          titleUncoloredImgUrl:
            "https://d74hbwjus7qtu.cloudfront.net/admin/cate2_white.svg",
          color: "#FEBE52",
          makerImgUrl:
            "https://d74hbwjus7qtu.cloudfront.net/admin/pin_be_off.png",
          sortNumber: 2,
          content: "빵을 전문적으로 파는\n일반 베이커리"
        }
      ],
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        title: "",
        titleColoredImgUrl: "",
        titleUncoloredImgUrl: "",
        color: "",
        makerImgUrl: "",
        content: ""
      },
      defaultItem: {
        title: "",
        titleColoredImgUrl: "",
        titleUncoloredImgUrl: "",
        color: "",
        makerImgUrl: "",
        content: ""
      }
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {},

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.categories[this.editedIndex], this.editedItem);
      } else {
        this.categories.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style></style>
