import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/packages/theme-chalk/src/base.scss'
import {
    ElTabs,
    ElTabPane,
    ElInput,
    ElButton,
    ElIcon
} from 'element-plus';

import {
    DocumentCopy, VideoPlay
} from '@element-plus/icons'

const components = [
    ElTabs,
    ElTabPane,
    ElInput,
    ElButton,
    ElIcon
]

const icons = [
    DocumentCopy,
    VideoPlay
]

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})
icons.forEach(icon => {
    app.component(icon.name, icon)
})

app.mount('#app')
