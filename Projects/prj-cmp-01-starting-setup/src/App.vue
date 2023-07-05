<template>
  <div>
    <selectors @selected-share="selectedShare"></selectors>
    <!--     <div v-if="selectedComponent">
      <resources
        v-for="resource in myResources"
        :key="resource.title"
        :title="resource.title"
        :desc="resource.desc"
        :link="resource.link"
      ></resources>
    </div>

    <add-data v-else></add-data> -->

    <keep-alive>
      <component :is="selectedComponent ? 'resources' : 'add-data'"></component>
    </keep-alive>
  </div>
</template>

<script>
import AddData from './components/AddData.vue';
import Resources from './components/Resources.vue';
import Selectors from './components/Selectors.vue';
export default {
  components: { Selectors, AddData, Resources },
  data() {
    return {
      selectedComponent: true,
      myResources: [
        {
          title: 'Official Guide',
          id:"Official Guide",
          desc: 'The official Vue.js documentation.',
          link: 'https://vuejs.org/',
        },
      ],
    };
  },
  provide() {
    return {
      myResources: this.myResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
  methods: {
    selectedShare(control) {
      this.selectedComponent = control;
    },
    addResource(obj) {
      this.myResources.push(obj);
    },
    deleteResource(id) {
      console.log('deleteResource');
      /*       console.log(this.myResources.filter((resource) => resource.title !== id));
       */
      /*     let array = [
        { ali: 'ali', bak: 'bak' },
        { ari: 'ari', bak: 'bak' },
      ];
      console.log(array);
      let array1= array.filter((e) => e.ali !== 'ali');
      array=array1;
      console.log(array); */
      /*    console.log(this.myResources);
      const newArray = this.myResources.filter(
        (resource) => resource.title !== id
      );
      console.log(newArray);
      this.myResources = newArray;
      console.log(this.myResources); */
/*       console.log(id)
      console.log(this.myResources.filter((resource) => resource.title !== id));
      this.myResources=this.myResources.filter((resource) => resource.id !== id); */

        const resIndex = this.myResources.findIndex(res => res.id === id);
      this.myResources.splice(resIndex, 1); 
    },
  },
};
</script>
