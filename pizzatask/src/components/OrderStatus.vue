<template>
  <div>
    <b-container fluid style="padding-left: 0; padding-right: 0">
      <top-header></top-header>
      <b-row>
        <side-navbar></side-navbar>
        <b-col cols="10" class="div-table">
          <h3>Order List</h3>
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Serial No.</th>
                <th scope="col">Customer Name</th>
                <th scope="col">No. of Items</th>
                <th scope="col">Amount</th>
                <th scope="col">Order Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.Name">
                <td>{{ item.SerialNo }}</td>
                <td>{{ item.Name }}</td>
                <td>{{ item.items }}</td>
                <td>{{ item.Amount }}</td>
                <td>{{ item.Status }}</td>
                <td>
                  <b-button
                    variant="info"
                    @click="changeStatus(item)"
                    :disabled="item.Status == 'Delivered'"
                    >Change Status</b-button
                  >
                  <b-button
                    variant="secondary"
                    @click="OrderDetail(item.SerialNo)"
                    >Order Detail</b-button
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SideNavbar from "./SideNavbar.vue";
import TopHeader from "./TopHeader";
export default {
  components: {
    TopHeader,
    SideNavbar,
  },
  data() {
    return {
      orderStatus: [
        "Order Recieved",
        "Confirm Order",
        "Dispatch Order",
        "Delivered",
      ],
    };
  },
  computed: {
    items() {
      return this.$store.getters.getItems;
    },
  },
  methods: {
    changeStatus(order) {
      const indx = this.items.indexOf(order);
      let status = this.orderStatus.indexOf(order.Status);
      const changedStatus = this.orderStatus[status + 1];
      this.$store.commit("ChangeStatus", {
        index: indx,
        newstatus: changedStatus,
      });
    },
    OrderDetail(SerialNo) {
      this.$router.push("/OrderDetails/" + SerialNo);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div-table {
  margin-top: 2%;
  padding-left: 31px;
  padding-right: 30px;
}
</style>
