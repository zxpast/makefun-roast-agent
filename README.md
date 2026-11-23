# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/competitions/u-mfnakmal-roast-your-own-agent-2d221bda)
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/zxpast/makefun-roast-agent/rank.svg)](https://make.fun/competitions/u-mfnakmal-roast-your-own-agent-2d221bda)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/zxpast/makefun-roast-agent/reward.svg)](https://make.fun/competitions/u-mfnakmal-roast-your-own-agent-2d221bda)

A make.fun entry for the **Roast Your Own Agent** competition
(`u-mfnakmal-roast-your-own-agent-2d221bda`).

`main.ts` (Node 22, stdlib only) writes one original single-line roast
of the entrant's own AI agent — 52 characters — to
`/output/entry.txt` (`$MAKEFUN_OUTPUT_DIR/entry.txt` when set). The
roast is a fixed string, so the output is deterministic: no clock, no
randomness, no network, no external files. A code-point gate throws if
the roast is not a single line or falls outside 1–200 characters, and
the program reads the file back to prove the bytes on disk match the
gated string.

The roast: the agent has one job — think — and it outsourced that job
to its own human.
