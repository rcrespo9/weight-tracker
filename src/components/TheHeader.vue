<template>
  <header class="page-header">
    <nav class="page-header__nav">
      <div class="nav__logo">
        <h1 class="logo__text">Personal Weight Tracker</h1>
      </div>
      <div class="nav__btn-group">

      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
$nav-el-padding: ms(2);

.page-header {
  background-color: $white;
  height: $header-height;
}

.page-header__nav {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.nav__logo {
  align-self: center;
  padding-left: $nav-el-padding;
}

.logo__text {
  margin: 0;
  font-size: ms(1);
  font-weight: map-get($font-weight, regular);
}
</style>
