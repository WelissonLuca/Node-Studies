

## Estudos Node JS

<p align="center">Repositório criado para subir alguns projetos desenvolvidos durante alguns minicursos e também mostrar meu progresso com a tecnologia
</p>

## Plataformas de estudo

- [🚀 Rocketseat](https://rocketseat.com.br/)
  
  - Ignite NodeJS
  - Launchbase
  - NLW
- [📋 Alura](cursos.alura.com.br)
  
  - Formação NodeJS

- [📮 Udemy](https://www.udemy.com/pt/)
  - Formação Node JS - Victor Lima
  
  
#### Ambientes e conceitos


##### Configurando ambiente

<p align="left">A maneira mais recomendada é usar o nvm (Node Version Manager) para os sistemas Unix (Linux e MacOS). Com ele é possível gerenciar várias versões do Node na mesma máquina.</p>


###### Instalação do NVM (MacOS e Linux)

```bash
# abra um novo terminal e rode um dos comandos abaixo
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
# 
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

#Instale a versão do node mais recente, com este comando
$ nvm install stable

# Configure para uso a versão instalada, com este comando 
$ nvm use stable   

# Com Node já vem o NPM (Gerenciador de pacotes do Node)
$ node -v
$ npm -v
```
- [Repositório Oficial NVM](https://github.com/nvm-sh/nvm)


### O que é node JS ?
<p align="left"> 

- Node.js é um ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem de forma autônoma, sem depender de um navegador. Com ele, é possível criar praticamente qualquer tipo de aplicações web, desde servidores para sites estáticos e dinâmicos, até APIs e sistemas baseados em microserviços.

</p>

#### O que é NPM ?

<p align="left"> 

- NPM é um gerenciador de pacotes <strong>Node</strong> (Node Package Manager), ele vem instalado junto com node, basicamente com ele você pode instalar pacotes e gerenciar pacotes no seu projeto.
- [Tutorial NPM](https://www.hostinger.com.br/tutoriais/o-que-e-npm)

</p>

#### Características do node

<p align="left">

- Arquitetura Event-loop - Baseada em eventos(Rotas na maioria das vezes); - Call Stack (ponto central da arquitetura): - Pilha de eventos, um evento pode ser como uma função sendo disparada pelo nosso código o qual é processado pelo Node de dentro de um loop que verifica se tem um novo código para ser processado. Então, todo nosso código é executado de dentro da Call Stack, cada código entra na stack e é executado no processo do event loop.

- Node é single-thread; - Independente da máquina tiver vários núcleos no processador, o código em node é executado em apenas um (diferentemente no Java, etc). - O Node usa o libuv do C++ e com isso faz com que o Node fique mais rapido pois essa libuv em baixo dos panos permite que os processos da Call Stack seja executadas em threads no processador.


- Vídeos recomendados
  - [Node JS - Código Fonte TV](https://www.youtube.com/watch?v=vYekSMBCCiM) 
  - [O que é Node JS - Rodrigo Branas](https://www.youtube.com/watch?v=nfrVPzDJZQc)
  - [Node.js: Iniciando da teoria à prática - Rocketseat](https://www.youtube.com/watch?v=DiXbJL3iWVs)

</p>

#### Cursos que recomendo

- Para Iniciantes
  - Pagos
     - [Formação Node JS - Victor Lima ](https://www.udemy.com/course/formacao-nodejs/)
     - [JavaScript do básico ao avançado  - Matheus Battisti](https://www.udemy.com/course/javascript-do-basico-ao-avancado-com-node-e-projetos/)
     - [Programador Full Stack Javascript - OneBiteCode](https://onebitcode.com/course/programador-full-stack-javascript/)
  - Gratuitos
      - [Curso Node JS - Victor Lima](https://www.youtube.com/watch?v=LLqq6FemMNQ&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B)
      - [Imersão em desenvolvimento de APIs com Node.js - Erick Wendell](https://erickwendel.teachable.com/p/node-js-para-iniciantes-nodebr)
      - [Criando APIs com NodeJs - Balta IO](https://www.youtube.com/playlist?list=PLHlHvK2lnJndvvycjBqQAbgEDqXxKLoqn)
- Avançados
  - Pagos
    - [NodeJs, Typescript, TDD, DDD, Clean Architecture e SOLID - Rogrido Manguinho](https://www.udemy.com/course/tdd-com-mango/)
    - [Ignite Node JS - Rocketseat](https://rocketseat.com.br/ignite)

