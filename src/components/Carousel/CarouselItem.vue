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
  <div relative w-full xl-h-134 sm-h-260 overflow-hidden>
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
      class="absolute inset-0 w-88/100 h-full m-center"
    >
      <div
        xl-w-126
        sm-w-full
        absolute
        translate-y
        text-white
        z-10
        class="xl-top-4/9 sm-bottom-10"
        :class="option.textAling === 'left' ? 'xl-left-0' : 'xl-right-0'"
      >
        <div
          class="sm-flex-center xl-block flex-col sm-text-center xl-text-left"
        >
          <h2 xl-text-11 sm-text-9 font-600 mt-2 xl-text-trap>
            {{ option.text?.title }}
          </h2>
          <p xl-text-9 sm-text-7 m="y-4">{{ option.text?.des }}</p>
          <Button>{{ option.text?.button }}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
