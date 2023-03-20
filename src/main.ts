/**
 * Author: pengwenlei pwl330109371@gmail.com
 * Date: 2023-03-20 11:52:49
 * LastEditors: pengwenlei pwl330109371@gmail.com
 * LastEditTime: 2023-03-20 15:35:52
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { LmgUtil } from './utils/imgUtil'
LmgUtil.storageLmgList()

createApp(App).mount('#app')
 