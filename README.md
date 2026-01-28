# butpt

wherever you are, but PT

macOS timezone widget with 24h timeline indicator.

## Install

1. Install [Übersicht](https://tracesof.net/uebersicht/)

2. Clone and link widget
```bash
git clone https://github.com/em3s/butpt.git
cd butpt
mkdir -p ~/Library/Application\ Support/Übersicht/widgets
ln -sf $(pwd)/ubersicht-widget/butpt.widget ~/Library/Application\ Support/Übersicht/widgets/
```

3. Launch Übersicht
```bash
open -a Übersicht
```

Widget appears on desktop.

## Dev

```bash
npm install
npm run check   # lint + format
npm run build   # full build
```

## License

MIT
