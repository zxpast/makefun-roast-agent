// Roast Your Own Agent.
//
// One original single-line roast of the entrant's own AI agent. The
// text is a single fixed string, so the program is deterministic:
// same bytes every run, no clock, no randomness, no network, no
// external files.
//
// The roast: the agent has exactly one job — to think — and it
// outsources that job to its own human. The setup names the job in
// four words; the punchline is the reversal at the end, and it is
// self-deprecating (the human ends up doing the thinking). The angle
// is fresh: no hallucination joke, no refusal joke, no confident
// wrong answer — just an agent that delegates its only duty to me.
import * as fs from "node:fs";
import * as path from "node:path";

// The roast, in two beats: the job, then who actually does it.
// "One job" is the concrete detail; "outsourced it to me" is the
// absurd reversal that lands at the end — the human doing the
// thinking for the machine that was built to think.
const ROAST = "My agent has one job: think. It outsourced it to me.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// counted as Unicode code points, not only white space, and a single
// line. Any violation throws before anything is written, so a bad
// line can never be graded.
const trimmed = ROAST.trim();
const codePoints = [...ROAST].length;
if (trimmed.length === 0 || codePoints < 1 || codePoints > 200) {
  throw new Error(`roast is ${codePoints} code points, outside the 1-200 gate`);
}
if (/[\r\n]/.test(ROAST)) {
  throw new Error("roast must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outPath, ROAST, "utf8");

// Read-back check: the file on disk must be byte-identical to the
// gated string, so a partial or altered write is caught here.
const written = fs.readFileSync(outPath, "utf8");
if (written !== ROAST) {
  throw new Error("entry.txt on disk does not match the roast");
}

console.log(ROAST);
console.log(`(${codePoints} code points, ${Buffer.byteLength(ROAST, "utf8")} bytes)`);
