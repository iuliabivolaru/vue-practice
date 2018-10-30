export default {
    template: '<div>{{ message | capitalize }}</div>',
    props: ['message'],
    data() {
        return {
            message: 'Hello world'
        }
    },
    filters: {
        capitalize(message) {
            return message.toUpperCase();
        }
    }
}