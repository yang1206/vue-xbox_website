<script lang="ts" setup></script>

<template>
  <button
    style="transition: all 0.2s"
    bg-btn_bg
    hover:bg-btn_hover
    text-btn
    p="x-6 y-2"
  >
    <a font-900 flex items-center>
      <span
        max-w-full
        text-clip
        inline-block
        overflow-hidden
        vertical-top
        relative
        class="btn"
        ><slot
      /></span>
      <div font-700 ml-3 i-carbon:chevron-right />
    </a>
  </button>
</template>

<style scoped>
.btn {
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0;
  transition-property: all;
  outline-offset: -3px;
  letter-spacing: 0;
}
.btn::before {
  background: #054b16;
  box-shadow: 0 4px 8px 0 transparent;
  content: '';
  display: none;
  height: 2px;
  position: absolute;
  width: 100%;
  bottom: 0;
}

.btn:hover:before {
  display: block;
}
</style>
