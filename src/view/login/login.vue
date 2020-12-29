<template>
  <div class="container">
    <div class="sun-div">
      <div class="textP">
        <P><img src="../../assets/images/loginLogo.png" /> </P>
        <p class="p2">
          <font style="color: rgba(64, 158, 255, 1)">智能</font>产线总控系统
        </p>
        <p class="p3">用中国大脑 装备中国制造</p>
      </div>

      <!-- form -->
      <LoginForm @on-success-valid="handleSubmit" />
      <!--  -->
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/login/Loginform";
import { mapActions } from "vuex";
export default {
  components: {
    LoginForm,
  },
  data() {
    return {};
  },

  methods: {
    ...mapActions(["handleLogin", "getUserInfo"]),
    handleSubmit({ userName, password }) {
      this.handleLogin({ userName, password }).then((res) => {
        this.getUserInfo().then((res) => {
          this.$router.push({
            name: this.$config.homeName,
          });
        });
      });
    },
  },
};
</script>

<style scoped>
::v-deep .ivu-input {
  border: 1px solid rgba(42, 53, 66, 0);
  border-bottom: 1px solid #515a6e;
  background-color: rgba(42, 53, 66, 0);
  border-radius: 0px;
  outline: none;
}
::v-deep .sun-div .ivu-input::-webkit-input-placeholder {
  color: #515a6e;
}
::v-deep .ivu-input-large {
  font-size: 16px !important;
  color: white;
  /* padding: 32px 46px; */
}
::v-deep .ivu-btn-large {
  font-size: 16px !important;
  margin-top: 64px;
  height: 60px;
  line-height: 60px;

  background: #409eff;
  box-shadow: 0px 10px 20px 0px rgba(8, 16, 29, 0.8);
  border-radius: 2px;
}
input:focus {
  outline: none;
  box-shadow: none;
}
::v-deep .ivu-input:focus {
  box-shadow: none;
  border-bottom: 1px solid rgb(64, 158, 255);
}
input {
  outline: none;
}
::v-deep .ivu-input-wrapper-large .ivu-input-prefix i {
  font-size: 28px;
  /* line-height: 40px; */
  font-weight: bold;
}
/* ::v-deep .ivu-input-wrapper-large .ivu-input-prefix i,
::v-deep .ivu-input-wrapper-large .ivu-input-suffix i,
::v-deep .ivu-input-wrapper-large .ivu-input-icon {
  line-height: 66px;
} */
::v-deep .ivu-input-prefix i,
::v-deep .ivu-input-suffix i {
  color: #515a6e;
}
::v-deep .ivu-input-with-prefix {
  padding-left: 54px;
}
.textP {
  position: absolute;
  z-index: 9;
  right: 60%;
  top: 14%;
}
.textP .p2 {
  font-size: 50px;
  font-weight: bold;
  color: white;
  letter-spacing: 8px;
}
.textP .p3 {
  font-size: 28px;
  color: white;
  letter-spacing: 12px;
  padding-left: 6px;
}
.title {
  display: flex;
  /* justify-content: center; */
}
.title span {
  color: #707070;
  font-size: 20px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-image: url("../../assets/images/loginBg.jpg");
}
.login-form {
  width: 395px;
  background: #fff;
  border-radius: 6px;
  padding: 25px 25px 5px 25px;
  margin-left: 50%;
}
.sun-div {
  width: 464px;
  background: #fff;
  border-radius: 6px;
  padding: 30px 30px 5px 30px;
  margin-left: 48%;
  margin-top: 0.3rem;
  /* width: 100%;*/
  height: 542px;
  background-color: rgba(42, 53, 66, 0.6);
  margin-bottom: 0.2rem;
  padding: 0.05rem;
}
::v-deep .ivu-form-item {
  padding: 10px 0;
}
</style>
