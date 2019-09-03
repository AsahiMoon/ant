<template>
  <div style="width: 960px; min-height: 580px; margin: auto">
    <el-card style="min-height: 580px; padding: 0px">
      <el-row style="width: 920px; height: 160px">
        <el-col style="font-size: 400%; padding-top: 37px">申请加入{{ this.teamName }}</el-col>
      </el-row>
      <el-table :data="teamPending" style="width: 420px; margin: auto; padding-top: 50px">
        <el-table-column prop="userId" width="120" align="center" label="userId"></el-table-column>
        <el-table-column prop="userName" width="240" align="center" label="userName"></el-table-column>
        <el-table-column prop="level" width="60" align="center" label="Y/N">
          <template slot-scope="scope">
            <el-button size="mini" @click="accept(scope.$index, scope.row)">行吧</el-button>
            <el-button size="mini" type="danger" @click="refuse(scope.$index, scope.row)">guna</el-button>
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
      let message = '/ant/team/' + this.teamId + '/pending/approve/' + row.userId
      this.$http.post(message).then(response => {
        if (response.data.code === 0) {
          alert(response.data.msg)
        }
      }).catch(error => {
        alert('错误：' + error)
      })
    }
    // TODO: refuse
    // refuse: function (index, row) {
    //   let message = '/ant/team/' + this.teamId + '/pending/approve/' + row.userId
    //   this.$http.post(message).then(response => {
    //     if (response.data.code === 0) {
    //       alert(response.data.msg)
    //     }
    //   }).catch(error => {
    //     alert('错误：' + error)
    //   })
    // }
  }
}
</script>

<style scoped>

</style>
