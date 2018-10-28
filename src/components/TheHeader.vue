<template>
  <header class="page-header">
    <nav class="page-header__nav">
      <div class="nav__logo">
        <h1 class="logo__text">Personal Weight Tracker</h1>
      </div>
      <div class="nav__btn-group" v-if="isLoggedIn">
        <div class="nav__btn">
          <IconButton 
            text="Add Weight Entry" 
            icon="plus" 
          />
        </div>
        <div class="nav__btn">
          <IconButton 
            text="Log Out" 
            icon="log-out" 
          />
        </div>
      </div>
      <div class="nav__btn-group" v-else>
        <div class="nav__btn">
          <IconButton 
            text="Log In" 
            icon="log-in" 
          />
        </div>        
      </div>
    </nav>
  </header>
</template>

<script>
import IconButton from './AppIconButton'

export default {
  name: 'Header',
  components: {
    IconButton
  },
  computed: {
    isLoggedIn () {
      if (this.$store.currentUser !== null) return true

      return false
    }
  }
}
</script>

<style lang="scss" scoped>
$nav-el-padding: ms(2);

.page-header {
  background-color: $white;
  height: $header-height;
  @include border('-bottom');
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
  color: $md-gray-text;
  font-size: ms(1);
  font-weight: map-get($font-weight, regular);
}

.nav__btn-group,
.nav__btn {
  display: inherit;
}

.nav__btn {
  padding: 0 $nav-el-padding;
  align-items: center;
  @include border('-left');
}

</style>
