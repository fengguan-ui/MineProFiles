<template>
  <Form
    ref="loginForm"
    label-position="left"
    :model="form"
    :rules="rules"
    @keydown.enter.native="handleSubmit"
    style="padding-left: 30px; padding-right: 30px"
  >
    <Row style="padding: 50px 0">
      <div class="title">
        <div style="font-size: 2rem; color: #fff; letter-spacing: 2px">
          登录
        </div>
      </div>
    </Row>
    <FormItem prop="userName">
      <Input
        prefix="md-person"
        style="float: right"
        size="large"
        clearable
        v-model="form.userName"
        placeholder="请输入用户名"
      />
    </FormItem>
    <FormItem prop="password">
      <Input
        prefix="md-unlock"
        placeholder="请输入密码"
        style="float: right"
        v-model="form.password"
        type="password"
        password
        size="large"
      />
    </FormItem>

    <FormItem>
      <Button
        type="primary"
        :loading="loading"
        long
        size="large"
        style="float: right"
        @click="handleSubmit"
      >
        登 录
      </Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: "LoginForm",
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "账号不能为空", trigger: "blur" }];
      },
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "密码不能为空", trigger: "blur" }];
      },
    },
  },
  data() {
    return {
      form: {
        userName: "super_admin",
        password: "",
      },
    };
  },
  computed: {
    rules() {
      return {
        userName: this.userNameRules,
        password: this.passwordRules,
      };
    },
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit("on-success-valid", {
            userName: this.form.userName,
            password: this.form.password,
          });
        }
      });
    },
  },
};
</script>

<style>
.ivu-form-item-error-tip {
  top: 40px;
}
</style>