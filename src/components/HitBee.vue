<template>
    <button v-on:click="hitABee">
        Hit me bae bee one more time !
    </button>
</template>

<script lang="ts">
import HiveService from '@/services/HiveService';

export default {
        methods: {
            hitABee() {
                console.log("mama, just killeda bee")
                HiveService.hitRandomBee()
            },
        },
    }
</script>