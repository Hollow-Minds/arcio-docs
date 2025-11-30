# Core Mechanics

## Binary Logic

Arcio operates on binary signals (1/0). Sigil Matrix blocks provide named logic functions (Union/Union Sigil=AND, Inclusion=OR, Inversion=NOT, Distinction=XOR, etc.). Logic evaluation is deterministic and optimized for large circuits.

## Power System

- Mana is required for action blocks (movement, item transfer, item conversion). Simple logic gates do not consume mana.
- Shard Catalysts supply a baseline signal (value 1). Generators and Purifiers provide continuous mana for sustained operations.
- Design choice: keep pure logic free to allow complex CPUs; restrict mana consumption to blocks that do work.

## Manathreads & Connections

- Manathreads are directional and visible in-world. Use the Needle Tool to route lines quickly.
- Arc Relays organize lines and split outputs. Visual routing helps avoid overlaps; multiple lines can be stacked or displayed side-by-side.

## Sigils (Logic gates)

![](/assets/sigilspage.png)

- Union Sigil: AND
- Inclusion Sigil: OR
- Inversion Sigil: NOT
- Distinction Sigil: XOR
- Contention Sigil: NAND
- Exclusion Sigil: NOR
- Cohesion Sigil: XNOR

## Visualization & Performance

- Wires show animated flow when powered. Pathfinding routing minimizes visual clutter.
- Circuit Board simulation can precompute outputs for optimization on large builds.
