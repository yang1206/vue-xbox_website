<script lang="ts" setup>
import useImageUrl from '@/composables/useImageUrl'
import type Option from './type'

const options = ref<Option[]>([
  {
    src: useImageUrl('banner_1'),
    xlSrc: useImageUrl('banner_1'),
    mdSrc: useImageUrl('banner_1_md'),
    smSrc: useImageUrl('banner_1_sm'),
    textAling: 'right',
    text: {
      title: 'Call of Duty®: \n Modern Warfare® II',
      des: 'Welcome to the new era of Call of Duty',
      button: 'GET IT NOW',
    },
  },
  {
    src: useImageUrl('banner_2'),
    xlSrc: useImageUrl('banner_2'),
    mdSrc: useImageUrl('banner_2_md'),
    smSrc: useImageUrl('banner_2_sm'),
    textAling: 'left',
    text: {
      title: 'Xbox Series S + \n  Xbox Game Pass',
      des: 'Better together.',
      button: 'LEARN MORE',
    },
  },
  {
    src: useImageUrl('banner_3'),
    xlSrc: useImageUrl('banner_3'),
    mdSrc: useImageUrl('banner_3_md'),
    smSrc: useImageUrl('banner_3_sm'),
    textAling: 'right',
    text: {
      title: 'Xbox & Bethesda \n Anniversary \n Collection',
      des: 'Celebrate the joy of gaming with franchise favorites',
      button: 'SHOP NOW',
    },
  },
])
</script>

<template>
  <Carousel
    xl-h-160
    lg-h-118
    sm-h-240
    h-210
    :options="options"
    :arrows="true"
    :autoplay="true"
    :dots="true"
    :interval="5000"
  />
</template>

<style scoped></style>
