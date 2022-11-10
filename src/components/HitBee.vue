<template>
    <button v-on:click="hitABee" class="button-52" role="button"><span class="text">Hit me bae BEE one more time !</span></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HiveService from '@/services/HiveService';

export default defineComponent({
        methods: {
            hitABee() {
                const isQueenDead: boolean = HiveService.hitRandomBee();
                if (!isQueenDead) {
                    this.$emit('BeeHit');
                } else {
                    this.$emit('QueenDead')
                }
            },
        },
})
</script>

<style>
.button-52 {
    font-size: 16px;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 13px 20px 13px;
    outline: 0;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.button-52:after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
}

.button-52:hover:after {
    top: 0px;
    left: 0px;
}

@media (min-width: 768px) {
    .button-52 {
        padding: 13px 50px 13px;
    }
}
</style>