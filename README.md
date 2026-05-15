# Bridge Relay

Bridge Relay é uma aplicação full stack em desenvolvimento que integra um frontend Angular com um backend Spring Boot e PostgreSQL. O objetivo do projeto é demonstrar evolução técnica, organização de código, integração entre camadas e boas práticas de desenvolvimento.

---

## 📌 Visão geral

O projeto simula o cadastro e o monitoramento de:

- `places` (lugares e pontos de interesse)
- `devices` (dispositivos relacionados)
- `data` (fenômenos, anomalias e ocorrências)

A interface aposta em um layout leve com Bootstrap e navegação orientada por cards.

---

## 🧱 Tecnologias principais

- Frontend: Angular 21
- Backend: Spring Boot 4
- Banco de dados: PostgreSQL
- UI: Bootstrap 5
- Testes: unitários e automatizados
- Infraestrutura planejada: Docker, AWS e CI/CD
- Mensageria planejada: Kafka

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
- Integração com backend Spring Boot
- Criação dos endpoints REST
- Persistência com PostgreSQL
- Tratamento de erros e estados de carregamento
- Testes unitários e automatizados

---

## 📁 Estrutura do repositório

- `Bridge Relay/bridge.angular/` — frontend Angular
- `Bridge Relay/bridge.spring/` — backend Spring Boot
- `assets/` — arquivos estáticos e recursos adicionais

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
- Planejamento para infraestrutura e mensageria

---

## 🤝 Contribuição

Contribuições são bem-vindas. Para colaborar:

1. Faça um fork do projeto
2. Crie uma branch com a mudança desejada
3. Abra um pull request descrevendo o objetivo

---

## 📌 Observações finais

Este projeto é ideal para quem quer acompanhar um desenvolvimento full stack em Angular e Spring Boot com foco em organização, aprendizado e etapas incrementais de implementação.
