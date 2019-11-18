<template>
  <v-container fluid class="pa-0 ml-0 mr-0 body">
    <v-row>
      <h2>dkjlk;dl;k</h2>
      <v-col md="12" class="blog-detail">
        <div class="blog-detail__title-body">
          <h3 class="blog-detail__postby-title">{{ blog.postedby }}</h3>
          <p class="blog-detail__date">{{ blog.date }}</p>
        </div>
        <img class="blog-detail__image" :src="blog.image" />
        <div class="blog-detail__title-body">
          <h2 class="blog-detail__title">{{ blog.title }}</h2>
          <p class="blog-detail__description">{{ blog.Description }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import data from "../bloglist/data";

export default {
  data,
  computed: {
    blog() {
      return this.blogs.filter(
        blog => blog.id.toString() === this.$route.params.id.toString()
      )[0];
    }
  }
};
</script>

<style lang="scss">
$primary-color: #333;
$secondary-color: #f2b618;
$theme-dark-text-color: #ffffff;
@mixin boxShadow($prop) {
  -webkit-box-shadow: $prop; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: $prop; /* Firefox 3.5 - 3.6 */
  box-shadow: $prop; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}

.body {
  background: #222;
}

.blog-detail {
  @include boxShadow(0px 0px 12px #000);
  background: $primary-color;
  margin-top: 12px;
  &__postby-title {
    color: $theme-dark-text-color;
  }
  &__date {
    color: $theme-dark-text-color;
    font-size: 12px;
  }
  &__title-body {
    padding: 12px;
  }
  &__title {
    color: $secondary-color;
  }
  &__description {
    color: $theme-dark-text-color;
  }
  &__image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
</style>
