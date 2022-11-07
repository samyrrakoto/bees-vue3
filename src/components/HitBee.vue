<template>
    <button v-on:click="hitABee">
        Hit me bae bee one more time !
    </button>
</template>

<script lang="ts">
import HiveService from '@/services/HiveService';
import { defineComponent } from 'vue';

export default defineComponent({
        methods: {
            hitABee() {
                HiveService.hitRandomBee();
                this.$emit('BeeHit');
            },
        },
})
</script>