<template>
  <TopHeader></TopHeader>
  <div class="min-h-[calc(100vh-60px)] bg-checkerboard">
    <router-view></router-view>
  </div>
</template>

<script setup>
import TopHeader from '@/components/nav/TopHeader.vue'


</script>

<style>
</style>
