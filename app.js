var app1 =new Vue({
  el: '#appTodo',
  data: function() { // 初期値を入力
    return {
      items: [
        { id: 1, text: "sample todo1", isChecked: false, edit:false, isdone: false},
        { id: 2, text: "sample todo2", isChecked: true, edit:false, isdone: true}
      ],
      Validation:{
        result: "",
      },
      nextID: 3,
      text: "",
      todoItem: "",
      searchWord: "",
      edit: "false",
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
        edit: false, // 新しく追加したItemにもeditのプロパティが必要
        isdone: false

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
    changeIcon(item) {
      item.isdone = item.isdone ? false : true
    },
    changeEdit(item){
      item.edit = item.edit ? false : true;
    },
    searchItem(list, key) {
      return list.filter(function(item) { //配列listからitemを絞り出す
        return item.text.indexOf(key) !== -1 || key === "";
        // 文字列.indexOf( 検索したい文字)
        // -1 は存在しない場合という意味、 !==-1 は存在する場合
      });
    }

  }
}
)

Vue.directive('auto-focus', { //カスタムディレクティブ
  bind: function () {
  	var el = this.el;
    Vue.nextTick(function(){
    	el.focus();
    });
  }
})
