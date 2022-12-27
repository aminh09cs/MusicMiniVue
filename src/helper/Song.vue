<template>
<section 
    class="song" 
    :class="className"
>
    <img :src="convertedData.bgUrl">
    <p>{{ convertedData.name }}</p>
    <p>{{ convertedData.artist }}</p>
</section>
</template>
<script setup>
import { defineProps, ref } from 'vue';
const props = defineProps(["song", "className"]);
const convertedData = ref({
    bgUrl: props.song.bgUrl,
    name: props.song.nameAlbum || props.song.nameSong,
    artist: props.song.artist || ""
})
</script>
<style scoped lang="scss">
@import "./mixin";
.song{
    p:nth-of-type(1){
        @include styleText(#D6D6D6, 16px, 700);
        line-height: 22px;
    }
    p:nth-of-type(2){
        @include styleText(#E1E1E1, 14px, 400);
        line-height: 22px;
    }
}
.song.song-artist{
    p:nth-of-type(1){
        text-align: center;
        margin-top: 18px;
    }
}
</style>