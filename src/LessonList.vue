<template>
  <div class="list">123
    <div v-for="lesson in lessons" :key="lesson">
      <span>{{title}}</span>
    </div>
    
    
  </div>
</template>

<script>


export default {
  
  computed: {
    lessons() {
      return this.$store.state.lessons;
    },
    
  },
  
  mounted(){
    this.$store.dispatch('fetchLessons');
    
  },
};
</script>

<style scoped>
.list{
  padding-top: 30px;
  text-align: center;
}
</style>