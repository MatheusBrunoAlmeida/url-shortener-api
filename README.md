
# URL Shortener API

## Descrição

Este projeto é uma API de encurtador de URLs desenvolvida com NestJS e Prisma como ORM. A aplicação permite que os usuários se registrem, façam login, encurtem URLs e vejam suas URLs encurtadas.

  

## Tecnologias Utilizadas

- NestJS: Framework para construção de aplicações Node.js escaláveis.

- Prisma: ORM moderno e de auto-gerenciamento para Node.js e TypeScript.

- PostgreSQL: Banco de dados relacional.

- Docker: Para executar o banco de dados PostgreSQL.

- JWT: Para autenticação.

  

## Requisitos

- Node.js (v14 ou superior)

- Docker (opcional, para rodar o banco de dados PostgreSQL)

- PostgreSQL (se não usar Docker)

- Prisma CLI

  
  

## Configuração do Ambiente

1 - Clone o Repositório

  

	git clone https://github.com/MatheusBrunoAlmeida/url-shortener-api.git

	cd url-shortener-api

  

2 -Instale as Dependências

	npm install

Configuração do Banco de Dados

Se estiver usando Docker, você pode criar um contêiner PostgreSQL com o seguinte comando:

	docker run --name url-shortener-db -e POSTGRES_PASSWORD=password -e POSTGRES_USER=user -e POSTGRES_DB=urlshortener -p 5432:5432 -d postgres

  

3 - Altere o arquivo .env-exemple

> Atlere o arquivo .env-exemple na raiz do projeto adicionando as
> seguintes variáveis de ambiente:


    DATABASE_URL="postgresql://user:password@localhost:5432/urlshortener?schema=public"
    
    JWT_SECRET="sua-chave-secreta-para-jwt"

4- Execute as Migrações

	npx prisma migrate dev

  

## Como Rodar a Aplicação

  

1 - Inicie o Servidor
	
	npm run start:dev

ou

	yarn start:dev

2 - Acesse a Aplicação

  

A aplicação estará disponível em http://localhost:3000.

  

## Testando a Aplicação

Você pode testar a API utilizando ferramentas como Insomnia ou Postman. Aqui estão alguns exemplos de requisições que você pode fazer:

  

1. Encurtar uma URL (Sem autenticação)

	Endpoint: POST http://localhost:3000/urls
	Headers:
		Content-Type: application/json

	Body:

		{
		"original": "https://example.com"
		}

2. Registro de Usuário

	Endpoint: POST http://localhost:3000/auth/register

	Headers:
		Content-Type: application/json

	Body:

		{
		"email": "testuser@example.com",
		"password": "password"
		}

  
3. Login de Usuário

	Endpoint: POST http://localhost:3000/auth/login
	
	Headers:
	Content-Type: application/json

	Body:
		
		{
		"email": "testuser@example.com",
		"password": "password"
		}

  

	Resposta:

		    {
		    "access_token": "jwt-token-aqui"
		    }

  

4. Encurtar uma URL (Autenticado)

	Endpoint: POST http://localhost:3000/urls

	Headers:
		Content-Type: application/json
		Authorization: Bearer jwt-token-aqui

	Body:

		{
		"original": "https://example.com"
		}

  

5. Listar URLs do Usuário (Autenticado)

	Endpoint: GET http://localhost:3000/urls

	Headers:
		Content-Type: application/json
		Authorization: Bearer jwt-token-aqui

Resposta:

		[
			{
			"id": 1,
			"original": "https://example.com",
			"short": "abc123",
			"userId": 1
			}

		]

  

## Testes Automatizados

Para executar os testes:

	npm run test

  

## Problemas Comuns

Erro 404: Verifique se as rotas estão corretamente configuradas e se o servidor está em execução.

Erro de Conexão com o Banco de Dados: Certifique-se de que o PostgreSQL está rodando e que as variáveis de ambiente estão configuradas corretamente.

  

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

  

## Licença

MIT
