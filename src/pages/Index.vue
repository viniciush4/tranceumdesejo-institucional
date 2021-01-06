<template>
  <q-layout view="lph Lpr lFf">
    <q-header class="bg-transparent q-py-lg">
      <q-toolbar>
        <span class="text-h4 font-pacifico q-pl-lg" style="position: absolute; color: #c73d2a;">Trance um Desejo</span>
        <div class="full-width text-center">
          <q-btn flat style="color: white" label="História" @click="$router.push({ path: '/historia' })" />
          <q-btn flat style="color: white" label="Dicas para seu cabelinho" />
          <q-btn flat style="color: white" label="Pré-Agendamento" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>

        <!-- INÍCIO -->
        <div class="row" style="margin-top: -98px;">
          <div class="col-6 flex items-center" style="background-color: #1a2f34;">
            <div class="text-white" style="margin-left: 150px">
              <p class="text-h6 text-uppercase font-zurich q-mb-xl" style="line-height: 3rem;">Olá,</p>
              <p class="text-h1 font-plantin" style="line-height: 3rem;">Meninas</p>
              <p style="line-height: 3rem;">
                <span class="text-h1 font-plantin-bq text-italic">e</span>
                <span class="text-h1 font-plantin q-ml-lg">Meninos</span>
              </p>
              <div style="padding: 50px 100px 0 100px" >
                sejam muito bem-vindos ao meu website. Já preparem o café e venham conhecer um pouquinho da minha história e de como tudo surgiu
              </div>
            </div>
          </div>
          <div class="col-6">
            <q-img src="principal/banner.jpeg" :ratio="1" style="filter: grayscale(.9);"></q-img>
          </div>
        </div>

        <!-- INSTAGRAM -->
        <div class="row bg-white q-pa-xl column flex items-center">
          <p class="text-h3 font-plantin">@tranceumdesejo</p>
          <div class="row q-col-gutter-lg q-mt-sm" style="max-width: 700px">
            <div class="col-4" v-for="foto in fotosInstagram" :key="foto.url">
              <q-card>
                <img :src="foto.thumbnailUrl">
              </q-card>
            </div>
          </div>
          <q-btn class="q-mt-lg" flat style="color: #1a2f34" label="Vem ver mais no Instagram" icon-right="fab fa-instagram" type="a" href="https://www.instagram.com/tranceumdesejo/" target="__blank"/>
        </div>

        <!-- NÚMEROS EXPRESSIVOS -->
        <div class="row bg-primary q-pa-xl text-white shadow-10">
          <div class="col-4 text-center">
            <p class="text-subtitle1" style="line-height: 1rem">atendimentos realizados</p>
            <p class="text-h1 font-pacifico" style="margin: -25px 0 -5px">+600</p>
          </div>
          <div class="col-4 text-center">
            <p class="text-subtitle1" style="line-height: 1rem">noivas atendidas</p>
            <p class="text-h1 font-pacifico" style="margin: -25px 0 -5px">+50</p>
          </div>
          <div class="col-4 text-center">
            <p class="text-subtitle1" style="line-height: 1rem">cursos ministrados</p>
            <p class="text-h1 font-pacifico" style="margin: -25px 0 -5px">+10</p>
          </div>
        </div>

        <!-- RODAPÉ -->
        <div class="row justify-center q-px-md" style="width: 100%;">
          <div class="flex row q-pb-xl q-col-gutter-lg" style="max-width: 1140px; width: 100%; padding: 100px 0;">
            <div class="col-lg-5 col-md-5 q-mb-xl">
              <span class="text-h4 font-pacifico" style="color: #c73d2a;">Trance um Desejo</span>
              <p class="q-mt-lg" style="font-weight: 400; font-size: 0.75rem; line-height: 26.16px; color: #8C92A2; max-width: 303px;">
                Meu nome é Emily Brandão e, caso não conheça meu trabalho,
                meu instragram se chama Trance Um Desejo (@tranceumdesejo),
                para que você possa conhecer e se sentir mais segura(o)
                quanto ao meu atendimento.
              </p>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 q-mb-xl">
              <p style="font-weight: 600; font-size: 1.125rem; line-height: 27px;" class="q-mb-lg">Institucional</p>
              <p style="font-weight: 400; font-size: 0.94rem; line-height: 42px; color: #8C92A2; cursor: pointer;">História</p>
              <p style="font-weight: 400; font-size: 0.94rem; line-height: 42px; color: #8C92A2; cursor: pointer;">Serviços</p>
              <p style="font-weight: 400; font-size: 0.94rem; line-height: 42px; color: #8C92A2; cursor: pointer;">Pré-agendamento</p>
              <p style="font-weight: 400; font-size: 0.94rem; line-height: 42px; color: #8C92A2; cursor: pointer;">Orientações para o atendimento</p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <p style="font-weight: 600; font-size: 1.125rem; line-height: 27px;" class="q-mb-lg">Redes Sociais</p>
              <q-img src="rodape/facebook.svg" contain style="width: 23px; cursor: pointer;" @click="abrirLink('https://www.facebook.com/sendpay.oficial')"/>
              <q-img src="rodape/instagram.svg" contain style="width: 23px; cursor: pointer;" class="q-ml-lg" @click="abrirLink('https://www.instagram.com/sendpay.oficial/')"/>
              <q-img src="rodape/linkedin.svg" contain style="width: 23px" class="q-ml-lg"/>
              <div class="flex q-mb-sm" style="border-top: 1px solid rgba(218,238,255,0.7); padding-top: 35px; margin-top: 35px;">
                <q-img src="rodape/email.svg" width="20px" contain class="q-mr-md" />
                <span style="font-weight: 600; font-size: 1.125rem; line-height: 27px;">Email</span>
              </div>
              <span>contato@tranceumdesejo.com</span>
              <div class="flex q-mb-sm" style="border-top: 1px solid rgba(218,238,255,0.7); padding-top: 35px; margin-top: 35px;">
                <q-img src="rodape/whatsapp.svg" width="20px" contain class="q-mr-md" />
                <span style="font-weight: 600; font-size: 1.125rem; line-height: 27px;">Whatsapp</span>
              </div>
              <span>(27) 99934-8956</span>
            </div>
          </div>
        </div>
        <div class="row justify-center" style="width: 100%; border-top: 1px solid rgba(140,146,162,0.12); ">
          <div class="col-12 text-center q-py-lg">
            <span :style="this.$q.screen.width > 1023 ? {'font-weight': '600', 'font-size': '0.94rem', 'line-height': '22.5px', 'color': '#8C91A1'} : {'font-weight': '600', 'font-size': '11px', 'line-height': '22.5px', 'color': '#8C91A1'}">Trance um Desejo © 2021 . Todos os direitos reservados.</span>
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
      fotosInstagram: ''
    }
  },

  methods: {
    fetchInstagramPhotos: async function (accountUrl) {
      const instagramRegExp = new RegExp(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)
      const response = await this.$axios.get(accountUrl)
      const removePontoVirgula = (response.data.match(instagramRegExp)[1]).replace(';', '')
      const json = JSON.parse(removePontoVirgula)
      const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 6)
      const photos = edges.map(({ node }) => {
        return {
          url: `https://www.instagram.com/p/${node.shortcode}/`,
          thumbnailUrl: node.thumbnail_src,
          displayUrl: node.display_url,
          caption: node.edge_media_to_caption.edges[0].node.text
        }
      })
      return photos
    }
  },

  created: async function () {
    try {
      const photos = await this.fetchInstagramPhotos('https://www.instagram.com/tranceumdesejo/')
      this.fotosInstagram = photos
    } catch (e) {
      console.error('Fetching Instagram photos failed', e)
    }
  }
}
</script>
