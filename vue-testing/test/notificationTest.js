import Vue from 'vue';
import test from 'ava';
import notification from '../src/notification';

test('that it renders a notification', t => {
    t.is(notification.data().message, 'Hello world');
});