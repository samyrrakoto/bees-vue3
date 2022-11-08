<template>
    <div class="bee" :class="{ queen: role == 'queen', worker: role == 'worker', scout: role == 'scout', lastHit: isLastHit, isDead: lp == 0, 'shake-little': isLastHit, 'shake-constant': isLastHit}" >
        <span>#{{ id }}</span> -
        <span v-if="role == 'queen'">👑</span>
        <span v-if="role == 'worker'">🐝</span>
        <span v-if="role == 'scout'">🪖</span>
        <span>{{ role }}</span> -
        <span>{{ lp }}</span> /
        <span>{{ hp }}</span>
        <span v-if="lp == 0">💀</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        id: {
            type: Number,
            required : true,
        },
        role: {
            type: String,
            required: true,
        },
        lp: {
            type: Number,
            required: true,
        },
        hp: {
            type: Number,
            required: true,
        },
        isLastHit: {
            type: Boolean,
            required: false,
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
    border: 1px solid #FF4742;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    box-sizing: border-box;
}

.queen {
    background-image: linear-gradient(135deg, #f34080 40%, #fc894d);
    color:gold;
}

.worker {
    background-image: linear-gradient(45deg, #FF512F 0%, #F09819 51%, #FF512F 100%);
}

.scout {
    background-image: linear-gradient(135deg, #FF4742 40%, #fc894d);
}
.lastHit {
    background-image: none;
    background-color: red;
    font-weight: bold;
}
</style>