<template>
    <div class="bee">
        <span>{{ id }}</span> - <span>{{ role }}</span> - <span>{{ lp }}</span> / <span>{{ hp }}</span>
    </div>
</template>

<script lang="ts">

export default{
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
    }
}
</script>

<style scoped>
.bee {
    border: 1px solid black;
    width: 33%;
    margin-top: 10px;
    padding: 1px;
}
</style>