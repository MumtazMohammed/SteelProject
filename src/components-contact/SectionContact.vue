<template>
  <div class="contact-page">
    <div class="container">
      <div class="card" style="width: 100%">
        <div class="row g-0">
          <form class="col-md-6 contact-box">
            <h3 class="contact-hd">تواصل معنا عبر البريد الأكتروني</h3>
            <div class="contact">
              <input
                type="text"
                v-model="username"
                name="text"
                placeholder="الأسم"
              />
            </div>
            <div class="contact">
              <input
                type="email"
                v-model="email"
                placeholder="البريد الأكتروني"
              />
            </div>
            <div class="contact-text">
              <textarea
                name="write"
                v-model="message"
                placeholder="بماذا تفكر ..."
              ></textarea>
            </div>
            <div class="col-12">
              <button class="btn" submit.prevent type="submit">أرسـل</button>
            </div>
          </form>
          <div class="col-md-6">
            <div class="card-body">
              <p class="card-text">
                <small class="text-muted">الموقع :</small>
              </p>
              <p class="card-text">
                مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما
                ولا يحوي أخطاء
              </p>
            </div>
            <div class="card-body">
              <p class="card-text">
                <small class="text-muted">التحويل</small>
              </p>
              <p class="card-text">
                مولد النص العربى زيادة عدد الفقرات كما تريد،
              </p>
              <p class="card-text">0215120211541</p>
            </div>
            <div class="card-body">
              <p class="card-text">
                <small class="text-muted">الهاتف:</small>
              </p>
              <p class="card-text">0215120211541</p>
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
  name: "contact",
  data() {
    return {
      username: "",
      email: "",
      message: "",
    };
  },
  components: {
    FooterSecotion,
  },
};
</script>

<style scoped>
.contact-page {
  width: 100%;
  min-height: 85vh;
  position: relative;
  background: #eeeeee;
}
.container {
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
}
.contact-box {
  background-color: #085aa5;
  padding: 20px;
}
.contact {
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  position: relative;
}
.contact-hd {
  color: #ebebeb;
  text-align: center;
  font-size: 16px;
  font-family: "El Messiri";
  pointer-events: none;
}
input::placeholder {
  color: #fff;
  font-size: 17px;
  width: fit-content;
}
input {
  height: 38px;
  font-family: "El Messiri";
  background-color: transparent;
  border: none;
  color: #fff;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.578);
  border-radius: 5px;
}
input:focus-visible {
  outline: none;
}
.contact-text {
  background-color: #fff;
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
  background-color: #085aa5;
  border: 1px solid rgba(255, 255, 255, 0.578);
}
textarea {
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  color: #fff;
  border-radius: 5px;
}
textarea:focus-visible {
  outline: none;
}
.footer {
  background-color: #085aa5;
  border: none;
}
.btn:focus {
  box-shadow: none;
}
.btn:active {
  box-shadow: none;
  background-color: #eeeeee;
}
.btn {
  background-color: #ffffff;
  border: none;
  font-family: "El Messiri";
  font-weight: 500;
  color: #4c4c4c;
  font-size: 18px;
  width: 100%;
  margin: 10px 0;
}
.card-text {
  margin-bottom: 5px;
  font-family: "El Messiri";
  font-weight: bold;
  color: #4c4c4c;
  pointer-events: none;
}
.text-muted {
  pointer-events: none;
}
</style>
>
