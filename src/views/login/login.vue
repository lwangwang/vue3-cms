<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>

<script lang="ts">
import { ElButton } from 'element-plus'
import { defineComponent } from 'vue'

// import { ElButton } from 'element-plus/lib'
export default defineComponent({
  setup() {
    return {
      jjsd: 'www',
      dad: 'weew'
    }
  },
  components: { ElButton }
})
</script>

<style lang="less" scoped></style>
