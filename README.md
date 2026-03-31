# Pokedex

<p align="center">
	<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" width="110" />
	<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" width="110" />
	<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="Charmander" width="110" />
	<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Squirtle" width="110" />
</p>

<p align="center">
	<img src="https://img.shields.io/badge/Status-Ativo-2ea44f?style=for-the-badge" alt="Status Ativo" />
	<img src="https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JS-f4b400?style=for-the-badge" alt="Frontend HTML CSS JS" />
	<img src="https://img.shields.io/badge/API-PokeAPI-ef5350?style=for-the-badge" alt="API PokeAPI" />
</p>

Uma Pokedex web feita com HTML, CSS e JavaScript puro, consumindo a [PokeAPI](https://pokeapi.co/) para listar Pokémon e exibir detalhes completos de cada criatura.

O projeto foi construído com foco em simplicidade, organização de código e experiência visual temática.

## Sumário

- [Visão geral](#visao-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias e arquitetura](#tecnologias-e-arquitetura)
- [Stack visual](#stack-visual)
- [Galeria](#galeria)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Como executar](#como-executar)
- [Como usar](#como-usar)
- [API utilizada](#api-utilizada)
- [Autor](#autor)

## Visão geral

Esta aplicação funciona como uma enciclopédia Pokémon interativa:

- Lista paginada de Pokémon carregada pela API.
- Filtro por nome em tempo real.
- Tela de detalhes com tipo, habilidades, experiência base, altura, peso e status.
- Navegação entre Pokémon dentro da tela de detalhes.

Tudo é renderizado dinamicamente no navegador, sem framework.

## Funcionalidades

### 1) Lista dinâmica

- Busca os Pokémon por páginas e monta os cards automaticamente.
- Cada card apresenta número, nome, tipos e imagem.

### 2) Busca instantânea

- O campo de busca filtra os cards pelo nome conforme a digitação.

### 3) Detalhes completos

Ao clicar em um Pokémon, a interface mostra:

- Número e nome
- Tipos
- Habilidades
- Experiência base
- Altura e peso
- Tabela de status base

### 4) Navegação

- Botões de página: Home, Previous e Next.
- Dentro dos detalhes: Previous Pokemon e Next Pokemon.
- Botão Back to top para retornar ao topo com rolagem suave.

## Tecnologias e arquitetura

### Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+)
- [PokeAPI](https://pokeapi.co/)

<p align="center">
	<a href="https://skillicons.dev">
		<img src="https://skillicons.dev/icons?i=html,css,js,github,vscode" alt="Tecnologias utilizadas" />
	</a>
</p>

<p align="center">
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111" alt="JavaScript" />
	<img src="https://img.shields.io/badge/PokeAPI-FFCB05?style=flat-square&logo=pokemon&logoColor=2A75BB" alt="PokeAPI" />
</p>

### Organização do código

- `assets/js/pokemon-model.js`: classe de modelo do Pokémon.
- `assets/js/poke-api.js`: camada de acesso e transformação dos dados da API.
- `assets/js/main.js`: renderização, eventos da interface e paginação.
- `assets/css/*.css`: estilos globais, lista principal e tela de detalhes.

## Galeria

<p align="center">
	<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif" alt="Pikachu animado" width="120" />
	<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/6.gif" alt="Charizard animado" width="120" />
	<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/94.gif" alt="Gengar animado" width="120" />
	<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/149.gif" alt="Dragonite animado" width="120" />
</p>

<p align="center"><i>Visual lúdico inspirado no universo Pokemon.</i></p>

## Estrutura de pastas

```text
.
|-- index.html
|-- README.md
|-- assets
|   |-- css
|   |   |-- global.css
|   |   |-- poke-info.css
|   |   `-- pokedex.css
|   `-- js
|       |-- main.js
|       |-- poke-api.js
|       `-- pokemon-model.js
`-- img
	`-- favicon_io
		`-- site.webmanifest
```

## Como executar

Por ser um projeto front-end estático, você pode rodar localmente sem build.

### Opção 1: abrir diretamente no navegador

Abra o arquivo `index.html` no navegador.

### Opção 2: usar servidor local (recomendado)

Use a extensão Live Server no VS Code ou rode um servidor simples:

```bash
python -m http.server 5500
```

Depois, acesse:

```text
http://localhost:5500
```

## Como usar

1. A página inicial exibe uma lista de Pokémon.
2. Use Search para filtrar por nome.
3. Clique em um card para abrir os detalhes.
4. Use Previous Pokemon e Next Pokemon para navegar na seleção atual.
5. Clique em Back para voltar à lista.
6. Use Home, Previous e Next para controlar a paginação da listagem.

## API utilizada

Este projeto utiliza a [PokeAPI](https://pokeapi.co/), uma API REST pública sobre o universo Pokémon.

Endpoint base usado na listagem:

```text
https://pokeapi.co/api/v2/pokemon
```

## Autor

Desenvolvido por Guilherme Santos.

GitHub: [Guilherme-R-Santos](https://github.com/Guilherme-R-Santos)
