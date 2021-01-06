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
            <span class="text-h4 text-primary font-plantin">História</span>
          </div>
        </q-toolbar>
      </div>
    </q-header>
    <q-page-container>
      <q-page>

        <!-- HISTÓRIA -->
        <div class="row bg-white column flex items-center">
          <div class="q-pa-lg" style="max-width: 800px;">
            Meu nome é Emily Brandão e, caso não conheça meu trabalho, meu instragram se chama Trance Um Desejo (@tranceumdesejo), para que você possa conhecer e se sentir mais segura(o) quanto ao meu atendimento.

          </div>
          <q-card>
            <q-img src="historia/foto1.png" style="width: 300px;"/>
          </q-card>
          <div class="q-pa-lg" style="max-width: 800px;">
            É importante saber que eu respondo apenas de segunda à sexta feira (exceto feriados), entre 10h e 18h, quando NÃO estou realizando
            atendimentos ou cursos (podendo a resposta demorar alguns dias). Saiba que eu respondo por ordem de mensagem e, sendo assim, após o seu primeiro contato, qualquer mensagem posterior fará com que você volte ao final da fila.

            Trabalho em parceria com duas maquiadoras e atendo apenas em dois studios (portanto, NÃO faço atendimento à domicílio):
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
