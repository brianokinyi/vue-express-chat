<script setup>
import Header from './Header.vue';
import MessageDisplay from './MessageDisplay.vue';
import MessageManager from './MessageManager.vue'

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
    chatTitle: {
        type: String,
        required: false,
        default: ''
    },
    placeholder: {
        type: String,
        required: false,
        default: 'Type your message here'
    },
    hideCloseButton: {
        type: Boolean,
        required: false,
        default: false
    },
    submitIconSize: {
        type: Number,
        required: false,
        default: 24
    },
    submitImageIconSize: {
        type: Number,
        required: false,
        default: 24
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
        required: false,
        default: () => {
            return {
                messageSent: true,
                messageReceived: false
            }
        }
    },
    displayHeader: {
        type: Boolean,
        required: false,
        default: true
    },
    sendImages: {
        type: Boolean,
        required: false,
        default: true
    },
    profilePictureConfig: {
        type: Object,
        required: false,
        default: () => {
            return {
                others: true,
                myself: false,
                styles: {
                    width: '25px',
                    height: '25px',
                    borderRadius: '50%'
                }
            }
        }
    },
    timestampConfig: {
        type: Object,
        required: false,
        default: () => {
            return {
                format: 'HH:mm',
                relative: false
            }
        }
    },
    linkOptions: {
        type: Object,
        required: false,
        default: () => {
            return {
                myself: {},
                others: {}
            }
        }
    },
    acceptImageTypes: {
        type: String,
        required: false,
        default: "image/*"
    }
})

</script>

<template>
    <div class="quick-chat-container">
        <Header v-if="displayHeader"
            :participants="participants"
            :myself="myself">
            <template #header>
                <slot name="header"></slot>
            </template>
        </Header>

        <div class="mt-4">
            <MessageDisplay  
                :myself="myself"
                :participants="participants"
                :messages="messages" 
                :async-mode="asyncMode" 
                :load-more-messages="loadMoreMessages"
                :link-options="linkOptions"
                :scroll-bottom="scrollBottom"
                :profile-picture-config="profilePictureConfig"
                :timestamp-config="timestampConfig"
                @onImageClicked="onImageClicked"/>
        </div>

        <div class="fixed max-w-xl w-full left-1/2 transform -translate-x-1/2 bottom-0 h-16 z-40 px-4 shadow-sm">
            <MessageManager
                :send-images="sendImages"
                :accept-image-types="acceptImageTypes"
                @onImageSelected="onImageSelected"
                @onMessageSubmit="onMessageSubmit"
                @onType="onType"
            />
        </div>
    </div>
</template>
