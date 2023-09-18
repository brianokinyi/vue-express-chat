import VueExpressChat from './components/VueExpressChat.vue';

export default {
    install:  (app, options) => {
        app.component("VueExpressChat", VueExpressChat);
    }
}