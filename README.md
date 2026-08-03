# Bridge Relay

Bridge Relay é uma aplicação full stack em desenvolvimento que integra um frontend Angular com um backend Spring Boot e PostgreSQL. O objetivo do projeto é demonstrar evolução técnica, organização de código, integração entre camadas e boas práticas de desenvolvimento.

Interface com layout leve em Bootstrap e navegação orientada por cards.

---

## 📌 Visão geral

O projeto ilustra a jornada de uma comunidade independente de investigação científica e monitoramento de anomalias:

- `places` (pontos de interesse com evidências de anormalidades)
- `devices` (artefatos tecnologicos recuperados e modificados cladestinamente)
- `data` (fenômenos, ocorrências, desenvolvimento de devices únicos)

---

## 🧱 Tecnologias principais

- Frontend: Angular 21, Bootstrap 5
- Backend: Spring Boot 4
- Banco de dados: PostgreSQL
- Testes: unitários e automatizados

---

## 🚀 Status do projeto

### Feito até agora

- Estrutura inicial do Angular criada
- Roteamento principal configurado
- Layout com grid Bootstrap construido
- Cards de navegação para `devices`, `places` e `data`
- Organização inicial em componentes standalone

### Em desenvolvimento

- Camada de services no Angular
- Models tipados para os dados da API
- Criação dos endpoints REST
- Documentação com Swagger
- Integração com backend Spring Boot
- Persistência com PostgreSQL
- Tratamento de erros e estados de carregamento
- Testes unitários e automatizados
- Infraestrutura: Docker, AWS e CI/CD
- Mensageria: RabbitMQ

---

## 📁 Estrutura do repositório

- `Bridge Relay/bridge.angular/` — frontend Angular
- `Bridge Relay/bridge.spring/` — backend Spring Boot
- `/` — projeto vanilla

---

## ▶️ Como executar

### Frontend

1. Abra o terminal em `Bridge Relay/bridge.angular`
2. Instale dependências:

```bash
npm install
```

3. Execute o frontend:

```bash
npm start
```

4. Acesse:

```text
http://localhost:4200
```

### Backend

1. Abra o terminal em `Bridge Relay/bridge.spring`
2. Execute o backend com Maven Wrapper:

```bash
./mvnw spring-boot:run
```

No Windows, use:

```powershell
mvnw.cmd spring-boot:run
```

3. A API ficará disponível em:

```text
http://localhost:8080
```

> Observação: a configuração do PostgreSQL ainda precisa ser ajustada em `bridge.spring/src/main/resources/application.properties`.

---

## 🧪 Testes

- Frontend: `npm test` no diretório `Bridge Relay/bridge.angular`
- Backend: usar comandos Maven para testes quando a suíte de testes estiver implementada

---

## 💡 Boas práticas adotadas

- Separação clara entre frontend e backend
- Uso de rotas Angular para navegação de telas
- Componentização para promover reaproveitamento
- Backend estruturado com controllers, DTOs e serviços
- Planejamento para infraestrutura, documentação e mensageria

---

## 🤝 Contribuição

Contribuições são bem-vindas. Para colaborar:

1. Faça um fork do projeto
2. Crie uma branch com a mudança desejada
3. Abra um pull request descrevendo o objetivo

---