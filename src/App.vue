<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="谷歌翻译" name="google" />
    <el-tab-pane label="百度翻译" name="baidu" />
    <el-tab-pane label="腾讯翻译" name="tencent" />
    <el-tab-pane label="有道翻译" name="youdao" />
    <el-tab-pane label="必应翻译" name="bing" />
  </el-tabs>
  <translate-box :platform="activeName" ref="tBox" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TranslateBox from "./components/TranslateBox.vue";

export default defineComponent({
  components: {
    TranslateBox,
  },
  setup() {
    const activeName = ref("google");
    const tBox = ref();
    const handleClick = () => {
      tBox.value.onChange("", true);
    };
    return {
      activeName,
      tBox,
      handleClick,
    };
  },
});
</script>
