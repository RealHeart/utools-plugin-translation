<template>
  <el-dialog
    title="提示"
    v-model="data.dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    AppID:
    <el-input v-model="data.appid" placeholder="请输入AppID"></el-input>
    <br />
    秘钥:
    <el-input v-model="data.key" placeholder="请输入秘钥"></el-input>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="save">保存</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { ApiInfo } from "../api";

export default defineComponent({
  setup() {
    const data = reactive({
      dialogVisible: false,
      appid: "",
      key: "",
    });

    const handleClose = (done: () => void) => {
      save();
      done();
    };

    const show = () => {
      data.dialogVisible = true;
      if (ApiInfo.baidu != null) {
        data.appid = ApiInfo.baidu.id;
        data.key = ApiInfo.baidu.key;
      }
    };

    const save = () => {
      window.utools.dbStorage.setItem("baidu", {
        id: data.appid,
        key: data.key,
      });
      ApiInfo.baidu = window.utools.dbStorage.getItem("baidu");
      data.dialogVisible = false;
    };

    return {
      data,
      handleClose,
      show,
      save,
    };
  },
});
</script>
