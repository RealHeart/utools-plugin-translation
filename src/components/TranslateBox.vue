<template>
  <div>
    <el-input
      type="textarea"
      :rows="6"
      placeholder="请输入内容..."
      v-model="data.src"
      @input="onChange"
      resize="none"
      :maxlength="648"
      show-word-limit
      class="upt-input"
      style="margin-top: 15px"
    />
    <div class="upt-button upt-button-left">
      <el-button type="primary" size="small" round disabled>
        <el-icon>
          <document-copy />
        </el-icon>
        <span> 复制 </span>
      </el-button>

      <el-button type="primary" size="small" round disabled>
        <el-icon>
          <video-play />
        </el-icon>
        <span> 原文 </span>
      </el-button>

      <el-button type="primary" size="small" round @click="settingsClick">
        <el-icon>
          <setting />
        </el-icon>
        <span> 设置 </span>
      </el-button>
    </div>

    <div class="upt-button upt-button-right upt-select-box">
      <el-select
        class="upt-select"
        size="small"
        v-model="data.srcSelect"
        disabled
      >
        <el-option
          v-for="item in data.options"
          :key="item.baidu"
          :label="item.name"
          :value="item.name"
        >
        </el-option>
      </el-select>
      &nbsp;
      <el-icon>
        <arrow-right-bold />
      </el-icon>
      &nbsp;
      <el-select
        class="upt-select"
        size="small"
        v-model="data.toSelect"
        disabled
      >
        <el-option
          v-for="item in data.options"
          :key="item.baidu"
          :label="item.name"
          :value="item.name"
        >
        </el-option>
      </el-select>
    </div>

    <el-input
      type="textarea"
      :rows="6"
      placeholder="等待翻译"
      v-model="data.to"
      resize="none"
      readonly
      class="upt-input"
    />
    <settings ref="setting" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { baidu, lang } from "../api";
import Settings from "./Settings.vue";
export default defineComponent({
  components: { Settings },
  props: {
    platform: String,
  },
  setup(props) {
    const data = reactive({
      src: "",
      to: "",
      timeout: 0,
      value: "",
      srcSelect: "中文",
      toSelect: "英语",
      options: [lang.chinese, lang.english, lang.japanese],
    });
    const onChange = (value: string, isEvent: boolean = true) => {
      if (!isEvent) {
        if (data.src.length < 1) {
          console.log("原文为空，不操作");
          return;
        }
        value = data.src;
      }
      clearTimeout(data.timeout);
      data.timeout = setTimeout(async () => {
        data.to = "正在翻译...";
        console.log(value);
        console.log(props.platform);
        const result = await baidu(value, lang.chinese, lang.english);
        console.log(result);
        data.to = result.dst;
      }, 1000);
    };

    const setting = ref();

    const settingsClick = () => {
      setting.value.show();
    };

    return {
      data,
      onChange,
      settingsClick,
      setting,
    };
  },
});
</script>


<style lang="scss" scoped>
.upt-button {
  margin-top: 10px;
  margin-bottom: 10px;
}

.upt-button-left {
  float: left;
}

.upt-button-right {
  float: right;
}

.upt-input {
  font-size: 20px;
  font-weight: 800;
}

.upt-select {
  width: 80px;
}

.el-button,
.upt-select-box {
  .el-icon,
  span {
    vertical-align: middle !important;
  }
}
</style>