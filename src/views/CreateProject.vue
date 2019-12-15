<template>
  <div style="width: 480px; min-height: 580px; margin: auto">
    <el-card style="min-height: 580px; padding: 0px">
      <el-row>
        <el-col style="font-size: 200%; padding-top: 50px" >创建你的项目！</el-col>
      </el-row>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" style="width: 360px; margin: auto">
        <el-form-item label="团队ID" prop="teamId" style="padding-top: 100px">
          <el-input v-model="ruleForm.teamId"></el-input>
        </el-form-item>
        <el-form-item label="项目名称" prop="projectName" style="padding-top: 30px">
          <el-input v-model="ruleForm.projectName"></el-input>
        </el-form-item>
        <el-form-item style="padding-top: 70px">
          <el-button type="primary" @click="createProject('ruleForm')">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'CreateProject',
  data () {
    return {
      ruleForm: {
        teamId: '',
        projectName: ''
      },
      rules: {
        teamId: [
          {required: true, message: '请输入团队ID', trigger: 'blur'}
        ],
        projectName: [
          {required: true, message: '请输入项目名称', trigger: 'blur'}
        ]
      }
    }
  },
  mounted: function () {
    this.ruleForm.teamId = this.$route.query.message.teamId
  },
  methods: {
    createProject: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let PostData = this.qs.stringify({'projectName': this.ruleForm.projectName})
          let url = '/ant/project/' + this.ruleForm.teamId + '/create'
          this.$http.post(url, PostData).then(response => {
            alert(response.data.msg)
            if (response.data.code === 0) {
              this.$router.push({path: '/TeamProject', query: { message: this.$route.query.message }})
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
