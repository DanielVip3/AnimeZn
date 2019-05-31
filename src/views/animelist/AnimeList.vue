<template>
    <div>
        <Loader :active="loaderActive"></Loader>
        <ErrorDialog :title="errorDialog.title" :text="errorDialog.text" :show="errorDialog.show" v-on:close="errorDialog.show = false"></ErrorDialog>
        <StatsDialog :headers="stats.headers" :values="stats.values" :show="statsDialog.show" v-on:close="statsDialog.show = false"></StatsDialog>
        <table id="anime-list-wrapper">
            <Settings v-on:changeAnimeWatchingStatus="animeRowsAlgorithm" v-on:toggleStats="openStatsDialog" v-on:changeSortMethod="onSortChange"></Settings>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 id="animelist-title">{{enumWatchingStatus(this.watchingStatusFilter)}} Anime</h1>
            <br />
            <br />
            <br />
            <tbody id="anime-list">
                <tr v-for="row in animerows">
                    <Anime v-for="anime in row" class="anime hvr-grow" :title="anime.title" v-tippy="{ placement: 'top', arrow: true }" :data="anime" v-bind:key="anime.mal_id"></Anime>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Loader from '../../components/general/Loader.vue';
    import ErrorDialog from '../../components/general/ErrorDialog.vue';
    import StatsDialog from '../../components/general/StatsDialog.vue';
    import Settings from '../../components/animelist/Settings.vue';
    import Anime from '../../components/animelist/Anime.vue';
    import axios from 'axios';
    import {api_url} from '../../constants.js';

    export default {
        name: "AnimeList",
        components: {
            Anime,
            Settings,
            ErrorDialog,
            StatsDialog,
            Loader
        },
        data() {
            return {
                loaderActive: false,
                watchingStatusFilter: 0,
                statsDialog: {
                    show: false
                },
                errorDialog: {
                  title: '',
                  text: '',
                  show: false
                },
                hover: {},
                sortBy: 'title',
                animerows: null,
                animelist: null,
                localAnimelist: null,
                stats: {
                    headers: [
                        {
                            text: 'Name',
                            value: 'name',
                        },
                        {
                            text: 'Value',
                            value: 'value',
                        }
                    ],
                    values: [
                    ],
                }
            }
        },
        methods: {

            enumWatchingStatusFilter: function(watchingStatus) {
                switch(watchingStatus) {
                    case 'All Anime':
                        return 0;
                    case "Currently Watching":
                        return 1;
                    case "Completed":
                        return 2;
                    case "On Hold":
                        return 3;
                    case "Dropped":
                        return 4;
                    case "Plan to Watch":
                        return 6;
                    default:
                        return 0;
                }
            },

            animeRowsAlgorithm: async function(watchingStatusFilter, executeSort) {

                this.loaderActive = true;

                let animePerRow = 5;

                let width = window.innerWidth;
                if (width < 550) {
                    animePerRow = 1;
                } else if (width < 1000) {
                    animePerRow = 2;
                } else if (width < 1320) {
                    animePerRow = 3;
                } else if (width < 1600) {
                    animePerRow = 4;
                }

                /* Algoritmo di spartizione degli anime in row per la table */
                this.watchingStatusFilter = this.enumWatchingStatusFilter(watchingStatusFilter);

                let localAnimelist = [];
                this.localAnimelist = localAnimelist;
                for (let a in this.animelist) {
                    // Se lo status filter non è 'All Anime'(0), allora, tutti gli anime che non corrispondono al filtro non vanno contati
                    if (this.watchingStatusFilter !== 0 && this.animelist[a].watching_status !== this.watchingStatusFilter) continue;

                    localAnimelist.push(this.animelist[a]);
                }

                let i = 0;
                this.animerows = [];
                let animerow = [];
                for (let a in localAnimelist) {
                    i++;

                    // Se questa è la quinta iterazione di fila
                    if (i % animePerRow === 0) {
                        // Inserisce l'anime nella sua riga
                        let anime = localAnimelist[a];
                        animerow.push(anime);

                        // Inserisce la riga, ormai completata, nell'array delle righe
                        this.animerows.push(animerow);
                        animerow = [];
                    } else {
                        // Inserisce l'anime nella sua riga
                        let anime = localAnimelist[a];
                        animerow.push(anime);

                        // Se l'animelist ormai è non terminata
                        if (i < localAnimelist.length) {
                            // La riga non è completata, quindi non fa nulla
                        } else {
                            // La riga è completata, anche se non è da 5, perché l'animelist ormai è terminata
                            // Quindi pusha la riga nell'array delle righe
                            this.animerows.push(animerow);
                            animerow = [];
                        }
                    }
                }

                if (executeSort && this.sortBy) {
                    this.onSortChange(this.sortBy);
                }

                this.loaderActive = false;
            },

            enumWatchingStatus(num) {
                switch(num) {
                    case 0:
                        return 'All';
                    case 1:
                        return "Currently Watching";
                    case 2:
                        return "Completed";
                    case 3:
                        return "On Hold";
                    case 4:
                        return "Dropped";
                    case 6:
                        return "Plan to Watch";
                    default:
                        return "?";
                }
            },

            openErrorDialog: function (title='', text='') {
                this.errorDialog.show = true;
                this.errorDialog.title = title;
                this.errorDialog.text = text;
            },

            getStats: function() {
                /* Raccoglie le Stats */
                let stats = {};
                let arrayStats = [];

                /* Recupera gli stats da tutti gli anime */
                for (let anime in this.localAnimelist) {
                    anime = this.localAnimelist[anime];

                    let type = anime.type.toLowerCase();

                    if (stats.hasOwnProperty(type)) {
                        stats[type] += 1;
                    } else {
                        stats[type] = 1;
                    }

                    let episodes = anime.watched_episodes;
                    if (stats.hasOwnProperty("episodes")) {
                        stats["episodes"] += episodes;
                    } else {
                        stats["episodes"] = episodes;
                    }

                    let score = anime.score;
                    if (score != null) {
                        if (stats.hasOwnProperty("scores")) {
                            stats["scores"] = stats["scores"].concat([score]);
                        } else {
                            stats["scores"] = [score];
                        }
                    }
                }

                /* Aggiunge gli stats all'array finale degli stats */
                if (stats.hasOwnProperty("tv")) {
                    arrayStats.push({
                        name: 'TV',
                        value: stats.tv
                    });
                } else {
                    arrayStats.push({
                        name: 'TV',
                        value: 0
                    });
                }

                if (stats.hasOwnProperty("ova")) {
                    arrayStats.push({
                        name: 'OVA',
                        value: stats.ova
                    });
                } else {
                    arrayStats.push({
                        name: 'OVA',
                        value: 0
                    });
                }

                if (stats.hasOwnProperty("ona")) {
                    arrayStats.push({
                        name: 'ONA',
                        value: stats.ona
                    });
                } else {
                    arrayStats.push({
                        name: 'ONA',
                        value: 0
                    });
                }

                if (stats.hasOwnProperty("special")) {
                    arrayStats.push({
                        name: 'Specials',
                        value: stats.special
                    });
                } else {
                    arrayStats.push({
                        name: 'Specials',
                        value: 0
                    });
                }

                if (stats.hasOwnProperty("movie")) {
                    arrayStats.push({
                        name: 'Movies',
                        value: stats.movie
                    });
                } else {
                    arrayStats.push({
                        name: 'Movies',
                        value: 0
                    });
                }

                if (stats.hasOwnProperty("episodes")) {
                    arrayStats.push({
                        name: 'Watched Episodes',
                        value: stats.episodes
                    });
                } else {
                    arrayStats.push({
                        name: 'Watched Episodes',
                        value: 0
                    });
                }

                const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
                if (stats.hasOwnProperty("scores")) {
                    arrayStats.push({
                        name: 'Mean Scores',
                        value: average(stats.scores).toFixed(2)
                    });
                } else {
                    arrayStats.push({
                        name: 'Mean Scores',
                        value: '?'
                    });
                }

                return arrayStats;
            },

            openStatsDialog: function () {
                this.stats.values = this.getStats();

                this.statsDialog.show = true;
            },

            onSortChange: function(sortBy) {
                this.sortBy = sortBy.toLowerCase();

                if (this.sortBy === "title") {
                    this.animelist.sort((a, b) => (a.title > b.title) ? 1 : -1);
                } else if (this.sortBy === "score ⮝") {
                    this.animelist.sort((a, b) => (a.score > b.score) ? 1 : -1);
                } else if (this.sortBy === "score ⮟") {
                    this.animelist.sort((a, b) => (a.score < b.score) ? 1 : -1);
                } else if (this.sortBy === "status") {
                    this.animelist.sort((a, b) => (a.watching_status > b.watching_status) ? 1 : -1);
                } else if (this.sortBy === "progress") {
                    this.animelist.sort((a, b) => (a.watched_episodes < b.watched_episodes) ? 1 : -1);
                }

                this.animeRowsAlgorithm(this.enumWatchingStatus(this.watchingStatusFilter), false);

                this.$forceUpdate();
            }
        },
        mounted() {
            document.querySelector("#app").style.backgroundImage = "url('https://archive-media-0.nyafuu.org/w/image/1450/64/1450646005484.jpg')";
            document.querySelector("#app").style.backgroundSize = "cover";
            document.querySelector("#app").style.backgroundRepeat = "no-repeat";
            document.querySelector("#app").style.backgroundAttachment = "fixed";
            document.querySelector("#app").style.backgroundPosition = "center";

            this.loaderActive = true;

            axios.get(api_url+"/api/animelist/getAnimeList?username=DanielVip3").then(response => {
                // Crea un nuovo array. Questo array deve contenere altri array, che contengono a loro volta anime. Questo array inoltre deve raggruppare gli anime in array di 5.
                this.animerows = [];
                this.animelist = response["data"]["anime"];
                this.localAnimelist = this.animelist;

                this.animeRowsAlgorithm('All Anime', true);
            }).catch(err => {
                this.openErrorDialog("Error", "The page had a problem while loading animelist.");
            });
        },
        destroyed() {
            document.querySelector("#app").style.backgroundImage = "";
            document.querySelector("#app").style.backgroundSize = "";
            document.querySelector("#app").style.backgroundRepeat = "";
            document.querySelector("#app").style.backgroundAttachment = "";
            document.querySelector("#app").style.backgroundPosition = "";
            document.querySelector("#app").style.backgroundColor = "";
        },
    }
</script>

<style>
    #animelist-title {
        color: black;
        font-family: 'Audiowide', sans-serif;
    }

    #anime-list-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #anime-list {
        border-collapse: separate;
        border-spacing: 20px 10px;
    }
</style>