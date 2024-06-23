<template>
  <q-page padding>
    <section class="row q-col-gutter-x-xl">
      <div class="col-auto p-py-md">
        <q-avatar size="150px">
          <q-img src="/src/assets/logo.jpg" />
        </q-avatar>
      </div>
      <div class="col-grow column justify-between">
        <div class="row items-center">
          <span class="text-h6 text-weight-bold">name</span>
          <q-space></q-space>
          <div class="q-gutter-x-sm">
            <q-btn label="프로필 편집"></q-btn>
            <q-btn flat icon="more_horiz"></q-btn>
          </div>
        </div>
        <div class="q-gutter-x-lg">
          <span>게시물 123</span>
          <span>팔로워 123</span>
          <span>팔로우 123</span>
        </div>
        <div>자기소개<br />어쩌고<br />저쩌고</div>
      </div>
    </section>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
.q-page {
  background: #fafafa;
}
</style>
