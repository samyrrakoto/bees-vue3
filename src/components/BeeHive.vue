<template>
    <div>
        <SingleBee v-for="(bee, index) in bees" :id="bee.id" :lp="bee.lp" :role="bee.role" :hp="bee.hp" :key="index" />
        <HitBee></HitBee>
    </div>
</template>

<script lang="ts">
import SingleBee from '@/components/SingleBee.vue';
import HiveService from '@/services/HiveService';
import HitBee from './HitBee.vue';

export default
    {
        computed: {
            bees() {
                const hive = localStorage.getItem('hive')
                if (hive) {
                    return JSON.parse(hive);
                } else {
                    return HiveService.createNewHive();
                }
            }
        },
        components: {
            SingleBee,
            HitBee,
        }
    }
</script>