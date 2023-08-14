<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/number">NumberBaseball Game</router-link> |
      <router-link to="/response">ResponseCheck</router-link> |
      <router-link to="/rockSissorsPaper">RockSissorsPaper</router-link> |
      <router-link to="/lotto">LottoPage</router-link> |
      <!-- <router-link to="/tictactoe">TicTacToe</router-link> | -->
      <router-link to="/mine">MineSweeper</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<style>

</style>
