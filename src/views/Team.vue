<template>
  <div style="width: 960px; min-height: 580px; margin: auto">
  <el-card style="min-height: 580px; padding: 0px">
    <el-row style="width: 920px">
      <el-col :span="8" style="font-size: 400%;">我的团队</el-col>
      <el-col :offset="8" :span="4" style="padding-top: 15px">
        <el-button type="primary" round @click="createTeam">创建团队</el-button>
      </el-col>
      <el-col :span="4" style="padding-top: 15px">
        <el-button type="primary" round @click="joinTeam">加入团队</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 660px; margin: auto; padding-top: 50px" @row-click="teamProject">
      <el-table-column prop="teamId" width="120" align="center" label="teamId"></el-table-column>
      <el-table-column prop="teamName" width="240" align="center" label="teamName"></el-table-column>
      <el-table-column prop="level" width="60" align="center" label="level"></el-table-column>
      <el-table-column width="50"></el-table-column>
      <el-table-column width="90" align="center" label="manage">
        <template slot-scope="scope">
          <el-button size="mini" type="info" icon="el-icon-setting" @click.stop="ManagementTeam(scope.row)" round></el-button>
        </template>
      </el-table-column>
      <el-table-column width="100" align="center" label="exit">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" icon="el-icon-delete" @click.stop="exitTeam(scope.row)" round></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</div>
</template>

<script>
export default {
  name: 'Team',
  data () {
    return {
      tableData: [
      ]
    }
  },
  mounted: function () {
    this.getTeamList()
  },
  methods: {
    createTeam: function () {
      this.$router.push({path: '/CreateTeam'})
    },
    joinTeam: function () {
      this.$router.push({path: '/JoinTeam'})
    },
    teamProject: function (row) {
      this.$router.push({path: '/TeamProject', query: { message: row }})
    },
    ManagementTeam: function (row) {
      this.$router.push({path: '/ManagementTeam', query: { message: row }})
    },
    getTeamList: function () {
      // 查看团队列表
      this.$http.get('/ant/team/list').then(response => {
        this.tableData = (response.data.data)
      }).catch(error => {
        alert('错误：' + error)
      })
    },
    exitTeam: function (row) {
      let data = this.qs.stringify({
        'teamId': row.teamId
      })
      this.$http.post('/ant/team/exit', data).then(response => {
        alert(response.data.msg)
        if (response.data.code === 0) {
          this.getTeamList()
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
