<template>
  <main class="page-container">
    <HeaderComponent />
    <SectionLogoutComponent />
    <div class="page-content container">
      <InfoComponent
        :icon="['fa-regular', 'file-alt']"
        title="Regras e punicoes"
        image="info-1.png"
      >
        <p>
          O {{ name }} conta com regras simples, mas necessárias para o convívio ideal entre os
          membros do jogo. Se houver dúvidas se estará infringindo alguma delas, entre em contato
          com a STAFF.
        </p>
        <p>
          Os jogadores que não as cumprirem, ignorarem ou simplesmente tentar burlá-las, poderão ser
          punidos de acordo com as regras, que podem ser alteradas, sem aviso prévio.
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
              <div v-if="selectedMenu === 'Multi'">
                <div class="title is-3">Política Geral de Respeito ao Usuário</div>
                <p class="description">
                  Multi é o mesmo que ter mais de uma conta, para tirar vantagem. No {{ name }} é
                  permitido ter mais de uma conta, contudo se você usar para ajudar na pontuação de
                  um personagem principal, com batalhas, isto JAMAIS será permitido. Caso você tenha
                  uma conta e compartilhe o mesmo computador com um irmão ou outro parente, deve nos
                  informar imediatamente, pois todos de sua família podem jogar o {{ name }}, mas em
                  momento algum, devem BATALHAR ENTRE SÍ.
                </p>
              </div>
              <div v-if="selectedMenu === 'Divisão de Contas'">
                <div class="title is-3">Divisão de Contas</div>
                <p class="description">
                  Não aconselhamos que se divida a conta com outros jogadores, se por algum motivo
                  algo aconteça na conta que é dividida, nós NÃO iremos interferir. E há o risco de
                  sua conta ser usada por outra pessoa que tenha o acesso, para fazer multi, que
                  será banido.
                </p>
              </div>
              <div v-if="selectedMenu === 'Vitórias Combinadas'">
                <div class="title is-3">Vitórias Combinadas</div>
                <p class="description">
                  Troca de vitórias é um meio de tirar vantagem, de forma desonesta, e totalmente
                  cabível à punição.
                </p>
              </div>
              <div v-if="selectedMenu === 'Robôs (Bots)'">
                <div class="title is-3">Robôs (Bots)</div>
                <p class="description">
                  Quando um jogador encontrar algum programa que prometa dar vantagens para o seu
                  personagem, é importante saber que este programa não está sendo tão bonzinho a
                  ponto de apenas dar as coisas. Ele irá pegar sua senha, deletando sua conta a
                  seguir, e mais importante, ele pode armazenar diversas informações importantes que
                  estão em seu computador, e assim que descoberto, poderá ser punido pelos
                  Administradores já que usar estes bots não é permitido. Informe-nos imediatamente
                  assim que encontrar algum destes programas.
                </p>
              </div>
              <div v-if="selectedMenu === 'Conteúdo Ofensivo'">
                <div class="title is-3">Conteúdo Ofensivo</div>
                <p class="description">
                  Conteúdos ofensivos incluem qualquer mensagem de texto e/ou imagem que agrida os
                  membros ou possa a vir a agredir. Imagens com tópicos religiosos e semelhantes
                  devem ser evitados ao máximo e em caso de reclamação por parte de alguém, será
                  editado. Imagens e textos pornográficos são proibidos. Quando a agressão for não
                  intencional ela não será levada em conta, desde que seja corrigida assim que
                  solicitado. No caso de reincidência ou conteúdo com objeto claro de ofender haverá
                  punição que pode ser aplicada somente sobre o líder ou todos os membros da equipe
                  e/ou organização, dependendo do julgamento. O conteúdo ofensivo se aplica para
                  nomes de personagens, equipes, organizações, fóruns, mensagens, comunicados e
                  semelhantes.
                </p>
              </div>
              <div v-if="selectedMenu === 'Nomes'">
                <div class="title is-3">Nomes</div>
                <p class="description">
                  Não é permitido o uso de nome que seja referente à STAFF ou administração do jogo,
                  nomes ofensivos, homofóbicos ou de cunho sexual, tanto para jogadores, equipes ou
                  organizações.
                </p>
              </div>
              <div v-if="selectedMenu === 'Calúnias'">
                <div class="title is-3">Calúnias</div>
                <p class="description">
                  Ao for comprovado que um jogador deseja difamar alguém, o mesmo será punido
                  severamente, pois não aceitaremos esta atitude desrespeitosa de criar má fama há
                  algum jogador sem motivo.
                </p>
              </div>
              <div v-if="selectedMenu === 'Punições'">
                <div class="title is-3">Punições</div>
                <p class="description mb-3">
                  Sobre as punições, vale ressaltar que podemos, a qualquer momento, de acordo com o
                  grau de conduta do jogador, pular alguma etapa de punição ou mudar a punição, de
                  acordo com a decisão da STAFF.
                </p>
                <p class="description has-text-weight-bold">*Advertência</p>
                <p class="description has-text-weight-bold">*Suspensão de Personagem 7 dias</p>
                <p class="description has-text-weight-bold">
                  *Suspensão Temporária de Personagem, tempo à definir pela STAFF
                </p>
                <p class="description has-text-weight-bold">*Suspensão de Personagem</p>
                <p class="description has-text-weight-bold">*Banimento Permanente de Personagem</p>
                <p class="description has-text-weight-bold">
                  *Suspensão Temporária da Conta, tempo à definir pela STAFF
                </p>
                <p class="description has-text-weight-bold">*Banimento Permanente da Conta</p>
                <p class="description mt-5 mb-5">
                  Ainda há a possibilidade, se reconhecer que houve ganho de experiência,
                  habilidades, itens ou qualquer outra coisa ganha de forma ilegal dentro do jogo,
                  poderá ser retirado do personagem.
                </p>
                <p class="description mb-3 has-text-weight-bold">Multis / SWAP:</p>
                <p class="description">
                  <b>1ª incidência</b> = Personagens envolvidos serão suspensos.
                </p>
                <p class="description">
                  <b>2ª incidência</b> = Personagens envolvidos serão suspensos e a Conta será
                  suspensa, tempo a definir pela STAFF.
                </p>
                <p class="description">
                  <b>3ª incidência</b> = incidência = Banimento Permanente da Conta e dos
                  Personagens.
                </p>
                <p class="description mt-5 mb-3 has-text-weight-bold">
                  Ofensas / Ameaças / Calúnias:
                </p>
                <p class="description"><b>1ª incidência</b> = Advertência.</p>
                <p class="description"><b>2ª incidência</b> = Suspensão de no mínimo 03 dias.</p>
                <p class="description"><b>3ª incidência</b> = Suspensão de no mínimo 07 dias.</p>
                <p class="description"><b>4ª incidência</b> = Suspensão de Personagem.</p>
                <p class="description">
                  <b>5ª incidência</b> = Suspensão Temporária da Conta, tempo à definir pela STAFF.
                </p>
                <p class="description"><b>6ª incidência</b> = Banimento Permanente da Conta.</p>
                <p class="description mt-5 mb-3 has-text-weight-bold">
                  Utilização de robôs, bugs e táticas não previstas:
                </p>
                <p class="description">
                  <b>1ª incidência</b> = Suspensão de no mínimo 03 dias mais punição de acordo com
                  irregularidade praticada pelo jogador.
                </p>
                <p class="description">
                  <b>2ª incidência</b> = Personagem envolvido será suspenso.
                </p>
                <p class="description">
                  <b>3ª incidência</b> = Suspensão Temporária da Conta, tempo à definir pela STAFF.
                </p>
                <p class="description"><b>4ª incidência</b> = Banimento Permanente da Conta.</p>
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
  { key: 'Multi', label: 'Multi' },
  { key: 'Divisão de Contas', label: 'Divisão de Contas' },
  { key: 'Vitórias Combinadas', label: 'Vitórias Combinadas' },
  { key: 'Robôs (Bots)', label: 'Robôs (Bots)' },
  { key: 'Conteúdo Ofensivo', label: 'Conteúdo Ofensivo' },
  { key: 'Nomes', label: 'Nomes' },
  { key: 'Calúnias', label: 'Calúnias' },
  { key: 'Punições', label: 'Punições' },
];

const selectedMenu = ref<string>('Multi');

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
