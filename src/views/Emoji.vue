<template>
  <v-container fluid mt-0 pa-0 fill-height>
    <v-layout child-flex>
      <v-data-table
        :headers="headers"
        :items="emojis"
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
              <td>{{ item.name }}</td>
              <td><v-img :src="item.imgUrl" max-width="100" /></td>
            </tr>
          </draggable>
        </template>

        <!-- dialog -->
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>리뷰 이모지</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-form @submit.prevent="save" v-model="valid">
              <v-dialog v-model="dialog" max-width="500px" persistent>
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
                        <v-col cols="12" sm="12" md="12">
                          <v-text-field
                            :rules="nameRules"
                            v-model="editedItem.name"
                            label="제목"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-file-input
                            v-model="editedItem.img"
                            :rules="imageFileRules"
                            :accept="imageAccept"
                            placeholder="이미지를 업로드 해주세요."
                            prepend-icon="mdi-camera"
                            label="이모지 이미지"
                          ></v-file-input>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close"
                      >취소
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="save"
                      :disabled="!valid"
                      >저장
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-form>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-layout>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";
import { fetchEmojis, createEmoji } from "../api/emoji";
export default {
  name: "EmojiForm",
  components: {
    draggable
  },
  data() {
    return {
      imageAccept:
        "image/png, image/jpeg, image/jpg, image/svg, image/webp, image/gif",
      headers: [
        {
          text: "이모지명",
          value: "name",
          sortable: false
        },
        { text: "이모지 이미지", value: "imgUrl", sortable: false }

        // { text: "", value: "actions", sortable: false }
      ],
      emojis: [],
      isLoading: true,
      currentOrder: [],
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        name: "",
        img: []
      },
      defaultItem: {
        name: "",
        img: []
      },
      valid: false,
      nameRules: [v => !!v || "이모지명을 입력해주세요."],
      imageFileRules: [v => !!v || "이미지를 업로드해주세요."]
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "리뷰 이모지 추가" : "Edit Item";
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
      const { data } = await fetchEmojis();
      this.emojis = data;
    },
    onDraggableStart() {
      this.currentOrder = JSON.parse(JSON.stringify(this.emojis));
    },
    onDraggableUpdate(event) {
      alert("순서 변경 기능은 추후에 개발 예정입니다.");
      console.log("event", event);
      this.emojis = this.currentOrder;
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
    async save() {
      // 생성
      const formData = new FormData();
      console.log("this.editedItem", this.editedItem);
      formData.append("name", this.editedItem.name);
      formData.append("img", this.editedItem.img);

      console.log("formData", formData);
      formData.forEach(value => console.log("forEach", value));

      const { data } = await createEmoji(formData);
      this.emojis.push(data);
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
