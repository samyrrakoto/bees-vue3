<template>
    <div>
        <SingleBee v-for="(bee, index) in hive" :id="bee.id" :lp="bee.lp" :role="bee.role" :hp="bee.hp" :isLastHit="bee.isLastHit" :key="index" />
        <HitBee v-on:BeeHit="updateHive"></HitBee>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Bee from '@/models/Bee';
import HitBee from './HitBee.vue';
import HiveRepository from '../services/HiveRepository';
import SingleBee from '@/components/SingleBee.vue';
import HiveService from '../services/HiveService';


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
            this.hive = HiveService.createNewHive();
        }
    },
    methods: {
        updateHive(){
            this.hive = JSON.parse(String(HiveRepository.getHiveState())) as Bee[];
        }
    },
    components: {
        SingleBee,
        HitBee,
    }
})
</script>