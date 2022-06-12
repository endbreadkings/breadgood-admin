import { authInstance } from "./index";

function fetchTermsTypes() {
  return authInstance.get("/termsType/list");
}

function fetchTermsDetail(termsTypeId) {
  return authInstance.get(`/termsType/${termsTypeId}`);
}

function createTerms(termsForm) {
  return authInstance.post("/termsType", termsForm);
}

export { fetchTermsTypes, fetchTermsDetail, createTerms };
