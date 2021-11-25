<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <div class="header-tital">
            <h4>من نحن</h4>
          </div>
        </div>
        <div class="row card-box row-cols-1 row-cols-md-2 g-2">
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">مولد النص</h5>
              <p class="card-text">
                إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى
                زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء
                لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه
              </p>
            </div>
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">مولد النص</h5>
              <p class="card-text">
                إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى
                زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء
                لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه
              </p>
            </div>
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">مولد النص</h5>
              <p class="card-text">
                إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى
                زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء
                لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه
              </p>
            </div>
          </div>
          <div class="col">
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
    <footer-secotion />
  </div>
</template>
<script>
import FooterSecotion from "../components-main/FooterSection.vue";
export default {
  name: "About",
  components: {
    FooterSecotion,
  },
};
</script>
<style scoped>
.about {
  background-color: #eeeeee;
  height: calc(100vh - 110px);
  position: relative;
}
.about::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 50vh;
  background-color: #085aa5;
  z-index: 0;
  top: 50%;
  transform: translateY(-50%) skew(0deg, -11deg);
}
.container {
  min-height: 100%;
  padding-bottom: 20px;
}
.header-tital {
  margin-top: 30px;
  font-family: "El Messiri";
  color: #cfcfcf;
  position: relative;
}
.header-tital::after {
  content: "";
  position: absolute;
  width: 166px;
  height: 3px;
  background-color: #cfcfcf;
  bottom: -13px;
  left: 50%;
  transform: translateX(-50%);
}
.header-tital::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #085aa5;
  bottom: -19px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.header-tital > h4 {
  color: #085aa5;
  font-family: "El Messiri";
  padding-bottom: 5px;
  pointer-events: none;
}
.card-body {
  background-color: #eeeeee;
  border-radius: 5px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 4px #000000;
}
.card-body:hover {
  transform: translateY(-5px);
  background-color: #ffffffac;
  backdrop-filter: blur(3px);
}
.card-box {
  margin-top: 30px;
}
.card-title {
  color: #636363;
  font-family: "El Messiri";
  border-bottom: 1.5px solid #636363;
  padding-bottom: 5px;
  transition: all 0.3s ease;
  pointer-events: none;
}
.card-body:hover .card-title {
  color: #000000;
  /* border-bottom: 1px solid #ffffff; */
}
.card-text {
  color: #6a6a6a;
  font-family: "El Messiri";
  line-height: 1.7;
  font-weight: 500;
  transition: all 0.3s ease;
  pointer-events: none;
}
.card-body:hover .card-text {
  color: #3b3b3b;
}
@media (max-width: 767.2px) {
  .about {
    background-color: #eeeeee;
    height: auto;
    position: relative;
  }
}
@media (max-height: 640px) {
  .about {
    background-color: #eeeeee;
    height: 100vh;
    position: relative;
  }
}
</style>
