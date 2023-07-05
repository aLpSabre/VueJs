<template>
    <div>
    <div>
      <h3>{{ title }}</h3>
      <p>{{desc}}</p>
      <a :href="link">View Resources</a>
      <button @click="deleteResource(id)" >Delete</button>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: false,
      
    }
  },
  inject:["deleteResource"],
  data(){
    return{};
  }

}

</script>