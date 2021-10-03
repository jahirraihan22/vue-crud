<template>
  <div>
    <h1 class="text-center">Categories</h1>
    <div class="container-fluid text-start">
      <div class="row card col-md-10 mx-auto mb-2">
        <div class="card-header">
          <h3 class="text-center">Add a category</h3>
        </div>
        <div class="card-body p-4">
          <form @submit.prevent="store">
              <div class="d-flex align-items-end flex-row">
                  <div class="col-md-4 m-2">
                    <label for="">Title</label>
                    <input type="text" name="title" v-model="form.title" class="form-control">
                  </div>
                  <div class="col-md-4 m-2">
                    <label for="">Description</label>
                    <input type="text" name="description" v-model="form.description" class="form-control">
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
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categories" :key="category.id">
              <th >{{ category.id }}</th>
              <td>{{ category.title }}</td>
              <td>{{ category.description }}</td>
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
      categories:null,
      form:{
        title:'',
        description:''
      },
    }
  },
  created() {
    this.getCategories();
  },
  methods: {
    getCategories(){
      this.axios.get('http://127.0.0.1:8000/v1/api/categories').then((response)=>{
        this.categories =  response.data.data;
        console.log('response.data : >> ', this.categories);
      }).catch((error)=>{
        console.log('error :>> ', error);
      })
    },
    store(){
      this.axios.post('http://127.0.0.1:8000/v1/api/categories',this.form).then(()=>{
        this.getCategories();
      }).then((error)=>{
        console.log('error :>> ', error);
      })
    }
  },
}
</script>
