{
    "name": "${packagename}",
    "version": "${version}",
    "description": "${description}",
    "repository": {
        "type": "git",
        "url":"git@github.com:wonderfulMan/hAo-cli.git"
    },
    "main": "./dist/index.js",
    "types": "./src/typings/global.d.ts",
    "scripts": {
        "watch": "${npm bin}/ts-node-dev src",
        "build": "$(npm bin)/tsc -w"
    },
    "keywords": [
        "hAo",
        "react",
        "Vue",
        "cli"
    ],
    "publishConfig": {
        "access": "public"
    },
    "author": "wonderfulMan",
    "license": "MIT",
    "bugs": {
        "url": "https://github.com/wonderfulMan/${packagename}/issues"
    },
    "homepage": "https://github.com/wonderfulMan/hAo-cli",
    "devDependencies": {
        "ts-node-dev": "^1.0.0-pre.44",
        "typescript": "^3.7.5"
    }
}