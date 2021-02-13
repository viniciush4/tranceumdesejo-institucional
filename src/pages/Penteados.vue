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
            <span class="text-h4 text-primary font-plantin">Penteados</span>
          </div>
        </q-toolbar>
      </div>
    </q-header>
    <q-page-container>
      <q-page>

        <!-- PENTEADOS -->
        <div class="row bg-white column flex items-center">
          <div class="q-pa-lg" style="max-width: 800px;">

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
