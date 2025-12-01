import { itemData } from "../../.vitepress/src/data/items"

export default {
    paths() {
        return itemData.map(item => ({ params: { id: item.uri! } }))

        // return [
        //     { params: { pkg: 'foo' } },
        //     { params: { pkg: 'bar' } }
        // ]
    }
}