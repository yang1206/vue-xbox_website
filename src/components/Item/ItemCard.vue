<script lang="ts" setup>
import type { ItemCardProps } from './type'

defineProps<{
  options: ItemCardProps
}>()
</script>

<template>
  <li
    w-full
    flex
    overflow-hidden
    flex-col
    mb-5px
    :class="
      options.direction === 'left' ? 'lg-flex-row' : 'lg-flex-row-reverse'
    "
  >
    <div h-full w-full overflow-hidden>
      <picture max-h-2.9vw>
        <source :srcset="options.mdSrc" media="(min-width:1024px)" />
        <source :srcset="options.smSrc" media="(min-width:0)" />
        <img
          h-inherit
          :class="
            options.direction !== 'none'
              ? 'lg-hover:scale-115 lg-transition duration-3000 ease'
              : ''
          "
          :src="options.smSrc"
          alt=""
        />
      </picture>
    </div>
    <span
      v-if="options.direction !== 'none'"
      w-full
      max-h-21.9vw
      text-left
      p="x-30px y-3vw"
      :class="`${options.theme}`"
    >
      <h2 font-700 text-26px lg-text-20px xl-text-34px lh-32px p="t-6px b-2px">
        {{ options.text.title }}
      </h2>
      <p
        font-400
        text-18px
        lg-text-16px
        xl-text-20px
        lh-24px
        p-y-30px
        xl-p-y-24px
        lg-p-y-10px
      >
        {{ options.text.des }}
      </p>
      <a
        p="t-10px l-3px b-7px"
        :class="options.theme === 'theme-green' ? 'hover:text-#9bf00b' : ''"
        flex
        items-center
        mt-16px
        cursor-pointer
      >
        <span
          inline
          text-clip
          vertical-top
          transition
          duration-200
          ease-in-out
          lh-18.5px
          text-15px
          font-900
          lh-1.3
          shadow-transparent
          relative
          class="btn hover:before:bg-#9bf00b"
        >
          {{ options.text.button }}
        </span>
        <i inline-block font-900 ml-3 i-carbon:chevron-right />
      </a>
    </span>
  </li>
</template>

<style scoped>
.btn::before {
  box-shadow: 0 4px 8px 0 transparent;
  content: '';
  display: none;
  height: 3px;
  position: absolute;
  width: 100%;
  bottom: -3px;
}

.btn:hover:before {
  display: block;
}
</style>
