import { createRouter, createWebHistory } from 'vue-router'
import BoardView from '../views/BoardView.vue'
import ClueCard from '@/components/ClueCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'board',
      component: BoardView,
      children: [
        {
          path: '/clue/:clueId',
          name: 'clue',
          component: ClueCard
        }
      ]
    }
  ]
})

export default router
