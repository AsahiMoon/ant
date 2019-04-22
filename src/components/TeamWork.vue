<template>
  <div class = 'teamwork'>
    <el-row style="max-width: 960px; margin: auto; padding-bottom: 20px">
      <el-col :span="1" style="height: 10px"></el-col>
      <el-col :span="3" style="font-size: 400%; min-width: 200px; padding-left: 0px; padding-right: 0px;" @click.native="project">A n t</el-col>
      <el-col :span="1" style="min-width: 40px; padding-top: 25px; padding-left: 0px; padding-right: 0px" @click.native="project"><a>项目</a></el-col>
      <el-col :span="1" style="min-width: 40px; padding-top: 25px; padding-left: 0px; padding-right: 0px" @click.native="news"><a>动态</a></el-col>
      <el-col :span="0.5" style="min-width: 10px; padding-top: 25px; padding-left: 0px; padding-right: 0px; color: #000000">|</el-col>
      <el-col :span="1" style="min-width: 40px; padding-top: 25px; padding-left: 0px; padding-right: 0px"><a>日历</a></el-col>
      <el-col :span="1" style="min-width: 40px; padding-top: 25px; padding-left: 0px; padding-right: 0px"><a>鹰眼</a></el-col>
      <el-col :span="1" style="min-width: 40px; padding-top: 25px; padding-left: 0px; padding-right: 0px"><a>汇报</a></el-col>
      <el-col :span="0.5" style="min-width: 10px; padding-top: 25px; padding-left: 0px; padding-right: 0px; color: #000000">|</el-col>
      <el-col :span="1" style="min-width: 40px; padding-top: 25px; padding-left: 0px; padding-right: 0px"><a>团队</a></el-col>
      <el-col :span="1" style="min-width: 60px; padding-top: 25px; padding-left: 0px; padding-right: 0px"><a>我自己</a></el-col>
      <el-col :span="1" style="min-width: 40px; padding-top: 25px; padding-left: 0px; padding-right: 0px"></el-col>
      <el-col :span="4" style="min-width: 140px; padding-top: 15px; padding-left: 0px; padding-right: 0px">
        <el-input placeholder="搜索"><el-button slot="append" icon="el-icon-search"></el-button></el-input>
      </el-col>
      <el-col :span="1" style="min-width: 60px; padding-top: 15px; padding-left: 0px; padding-right: 0px">
        <el-button type="warning" icon="el-icon-message" circle></el-button>
      </el-col>
      <el-col :span="1" style="min-width: 60px; padding-top: 15px; padding-left: 0px; padding-right: 0px">
        <img src="../assets/temp.png" >
      </el-col>
    </el-row>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'TeamWork',
  methods: {
    project: function () {
      this.$router.push({path: '/Team'})
    },
    news: function () {
      this.$router.push({path: '/News'})
    }
  }
}

</script>

<style scoped>
  a{
    color: #8c939d;
  }
  a:hover{
    color: #3a8ee6;
  }
  img{
    border-radius:100%;
    margin: auto;
  }

</style>
