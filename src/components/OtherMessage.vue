<script setup>
import CheckIcon from 'vue-material-design-icons/Check.vue';
import moment from 'moment';

const props = defineProps({
    participants: {
        type: Array,
        required: true
    },
    message: {
        type: Object,
        required: true
    },
    myself: {
        type: Object,
        required: true
    }
})

const getParticipantById = (id) => {
    let curr_participant;

    props.participants.forEach(participant => {
        if (participant.id === id) {
            curr_participant = participant;
        }
    }); 

    return curr_participant;
}

const onImageClicked = (message) => {
    this.$emit("onImageClicked", message)
}
</script>

<template>
    <div class="flex justify-start pr-2">
        <div class="mr-2">
            <img class="rounded-full w-6 h-6" :src="getParticipantById(message.participantId).profilePicture" >
        </div>

        <div class="message-content">
            <template v-if="message.type == 'image'">
                <h5 class="message-username-image">{{ getParticipantById(message.participantId).name }}</h5>
                <div v-if="message.uploaded" class="message-image">
                    <img class="message-image-display" :src="message.src" alt="" @click="onImageClicked(message)">
                </div>
                <div v-else class="message-image">
                    <img class="message-image-display img-overlay" :src="message.preview" alt="">
                    <div class="img-loading"></div>
                </div>
            </template>

            <template v-else>
                <div class="bg-gray-100 px-4 py-3 rounded-lg max-w-[70%] break-words whitespace-pre-wrap">
                    <h5 class="text-sm text-gray-900 font-semibold">{{ getParticipantById(message.participantId).name }}</h5>
                    <p>{{ message.content }}</p>
                </div>
            </template>

            <div class="text-gray-500 max-w-[50%] flex items-center justify-start text-xs">
                <div> 
                    {{ moment(message.timestamp).format('h:mm a') }}
                </div>

                <CheckIcon v-if="message.uploaded && !message.viewed" :size="14" class="icon-sent"/>
                <CheckAllIcon v-else-if="message.uploaded && message.viewed" :size="14" class="icon-sent viewed"/>
            </div>
        </div>
    </div>
</template>
