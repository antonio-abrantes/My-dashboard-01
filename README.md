# Estrutura básica de Dashboard sem uso de framework

### Referências de recursos necessários
- [Node.js](https://nodejs.org/en/ "Node.js")
- [Gulp](https://gulpjs.com/ "Gulp")
- [Browser Sync](https://browsersync.io/ "Browser Sync")
- [Fontawesome](https://fontawesome.com/ "Fontawesome")
- [jQuery](https://jquery.com/ "jQuery")

### Instruções
- Baixar e instalar o nodejs
- Abrir o prompt, acessar a pasta do projeto e digitar os seguintes comandos: 

<!-- language: lang-js -->
    npm install gulp-cli -g
    npm init
    npm install gulp browser-sync --save-dev
    npm install jquery
    npm install @fortawesome/fontawesome-free
    
- Criar o arquivo gulpfile.js(Segue exemplo no repositório) dentro da raiz principal do projeto
- Após o script ter sido criado, execute o comando 'gulp' para iniciar

<p>
 Estas configurações vão ativar o reload automatico no navegador, após qualquer 
 alteração no projeto, seja no html, js.
</p>

### Observação

Caso seja feito um clone deste repositório, no lugar do comando 'npm init', 
utilize o comando 'npm i', pois assim, todos os módulos de dependencies e devDependencies
serão automaticamente instalados no seu projeto.

#### Explicando algumas flags
<!-- language: lang-js -->
    -g = Serve para instalar o pacote globalmente.
    --save = Serve para instalar o pacote como dependencia do projeto.
    --save-dev = para instalar o pacote como dependencia de desenvolvimento.

#### Pagina pessoal: https://antonio-abrantes.github.io/