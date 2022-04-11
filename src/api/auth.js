// 로그인, 회원 가입, (ex) 회원 탈퇴
import { instance } from "./index";

// 로그인 API
function loginUser(userData) {
  return instance.post("user/signin", userData);
}

export { loginUser };
