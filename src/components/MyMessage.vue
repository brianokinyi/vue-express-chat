<script setup>
import linkParse from '../mixins/linkParse';
import moment from 'moment';
import CheckIcon from 'vue-material-design-icons/Check.vue'
import CheckAllIcon from 'vue-material-design-icons/CheckAll.vue'

const props = defineProps({
    message: {
        type: Object,
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
})

const onImageClicked = (message) => {
    this.$emit("onImageClicked", message)
}
</script>

<template>
    <div class="flex justify-end pr-2">
        <div class="">
            <template v-if="message.type == 'image'">
                <p>{{ myself.name }}</p>
                <div v-if="message.uploaded" class="message-image">
                    <img :src="message.src" alt="" @click="onImageClicked(message)">
                </div>
                <div v-else class="message-image">
                    <img :src="message.preview" alt="">
                    <div class="img-loading"></div>
                </div>
            </template>

            <template v-else>    
                <div class="bg-indigo-100 px-4 py-3 rounded-lg max-w-[70%] break-words whitespace-pre-wrap">
                    <h5 class="text-sm text-gray-900 font-semibold">{{ myself.name }}</h5>
                    <p>{{ message.content }}</p>
                </div>
            </template>

            <div class="text-gray-500 max-w-[50%] flex items-center justify-end text-xs">
                <div> 
                    {{ moment(message.timestamp).format('h:mm a') }}
                </div>

                <CheckIcon v-if="message.uploaded && !message.viewed" :size="14" class="icon-sent"/>
                <CheckAllIcon v-else-if="message.uploaded && message.viewed" :size="14" class="icon-sent viewed"/>
            </div>
        </div>

        <!-- <div class="ml-2">
            <img class="rounded-full w-6 h-6" :src="myself.profilePicture" >
        </div> -->
    </div>
</template>

