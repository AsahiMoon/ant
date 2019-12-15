<template>
  <div style="width: 960px; min-height: 580px; margin: auto">
    <el-card style="min-height: 580px; padding: 0px">
      <el-row style="width: 920px">
        <el-col :span="24" style="font-size: 400%;">我的项目</el-col>
      </el-row>
      <el-table :data="tableData" style="width: 660px; margin: auto; padding-top: 50px" @row-click="teamProject">
        <el-table-column prop="teamId" width="120" align="center" label="teamId"></el-table-column>
        <el-table-column prop="teamName" width="240" align="center" label="teamName"></el-table-column>
        <el-table-column prop="level" width="60" align="center" label="level"></el-table-column>
        <el-table-column width="50"></el-table-column>
        <el-table-column width="90" align="center" label="manage"></el-table-column>
        <el-table-column width="100" align="center" label="exit"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'MyProject',
  data () {
    return {
      tableData: [
      ]
    }
  },
  mounted: function () {
    this.getMyProjectList()
  },
  methods: {
    getMyProjectList: function () {
      // 查看我的项目列表
      // TODO
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
