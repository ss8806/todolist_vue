var app1 = new Vue({
  el: '#appTodo',
  data: function() { // 初期値を入力
    return {
      items: [
        { id: 1, text: "sample todo1", isChecked: false, edit:false },
        { id: 2, text: "sample todo2", isChecked: true, edit:false }
      ],
      Validation:{
        result: "",
      },
      nextID: 3,
      todoItem: "",
      searchWord: "",
      edit: false,
      errors: [],
    };
  },
  computed: {
    filteredItems() {
      return this.searchItem(this.items, this.searchWord);
    }
  },
  methods: {
    addItem() {
      if (this.todoItem !== ""){
      this.items.push({
        id: this.nextID++,
        text: this.todoItem,
        isChecked: false,
      })
      this.Validation.result=""; // validationを空にする。
    }else{
      this.Validation.result="入力してください";
    }
        this.todoItem = ""; //入力後に空にする。
    },

    doRemove(index) {
      this.items.splice(index, 1); //要素を削除してつなぎ合わせる 第二引数に１を指定しないと全てが消える
    },
    changeStatus(item) {
      item.isChecked = item.isChecked ? false : true;
    },
    searchItem(list, key) {
      return list.filter(function(item) {
        return item.text.indexOf(key) !== -1 || key === "";
        // 文字列.indexOf( 検索したい文字)
        // -1 は存在しない場合という意味、 !==-1 は存在する場合
      });
    }

  }
}
)
