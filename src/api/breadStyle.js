import { breadStyle } from "./index";
// 빵집 카테고리
function fetchBreadStyle() {
  return breadStyle.get("/list");
}

function createBreadStyle(breadStyleForm) {
  console.log("breadStyleForm", breadStyleForm);
  return breadStyle.post("/", breadStyleForm, {
    headers: {
      "Content-type": "multipart/form-data"
    }
  });
}

export { fetchBreadStyle, createBreadStyle };
