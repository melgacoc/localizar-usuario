# React Redux Localizador

## Introdução
Um localizador de usuários cadastrados que indica a posição geográfica no mapa.

# Aplicação em deploy
https://master--localizar-usuario-cm.netlify.app/

---

## Funcionalidades:
- Mostrar a localização de usuários no mapa;
- Exibir informações adicionais do usuário ao clicar em seu pin;
- Cadastrar novos usuários;

---

## Tecnológias

![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux Badge](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind Badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
---

## Instalação do projeto localmente

1. No terminal, em um diretório de sua escolha, clonar o repositório:

```
git@github.com:melgacoc/localizar-usuario.git
```

2. No repositório do projeto, instalar as dependências:

```
npm install
```

3. Após isso, rodar o comando que abre no navegador uma aba com projeto:

```
npm start
```

4. Para os testes, rodar o comando:

```
npm test
```

---

## Docker
O projeto possuí um arquivo Dockerfile para criar uma imagem do projeto
1. No terminal execute para criar a imagem:

```
docker build -t localizar-usuario
```

2.Execute a imagem na porta 3000:
```
docker run -p 3000:80 localizar-usuario
```

---

Developed by [Cláudio Melgaço](https://github.com/melgacoc) 2022

