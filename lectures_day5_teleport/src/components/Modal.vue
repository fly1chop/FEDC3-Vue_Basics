<template>
  <div @click="onModal">
    <slot name="activator"></slot>
  </div>
  <template v-if="isShow">
    <div
      class="modal"
      @click="offModal">
      <div
        :style="{ width: `${parseInt(width, 10)}px` }"
        class="modal__inner"
        @click.stop>
        <slot></slot>
      </div>
    </div>
  </template>
</template>

<script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: 400
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    onModal() {
      this.isShow = true
    },
    offModal() {
      this.isShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(black, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  &__inner {
    background-color: white;
    padding: 20px;
    box-sizing: border-box;
  }
}
</style>
