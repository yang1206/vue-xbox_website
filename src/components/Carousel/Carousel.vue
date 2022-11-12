<script lang="ts" setup>
import type Option from './type'
const props = defineProps<{
  options: Option[] //图片以及文字
  arrows: boolean //是否显示切换箭头
  autoplay: boolean //是否自动播放
  dots: boolean //是否显示指示器
  interval?: number //自动播放间隔时间
}>()
const current = ref(0)
const isAutoPlay = ref<boolean>(props.autoplay)
const arrowStatus = ref<'next' | 'prev'>()
const Toggle = (val: 'next' | 'prev') => {
  arrowStatus.value = val
  if (val === 'next') {
    current.value += 1
  } else {
    current.value -= 1
  }
  if (current.value + 1 > props.options.length) {
    current.value = 0
  } else if (current.value < 0) {
    current.value = props.options.length - 1
  }
}
const dotClick = (i: number) => {
  current.value = i - 1
}
const playClick = () => {
  isAutoPlay.value = !isAutoPlay.value
  isAutoPlay.value ? resume() : pause()
}

const { pause, resume } = useIntervalFn(
  () => {
    Toggle('next')
  },
  props.interval ? props.interval : 5000,
  {
    immediate: true,
    immediateCallback: true,
  }
)
</script>
<template>
  <div
    relative
    xl-h-134
    sm-h-260
    w-full
    cursor-pointer
    class="content"
    @mousemove="pause()"
    @mouseleave="isAutoPlay ? resume() : pause()"
  >
    <div w-full sm-h-full absolute>
      <div
        v-for="(option, index) in options"
        :key="option.src"
        :class="index !== current ? 'hidden' : ''"
      >
        <carousel-item :option="option" :arrows="arrowStatus" />
      </div>
    </div>
    <div
      v-if="arrows"
      w-full
      h-full
      items-center
      absolute
      flex
      justify-between
      type="btngroup"
      class="btnGroup"
    >
      <button
        class="btn b-rounded-1/2 flex items-center justify-center"
        @click="Toggle('prev')"
      >
        <div text-6 i-carbon:chevron-left />
      </button>
      <button
        class="btn b-rounded-1/2 flex items-center justify-center"
        @click="Toggle('next')"
      >
        <div text-6 i-carbon:chevron-right />
      </button>
    </div>
    <div w-full h-15 bottom-1 absolute flex-center cursor-pointer>
      <div w-12 h-10 text-white flex-center class="dotBg" @click="playClick">
        <div v-if="!isAutoPlay" text-5 i-carbon:play />
        <div v-else text-5 i-carbon:pause />
      </div>
      <div w-18 h-5 flex-center m="x-2" class="dotBg">
        <span
          v-for="i in options.length"
          :key="i"
          class="b-rounded-1/2 w-4 h-4 m-1 b-1"
          :class="i === current + 1 ? 'bg-white' : 'bg-transparent'"
          @click="dotClick(i)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content:hover .btnGroup {
  display: flex;
}

.btnGroup {
  display: none;
}

.btn {
  background: #2e2e2e;
  opacity: 0.8;
  color: #ccc;
  width: 44px;
  height: 44px;
}

.btn:hover {
  opacity: 1;
  box-shadow: 1px 1px 1px 1px #2e2e2e;
}

.dotBg {
  background: #00000066;
}
</style>
