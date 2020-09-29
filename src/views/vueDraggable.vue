<template>
  <div class="box">
    <div class="column">
      <draggable group="site" v-model="list1" animation="500">
        <div class="piece" v-for="(item, index) in list1" :key="index">
          {{ item }}
        </div>
      </draggable>
    </div>
    <div class="row">
      <draggable group="site" v-model="list2" animation="500">
        <div class="block" v-for="(item, index) in list2" :key="index">
          {{ item }}
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data() {
    return {
      list1: [1, 2, 3, 4, 5, 6],
      list2: [7, 8, 9, 10, 11, 12],
    };
  },
  methods: {
    load() {},
  },
};
</script>

<style scoped>
.box {
  padding: 30px;
  display: flex;
  justify-content: space-between;
}

.piece {
  width: 400px;
  height: 100px;
  background: cadetblue;
  margin: 15px auto;
}

.row {
  width: 40%;
}

.block {
  display: inline-block;
  width: 150px;
  height: 150px;
  background: coral;
  margin: 15px;
}

.block,
.piece {
  color: #fff;
  text-align: center;
}
</style>