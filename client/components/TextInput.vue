<template>
    <div class="mb-3">
        <input 
        type="text" 
        class="w-full focus:outline-none p-3 text-sm text-gray-500 bg-gray-100 py-3 font-normal" 
        :value="value"
        :name="name"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
        @change="$emit('input', $event.target.value)"
        @input="$emit('input', $event.target.value)"
        :placeholder="placeholder">

        <span v-if="error" class="text-xs text-red-600">{{error}}</span>
    </div>
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: false,
                default: 'text'
            },
            value: {
                type: String,
                required: false,
                default: ''
            },
            name: {
                type: String,
                required: true
            },
            error: {
                "type": String,
                required: false
            }
        }
    }
</script>