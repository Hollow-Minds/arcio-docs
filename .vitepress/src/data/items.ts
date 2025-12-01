
import { uriName } from './../util';
export enum ItemCategory {
    Mineral = 'mineral',
    Block = 'block',
    Item = 'item',
    Tool = 'tool',
    Component = 'component'
}

export interface ItemData {
    name: string
    uri?: string
    native?: boolean // Whether the item is a native Hytale item
    description?: string
    image?: string // Path to the item's image
    category: ItemCategory
    cost?: [ItemName, number][]
}


export const itemData: ItemData[] = [
    {
        name: 'Shard Catalyst',
        native: false,
        description: 'A mystical catalyst that harnesses ambient mana to power magical devices.',
        category: ItemCategory.Component,
        cost: [['Crystalized Mana', 2], ['Arcanium', 4]]
    },
    {
        name: 'Crystalized Mana',
        native: false,
        description: 'A concentrated form of mana, used as a power source for various magical constructs.',
        category: ItemCategory.Mineral,
    },
    {
        name: 'Zinc',
        native: true,
        description: 'A common ore used in crafting and construction.',
        category: ItemCategory.Mineral,
    },
    {
        name: 'Arcanium',
        native: false,
        description: 'A rare and powerful mineral infused with magical properties.',
        category: ItemCategory.Mineral,
        cost: [['Crystalized Mana', 5], ['Zinc', 10]]
    },

    // Gameplay blocks / items (all non-native)
    {
        name: 'Etherlamp',
        native: false,
        description: 'A light block that turns on when powered. Has clear input/output faces and can be configured.',
        category: ItemCategory.Block,
    },
    {
        name: 'Arc Button',
        native: false,
        description: 'Momentary input — passes energy while pressed.',
        category: ItemCategory.Block,
    },
    {
        name: 'Arc Switch',
        native: false,
        description: 'Toggle input — passes energy when on. Toggle state persists until changed.',
        category: ItemCategory.Block,
    },
    {
        name: 'Sigil Matrix',
        native: false,
        description: 'Configurable logic block (AND/OR/XOR/NOT/NAND/NOR/Cohesion).',
        category: ItemCategory.Block,
    },
    {
        name: 'Arc Relay',
        native: false,
        description: 'Shares an input to multiple outputs, organizes Manathreads, and extends signal range.',
        category: ItemCategory.Block,
    },
    {
        name: 'Arc Timer',
        native: false,
        description: 'Configurable delay output; timing ranges are adjustable in the block UI.',
        category: ItemCategory.Block,
    },
    {
        name: 'Mana Air Purifier',
        native: false,
        description: 'Early-game passive mana generator that produces a steady low output over time.',
        category: ItemCategory.Block,
    },
    {
        name: 'Fuel Generator',
        native: false,
        description: 'Mid/late-game higher-output generator that consumes fuel for greater power.',
        category: ItemCategory.Block,
    },
    {
        name: 'Manathreads',
        native: false,
        description: 'Directional wires for connecting inputs and outputs; used to route mana signals between devices.',
        category: ItemCategory.Block,
    },
    {
        name: 'Circuit Board',
        native: false,
        description: 'Placeable compact circuit with GUI editing; can be edited with the Inspector Item.',
        category: ItemCategory.Block,
    },
    {
        name: 'Inspector Item',
        native: false,
        description: 'Hand item that opens and edits Circuit Boards and inspects configured blocks.',
        category: ItemCategory.Item,
    },
    {
        name: 'Needle Tool',
        native: false,
        description: 'A wiring tool for intuitively creating and editing Manathread connections.',
        category: ItemCategory.Tool,
    },

    // Leylight-related components (see Leylight guide for details)
    {
        name: 'Arc Funnel',
        native: false,
        description: 'Leylight component with configurable behavior to funnel and shape leylight flow.',
        category: ItemCategory.Component,
    },
    {
        name: 'Chromatic Emitter',
        native: false,
        description: 'Leylight component that emits colored leylight signals.',
        category: ItemCategory.Component,
    },
    {
        name: 'Leylight Mirror',
        native: false,
        description: 'Leylight component that reflects and redirects leylight beams.',
        category: ItemCategory.Component,
    },
    {
        name: 'Prism',
        native: false,
        description: 'Leylight component that splits or combines leylight bands.',
        category: ItemCategory.Component,
    },
    {
        name: 'Focal Array',
        native: false,
        description: 'Leylight component that focuses leylight into tighter beams or patterns.',
        category: ItemCategory.Component,
    },
    {
        name: 'Command Transceiver',
        native: false,
        description: 'Leylight component used to send and receive command signals across leyline networks.',
        category: ItemCategory.Component,
    },
    {
        name: 'Arc Depot',
        native: false,
        description: 'Leylight component used as a storage and dispatch unit for leyline-related components.',
        category: ItemCategory.Component,
    }

].map(item => ({
    ...item,
    uri: uriName(item.name)
} as ItemData))

export function findItem(uri: string) {
    return itemData.find(item => item.uri === uri)
}

export type ItemName = (typeof itemData)[number]['name'];

// const x: ItemName = 'Shard Catalyst'