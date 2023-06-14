import type { RouteRecordRaw } from 'vue-router'

export const quizRouteNames = {
  quiz: 'quiz'
}

export const quizRoutes: RouteRecordRaw[] = [
  {
    path: '/quiz',
    name: quizRouteNames.quiz,
    component: () => import('./Quiz.vue'),
    meta: {
      requireAuth: true
    }
  }
]
