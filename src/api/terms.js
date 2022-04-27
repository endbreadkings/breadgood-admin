import { authInstance } from "./index";

function fetchTermsTypes() {
  return authInstance.get("/termsType/list");
}

function fetchTermsDetail(termsTypeId) {
  // return authInstance.get(`/termsType/${termsTypeId}`);

  console.log("termsTypeId", termsTypeId);

  const result = {
    data: {
      title: "개인정보약관",
      termsList: [
        {
          content: "내용1",
          executionDate: "2022-12-31"
        },
        {
          content: "내용2",
          executionDate: "2022-12-12"
        },
        {
          content: "내용1",
          executionDate: "2022-12-5"
        }
      ]
    }
  };
  return result;
}
export { fetchTermsTypes, fetchTermsDetail };
