<template>
  <div style="width: 960px; min-height: 580px; margin: auto">
    <el-card style="min-height: 580px; padding: 0px">
      <el-row style="width: 920px; height: 160px">
        <el-col :span="16" style="font-size: 400%; padding-top: 37px">团队 {{ this.teamName }} 项目</el-col>
        <el-col :span="4" style="padding-top: 60px">
          <el-button @click="createProject" type="primary" plain>创建团队项目</el-button>
        </el-col>
        <el-col :span="4" style="padding-top: 60px">
          <el-button @click="managementTeam" type="primary" plain>管理该团队</el-button>
        </el-col>
      </el-row>
      <el-table :data="teamProject" style="width: 720px; margin: auto; padding-top: 50px" @row-click="task">
        <el-table-column prop="id" width="150" align="center" label="projectId"></el-table-column>
        <el-table-column prop="name" width="300" align="center" label="projectName"></el-table-column>
        <el-table-column prop="teamId" width="150" align="center" label="teamId"></el-table-column>
        <el-table-column width="120" align="center" label="delete?">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" icon="el-icon-delete" @click="deleteProject(scope.row)" round></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'TeamProject',
  data () {
    return {
      teamId: 0,
      teamName: '',
      teamProject: []
    }
  },
  mounted: function () {
    this.teamId = this.$route.query.message.teamId
    this.teamName = this.$route.query.message.teamName
    this.getTeamProject()
  },
  methods: {
    getTeamProject: function () {
      let message = '/ant/project/' + this.teamId + '/list'
      this.$http.get(message).then(response => {
        if (response.data.code === 0) {
          this.teamProject = (response.data.data)
        } else {
          alert(response.data.msg)
          this.$router.push({path: '/Team'})
        }
      }).catch(error => {
        alert('错误：' + error)
      })
    },
    deleteProject: function (row) {
      let message = '/ant/project/' + row.id + '/delete'
      this.$http.post(message).then(response => {
        if (response.data.code === 0) {
          this.getTeamProject()
        }
        alert(response.data.msg)
      })
    },
    createProject: function () {
      this.$router.push({path: '/CreateProject', query: {message: this.$route.query.message}})
    },
    managementTeam: function () {
      this.$router.push({path: '/ManagementTeam', query: {message: this.$route.query.message}})
    },
    task: function (row) {
      this.$router.push({path: '/Task', query: {message: row}})
    }
  }
}
</script>

<style scoped>

</style>
