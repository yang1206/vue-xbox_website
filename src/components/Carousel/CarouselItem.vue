<script lang="ts" setup>
import type Option from './type'
withDefaults(
  defineProps<{
    option: Option
    showText?: boolean
    arrows: 'prev' | 'next'
  }>(),
  {
    showText: true,
    arrows: 'next',
  }
)
</script>

<template>
  <div relative w-full h-134 overflow-hidden>
    <picture h-full absolute inset-0 alt="">
      <source :srcset="option.xlSrc" media="(min-width:1084px)" />
      <source :srcset="option.mdSrc" media="(min-width:768px)" />
      <source :srcset="option.smSrc" media="(min-width:0px)" />
      <img :src="option.src" alt="" />
    </picture>
    <div
      v-if="showText"
      :class="arrows === 'prev' ? 'fade_left' : 'fade_right'"
      :style="{
        'animation-name': arrows === 'prev' ? 'fade_left' : 'fade-right',
      }"
      class="absolute inset-0 w-88/100 h-full m-center fade_block"
    >
      <div
        w-126
        h-60
        absolute
        translate-y
        text-white
        class="top-1/2"
        :class="option.textAling === 'left' ? 'left-0' : 'right-0'"
      >
        <h2 text-10 font-600 mt-2 style="white-space: pre-line">
          {{ option.text?.title }}
        </h2>
        <p text-9 m="y-4">{{ option.text?.des }}</p>
        <Button>{{ option.text?.button }}</Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
