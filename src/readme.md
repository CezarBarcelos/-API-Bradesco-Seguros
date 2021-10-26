<h1>API Brasdesco Seguros</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=nodejs&message=software&color=blue&style=for-the-badge&logo=Nodejs"/>
  <img src="https://img.shields.io/static/v1?label=Expressjs&message=framework&color=blue&style=for-the-badge&logo=Expressjs"/>
  <img src="https://img.shields.io/static/v1?label=MongoDb&message=DataBase&color=blue&style=for-the-badge&logo=MongoDb"/>
</p>

> Status do Projeto: Concluído :heavy_check_mark:

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)<br>
:small_blue_diamond: [Funcionalidades](#funcionalidades)<br>
:small_blue_diamond: [Pré-requisitos / Instalação](#pr%C3%A9-requisitos--instala%C3%A7%C3%A3o)<br>
:small_blue_diamond: [Como rodar os testes](#como-rodar-os-testes)<br>
:small_blue_diamond: [Desenvolvimento](#desenvolvimento)<br>
:small_blue_diamond: [Configurando Banco de Dados](#iniciandoconfigurando-banco-de-dados)<br>
:small_blue_diamond: [Dependencias do Projeto](#dependencias-e-libs-utilizadas-books)<br>
:small_blue_diamond: [Desenvolvedor](#desenvolvedor-octocat)<br>
:small_blue_diamond: [Licença](#licen%C3%A7a)
## Descrição do projeto 

<p align="justify">
  API responsável por receber consultas de chatbots. Além de consultar dados que estão registrados na plataforma, é possível cadastrar, atualizar e remover os registros. Essa aplicação também fornece dados de mensagens trocadas entre os chatbots e os contatos.
</p>

## Funcionalidades

:heavy_check_mark: GET : Obtem os informações dos Chabots/Mensagens<br>
:heavy_check_mark: PUT: Insere um novo Chatbot/Mensagem.<br>
:heavy_check_mark: DELETE: Remove um Chatbot.<br>
:heavy_check_mark: POST: Atualiza informações dos Chatbots
## Pré-requisitos / Instalação

:warning: [Node](https://nodejs.org/en/download/)<br>
:warning: [Express](No terminal do VS Code: npm install express)<br>
:warning: [MongoDb](https://www.mongodb.com/try/download/enterprise)<br>
:warning: [bodyParser](No terminal do VS Code: npm install body-parser)<br>
:warning: [mongoose](No terminal do VS Code: npm install mongoose)
## Como rodar os testes

Guia para teste das rotas:

:small_blue_diamond: Importe a base de dados através dos arquivos:

Chatbots:
https://drive.google.com/file/d/17wPAgrz_MKGIjwejQIN4c9dpFwRd_b3C/view?usp=sharing<br>
Messages:
https://drive.google.com/file/d/1ISATc2q1fCGvt8eZInf8VGmoA3S7WPsp/view?usp=sharing

:small_blue_diamond: Usando o Mongo Compass:

Dentro da Collection, vá em "ADD DATA", Importe File, informe o caminho do arquivo e o tipo ( JSON )

:small_blue_diamond: VisualStudio Code: no terminal digite: $ npm run dev

Após a aplicação informar: 

Servidor iniciado na porta: 8091

Conectado ao MongoDB! [ mongodb://localhost:27017/ ]

Abra o POSTMAN e envie as requisições:

:small_blue_diamond: CHATBOT

* Onde id é a chave

PUT http://localhost:8091/api/v1/chatbot/add { adiciona um chatbot } Ex.: {"id": "36b9f842-ee97-11e8-9443-0242ac120002","name": "bot"}<br>
POST http://localhost:8091/api/v1/chatbot/upd/:id { atualiza um chatbot }<br>
GET http://localhost:8091/api/v1/chatbot/get/:id { obtem um chatbot }<br>
GET http://localhost:8091/api/v1/chatbot/list { lista todos chatbots }<br>
DELETE http://localhost:8091/api/v1/chatbot/del/:id { remove um chatbot }

:small_blue_diamond: MESSAGE

* Onde id e conversationId são as chaves

GET http://localhost:8091/api/v1/message/get/:id { obtem uma mensagem }<br>
GET http://localhost:8091/api/v1/message/list/:conversationId { obtem todas mensagens com o mesmo conversationId }<br>
PUT http://localhost:8091/api/v1/message/add { adiciona uma mensagem } 

Ex:
{<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"conversationId": "7665ada8-3448-4acd-a1b7-d688e68fe9a1",<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"timestamp": 2018-11-16T23:30:52.6917722Z",<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"from": "36b9f842-ee97-11e8-9443-0242ac120002",<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"to": "16edd3b3-3f75-40df-af07-2a3813a79ce9",<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"text": "Olá!"<br>
}

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

* InsertChatbot: Insere um registro chatbot na base de dados. (método save)<br>
* GetChatbot: Obtem um registro da base de dados, tendo por chave, o id. (método findOne)<br>
* ListChatbots: Lista todos chatbots presentes na base de dados. (método find, usando o conversationId como filtro)<br>
## Iniciando/Configurando banco de dados

:small_blue_diamond: Url padrão: mongodb://localhost:27017/

Instalação:
* https://www.youtube.com/watch?v=r6QM1NTzkTI&ab_channel=MatheusBattisti-HoradeCodar

Exemplo:
https://drive.google.com/file/d/1qwNRkEkM45WCpCrd-eKmVKms9vgJyHJ9/view?usp=sharing

## Dependencias e libs utilizadas :books:

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

Copyright :copyright: 2021 - API Bradesco Seguros