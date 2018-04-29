// pages/to_order/to_order.js
var local_data = require("../../local_data/local_data.js") //引入本地虚拟数据

Page({
    data: {
        chose_food_num: '',
        count: "",
        total_price: "未够商品",
        delUrl: ""
    },
    onLoad: function (options) { // restaurant
        var restaurantId = options.id;
        var list_left = ["热销", "米饭", "管饱", "美味", "优惠"];
        var food_type = ["food_hot", "food_rice", "food_full", "food_delicious", "food_discount"];
        this.setData({
            restaurant: local_data.resturants[restaurantId],
            list_left: list_left,
            food_type: food_type
        });
        // 初始化显示热销
        this.setData({
            restaurant_food: this.data.restaurant.food_hot,
            list_left_item: this.data.list_left[0],
            leftindex: 0
        });
    },
    // 点击左侧列表切换种类
    onFindMore: function (event) {
        var leftindex = event.currentTarget.dataset.leftindex
        var list_left_item = this.data.list_left[leftindex]
        this.setData({
            restaurant_food: this.data.restaurant[this.data.food_type[leftindex]],
            list_left_item: list_left_item,
            leftindex: leftindex
        });
    },
    // 添加食物到购物车
    onAddItem: function (event) {
        var foodId = event.currentTarget.dataset.foodid;
        console.log(foodId);
        for (var i in this.data.restaurant_food) {
            if (this.data.restaurant_food[i].food_id === foodId) {
                this.data.restaurant_food[foodId].count += 1;  
                this.setData({
                    count: this.data.restaurant_food[foodId].count
                })
            }
        }
    }
})
