<script lang="ts" setup>
const icons = [
  { icon: 'gp', name: 'Game Pass' },
  {
    icon: 'games',
    name: 'GAMES',
  },
  {
    icon: 'consoles',
    name: 'CONSOLES',
  },
  {
    icon: 'accessories',
    name: 'ACCESSORIES',
  },
  { icon: 'play', name: 'PLAY' },
  { icon: 'sign', name: 'SIGN IN' },
]
</script>

<template>
  <div w-full bg-white>
    <div
      class="max-w-7/10"
      m-center
      grid
      xl-grid-cols-6
      md-grid-cols-6
      grid-cols-3
      xl-gap-0
      md-gap-30
      text-center
    >
      <a
        v-for="i in icons"
        :key="i.name"
        :href="i.name"
        pt-7
        pb-10
        w-full
        flex
        flex-col
        flex-center
        cursor-pointer
        class="icon"
      >
        <SvgIcon md-w-20 md-h-18 w-30 h-24 :icon-class="i.icon" />
        <p
          class="text-#107c10 text"
          whitespace-nowrap
          relative
          text-16px
          font-bold
        >
          {{ i.name }}
        </p>
      </a>
    </div>
  </div>
</template>

<style scoped>
.text {
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  transition-delay: 0;
  transition-property: all;
  outline-offset: -3px;
  letter-spacing: 0;
}

.text::before {
  background: #107c10;
  box-shadow: 0 4px 8px 0 transparent;
  content: '';
  display: none;
  height: 3px;
  position: absolute;
  width: 100%;
  bottom: -3px;
}

.icon:hover .text:before {
  display: block;
}
</style>
