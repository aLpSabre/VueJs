<template>
  <div>
    <div >
      <h1>{{ name }}</h1>
      <h3>{{ age }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props:{
      name:{
        type:String,
        required:true
      },
      age:{
        type:String,
        required:true
      }
    },
  data() {
  
    return{
    
    };
  
  },
};
</script>
