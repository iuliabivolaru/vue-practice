import Vue from "vue";
import { shallowMount } from '@vue/test-utils'
import FormTweetComponent from '../src/views/form-tweet'

describe('form-tweet component', () => {
    const wrapper = shallowMount(FormTweetComponent);
    let $mounted = new Vue(FormTweetComponent).$mount();

    test('verify the component`s snapshot', () => {
        let $html = $mounted.$el.outerHTML
        expect($html).toMatchSnapshot();
    })
})