# OpenApi Generator Example
- REST API 스펙을 참고하여 코드 자동 생성.


### Command
- yarn openapi-generator-cli generate -i `$_DOC` -g `$_LANG` -o `$_OUTDIR`  `$_OTHER_OPTIONS...`
```bash
# Typescript Node
yarn openapi-generator-cli generate -i http://localhost:3001/public/apidoc-json -g typescript-node -o ./sample-typescript-node --skip-validate-spec

# Java
yarn openapi-generator-cli generate -i http://localhost:3001/public/apidoc-json -g java -o ./sample-java --skip-validate-spec

# PHP
yarn openapi-generator-cli generate -i http://localhost:3001/public/apidoc-json -g php -o ./sample-php --skip-validate-spec
```


### Install
- homebrew, npm, docker 등 여러가지 설치 방법들 제공.

```bash
# Or install it as dev-dependency in your node.js projects
npm install -D @openapitools/openapi-generator-cli

# Or yarn install
yarn add -D @openapitools/openapi-generator-cli
```

### Example
- typescript
```ts
const nodeApi = new DefaultApi();

nodeApi.basePath = "http://localhost:3001";
nodeApi.defaultHeaders = {
    Authorization: `Bearer XXXXX`,
};

nodeApi
    .jangbuControllerGetJangbus(1, 15, undefined, undefined, "gn")
    .then((res) => {
        console.log("RES: ", res);
        console.log("RES: ", res.body.items);
    })
    .catch((err) => {
        console.log("ERROR: ", err);
    });
```

### Sample
- [java](https://github.com/rhkdgns95/OpenApiTools-sample/tree/master/sample-java)
- [php](https://github.com/rhkdgns95/OpenApiTools-sample/tree/master/sample-php)
- [typescript-fetch](https://github.com/rhkdgns95/OpenApiTools-sample/tree/master/sample-typescript-fetch)
- [typescript-node](https://github.com/rhkdgns95/OpenApiTools-sample/tree/master/sample-typescript-node)



### Refs
- [openapi-generator-tech](https://openapi-generator.tech/)
- [OpenAPITools](https://github.com/OpenAPITools/openapi-generator)
