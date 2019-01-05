<!--基本html代码区域-->
<template>
  <div class="firstdemo">
    <img :src="logo">
    <el-row :gutter="20">
      <el-col  :span="8" :offset="8">
    <el-card class="box-card" shadow="always">
    <el-form ref="form" :model="form" label-width="100px">
      <el-row type="flex" justify="center">
        <el-col :span="10" :offset="-10">
            <h2>登录</h2>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col>
          <el-form-item label="账户：" prop="name">
            <el-col :span="19">
            <el-input v-model="form.name" size="small"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col>
          <el-form-item label="密码：" prop="password">
            <el-col :span="19">
            <el-input v-model="form.password" size="small" type="password"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col>
            <el-button type="primary" @click="submit">登录</el-button>
            <el-button type="primary" @click="register">注册</el-button>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col>

        </el-col>
      </el-row>
    </el-form>
    </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<!--数据存贮交互，事件控制地区-->
<script>
export default {
  name: 'firstdemo',
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
      if (this.form.name === this.form.password) {
        alert('登陆成功')
        this.logo = require('../assets/logo1.png')
      } else { alert('账号或密码错误') }
    },
    register: function () {
      this.$router.push({path: '/register'})
    }
  }
}
</script>

<!-- 写样式的地方 -->
<style scoped>
</style>
