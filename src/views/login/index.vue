<template>

  <div>
    <div v-for="item in list" :key="item.id">

      {{item.author}} - {{item.timestamp}}

      <div>
        {{item.title}}
      </div>
    </div>
  </div>
</template>


<script>
import { fetchList } from '@/api/article'

export default {
  name: 'Login',
  data(){

    return {
      msg:'Good',
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      console.log(1);
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    }
  }
}
</script>
