<template>
    <div class="firstdemo">
        <img :src="logo">
        <el-row :gutter="20">
            <el-col  :span="8" :offset="8">
                <el-card class="box-card" shadow="always">
                    <el-form ref="form" :model="form" label-width="100px">
                        <el-row type="flex" justify="center">
                            <el-col :span="10" :offset="-10">
                                <h2>注册</h2>
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
                                <el-form-item label="确认密码：" prop="password">
                                    <el-col :span="19">
                                        <el-input v-model="form.checkpassword" size="small" type="password"></el-input>
                                    </el-col>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row type="flex" justify="center" >
                            <el-col  style="font-size: 0.7em">
                                点击注册表示你已阅读并同意
                                <el-button type="text" @click="TODO">《Ant 服务条款》 </el-button>
                            </el-col>
                        </el-row>
                        <el-row type="flex" justify="center">
                            <el-col >
                                <el-button  type="primary" @click="submit" style="width: 68%; font-size: 1.2em; word-spacing: 2.5em">注&nbsp;册</el-button>
                            </el-col>
                        </el-row>

                        <el-row type="flex" justify="center" style="margin-top: 20px">
                            <el-col  style="font-size: 0.8em">
                                已有账号？
                                <el-button type="text"  @click="login">直接登录 → </el-button>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  name: 'TheRegister',

  data () {
    return {
      logo: require('../assets/logo.png'),
      form: {
        name: '',
        password: '',
        checkpassword: ''
      }

    }
  },
  methods: {
    /* 提交进行判断的函数 */
    submit: function () {
      if (this.form.name === this.form.password && this.form.name === this.form.checkpassword) {
        alert('注册成功')
        this.logo = require('../assets/logo1.png')
      } else { alert('注册失败') }
    },
    register: function () {},
    login: function () {
      this.$router.push({path: '/'})
    }
  }
}

</script>

<style scoped>

</style>
