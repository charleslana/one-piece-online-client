<template>
  <main class="page-container">
    <HeaderComponent />
    <SectionLogoutComponent />
    <div class="page-content container mb-8rem">
      <InfoComponent :icon="['fa', 'bullhorn']" title="Aviso legal" image="info-1.png">
        <p>
          {{ name }} é um site de fãs, não tendo nenhuma relação com qualquer série ou personagem
          citado no site, bem como nenhuma participação em qualquer etapa de produção ou
          comercialização da série.
        </p>
      </InfoComponent>
      <p class="has-text-black">
        <i>{{ name }}</i> é um site de fãs, não tendo nenhuma relação com qualquer série ou
        personagem citado no site, bem como nenhuma participação em qualquer etapa de produção ou
        comercialização da série.
      </p>
      <p class="has-text-black mt-3">
        O sistema de jogo baseado em WEB {{ name }} foi desenvolvido por uma equipe de fãs de One
        Piece, sendo gratuito e sem fins lucrativos, podendo sofrer alterações a qualquer momento
        sem prévio aviso. Todos os direitos relativos ao sistema de jogo baseado em WEB {{ name }},
        bem como os de utilização do software e de sua base de dados, são de propriedade da referida
        equipe, nos termos dos art. 1º e 2º da Lei Brasileira de Proteção ao Software – Lei Federal
        n.º 9.609/98. O objetivo do site é a divulgação do anime/mangá como fonte de cultura para o
        público em geral, nos termos do art. 215 da Constituição Federal de 1988 da República
        Federativa do Brasil, respeitados os respectivos direitos autorais, de propriedade do
        criador Eiichiro Oda.
      </p>
      <p class="has-text-black mt-3">
        Todas as imagens, logotipos e nomes do anime supracitado são marcas registradas de seu
        criador, pelo que o uso de “screenshots” dos personagens e eventuais referências à série não
        constitui ofensa aos direitos autorais dos proprietários da série, nos termos do art. 46,
        inciso VIII da Lei Brasileira de Direitos Autorais – Lei Federal n.º 9610/98, e art. 13 do
        Acordo Internacional sobre Aspectos dos Direitos de Propriedade Intelectual Relacionados ao
        Comércio (TRIPS – Trade Related Aspects of Intellectual Property Rights).
      </p>
      <p class="has-text-black mt-3">
        Para todas as questões relacionadas ao servidor no qual a mídia específica ao jogo é
        disponibilizada, informações originadas deste servidor residem em um sistema de computador
        financiado pela equipe de fãs responsável pelo sistema de jogo e/ou terceiros a ela
        associados, podendo a utilização deste sistema ser monitorada para fins de segurança. Todo
        acesso não autorizado a este sistema, por quaisquer meios, é proibido, e o infrator está
        sujeito às sanções penais cabíveis – sem prejuízo da responsabilização civil e consequente
        indenização por perdas e danos, nos termos dos arts. 186, 187 e 927, todos do Código Civil
        Brasileiro de 2002.
      </p>
      <p class="has-text-black mt-3">
        Em nenhuma hipótese poderá o site <i>{{ name }}</i
        >, bem como sua equipe responsável ou quaisquer pessoas ou sites relacionados a este, serem
        responsabilizados por qualquer usuário ou parte legitimada pela ocorrência de quaisquer
        danos diretos, indiretos, potenciais ou outros danos consequentes da utilização deste site
        ou qualquer de seus links, estando cientes desde já da possibilidade – ainda que tomadas
        todas as diligências necessárias ao bom funcionamento do programa por parte da equipe – da
        ocorrência de tais danos.
      </p>
      <p class="has-text-black mt-3">
        Qualquer tipo de arrecadação ou doações feitas ao <i>{{ name }}</i> serão revertidas em
        melhorias ao site, divulgação deste e do anime, em observância ao projeto não ter quaisquer
        fins lucrativos. Todas as doações são pessoais e intransferíveis, ou seja, não podem ser
        repassadas a outro jogador ou conta cadastrada no jogo
      </p>
      <p class="has-text-black mt-3">
        Ao continuar o acesso ao <i>{{ name }}</i
        >, você está expressamente concordando com todos os avisos e condições de uso citadas no
        site, bem como com todos os termos supracitados, afirmando ainda que você preenche os
        requisitos estabelecidos em Lei sobre o conteúdo e utilização deste site.
      </p>
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

const name = ref('One Piece Online');
</script>

<style lang="css" scoped></style>
