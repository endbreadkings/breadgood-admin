<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-row>
          <v-col cols="6" sm="1"> </v-col>
          <v-col cols="6" sm="5">
            <v-card class="mt-14 mx-auto" max-width="600">
              <v-sheet
                class="v-sheet--offset mx-auto"
                color="primary"
                elevation="12"
                max-width="calc(100% - 32px)"
              >
                <v-sparkline
                  :labels="labels"
                  :value="value"
                  color="white"
                  line-width="2"
                  padding="14"
                  height="120"
                  smooth="6"
                  auto-draw
                  auto-draw-easing
                ></v-sparkline>
              </v-sheet>
              <v-card-text class="pt-2">
                <div class="text-h6 font-weight-light mb-2">
                  <b>회원 가입</b>
                </div>
                <v-divider class="my-2"></v-divider>
                <v-icon class="mr-2" small>mdi-clock</v-icon>
                <span class="text-caption grey--text font-weight-light"
                  >last registration 26 minutes ago</span
                >
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="6" sm="5">
            <v-card class="mt-14 mx-auto" max-width="600">
              <v-sheet
                class="v-sheet--offset mx-auto"
                color="secondary"
                elevation="12"
                max-width="calc(100% - 32px)"
              >
                <v-sparkline
                  :labels="labels"
                  :value="value"
                  color="white"
                  line-width="2"
                  padding="14"
                  height="120"
                  smooth="6"
                  auto-draw
                  auto-draw-easing
                ></v-sparkline>
              </v-sheet>
              <v-card-text class="pt-0">
                <div class="text-h6 font-weight-light mb-2">
                  <b>빵집 등록</b>
                </div>

                <v-divider class="my-2"></v-divider>
                <v-icon class="mr-2" small>
                  mdi-clock
                </v-icon>
                <span class="text-caption grey--text font-weight-light"
                  >last registration 26 minutes ago</span
                >
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월"],
    series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]],
    value: [200, 675, 410, 390, 310, 460, 250, 240]
  })
};
</script>

<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
