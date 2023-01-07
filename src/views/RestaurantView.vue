<template>
    <div>
        {{$route.params.restaurantId}}
    </div>
</template>

<script>
    export default {
        name : 'RestaurantView',
        methods: {
            getMenu() {
                // Instead of this log, you will have an axios call that utilizes the parameter
                console.log(this.$route.params.restaurantId);
            },
            getRestInfo(){
                //Same as above
            }
        },
        mounted () {
            this.getRestInfo();
            this.getMenu();

        },
    }
</script>

<style scoped>

</style>