<template>
  <div class="container">
    <Navbar title="Dog Breed List"></Navbar>
    <LoadingDots v-if="loading" />
    <ErrStatus v-if="showErr" />
    <transition-group
      name="staggered-fade"
      tag="ul"
      v-bind:css="false"
      v-on:enter="enter"
    >
      <BreedItem
        v-for="(value, name, index) in breeds"
        :key="name"
        :name="name"
        :index="index"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import ErrStatus from '@/components/ErrStatus.vue'
import LoadingDots from '@/components/LoadingDots.vue'
import BreedItem from '@/components/BreedItem.vue'
import axios from 'axios'
import Vue from 'vue'
import anime from 'animejs/lib/anime.es.js'
import Navbar from '../components/NavBar.vue'

const Component = Vue.extend({
  created() {
    console.log('created')
    this.getBreedList()
  },
  components: {
    ErrStatus,
    LoadingDots,
    BreedItem,
    Navbar,
  },
  data: () => ({
    breeds: {} as Record<string, Array<string>>,
    showErr: false,
    loading: true,
  }),
  methods: {
    getBreedList() {
      axios
        .get('https://dog.ceo/api/breeds/list/all/random/10')
        .then((res) => {
          console.log(res.data)
          if (res.data.status === 'success') {
            console.log(res.data.message)
            this.breeds = res.data.message
            this.loading = false
          } else {
            console.log('error')
            this.handleError()
          }
        })
        .catch((err) => {
          console.log(err)
          this.handleError()
        })
    },
    handleError() {
      this.showErr = true
      this.loading = false
    },
    // beforeEnter(el: HTMLElement) {
    // },
    enter(el: HTMLElement, done: () => void) {
      anime({
        targets: el,
        opacity: [0, 1],
        translateX: [100, 0],
        delay: Number(el.getAttribute('index')) * 80,
        complete: () => {
          done()
        },
      })
    },
    // leave(el: HTMLElement, done: () => void) {
    // },
  },
})
export default Component
</script>

<style lang="css" scoped>
.container {
  min-height: 100vh;
}
ul {
  list-style: none;
  padding: 0;
}
a {
  display: block;
}
</style>
