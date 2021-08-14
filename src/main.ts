import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/packages/theme-chalk/src/base.scss'

import {
    ElTabs,
    ElTabPane,
    ElInput,
    ElButton,
    ElIcon,
    ElSelect,
    ElOption,
    ElDialog,
} from 'element-plus';

import {
    ArrowRightBold,
    DocumentCopy, Setting, VideoPlay
} from '@element-plus/icons'

const components = [
    ElTabs,
    ElTabPane,
    ElInput,
    ElButton,
    ElIcon,
    ElSelect,
    ElOption,
    ElDialog
]

const icons = [
    DocumentCopy,
    VideoPlay,
    ArrowRightBold,
    Setting
]

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})
icons.forEach(icon => {
    app.component(icon.name, icon)
})

app.mount('#app')

