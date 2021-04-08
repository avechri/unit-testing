<template>
  <div>
    <span>{{ randomNumber }}}</span>
    <button @click="getRandomNumber">Generate Random Number</button>
  </div>
</template>

<script>
//info for future tests:
// by def, randomNumber data value should be 0
// if button is clicked, random num should be between 1(min) & 10(max)

export default {
  props: {
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      randomNumber: 0,
    }
  },
  methods: {
    getRandomNumber() {
      this.randomNumber = Math.floor(
        Math.random() * (this.max - this.min + 1) + this.min
      )
    },
  },
}
</script>

<style scoped></style>
