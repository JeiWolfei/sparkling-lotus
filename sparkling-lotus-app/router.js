import VueRouter from 'vue-router';
import Home from './src/components/Home/Home';

export default new VueRouter ({
  routes: [
      { path : '/home', component: Home },,
      { path: '*', redirect: '/home' }
  ]
});