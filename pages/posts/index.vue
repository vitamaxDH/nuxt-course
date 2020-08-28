<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
    {{ $editStr( '수정된 이름' ) }}
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
    return {
      name : '',
    }
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
  },
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
