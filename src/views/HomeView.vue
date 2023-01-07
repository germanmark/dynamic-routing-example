<template>
  <div class="home">
    <RestList/>
  </div>
</template>

<script>
// @ is an alias to /src
import RestList from '@/components/RestList.vue'

export default {
  name: 'HomeView',
  components: {
    RestList
  }
}
</script>
