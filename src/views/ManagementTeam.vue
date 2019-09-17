<template>
  <div style="width: 960px; min-height: 580px; margin: auto">
    <el-card style="min-height: 580px; padding: 0px">
      <el-row style="width: 920px; height: 160px">
        <el-col :span="16" style="font-size: 400%; padding-top: 37px">团队 {{ this.teamName }}</el-col>
        <el-col :span="8" style="padding-top: 60px">
          <el-button type="primary" plain @click="ManagementJoinTeam">管理申请</el-button>
        </el-col>
      </el-row>
      <el-table :data="teamMember" style="width: 660px; margin: auto; padding-top: 50px">
        <el-table-column prop="userId" width="120" align="center" label="userId"></el-table-column>
        <el-table-column prop="userName" width="240" align="center" label="userName"></el-table-column>
        <el-table-column prop="level" width="300" align="center" label="level">
          <template slot-scope="scope">
            <el-button size="mini" @click="changeLevel(scope.row, '0')">0</el-button>
            <el-button size="mini" @click="changeLevel(scope.row, '1')">1</el-button>
            <el-button size="mini" @click="changeLevel(scope.row, '2')">2</el-button>
            <el-button size="mini" @click="changeLevel(scope.row, '3')">3</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ManagementTeam',
  data () {
    return {
      teamId: 0,
      teamName: '',
      teamMember: []
    }
  },
  mounted: function () {
    this.teamId = this.$route.query.message.teamId
    this.teamName = this.$route.query.message.teamName
    this.getTeamMember()
  },
  methods: {
    getTeamMember: function () {
      let url = '/ant/team/' + this.teamId + '/members'
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
    changeLevel: function (row, level) {
      let url = '/ant/team/' + this.teamId + '/authority/' + row.userId + '/' + level
      this.$http.post(url).then(response => {
        alert(response.data.msg)
      })
    },
    ManagementJoinTeam: function () {
      this.$router.push({path: '/ManagementJoinTeam', query: {message: this.$route.query.message}})
    }
  }
}
</script>

<style scoped>

</style>
