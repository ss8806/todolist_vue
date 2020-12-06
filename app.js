Vue.component("todo-item", {
  data: function() {
    return {
      items: [
        { id: 1, text: "sample todo1", isChecked: false },
        { id: 2, text: "sample todo2", isChecked: true }
      ],
      nextID: 3,
      todoItem: "",
      searchWord: ""
    };
  },
  computed: {
    filteredItems() {
      return this.searchItem(this.items, this.searchWord);
    }
  },
  methods: {
    addItem() {
      this.items.push({
        id: this.nextID++,
        text: this.todoItem,
        isChecked: false
      }),
        (this.todoItem = "");
    },
    doRemove(index) {
      this.items.splice(index, 1);
    },
    changeStatus(item) {
      item.isChecked = item.isChecked ? false : true;
    },
    searchItem(list, key) {
      return list.filter(function(item) {
        return item.text.indexOf(key) !== -1 || key === "";
      });
    }
  }
}
)
