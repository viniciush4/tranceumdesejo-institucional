<template>
  <q-layout view="lph Lpr lFf">
    <q-header class="row justify-center bg-transparent">
      <div class="q-py-lg q-px-lg col" style="max-width: 800px;">
        <q-toolbar class="q-pa-none">
          <q-btn
            flat
            round
            dense
            icon="arrow_back"
            color="primary"
            @click="$router.go(-1)"
          />
          <div class="full-width q-pt-sm text-center">
            <span class="text-h4 text-primary font-plantin">Minha História</span>
          </div>
        </q-toolbar>
      </div>
    </q-header>
    <q-page-container>
      <q-page>

        <!-- HISTÓRIA -->
        <div class="row bg-white column flex items-center">
          <div class="q-pa-lg" style="max-width: 800px;">
            <q-img
              src="historia/1.jpeg"
              class="shadow-10"
              style="width: 300px; border-radius: 4px; float: left; margin: 0 20px 20px 0;"
            />
            <p>
              A vida é mesmo uma caixinha de surpresas. Se eu contar para
              vocês que nunca, em momento algum da minha vida, eu pensei em
              ser penteadista, vocês acreditariam?
            </p>
            <p>
              Pois foi exatamente dessa forma que meu caminho foi trilhado,
              um tanto quanto aleatoriamente. Ou talvez me arriscaria dizer que,
              nas entrelinhas, me futuro sempre esteve ali.
            </p>
            <p>
              Para quem está chegando agora, seja muito bem vindo! Meu nome é
              Emily Brandão, fundadora da Trance um Desejo desde o ano de 2016.
              Sou bacharel em Direito pela Faculdade Brasileira - Multivix, bem
              como curso atualmente minha segunda graduação em Música com ênfase
              em composição musical pela Universidade Federal do Espírito Santo
              (UFES).
            </p>
            <p>
              Desde criança a arte sempre acompanhou cada passo que eu dava! Minhas
              paixões sempre foram desenhar, pintar, escrever, cantar, me aventurar
              no básico do violão e teclado, patinar, aprender línguas diferentes,
              bem como dançar uma música clássica vez ou outra, com o intuito de colocar
              para fora todos os meus sentimentos. Sim, a arte sempre me consumiu das
              maneiras mais encantadoras possíveis.
            </p>
            <p>
              Mas eu não fazia cabelos e nem via essa habilidade como uma profissão
              futura. Eu costumava trançar os minhas próprias madeixas e as das minhas
              colegas quando elas solicitavam (principalmente nos torneios de futsal e
              handebol), mas não era nada demais. Porque afinal, sabemos que mulheres e
              meninas ao redor do mundo, incluindo você, já se aventuram pelo menos uma vez,
              com toda certeza, a fazer um simples penteado no cabelo, seja um coque presinho
              básico, uma presilha lateral ou uma trança embutida. Essa também era a minha realidade.
            </p>
            <p>
              Até que um dia, cerca de um ano antes de eu terminar minha graduação e no meio da correria
              do tcc (onde eu já estava convicta que tinha me encontrado no direito internacional),
              minha melhor amiga me incentivou a criar um Instagram com algumas ideias de tranças, para
              que as pessoas pudessem se inspirar quando fossem pesquisar ideias. Notem gente, era apenas
              um portfólio de ideais.
            </p>
            <p>
              No início eu exitei, visto que pra mim, já tinha muita gente fazendo penteados maravilhosos
              por aí e eu mal seria notada na fila do pão. Entretanto, um tempo depois, eu cedi ao incentivo
              da minha amiga dona Amanda (que hoje faz belíssimas unhas no @amandasanails) e criei um perfil
              de penteados.
            </p>
            <p>
              Tempo vai tempo vem, pessoas foram demonstrando interesse, surgindo do absoluto nada e boom!
              Pensei comigo mesma: seria isso um sinal para eu abrir um negócio como prestadora de serviços?
              Talvez. Comecei então a atender a domicílio, ao mesmo tempo que terminava a faculdade de Direito,
              fazia estágio na Defensoria Pública e dava aulas particulares de inglês.
            </p>
            <p>
              Quando do dia para a noite eu estava lá, ainda sem entender o que viria à frente, recebendo convites
              e tendo oportunidades de parcerias maravilhosas de trabalho que se tornaram amizades para a vida inteira.
              Eu nem fazia ideia do quão grandiosa e bonita era essa profissão. Hoje em dia, quando me perguntam com o
              que eu trabalho, grito aos sete mares que eu trabalho com a felicidade das pessoas, colecionando sorrisos
              e momentos especiais.
            </p>
            <p>
              Ainda estou no início da minha caminhada e tenho muito, mas muito arroz com feijão para comer.
              Todavia sou imensamente grata a cada pequena conquista que o universo me proporcionou e proporciona
              diariamente. Grata a cada cliente que confiou nos meus dedinhos e me permitiu fazer parte de algum
              momento especial da vida delas! É tanto carinho que recebo que, no final do dia, ainda que o cansaço
              me consuma, a sensação de dever cumprido fala muito mais alto.
            </p>
            <p>
              Eu me joguei. E então quatro anos se passaram.
            </p>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data: function () {
    return {
    }
  }
}
</script>
