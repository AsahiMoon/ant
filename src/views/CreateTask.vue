<template>
  <div style="width: 480px; min-height: 580px; margin: auto">
    <el-card style="min-height: 580px; padding: 0px">
      <el-row>
        <el-col span="4"><el-button type="primary" circle icon="el-icon-back" @click="returnToTask"></el-button></el-col>
      </el-row>
      <el-row>
        <el-col style="font-size: 200%; padding-top: 0px" >创建你的项目！</el-col>
      </el-row>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" style="width: 360px; margin: auto">
        <el-form-item label="团队ID" prop="teamId" style="padding-top: 100px">
          <el-input v-model="ruleForm.teamId"></el-input>
        </el-form-item>
        <el-form-item label="项目ID" prop="projectId" style="padding-top: 30px">
          <el-input v-model="ruleForm.projectId"></el-input>
        </el-form-item>
        <el-form-item label="创建者ID" prop="creatorUserId" style="padding-top: 30px">
          <el-input v-model="ruleForm.creatorUserId"></el-input>
        </el-form-item>
        <el-form-item label="任务名称" prop="name" style="padding-top: 30px">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="任务内容" prop="content" style="padding-top: 30px">
          <el-input v-model="ruleForm.content"></el-input>
        </el-form-item>
        <el-form-item label="开始时间" prop="startTime" style="padding-top: 30px">
          <el-date-picker
            v-model="ruleForm.startTime"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间" prop="endTime" style="padding-top: 30px">
          <el-date-picker
            v-model="ruleForm.endTime"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item style="padding-top: 10px">
          <el-button type="primary" @click="createTask('ruleForm')">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import global from '../global_variable'

export default {
  name: 'CreateTask',
  data () {
    return {
      ruleForm: {
        startTime: '',
        name: '',
        content: '',
        creatorUserId: '',
        teamId: '',
        projectId: '',
        endTime: ''
      },
      rules: {
        teamId: [
          {required: true, message: '请输入团队ID', trigger: 'blur'}
        ],
        projectId: [
          {required: true, message: '请输入项目ID', trigger: 'blur'}
        ],
        creatorUserId: [
          {required: true, message: '请输入创建者ID', trigger: 'blur'}
        ],
        startTime: [
          {required: true, message: '请输入开始时间', trigger: 'blur'}
        ],
        endTime: [
          {required: true, message: '请输入结束时间', trigger: 'blur'}
        ],
        name: [
          {required: true, message: '请输入任务名称', trigger: 'blur'}
        ],
        content: [
          {required: true, message: '请输入任务内容', trigger: 'blur'}
        ]
      }
    }
  },
  mounted: function () {
    this.ruleForm.teamId = this.$route.query.message.teamId
    this.ruleForm.projectId = this.$route.query.message.id
    this.ruleForm.creatorUserId = global.userId
  },
  methods: {
    createTask: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let PostData = this.qs.stringify({
            'startTime': this.ruleForm.startTime,
            'name': this.ruleForm.name,
            'content': this.ruleForm.content,
            'creatorUserId': this.ruleForm.creatorUserId,
            'teamId': this.ruleForm.teamId,
            'projectId': this.ruleForm.projectId,
            'endTime': this.ruleForm.endTime
          })
          let url = '/ant/task/create'
          this.$http.post(url, PostData).then(response => {
            alert(response.data.msg)
            if (response.data.code === 0) {
              this.$router.push({path: '/Task', query: { message: this.$route.query.message }})
            }
          }).catch(error => {
            alert('错误：' + error)
          })
        } else {
          return false
        }
      })
    },
    returnToTask: function () {
      this.$router.push({path: '/Task', query: {message: this.$route.query.message}})
    }
  }
}
</script>

<style scoped>

</style>
