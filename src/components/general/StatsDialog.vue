<template>
    <!-- Dialog -->
    <v-dialog persistent v-model="show_d" width="25%">
        <v-card>
            <v-card-actions class="dialog-actions">
                <v-spacer></v-spacer>
                <v-btn class="dialog-close-button" color="black" flat @click="close"><i class="fas fa-times"></i></v-btn>
            </v-card-actions>

            <v-card-title class="dialog-title headline" primary-title>
                <span>Stats about all anime in the current list</span>
            </v-card-title>

            <v-card-text class="dialog-description">
                <v-data-table
                        hide-headers
                        hide-actions
                        :headers="headers"
                        :items="values"
                        class="elevation-1"
                >
                    <template v-slot:items="props">
                        <td>{{ props.item.name }}</td>
                        <td style="color: black; font-weight: bold;" class="text-xs-right dialog-table-item-value">{{ props.item.value }}</td>
                    </template>
                </v-data-table>
            </v-card-text>

            <v-divider></v-divider>
        </v-card>
    </v-dialog>
</template>


<script>
    export default {
        name: 'StatsDialog',
        /* Props:
        * headers: Array,
        * values: Array,
        * show: Boolean
        * */
        props: {
            headers: {
                type: Array,
                required: true
            },
            values: {
                type: Array,
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
                show_d: false
            }
        },
        mounted() {
            this.show_d = this.show;
        },
        methods: {
            close: function() {
                this.show_d = false;
                this.$emit('close');
            }
        }
    }
</script>


<style scoped>
    .dialog-close-button {
        width: 10%;
    }

    .dialog-close-button * {
        font-size: 150%;
        color: #F65656;
    }

    .dialog-title {
        padding-bottom: 0;
        padding-top: 0;
        display: block;
        color: black;
        text-align: center;
    }

    .dialog-table-item-value, .text-xs-right {
        color: black;
        font-weight: bold;
    }
</style>