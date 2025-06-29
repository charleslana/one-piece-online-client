<template>
  <main class="page-container">
    <HeaderComponent />
    <SectionLogoutComponent />
    <div class="page-content container">
      <InfoComponent
        :icon="['fa-regular', 'file-alt']"
        title="Politica de privacidade"
        image="info-1.png"
      >
        <p>
          Seus dados estão seguros conosco, não usamos eles para divulgação de nada que não seja do
          próprio jogo.
        </p>
      </InfoComponent>
      <div class="columns menu-columns">
        <div class="column is-3">
          <aside class="menu">
            <ul class="menu-list">
              <li v-for="menu in menus" :key="menu.key" class="phagspa">
                <a
                  :class="{ 'is-active': selectedMenu === menu.key }"
                  @click="selectedMenu = menu.key"
                  >{{ menu.label }}
                </a>
              </li>
            </ul>
          </aside>
        </div>
        <div class="column is-9">
          <Transition
            name="fade"
            enter-active-class="animate__animated animate__fadeIn"
            mode="out-in"
          >
            <div :key="selectedMenu" class="content-menu">
              <div v-if="selectedMenu === 'Política Geral'">
                <div class="title is-3">Política Geral de Respeito ao Usuário</div>
                <p class="description">
                  Os termos a seguir regulam a política do <i>{{ name }}</i> sobre a obtenção e
                  utilização de informações de seus usuários, pelo que estes, ao utilizar o
                  <i>{{ name }}</i
                  >, declaram estar cientes e concordar com todos seus termos.
                </p>
                <p class="description mt-3">
                  Em linhas gerais, <i>{{ name }}</i> valoriza a privacidade de seus membros e
                  usuários, e não compartilhará com terceiros nenhuma informação pessoal de seus
                  usuários, incluindo e-mail, nome, endereço ou localização. Por fim, ao utilizar o
                  <i>{{ name }}</i
                  >, o endereço de IP e respectivo servidor do usuário serão registrados para fins
                  estatísticos e razões de segurança.
                </p>
              </div>
              <div v-if="selectedMenu === 'Cookies'">
                <div class="title is-3">Utilização de “Cookies”</div>
                <p class="description">
                  <i>{{ name }}</i> pode armazenar e, excepcionalmente, divulgar informações
                  pessoais de seus usuários, quando permitido ou exigido por Lei, de acordo com sua
                  conveniência e necessidade. Desta forma, poderão ser divulgadas informações
                  armazenadas pelo servidor do site para satisfazer determinações legais,
                  requerimentos regulatórios das autoridades competentes, bem como quando necessária
                  à proteção dos direitos de propriedade do sistema de jogo ou garantia da segurança
                  de seus usuários e do público em geral.
                </p>
              </div>
              <div v-if="selectedMenu === 'Divulgação de dados'">
                <div class="title is-3">Armazenamento e Divulgação de Informações</div>
                <p class="description">
                  Ao utilizar o <i>{{ name }}</i
                  >, o usuário afirma ter ciência e concordar que em nenhuma hipótese poderá o site
                  <i>{{ name }}</i
                  >, bem como sua equipe responsável ou quaisquer pessoas ou sites relacionados a
                  este, serem responsabilizados por qualquer usuário ou parte legitimada pela
                  ocorrência de quaisquer danos diretos, indiretos, potenciais ou outros danos
                  consequentes da utilização ou incompatibilidade deste site ou qualquer de seus
                  links, afirmando ainda o usuário estar ciente desde já da possibilidade – ainda
                  que tomadas todas as diligências necessárias ao bom funcionamento do programa por
                  parte da equipe – da ocorrência de tais danos e/ou incompatibilidades.
                </p>
                <p class="description mt-3">
                  Ao “downloader” qualquer mídia ou imagem, o usuário afirma ainda que detém a posse
                  do material original, ou no caso de não detê-la, compromete-se a deletar a
                  referida mídia no prazo de 24 horas, pelo que o <i>{{ name }}</i> não se
                  responsabiliza pelas ações e/ou omissões de seus usuários.
                </p>
              </div>
              <div v-if="selectedMenu === 'Segurança das Informações'">
                <div class="title is-3">Segurança das Informações</div>
                <p class="description">
                  O site e sistema de jogo <i>{{ name }}</i> promove razoáveis esforços para
                  proteger a segurança de informações pessoais, tais como utilização de senhas e
                  usos de tecnologia como criptografia, procedimentos de controle e firewalls,
                  dentre outros mecanismos de segurança. Aconselhamos ao usuário, no momento de seu
                  registro, a cadastrar uma senha que contenha letras e números, bem como não
                  divulgá-la a ninguém, a fim de proteger sua conta pessoal no <i>{{ name }}</i
                  >. Qualquer acesso proveniente da conta do usuário é de sua inteira e exclusiva
                  responsabilidade, ainda que comprovadamente realizado por outras pessoas que não o
                  usuário registrado.
                </p>
                <p class="description mt-3">
                  O <i>{{ name }}</i> se reserva, comprovada a má utilização do site pelo usuário –
                  dentre elas a utilização de falhas de programação do próprio jogo (“bugs”) ou
                  programas específicos para trapacear –ou verificada conduta em desacordo com os
                  termos do site, ao direito de tomar quaisquer medidas que julgar necessárias,
                  dentre elas a exclusão permanente da conta do usuário.
                </p>
              </div>
              <div v-if="selectedMenu === 'Alteração da Política'">
                <div class="title is-3">Alteração das Políticas de Privacidade e Uso do Site</div>
                <p class="description">
                  <i>{{ name }}</i> se reserva no direito de mudar quaisquer termos e políticas de
                  utilização neste site, a qualquer momento, sem a prévia notificação de seus
                  usuários. Em caso de quaisquer comentários, questionamentos ou dúvidas dos
                  usuários sobre este ou qualquer outro termo presente neste site, estas deverão ser
                  enviadas para nós no seguinte endereço eletrônico: {{ contact }}.
                </p>
                <p class="description mt-3">
                  Ao continuar o acesso ao <i>{{ name }}</i
                  >, você está expressamente concordando com todos os avisos e condições de uso
                  citadas no site, bem como com todos os termos supracitados, afirmando ainda que
                  você preenche os requisitos estabelecidos em Lei sobre o conteúdo e utilização
                  deste site.
                </p>
              </div>
              <div v-if="selectedMenu === 'Exclusão de Dados'">
                <div class="title is-3">Exclusão de Dados</div>
                <p class="description">
                  O <i>{{ name }}</i> permite a exclusão de todos os dados da conta do jogador à
                  qualquer momento, bastando o usuário abrir um chamado interno no jogo e tratando
                  diretamente do assunto com a STAFF.
                </p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
    <FooterComponent />
  </main>
</template>

<script lang="ts" setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import InfoComponent from '@/components/InfoComponent.vue';
import SectionLogoutComponent from '@/components/SectionLogoutComponent.vue';
import { ref } from 'vue';

interface MenuItem {
  key: string;
  label: string;
}

const menus: MenuItem[] = [
  { key: 'Política Geral', label: 'Política Geral' },
  { key: 'Cookies', label: 'Cookies' },
  { key: 'Divulgação de dados', label: 'Divulgação de dados' },
  { key: 'Segurança das Informações', label: 'Segurança das Informações' },
  { key: 'Alteração da Política', label: 'Alteração da Política' },
  { key: 'Exclusão de Dados', label: 'Exclusão de Dados' },
];

const selectedMenu = ref<string>('Política Geral');

const name = ref('One Piece Online');
const contact = ref('contato@onepieceonline.com.br');
</script>

<style lang="css" scoped>
.title {
  font-family: Balto !important;
}

.description {
  color: #000;
}

.menu-columns {
  margin-bottom: 8rem !important;
}
</style>
