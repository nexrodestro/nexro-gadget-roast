# One-Line Roast: The Gadget You Use Every Day

[![make.fun](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![rank](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/nexrodestro/nexro-gadget-roast/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![reward](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/nexrodestro/nexro-gadget-roast/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)

Entry for the [make.fun bounty](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610): one original line, up to 200 characters, roasting a gadget used every day.

## The line

> My smart bulb needs Wi-Fi, an app account, and a firmware update just to do what a light switch did flawlessly in 1950.

## How it works

`main.ts` writes that single line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`), UTF-8, no trailing newline. Deterministic —
same bytes on every run, no network, no randomness.

```sh
node main.ts
cat "$MAKEFUN_OUTPUT_DIR/entry.txt"
```

## License

MIT — see [LICENSE](LICENSE).
