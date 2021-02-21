<template>
  <b-col cols="2" class="col">
    <input
      type="search"
      id="form1"
      class="form-control"
      placeholder="Search"
      aria-label="Search"
    />
    <hr />
    <b-nav vertical class="w-25, nav-bar">
      <b-nav-item>Home</b-nav-item>
      <b-nav-item>Orders</b-nav-item>
      <b-nav-item>Profile</b-nav-item>
      <b-nav-item>Contact</b-nav-item>
      <b-nav-item>Address</b-nav-item>
    </b-nav>
  </b-col>
</template>
<script>
export default {};
</script>
<style scoped>
.nav-bar {
  font-family: emoji;
  padding: 12px;
  font-size: 23px;
}
.col {
  height: 91vh;
  background: #dee0e0;
  box-shadow: 5px 5px 11px 0px #ccc;
  margin-top: 10px;
}
.col ul li a {
  color: #3781b1;
}
.form-control {
  margin-top: 13px;
}
</style>