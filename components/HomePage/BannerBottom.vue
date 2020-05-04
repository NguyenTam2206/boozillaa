<template>
  <v-container fluid style="padding: 0px;">
    <div class="banner-home-2">
      <v-container>
        <div style="background-color: white">
          <v-row style="padding: 30px 40px">
            <v-col cols="12" md="6">
              <h1 style="color : #04335e;" class="title" >
                BOO X STAR WARS
                <br />THE RISE OF SKYWALKER
              </h1>
              <p class="my-5">Star Wars editorial: Huyền thoại đã đi đến hồi kết nhưng câu chuyện sẽ sống mãi. Tham gia vào hành trình bất tận của Star Wars, lật lại những trang sử hào hùng của nhà Skywalker để cùng nhau quật khởi cho một lần... và mãi mãi. Bộ sưu tập BOO x Star Wars cũng đã sẵn sàng cho mỗi chúng ta, để bước tới điểm cuối hành trình mang tên: “The Rise of Skywalker”!</p>
              <v-btn color="#E6E7E8">Xem Ngay</v-btn>
            </v-col>
            <v-col cols="12" md="6">
                <div>
                    <img src="../../assets/imgs/bannerbottomhome.webp" alt="banner2" style="max-width: 100%">
                </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </v-container>
</template>

<style scoped>
.banner-home-2 {
  background: url(//theme.hstatic.net/1000405081/1000541634/14/link_banner_collection_home_2.png?v=1243);

  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 40px 0;
}

@media (min-width: 960px) {
    .title {
        margin-top : 130px;
    }
}
</style>