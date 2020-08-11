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
         title: 'Mango Delight', slug: 'mango-delight', ingredients: ['Mango', 'Milk', 'Icecream']
       }
     ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .index{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 60px;
  }
  .index h2{
    font-size: 1.8em;
    text-align: center;
    margin-top: 0;
  }
  .index .ingredients{
    margin: 30px auto;
  }
  .index .ingredients li{
    display: inline-block;
  }
</style>
