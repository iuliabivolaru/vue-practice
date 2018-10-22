Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{ task.description }}</task></div>',

    data() {
        return {
            tasks: [
                { description: 'Go to the store', complete: true },
                { description: 'Go to the email', complete: false },
                { description: 'Go to the farm', complete: true },
                { description: 'Go to work', complete: false }
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

Vue.component('message', {
    props: ['title', 'body'],
    template: `<article class="message">
                    <div class="message-header">
                        {{title}}
                    </div>

                    <div class="message-body">
                        {{body}}
                    </div>
               </article>`
})

Vue.component('modal', {
    template: `<div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <slot></slot>
                </div>
            </div>
            <button class="modal-close is-large" @click="$emit('close')" aria-label="close"></button>
        </div>`
})

new Vue({
    el: '#root',
    data: {
        showModal: false
    }
})

