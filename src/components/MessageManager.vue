<script setup>
import moment from 'moment';
import { ref } from 'vue';
import SendIcon from 'vue-material-design-icons/Send.vue';

const props = defineProps({
    myself: {
        type: Object,
        required: true
    },
})

const emit = defineEmits(['onMessageSubmit'])

const userInput = ref(null)

const sendMessage = (e) => {
    let textInput = userInput.value.textContent

    emit("onMessageSubmit", textInput)

    userInput.value.textContent = ''

    // Match characters that are different of spaces, tabs, line breaks...
    const matchNotEmpty = /[^\s]+/i

    // Match characters that are between line spaces, tabs, line breaks...
    const contentMatch = textInput.match(/^\s*((.|\n)+?)\s*$/i)
    if (textInput && matchNotEmpty.test(textInput) && contentMatch) {
        let message = {
            content: contentMatch[1],
            myself: true,
            participantId: 2,
            timestamp: moment(),
            uploaded: false,
            viewed: false,
            type: 'text'
        };

        emit("onMessageSubmit", message)
    }
}

const handleImageChange = () => { }

const handleType = () => { }
</script>

<template>
    <div class="h-16 bg-white flex items-center justify-between px-4 py-2 shadow-sm border-t border-gray-300">
            <div class="flex">
                <div ref="userInput" 
                    class="w-full text-gray-700" 
                    :placeholder="'Type your message ...'"
                    tabIndex="0" 
                    contenteditable="true"
                    @input="handleType" 
                    @keyup.enter.exact="sendMessage"
                ></div>
            </div>

            <div>
                <div class="container-send-message icon-send-message" @click.prevent="sendMessage">
                    <SendIcon :size="16" :fill-color="'#3b82f6'"/>
                </div>
                <div v-if="sendImages" class="container-send-message icon-send-message" @click="pickImage">
                    <input ref="inputImage" :accept="acceptImageTypes" type="file" style="display: none;" @input="handleImageChange">
                    <ImageIcon :size="16" :fill-color="'#3b82f6'"/>
                </div>
            </div>
        </div>

    <!-- <div>
        <div class="relative mt-2 rounded-md shadow-sm">
          <input 
            type="text" 
            name="account-number" 
            id="account-number" 
            class="block w-full rounded-md border-0 py-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6" 
            placeholder="Type here ..." />

            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                <button>
                    <SendIcon :size="16" :fill-color="'#3b82f6'"/>
                </button>
            </div>
        </div>
      </div> -->
</template>

