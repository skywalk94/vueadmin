<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #bbb;
}

::-webkit-scrollbar-thumb:active {
  background-color: #aaa;
}
</style>