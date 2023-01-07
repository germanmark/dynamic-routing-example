<template>
    <div>
        <div v-for="rest in restaurants" :key="rest.id">
            <router-link :to="'/restaurant/'+rest.id">{{rest.name}}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RestList",
        data() {
            return {
                restaurants: []
            }
        },
        methods: {
            getRestaurants() {
                // This will obviously not be hard-coded but populated from an api call
                this.restaurants = [
                                    {
                                        name : "Rest1",
                                        id : 10
                                    },
                                    {
                                        name : "Rest2",
                                        id : 20
                                    },
                                    {
                                        name : "Rest3",
                                        id : 30
                                    },
                ]
            }
        },
        mounted () {
            this.getRestaurants();
        },
    }
</script>

<style lang="scss" scoped>

</style>