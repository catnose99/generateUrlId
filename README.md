# GenerateUrlId

Convert URL to alphanumeric characters

## Install

```sh
$ npm install generate-url-id
```

## Usgae

```js
import generateUrlId from "generate-url-id"

const urlId = generateUrlId("https://www.npmjs.com/package/generate-url-id")
console.log(urlId) // output: httpswwwnpmjscompackagegenerateurlid

const japaneseUrlId = generateUrlId("https://テスト.com/これは日本語のURL")
console.log(urlId) // output: httpsE38386E382B9E38388comE38193E3828CE381AFE697A5E69CACE8AA9EE381AEURL
```