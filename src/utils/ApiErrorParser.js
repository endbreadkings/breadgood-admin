import store from "@/store/index";
import router from "@/router/index";

const errorParser = async response => {
  if (response.status == 500) {
    alert("서버에 문제가 발생하였습니다");
    return;
  }

  if (
    !Object.prototype.hasOwnProperty.call(response, "data") ||
    !Object.prototype.hasOwnProperty.call(response.data, "code")
  ) {
    alert("문제가 발생하였습니다.");
    return;
  }

  switch (response.data.code) {
    case -1301: // 일치하지 않은 로그인 정보
      alert("로그인 정보를 확인해주세요.");
      break;

    case -2001: // 액세스 토큰
      // TODO 액세스 토큰 연장 추후 작업하기
      loginExpire();
      break;

    case -2003: // 리프레시 토큰 만료
      loginExpire();
      break;

    default:
      alert("문제가 생겼네요..");
  }
};

function loginExpire() {
  alert("로그인 세션이 만료되었습니다. \n다시 로그인해주세요.");
  store.commit("LOGOUT");
  router.push("/login");
}

export default errorParser;
