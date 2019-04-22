<template>
  <div>
    <h2>变更信息</h2>
    <el-form ref="details" :model="data" label-width="120px">
      <el-form-item label="活动形式">
        <el-input v-model="form.desc" type="textarea"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data() {
    return {
      form: {
        desc: ''
      }
    }
  }

}
</script>

<style scoped>

</style>
