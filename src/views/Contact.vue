<template>
  <main class="page-container">
    <HeaderComponent />
    <SectionLogoutComponent />
    <div class="page-content container">
      <InfoComponent :icon="['fa-regular', 'file-alt']" title="Contato" image="info-1.png">
        <p>
          Dúvidas sobre algum módulo do Jogo? Não localizou nas perguntas frequentes a solução? Esse
          espaço foi criado para responder o que você não encontrou.
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
              <div v-if="selectedMenu === 'Suporte Online'">
                <div class="title is-3">Importante</div>
                <p class="description">
                  Atualmente o <b class="is-uppercase">{{ name }}</b> recebe vários e-mails diários,
                  alguns que não apresentam qualquer conteúdo, isto gera alguns problemas, como a
                  lentidão de respostas, já que os e-mail são repondidos por uma única pessoa. O
                  tempo que poderia estar sendo usado para esclarecer a sua dúvida, acaba sendo
                  usado para deletar e-mails impróprios ou então tirando uma outra dúvida bem
                  simples, na qual o Manual e o FAQ poderiam esclarecer.
                </p>
                <p class="description mt-3">
                  Nós resolvemos criar uma nova forma de comunicação entre os usuários e o suporte,
                  visando sempre um melhor atendimento, com respostas mais breves à seus usuários.
                </p>
                <p class="description mt-3">
                  Ao mesmo tempo que este suporte está sendo modernizado, um novo Manual está sendo
                  entregue assim como novas Perguntas e Respostas mais Frequentes (FAQ) estará sendo
                  atualizado na medida que novas dúvidas tornarem-se frequentes.
                </p>
                <p class="description mt-3">
                  Este novo atendimento, gera uma melhor qualidade e agilidade em relação às
                  repostas. Atenciosamente,
                </p>
              </div>
              <div v-if="selectedMenu === 'Contas'">
                <div class="title is-3">Ativação de Contas</div>
                <p class="description">
                  Após se cadastrar, você receberá um e-mail notificando-o do cadastro, e
                  solicitando uma confirmação de cadastro. Após confirmá-lo, você poderá logar no
                  {{ name }}.
                </p>
                <p class="description mt-3">
                  Caso este e-mail não chegue, é possível fazer a confirmação manual através do link
                  "<a href="#" target="_blank" rel="noopener noreferrer" class="link2 is-uppercase"
                    >Ativar minha conta</a
                  >".
                </p>
                <p class="description mt-3">
                  O atraso do envio de ativamente, pode ser entre eles o cadastro de e-mail errado.
                  Um novo envio de confirmação de cadastro, pode ser solicitado pelo jogador, por
                  meio dos campos abaixo.
                </p>
                <div class="title is-3 mt-5">Esqueci minha senha</div>
                <p class="description mt-3">
                  Por motivos de segurança, indicamos a troca da senha temporariamente, ou ao se
                  desconfiar de que alguém possa ter descoberto a mesma. Existem alguns programas
                  ilegais, na qual o acesso do {{ name }} é feito dentro de um browser específico;
                  estes tipos de programa, são perigosos para os usuários, pois os mesmos conseguem
                  armazenar a senha e outras importantes informações informadas ao seu computador.
                  Jamais acesse o {{ name }} dentro de um programa, ou um browser específico pois
                  não nos responsabilizaremos por personagens deletados neste caso.
                </p>
                <p class="description mt-3">
                  Lembramos, que o Contato, jamais poderá executar a troca da senha e nem enviá-la
                  ao jogador, é necessário que o jogador a solicite.
                </p>
                <p class="description mt-3">
                  Uma Nova senha pode ser solicitada através do link "<a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link2 is-uppercase"
                    >Esqueci minha senha</a
                  >".
                </p>
                <div class="title is-3 mt-5">Como alterar a senha</div>
                <p class="description mt-3">
                  A alteração da senha é essencial para que a sua conta fique segura. O jogador deve
                  alterar a senha através do menu, uma vez selecionado um personagem, estará
                  disponível o link “<a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link2 is-uppercase"
                    >Trocar senha</a
                  >” para que o mesmo seja feito.
                </p>
                <p class="description mt-3">* É necessário estar logado para trocar sua senha.</p>
                <div class="title is-3 mt-5">Alteração de email</div>
                <p class="description mt-3">
                  Atualmente não se é possível fazer a alteração de e-mail cadastrado.
                </p>
                <div class="title is-3 mt-5">Deslogado do site</div>
                <p class="description mt-3">
                  Por medida de segurança, após alguns minutos sem efetuar nenhuma ação no jogo, a
                  conta é deslogada automaticamente do mesmo.
                </p>
                <div class="title is-3 mt-5">Acesso Negado</div>
                <p class="description mt-3">
                  Vários podem ser os motivos, como tentar entrar numa equipe com a senha errada,
                  entrar num fórum que tenha ultrapassado o limite de mensagens, efetuar alguma ação
                  no jogo que não seja legal ou quando está algum tempo sem mexer no site, aparecerá
                  a mensagem de acesso negado e você precisará dar um F5 ou recarregar o site
                  clicando em algum outro link do menu.
                </p>
                <div class="title is-3 mt-5">Cancelar Conta</div>
                <p class="description mt-3">
                  Caso você deseje cancelar sua conta você deve enviar um email com o assunto “Quero
                  cancelar minha conta” e na mensagem digitar seu email e o motivo do cancelamento.
                </p>
                <p class="description mt-3"><b>Envie email para:</b> {{ contact }}</p>
                <p class="description"><b>Assunto:</b> Quero cancelar minha conta</p>
                <p class="description"><b>Mensagem:</b> Motivo do cancelamento</p>
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
              <div v-if="selectedMenu === 'Denúncias'">
                <div class="title is-3">Hackers</div>
                <p class="description">
                  Sempre estamos de olho, para que possamos detectar programas ilegais que
                  atrapalham o bom andamento do jogo e servidores. Mas, certas vezes as nossas
                  ferramentas de segurança não detectam a utilização indevida de alguns usuários.
                  Por isso, as imagens ou vídeos de utilização de programas ilegais por maus
                  jogadores são fundamentais para a punição dos infratores. Quando você denúncia
                  determinado usuário, nós o monitoramos e se for o caso, ele será punido conforme a
                  nossa política. O sigilo da sua identidade será preservado.
                </p>
                <p class="description mt-3">
                  Jamais puniremos algum jogador sem provas, por isto pedimos que os usuários que
                  encontrem jogadores ilegais ou programas indevidos que nos comuniquem. Mas não
                  faça denúncias falsas, pois caso isto aconteça, o remetente poderá ser punido.
                </p>
                <p class="description mt-3"><b>Envie email para:</b> {{ contact }}</p>
                <p class="description"><b>Assunto:</b> Denúncia de hackers</p>
                <p class="description">
                  <b>Mensagem:</b> Contendo os seguintes itens: (Nome do player do acusado e as
                  provas)
                </p>
                <div class="title is-3 mt-5">Programas ilegais</div>
                <p class="description">
                  Certas pessoas criam alguns programas que prometem aumentar as habilidades,
                  leveis, vitórias e afins. Geralmente é uma forma de enganar os jogadores, pois
                  estes programas os prejudicam instalando vírus e coletando informações que estão
                  armazenadas no computador dos jogadores. Solicitamos a máxima atenção com anúncios
                  enganosos de programas ilegais oferecidos na internet porque muito deles são vírus
                  ou keyloggers disfarçados e que podem por em risco a segurança de seu computador.
                </p>
                <p class="description mt-3">
                  Todas as solicitações envolvendo denúncias de propagandas de programas ilegais e
                  servidores privados deverão vir acompanhadas de imagens sem qualquer edição e em
                  boa resolução para que sejam aceitas por nós e para que possamos efetuar as
                  devidas punições aos transgressores. Para enviar uma solicitação à Central de
                  Suporte, preencha os campos abaixo.
                </p>
                <p class="description mt-3"><b>Envie email para:</b> {{ contact }}</p>
                <p class="description"><b>Assunto:</b> Programas Ilegais</p>
                <p class="description">
                  <b>Mensagem:</b> Contendo os seguintes itens: (Site do Programa, Foto do Programa
                  e Informações úteis)
                </p>
                <div class="title is-3 mt-5">Ofensas no jogo</div>
                <p class="description">
                  Qualquer mensagem que tire a integridade de um jogador, seja ela com xingamento,
                  agressiva ou ameaçadora não é permitido e são considerados atitudes de má conduta.
                  Além de ser extremamente desagradável. Todos devem respeitar as pessoas para que o
                  {{ name }} sempre seja um lugar de divertimento.
                </p>
                <p class="description mt-3">
                  Caso alguém seja ofendido por outro jogador ou presenciar uma atitude ofensiva
                  entre outros personagens, deve reportar esse comportamento:
                </p>
                <p class="description mt-3"><b>Envie email para:</b> {{ contact }}</p>
                <p class="description"><b>Assunto:</b> Ofensas no {{ name }}</p>
                <p class="description">
                  <b>Mensagem:</b> Contendo os seguintes itens: (Nome do jogador que te ofendeu,
                  Prova da ofensa)
                </p>
                <div class="title is-3 mt-5">Falsos GM's</div>
                <p class="description">
                  Há pessoas mal intencionadas que se passam por gm´s numa tentativa de enganar
                  outros jogadores. Essa atitude não é aceitável, garantimos que nenhum GM irá pedir
                  a senha de cadastro, pois possuímos acesso à estas informações através de nossos
                  banco de dados.
                </p>
                <p class="description mt-3">
                  Caso um jogador receba mensagens de falsos GM´s, devem nos reportar para que o
                  mesmo seja advertido. Se possível, pedidos que anexem printscreen para provar.
                </p>
                <p class="description mt-3"><b>Envie email para:</b> {{ contact }}</p>
                <p class="description"><b>Assunto:</b> Falsos GM's</p>
                <p class="description">
                  <b>Mensagem:</b> Contendo os seguintes itens: (Nome do jogador que tentou te
                  enganar , Prova)
                </p>
              </div>
              <div v-if="selectedMenu === 'Bugs'">
                <div class="title is-3">Bugs</div>
                <p class="description">
                  Qualquer tipo de erro que ocorrer dentro do jogo poderá ser reportado através
                  desta área. Sempre que possível, enviar printscreen para facilitar os
                  procedimentos.
                </p>
                <p class="description mt-3"><b>Envie email para:</b> {{ contact }}</p>
                <p class="description"><b>Assunto:</b> Bugs</p>
                <p class="description">
                  <b>Mensagem:</b> Contendo os seguintes itens: (Nome do seu player, E-mail da sua
                  conta, Como aconteceu o Bug, Printscreen do Bug)
                </p>
                <div class="title is-3 mt-5">Travados no Mapa</div>
                <p class="description">
                  Caso você esteja travado no mapa não precisa entrar em pânico, nos envie um email
                  seguindo as instruções abaixo:
                </p>
                <p class="description mt-3"><b>Envie email para:</b> {{ contact }}</p>
                <p class="description"><b>Assunto:</b> Travado no Mapa</p>
                <p class="description">
                  <b>Mensagem:</b> Contendo os seguintes itens: (Nome do seu player e E-mail da sua
                  conta)
                </p>
                <div class="title is-3 mt-5">Travado em Luta</div>
                <p class="description">
                  Caso você esteja travado em luta (Npc ou no Mapa) não precisa entrar em pânico,
                  nos envie um email seguindo as instruções abaixo:
                </p>
                <p class="description mt-3"><b>Envie email para:</b> {{ contact }}</p>
                <p class="description"><b>Assunto:</b> Travado em luta</p>
                <p class="description">
                  <b>Mensagem:</b> Contendo os seguintes itens: (Nome do seu player e Email da sua
                  conta)
                </p>
              </div>
              <div v-if="selectedMenu === 'VIP'">
                <div class="title is-3">Como comprar?</div>
                <p class="description">
                  Os créditos podem ser comprados pelos sistemas de compra do Pagseguro e do Paypal.
                </p>
                <div class="title is-3 mt-5">Validade dos créditos</div>
                <p class="description">
                  Os créditos não possuem validade, os mesmos só desaparecem quando você resolve
                  gasta-los em nosso jogo.
                </p>
                <div class="title is-3 mt-5">Tempo de liberação</div>
                <p class="description">
                  Todos os créditos adquiridos só serão liberados após confirmação de pagamento, no
                  caso de depósitos e cartões de créditos o limite é de 24 a 48 horas, no caso de
                  boletos somente após a confirmação do pagamento que pode levar até 4 dias.
                </p>
                <div class="title is-3 mt-5">Não recebi meu vip</div>
                <p class="description">
                  O {{ name }} é muito grato por todo dinheiro por vocês gasto nele, e JAMAIS
                  prestaria um serviço para enganar qualquer um de vocês, ou seja, se você depositou
                  seu vip, nós queremos que você use seus créditos o QUANTO ANTES.
                </p>
                <p class="description mt-3 has-text-weight-bold">
                  Compradores pelo PagSeguro e Paypal
                </p>
                <p class="description mt-3">
                  Vocês que pagam pelo PAGSEGURO não precisam enviar nenhum email para o
                  {{ contact }}, porque o PagSeguro nos presta esse serviço.
                </p>
                <p class="description mt-3">
                  Quando você logado em sua conta compra pelo PagSeguro, ele nos envia a sua
                  identificação de usuário e por ela nós adicionamos seu vip.
                </p>
                <p class="description mt-3">
                  Portanto prestem atenção: Se o crédito é para você, compre logado em sua conta!
                </p>
                <p class="description mt-3 has-text-weight-bold">
                  Aviso aos que não receberam seus créditos ainda.
                </p>
                <p class="description mt-3">
                  Primeiramente quero pedir desculpa pelo atraso e também pedir que por favor leiam
                  o texto acima e nos envie um email para:
                </p>
                <p class="description mt-3"><b>Envie email para:</b> {{ contact }}</p>
                <p class="description"><b>Assunto:</b> Não recebi meu vip ainda</p>
                <p class="description">
                  <b>Mensagem:</b> Contendo os seguintes dados (Seu email do jogo, Printscreen do
                  seu comprovante ou todos os dados possíveis do pagamento)
                </p>
              </div>
              <div v-if="selectedMenu === 'Parcerias'">
                <div class="title is-3">Parcerias</div>
                <p class="description">
                  Se você possui um site e quer ser parceiro do {{ name }}, mande-nos um email com
                  as informações de seu site para que possamos analisar:
                </p>
                <p class="description mt-3"><b>Envie email para:</b> {{ contact }}</p>
                <p class="description"><b>Assunto:</b> Parceria</p>
                <p class="description">
                  <b>Mensagem:</b> Contendo os seguintes itens (Qtd de visitas diárias, Url do Site
                  e Url do Botão do site)
                </p>
                <div class="title is-3 mt-5">Links Patrocinados</div>
                <p class="description">
                  Para os interessados em divulgar seu site em nosso jogo, nosso números são bem
                  expressivos e vão poder alavancar boas visitas e oportunidades para seu site.
                </p>
                <p class="description mt-3">
                  Nos envie um email com os seguintes dados para que possamos retornar com uma
                  proposta de anúncio para 30 dias:
                </p>
                <p class="description mt-3"><b>Envie email para:</b> {{ contact }}</p>
                <p class="description"><b>Assunto:</b> Link Patrocinado</p>
                <p class="description">
                  <b>Mensagem:</b> Contendo os seguintes itens: (Url do Site e Seu Email)
                </p>
                <div class="title is-3 mt-5">Patrocinadores</div>
                <p class="description">
                  Caso você possua um site ou uma empresa que tenha interesse em divulgar seus
                  produtos patrocinando nosso jogo e com isso ganhar visibilidade e mais clientes,
                  siga as instruções abaixo:
                </p>
                <p class="description mt-3"><b>Envie email para:</b> {{ contact }}</p>
                <p class="description"><b>Assunto:</b> Patrocinadores</p>
                <p class="description">
                  <b>Mensagem:</b> Contendo os seguintes itens: (Url do Site , Seu Email e Sua
                  proposta)
                </p>
              </div>
              <div v-if="selectedMenu === 'Colaboração'">
                <div class="title is-3">Recado para a STAFF</div>
                <p class="description">
                  Esse espaço é reservado para que você nos envie um email de critica, elogio ou
                  alguma sugestão ao site.
                </p>
                <p class="description mt-3">
                  Comentários, criticas e elogios inteligentes são muito bem vindo para nossa Equipe
                  e agradecemos desde já aos que nos ajudam com sua valorosa opinião.
                </p>
                <p class="description mt-3"><b>Envie email para:</b> {{ contact }}</p>
                <p class="description"><b>Assunto:</b> Sugestão , Critica ou Elogio</p>
                <p class="description">
                  <b>Mensagem:</b> Contendo os seguintes itens (Seu nome e sua mensagem)
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
  { key: 'Suporte Online', label: 'Suporte Online' },
  { key: 'Contas', label: 'Contas' },
  { key: 'Denúncias', label: 'Denúncias' },
  { key: 'Bugs', label: 'Bugs' },
  { key: 'VIP', label: 'VIP' },
  { key: 'Parcerias', label: 'Parcerias' },
  { key: 'Colaboração', label: 'Colaboração' },
];

const selectedMenu = ref<string>('Suporte Online');

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
