import 'uno.css'
import { ViteSSG } from 'vite-ssg/single-page'
import '@/styles/reset.css'
import 'virtual:svg-icons-register'
import App from './App.vue'

export const createApp = ViteSSG(App)
