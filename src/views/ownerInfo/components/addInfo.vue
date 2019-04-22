<template>
  <div id="add-info" style="margin-left: 50px">
    <h2 style="text-align: center">业主信息登记表</h2>
    <el-form ref="addInfo" :rules="rules" :model="data" label-width="120px">
      <el-form-item label="业主ID" prop="roles">
        <el-input v-model="data.id" style="width:200px"/>
      </el-form-item>
      <el-form-item label="证件类型" prop="signName">
        <el-input v-model="data.signName" style="width:200px"/>
      </el-form-item>
      <el-form-item label="业主姓名" prop="signName">
        <el-input v-model="data.signName" style="width:200px"/>
      </el-form-item>
      <el-form-item label="性别" prop="realName">
        <el-input v-model="data.realName" style="width:200px"/>
      </el-form-item>
      <el-form-item label="籍贯" prop="password">
        <el-input v-model="data.password" style="width:200px"/>
      </el-form-item>
      <el-form-item label="民族" prop="mobile">
        <el-input v-model="data.mobile" style="width:200px"/>
      </el-form-item>
      <el-form-item label="紧急联系人" prop="province">
        <el-input v-model="data.mobile" style="width:200px"/>
      </el-form-item>
      <el-form-item label="关系" prop="city">
        <el-input v-model="data.mobile" style="width:200px"/>
      </el-form-item>
      <el-form-item label="家庭成员数" prop="country">
        <el-input v-model="data.mobile" style="width:200px"/>
      </el-form-item>
      <el-form-item label="一卡通号码" prop="school">
        <el-input v-model="data.mobile" style="width:200px"/>
      </el-form-item>
      <el-form-item label="关系" prop="city">
        <el-input v-model="data.mobile" style="width:200px"/>
      </el-form-item>
      <el-form-item label="联系电话" prop="city">
        <el-input v-model="data.mobile" style="width:200px"/>
      </el-form-item>
      <el-form-item label="家庭成员数" prop="country">
        <el-input v-model="data.mobile" style="width:200px"/>
      </el-form-item>
      <el-form-item label="一卡通号码" prop="school">
        <el-input v-model="data.mobile" style="width:200px"/>
      </el-form-item>
      <el-form-item label="一卡通余额" prop="city">
        <el-input v-model="data.mobile" style="width:200px"/>
      </el-form-item>
      <el-form-item label="学历" prop="class">
        <el-select v-model="data.mobile" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期"/>
      </el-form-item>
      <el-form-item label="政治面貌" prop="class">
        <el-select v-model="data.mobile" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
      </el-form-item>
      <el-form-item label="楼层单元" prop="realName">
        <el-input v-model="data.realName" style="width:200px"/>
      </el-form-item>
      <el-form-item label="房间号码" prop="password">
        <el-input v-model="data.password" style="width:200px"/>
      </el-form-item>
      <p>以下为非必填项</p>
      <el-form-item label="工作单位" prop="signName">
        <el-input v-model="data.signName" style="width:200px"/>
      </el-form-item>
      <el-form-item label="工作职务" prop="signName">
        <el-input v-model="data.signName" style="width:200px"/>
      </el-form-item>
      <el-form-item label="工作地址" prop="realName">
        <el-input v-model="data.realName" style="width:200px"/>
      </el-form-item>
      <el-form-item label="家庭成员姓名" prop="password">
        <el-input v-model="data.password" style="width:200px"/>
      </el-form-item>
      <el-form-item label="关系" prop="mobile">
        <el-input v-model="data.mobile" style="width:200px"/>
      </el-form-item>
      <el-form-item label="联系电话" prop="mobile">
        <el-input v-model="data.mobile" style="width:200px"/>
      </el-form-item>
      <el-form-item label="家庭成员姓名" prop="province">
        <el-input v-model="data.mobile" style="width:200px"/>
      </el-form-item>
      <el-form-item label="关系" prop="city">
        <el-input v-model="data.mobile" style="width:200px"/>
      </el-form-item>
      <el-form-item label="联系电话" prop="mobile">
        <el-input v-model="data.mobile" style="width:200px"/>
      </el-form-item>
      <el-form-item style="text-align:center">
        <el-button type="primary" @click="saveTeacher">提交</el-button>
        <el-button type="primary" @click="updateTeacher">完成</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import areaSelect from './areaSelect'
// import teacherApi from '@/api/mathsgo/teacher-msg'
export default {
  name: 'AddInfo',
  data() {
    return {
      options: [{
        value: '选项1',
        label: '小学'
      }, {
        value: '选项2',
        label: '初中'
      }, {
        value: '选项3',
        label: '高中'
      }, {
        value: '选项4',
        label: '中专'
      }, {
        value: '选项5',
        label: '大专'
      }, {
        value: '选项6',
        label: '本科'
      }, {
        value: '选项7',
        label: '硕士'
      }, {
        value: '选项8',
        label: '博士'
      }, {
        value: '选项9',
        label: '博士后'
      }],
      options2: [{
        value: '选项1',
        label: '群众'
      }, {
        value: '选项2',
        label: '共青团员'
      }, {
        value: '选项3',
        label: '预备党员'
      }, {
        value: '选项4',
        label: '党员'
      }],
      data: {
        roles: [],
        signName: '',
        password: '',
        mobile: '',
        teacher: {},
        type: 3
      },
      value1: '',
      isEdit: '',
      value: '',
      province: '',
      city: '',
      country: '',
      options1: [],
      provinces: [],
      cities: [],
      countries: [],
      schools: [],
      classes: [],
      props: {
        id: '',
        value: 'label',
        label: 'name',
        children: 'children',
        disabled: false
      },
      selectedOptions: '',
      rules: {
        roles: [{ required: true, message: '角色不能为空', trigger: 'change' }],
        signName: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码必填', trigger: 'blur' }],
        mobile: [{ required: true, message: '联系方式必填', trigger: 'blur' }]
      }
    }
  },
  computed: {
    ...mapGetters(['dictionary'])
  },
  mounted() {
  },
  created() {
    // this.getProvince()
    // this.getRoles()
  },
  methods: {
    dataClear() {
      this.isEdit = 0
      this.data = {
        roles: [],
        signName: '',
        password: '',
        mobile: '',
        teacher: {},
        type: 3
      }
      this.province = ''
      this.city = ''
      this.country = ''
      this.options1 = []
      this.provinces = []
      this.cities = []
      this.countries = []
      this.schools = []
      this.classes = []
    },
    editTeacher(id) {
      this.isEdit = 1
      this.data = {
        roles: [],
        signName: '',
        password: '',
        mobile: '',
        teacher: {},
        type: 3
      }
      //     teacherApi.editTeacher(id).then(data => {
      //       this.data = Object.assign(this.data, data.obj)
      //       var areaArray = this.data.teacher.areaId.split(',')
      //       var areaArray1 = this.data.teacher.area.split('/')
      //       console.log(areaArray1[0])
      //       this.getArea(areaArray[0])
      //       this.getArea(areaArray[1])
      //       this.getSchool(areaArray[2])
      //       this.getClass(this.data.teacher.schoolId)
      //       this.province = areaArray1[0]
      //       this.city = areaArray1[1]
      //       this.country = areaArray1[2]
      //     }).catch(err => {
      //       console.log(err)
      //     })
      //   },
      //   getProvince() {
      //     var _this = this
      //     teacherApi.dataPermission(0)
      //       .then(data => {
      //         _this.provinces = data.obj
      //         return _this.provinces
      //       }, err => {
      //         console.log(err)
      //         _this.$message.error(err.msg)
      //       })
      //   },
      //   getArea(value) {
      //     if (value !== '') {
      //       console.log(value)
      //       teacherApi.dataPermission(value)
      //         .then(data => {
      //           if (value.toString().length === 2) {
      //             this.cities = data.obj
      //           } else {
      //             this.countries = data.obj
      //           }
      //         }, err => {
      //           console.log(err)
      //           this.$message.error(err.msg)
      //         })
      //     }
      //   },
      //   getSchool(value) {
      //     console.log(value)
      //     if (value !== '') {
      //       teacherApi.getSchool(value)
      //         .then(data => {
      //           this.schools = data.obj
      //         }, err => {
      //           console.log(err)
      //           this.$message.error(err.msg)
      //         })
      //     }
      //   },
      //   getClass(value) {
      //     if (value !== '') {
      //       teacherApi.getClass(value)
      //         .then(data => {
      //           this.classes = data.obj
      //         }, err => {
      //           console.log(err)
      //           this.$message.error(err.msg)
      //         })
      //     }
      //   },
      //   saveTeacher() {
      //     const obj = this.data
      //     console.log(obj)
      //     this.$refs.addTeacher.validate((valid) => {
      //       if (valid) {
      //         teacherApi.saveTeacher(obj).then(data => {
      //           this.$message.success('保存成功')
      //           this.$emit('close')
      //         }).catch(err => {
      //           console.log(err)
      //           this.$message.error(err.msg)
      //         })
      //       } else {
      //         this.$alert('数据格式不完整')
      //       }
      //     })
      //   },
      //   updateTeacher() {
      //     const obj = this.data
      //     this.$refs.addTeacher.validate((valid) => {
      //       if (valid) {
      //         teacherApi.updateTeacher(obj).then(data => {
      //           this.$message.success('保存成功')
      //           this.$emit('close')
      //         }).catch(err => {
      //           console.log(err)
      //           this.$message.error(err.msg)
      //         })
      //       } else {
      //         this.$alert('数据格式不完整')
      //       }
      //     })
      //   },
      //   getRoles() {
      //     const type = this.data.type
      //     teacherApi.getRoles(type).then(data => {
      //       this.roles = data.obj
      //     }).catch(error => {
      //       console.log(error)
      //       this.$message.error('保存失败')
      //     })
    }
  }
}
</script>

<style scoped>

</style>

