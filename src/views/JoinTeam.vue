<template>
  <div style="width: 1100px; min-height: 580px; margin: auto">
   <el-card style="width: 480px; min-height: 580px; margin: auto">
     <el-row>
       <el-col style="font-size: 200%; padding-top: 50px">加入团队</el-col>
     </el-row>
     <el-form :model="ruleForm" ref="ruleForm" style="width: 360px; margin: auto">
       <el-form-item label="团队ID" prop="teamID" style="padding-top: 100px" :rules= "{required: true, message: '请输入团队ID', trigger: 'blur'}">
         <el-input v-model="ruleForm.teamID"></el-input>
       </el-form-item>
       <el-form-item style="padding-top: 100px">
         <el-button type="primary" @click="submitForm('ruleForm')">立即加入</el-button>
       </el-form-item>
     </el-form>
   </el-card>
  </div>
</template>

<script>
export default {
  name: 'JoinTeam',
  data: function () {
    return {
      ruleForm: {
        teamID: ''
      }
    }
  },
  methods: {
    submitForm: function () {
      // 这里接口文档要求表单形式
      // let PostData = this.qs.stringify({'teamName': this.ruleForm.teamname})
      let jointeam = '/ant/team/join/' + this.ruleForm.teamID
      this.$http.post(jointeam).then(response => {
        if (response.data.code === 0) {
          alert(response.data.msg)
          this.$router.push({path: '/Team'})
        } else {
          alert(response.data.msg)
        }
      }).catch(error => {
        alert('错误：' + error)
      })
    }
  }
}
</script>

<style scoped>

</style>
