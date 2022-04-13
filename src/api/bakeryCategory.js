// 로그인, 회원 가입, (ex) 회원 탈퇴
import { bakeryCategory } from "./index";
// 로그인 API
function fetchBakeryCategories() {
  return bakeryCategory.get("/list");
}

export { fetchBakeryCategories };
