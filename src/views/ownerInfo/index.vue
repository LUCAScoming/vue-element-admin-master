<template>
  <div id="owner-container" style="margin:20px;">
    <el-form ref="form" :inline="true" :model="managerQueryVo">
      <!--<el-form-item>-->
      <!--<el-select v-model="managerQueryVo.t.type" placeholder="类型" clearable>-->
      <!--<el-option-->
      <!--v-for="item in types"-->
      <!--:key="item.value"-->
      <!--:label="item.label"-->
      <!--:value="item.value"/>-->
      <!--</el-select>-->
      <!--</el-form-item>-->
      <el-form-item>
        <el-input v-model="managerQueryVo.t.name" placeholder="请输入编号或姓名"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium">查询</el-button>
      </el-form-item>
    </el-form>
    <el-form>
      <el-form-item>
        <el-button type="primary" size="medium" @click="addInfo">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="loading" :data="tableData">
      <el-table-column prop="signName" label="编号" width="120"/>
      <el-table-column prop="realName" label="姓名" width="120"/>
      <el-table-column prop="sex" label="性别" width="120"/>
      <el-table-column prop="tel" label="联系方式" width="120"/>
      <el-table-column prop="floor" label="楼层单元" width="120"/>
      <el-table-column prop="room" label="房间号" width="120"/>
      <el-table-column label="操作" width="">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" >查看/修改</el-button>
          <el-button size="mini" type="danger" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="managerQueryVo.pageObj.currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="managerQueryVo.pageObj.size"
      :total="managerQueryVo.pageObj.totalElements"
      style="margin-top:20px;"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"/>
    <el-dialog :title="新增" :visible.sync="addFormVisible">
      <add-info ref="addForm" @close="handleFormClose()"/>
    </el-dialog>
    <el-dialog :title="编辑" :visible.sync="editFormVisible">
      <add-info ref="addForm" @close="handleFormClose()"/>
    </el-dialog>
    <!--<el-dialog :title="数据权限" :visible.sync="dataFormVisible">-->
    <!--<data-permission ref="dataForm" @close="handleFormClose()"/>-->
    <!--</el-dialog>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import ManagerApi from '@/api/mathsgo/manager'
// import Change from './components/Change'
import AddInfo from './components/addInfo'
// import EditManage from './components/EditManager'
// import DataPermission from './components/DataPermission'
export default {
  name: 'OwnerInfo',
  components: {
    // EditManage,
    AddInfo
    // Change,
    // DataPermission
  },
  data() {
    return {
      loading: false,
      isEdit: 0,
      tableData: [{
        signName: '001',
        realName: '刘嘉玲',
        sex: '女',
        tel: '1123456789',
        floor: '6',
        room: '23'
      }],
      managerQueryVo: {
        pageObj: {
          currentPage: 1,
          size: 10
        },
        likeCondition: {
          realName: '',
          signName: '',
          email: ''
        },
        t: {
          type: 6,
          name: ''
        }
      },
      addFormVisible: false,
      editFormVisible: false,
      changeFormVisible: false,
      dataFormVisible: false
    }
  },
  computed: {
    ...mapGetters(['dictionary'])
  },
  mounted() {
    // this.queryPage()
  },
  methods: {
    // queryPage() {
    //   this.loading = true
    //   ManagerApi.getQueryPage(this.managerQueryVo)
    //     .then(data => {
    //       this.loading = false
    //       this.tableData = data.obj.list
    //       console.log(this.tableData)
    //       if (data.obj.totalPage > 0) {
    //         this.managerQueryVo.pageObj.totalElements = data.obj.totalElements
    //         this.managerQueryVo.pageObj.currentPage = data.obj.currentPage
    //       }
    //     })
    //     .catch(error => {
    //       this.loading = false
    //       console.error(error)
    //       this.$message.error(error.msg)
    //     })
    // },
    // handleSizeChange: function(val) {
    //   this.managerQueryVo.pageObj.size = val
    //   this.queryPage()
    // },
    // handleCurrentChange: function(val) {
    //   this.managerQueryVo.pageObj.currentPage = val
    //   this.queryPage()
    // },
    handleFormClose() {
      this.addFormVisible = false
      this.editFormVisible = false
      this.dataFormVisible = false
      // this.queryPage()
    },
    addInfo() {
      this.addFormVisible = true
      this.$nextTick(() => {
        // this.$refs.addForm.formClear()
      })
    }
    // editManager(id) {
    //   this.editFormVisible = true
    //   this.$nextTick(() => {
    //     this.$refs.editForm.editManager(id)
    //   })
    // },
    // dataPermission(id) {
    //   this.dataFormVisible = true
    //   this.$nextTick(() => {
    //     this.$refs.dataForm.getSchoolByUserId(id)
    //   })
    // },
    // // 禁用
    // deleteManager(id, state) {
    //   this.$confirm('是否禁用该账号权限?', '提示', {
    //   }).then(() => {
    //     this.loading = true
    //     ManagerApi.delete(id, state).then(data => {
    //       this.loading = false
    //       this.$message('禁用成功')
    //       this.queryPage()
    //     }, err => {
    //       this.loading = false
    //       console.log(err)
    //       this.$message.error(err.msg)
    //     })
    //   })
    // },
    // // 启用
    // startManager(id, state) {
    //   this.$confirm('是否启用该账号权限?', '提示', {
    //   }).then(() => {
    //     this.loading = true
    //     ManagerApi.delete(id, state).then(data => {
    //       this.loading = false
    //       this.$message('启用成功')
    //       this.queryPage()
    //     }, err => {
    //       this.loading = false
    //       console.log(err)
    //       this.$message.error(err.msg)
    //     })
    //   })
    // },
    // reset(id) {
    //   this.$confirm('是否重置密码?', '提示', {
    //   }).then(() => {
    //     ManagerApi.reset(id).then(data => {
    //       this.$message('重置成功')
    //       this.handleQuery()
    //     }, err => {
    //       console.log(err)
    //       this.$message.error(err.msg)
    //     })
    //   })
    // },
    // stateFormat(row) {
    //   if (row.state === 0) return '已启用'
    //   else if (row.state === -1) return '未启用'
    // }
  }
}
</script>

<style scoped>

</style>
