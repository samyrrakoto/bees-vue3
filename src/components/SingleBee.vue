<template>
    <div class="bee" :class="{ lastHit: isLastHit, isDead: lp == 0 }" >
        <span>{{ id }}</span> - <span>{{ role }}</span> - <span>{{ lp }}</span> / <span>{{ hp }}</span>
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
    border: 1px solid black;
    width: 33%;
    margin-top: 10px;
    padding: 1px;
}
.isDead{
    background-color: black;
    color:lightgray
}
.lastHit {
    color: red !important;
}
</style>