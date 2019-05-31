<template>
    <div>
        <ErrorDialog :title="errorDialog.title" :text="errorDialog.text" :show="errorDialog.show" v-on:close="errorDialog.show = false"></ErrorDialog>
        <ConfirmDialog :title="confirmDialog.title" :text="confirmDialog.text" :show="confirmDialog.show" :id="confirmDialog.id" v-on:selected="areYouSureConfirmDialog"></ConfirmDialog>

        <!-- Se sei Admin -->
        <div v-if="isAdmin" class="dashboard">
            <!-- Cache -->
            <v-card class="operation-card elevation-10">
                <v-card-title class="operation-card-title">Cache Operations</v-card-title>
                <v-divider></v-divider>
                <v-card-text class="operation-card-text">
                    <v-btn color="#FF6666" class="operation-button" @click="openConfirmDialog('Are you sure?', 'You are about to flush the backend cache.', 'flush-backend-cache')">
                        Flush cache
                    </v-btn>
                </v-card-text>
            </v-card>

            <div class="new-row hidden-md-and-up"></div>

            <!-- Maintenance -->
            <v-card class="operation-card elevation-10">
                <v-card-title class="operation-card-title">Maintenance</v-card-title>
                <v-divider></v-divider>
                <v-card-text class="operation-card-text">
                    <v-switch :label="maintenanceLabel" color="orange" @change="maintenanceChange" :value="maintenance" class="operation-switch"></v-switch>
                </v-card-text>
            </v-card>

            <div class="new-row"></div>

            <!-- Add anime to list -->
            <v-card class="operation-card elevation-10">
                <v-card-title class="operation-card-title">Search anime</v-card-title>
                <v-divider></v-divider>
                <v-card-text class="operation-card-text">
                    <v-autocomplete
                            v-model="animeSearch"
                            :items="previewsSearch"
                            label="Anime search"
                            persistent-hint
                            @change="searchAnime"
                    >
                    </v-autocomplete>
                </v-card-text>
            </v-card>

            <div class="new-row hidden-md-and-up"></div>

            <!-- Leave -->
            <v-card class="operation-card elevation-10">
                <v-card-title class="operation-card-title">Others</v-card-title>
                <v-divider></v-divider>
                <v-card-text class="operation-card-text">
                    <v-btn color="#FF6666" class="operation-button" @click="openConfirmDialog('Are you sure?', 'You are about to leave the admin zone.', 'close-admin-zone')">
                        Leave Admin Zone&nbsp;&nbsp;<i style="font-size: 130%;" class="fas fa-angle-right"></i>
                    </v-btn>
                </v-card-text>
            </v-card>
        </div>

        <!-- Se non sei Admin -->
        <div v-if="!isAdmin" id="notadmin">
            <img class="error-talker-image" src="https://66.media.tumblr.com/d3c6796aa381239bf44da9ea94a977f2/tumblr_pfdts4zk6U1vmiv6s_540.png" />
            <div class="error-content">
                <img class="error-image" src="https://i.imgur.com/EqIfqQt.png" />
                <p class="error-content">Psst: I think you're lost, dear GangStar. You're not authorized to enter this section. <br />So, please, leave this page and stay away from drugs.</p>
            </div>
        </div>
    </div>
</template>

<script>
    import ErrorDialog from '../../components/general/ErrorDialog';
    import ConfirmDialog from '../../components/general/ConfirmDialog';
    import axios from 'axios';
    import {api_url} from '../../constants.js';

    export default {
        name: "AnimeList",
        components: {
            ErrorDialog,
            ConfirmDialog
        },
        watch: {
            animeSearch: function(val, oldVal) {
                this.animeSearchBarValue = val;
                this.searchAnime(val);
            }
        },
        data() {
            return {
                errorDialog: {
                    title: "Error",
                    text: "",
                    show: false
                },
                confirmDialog: {
                    title: "Are you sure?",
                    text: "",
                    id: "",
                    show: false
                },
                password: localStorage.getItem('password'),
                isAdmin: false,
                maintenanceLabel: 'Maintenance Mode: OFF',
                maintenance: false,
                animeSearchBarValue: null,
                previewsSearch: [],
            }
        },
        methods: {
            openErrorDialog: function(title='', text='') {
                this.errorDialog.show = true;
                this.errorDialog.title = title;
                this.errorDialog.text = text;
            },
            openConfirmDialog: function(title='', text='', id='unknown') {
                this.confirmDialog.show = true;
                this.confirmDialog.title = title;
                this.confirmDialog.text = text;
                this.confirmDialog.id = id;
            },
            areYouSureConfirmDialog: function(sure, eventId) {

                if (!sure) return;

                if (eventId === 'close-admin-zone') {
                    localStorage.removeItem('password');
                    this.$router.push('/');

                } else if (eventId === 'flush-backend-cache') {
                    axios({
                        method: 'post',
                        url: api_url+"/admin/flushCache",
                        data: {
                            password: this.password
                        }
                    }).then(response => {
                        response = response.data;
                        if (response.hasOwnProperty("type")) {
                            if (response.type === 'error') {
                                this.openErrorDialog("Error", response.message);
                            } else {
                                this.$router.go(null);
                            }
                        }
                    }).catch(err => {
                        console.log(err);
                        this.openErrorDialog("Error", "There's been an unknown error when flushing the backend's cache.");
                    });

                } else if (eventId === 'maintenanceOn') {
                    axios({
                        method: 'post',
                        url: api_url+"/api/maintenance",
                        data: {
                            password: this.password
                        }
                    }).then(response => {
                        this.$router.go(null);
                    }).catch(err => {
                        console.log(err);
                        this.openErrorDialog("Error", "There's been an unknown error when activating the maintenance.");
                    });

                } else if (eventId === 'maintenanceOff') {
                    axios({
                        method: 'delete',
                        url: api_url+"/api/maintenance",
                        data: {
                            password: this.password
                        }
                    }).then(response => {
                        this.$router.go(null);
                    }).catch(err => {
                        console.log(err);
                        this.openErrorDialog("Error", "There's been an unknown error when deactivating the maintenance.");
                    });
                }
            },
            maintenanceChange: function(val) {
                if (val) {
                    this.maintenanceLabel = 'Maintenance Mode: ON';
                    this.areYouSureConfirmDialog(true, 'maintenanceOn');
                } else {
                    this.maintenanceLabel = 'Maintenance Mode: OFF';
                    this.areYouSureConfirmDialog(true, 'maintenanceOff');
                }
            },
            searchAnime: function(text) {
                alert(text);
                axios({
                    method: 'get',
                    url: api_url+"/api/anime/getAnimeByName?title="+text,
                    data: {
                        title: text,
                    }
                }).then(response => {
                    let previewsSearch = [];
                    let previews = response.data.results.splice(0, 10);

                    for (let p in previews) {
                        let preview = previews[p];
                        previewsSearch.push(preview.title);
                    }

                    this.previewsSearch = previews;
                }).catch(err => {
                    console.log(err);
                    this.openErrorDialog("Error", "There's been an unknown error when searching animes.");
                });
            }
        },
        beforeMount() {
            axios({
                method: 'post',
                url: api_url+"/admin/isAdmin",
                data: {
                    password: this.password
                }
            }).then(response => {
                this.isAdmin = response.data;

                axios({
                    method: 'post',
                    url: api_url+"/admin/isInMaintenance"
                }).then(response => {
                    this.maintenance = response.data;
                    if (this.maintenance) {
                        this.maintenanceLabel = 'Maintenance Mode: ON';
                    } else {
                        this.maintenanceLabel = 'Maintenance Mode: OFF';
                    }
                });
            }).catch(err => {
                this.openErrorDialog("Error", "You aren't an admin.");
            });
        },
        mounted() {
        },
    }
</script>

<style>
    .v-input--switch {
        padding: 0;
        display: flex;
        justify-content: center;
    }

    .v-input__control {
        display: flex!important;
        justify-content: center!important;
        align-items: center!important;
    }

    .v-text-field__details {
        display: none;
    }

    .anime-search-bar > .v-input__control, .anime-search-bar > .v-input__control > .v-input__slot {
        width: 80%;
    }
</style>

<style scoped>
    .dashboard {
        margin-top: 5%;
        margin-bottom: 30%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

    }

    .new-row {
        width: 100%;
    }

    .operation-card {
        margin-top: 5%;
        width: 25%;
    }

    @media (max-width: 800px) {
        .operation-card {
            width: 50%;
        }
    }

    @media (max-width: 450px) {
        .operation-card {
            width: 80%;
        }
    }

    .operation-card-title {
        font-size: 16px;
        font-weight: bold;
    }

    .operation-card-text {
        padding-left: 0;
        padding-right: 0;
        display: flex;
        justify-content: center;
    }

    .operation-button {
        color: white;
    }

    .anime-search-bar {
        display: flex;
        justify-content: center;
    }

    #notadmin {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 100vw;
        height: 90vh;
    }

    .error-talker-image {
        margin-left: 2%;
        width: 20%;
        max-width: 200px;
        max-height: 70%;
    }

    .error-image {
        width: 80%;
    }

    .error-content {
        text-align: center;
        font-size: 100%;
        margin-left: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>