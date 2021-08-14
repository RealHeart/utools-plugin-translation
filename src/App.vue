<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="百度翻译" name="baidu" />
  </el-tabs>
  <translate-box :platform="activeName" ref="tBox" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TranslateBox from "./components/TranslateBox.vue";
import { ApiInfo } from "./api";
import { ElMessage } from "element-plus";
export default defineComponent({
  components: {
    TranslateBox,
  },
  setup() {
    const utools = window.utools;
    utools.onPluginReady(() => {
      console.log("插件装配完成，已准备好");
      ApiInfo.baidu = utools.dbStorage.getItem("baidu");
      if (ApiInfo.baidu == null) {
        ElMessage.error("未配置百度翻译API, 请点击右上角进入设置配置!");
      }
      console.log(ApiInfo.baidu);
    });
    const activeName = ref("baidu");
    const tBox = ref();
    const handleClick = () => {
      tBox.value.onChange("", false);
    };
    return {
      activeName,
      tBox,
      handleClick,
    };
  },
});
</script>
