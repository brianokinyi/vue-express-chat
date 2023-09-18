<script setup>
import SendIcon from 'vue-material-design-icons/Send.vue';

const props = defineProps({
    myself: {
        type: Object,
        required: true
    },
})

const handleImageChange = () => { }
</script>

<template>
    <div>
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
      </div>
</template>

