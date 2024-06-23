<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">FlexBox - Col</div>
      <q-separator class="q-my-md" />
      <div class="bg-yellow">
        <div class="row q-gutter-x-md">
          <div v-for="n in 4" :key="n" class="square">square</div>
        </div>
        <div class="q-gutter-y-md">
          <div v-for="n in 4" :key="n" class="bg-primary">square</div>
        </div>
      </div>
      <q-separator spaced />
      <div class="bg-yellow">
        <div class="row q-col-gutter-sm items-center">
          <div class="col-3 col-sm-6 col-md-4 col-lg-3" v-for="n in 8" :key="n">
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-subtitle2 text-center">
                  Title
                </div>
              </q-img>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <section class="q-mb-xl">
      <div class="text-h4">FlexBox - Col</div>
      <q-separator class="q-my-md" />
      <div class="row">
        <div class="border col-1">col-1</div>
        <div class="border col-8">col-8</div>
        <div class="border col-2">col-2</div>
        <div class="border col-1">col-1</div>
        <div class="border col-1">col-1</div>
      </div>
      <q-separator class="q-my-md" />
      <div class="row">
        <div class="border col">col-1</div>
        <div class="border col">col-8</div>
        <div class="border col">col-2</div>
        <div class="border col">col-1</div>
        <div class="border col">col-1</div>
      </div>
      <q-separator class="q-my-md" />
      <div class="row">
        <div class="border col-auto">col-1</div>
        <div class="border col">col-8</div>
        <div class="border col">col-2</div>
        <div class="border col">col-1</div>
        <div class="border col">col-1</div>
      </div>
      <q-separator class="q-my-md" />
      <div class="row">
        <div class="border col-grow">col-1</div>
        <div class="border col">col-8</div>
        <div class="border col">col-2</div>
        <div class="border col">col-1</div>
        <div class="border col">col-1</div>
      </div>
      <q-separator class="q-my-md" />
      <div class="row no-wrap">
        <div class="border col-auto">col-autocol-autocol-autocol-auto</div>
        <div class="border col-shrink">
          col-shrinkcol-shrinkcol-shrinkcol-shrink
        </div>
        <div class="border col">col-2</div>
        <div class="border col">col-1</div>
        <div class="border col">col-1</div>
      </div>
    </section>
    <section class="q-mb-xl"></section>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
.square {
  width: 80px;
  height: 80px;
  background-color: $primary;
  border: 1px solid #000;
  display: inline-block;
  font-weight: 900;
  color: #fff;
}
.border {
  border: 1px solid #000;
  padding: 8px;
}
</style>
