<template>
    <div class="register">
        <img :src="logo">
                <el-card class="box-card" shadow="always">
                    <el-form ref="form" :model="form" label-width="100px">
                      <h2>注册</h2>
                      <el-form-item label="账户：" prop="name">
                        <el-input v-model="form.name" size="small"></el-input>
                      </el-form-item>
                      <el-form-item label="密码：" prop="password">
                          <el-input v-model="form.password" size="small" type="password"></el-input>
                      </el-form-item>

                                <el-form-item label="确认密码：" prop="password">
                                        <el-input v-model="form.checkpassword" size="small" type="password"></el-input>
                                </el-form-item>

                        <el-row type="flex" justify="center" >
                            <el-col  style="font-size: 0.7em">
                                点击注册表示你已阅读并同意
                                <el-button type="text" @click="terms">《Ant 服务条款》 </el-button>
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
    </div>
</template>
<script>
export default {
  name: 'register',
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
      let data = this.qs.stringify({
        'username': this.form.name,
        'password': this.form.password
      })
      this.axios.post('/ant/register.form', data).then(response => {
        console.log(JSON.stringify(response.data))
      }).catch(error => {
        alert('错误：' + error)
      })
    },
    login: function () {
      this.$router.push({path: '/'})
    },
    terms: function () {

    }
  }
}

</script>

<style scoped>
  .register{
    display:flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: initial;
    align-items: center;
    text-align: center;
  }
</style>
