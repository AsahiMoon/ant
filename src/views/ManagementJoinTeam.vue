<template>
  <div style="width: 960px; min-height: 580px; margin: auto">
    <el-card style="min-height: 580px; padding: 0px">
      <el-row style="width: 920px; height: 160px">
        <el-col span="2" style="padding-top: 20px">
          <el-button type="primary" circle icon="el-icon-back" @click="returnToManagementTeam"></el-button>
        </el-col>
        <el-col span="20" style="font-size: 400%; padding-top: 37px">申请加入 {{ this.teamName }}</el-col>
      </el-row>
      <el-table :data="teamPending" style="width: 560px; margin: auto; padding-top: 50px">
        <el-table-column prop="userId" width="120" align="center" label="userId"></el-table-column>
        <el-table-column prop="userName" width="240" align="center" label="userName"></el-table-column>
        <el-table-column width="200" align="center" label="Y/N">
          <template slot-scope="scope">
            <el-button size="mini" @click="accept(scope.$index, scope.row)">接受</el-button>
            <el-button size="mini" type="danger" @click="refuse(scope.$index, scope.row)">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ManagementJoinTeam',
  data () {
    return {
      teamId: 0,
      teamName: '',
      teamPending: []
    }
  },
  mounted: function () {
    this.teamId = this.$route.query.message.teamId
    this.teamName = this.$route.query.message.teamName
    this.getTeamPending()
  },
  methods: {
    getTeamPending: function () {
      let message = '/ant/team/' + this.teamId + '/pending'
      this.$http.get(message).then(response => {
        if (response.data.code === 0) {
          this.teamPending = (response.data.data)
        } else {
          alert(response.data.msg)
          this.$router.push({path: '/Team'})
        }
      }).catch(error => {
        alert('错误：' + error)
      })
    },
    accept: function (index, row) {
      let message = '/ant/team/' + this.teamId + '/pending/approve/' + row.id
      this.$http.post(message).then(response => {
        if (response.data.code === 0) {
          alert(response.data.msg)
        }
      }).catch(error => {
        alert('错误：' + error)
      })
      this.getTeamPending()
    },
    refuse: function (index, row) {
      let message = '/ant/team/' + this.teamId + '/pending/refuse/' + row.id
      this.$http.post(message).then(response => {
        if (response.data.code === 0) {
          alert(response.data.msg)
        }
      }).catch(error => {
        alert('错误：' + error)
      })
      this.getTeamPending()
    },
    returnToManagementTeam: function () {
      this.$router.push({path: '/ManagementTeam', query: {message: this.$route.query.message}})
    }
  }
}
</script>

<style scoped>

</style>
