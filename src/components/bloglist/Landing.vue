<template>
  <v-container fluid class="pa-0 ml-0 mr-0 body">
    <v-row>
      <v-col md="12" class="blog-card" v-for="(blog, i) in blogs" :key="i">
        <div class="blog-card__title-body">
          <h3 class="blog-card__postby-title">{{ blog.postedby }}</h3>
          <p class="blog-card__date">{{ blog.date }}</p>
        </div>
        <img class="blog-card__image" :src="blog.image" />
        <div class="blog-card__title-body">
          <router-link :to="`/blogs/${blog.id}`">
            <h2 class="blog-card__title">{{ blog.title.substring(0, 160) + "...."  }}</h2>
            <p class="blog-card__description">
              {{ blog.Description.substring(0, 240) + "...." }}
            </p>
          </router-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import data from "./data";

export default {
  data
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

.blog-card {
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
    height: 300px;
    object-fit: cover;
  }
}
</style>
