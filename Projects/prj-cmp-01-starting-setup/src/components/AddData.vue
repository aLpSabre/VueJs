<template>
  <form @submit.prevent="addResource({title,desc,link,id:title})">
    <div>
      <label for="">Title</label>
      <input type="text" v-model="title"/>
    </div>
    <div>
      <label for="">Description</label>
      <input type="text" v-model="desc" />
    </div>
    <div>
      <label for="">Link</label>
      <input type="text" v-model="link"/>
    </div>
    <div>
      <button>Add Resource</button>
    </div>
  </form>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      title: '',
      desc: '',
      link: '',

    };
  },
};
</script>
