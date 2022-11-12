<script lang="ts" setup></script>

<template>
  <div w-full bg-white>
    <div
      style="max-width: calc(1600px + 10%)"
      p="x-1/20"
      m-center
      grid
      xl-grid-cols-6
      gap-0
      text-center
    >
      <div v-for="i in 6" :key="i" w-full flex flex-col flex-center>
        <SvgIcon w-24 h-22 icon-class="gp" />
        <p>Game Pass</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
