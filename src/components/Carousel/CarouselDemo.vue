<script lang="ts" setup>
import useImageUrl from '@/composables/useImageUrl'
import type Option from './type'
const banner_1 = useImageUrl('banner_1', 'jpg')
const banner_1_md = useImageUrl('banner_1_md', 'jpg')
const banner_1_sm = useImageUrl('banner_1_sm', 'jpg')
const banner_2 = useImageUrl('banner_2', 'jpg')
const banner_2_md = useImageUrl('banner_2_md', 'jpg')
const banner_2_sm = useImageUrl('banner_2_sm', 'jpg')
const banner_3 = useImageUrl('banner_3', 'jpg')
const banner_3_md = useImageUrl('banner_3_md', 'jpg')
const banner_3_sm = useImageUrl('banner_3_sm', 'jpg')
const options = ref<Option[]>([
  {
    src: banner_1,
    xlSrc: banner_1,
    mdSrc: banner_1_md,
    smSrc: banner_1_sm,
    textAling: 'right',
    text: {
      title: 'Call of Duty®: \n Modern Warfare® II',
      des: 'Welcome to the new era of Call of Duty',
      button: 'GET IT NOW',
    },
  },
  {
    src: banner_2,
    xlSrc: banner_2,
    mdSrc: banner_2_md,
    smSrc: banner_2_sm,
    textAling: 'left',
    text: {
      title: 'Xbox Series S + \n  Xbox Game Pass',
      des: 'Better together.',
      button: 'LEARN MORE',
    },
  },
  {
    src: banner_3,
    xlSrc: banner_3,
    mdSrc: banner_3_md,
    smSrc: banner_3_sm,
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
    :options="options"
    :arrows="true"
    :autoplay="true"
    :dots="true"
    :interval="5000"
  />
</template>

<style scoped></style>
