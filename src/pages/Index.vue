<template>
  <q-layout view="lph Lpr lFf">
    <q-header class="bg-transparent q-py-lg">
      <q-toolbar>
        <q-img src="logo.svg" contain :style="this.$q.screen.width > 1100 ? {'max-width': '250px', position: 'absolute', 'margin-left': '20px'} : {'max-width': '150px', 'margin-left': '10px'}" />
        <div class="full-width text-center" v-if="this.$q.screen.width > 1023">
          <q-btn flat style="color: white" label="Minha História" @click="$router.push({ path: '/historia' })" />
          <q-btn flat style="color: white" label="Penteados" @click="$router.push({ path: '/penteados' })" />
          <q-btn flat style="color: white" label="Pré-Agendamento" @click="$router.push({ path: '/pre-agendamento' })" />
          <q-btn flat style="color: white" label="Blog" @click="$router.push({ path: '/blog' })" />
        </div>
        <q-space v-if="this.$q.screen.width <= 1023" />
        <q-btn flat round style="color: white; margin-right: 10px" icon="menu" @click="drawer = !drawer" v-if="this.$q.screen.width <= 1023" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="this.$q.screen.width <= 1023"
      side="right"
      v-model="drawer"
      elevated
      content-class="text-primary bg-primary q-py-lg"
    >
      <q-toolbar class="absolute">
        <q-space />
        <q-btn flat round style="color: white; margin-right: 10px" icon="close" @click="drawer = !drawer" />
      </q-toolbar>
      <div class="full-height flex justify-center column">
        <div>
          <div class="cursor-pointer" @click="$router.push({ path: '/historia' })">
            <p class="text-uppercase text-white q-px-md text-h6">Minha História</p>
            <p class="text-white q-px-md">Conheça um pouquinho da minha trajetória até aqui</p>
          </div>
          <div class="q-mt-xl cursor-pointer" @click="$router.push({ path: '/penteados' })">
            <p class="text-uppercase text-white q-px-md text-h6">Penteados</p>
            <p class="text-white q-px-md">Vou te contar uns segredinhos que podem melhorar suas madeixas</p>
          </div>
          <div class="q-mt-xl cursor-pointer">
            <p class="text-uppercase text-white q-px-md text-h6" @click="$router.push({ path: '/pre-agendamento' })">Pré-Agendamento</p>
            <p class="text-white q-px-md">Quer agendar um atendimento comigo? Faça o pré-agendamento por aqui</p>
          </div>
          <div class="q-mt-xl cursor-pointer">
            <p class="text-uppercase text-white q-px-md text-h6" @click="$router.push({ path: '/blog' })">Blog</p>
            <p class="text-white q-px-md">Vou te contar uns segredinhos que podem melhorar suas madeixas</p>
          </div>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <q-page>

        <!-- INÍCIO (WEB)-->
        <div class="row" style="margin-top: -98px;" v-if="this.$q.screen.width > 1023">
          <div class="col-6 column flex justify-center items-center" style="background-color: #1a2f34;">
            <q-img src="principal/saudacao.svg" contain style="max-width: 400px; width: 60%" />
            <div class="text-white" style="max-width: 400px; width: 60%; margin-left: 100px; margin-top: 40px">
              Sejam muito bem-vindos ao meu website. Já preparem o café e venham conhecer um pouquinho da minha história e de como tudo surgiu
            </div>
          </div>
          <!-- <div class="col-6">
            <q-img src="principal/banner.jpeg" :ratio="1" style="filter: grayscale(.9);"></q-img>
          </div> -->
          <video autoplay loop muted class="col-6" style="filter: grayscale(.4); object-fit: cover; max-height: 700px">
            <source src="principal/banner_video.webm" type="video/webm">
            <!-- <source src="principal/banner_video.mp4" type="video/mp4"> -->
          </video>
        </div>

        <!-- INÍCIO (MOBILE)-->
        <div style="margin-top: -98px;" v-if="this.$q.screen.width <= 1023">
          <div class="col-12">
            <!-- <q-img src="principal/banner.jpeg" style="filter: grayscale(.9);" class="shadow-10" /> -->
            <video autoplay loop muted playsinline style="filter: grayscale(.4); object-fit: cover;" class="full-width" >
              <source src="principal/banner_video.webm" type="video/webm">
              <source src="principal/banner_video.mp4" type="video/mp4">
            </video>
            <q-img src="principal/saudacao.svg" contain style="position: absolute; top: 290px; left: 10%; width: 80%" />
          </div>
        </div>
        <div class="text-white bg-primary q-pa-xl" style="margin-top: -10px" v-if="this.$q.screen.width <= 1023">
          Sejam muito bem-vindos ao meu website. Já preparem o café e venham conhecer um pouquinho da minha história e de como tudo surgiu
        </div>

        <!-- INSTAGRAM -->
        <div class="row bg-white q-pa-xl column flex items-center">
          <p :class="this.$q.screen.width > 1023 ? 'text-h3 font-plantin' : 'text-h5 font-plantin'">@tranceumdesejo</p>
          <div class="row q-col-gutter-xs q-mt-sm" style="max-width: 700px">
            <div class="col-4" v-for="foto in fotosInstagram" :key="foto.url">
              <q-card>
                <img :src="foto.thumbnailUrl">
              </q-card>
            </div>
          </div>
          <q-btn class="q-mt-lg" flat style="color: #1a2f34" label="Vem ver mais no Instagram" icon-right="fab fa-instagram" type="a" href="https://www.instagram.com/tranceumdesejo/" target="__blank"/>
        </div>

        <!-- NÚMEROS EXPRESSIVOS -->
        <div :class="this.$q.screen.width > 1023 ? 'row bg-primary q-pa-xl text-white shadow-10' : 'row bg-primary q-pa-md text-white shadow-10'">
          <div class="col-4 text-center">
            <p class="text-subtitle1" style="line-height: 1rem">atendimentos realizados</p>
            <p :class="this.$q.screen.width > 1023 ? 'text-h1 font-pacifico' : 'text-h4 font-pacifico'" style="margin: -25px 0 -5px">+600</p>
          </div>
          <div class="col-4 text-center">
            <p class="text-subtitle1" style="line-height: 1rem">noivas atendidas</p>
            <p :class="this.$q.screen.width > 1023 ? 'text-h1 font-pacifico' : 'text-h4 font-pacifico'" style="margin: -25px 0 -5px">+100</p>
          </div>
          <div class="col-4 text-center">
            <p class="text-subtitle1" style="line-height: 1rem">cursos ministrados</p>
            <p :class="this.$q.screen.width > 1023 ? 'text-h1 font-pacifico' : 'text-h4 font-pacifico'" style="margin: -25px 0 -5px">+10</p>
          </div>
        </div>

        <!-- RODAPÉ -->
        <div class="row justify-center q-px-md" style="width: 100%;">
          <div class="flex row q-pb-xl q-col-gutter-lg" style="max-width: 1140px; width: 100%; padding: 100px 0;">
            <div class="col-lg-5 col-md-5 q-mb-xl">
              <q-img src="logo.svg" contain style="max-width: 250px;" />
              <p class="q-mt-md" style="font-weight: 400; font-size: 0.75rem; line-height: 26.16px; color: #8C92A2; max-width: 303px;">
                Meu nome é Emily Brandão e, caso não conheça meu trabalho,
                meu instragram se chama Trance Um Desejo (@tranceumdesejo),
                para que você possa conhecer e se sentir mais segura(o)
                quanto ao meu atendimento.
              </p>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 q-mb-xl">
              <p style="font-weight: 600; font-size: 1.125rem; line-height: 27px;" class="q-mb-lg">Institucional</p>
              <p style="font-weight: 400; font-size: 0.94rem; line-height: 42px; color: #8C92A2; cursor: pointer;" @click="$router.push({ path: '/historia' })" >História</p>
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
      fotosInstagram: '',
      drawer: false
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
    this.$q.addressbarColor.set('#1a2f34')
    try {
      const photos = await this.fetchInstagramPhotos('https://www.instagram.com/tranceumdesejo/')
      this.fotosInstagram = photos
    } catch (e) {
      console.error('Fetching Instagram photos failed', e)
    }
  }
}
</script>
