<template>
    <div class="register" style="margin-top: 20px">
    <div class="register">
        <img :src="logo">
         <el-card class="box-card" shadow="always">
             <el-form ref="form" :model="form" label-width="100px"  status-icon :rules="rules">
               <h2>注册</h2>
               <el-form-item label="账户：" prop="name" :rules="{
               required: true, message:'请输入用户名', trigger: 'blur'
               }">
                 <el-input v-model="form.name" size="small"></el-input>
               </el-form-item>
               <el-form-item label="密码：" prop="password" :rules="{
               required: true, message: '请输入密码', trigger: 'blur'
               }">
                   <el-input v-model="form.password" size="small" type="password"></el-input>
               </el-form-item>

                <el-form-item label="确认密码：" prop="checkpassword" :rules="{
                required: true, validator:validateCheckPassword
                }">
                        <el-input v-model="form.checkpassword" size="small" type="password"></el-input>
                </el-form-item>

               <el-form-item label="昵称：" prop="username" :rules="{
               required: true, message: '昵称不能为空', trigger: 'blur'
               }">
                 <el-input v-model="form.username" size="small"></el-input>
               </el-form-item>

               <el-form-item label="邮箱：" prop="email" :rules="[
               { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]">
                 <el-input v-model="form.email" size="small"></el-input>
               </el-form-item>

                 <el-row type="flex" justify="center" >
                     <el-col  style="font-size: 0.7em">
                         点击注册表示你已阅读并同意
                         <el-button type="text" >《Ant 服务条款》 </el-button>
                     </el-col>
                 </el-row>
                 <el-row type="flex" justify="center">
                         <el-button  type="primary" @click="submitForm('form')" style="width: 68%; font-size: 1.2em; word-spacing: 2.5em">注册</el-button>
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
        checkpassword: '',
        username: '',
        email: ''
      }
    }
  },
  methods: {
    /* 提交进行判断的函数 */
    submitData: function () {
      let data = this.qs.stringify({
        'username': this.form.name,
        'password': this.form.password,
        'name': this.form.username,
        'email': this.form.email
      })
      this.$http.post('/ant/register', data).then(response => {
        alert(response.data.msg)
      }).catch(error => {
        alert('错误：' + error)
      })
    },
    login: function () {
      this.$router.push({path: '/'})
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitData()
          this.$router.push({path: '/'})
        } else {
          return false
        }
      })
    },

    validateCheckPassword (rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
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
