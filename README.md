<h1 align="center">CineFlex</h1>
<p align="center">Projeto Checkpoint 5 - React Intermediário e Integração com APIs</p>

<p align="center">
  <img src="https://img.shields.io/badge/Framework-React-blue.svg" alt="React">
  <img src="https://img.shields.io/badge/Linguagem-JavaScript-yellow.svg" alt="JavaScript">
  <img src="https://img.shields.io/badge/Build_Tool-Vite-purple.svg" alt="Vite">
  <img src="https://img.shields.io/badge/Framework-Tailwind_CSS-06B6D4.svg" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Library-Axios-blue.svg" alt="Axios">
  <img src="https://img.shields.io/badge/Framework-Framer_Motion-purple.svg" alt="Framer Motion">
</p>

> `CineFlex` é uma Single Page Application (SPA) moderna, responsiva e minimalista, projetada para explorar filmes populares utilizando a API do The Movie Database (TMDB). O projeto foi desenvolvido com uma arquitetura limpa em React, estilização profissional com Tailwind CSS e animações sutis com Framer Motion para uma experiência de usuário focada e elegante.

---

### 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🔧 Como Executar](#-como-executar)
- [👥 Autores](#-autores)

---

### 📖 Sobre o Projeto

O projeto **CineFlex** nasceu como um exercício para aplicar conceitos intermediários de React e evoluiu para uma aplicação web sofisticada com foco em design minimalista. A aplicação consome dados reais da API do TMDB, permitindo que os usuários descubram e pesquisem filmes populares de forma intuitiva.

A principal filosofia de design foi "menos é mais". A interface foi construída para ser limpa, com muito espaço em branco, uma paleta de cores monocromática e uma tipografia forte (Inter), garantindo que o conteúdo — os pôsteres e as informações dos filmes — seja o protagonista.

O uso de **Framer Motion** adiciona um toque de fluidez às interações, enquanto o **React Router DOM** gerencia a navegação entre a página inicial e as páginas de detalhes de cada filme, criando uma experiência de navegação contínua e agradável.

---

### ✨ Funcionalidades

- **Consumo de API Real:** Busca e exibe dados dinâmicos da API do The Movie Database (TMDB).
- **Listagem de Filmes Populares:** Apresenta uma grade com os filmes mais populares do momento.
- **Busca em Tempo Real:** Filtra os filmes exibidos na página inicial pelo título.
- **Página de Detalhes Dinâmica:** Cada filme possui uma página de detalhes própria, acessada via React Router.
- **Design Minimalista e Profissional:** Interface construída com **Tailwind CSS**, focada em legibilidade, espaçamento e uma experiência de usuário limpa.
- **Animações Sutis:** Transições de página e animações de carregamento elegantes com **Framer Motion**.
- **Carregamento Otimizado:** Exibição de um layout "skeleton" (shimmer effect) enquanto os dados da API são carregados, melhorando a percepção de performance.

---

### 🚀 Tecnologias Utilizadas

| Categoria | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Front-end** | **React** | Biblioteca principal para a construção da interface do usuário. |
| | **JavaScript**| Linguagem de programação para a lógica da aplicação. |
| | **React Router DOM**| Gerenciamento de roteamento e navegação entre páginas. |
| | **Tailwind CSS** | Framework de CSS utility-first para estilização rápida e minimalista. |
| | **Framer Motion**| Biblioteca para animações e transições fluidas. |
| | **Axios** | Cliente HTTP para realizar requisições à API do TMDB. |
| **Build Tool**| **Vite** | Ferramenta de build moderna e ultrarrápida para o desenvolvimento. |
| **APIs**| **The Movie Database (TMDB)** | API externa para buscar dados de filmes e séries. |

---

```
cineflex/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```
---

### 🔧 Como Executar

Para rodar o projeto localmente, siga os passos abaixo.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/TLean07/CP2WEB2.git
    cd cineflex
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure a Chave da API (TMDB):**
    * Crie um arquivo chamado `.env` na raiz do projeto.
    * Dentro dele, adicione sua chave de API do TMDB, como no exemplo abaixo:
    ```
    VITE_API_KEY=7c572a9f5b3ba776080330d23bb76e1e
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O projeto estará disponível em `http://localhost:5173`.

---

### 👥 Autores

| Nome | RM | GitHub |
| :--- | :--- | :--- |
| Leandro Afonso Silva Santos Júnior | 561344 | [TLean07](https://github.com/TLean07) |
| Guilherme Barone Milani | 562114 | [GuilhermeBM3012](https://github.com/GuilhermeBM3012) |
| Luigi Escudero Grigoletto | 562505 | [Lueg2007](https://github.com/Lueg2007) |


### 📁 Estrutura do Projeto

O projeto está organizado de forma modular para facilitar a manutenção e escalabilidade.
