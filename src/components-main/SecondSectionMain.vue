<template>
  <div class="section-two">
    <div class="container">
      <div class="col-lg-12 lin-cir">
        <h3 class="header-text">ماذا نقدم</h3>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <h3 class="title">كنت تحتاج إلى عدد أكبر</h3>
          <p class="discription">
            إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة
            عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد
            النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى
            كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. إذا كنتقيقية
            لتصميم الموقع.
          </p>
        </div>
      </div>
      <div class="row cards row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        <div class="col">
          <div class="card">
            <img
              src="../assets/aluminijum_1_200617_tw630.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">مولد النص</h5>
              <p class="card-text">
                إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى
                زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء
                لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه
              </p>
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
              <h5 class="card-title">مولد النص</h5>
              <p class="card-text">
                إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى
                زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء
                لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه
              </p>
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
              <h5 class="card-title">مولد النص</h5>
              <p class="card-text">
                إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى
                زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء
                لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Secondsection",
  data() {
    return {};
  },
};
</script>
<style scoped>
.section-two {
  background-color: #085aa5;
  padding-bottom: 50px;
  width: 100%;
  height: auto;
  position: relative;
}
.container {
  position: relative;
}
.lin-cir {
  font-family: "El Messiri";
  color: #cfcfcf;
  position: relative;
}
.lin-cir::after {
  content: "";
  position: absolute;
  width: 166px;
  height: 3px;
  background-color: #eeeeee;
  bottom: -13px;
  left: 50%;
  transform: translateX(-50%);
}
.lin-cir::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #ffffff;
  bottom: -19px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.header-text {
  color: #ececec;
  text-align: center;
  pointer-events: none;
}
.title {
  color: #ececec;
  font-family: "El Messiri";
  margin-bottom: 10px;
  pointer-events: none;
}
.discription {
  font-family: "El Messiri";
  color: #cfcfcf;
  font-size: 18px;
  line-height: 1.6;
  pointer-events: none;
  text-align: justify;
}
.img-thumbnail {
  position: relative;
  z-index: 2;
}
.row {
  margin-top: 50px;
  justify-content: space-between;
}
.cards {
  margin-top: 0;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: transparent;
  background-clip: border-box;
  overflow: hidden;
  backdrop-filter: blur(5px);
  transition: backdrop-filter 0.1s linear;
  border: 0;
}
.card-body {
  background-color: #1a67ae;
  transition: all 0.2s ease;
}
.card-title {
  color: #ececec;
  font-family: "El Messiri";
  border-bottom: 1px solid white;
  padding-bottom: 5px;
  pointer-events: none;
}
.card-text {
  color: #cfcfcf;
  font-family: "El Messiri";
  line-height: 1.7;
  font-weight: 700;
  pointer-events: none;
  text-align: justify;
}
/* responsive Screen 
 */
@media (max-width: 770px) {
  .discription {
    font-size: 15px;
  }
  .title {
    font-size: 18px;
  }
  @media (max-height: 600px) {
    .section-two::after {
      display: none;
    }
  }
  /* @media (max-width: 500px) {
    .row-cols-2 > * {
      width: 100% !important;
    }
    .cards[data-v-8c5587ac] {
      margin-top: 0;
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: center;
    }
  } */
  @media (max-width: 390px) {
    .row-cols-2 > * {
      width: 100% !important;
    }
    .cards[data-v-8c5587ac] {
      margin-top: 0;
      position: relative;
    }
    .discription {
      font-family: "El Messiri";
      color: #cfcfcf;
      font-size: 16px;
      line-height: 1.6;
    }
  }
}
</style>
