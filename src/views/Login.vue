<!--基本html代码区域-->
<template>
  <div class="login">
    <img :src="logo">
    <el-card class="box-card" shadow="always">
      <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
      <el-row type="flex" justify="center">
            <h2>登录</h2>
      </el-row>
      <el-row type="flex" justify="center">
          <el-form-item label="账户：" prop="name">
            <el-input v-model="form.name" size="small"></el-input>
          </el-form-item>
      </el-row>
      <el-row type="flex" justify="center">
          <el-form-item label="密码：" prop="password">
            <el-input v-model="form.password" size="small" type="password"></el-input>
          </el-form-item>
      </el-row>
      <el-row type="flex" justify="center">
            <el-button type="primary" @click="submitForm('form')">登录</el-button>
            <el-button type="primary" @click="register">注册</el-button>
      </el-row>
    </el-form>
    </el-card>
  </div>
</template>

<!--数据存贮交互，事件控制地区-->
<script>
export default {
  name: 'login',
  data () {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      }
      callback()
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      logo: require('../assets/logo.png'),
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    /* 提交进行判断的函数 */
    submitData: function () {
      // 转成axios需要的形式
      let PostData = {'username': this.form.name, 'password': this.form.password}
      this.$http.post('/ant/login', PostData).then(response => {
        alert(response.data.message)
        window.localStorage['token'] = JSON.stringify(response.data.extra.token)
      }).catch(error => {
        alert('错误：' + error)
      })
    },
    register: function () {
      this.$router.push({path: '/register'})
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitData()
        } else {
          return false
        }
      })
    }
  }
}

</script>
<!-- 写样式的地方 -->
<style scoped>
  .login{
    display:flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: initial;
    align-items: center;
    text-align: center;
  }

</style>
