<!-- WIP -->

<h1 align="center">Projeto NodeJs - Talker Manager</h1>

<p align="center"> 
  <img src="gif/nodejs.jpg" alt="NodeJs Logo" width="37%">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" />
</p>

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Tabela de Conteúdos</h2>

<details open="open">
  <summary>Tabela de conteúdos</summary>
  <ol>
    <li><a href="#sobre"> ➤ Sobre o projeto</a></li>
    <li><a href="#tecnologias"> ➤ Tecnologias utilizadas</a></li>
    <li><a href="#descrição-do-projeto"> ➤ Descrição do projeto</a></li>
    <li><a href="#instruções"> ➤ Instruções</a></li>
    <li><a href="#requisitos"> ➤ Requisitos realizados </a></li>
    <li><a href="#requisito1"> ➤ Requisito 1: Criação do endpoint GET `/talker` </a></li>
    <li><a href="#requisito2"> ➤ Requisito 2: Criação do endpoint GET `/talker/:id` </a></li>
    <li><a href="#requisito3"> ➤ Requisito 3: Criação do endpoint POST `/login` </a></li>
    <li><a href="#requisito4"> ➤ Requisito 4: Criação de validações para o endpoint `/login` </a></li>
    <li><a href="#requisito5"> ➤ Requisito 5: Criação do endpoint POST `/talker` </a></li>
    <li><a href="#requisito6"> ➤ Requisito 6: Criação do endpoint PUT `/talker/:id` </a></li>
    <li><a href="#requisito7"> ➤ Requisito 7: Criação de um endpoint DELETE `/talker/:id` </a></li>
    <li><a href="#requisito8"> ➤ Requisito 8: Criação de um endpoint GET `/talker/search` </a></li>
    <li><a href="#créditos"> ➤ Créditos </a></li>
  </ol>
</details>

<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" />
</p>

<h2 id="sobre"> :pencil: Sobre o projeto </h2>

  <p align="center">Projeto desenvolvido durante a formação de BackEnd na Trybe com o intuito de consolidar o aprendizado de NodeJs utilizando o framework Express.</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" />
</p>

<h2 id="tecnologias"> :computer: Tecnologias utilizadas</h2>

<p align="center">
  <a href="https://www.docker.com/" target="_blank"><img src="gif/docker-logo.jpg" alt="Docker Logo" width="15%"></a>
  <a href="https://code.visualstudio.com/" target="_blank"><img src="gif/visual-studio-code-logo.jpeg" alt="VS Code Logo" width="20%"></a>
  <a href="https://github.com/" target="_blank"><img src="gif/github-logo.jpg" alt="gitHub Logo" width="15%"></a>
  <br />
  <a href="https://nodejs.org/en/" target="_blank"><img src="gif/nodejs-logo.png" alt="NodeJs Logo" width="10.5%"></a>
  <a href="https://nodemon.io/" target="_blank"><img src="gif/nodemon-logo.png" alt="Nodemon Logo" width="9%"></a>
  <br />
  <a href="https://expressjs.com/" target="_blank"><img src="gif/express-logo.png" alt="Express Logo" width="20%"></a>
  <a href="https://joi.dev/" target="_blank"><img src="gif/joi-logo.png" alt="Joi Logo" width="5.5%"></a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" />
</p>

<h2 id="descrição-do-projeto"> :page_facing_up: Descrição</h2>

<details>
  <summary>Descrição</summary><br />
  Tem-se um arquivo (`talker.json`) que foi utilizado como base para fazer as requisições da API. Todas as operações de leitura e escrita foram realizadas neste arquivo usando métodos da biblioteca `fs`.<br /><br />
  
  Neste projeto eu realizei:
  
  <ol>
    <li>Desenvolvimento de uma API de um CRUD de palestrantes</li>
    <li>Desenvolvimento de endpoints que alteram um arquivo utilizando o módulo `fs`</li>
  </ol><br />

  Durante o desenvolvimento foi utilizado Docker.<br />  
</details>

<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" />
</p>

<h2 id="instruções"> :scroll: Instruções</h2>

1. Clone o repositório
  * `git clone git@github.com:Gabrielle-Murat/NodeJs-TalkerManager.git`
  * Entre na pasta do repositório que você acabou de clonar;
<br />

2. Instale as dependências:
  * `npm install`
<br />

3. Como restaurar o arquivo `talker.json`:
  * Execute o comando: `npm run restore`
<br />
  
4. Para iniciar o servidor em modo de desenvolvimento:
  * Execute o comando: `npm run dev`
<br />
    
<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" />
</p>

<h2 id="requisitos"> :woman_technologist: Requisitos Realizados:</h2>

<details open="open">
  <summary>Criação da API:</summary>

  <h4 id="requisito1">Requisito 1: Criação do endpoint GET `/talker`</h4>
  
    1. Criar um endpoint para buscar todos os palestrantes cadastrados:
      1.1. Retornar `status 200` e um array com todos os palestrantes cadastrados.
      1.2. Caso não exista nenhum palestrante cadastrado: retornar `status 200` e um array vazio.

  <h4 id="requisito2">Requisito 2: Criação do endpoint GET `/talker/:id`</h4>
  
    2. Criar um endpoint para buscar um palestrante por id:
      2.1. Retornar `status 200` e um palestrante baseado no id da rota.
      2.2. Caso não exista nenhum palestrante com o id da rota: retornar `status 404` e a mensagem "Pessoa palestrante não encontrada".

  <h4 id="requisito3">Requisito 3: Criação do endpoint POST `/login`</h4>
  
    3. Criar um endpoint para fazer login:
      3.1. O endpoint deve receber os campos `email` e `password` no corpo da requisição.
      3.2. Retornar um token aleatório de 16 caracteres.
      3.3. Retornar `status 200` e o token gerado.
      3.4. O token retornado deve ser aleatório cada vez que o endpoint for acessado.

  <h4 id="requisito4">Requisito 4: Criação de validações para o endpoint `/login`</h4>
  
    4. Validar os campos recebidos no corpo da requisição do requisito anterior:
      4.1. Para campos inválidos: retornar `status 400` com a respectiva mensagem de erro.
      4.2. O campo `email` é obrigatório e deve ser um email válido.
      4.3. O campo `password` é obrigatório e deve ter no mínimo 6 caracteres.

  <h4 id="requisito5">Requisito 5: Criação do endpoint POST `/talker`</h4>
  
    5. Criar um endpoint para adicionar um novo palestrante ao arquivo de dados e validar os campos recebidos no corpo da requisição:
      5.1. O corpo da requisição deve ter o mesmo formato de cadastro contido no arquivo `talker.json`.
      5.2. A requisição deve ter o token no header, no campo `authorization`.
      5.3. Caso o token não seja encontrado ou seja inválido: retornar `status 401` e a respectiva mensagem.
      5.4. Para campos inválidos: retornar `status 400` com a respectiva mensagem de erro.
      5.5. O campo `name` é obrigatório e deve ter no mínimo 3 caracteres.
      5.6. O campo `age` é obrigatório e deve ser um inteiro maior ou igual a 18.
      5.7. O campo `talk` é obrigatório e deve ser um objeto com as chaves `watchedAt` e `rate`.
      5.8. O campo `watchedAt` é obrigatório e deve ter uma data no formato `dd/mm/aaaa`.
      5.9. O campo `rate` é obrigatório e deve ser um inteiro de 1 a 5.
      5.10. Retornar `status 201` e o palestrante que foi cadastrado.


  <h4 id="requisito6">Requisito 6: Criação do endpoint PUT `/talker/:id`</h4>
  
    6. Criar um endpoint para editar um palestrante cadastrado com base no id da rota:
      6.1. O id registrado não deve ser alterado.
      6.2. O corpo da requisição deve ter o mesmo formato de cadastro contido no arquivo `talker.json`.
      6.3. A requisição deve ter o token no header, no campo `authorization`.
      6.4. O token e os campos devem ser validados conforme o requisito 5.
      6.5. Retornar `status 200` e o palestrante que foi editado.

  <h4 id="requisito7">Requisito 7: Criação de um endpoint DELETE `/talker/:id`</h4>
  
    7. Criar um endpoint para deletar um palestrante com base no id da rota:
      7.1. A requisição deve ter o token no header, no campo `authorization`.
      7.2. O token deve ser validado conforme o requisito 5.
      7.3. Retornar `status 204` sem mensagem de resposta.

  <h4 id="requisito8">Requisito 8: Criação de um endpoint GET `/talker/search`</h4>
  
    8. Criar em endpoint para buscar palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL:
      8.1. A requisição deve ter o token no header, no campo `authorization`.
      8.2. O token deve ser validado conforme o requisito 5.
      8.3. Caso o termo de busca esteja vazio: retornar `status 200` e um array contendo todos os palestrantes cadastrados.
      8.4. Caso não exista nenhum palestrante cadastrado: retornar `status 200` e um array vazio.
      8.5. Retornar `status 200` e um array de palestrantes que satisfaçam a busca.

</details>
<br />

<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" />
</p>

<h2 id="créditos"> 💳 Créditos</h2>

<p align="center">Arquivo de cadastro de palestrantes (talker.json) e docker compose (docker-compose.yml) fornecidos pela Trybe.</p>
<p align="center"><a href="https://www.betrybe.com/" target="_blank"><img src="gif/trybe-logo.jpeg" alt="Trybe Logo" width="15%"></a></p>
