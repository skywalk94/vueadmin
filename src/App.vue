<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
  background-color: #ddd;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #bbb;
}
</style>
