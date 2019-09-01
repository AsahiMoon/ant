<template>
  <div style="width: 960px; min-height: 580px; margin: auto">
    <el-card style="min-height: 580px; padding: 0px">
      <el-row style="width: 920px">
        <el-col :span="8" style="font-size: 400%;">我的团队</el-col>
        <el-col :offset="10" :span="4" style="padding-top: 15px">
          <el-button type="primary" round @click="createTeam">创建团队</el-button>
        </el-col>
      </el-row>
      <el-table :data="tableData" style="width: 420px; margin: auto; padding-top: 50px">
        <el-table-column prop="teamId" width="120" align="center" label="teamId"></el-table-column>
        <el-table-column prop="teamName" width="240" align="center" label="teamName"></el-table-column>
        <el-table-column prop="level" width="60" align="center" label="level"></el-table-column>
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
    getTeamList: function () {
      // 查看团队列表
      this.$http.get('/ant/team/list').then(response => {
        this.tableData = (response.data.data)
      }).catch(error => {
        alert('错误：' + error)
      })
    }
  }

}

</script>

<style scoped>

</style>
