import Vue from 'vue/dist/vue.js';
import test from 'ava';
import notification from '../src/notification';

let vm;
test.beforeEach(t => {
    let n = Vue.extend(notification);

    vm = new n({ propsData: {
        message: 'Hello world'
    }}).$mount();
})

test('that it capitalizes the message', t => {
    t.is(vm.$el.textContent, 'foobar');
});