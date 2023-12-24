import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import test from '@/views/test.vue'

const routes = [
	{
		name: 'Home',
		path: '/',
		component: Home
	},
	{
		name: 'test',
		path: '/test',
		component: test
	},
	
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
