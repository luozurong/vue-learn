<template>
  <div id="app">
    <!-- <filed-set></filed-set> -->
    <!-- <fieldset-lzr></fieldset-lzr> -->
    <filed-sets></filed-sets>
  </div>
</template>

<script>
// import FieldSets from './packages/fieldset/field-sets'
import axios from 'axios'
export default {
  name: 'App',
  components: {
  //  filedSet 
  },
  created () {
    axios.get('http://www.1909A.com/coureslist').then(res=>{
        console.log(res)
    })
  }
}
</script>
    FieldSets