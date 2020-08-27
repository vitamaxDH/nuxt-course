<template>
  <div class="admin-post-page"> 
     <section class="update-form">
         <AdminPostForm :post="loadedPost" @submit="onsubmitted"/>
     </section>
  </div>
</template>


<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import Axios from 'axios';

export default {
  layout : 'admin',
  name: 'index',
  components : {
      AdminPostForm,
  },
  computed : {
      loadedPost (){
          console.log( 'this.$store.getters.loadedPosts', this.$store.getters.loadedPosts );
          return this.$store.getters.loadedPosts.find( post => post.id === this.$route.params.postId );
      },
  },
  methods : {
      onsubmitted( editedPost ){
          Axios.put( `https://nuxt-blog-685ff.firebaseio.com/posts/${this.$route.params.postId}.json`, editedPost )
               .then(res=> {
                   this.$router.push('/admin')
               })
               .error(e=>console.log(e))
      },
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
