<script lang="ts" setup>
import type { ItemCardProps } from './type'
const item1 = useImageUrl('10012', 'jpg')
const item2 = useImageUrl('10013', 'jpg')
const item2_sm = useImageUrl('10014', 'jpg')
const item3 = useImageUrl('10016', 'jpg')
const item3_sm = useImageUrl('10017', 'jpg')
const item5 = useImageUrl('10018', 'jpg')
const item5_sm = useImageUrl('10019', 'jpg')
const item6 = useImageUrl('10020', 'jpg')
const item6_sm = useImageUrl('10021', 'jpg')
const item4 = useImageUrl('10015', 'jpg')
const item7 = useImageUrl('10022', 'jpg')
const item7_sm = useImageUrl('10023', 'jpg')
const item8 = useImageUrl('10024', 'jpg')
const item8_sm = useImageUrl('10025', 'jpg')
const item9 = useImageUrl('10026', 'jpg')
const item9_sm = useImageUrl('10027', 'jpg')
const item10 = useImageUrl('10029', 'jpg')
const item11 = useImageUrl('10028', 'jpg')
const item12 = useImageUrl('10030', 'jpg')
const item12_sm = useImageUrl('10031', 'jpg')
const item13 = useImageUrl('10032', 'jpg')
const item13_sm = useImageUrl('10038', 'jpg')
const ItemList: ItemCardProps[] = [
  {
    direction: 'none',
    mdSrc: item1,
    smSrc: item1,
    text: {
      title: 'Atomic Heart',
      des: 'What lies behind the utopian dream?',
      button: 'PRE-ORDER NOW',
    },
    theme: 'theme-transparent',
  },
  {
    direction: 'right',
    mdSrc: item3,
    smSrc: item3_sm,
    text: {
      title: 'A Plague Tale: Requiem',
      des: 'Play now with Xbox Game Pass or purchase',
      button: 'GET IT NOW',
    },
    theme: 'theme-green',
  },
  {
    direction: 'right',
    mdSrc: item5,
    smSrc: item5_sm,
    text: {
      title: 'Persona 5 Royal',
      des: 'Play now with Xbox Game Pass or purchase',
      button: 'GET IT NOW',
    },
    theme: 'theme-green',
  },
  {
    direction: 'right',
    mdSrc: item7,
    smSrc: item7_sm,
    text: {
      title: 'Apex Legends',
      des: 'Explore the new map Broken Moon and meet Catalyst',
      button: 'GET IT NOW',
    },
    theme: 'theme-green',
  },
  {
    direction: 'right',
    mdSrc: item9,
    smSrc: item9_sm,
    text: {
      title: 'Prove worthy of Wakanda',
      des: 'Master the challenge to win with Black Panther: Wakanda Forever and Xbox. ',
      button: 'LEARN MOREW',
    },
    theme: 'theme-black',
  },
  {
    direction: 'none',
    mdSrc: item10,
    smSrc: item10,
    text: {
      title: 'Atomic Heart',
      des: 'What lies behind the utopian dream?',
      button: 'PRE-ORDER NOW',
    },
    theme: 'theme-transparent',
  },

  {
    direction: 'left',
    mdSrc: item2,
    smSrc: item2_sm,
    text: {
      title: 'Discover your next favorite game',
      des: 'Play hundreds of high-quality games with friends on console, PC, phones and tablets.',
      button: 'JOIN XBOX GAME PASS',
    },
    theme: 'theme-green',
  },
  {
    direction: 'none',
    mdSrc: item4,
    smSrc: item4,
    text: {
      title: 'XBOX ELITE, YOUR WAY',
      des: 'Customize the Xbox Elite Wireless Controller Series 2 with Xbox Design Lab.',
      button: 'DESIGN YOURS',
    },
    theme: 'theme-transparent',
  },
  {
    direction: 'right',
    mdSrc: item6,
    smSrc: item6_sm,
    text: {
      title: 'Minecraft x Burberry',
      des: 'Adventure in a Free Immersive DLC & a Unique Capsule Collection',
      button: 'LEARN MORE',
    },
    theme: 'theme-green',
  },
  {
    direction: 'right',
    mdSrc: item8,
    smSrc: item8_sm,
    text: {
      title: 'OlliOlli World',
      des: 'Discover Radlantis in OlliOlli World: Finding the Flowzone',
      button: 'GET IT NOW',
    },
    theme: 'theme-green',
  },
  {
    direction: 'none',
    mdSrc: item11,
    smSrc: item11,
    text: {
      title: 'OlliOlli World',
      des: 'Discover Radlantis in OlliOlli World: Finding the Flowzone',
      button: 'GET IT NOW',
    },
    theme: 'theme-green',
  },
  {
    direction: 'left',
    mdSrc: item12,
    smSrc: item12_sm,
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
  mdSrc: item13,
  smSrc: item13_sm,
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
