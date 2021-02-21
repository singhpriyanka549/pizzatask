<template>
  <div>
    <b-container fluid style="padding-left: 0; padding-right: 0">
      <top-header></top-header>
      <b-row>
        <side-navbar></side-navbar>
        <b-col cols="10" class="div-table">
          <h3>Order Details</h3>
          <table class="table table-striped table-bordered">
            <tbody>
              <tr>
                <th scope="row">Serial No.</th>
                <td>{{ items.SerialNo }}</td>
              </tr>
              <tr>
                <th scope="row">Name</th>
                <td>{{ items.Name }}</td>
              </tr>
              <tr>
                <th scope="row">Price</th>
                <td>{{ items.Amount }}</td>
              </tr>
              <tr>
                <th scope="row">Total Price</th>
                <td>{{ items.Total_Amount }}</td>
              </tr>
              <tr>
                <th scope="row">Items Name</th>
                <td>
                  <span v-for="name in items.items_Name" :key="name"
                    >{{ name }} |
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">Address</th>
                <td>{{ items.Address }}</td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TopHeader from "./TopHeader.vue";
import SideNavbar from "./SideNavbar.vue";
export default {
  components: { TopHeader, SideNavbar },
  data() {
    return {
      fields: ["SerialNo", "Name", "items", "Amount", "Status", "Action"],
    };
  },
  computed: {
    items() {
      debugger;
      const rout = this.$route.params.id;
      return this.$store.getters.getSingleItem(rout);
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
