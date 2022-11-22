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
  <div relative w-full xl-h-160 lg-h-118 sm-h-240 h-210 overflow-hidden>
    <picture h-full absolute inset-0 alt="">
      <source :srcset="option.xlSrc" media="(min-width:1024px)" />
      <source :srcset="option.mdSrc" media="(min-width:768px)" />
      <source :srcset="option.smSrc" media="(min-width:0px)" />
      <img w-full lg-h-full object-cover :src="option.src" alt="" />
    </picture>
    <div
      v-if="showText"
      :class="arrows === 'prev' ? 'fade_left' : 'fade_right'"
      :style="{
        'animation-name': arrows === 'prev' ? 'fade_left' : 'fade-right',
      }"
      class="absolute inset-0 w-88/100 h-full m-center"
    >
      <div
        xl-w-126
        lg-w-126
        w-full
        absolute
        translate-y
        text-white
        z-10
        class="xl-top-4/9 sm-bottom-10 bottom-30"
        :class="option.textAling === 'left' ? 'left-0' : 'right-0'"
      >
        <div class="flex-center xl-block lg-block flex-col text-center">
          <h2 xl-text-11 sm-text-9 text-6 font-600 mt-2 xl-text-trap>
            {{ option.text?.title }}
          </h2>
          <p xl-text-9 sm-text-7 text-5 m="y-4">{{ option.text?.des }}</p>
          <Button>{{ option.text?.button }}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
