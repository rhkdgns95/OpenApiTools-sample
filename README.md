# OpenApi Generator Example
- REST API 스펙을 참고하여 코드 자동 생성.


### Command
- yarn openapi-generator-cli generate -i {$_DOC} -g {$_LANG} -o {$_OUTDIR} {$_OPTIONS...}
```bash
# typescript-node
yarn openapi-generator-cli generate -i http://localhost:3001/public/apidoc-json -g typescript-node -o ./sample-typescript-node --skip-validate-spec
yarn openapi-generator-cli generate -i http://localhost:3001/public/apidoc-json -g java -o ./sample-java --skip-validate-spec
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


### Sample
- java
- php
- typescript-fetch
- typescript-node
- etc...


### Refs
- [openapi-generator-tech](https://openapi-generator.tech/)
- [OpenAPITools](https://github.com/OpenAPITools/openapi-generator)
