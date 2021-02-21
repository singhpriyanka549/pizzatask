import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        items: [
            { SerialNo: "1", Name: "John", items: "2", Amount: "400", Total_Amount: "800", Address: "jn 87, hyderabad", items_Name: ["Double cheese", "pepse"], Status: "Order Recieved" },
            { SerialNo: "2", Name: "Snow", items: "4", Amount: "800", Total_Amount: "1900", Address: "street 45, Begumpeet", items_Name: ["Pizza mania", "pepsi", "veg loaded", "farmhouse"], Status: "Confirm Order" },
            { SerialNo: "3", Name: "Maria", items: "1", Amount: "100", Total_Amount: "198", Address: "shri ram nagar,Gachiwobli", items_Name: ["Veg loaded"], Status: "Dispatch Order" },
            {
                SerialNo: "4",
                Name: "Mac",
                items: "2",
                Amount: "1700",
                Total_Amount: "8790",
                Address: "jn 87, hyderabad",
                items_Name: ['pizza Media', 'pepsi'],
                Status: "Order Delivered",
            },
            { SerialNo: "5", Name: "tac", items: "4", Amount: "5000", Total_Amount: "10000", Address: "street 45, hyderabad", items_Name: ["Onion Pizza", "farmhouse", "zingy parcel", "double cheese"], Status: "Order Recieved" },
            { SerialNo: "6", Name: "Liba", items: "3", Amount: "460", Total_Amount: "8987", Address: "shri ram nagar, gachiwobli", items_Name: ["Margrita", "burger", "ice cream"], Status: "Order Recieved" },
        ],
    },
    mutations: {
        ChangeStatus(state, val) {
            state.items[val.index].Status = val.newstatus;
        }
    },
    getters: {
        getItems: state => {
            return state.items;
        },
        getSingleItem: (state) => (val) => {
            return state.items[val];
        }
    }
});

export default store;