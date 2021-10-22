<div align="center">
  <img src="./src/assets/images/zack.jpg"/>
  <h1>
    Zack BOT
  </h1>
  <p>
    Um simples bot estruturado para o WhatsApp, usando a biblioteca <a href="https://github.com/adiwajshing/baileys" target="_blank">Baileys</a> de <a href="https://github.com/adiwajshing" target="_blank">Adiwajshing</a>.
  </p>
  <hr>
</div>

<h2>
  Instalação e inicialização
</h2>
<p>Recomendo ter no minimo <b>1Gb</b> de RAM liberado para evitar resposta demoradas do bot, uma conexão boa, e espaço suficiente para o bot poder baixar as imagens para converter em <b>Stickers</b></a>
<div>
  <h3>Instalação</h3>
  <p>Tenha o <a href="https://www.ffmpeg.org" target="_blank">FFMPEG</a> instalado na sua maquina para a conversão de imagens e videos. Obviamente, será necessário ter o <a href="https://nodejs.org" target="_blank">NodeJS</a> e o <a href="https://www.npmjs.com" target="_blank">NPM</a> na maquina também.</p>

  ```bash
  $ npm install # Para instalar as dependências
  ```

  <h3>Inicialização</h3>
  <p>Na primeira vez será necessário escanear o código <b>QR</b> que vai estar imprimido no terminal em que esta sendo executado.</p>

  ```bash
  $ npm run dev # Modo de desenvolvimento, qualquer alteração feita fara com que o bot reinicie.
  ```

  ```bash
  $ npm run dev # Modo de produção
  ```
<div>
<div>
  <h2>Comandos</h2>
  <p>Os comandos são separados em <b>3 categorias</b>. Alguns comandos de animes estão off's por causa das API's que não são muito estaveis.</p>

  - Anime
    * **animeavatars**:
      - Descrição: Já ta na hora de trocar esse avatar né?
      - Alias: avatars
      - Como usar: !avatars
    * **baka**
      - Descrição: b-baka!!!
      - Como usar: !baka
    * **beijo**
      - Descrição: Hmmm çafad@... 😼
      - Alias: kiss
      - Como usar: !kiss `<user>`
    * **carinho**
      - Descrição: Faça carinho em alguém...
      - Alias: cuddle
      - Como usar: !cuddle `<user>`
    * **cutucar**
      - Descrição: Poke... pokepokepokepoke...
      - Alias: poke
      - Como usar: !poke `<user>`
    * **tapinha**
      - Descrição: Tapinha ...
      - Alias: pat
      - Como usar: !pat `<user>`
    * **waifu**:
      - Descrição: Qual será a sua waifu?
      - Alias: wf
      - Como usar: !waifu
    * **wallpaper**:
      - Descrição: Procurando um walpaper diferente? Execute esse comando...
      - Alias: wlppr
      - Como usar: !wllpr

  - Fun
    * **ask**
      - Descrição: Quem é o impostor? 🤔.
      - Alias: pergunta, sn
      - Como usar: `<prefixo>`amongus `<user>`
    * **chance**
      - Descrição: Qual é sua chance de...
      - Como usar: `<prefixo>`chance <msg>
    * **coinflip**
      - Descrição: Cara ou coroa?
      - Como usar: `<prefixo>`coinflip `<lado da moeda>`
    * **dado**
      - Descrição: Quer que eu jogue o dado para você? Ok~
      - Como usar: `<prefixo>`dado
    * **gado**
      - Descrição: Vamos ver o quão gado você é? 🐂
      - Alias: gadometro
      - Como usar: `<prefixo>`gado
    * **gay**
      - Descrição: Tu é man? 🤨
      - Como usar: `<prefixo>`gey `<user>`
    * **jokenpo**
      - Descrição: Vamos ver quem ganhara essa batalha?!
      - Alias: ppt
      - Como usar: `<prefixo>`jokenpo `<pedra/papel/tesoura>`
    * **pau**
      - Descrição: Qual o tamanho da sua 3º perna? 😏.
      - Alias: pica, rola
      - Como usar: `<prefixo>`pau
    * **roleta**
      - Descrição: Que tal brincarmos com a morte? ☠
      - Como usar: `<prefixo>`roleta
    * **shipp**
      - Descrição: Hmmm, qual será o casal de hoje? 💓
      - Alias: casal, ship
      - Como usar: `<prefixo>`casal `<user1>` `<user2>`
    * **slot:**
      - Descrição: Que tal testar sua sorte hein amigão ? 
      - Alias: sorte
      - Como usar: `<prefixo>`slot

  - Utils
    * **attp**
      - Descrição: Crie stk, de texto animadas.
      - Como usar: !attp `<mensagem>`
    * **bot**
      - Descrição: Comando para consultar o status do bot.
      - Alias: bi, botinfo
      - Como usar: !bot
    * **eval**
      - Descrição: Comando para testar código.
        - Como usar: !eval `<code>`
    * **help**
      - Descrição: Execute esse comando para obter ajuda.
      - Alias: menu, ajuda, ?
      - Como usar: !help `<category>`
    * **marcar**
      - Descrição: Comando para marcar geral.
      - Como usar: !marcar
    * **say**
      - Descrição: Comando especializado para anunciar avisos do bot.
      - Como usar: !say
    * **sticker**
      - Descrição: Comando para criar stickers
      - Alias: stk, f, figu, s, figurinha
      - Como usar: !sticker `<image/gif/video>`
    * **test**
      - Descrição: Comando para executar testes...
      - Como usar: !test
</div>
<hr>
<div align="center">
  <p>Este projeto está licensiado sobre a licença <a href="./MIT">MIT</a>.</p>
  <p>Coded by <a href="https://github.com/Ahosall">Ahosall</a> with 🤍!</p>
</div>