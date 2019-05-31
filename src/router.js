import Vue from 'vue';
import Router from 'vue-router';
import AnimeList from './views/animelist/AnimeList.vue';
import WaifuLanding from './views/waifulanding/WaifuLanding.vue';
import Admin from './views/admin/Admin.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
      if (savedPosition) {
          // savedPosition is only available for popstate navigations.
          return savedPosition;
      } else {
          const position = {};

          // scroll to anchor by returning the selector
          if (to.hash) {
              position.selector = to.hash;

              // specify offset of the element
              if (to.hash === '#top-page') {
                  position.offset = { y: 0 }
              }

              if (document.querySelector(to.hash)) {
                  return position;
              }

              // if the returned position is falsy or an empty object,
              // will retain current scroll position.
              return false;
          }

          return new Promise(resolve => {
              // check if any matched route config has meta that requires scrolling to top
              if (to.matched.some(m => m.meta.scrollToTop)) {
                  // coords will be used if no selector is provided,
                  // or if the selector didn't match any element.
                  position.x = 0;
                  position.y = 0;
              }

              // wait for the out transition to complete (if necessary)
              this.app.$root.$once('triggerScroll', () => {
                  // if the resolved position is falsy or an empty object,
                  // will retain current scroll position.
                  resolve(position);
              })
          })
      }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: AnimeList
    },
    {
      path: '/animelist',
      name: 'animelist',
      component: AnimeList
    },
    {
        path: '/waifulanding',
        name: 'waifulanding',
        component: WaifuLanding
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin
    }
  ]
});
