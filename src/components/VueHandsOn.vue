<template>
  <div
    class="body"
  >
    <title-header></title-header>
    <div class="main_contents">
      <forms v-on:pushAddButton="listPush"></forms>
      <list
        :list='list'
      ></list>
    </div>
  </div>
</template>

<script>
import titleHeader from './HeaderTitle';
import forms from './Forms';
import list from './List';

export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    listPush: function(value) {
      this.list.push(Object.assign({}, value));
    },
  },
  components: {
    'title-header': titleHeader,
    'forms': forms,
    'list': list,
  },
};
</script>
