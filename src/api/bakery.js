// 로그인, 회원 가입, (ex) 회원 탈퇴
import { bakery } from "./index";

function fetchBakeries() {
  return bakery.get("/list");
}

function deleteBakery(id) {
  return bakery.delete("/" + id);
}

export { fetchBakeries, deleteBakery };
