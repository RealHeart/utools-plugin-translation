<template>
  <div>
    <el-input
      type="textarea"
      :rows="6"
      placeholder="请输入原文"
      v-model="data.src"
      @input="onChange"
      resize="none"
      :maxlength="100"
      show-word-limit
      class="upt-input"
    />
    <div class="upt-button">
      <el-button type="primary" size="small" round>
        <el-icon>
          <document-copy />
        </el-icon>
        <span> 复制 </span>
      </el-button>

      <el-button type="primary" size="small" round>
        <el-icon>
          <video-play />
        </el-icon>
        <span> 原文 </span>
      </el-button>
    </div>

    <el-input
      type="textarea"
      :rows="6"
      :placeholder="data.toTips"
      v-model="data.to"
      resize="none"
      readonly
      class="upt-input"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  props: {
    platform: String,
  },
  setup(props) {
    console.log(props.platform);
    const data = reactive({
      src: "",
      to: "",
      toTips: "等待翻译",
      timeout: 0,
    });
    const onChange = (value: string, isEvent: boolean = false) => {
      if (isEvent) {
        if (data.src.length < 1) {
          console.log("原文为空，不操作");
          return;
        }
        value = data.src;
      }
      clearTimeout(data.timeout);
      data.timeout = setTimeout(() => {
        console.log(value);
        console.log(props.platform);
        data.to = value;
      }, 1000);
    };
    return {
      data,
      onChange,
    };
  },
});
</script>


<style lang="scss" scoped>
.upt-button {
  margin-top: 10px;
  margin-bottom: 10px;
  .copy {
    float: left;
  }

  .play {
    float: left;
  }
}

.upt-input {
  font-size: 20px;
}

.el-button {
  .el-icon,
  span {
    vertical-align: middle !important;
  }
}
</style>