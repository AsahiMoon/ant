<!--基本html代码区域-->
<template>
  <div class="login">
    <img :src="logo">
    <el-card class="box-card" shadow="always">
    <el-form ref="form" :model="form" label-width="100px">
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
            <el-button type="primary" @click="submit">登录</el-button>
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
    return {
      logo: require('../assets/logo.png'),
      form: {
        name: '',
        password: ''
      }

    }
  },
  methods: {
    /* 提交进行判断的函数 */
    submit: function () {
      let data = this.qs.stringify({'username': 1, 'password': 1})
      this.axios.post('/ant/login.form', data).then(response => {
        console.log((response.data))
      }).catch(error => {
        alert('错误：' + error)
      })
    },
    register: function () {
      this.$router.push({path: '/register'})
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
