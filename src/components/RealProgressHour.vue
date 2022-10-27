<template>
    <a-table 
    :columns = "columns" 
    :dataSource = "data"
    :row-key = "record => record.id"
    bordered>
    </a-table>
</template>

<script>
export default {

}
</script>

<style>

</style>