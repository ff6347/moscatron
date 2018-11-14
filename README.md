# moscatron

A mosca broker meets electron. Still in baby shoes. Not meant for production.

- Works good with Node.js 8.12.0 (mosca does wired things on higher versions).
- Use nvm to set the right version.
- Use TypeScript.

## How to:  

```bash
git clone https://github.com/fabianmoronzirfas/moscatron.git
cd moscatron
nvm use
npm i
```

For the electron main process.

```bash
npm start
```

For the renderer process

```bash
npm run watch:front
```
