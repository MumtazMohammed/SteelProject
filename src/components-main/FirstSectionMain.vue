<template>
  <div class="section-one">
    <div class="container-lg">
      <div class="row">
        <div class="col-sm-12 text-center">
          <h3>شركة بنائي لتوريد الحديد ومعدات البناء</h3>
        </div>
        <div class="col-sm-12 text-center">
          <div class="alert alert-light">لسنا الوحيدون ولكن سنبقى الافضل</div>
        </div>
        <div class="col-sm-12 text-center">
          <p class="logo">logo</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstSection",
};
</script>

<style scoped>
.section-one {
  position: relative;
  width: 100%;
  height: calc(100vh - 75px);
  overflow: hidden;
  background-color: #085aa5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section-one::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 10vh;
  background-color: #eeeeee;
  transform: skew(0deg, -8deg);
  z-index: 0;
  bottom: 130px;
}
h3 {
  color: #ececec;
  font-family: "El Messiri";
  font-size: 30px;
  margin: 0;
  pointer-events: none;
  position: relative;
  z-index: 1;
}
.alert-light {
  color: #cfcfcf;
  background-color: transparent;
  border-color: transparent;
  font-family: "El Messiri";
  font-size: 22px;
  pointer-events: none;
  position: relative;
  z-index: 1;
}
.logo {
  color: #ffffff;
  text-transform: uppercase;
  font-size: 30px;
  font-family: cursive;
  pointer-events: none;
  position: relative;
  z-index: 1;
}

@media (max-width: 992px) {
  .section-one {
    height: calc(100vh - 60px);
  }
}
@media (max-width: 532px) {
  .alert-light {
    font-size: 15px;
  }
  h3 {
    font-size: 22px;
  }
}
@media (max-width: 393px) {
  .alert-light {
    font-size: 15px;
  }
  h3 {
    font-size: 18px;
  }
}
@media (max-height: 600px) {
  .section-one::after {
    display: none;
  }
  .section-one::before {
    display: none;
  }
  .section-one {
    height: calc(100vh - 0px);
  }
}
</style>
