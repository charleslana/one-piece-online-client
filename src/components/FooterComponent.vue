<template>
  <footer class="footer footer-top mt-5">
    <div class="content has-text-centered">
      <p class="is-uppercase is-italic tahoama">Fique conectado</p>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="../assets/images/social/twitter.png" alt="social image" class="social-image" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="../assets/images/social/facebook.png" alt="social image" class="social-image" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="../assets/images/social/youtube.png" alt="social image" class="social-image" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src="../assets/images/social/instagram.png"
            alt="social image"
            class="social-image"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="../assets/images/social/whatsapp.png" alt="social image" class="social-image" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="../assets/images/social/discord.png" alt="social image" class="social-image" />
        </a>
      </div>
    </div>
    <div class="footer-menu-container">
      <ul class="sub-footer">
        <li><RouterLink to="/manual">Manual</RouterLink></li>
        <li><RouterLink to="/news">Notícias</RouterLink></li>
        <li><RouterLink to="/ranking">Hall da fama</RouterLink></li>
        <li><RouterLink to="/disclosure">Divulgue-nos</RouterLink></li>
        <li><RouterLink to="/contact">Contato</RouterLink></li>
      </ul>
      <p class="games-info is-uppercase has-text-centered">Nossos jogos: One Piece Online</p>
      <div class="mt-3">
        <img src="../assets/images/social/brazil.svg" alt="social image" class="footer-flags" />
        <img src="../assets/images/social/usa.svg" alt="social image" class="footer-flags" />
      </div>
      <div class="mt-3 is-uppercase has-text-centered">
        © {{ releaseYear }} - {{ currentYear }} One Piece Online - Todos os direitos reservados
      </div>
      <div class="mt-3 is-uppercase has-text-centered">
        Personagens e ilustrações originais © copyright 1997 por Eiichiro Oda. Todos os direitos
        reservados
      </div>
      <ul class="sub-footer">
        <li><RouterLink to="/tos">Termos de uso</RouterLink></li>
        <li><RouterLink to="/privacy-policy">Política de privacidade</RouterLink></li>
        <li><RouterLink to="/rules">Regras e punições</RouterLink></li>
        <li><RouterLink to="/legal-notice">Aviso legal</RouterLink></li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const releaseYear = '2025';
const currentYear = new Date().getFullYear();
</script>

<style scoped>
footer {
  flex-shrink: 0;
}

.footer-top {
  padding: 1.5rem 0 0 0;
  width: 100%;
  background-color: #0d0f1d;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}

.footer-top .social-image {
  width: 2rem;
  height: auto;
  margin: 0rem 0.5rem;
}

.footer-menu-container {
  background: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  padding-bottom: 3rem;
}

.sub-footer {
  display: flex;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.sub-footer a {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-transform: uppercase;
  color: #fff;
  font-family: Phagspa !important;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transform: perspective(1px) translateZ(0);
}

.sub-footer a:before {
  content: '';
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  bottom: 0;
  background: #fc8833;
  height: 4px;
  transition-property: right;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}

.sub-footer a:hover:before {
  right: 0;
}

.sub-footer li {
  position: relative;
  display: inline-flex;
  align-items: center;
  font-size: 1.2rem;
}

.sub-footer li:not(:last-child):after {
  content: '';
  display: inline-block;
  width: 2px;
  margin-left: 1rem;
  height: 24px;
  background-color: rgba(255, 255, 255, 0.3);
}

.footer-flags {
  width: 4rem;
  height: auto;
  margin-left: 1rem;
  cursor: pointer;
}

.footer-flags:hover {
  filter: brightness(90%);
}
</style>
