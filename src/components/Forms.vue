<template>
  <div
    class="forms components"
  >
    <div
      class="forms_input_form"
    >
      <input
        v-model="value.name"
        class="forms_input_form_inputArea"
        type="text"
        placeholder="氏名"
      >
    </div>
    <div
      class="forms_input_form"
    >
      <input
        v-model="value.kana"
        class="forms_input_form_inputArea"
        type="text"
        placeholder="ふりがな"
      >
    </div>
    <div
      class="forms_input_form"
    >
      <input
        v-model="value.favoriteFood"
        class="forms_input_form_inputArea"
        type="text"
        placeholder="好きな食べ物"
      >
    </div>
    <div
      class="forms_input_form"
    >
      <textarea
        v-model="value.word"
        class="forms_input_form_textArea"
        cols="30"
        rows="10"
        placeholder="ひとこと"
      >
      </textarea>
    </div>
    <div
      class="forms_add"
    >
      <button
        class="forms_add_button"
        @click="pushAddButton()"
      >{{buttonName}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      value: {
        name: '',
        kana: '',
        favoriteFood: '',
        word: '',
      },
      buttonName: '追加',
    };
  },
  methods: {
    pushAddButton: function() {
      this.$emit('pushAddButton', this.value);
    },
  },
};
</script>
