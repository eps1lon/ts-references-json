# Composite TypeScript projects, `resolvedJsonModule: true` and `include`

```bash
$ git clone [...]
$ yarn
$ yarn start:actual
$ yarn start:expected
```

Projects with `composite: true` need to include the `.json` extension in `include` despite `resolveJsonModule: true`.
