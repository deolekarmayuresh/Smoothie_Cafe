<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <h2 class="green-text"> {{ smoothie.title }} </h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip"> {{ ing }} </span>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
     smoothies: [
       { title: 'Morning Brew', slug: 'morning-brew', ingredients: ['Chocolate', 'Coffee', 'Milk'] },
       {
         title: 'Mango Delight', slug: 'mago-delight', ingredients: ['Mango', 'Milk', 'Icecream']
       }
     ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
