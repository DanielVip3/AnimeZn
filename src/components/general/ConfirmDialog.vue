<template>
    <!-- Dialog -->
    <v-dialog v-model="show_d" width="30%">
        <v-card>
            <v-card-title class="dialog-title headline lighten-2" primary-title>
                {{ title }}
            </v-card-title>

            <v-card-text class="dialog-description">
                {{ text }}
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="dialog-actions">
                <v-spacer></v-spacer>
                <v-btn color="success" flat @click="yes">Yes</v-btn>
                <v-btn color="error" flat @click="no">No</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>


<script>
    export default {
        name: 'ConfirmDialog',
        /* Props:
        * title: String
        * text: String
        * id: String
        * show: Boolean
        * */
        props: {
            title: {
                type: String,
                required: false
            },
            text: {
                type: String,
                required: false
            },
            id: {
                type: String,
                required: true
            },
            show: {
                type: Boolean,
                required: false,
                default: false
            }
        },
        watch: {
            show: function(newVal, oldVal) {
                this.show_d = newVal;
            }
        },
        data() {
            return {
                title: '',
                text: '',
                show_d: false,
                approve: false,
            }
        },
        mounted() {
            this.show_d = this.show;
        },
        methods: {
            yes: function() {
                this.show_d = false;
                this.approve = true;
                this.$emit('selected', this.approve, this.id);
            },
            no: function() {
                this.show_d = false;
                this.approve = false;
                this.$emit('selected', this.approve, this.id);
            }
        }
    }
</script>


<style scoped>
    .dialog-title {
        background-color: #FFC30F;
        color: white;
        text-align: center;
    }

    .dialog-description {
        color: black;
    }
</style>