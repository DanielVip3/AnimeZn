<template>
    <!-- Navbar, sia desktop che mobile -->
    <v-toolbar color="primary" id="navbar" class="sticky">
        <v-toolbar-title class="title" style="margin-left: 1%;">
            <router-link class="up-button-link" to="/">
                <img src="https://i.imgur.com/IhVMgVw.png" width="50%" />
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- Menu desktop -->
        <v-toolbar-items class="hidden-md-and-down" style="margin-right: 1%;">
            <v-btn flat :to="{path: '/animelist'}">
                <v-icon>list_alt</v-icon>&nbsp;&nbsp;AnimeList
            </v-btn>

            <v-btn flat :to="{path: '/waifulanding'}">
                <v-icon>developer_board</v-icon>&nbsp;&nbsp;WaifuLanding
            </v-btn>

            <v-btn flat :to="{path: '/admin'}">
                <v-icon>gavel</v-icon>&nbsp;&nbsp;Admin
            </v-btn>
        </v-toolbar-items>

        <!-- Menu mobile -->
        <v-menu class="hidden-lg-and-up" style="margin-right: 1%;">
            <!-- Icona d'apertura sidebar -->
            <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>

            <!-- Lista sidebar -->
            <v-list id="sidebar">

                <v-list-tile :to="{path: '/animelist'}" class="sidebar-item">
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <v-icon class="sidebar-item-icon">list_alt</v-icon>&nbsp;&nbsp;AnimeList
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile :to="{path: '/waifulanding'}" class="sidebar-item">
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <v-icon class="sidebar-item-icon">developer_board</v-icon>&nbsp;&nbsp;WaifuLanding
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile :to="{path: '/admin'}" class="sidebar-item">
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <v-icon class="sidebar-item-icon">gavel</v-icon>&nbsp;&nbsp;Admin
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

            </v-list>
        </v-menu>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Navbar",
        data: function() {
            return {};
        },
        computed: {
        },
        methods: {
        }
    }
</script>

<style>
    #navbar {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 100;
        color: white!important;
    }

    #navbar .title {
        font-size: 200%!important;
    }

    #navbar * {
        color: white!important;
    }

    #sidebar, .sidebar-item-icon {
        height: auto!important;
        background-color: var(--v-primary-base);
        color: white!important;
    }

    .v-list__tile__title > .sidebar-item-icon {
        color: white!important;
    }

    #sidebar .sidebar-item {
        color: white!important;
    }

    a.primary--text {
        color: white!important;
    }
</style>