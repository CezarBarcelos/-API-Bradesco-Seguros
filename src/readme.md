<h1>API Brasdesco Seguros</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=nodejs&message=software&color=blue&style=for-the-badge&logo=Nodejs"/>
  <img src="https://img.shields.io/static/v1?label=Expressjs&message=framework&color=blue&style=for-the-badge&logo=Expressjs"/>
  <img src="https://img.shields.io/static/v1?label=MongoDb&message=DataBase&color=blue&style=for-the-badge&logo=MongoDb"/>
</p>

> Status do Projeto: Concluído :heavy_check_mark:

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar os testes](##como-rodar-os-testes)

## Descrição do projeto 

<p align="justify">
  API responsável por receber consultas de chatbots. Além de consultar dados que estão registrados na plataforma, é possível cadastrar, atualizar e remover os registros. Essa aplicação também fornece dados de mensagens trocadas entre os chatbots e os contatos.
</p>

## Funcionalidades

:heavy_check_mark: GET : Obtem os informações dos Chabots/Mensagens

:heavy_check_mark: PUT: Insere um novo Chatbot/Mensagem.

:heavy_check_mark: DELETE: Remove um Chatbot.

:heavy_check_mark: POST: Atualiza informações dos Chatbots

## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)

:warning: [Express](No terminal do VS Code: npm install express)

:warning: [MongoDb](https://www.mongodb.com/try/download/enterprise)

:warning: [bodyParser](No terminal do VS Code: npm install body-parser)

:warning: [mongoose](No terminal do VS Code: npm install mongoose)
## Como rodar os testes

Guia para teste das rotas:

Importe a base de dados através dos arquivos:

Chatbots:
https://drive.google.com/file/d/17wPAgrz_MKGIjwejQIN4c9dpFwRd_b3C/view?usp=sharing

Messages:
https://drive.google.com/file/d/1ISATc2q1fCGvt8eZInf8VGmoA3S7WPsp/view?usp=sharing

Usando o Mongo Compass:

Dentro da Collection, vá em "ADD DATA", Importe File, informe o caminho do arquivo e o tipo ( JSON )

VisualStudio Code: no terminal digite:

$ npm run dev

Após a aplicação informar: 

Servidor iniciado na porta: 8091
Conectado ao MongoDB! [ mongodb://localhost:27017/ ]

Abra o POSTMAN e envie as requisições:

[CHATBOT]

* Onde id é a chave

PUT http://localhost:8091/api/v1/chatbot/add { adiciona um chatbot }

POST http://localhost:8091/api/v1/chatbot/upd/:id { atualiza um chatbot }

GET http://localhost:8091/api/v1/chatbot/get/:id { obtem um chatbot }

GET http://localhost:8091/api/v1/chatbot/list { lista todos chatbots }

DELETE http://localhost:8091/api/v1/chatbot/del/:id { remove um chatbot }

[MESSAGE]

* Onde id e conversationId são as chaves

GET http://localhost:8091/api/v1/message/get/:id { obtem uma mensagem }

GET http://localhost:8091/api/v1/message/list/:conversationId { obtem todas mensagens com o mesmo conversationId }

PUT http://localhost:8091/api/v1/message/add { adiciona uma mensagem }


Exemplo:

* GET http://localhost:8091/api/v1/chatbot/get/:id 

https://drive.google.com/file/d/1G57kMEkD8tNC1Hr4fFAucPKY0Z1FwXeR/view?usp=sharing

* GET http://localhost:8091/api/v1/chatbot/list

https://drive.google.com/file/d/1e28PKmSUFda2m85q9XLPWj5viiioLqi4/view?usp=sharing

## Desenvolvimento

[IMPORTS]

* bodyParser - conversor do corpo da requisição para o padrão JSON
* Express - framework
* dataBase - importa o arquivo de teste de conexão com a base de dados
* useRouter - importa o arquivo do controle de rotas

[Config]

* dataBase - Exporta método de teste de comunicação com a base de dados {MongoDb}

[Routes]

Exporta as rotas para consulta de Chatbots e Mensagens

* chatbotRouter

Exporta os métodos de requisição dos chatbots {GET, POST, PUT, DELETE}

* messageRouter

Exporta os métodos de requisição das messages {GET, PUT}

[CONTROLES]

* chatbotControle

Request e Response: objetos Express para comunicação HTTP

mongoStrCon: string de conexão a base de dados

mongoose: objeto responsável pela conexão e manipulação do MongoDb

Chatbot: model (entidade)

* InsertChatbot: Insere um registro chatbot na base de dados. (método save)
* GetChatbot: Obtem um registro da base de dados, tendo por chave, o id. (método findOne)
* ListChatbots: Lista todos chatbots presentes na base de dados. (método find)
* DeleteChatbot: Remove um chatbot da base de dados, tendo por chave, o id. (método remove)
* UpdateChatbot: Atualiza os dados de um chatbot da base de dados, tendo por chave, o id. (método findByIdAndUpdate)

* messageControle

Request e Response: objetos Express para comunicação HTTP

mongoStrCon: string de conexão a base de dados

mongoose: objeto responsável pela conexão e manipulação do MongoDb

Message: model (entidade)

* InsertChatbot: Insere um registro chatbot na base de dados. (método save)
* GetChatbot: Obtem um registro da base de dados, tendo por chave, o id. (método findOne)
* ListChatbots: Lista todos chatbots presentes na base de dados. (método find, usando o conversationId como filtro)
## Iniciando/Configurando banco de dados

Url padrão:
mongodb://localhost:27017/

Instalação:
* https://www.youtube.com/watch?v=r6QM1NTzkTI&ab_channel=MatheusBattisti-HoradeCodar

Exemplo:
https://drive.google.com/file/d/1qwNRkEkM45WCpCrd-eKmVKms9vgJyHJ9/view?usp=sharing

## Linguagens, dependencias e libs utilizadas :books:

- [NodeJs](https://nodejs.org/en/)
- [NodeJs DOC](https://nodejs.org/en/docs/)

- [ExpressJs](https://expressjs.com/pt-br/)
- [ExpressJs DOC](https://expressjs.com/pt-br/4x/api.html)

- [MongoDb](https://www.mongodb.com/try/download/community)
- [MongoDb DOC](https://docs.mongodb.com/)

- [Postman](https://www.postman.com/downloads/)
- [Postman DOC](https://learning.postman.com/docs/getting-started/introduction/)

- [bodyParser]($ npm install body-parser)

- [mongoose]($ npm install mongoose)

## Desenvolvedor :octocat:

| [<img src="https://avatars.githubusercontent.com/u/89024998?s=400&u=4f4166bba7e51d30256dbeca46f33252312d21f2&v=4" width=115><br><sub>Cézar Barcellos</sub>](https://github.com/CezarBarcelos)|
| :---: |

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: Ano - API Bradesco Seguros