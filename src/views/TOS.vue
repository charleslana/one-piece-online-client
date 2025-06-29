<template>
  <main class="page-container">
    <HeaderComponent />
    <SectionLogoutComponent />
    <div class="page-content container">
      <InfoComponent :icon="['fa-regular', 'file-alt']" title="Termos de uso" image="info-1.png">
        <p>
          Leia atentamente os termos de uso do site e mantenha-se dentro das normalidades de uso do
          nosso site.
        </p>
      </InfoComponent>
      <div class="columns menu-columns">
        <div class="column is-3">
          <aside class="menu">
            <ul class="menu-list">
              <li v-for="menu in menus" :key="menu.key">
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
              <div v-if="selectedMenu === 'Notícias'">
                <div class="title is-3">Postagem de Notícias</div>
                <p class="description">
                  Todas as notícias postadas no <i>{{ name }}</i
                  >, são para uso exclusivo do site, a não ser que outra fonte seja citada, sendo
                  permitida sua referência em qualquer meio, desde que reproduzida em sua íntegra e
                  citado o site <i>{{ name }}</i> como fonte.
                </p>
              </div>
              <div v-if="selectedMenu === 'Contribuição de Dados'">
                <div class="title is-3">Contribuições de Dados</div>
                <p class="description">
                  Ocasionalmente são nos enviadas contribuições da dados pelos usuários, nas mais
                  diversas formas (arte, desenhos, fanfics, vídeos, etc.). Pelo presente termo o
                  usuário, ao enviar contribuições de dados sob qualquer forma, afirma ceder a
                  propriedade de tais dados ao <i>{{ name }}</i> que fica livre para utilizar ou não
                  tais dados de acordo com sua conveniência e necessidade, podendo inclusive serem
                  utilizados neste site.
                </p>
              </div>
              <div v-if="selectedMenu === 'Download de Multimídias'">
                <div class="title is-3">
                  Download de Multimídias e Eventuais Incompatibilidades e/ou Danos
                </div>
                <p class="description">
                  Ao utilizar o <i>{{ name }}</i> , o usuário afirma ter ciência e concordar que em
                  nenhuma hipótese poderá o site <i>{{ name }}</i> , bem como sua equipe responsável
                  ou quaisquer pessoas ou sites relacionados a este, serem responsabilizados por
                  qualquer usuário ou parte legitimada pela ocorrência de quaisquer danos diretos,
                  indiretos, potenciais ou outros danos consequentes da utilização ou
                  incompatibilidade deste site ou qualquer de seus links, afirmando ainda o usuário
                  estar ciente desde já da possibilidade – ainda que tomadas todas as diligências
                  necessárias ao bom funcionamento do programa por parte da equipe – da ocorrência
                  de tais danos e/ou incompatibilidades.
                </p>
                <p class="description mt-3">
                  Ao “downloader” qualquer mídia ou imagem, o usuário afirma ainda que detém a posse
                  do material original, ou no caso de não detê-la, compromete-se a deletar a
                  referida mídia no prazo de 24 horas, pelo que o <i>{{ name }}</i> não se
                  responsabiliza pelas ações e/ou omissões de seus usuários.
                </p>
              </div>
              <div v-if="selectedMenu === 'Uso do Sistema'">
                <div class="title is-3">Uso do Sistema "{{ name }}"</div>
                <p class="description">
                  Os desenvolvedores reservam o direito de agir, definir, alterar e quaisquer outras
                  ações que envolvem o sistema do jogo/site <i>{{ name }}</i
                  >. Isso significa que alterações sem aviso prévio podem ser realizadas, que ações
                  previamente esclarecidas podem ou não serem aplicadas. Bem como eventualidades
                  encontradas em qualquer sistema, como mudanças de servidores/domínios e outros que
                  não são da alçada dos mesmos como queda de conexão com o servidor, ataques
                  externos, eventos em instalações físicas onde se encontra o sistema entre outros.
                  O usuário que recebe o direito de acessar, navegar e jogar o sistema do
                  <i>{{ name }}</i> ao continuar o acesso ao <i>{{ name }}</i> em quaisquer domínios
                  que sejam dos mesmos desenvolvedores, assumem esses riscos e aceitam não imbuir os
                  desenvolvedores dessas eventualidades, visto que nenhum sistema é invulnerável a
                  falhas e outras circunstâncias citadas ou não aqui. Os desenvolvedores assumem o
                  compromisso de manter as funcionalidades do sistema funcionando em sua grande
                  maioria, mas ainda se reserva no direito de não atuar em eventuais ressarcimentos
                  derivados de qualquer falha no mesmo, visando o melhor andamento para o sistema
                  como um todo e não para indivíduos em casos isolados ou de média escala.
                </p>
              </div>
              <div v-if="selectedMenu === 'Acesso ao Servidor'">
                <div class="title is-3">Acesso ao Servidor</div>
                <p class="description">
                  Para todas as questões relacionadas ao servidor no qual a mídia específica ao jogo
                  é disponibilizada, informações originadas deste servidor residem em um sistema de
                  computador financiado pela equipe de fãs responsável pelo sistema de jogo e/ou
                  terceiros a ela associados. Ao utilizar o <i>{{ name }}</i
                  >, o usuário afirma estar ciente e de acordo que a utilização deste sistema poderá
                  ser monitorada para fins de segurança. Afirma ainda o usuário estar ciente que
                  todo acesso não-autorizado a este sistema, por quaisquer meios, é expressamente
                  proibido, estando sujeito o usuário infrator, em caso de violação, às sanções
                  penais cabíveis – sem prejuízo da responsabilização civil e consequente
                  indenização por perdas e danos, nos termos dos arts. 186, 187 e 927, todos do
                  Código Civil Brasileiro de 1997.
                </p>
                <p class="description mt-3">
                  Ao continuar o acesso ao <i>{{ name }}</i
                  >, você está expressamente concordando com todos os avisos e condições de uso
                  citadas no site, bem como com todos os termos supracitados, afirmando ainda que
                  você preenche os requisitos estabelecidos em Lei sobre o conteúdo e utilização
                  deste site.
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
  { key: 'Notícias', label: 'Notícias' },
  { key: 'Contribuição de Dados', label: 'Contribuição de Dados' },
  { key: 'Download de Multimídias', label: 'Download de Multimídias' },
  { key: 'Uso do Sistema', label: 'Uso do Sistema' },
  { key: 'Acesso ao Servidor', label: 'Acesso ao Servidor' },
];

const selectedMenu = ref<string>('Notícias');

const name = ref('One Piece Online');
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
