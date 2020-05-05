<template>
  <v-container fluid style="padding: 0px; margin-top : 20px;" class="footerbg">
    <v-container style="margin-top: 10px;">
      <v-row class="white--text">
        <v-col cols="12" md="7">
          <form action>
            <div style="font-size: 30px; margin-bottom : 20px;">Đăng ký nhận tin</div>
            <div>
              <input type="text" placeholder="Nhập email của bạn" />
              <button class="button" type="button">Đăng ký</button>
            </div>
          </form>
        </v-col>
        <v-col col="12" md="5" class="text-center">
          <a href="/" class="link">
            <v-icon class="sociallogo">mdi-facebook</v-icon>
          </a>
          <a href="/" class="link">
            <v-icon class="sociallogo">mdi-instagram</v-icon>
          </a>
          <a href="/" class="link">
            <v-icon class="sociallogo">mdi-youtube</v-icon>
          </a>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <p style="font-size: 25px; color : white">Về Boozilla</p>
          <p>Giới thiệu</p>
          <p>Cửa hàng</p>
          <p>Bản quyền</p>
        </v-col>
        <v-col cols="12" md="4">
          <p style="font-size: 25px; color : white">Thương hiệu Boo</p>
          <p>BOO</p>
          <p>BOOZilla</p>
          <p>BOOLAAB</p>
          <p>BOOShirt</p>
        </v-col>
        <v-col cols="12" md="4">
          <p style="font-size: 25px; color: white">Chính sách</p>
          <p>Chính sách mua hàng</p>
          <p>Chính sách đổi trả</p>
          <p>Chính sách bảo hành</p>
          <p>Bảo mật thông tin</p>
        </v-col>
      </v-row>
      <a href="/">
        <img src="../../assets/imgs/logo-bct.webp" style="width: 100px;" alt="bct" />
      </a>
    </v-container>
  </v-container>
</template>

<style scoped>
.footerbg {
  background-image: url("../../assets/imgs/footerbg.webp");
  background-size: cover;
  background-position: center;
  width: 100%;
}
input {
  background-color: black;
  color: white;
  padding-left: 15px;
  height: auto;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 300px;
}
@media (max-width: 600px) {
  input {
    width: 200px;
  }
}
.button {
  height: 34px;
  padding: 5px 15px;
  background-color: white;
  color: black;
  transition: all ease 0.5s;
}
.button:hover {
  background-color: black;
  color: white;
  transition: all ease 0.5s;
}

.sociallogo {
  color: rgb(207, 207, 207);
  font-size: 45px;
  margin-left: 10px;
}

.sociallogo:hover {
  color: white;
}

.link {
  text-decoration: none;
}

p {
  color: rgb(207, 207, 207);
}
</style>