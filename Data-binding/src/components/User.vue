<template>
    <div class="component">
        <p>My name is: {{ name }}</p>
        <p>Now, I am {{ parentage }} years old</p>
        <button v-on:click="resetAge">Reset default age</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-6">
                <app-user-detail v-bind:childage="parentage" v-on:ageWasUpdated="parentage = $event" ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6 col-6">
                <app-user-edit v-bind:editage="parentage" v-on:ageWasEdited="parentage = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function () {
            return {
                name: 'Minh',
                parentage: 22
            };
        },

        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
            resetAge () {
                this.parentage = 22
            }
        }
    }
</script>