<template>
  <v-container fluid mt-0 pa-0 fill-height>
    <v-layout child-flex>
      <v-data-table
        :headers="headers"
        :items="categories"
        class="elevation-1 "
        calculate-widths
        item-key="id"
        hide-default-footer
        :loading="isLoading"
        loading-text="Loading... Please wait"
      >
        <template v-slot:body="props">
          <draggable
            ref="draggable"
            :list="props.items"
            tag="tbody"
            @start="onDraggableStart"
            @update="onDraggableUpdate"
            class="draggable"
          >
            <tr v-for="(item, index) in props.items" :key="index">
              <td>{{ item.title }}</td>
              <td><v-img :src="item.titleColoredImgUrl" max-width="100" /></td>
              <td>
                <v-img :src="item.titleUncoloredImgUrl" max-width="100" />
              </td>
              <td><v-img :src="item.makerImgUrl" max-width="100" /></td>
              <td><v-chip :color="item.color" dark></v-chip></td>
              <td><pre v-html="item.content"></pre></td>
            </tr>
          </draggable>
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
import draggable from "vuedraggable";
import { fetchBakeryCategories } from "../api/bakeryCategory";
export default {
  name: "BakeryCategory",
  components: {
    draggable
  },
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
      categories: [],
      isLoading: true,
      currentOrder: [],
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
      return this.editedIndex === -1 ? "추가" : "Edit Item";
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
  async created() {
    await this.initialize();
    this.isLoading = false;
  },
  methods: {
    async initialize() {
      const { data } = await fetchBakeryCategories();
      this.categories = data;
    },
    onDraggableStart() {
      this.currentOrder = JSON.parse(JSON.stringify(this.categories));
    },
    onDraggableUpdate(event) {
      alert("순서 변경 기능은 추후에 개발 예정입니다.");
      console.log("event", event);
      this.categories = this.currentOrder;
    },

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

<style>
.draggable {
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

/* (Optional) Apply a "closed-hand" cursor during drag operation. */
.sortable-chosen {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}
</style>
