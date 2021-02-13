
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
  {
    path: '/penteados',
    component: () => import('pages/Penteados.vue')
  },
  {
    path: '/blog',
    component: () => import('pages/Blog.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
