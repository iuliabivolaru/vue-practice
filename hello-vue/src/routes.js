import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
let routes = [{
    path: '/home',
    component: require('./views/Home.vue').default
}];

export default new VueRouter({ routes });
