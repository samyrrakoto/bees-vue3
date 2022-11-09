<template>
    <div class="bee" :class="classesToToggle">
        <span>#{{ bee.id }}</span> -
        <span>{{ beemojis[bee.role] }}</span>
        <span>{{ bee.role }}</span> -
        <span>{{ bee.lp }}</span> /
        <span>{{ bee.hp }}</span>
        <span v-if="bee.lp == 0"> 💀</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BeeRoles from '@/types/BeeRoles';
import Bee from '@/models/Bee';

const BEEMOJIS: Record<BeeRoles, String> = {
    queen: '👑',
    worker: '🐝',
    scout: '🪖',
}

export default defineComponent({
    data() {
        return {
            beemojis: BEEMOJIS,
            classesToToggle: {
                queen: this.bee.role == 'queen',
                worker: this.bee.role == 'worker',
                scout: this.bee.role == 'scout',
                lastHit: this.bee.isLastHit,
                isDead: this.bee.lp == 0,

            },
        }
    },
    props: {
        bee: {
            type: Bee,
            required: true,
        }
    }
})
</script>

<style scoped>
.bee {
    width: 50%;
    margin-top: 10px;
    padding: 10px;
    color: white;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    box-sizing: border-box;
}

.queen {
    padding: 0.6em 2em;
    border: none;
    outline: none;
    color: gold;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.queen:before {
    content: "";
    background: linear-gradient(45deg,
            #ff0000,
            #ff7300,
            #fffb00,
            #48ff00,
            #00ffd5,
            #002bff,
            #7a00ff,
            #ff00c8,
            #ff0000);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-queen 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
}

@keyframes glowing-queen {
    0% {
        background-position: 0 0;
    }

    50% {
        background-position: 400% 0;
    }

    100% {
        background-position: 0 0;
    }
}

.queen:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
}

.worker {
    background-color: transparent;
    background-image: linear-gradient(to bottom, #fff, #f8eedb);
    border: 0 solid #e5e7eb;
    box-sizing: border-box;
    color: #482307;
}

.scout {
    background-color: #c2fbd7;
    color: green;
    box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px;
}
.lastHit {
    background-image: none;
    background-color: red;
    color:white;
    font-weight: bold;
}

.isDead {
    color:gray !important;
    font-weight: bold;
}

.false{
    color:red;
}
</style>