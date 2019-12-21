<template>
  <div style="width: 1260px; min-height: 580px; margin: auto">
    <el-card style="min-height: 580px; padding: 0px">
      <el-row >
        <el-col :span="1"><el-button type="primary" circle icon="el-icon-back" @click="returnToTeamProject"></el-button></el-col>
        <el-col :span="15" style="font-size: 400%;">{{this.$route.query.message.name}}</el-col>
        <el-col :span="8" style="padding-top: 15px">
          <el-button type="primary" round @click="createTask">创建任务</el-button>
          <el-button type="primary" round @click="allotTask">分配任务</el-button>
        </el-col>
      </el-row>
      <el-table :data="taskList" style="width: 1000px; margin: auto; padding-top: 50px">
        <el-table-column prop="projectId" width="100" align="center" label="ProjectId"></el-table-column>
        <el-table-column prop="name" width="150" align="center" label="Name"></el-table-column>
        <el-table-column prop="content" width="350" align="center" label="Content"></el-table-column>
        <el-table-column prop="creatorUserId" width="100" align="center" label="CreatorId"></el-table-column>
        <el-table-column prop="startTime" width="100" align="center" label="StartTime"></el-table-column>
        <el-table-column prop="endTime" width="100" align="center" label="EndTime"></el-table-column>
        <el-table-column prop="isFinish" width="100" align="center" label="IsFinish?">
          <template slot-scope="scope">
            <i :class="isFinish(scope.row)"></i>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default{
  name: 'Task',
  data () {
    return {
      taskList: [
      ]
    }
  },
  mounted: function () {
    this.getTaskList()
  },
  methods: {
    createTask: function () {
      this.$router.push({path: '/CreateTask', query: {message: this.$route.query.message}})
    },
    allotTask: function () {
      this.$router.push({path: '/AllotTask', query: {message: this.$route.query.message}})
    },
    returnToTeamProject () {
      this.$router.push({path: '/TeamProject', query: {message: this.$route.query.message}})
    },
    getTaskList: function () {
      let message = '/ant/task/' + this.$route.query.message.id + '/list'
      this.$http.get(message).then(response => {
        if (response.data.code === 0) {
          this.taskList = (response.data.data)
        } else {
          alert(response.data.msg)
        }
      }).catch(error => {
        alert('错误：' + error)
      })
    },
    isFinish: function (row) {
      if (row.isFinish === 0) {
        return 'el-icon-loading'
      } else {
        return 'el-icon-check'
      }
    }
  }
}
</script>

<style scoped>

</style>
