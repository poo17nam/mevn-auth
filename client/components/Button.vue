<template>
    <!--<button :disabled="disabled" @click="$emit('click')" class="w-full mt-3 py-3 bg-blue-400 text-white rounded-sm focus:outline-none text-sm hover:bg-blue-300" :class="{ 'bg-emerald': !loading, 'bg-emerald-light cursor-not-allowed': loading }">-->
    
    <button :disabled="disabled" @click="$emit('click')" class="w-full mt-3 py-3 text-white rounded-sm focus:outline-none text-sm hover:bg-blue-300" :class="loading ? 'bg-blue-400' : 'bg-blue-300'">
        <loader v-if="loading" />
        <span v-else>{{label}}</span>
    </button>
    
</template>

<script>
    export default {
        props: {
            disabled: {
                type: Boolean,
                required: false,
                default: false
            },
            label: {
                type: String,
                required: true
            },
            loading: {
                type: Boolean,
                required: false,
                default: false
            }
        }
    }
</script>