<script lang="ts" setup>
import useImageUrl from '@/composables/useImageUrl'
import type { ItemCardProps } from './type'
const ItemList: ItemCardProps[] = [
  {
    direction: 'none',
    mdSrc: useImageUrl('10012'),
    smSrc: useImageUrl('10012'),
    text: {
      title: 'Atomic Heart',
      des: 'What lies behind the utopian dream?',
      button: 'PRE-ORDER NOW',
    },
    theme: 'theme-transparent',
  },
  {
    direction: 'right',
    mdSrc: useImageUrl('10016'),
    smSrc: useImageUrl('10017'),
    text: {
      title: 'A Plague Tale: Requiem',
      des: 'Play now with Xbox Game Pass or purchase',
      button: 'GET IT NOW',
    },
    theme: 'theme-green',
  },
  {
    direction: 'right',
    mdSrc: useImageUrl('10018'),
    smSrc: useImageUrl('10019'),
    text: {
      title: 'Persona 5 Royal',
      des: 'Play now with Xbox Game Pass or purchase',
      button: 'GET IT NOW',
    },
    theme: 'theme-green',
  },
  {
    direction: 'right',
    mdSrc: useImageUrl('10022'),
    smSrc: useImageUrl('10023'),
    text: {
      title: 'Apex Legends',
      des: 'Explore the new map Broken Moon and meet Catalyst',
      button: 'GET IT NOW',
    },
    theme: 'theme-green',
  },
  {
    direction: 'right',
    mdSrc: useImageUrl('10026'),
    smSrc: useImageUrl('10027'),
    text: {
      title: 'Prove worthy of Wakanda',
      des: 'Master the challenge to win with Black Panther: Wakanda Forever and Xbox. ',
      button: 'LEARN MOREW',
    },
    theme: 'theme-black',
  },
  {
    direction: 'none',
    mdSrc: useImageUrl('10029'),
    smSrc: useImageUrl('10029'),
    text: {
      title: 'Atomic Heart',
      des: 'What lies behind the utopian dream?',
      button: 'PRE-ORDER NOW',
    },
    theme: 'theme-transparent',
  },

  {
    direction: 'left',
    mdSrc: useImageUrl('10013'),
    smSrc: useImageUrl('10014'),
    text: {
      title: 'Discover your next favorite game',
      des: 'Play hundreds of high-quality games with friends on console, PC, phones and tablets.',
      button: 'JOIN XBOX GAME PASS',
    },
    theme: 'theme-green',
  },
  {
    direction: 'none',
    mdSrc: useImageUrl('10015'),
    smSrc: useImageUrl('10015'),
    text: {
      title: 'XBOX ELITE, YOUR WAY',
      des: 'Customize the Xbox Elite Wireless Controller Series 2 with Xbox Design Lab.',
      button: 'DESIGN YOURS',
    },
    theme: 'theme-transparent',
  },
  {
    direction: 'right',
    mdSrc: useImageUrl('10020'),
    smSrc: useImageUrl('10021'),
    text: {
      title: 'Minecraft x Burberry',
      des: 'Adventure in a Free Immersive DLC & a Unique Capsule Collection',
      button: 'LEARN MORE',
    },
    theme: 'theme-green',
  },
  {
    direction: 'right',
    mdSrc: useImageUrl('10024'),
    smSrc: useImageUrl('10025'),
    text: {
      title: 'OlliOlli World',
      des: 'Discover Radlantis in OlliOlli World: Finding the Flowzone',
      button: 'GET IT NOW',
    },
    theme: 'theme-green',
  },
  {
    direction: 'none',
    mdSrc: useImageUrl('10028'),
    smSrc: useImageUrl('10028'),
    text: {
      title: 'OlliOlli World',
      des: 'Discover Radlantis in OlliOlli World: Finding the Flowzone',
      button: 'GET IT NOW',
    },
    theme: 'theme-green',
  },
  {
    direction: 'left',
    mdSrc: useImageUrl('10030'),
    smSrc: useImageUrl('10031'),
    text: {
      title: 'Gotham Knights',
      des: 'Batgirl, Nightwing, Red Hood and Robin are the new protectors of Gotham City',
      button: 'GET IT NOW',
    },
    theme: 'theme-black',
  },
]
const lastItem: ItemCardProps = {
  direction: 'none',
  mdSrc: useImageUrl('10032'),
  smSrc: useImageUrl('10038'),
  text: {
    title: 'Gotham Knights',
    des: 'Batgirl, Nightwing, Red Hood and Robin are the new protectors of Gotham City',
    button: 'GET IT NOW',
  },
  theme: 'theme-black',
}
</script>

<template>
  <ul p-x-2 w-full>
    <ItemCard v-for="(item, index) in ItemList" :key="index" :options="item" />
  </ul>
  <ItemCard p="x-5px" :options="lastItem" />
</template>

<style scoped>
ul {
  columns: 2;
  column-gap: 5px;
}
@media screen and (max-width: 1024px) {
  ul {
    columns: 1;
  }
}
</style>
