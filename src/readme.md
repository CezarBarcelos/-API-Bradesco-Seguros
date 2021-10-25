<h1>API Brasdesco Seguros</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=nodejs&message=software&color=blue&style=for-the-badge&logo=Nodejs"/>
  <img src="https://img.shields.io/static/v1?label=Expressjs&message=framework&color=blue&style=for-the-badge&logo=Expressjs"/>
  <img src="https://img.shields.io/static/v1?label=MongoDb&message=DataBase&color=blue&style=for-the-badge&logo=MongoDb"/>ge"/>
</p>

> Status do Projeto: Concluído :heavy_check_mark:

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#deploy-da-aplicação-dash)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

## Descrição do projeto 

<p align="justify">
  API responsável por receber consultas de chatbots. Além de consultar dados que estão registrados na plataforma, é possível cadastrar, atualizar e remover os registros. Essa aplicação também fornece dados de mensagens trocadas entre os chatbots e os contatos.
</p>

## Funcionalidades

:heavy_check_mark: GET : Obtem os informações dos Chabots/Mensagens

:heavy_check_mark: PUT: Insere um novo Chatbot/Mensagem.

:heavy_check_mark: DELETE: Remove um Chatbot.

:heavy_check_mark: POST: Atualiza informações dos Chatbots

## Layout ou Deploy da Aplicação :dash:



## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)

:warning: [Node]($ npm install express)

:warning: [Node](https://www.mongodb.com/try/download/enterprise)


## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto: 

```
git clone https://github.com/React-Bootcamp-WoMarkersCode/certificate-generator
```

... 

Coloque um passo a passo para rodar a sua aplicação. **Dica: clone o próprio projeto e verfique se o passo a passo funciona**

## Como rodar os testes

Guia para teste das rotas:

Importe a base de dados atravez dos arquivos:

Chatbots:
https://drive.google.com/file/d/17wPAgrz_MKGIjwejQIN4c9dpFwRd_b3C/view?usp=sharing

Messages:
https://drive.google.com/file/d/1ISATc2q1fCGvt8eZInf8VGmoA3S7WPsp/view?usp=sharing

Usando o Mongo Compass:

Dentro da Collection, vá em "ADD DATA", Importe File, Informe o caminho do arquivo e o tipo { JSON }

VisualStudio Code: no terminal digite:

$ npm run dev

Após a aplicação informar: 

Servidor iniciado na porta: 8091
Conectado ao MongoDB! [ mongodb://localhost:27017/ ]

Abra o POSTMAN e envie as requisições:

[CHATBOT]

{ Onde id é a chave }

PUT http://localhost:8091/api/v1/chatbot/add { adiciona um chatbot }

POST http://localhost:8091/api/v1/chatbot/upd/:id { atualiza um chatbot }

GET http://localhost:8091/api/v1/chatbot/get/:id { obtem um chatbot }

GET http://localhost:8091/api/v1/chatbot/list { lista todos chatbots }

DELETE http://localhost:8091/api/v1/chatbot/del/:id { remove um chatbot }

[MESSAGE]

{ Onde id e conversationId são as chaves }

GET http://localhost:8091/api/v1/message/get/:id { obtem uma mensagem }

GET http://localhost:8091/api/v1/message/list/:conversationId { obtem todas mensagens com o mesmo conversationId }

PUT http://localhost:8091/api/v1/message/add { adiciona uma mensagem }


Exemplo:

* GET http://localhost:8091/api/v1/chatbot/get/:id 

https://drive.google.com/file/d/1G57kMEkD8tNC1Hr4fFAucPKY0Z1FwXeR/view?usp=sharing

* GET http://localhost:8091/api/v1/chatbot/list

https://drive.google.com/file/d/1e28PKmSUFda2m85q9XLPWj5viiioLqi4/view?usp=sharing

## Desenvolvimento

COMENTAR COMO FOI DESENVOLVIDO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

 Ambos os projetos devem conter um arquivo “README.md” que descreva como 
devemos utilizar seu sistema e como devemos instalar suas dependências por exemplo. É 
necessário comentar também os detalhes da implementação. Caso este arquivo não seja 
criado, a sua correção pode ser comprometida ou nem ser efetuada.

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

## Desenvolvedores/Contribuintes :octocat:

| [<img src="https://avatars.githubusercontent.com/u/89024998?s=400&u=4f4166bba7e51d30256dbeca46f33252312d21f2&v=4" width=115><br><sub>Cézar Barcellos</sub>](https://github.com/CezarBarcelos)|
| :---: |

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: Ano - API Bradesco Seguros