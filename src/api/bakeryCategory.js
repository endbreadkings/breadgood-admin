// 로그인, 회원 가입, (ex) 회원 탈퇴
import { bakeryCategory } from "./index";
// 로그인 API
function fetchBakeryCategories() {
  return bakeryCategory.get("/list");
}

function createBakeryCategory(bakeryCategoryForm) {
  console.log("bakeryCategoryForm", bakeryCategoryForm);
  return bakeryCategory.post("/", bakeryCategoryForm, {
    headers: {
      "Content-type": "multipart/form-data"
    }
  });
}

export { fetchBakeryCategories, createBakeryCategory };
