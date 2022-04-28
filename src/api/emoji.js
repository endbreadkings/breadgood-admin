import { emoji } from "./index";
// 빵집 카테고리
function fetchEmojis() {
  return emoji.get("/list");
}

function createEmoji(emojiForm) {
  console.log("emojiForm", emojiForm);
  return emoji.post("/", emojiForm, {
    headers: {
      "Content-type": "multipart/form-data"
    }
  });
}

export { fetchEmojis, createEmoji };
