<script setup>
import { ref } from 'vue';
import MyMessage from './MyMessage.vue';
import OtherMessage from './OtherMessage.vue';

const props = defineProps({
    participants: {
        type: Array,
        required: true
    },
    messages: {
        type: Array,
        required: true
    },
    myself: {
        type: Object,
        required: true
    },
    asyncMode: {
        type: Boolean,
        required: false,
        default: false
    },
    loadMoreMessages: {
        type: Function,
        required: false,
        default: null
    },
    scrollBottom: {
        type: Object,
        required: true
    },
    profilePictureConfig: {
        type: Object,
        required: true
    },
    linkOptions: {
        type: Object,
        required: true
    }
})

const isLoading = ref(false)

</script>

<template>
    <div>
        <div v-if="isLoading" class="loader">
            <div class="message-loading"></div>
        </div>

        <div v-for="(message, index) in messages" :key="index" class="message-container">
            <MyMessage v-if="message.myself"
                :myself="myself"
                :message="message" 
                :async-mode="asyncMode"
                :link-options="linkOptions.myself"
                :profile-picture-config="profilePictureConfig"
                :timestamp-config="timestampConfig"
                @onImageClicked="onImageClicked"
            />

            <OtherMessage v-else
                :participants="participants"
                :message="message" 
                :async-mode="asyncMode" 
                :link-options="linkOptions.others"
                :profile-picture-config="profilePictureConfig"
                :timestamp-config="timestampConfig"
                @onImageClicked="onImageClicked"
            />
        </div>
    </div>
</template>
