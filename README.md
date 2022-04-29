## API Restful com Node.js, Express, Typescript, TypeORM, Postgres, Redis, Docker, ...

### Estrutura do Projeto

Estrutura de pastas:

`config` - configurações de bibliotecas externas, como por exemplo, autenticação, upload, email, etc.

`modules` - abrangem as áreas de conhecimento da aplicação, diretamente relacionados com as regras de negócios. A princípio criaremos os seguintes módulos na aplicação: customers, products, orders e users.

`shared` - módulos de uso geral compartilhados com mais de um módulo da aplicação, como por exemplo, o arquivo server.ts, o arquivo principal de rotas, conexão com banco de dados, etc.

`services` - estarão dentro de cada módulo da aplicação e serão responsáveis por todas as regras que a aplicação precisa atender, como por exemplo:

### Configurando as importações

Podemos usar um recurso que facilitará o processo de importação de arquivos em nosso projeto.

Iniciamos configurando o objeto `paths` do `tsconfig.json`, que permite criar uma base para cada `path` a ser buscado no projeto, funcionando de forma similar a um atalho:

```json
"paths": {
  "@config/*": ["src/config/*"],
  "@modules/*": ["src/modules/*"],
  "@shared/*": ["src/shared/*"]
}
```

```add express
yarn add express cors express-async-errors
yarn add -D @types/express @types/cors
```

* https://typeorm.io/
### Migrations com ORM
* https://typeorm.io/migrations

* ### Instalando o postgres via docker:
`docker run --name postgres -e POSTGRES_PASSWORD=<sua_senha> -p 54321:5432 -d postgres`

