<template>
    <div style="display: inline-block">
        <h1>{{ item?.name }}</h1>
        {{ item?.description }}
        {{ item?.image }}
    </div>
</template>
<script setup lang="ts">
import { itemData, ItemName } from '../data/items';

interface Props {
    name: ItemName
}

const props = defineProps<Props>()
const item = itemData.find(item => item.name === props.name)


</script>
<style scoped></style>