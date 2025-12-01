<script setup lang="ts">
import { useData } from 'vitepress'
import {findItem} from '../../.vitepress/src/data/items'

// params is a Vue ref
const { params } = useData()
const item = findItem(params.value.id)


</script>

# {{item.name}}

{{item.description}}

<ItemPreview :name="params.id" />
