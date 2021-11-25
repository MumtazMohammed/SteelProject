<template>
  <div class="product-box">
    <div class="dot">
      <span class="line-right"></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span class="line-left"></span>
    </div>
    <div class="container">
      <div
        class="
          row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4
          g-4
        "
      >
        <div class="col">
          <div class="card">
            <img
              src="../assets/aluminijum_1_200617_tw630.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">حـديد مصـفح</h5>
              <p class="card-text">
                مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما
                ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على
              </p>
              <div class="d-grid gap-2">
                <button class="btn" type="button">
                  رسـالة نصـية
                  <span class="icon"> <fa icon="comment" /></span>
                </button>
                <button class="btn" type="button">
                  أتصل ينـا <span class="icon"> <fa icon="phone-alt" /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="../assets/aluminijum_1_200617_tw630.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">حـديد مصـفح</h5>
              <p class="card-text">
                مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما
                ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على
              </p>
              <div class="d-grid gap-2">
                <button class="btn" type="button">
                  رسـالة نصـية
                  <span class="icon"> <fa icon="comment" /></span>
                </button>
                <button class="btn" type="button">
                  أتصل ينـا <span class="icon"> <fa icon="phone-alt" /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="../assets/aluminijum_1_200617_tw630.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">حـديد مصـفح</h5>
              <p class="card-text">
                مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما
                ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على
              </p>
              <div class="d-grid gap-2">
                <button class="btn" type="button">
                  رسـالة نصـية
                  <span class="icon"> <fa icon="comment" /></span>
                </button>
                <button class="btn" type="button">
                  أتصل ينـا <span class="icon"> <fa icon="phone-alt" /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="../assets/aluminijum_1_200617_tw630.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">حـديد مصـفح</h5>
              <p class="card-text">
                مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما
                ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على
              </p>
              <div class="d-grid gap-2">
                <button class="btn" type="button">
                  رسـالة نصـية
                  <span class="icon"> <fa icon="comment" /></span>
                </button>
                <button class="btn" type="button">
                  أتصل ينـا <span class="icon"> <fa icon="phone-alt" /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-secotion />
  </div>
</template>

<script>
import FooterSecotion from "../components-main/FooterSection.vue";

export default {
  mame: "product",
  components: {
    FooterSecotion,
  },
};
</script>

<style scoped>
.product-box {
  padding: 30px 0 0 0;
  background-color: #eeeeee;
  min-height: 100vh;
  width: 100%;
  position: relative;
  border-top: 3px solid #085aa5;
}
.product-box::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 15%;
  bottom: 0;
  left: 0;
  background-color: #085aa5;
  clip-path: polygon(0 100%, 0 50%, 50% 0, 100% 50%, 100% 100%);
}
.container {
  min-height: 100vh;
  padding-top: 30px;
  padding-bottom: 30px;
}
.dot {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}
span {
  width: 7px;
  height: 7px;
  background-color: #055eb1;
  display: inline-block;
  margin: 0 1px;
  border-radius: 50%;
}
.line-right {
  width: 40px;
  height: 4px;
  border-radius: 0%;
}
.line-left {
  width: 40px;
  height: 4px;
  border-radius: 0%;
}
.card {
  background-color: #ffffff93;
  overflow: hidden;
  border: none;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(5px);
}
.card-title {
  font-family: "El Messiri";
  font-weight: bold;
  color: #4c4c4c;
  pointer-events: none;
}
.card-text {
  font-family: "El Messiri";
  line-height: 1.6;
  color: #6c6a6a;
  font-weight: 500;
  pointer-events: none;
}
.btn:focus {
  box-shadow: none;
}
.btn:active {
  box-shadow: none;
}
.btn:nth-child(1) {
  background-color: #25d366;
  border: none;
  font-family: "El Messiri";
  font-weight: 500;
  color: #ffffff;
  font-size: 17px;
  pointer-events: none;
}
.btn:nth-child(1):hover {
  box-shadow: 0px 0px 0px 1px #25d366;
}

.btn:nth-child(2) {
  background-color: #2196f3;
  border: none;
  font-family: "El Messiri";
  font-weight: 500;
  color: #ffffff;
  font-size: 17px;
  pointer-events: none;
}
.btn:nth-child(2):hover {
  box-shadow: 0px 0px 0px 1px #2196f3;
}
.icon {
  width: auto;
  height: auto;
  background-color: transparent;
  display: inline-block;
  margin: 0px;
  border-radius: 0%;
  float: left;
  transition: all 0.3s ease;
  opacity: 0;
}
.btn:hover .icon {
  opacity: 1;
}
.footer[data-v-42ddc862] {
  background-color: transparent;
  border: none;
}
</style>
