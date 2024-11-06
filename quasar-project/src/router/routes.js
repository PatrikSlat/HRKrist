const routes = [
    {
      path: '/',
      component: () => import('layouts/MainLayout.vue'),
      children: [
        { path: '', component: () => import('pages/IndexPage.vue') },
        { path: '/EventsPage', component: () => import('pages/EventsPage.vue') },
        { path: '/ProfilPage', component: () => import('pages/ProfilPage.vue') },
        { path: '/HomePage', component: () => import('pages/HomePage.vue') },
        { path: '/QutesPage', component: () => import('pages/QutesPage.vue') },
        { path: '/CreateAccount', component: () => import('pages/CreateAccount.vue')},
        { path: '/ProfilOrganizacije', component: () => import('pages/OrgProfile.vue')}
      ]
    },
  
    // Always leave this as last one,
    // but you can also remove it
    {
      path: '/:catchAll(.*)*',
      component: () => import('pages/ErrorNotFound.vue')
    }
  ]
  
  export default routes
  