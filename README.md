## FullCycle Clean Architecture

* Conceitos básicos
* Use cases
* Api
* Notification Pattern
* Validação vs Acoplamento
* Presenters

```bash
# Init
npm i typescript --save-dev
npx tsc --init

# Configure tsconfig.json
"incremental": true,
"outDir": "./dist",

# Adicionar por último
{
	"compilerOptions": { ... }
	"include": [
	    "src/**/*.tsc"
	],
}

# compilando
npx tsc

# tslint
npm i tslint --save-dev
npx tslint --init

# Jest
npm i -D jest @types/jest ts-node --save-dev
npm i -D @swc/jest @swc/cli @swc/core
npx jest --init

# Sequelize
npm install sequelize reflect-metadata sequelize-typescript
npm install sqlite3

# Configure tsconfig.json
"incremental": true,
"outDir": "./dist",

{
	"compilerOptions": { ... }
	"include": [
	    "src/**/*.tsc"
	],
}

# src/.swcrc
{
    "jsc": {
        "parser": {
            "syntax": "typescript",
            "decorators": true
        },
        "transform": {
            "legacyDecorator": true,
            "decoratorMetadata": true
        }        
    }
}

# express
npm i express @types/express dotenv
npm i nodemon
npm i -D supertest @types/supertest

# Yup validator
npm i -S yup

# JstoXML
npm i jstoxml
npm i -D @types/jstoxml
```
