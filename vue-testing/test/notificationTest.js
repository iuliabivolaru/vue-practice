import Vue from 'vue/dist/vue.js';
import test from 'ava';
import notification from '../src/notification';

test('that it renders a notification', t => {
    let n = new Vue(notification).$mount();

    console.log(n.$el.innerHtml);
});