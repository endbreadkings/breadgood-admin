<template>
  <div class="not-found-wrap">
    <div class="not-found-container">
      <div>
        <h1>페이지를 찾지 못하였습니다.</h1>
        <v-card-actions class="pl-0">
          <v-btn color="primary" to="/">홈으로 돌아가기</v-btn>
        </v-card-actions>
      </div>
      <div class="display-3">
        <v-img
          alt="Logo"
          src="@/assets/images/login-hello.png"
          transition="scale-transition"
          full
          width="120px"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.paragraph-text {
  font-size: 18px;
}
.not-found-wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.not-found-container {
  display: flex;
  justify-items: left;
  align-items: flex-start;
  width: 100%;
  /* flex-direction: column; */
  word-break: keep-all;
  max-width: 478px;
  justify-content: space-between;
  align-content: flex-start;
}
</style>
