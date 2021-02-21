<template>
  <div>
    <b-container fluid style="border-right: 1px solid black">
      <b-row sm="12">
        <b-col cols="12" class="header"> Pizza order Status </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "TopHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  box-sizing: border-box;
  background-color: #c1e0de;
  height: 30%;
  padding-left: 40%;
  font-size: 35px;
  font-family: fantasy;
  color: #3781b1;
  box-shadow: 5px 10px 8px #888888;
}
</style>
