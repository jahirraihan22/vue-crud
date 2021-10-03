<template>
  <div>
    <h1 class="text-center">News</h1>
    <div class="container-fluid text-start">
      <div class="row card col-md-10 mx-auto mb-2">
        <div class="card-header">
          <h3 class="text-center">Add a news</h3>
        </div>
        <div class="card-body p-4">
          <form @submit.prevent="store">
              <div class="d-flex align-items-end flex-row">
                  <div class="col-md-2 m-2">
                    <label for="">Title</label>
                    <input type="text" name="title" v-model="form.title" class="form-control">
                  </div>
                  <div class="col-md-2 m-2">
                    <label for="">Description</label>
                    <input type="text" name="description" v-model="form.description" class="form-control">
                  </div>
                  <div class="col-md-2 m-2">
                    <label for="">Author</label>
                    <input type="text" name="description" v-model="form.author" class="form-control">
                  </div>
                  <div class="col-md-2 m-2">
                    <label for="">Image</label>
                    <input type="text" name="description" v-model="form.image" class="form-control">
                  </div>
                  <div class="col-md-2 m-2">
                    <label for="">Category</label>
                    <input type="text" name="description" v-model="form.category_id" class="form-control">
                  </div>
                  <div class="col-md-2 m-2">
                    <button class="btn btn-primary" type="submit">Save</button>
                  </div>
              </div>
          </form>
        </div>
      </div>
      <div class="row card col-md-10 mx-auto">
        <table class="table table-responsive">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Author</th>
              <th scope="col">Image</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in news" :key="n.id">
              <th >{{ n.id }}</th>
              <td>{{ n.title }}</td>
              <td>{{ n.description }}</td>
              <td>{{ n.author }}</td>
              <td>{{ n.image }}</td>
              <td>{{ n.category_id }}</td>
            </tr>
          </tbody>
        </table> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news:null,
      form:{
        title:'',
        description:'',
        author:'',
        image:'',
        category_id:''
      },
    }
  },
  created() {
    this.getNews();
  },
  methods: {
    getNews(){
      this.axios.get('http://127.0.0.1:8000/v1/api/news').then((response)=>{
        this.news =  response.data.data;
        console.log('response.data : >> ', this.news);
      }).catch((error)=>{
        console.log('error :>> ', error);
      })
    },
    store(){
      this.axios.post('http://127.0.0.1:8000/v1/api/news',this.form).then(()=>{
        this.getNews();
      }).then((error)=>{
        console.log('error :>> ', error);
      })
    }
  },
}
</script>
