
const routes = [
  {
    path: '/',
    component: () => import('pages/Index.vue')
  },
  {
    path: '/historia',
    component: () => import('pages/Historia.vue')
  },
  {
    path: '/pre-agendamento',
    component: () => import('pages/PreAgendamento.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
