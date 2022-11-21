<script lang="ts" setup>
import { useElementSize } from '@vueuse/core'
const Menu = ['Game Pass', 'Games', 'Devices', 'Play', 'Community', 'More']
const MenuList = ref<string[]>(Menu)
const el = ref<HTMLElement>()
const { width } = useElementSize(el)
watch(width, (val) => {
  if (val > 1082) {
    MenuList.value = Menu
  } else if (val <= 1082 && val >= 920) {
    MenuList.value = [...Menu.slice(0, 4), Menu[5]]
  } else if (val < 920) {
    MenuList.value = [...Menu.slice(0, 2), Menu[5]]
  }
})
</script>

<template>
  <header
    ref="el"
    h-16
    max-w-full
    bg-white
    xl-p-x-20
    lg-p-x-15
    p-x-5
    lg-flex
    hidden
    items-center
    justify-between
    shadow-xl
  >
    <div h-full flex>
      <a w-40 flex justify-center items-center>
        <img h-7 width-35 src="@/assets/images/ms_logo.png" alt="" />
      </a>
      <a class="xboxLogo" w-35 relative h-full flex justify-center items-center>
        <img w-25 src="@/assets/images/xbox_logo.png" alt="" />
      </a>
      <ul class="h-full flex items-center">
        <li v-for="(item, index) in MenuList" :key="index" h-full>
          <button
            h-full
            xl-p-y-4
            xl-p-x-4
            lg-p-x-3
            lg-p-y-3
            p-x-3
            text-3
            truncate
            text-menu
            flex
            items-center
            focus:bg-menu_focus
            type="button"
            relative
            transition-all
            class="menu"
          >
            {{ item }}
            <div text-4 ml-1 i-carbon:chevron-down />
          </button>
        </li>
      </ul>
    </div>
    <div h-full flex>
      <button
        h-full
        p="y-4
               x-4"
        text-3
        truncate
        text-menu
        flex
        items-center
        focus:bg-menu_focus
        type="button"
        relative
        class="menu"
      >
        All Microsoft
        <div text-4 ml-1 i-carbon:chevron-down />
      </button>
      <div h-full text-4 p="x-2 y-5">
        <div scale-x i-carbon:search />
      </div>
      <div h-full text-4 p="x-2 y-5">
        <div scale-x i-carbon:shopping-cart />
      </div>
      <div ml-6 flex justify-center items-center>
        <SvgIcon w-8 icon-class="user" />
      </div>
    </div>
  </header>
  <header lg-hidden divide-y>
    <div h-15 flex justify-between items-center>
      <div flex>
        <div h-full text-6 p="x-2 y-4">
          <div scale-x i-carbon:menu />
        </div>
        <div h-full text-5 p="x-2 y-5">
          <div scale-x i-carbon:search />
        </div>
      </div>
      <a w-40 flex justify-center items-center>
        <img h-7 width-35 src="@/assets/images/ms_logo.png" alt="" />
      </a>
      <div flex h-full>
        <div h-full text-5 p="x-2 y-5" pr-7>
          <div i-carbon:shopping-cart />
        </div>
        <div flex justify-center items-center>
          <SvgIcon w-8 icon-class="user" />
        </div>
      </div>
    </div>
    <div h-34px w-full p-x-5 flex>
      <a w-20 relative h-full flex justify-center items-center>
        <img w-full src="@/assets/images/xbox_logo.png" alt="" />
      </a>
      <div h-full text-4 ml-3 i-carbon:chevron-down />
    </div>
  </header>
</template>

<style scoped>
.xboxLogo::before {
  border-left: 2px solid #000;
  height: 24px;
  content: ' ';
  position: absolute;
  top: 15px;
  left: 0;
}

.menu::before {
  background: #262626;
  content: '';
  display: none;
  height: 2px;
  position: absolute;
  bottom: 10px;
  width: calc(100% - 48px);
}

.menu:hover:before {
  display: block;
}
</style>
