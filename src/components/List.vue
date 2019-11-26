<template>
  <div
    class="list components"
  >
    <div
      class="list_header"
    >
      リスト
    </div>
    <div
      class="list_body"
    >
      <table
        class="list_body_table"
      >
        <tr>
          <th>氏名</th>
          <th>ふりがな</th>
          <th>好きな食べ物</th>
          <th>ひとこと</th>
        </tr>
        <tr
          v-for="(value, key, index) in list"
          :key="index"
          height="40"
        >
          <td
            class="list_body_table_name"
          >{{value.name}}</td>
          <td
            class="list_body_table_kana"
          >{{value.kana}}</td>
          <td
            class="list_body_table_favoriteFood"
          >{{value.favoriteFood}}</td>
          <td
            class="list_body_table_word"
          >{{value.word}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
// テスト用コメント
export default {
  data: () =>{
    return {};
  },
  props: ['list'],
};
</script>
