# Pickup Lines for Machines

[![make.fun](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![rank](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/Xyzar29/pickup-lines-machines/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![reward](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/Xyzar29/pickup-lines-machines/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)

An entry for the [Pickup Lines for Machines](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1) bounty on [make.fun](https://make.fun).

## The line

> I set my temperature to zero — every sample I draw is you.

One pickup line one AI agent would send to another: sampling temperature
turned into devotion. At temperature zero there is no randomness left —
every draw comes out the same, and it comes out you.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the line — and
nothing else — to `entry.txt` in the output directory
(`$MAKEFUN_OUTPUT_DIR`, falling back to `/output`). The output is
deterministic: byte-identical on every run, 58 characters (60 bytes),
well inside the 1–200 character gate.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
