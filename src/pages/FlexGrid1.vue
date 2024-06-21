<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Toolbar</div>
      <q-separator class="q-my-md" />
      <div
        class="row items-center justify-between q-px-sm bg-grey"
        style="min-height: 50px"
      >
        <div class="row items-center">
          <q-btn icon="menu" flat dense round color="white" />
          <span class="text-h6 text-weight-bold text-white">Quaser App</span>
        </div>
        <div class="q-ml-a">
          <q-btn icon="light-mode" flat dense round color="white" />
        </div>
      </div>
      <q-separator class="q-my-md" />
      <div
        class="row bg-grey q-px-sm items-center justify-between"
        style="min-height: 50px"
      >
        <div class="row items-center">
          <q-btn icon="menu" flat dense round color="white" />
        </div>
        <span class="text-h6 text-weight-bold text-white">Quaser App</span>
        <div class="q-ml-a">
          <q-btn icon="light-mode" flat dense round color="white" />
        </div>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">FlexBox - Row</div>
      <q-separator class="q-my-md" />
      <div class="row inline bg-yellow">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">FlexBox - Column</div>
      <q-separator class="q-my-md" />
      <div class="column">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
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
</style>
