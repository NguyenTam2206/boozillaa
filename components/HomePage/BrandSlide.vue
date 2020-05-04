<template>
  <nuxt-link to="/collection/ban-quyen">
    <div class="brand-wrap mt-md-10 mb-10">
      <img src="../../assets/imgs/brandslide1.webp" class="brand photoLogo upAnim1" alt="brandslide" />
      <img src="../../assets/imgs/brandslide2.webp" class="brand photoLogo upAnim2" alt="brandslide" />
      <img src="../../assets/imgs/brandslide1.webp" class="brand photoLogo upAnim3" alt="brandslide" />
    </div>
  </nuxt-link>
</template>

<style scoped>
.brand-wrap {
  max-width: 700px;
  margin: 0 auto 0px auto;
  height: 83px;
  overflow: hidden;
  position: relative;
  text-align: center;
}

.brand {
  width: 32%;
  display: inline-block;
  border-right: 1px solid rgb(211, 211, 211);
}

.photoLogo.upAnim1{animation: anim1 15s ease-in-out infinite;}
.photoLogo.upAnim2{animation: anim2 17s ease-in-out infinite;}
.photoLogo.upAnim3{animation: anim3 19.2s ease-in-out infinite;}
@keyframes anim1 { 0%{transform: translateY(0%)} 50%{transform: translateY(-78%)} 100%{transform: translateY(0%)}}
@keyframes anim2 { 0%{transform: translateY(-75%)} 50%{transform: translateY(0vw)} 100%{transform: translateY(-75%)}}
@keyframes anim3 { 0%{transform: translateY(0%)} 50%{transform: translateY(-78%)} 100%{transform: translateY(0%)}}

</style>
