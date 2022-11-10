<template>
    <div>
        <SingleBee v-for="(bee, index) in hive" :bee="bee" :key="index" />
        <br>
        <HitBee v-on:BeeHit="updateHive" v-on:QueenDead="createNewGame"></HitBee>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Bee from '@/models/Bee';
import HitBee from '@/components/HitBee.vue';
import HiveRepository from '@/services/HiveRepository';
import HiveService from '@/services/HiveService';
import HiveFactory from '@/services/HiveFactory';
import SingleBee from '@/components/SingleBee.vue';


export default defineComponent({
    data() {
        const hive: Bee[] = [];
        return {
            hive
        }
    },
    created() {
        const beeState: string | null = HiveRepository.getHiveState();
        if (beeState) {
            this.updateHive();
        } else {
            this.createNewGame();
        }
    },
    methods: {
        updateHive(): void {
            this.hive = HiveFactory.restoreBeeTypeArray(JSON.parse(String(HiveRepository.getHiveState())));
        },
        createNewGame(): void {
            this.hive = HiveService.createNewHive();
        }
    },
    components: {
        HitBee,
        SingleBee,
    }
})
</script>