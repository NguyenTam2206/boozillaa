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
        <v-col col="12" md="5" class="text-md-center">
          <a href="https://www.facebook.com/boozilla.vn/" target="_blank" class="link">
            <v-icon class="sociallogo">mdi-facebook</v-icon>
          </a>
          <a href="https://www.instagram.com/boozilla.vn/" target="_blank" class="link">
            <v-icon class="sociallogo">mdi-instagram</v-icon>
          </a>
          <a href="https://www.youtube.com/channel/UCOWxk3gWGE4RL3wcAeBCFNA" target="_blank" class="link">
            <v-icon class="sociallogo">mdi-youtube</v-icon>
          </a>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <p style="font-size: 25px; color : white">Về Boozilla</p>
          <p><nuxt-link to="/" class="link">Giới thiệu</nuxt-link></p>
          <p><nuxt-link to="/" class="link">Cửa hàng</nuxt-link></p>
          <p><nuxt-link to="/" class="link">Bản quyền</nuxt-link></p>
        </v-col>
        <v-col cols="12" md="4">
          <p style="font-size: 25px; color : white">Thương hiệu Boo</p>
          <p><nuxt-link to="/" class="link">BOO</nuxt-link></p>
          <p><nuxt-link to="/" class="link">BOOZilla</nuxt-link></p>
          <p><nuxt-link to="/" class="link">BOOLAAB</nuxt-link></p>
          <p><nuxt-link to="/" class="link">BOOShirt</nuxt-link></p>
        </v-col>
        <v-col cols="12" md="4">
          <p style="font-size: 25px; color: white">Chính sách</p>
          <p><nuxt-link to="/" class="link">Chính sách mua hàng</nuxt-link></p>
          <p><nuxt-link to="/" class="link">Chính sách đổi trả</nuxt-link></p>
          <p><nuxt-link to="/" class="link">Chính sách bảo hành</nuxt-link></p>
          <p><nuxt-link to="/" class="link">Bảo mật thông tin</nuxt-link></p>
        </v-col>
      </v-row>
      <a href="http://online.gov.vn/Home/WebDetails/32272" target="_blank">
        <img src="../../assets/imgs/logo-bct.png" style="width: 100px;" alt="bct" />
      </a>
    </v-container>
  </v-container>
</template>

<style scoped>
.footerbg {
  background-image: url("../../assets/imgs/footerbg.png");
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
  color :  rgb(207, 207, 207);
}

.link:hover {
  color : white
}

p {
  color: rgb(207, 207, 207);
}
</style>