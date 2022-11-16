import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import PredictSummary from './components/PredictSummary.vue';
import Predict from './components/Predict.vue';
import About from './components/About.vue';

import NotFound from './components/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/predict_summary' },
    { name: 'predict_summary', path: '/predict_summary', component: PredictSummary },
    { name: 'predict', path: '/predict', component: Predict },
    { name: 'about', path: '/about', component: About },

    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'example-active',
  linkExactActiveClass: 'example-exact-active',
});

export default router;
