<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Brand Colors</div>
      <q-separator class="q-my-md" />
      <div class="q-gutter-sm">
        <div class="q-pa-xs rounded-borders bg-primary">primary</div>
        <div class="q-pa-xs rounded-borders bg-secondary">secondary</div>
        <div class="q-pa-xs rounded-borders bg-accent">accent</div>
        <div class="q-pa-xs rounded-borders bg-dark">dark</div>
        <div class="q-pa-xs rounded-borders bg-positive">positive</div>
        <div class="q-pa-xs rounded-borders bg-negative">negative</div>
        <div class="q-pa-xs rounded-borders bg-info">info</div>
        <div class="q-pa-xs rounded-borders bg-warning">warning</div>
        <div class="q-pa-xs rounded-borders bg-orange-11">orange-11</div>
        <div class="q-pa-xs rounded-borders bg-yellow-2">yellow-4</div>
        <div class="q-pa-xs rounded-borders bg-deep-orange-10">
          deep-orange-10
        </div>
      </div>
      <p>Variables</p>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Brand Colors</div>
      <q-separator class="q-my-md" />
      <div class="q-pa-md q-gutter-sm">
        <q-btn color="white" text-color="black" label="Standard" />
        <q-btn color="primary" label="Primary" />
        <q-btn color="secondary" label="Secondary" />
        <q-btn color="amber" glossy label="Amber" />
        <q-btn color="brown-5" label="Brown 5" />
        <q-btn color="deep-orange" glossy label="Deep Orange" />
        <q-btn color="purple" label="Purple" />
        <q-btn color="black" label="Black" />
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";

const $q = useQuasar();
console.log($q.dark.isActive);
</script>

<style lang="scss" scoped>
p {
  color: $red-2;
}

.bg-warning {
  // color: $red;
}
</style>
