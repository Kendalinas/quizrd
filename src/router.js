import Vue from 'vue'
import Router from 'vue-router'
import QuizWriter from '@/views/QuizWriter'
import Quiz from '@/views/Quiz'
// TODO: Import new component

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'quizwriter',
      component: QuizWriter
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz,
      props: true
    }
    // TODO: Add new route definition here.
  ]
})
