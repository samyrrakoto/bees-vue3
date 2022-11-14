<template>
    <div class="container">
        <div class="centered-element">
            <div v-if="queenIsDead" class="bn30">
                <span>GOD SAVE THE QUEEN 😢</span>
                <br>
            </div>
            <div v-else>
                <SingleBee v-for="(bee, index) in hive" :bee="bee" :key="index" class="bee" />
                <br><br>
                <HitBee v-on:BeeHit="updateHive" v-on:QueenDead="setQueenAsDead"></HitBee>
                <br>
            </div>
            <br>
            <ResetGame v-on:GameReset="createNewGame"></ResetGame>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Bee from '@/models/Bee';
import HitBee from '@/components/HitBee.vue';
import HiveRepository from '@/services/HiveRepository';
import HiveService from '@/services/HiveService';
import HiveFactory from '@/services/HiveFactory';
import ResetGame from '@/components/ResetGame.vue';
import SingleBee from '@/components/SingleBee.vue';


export default defineComponent({
    data() {
        const hive: Bee[] = [];
        return {
            hive,
            queenIsDead: false,
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
            this.queenIsDead = false;
            this.hive = HiveService.createNewHive();
        },
        setQueenAsDead(): void {
            this.queenIsDead = true;
        }
    },
    components: {
        HitBee,
        ResetGame,
        SingleBee,
    }
})
</script>

<style>
.bn30 {
    border: 5em;
    outline: none;
    font-size: 20px;
    -webkit-transform: translate(0);
    transform: translate(0);
    background-image: linear-gradient(45deg, #4568dc, #b06ab3);
    padding: 1em 1em;
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
    -webkit-transition: box-shadow 0.25s;
    transition: box-shadow 0.25s;
    color: white;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 3px;
    width: 30%;
    margin-left: auto;
    margin-right: auto;

}

.bn30 .text {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(45deg, #4568dc, #b06ab3);
}

.bn30:after {
    content: "";
    border-radius: 10px;
    position: absolute;
    margin: 4px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background: #0e0e10;
}

.bn30:hover .text {
    background-image: linear-gradient(-45deg, #4568dc, #b06ab3);
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.centered-element {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}

.bee {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}
</style>