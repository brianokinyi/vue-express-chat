<script setup>

const props = defineProps({
    participants: {
        type: Array,
        required: true
    },
    myself: {
        type: Object,
        required: true
    }
})
</script>

<template>
     <div>
        <slot name="header" 
            :chatTitle="chatTitle"
            :participants="participants"
            :myself="myself"
        ></slot>
        
        <div v-if="!hasHeaderSlot" class="">
            <h5 class="text-lg">{{ chatTitle }}</h5>
            <div class="flex justify-center space-x-2 font-medium">
                <span>{{ myself.name }}, </span>
                <span v-for="(participant, index) in participants" :key="participant.id">
                    {{ participant.name }}{{ participants.length - index - 1 ? ', ' : '' }}
                </span>
            </div>
        </div>
    </div>
</template>

