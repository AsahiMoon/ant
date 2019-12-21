<template>
  <div style="width: 1260px; min-height: 580px; margin: auto">
    <el-card style="min-height: 580px; padding: 0px">
      <el-row >
        <el-col :span="4" style="font-size: 400%;">
          <el-button type="primary" circle icon="el-icon-back" @click="returnToTask"></el-button>
        </el-col>
        <el-col :span="20" style="font-size: 400%;">{{this.$route.query.message.name}}</el-col>
      </el-row>
      <el-table :data="taskList" style="width: 1000px; margin: auto; padding-top: 50px">
        <el-table-column prop="id" width="100" align="center" label="TaskId"></el-table-column>
        <el-table-column prop="name" width="150" align="center" label="Name"></el-table-column>
        <el-table-column prop="content" width="350" align="center" label="Content"></el-table-column>
        <el-table-column prop="creatorUserId" width="100" align="center" label="CreatorId"></el-table-column>
        <el-table-column width="200" align="center" label="Allot">
          <template slot-scope="scope">
            <el-select v-model="teamMember.userId" placeholder="请选择" @change="allot(scope.row, teamMember.userId)">
              <el-option
                v-for="item in teamMember"
                :key="item.userId"
                :label="item.userName"
                :value="item.userId">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
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
  name: 'AllocTask',
  data () {
    return {
      taskList: [],
      teamMember: []
    }
  },
  mounted: function () {
    this.getTaskList()
    this.getTeamMember()
  },
  methods: {
    getTeamMember: function () {
      let url = '/ant/team/' + this.$route.query.message.teamId + '/members'
      this.$http.get(url).then(response => {
        if (response.data.code === 0) {
          this.teamMember = (response.data.data)
        } else {
          alert(response.data.msg)
          this.$router.push({path: '/Team'})
        }
      }).catch(error => {
        alert('错误：' + error)
      })
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
    },
    returnToTask: function () {
      this.$router.push({path: '/Task', query: {message: this.$route.query.message}})
    },
    allot: function (row, userId) {
      let PostData = this.qs.stringify({'userId': userId})
      let url = '/ant/task/' + row.id + '/setUser'
      this.$http.post(url, PostData).then(response => {
        alert(response.data.msg)
      }).catch(error => {
        alert('错误：' + error)
      })
    }
  }
}
</script>

<style scoped>

</style>
