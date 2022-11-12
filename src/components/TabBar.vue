<script lang="ts" setup>
const MenuList = ref<string[]>([
  'Game Pass',
  'Games',
  'Devices',
  'Play',
  'Community',
  'More',
])
</script>

<template>
  <header h-16 bg-white pl-15 pr-15 flex items-center justify-between>
    <div h-full flex>
      <a w-40 flex justify-center items-center>
        <img h-7 width-35 src="@/assets/images/ms_logo.png" alt="" />
      </a>
      <a class="xboxLogo" w-35 relative h-full flex justify-center items-center>
        <img w-25 src="@/assets/images/xbox_logo.png" alt="" />
      </a>
      <div h-full flex items-center>
        <button
          v-for="(item, index) in MenuList"
          :key="index"
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
          transition-all
          class="menu"
        >
          {{ item }}
          <div text-4 ml-1 i-carbon:chevron-down />
        </button>
      </div>
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
