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
                <v-btn color="black" flat @click="show_d = false">OK</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>


<script>
    export default {
        name: 'ErrorDialog',
        /* Props:
        * title: String
        * text: String
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
                show_d: false
            }
        },
        mounted() {
            this.show_d = this.show;
        }
    }
</script>


<style scoped>
    .dialog-title {
        background-color: #F65656;
        color: white;
        text-align: center;
    }

    .dialog-description {
        color: black;
    }
</style>