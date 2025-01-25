const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'contact',component: () => import('pages/ContactPage.vue') },
      { path: 'dashboard', name: "admin",component: () => import('pages/AdminDashboardPage.vue') },
      { path: 'settings', component: () => import('pages/SettingsPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', component: () => import('pages/RegistrationPage.vue') },
      { path: 'random', component: () => import('pages/RandomPage.vue') },
      { path: 'volunteer', component: () => import('pages/VolunteeringPage.vue') },
      { path: 'admin', component: () => import('pages/AdminPage.vue') },
      { path: 'churches', component: () => import('pages/ChurchesPage.vue') },
      { path: 'prayer', component: () => import('pages/PrayerPage.vue') },
      { path: 'intention', component: () => import('pages/PrayerIntentionPage.vue') },
    ],
  },
  {
    path: '/Admin',
    name: 'AdminLayout',
    component: () => import('layouts/AdminLayout.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
