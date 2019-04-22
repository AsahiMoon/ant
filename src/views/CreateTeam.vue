<template>
  <div style="width: 480px; min-height: 580px; margin: auto">
    <el-card style="min-height: 580px; padding: 0px">
      <el-row>
        <el-col style="font-size: 200%; padding-top: 50px" >创建你的团队！</el-col>
      </el-row>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" style="width: 360px; margin: auto">
        <el-form-item label="团队名称" prop="teamname" style="padding-top: 100px">
          <el-input v-model="ruleForm.teamname"></el-input>
        </el-form-item>
        <el-form-item style="padding-top: 100px">
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'CreateTeam',
  data () {
    return {
      ruleForm: {
        teamname: ''
      },
      rules: {
        teamname: [
          {required: true, message: '请输入团队名称', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 这里接口文档要求表单形式
          let PostData = this.qs.stringify({'teamName': this.ruleForm.teamname})
          this.$http.post('/ant/team/create', PostData).then(response => {
            if (response.data.code === 0) {
              alert(response.data.message)
              this.$router.push({path: '/Team'})
            } else {
              alert(response.data.message)
            }
          }).catch(error => {
            alert('错误：' + error)
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
