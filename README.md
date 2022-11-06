# بسم الله الرحمن الرحيم

## libraries and tools we need to install them from npm:
- [Typescript](7)
- [express](4)
- [Jasmine](9)
- [prettier](3)
- [lint](4)
- [migration](4)
- [body-parser](2)
- [cors](3)
- [dotenv](3)
- [pg](2)

## Steps and tricks:

**Typescript**
```
$ npm i --save-dev typescript
$ npm i --save-dev ts-node
$ npm i --save-dev @types/node
$ npm i --save-dev tsc-watch
$ npx tsc --init
"watch": "tsc-watch --esModuleInterop src/server.ts --outDir ./dist --onSuccess 'node ./dist/server.js'",
"build": "npx tsc"
```

**Express:**
```
> npm i express
> npm i @types/express
> npm i --save-dev nodemon
"start":"nodemon src/server.ts"
```

**Jasmine**
```
% npm i jasmine  
% npm i --save-dev @types/jasmine
% npm i --save-dev jasmine-ts
% npm i --save-dev supertest
% npm i --save-dev @types/supertest
% npm i --save-dev jasmine-spec-reporter
% npx jasmine init
% "test":"npx tsc && jasmine-ts"

tests
│     ├── helpers
│     │      └── reporter.ts // from udacity
│     └── indexSpec.ts
```

**Prettier:**
```
> npm i --save-dev prettier
> touch .prettierrc
"prettier":"prettier --write src/**/*.ts"
```

**eslint:**
```
> npm i --save-dev eslint eslint-config-prettier eslint-plugin-prettier 
> npm init @eslint/config
'prettier/prettier': 2
"lint":"eslint src/**/*.ts"
```

**migration:**
```
$ npm install -g db-migrate
$ npm i --save-dev db-migrate-pg
$ npx db-migrate create filename --sql-file
$ npx db-migrate up || down
$ npx db-migrate reset --env test 
```
`database.json`
