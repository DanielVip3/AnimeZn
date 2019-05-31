<template>
    <div class="top-wrapper">
        <div class="cover-wrapper">
            <img class="cover" src="https://i.imgur.com/SbdNVGn.png" />
        </div>
        <v-toolbar id="filters-bar" height="50%">
            <v-toolbar-items style="width: 12%; background-color: #E5E5E4; overflow: hidden;">
                <v-divider color="gray" vertical></v-divider>
                <v-select
                        hide-selected
                        background-color="#E5E5E4"
                        id="filters-sort"
                        :items="['Title', 'Score ⮝', 'Score ⮟', 'Status', 'Progress']"
                        v-on:change="$emit('changeSortMethod', $event)"
                >
                    <template slot="label" style="font-size: 14px;">
                        <i class="fas fa-sort" style="font-size: 16px;"></i>&nbsp;&nbsp;SORT
                    </template>
                </v-select>
                <v-divider color="gray" vertical></v-divider>
            </v-toolbar-items>

            <v-spacer></v-spacer>
            <v-toolbar-title class="avatar-wrapper">
                <div class="avatar"></div>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- Menu desktop -->
            <v-toolbar-items class="hidden-md-and-down">
                <v-divider color="gray" vertical></v-divider>
                <v-btn flat @click="$emit('changeAnimeWatchingStatus', 'All Anime')">
                    <i class="fas fa-th-list"></i>&nbsp;&nbsp;All Anime
                </v-btn>
                <v-btn flat @click="$emit('changeAnimeWatchingStatus', 'Currently Watching')">
                    <i class="fas fa-caret-square-right"></i>&nbsp;&nbsp;Currently Watching
                </v-btn>
                <v-btn flat @click="$emit('changeAnimeWatchingStatus', 'Completed')">
                    <i class="far fa-calendar-check"></i>&nbsp;&nbsp;Completed
                </v-btn>
                <v-btn flat @click="$emit('changeAnimeWatchingStatus', 'On Hold')">
                    <i class="far fa-clock"></i>&nbsp;&nbsp;On Hold
                </v-btn>
                <v-btn flat @click="$emit('changeAnimeWatchingStatus', 'Dropped')">
                    <i class="far fa-calendar-times"></i>&nbsp;&nbsp;Dropped
                </v-btn>
                <v-btn flat @click="$emit('changeAnimeWatchingStatus', 'Plan to Watch')">
                    <i class="far fa-calendar-alt"></i>&nbsp;&nbsp;Plan to Watch
                </v-btn>
                <v-divider color="gray" vertical></v-divider>
                <v-btn flat @click="$emit('toggleStats')">
                    <i class="fas fa-chart-bar"></i>&nbsp;&nbsp;Stats
                </v-btn>
                <v-divider color="gray" vertical></v-divider>
            </v-toolbar-items>

            <!-- Menu mobile -->
            <v-spacer class="hidden-lg-and-up"></v-spacer>
            <v-menu class="hidden-lg-and-up" id="mobile-menu">
                <!-- Icona d'apertura sidebar -->
                <v-toolbar-side-icon class="mobile-burger-activator" slot="activator"></v-toolbar-side-icon>

                <!-- Lista items -->
                <v-list>
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-btn flat @click="$emit('changeAnimeWatchingStatus', 'All Anime')">
                                <i class="fas fa-th-list"></i>&nbsp;&nbsp;All Anime
                            </v-btn>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-content>
                            <v-btn flat @click="$emit('changeAnimeWatchingStatus', 'Currently Watching')">
                                <i class="fas fa-caret-square-right"></i>&nbsp;&nbsp;Currently Watching
                            </v-btn>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-content>
                            <v-btn flat @click="$emit('changeAnimeWatchingStatus', 'Completed')">
                                <i class="far fa-calendar-check"></i>&nbsp;&nbsp;Completed
                            </v-btn>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-content>
                            <v-btn flat @click="$emit('changeAnimeWatchingStatus', 'On Hold')">
                                <i class="far fa-clock"></i>&nbsp;&nbsp;On Hold
                            </v-btn>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-content>
                            <v-btn flat @click="$emit('changeAnimeWatchingStatus', 'Dropped')">
                                <i class="far fa-calendar-times"></i>&nbsp;&nbsp;Dropped
                            </v-btn>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-content>
                            <v-btn flat @click="$emit('changeAnimeWatchingStatus', 'Plan to Watch')">
                                <i class="far fa-calendar-alt"></i>&nbsp;&nbsp;Plan to Watch
                            </v-btn>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-content>
                            <v-btn flat @click="$emit('toggleStats')">
                                <i class="fas fa-chart-bar"></i>&nbsp;&nbsp;Stats
                            </v-btn>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "Settings"
    }
</script>

<style>
    .v-toolbar__content {
        padding-left: 0;
        padding-right: 0;
    }

    .v-input__control, .v-input__slot {
        margin: 0;
        height: 100%;
    }

    .v-select__slot {
        margin-left: 15%;
        margin-bottom: 5%;
    }

    .v-label {
        color: black!important;
        font-size: 14px;
    }

    .v-icon {
        color: black!important;
    }

    .v-select-list, .v-select-list * {
        color: black!important;
        background-color: #E5E5E4!important;
    }

    #mobile-menu {
        margin-right: 3%;
    }

    @media (max-width: 1260px) {
        .v-toolbar__items {
            width: 20%!important;
        }
    }
</style>

<style scoped>
    .top-wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-content: start;
    }

    .cover-wrapper {
        width: 100%;
        height: 65%;
        display: flex;
        justify-content: center;
        margin-top: 5%;
        position: relative;
    }

    .cover {
        width: 80%;
        height: 40%;
        border: black 2px solid;
        box-shadow: 2px 3px rgba(0, 0, 0, 0.1);
    }

    #filters-bar {
        width: 80%;
    }

    #filters-sort {
        padding: 0;
        margin: 0;
        height: 100%;
        color: black;
        font-size: 14px;
    }

    @media (max-width: 1260px) {
        .cover {
            width: 75%;
            height: 40%;
            border: black 2px solid;
            box-shadow: 2px 3px rgba(0, 0, 0, 0.1);
        }

        #filters-bar {
            width: 75%;
        }
    }

    #filters-sort {
        padding: 0;
        margin: 0;
        height: 100%;
        color: black;
        font-size: 14px;
    }

    .avatar-wrapper {
        margin: 0;
        width: 134px;
        height: 134px;
        background-image: url("https://i.pinimg.com/originals/5d/e0/75/5de075acde228152934ffb719dadd8f3.gif");
        background-size: cover;
        position: relative;
        top: -20px;
        border: 2px solid white;
        border-radius: 10px;
    }

    .avatar {
        width: 100%;
        height: 100%;
    }

    .mobile-burger-activator {
        margin-left: 5%;
    }
</style>