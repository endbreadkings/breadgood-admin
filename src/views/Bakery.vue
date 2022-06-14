<template>
  <v-container fluid mt-0 pa-0 fill-height>
    <v-layout child-flex>
      <v-data-table
        :headers="headers"
        :items="bakeries"
        class="elevation-1 "
        calculate-widths
        item-key="id"
        hide-default-footer
        :items-per-page="30"
        :loading="isLoading"
        loading-text="Loading... Please wait"
      >
        <template v-slot:body="props">
          <tr v-for="(item, index) in props.items" :key="index">
            <td>{{ item.id }}</td>
            <td>
              <a :href="item.link" target="_blank">{{ item.title }}</a>
            </td>
            <td>{{ item.user.nickName }}</td>
            <td>
              {{ item.address.roadAddress }}
            </td>
            <td>{{ item.createdAt }}</td>
            <v-card-actions>
              <v-btn
                color="primary"
                dark
                class="mb-2"
                @click="deleteBakery(index, item)"
              >
                <b>삭제</b>
              </v-btn>
            </v-card-actions>
          </tr>
        </template>
      </v-data-table>
    </v-layout>
  </v-container>
</template>

<script>
import { fetchBakeries, deleteBakery } from "../api/bakery";
export default {
  name: "BakeryCategory",

  data() {
    return {
      headers: [
        {
          text: "빵집번호"
        },
        {
          text: "제목"
        },
        {
          text: "작성자"
        },
        {
          text: "주소"
        },
        { text: "생성일" },
        { text: "", value: "actions", sortable: false }
      ],
      bakeries: [],
      isLoading: true
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "빵집 카테고리 추가" : "Edit Item";
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
      const { data } = await fetchBakeries();

      data.forEach(bakery => {
        this.bakeries.push({
          link: `${process.env.VUE_APP_API_URL_BASE}/pages/bakery/detail?bakeryId=${bakery.id}&userId=0&isAdmin=true`,
          ...bakery
        });
      });
    },
    async deleteBakery(index, item) {
      console.log("bakery", item);
      console.log("index", index);
      if (!confirm("정말 삭제하실거에욧?")) {
        return;
      }

      await deleteBakery(item.id);
      this.bakeries.splice(index, 1);
      alert("삭제완료! 다신복구 X");
    },
    async save() {
      // // 생성
      // const formData = new FormData();
      // console.log("this.editedItem", this.editedItem);
      // formData.append("title", this.editedItem.title);
      // formData.append("titleColoredImg", this.editedItem.titleColoredImg);
      // formData.append("titleUncoloredImg", this.editedItem.titleUncoloredImg);
      // formData.append("markerImg", this.editedItem.markerImg);
      // formData.append("color", this.editedItem.color);
      // formData.append("content", this.editedItem.content);
      // console.log("formData", formData);
      // formData.forEach(value => console.log("forEach", value));
      // const { data } = await fetchBakeries();
      // this.bakeries.push(data);
      // this.close();
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
