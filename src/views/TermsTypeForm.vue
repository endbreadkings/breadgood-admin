<template>
  <form>
    <v-toolbar>
      <v-toolbar-title>약관최초 등록하기</v-toolbar-title>
    </v-toolbar>
    <v-text-field
      prepend-icon="mdi-text"
      v-model="name"
      label="약관타입명"
    ></v-text-field>
    <v-checkbox
      v-model="required"
      label="필수선택여부"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          label="적용날짜"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        :active-picker.sync="activePicker"
        :min="getStartDate"
        :max="getEndDate"
        @change="save"
      ></v-date-picker>
    </v-menu>
    <div class="tiptap-container">
      <tiptap-vuetify
        fill-height
        placeholder="Write something …"
        v-model="content"
        :extensions="extensions"
        :card-props="{ flat: true }"
        :toolbar-attributes="{ color: '#333333' }"
      />
    </div>
    <v-btn class="mr-4" @click="submit">
      등록
    </v-btn>
  </form>
</template>

<script>
// don't forget to import styles
import { createTerms } from "../api/terms";
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  Table,
  TableHeader,
  TableCell,
  TableRow
} from "tiptap-vuetify";

export default {
  name: "termsTypeForm",
  components: { TiptapVuetify },
  data: () => ({
    // declare extensions you want to use
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      Bold,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak,
      Table,
      TableHeader,
      TableCell,
      TableRow
    ],
    // starting editor's content
    content: ``,
    activePicker: null,
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    required: false,
    name: ""
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    }
  },
  computed: {
    getEndDate() {
      const today = new Date();
      var endDate = new Date(today.getFullYear() + 1, today.getMonth() + 1, 10);
      return endDate.toISOString().slice(0, 10);
    },
    getStartDate() {
      return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10);
    }
  },
  created() {},
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    async submit() {
      if (!this.name) {
        alert("약관타입명을 입력해주세요.");
        return;
      }
      if (!this.content) {
        alert("내용을 입력해주세요.");
        return;
      }

      if (!this.date) {
        alert("적용날짜를 입력해주세요.");
        return;
      }

      if (!confirm("정말 등록 하시겠습니까?")) {
        return;
      }

      const termsTypeForm = {
        name: this.name,
        required: this.required,
        content: this.content,
        executionDate: this.date
      };

      console.log("termsTypeForm", termsTypeForm);

      try {
        await createTerms(termsTypeForm);
        alert("정상적으로 저장되었습니다.");
      } catch (error) {
        alert("저장하는데 실패하였습니다.");
      }
    }
  }
};
</script>

<style lang="scss">
.tiptap-vuetify-editor__content {
  height: 500px;
}
</style>
