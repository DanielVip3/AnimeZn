<template>
    <td class="anime">
        <img class="anime-cover" :src="anime.image_url" />
        <span class="anime-type">{{anime.type}}</span>
        <span class="anime-airing-status">{{enumAiringStatus(anime.airing_status)}}</span>
        <button title="Edit anime" v-tippy="{ placement: 'bottom', interactive: 'true', animation : 'shift-away' }" class="anime-edit-button">
            <i class="fas fa-pencil-alt"></i>
        </button>
        <button :title="enumWatchingStatus(anime.watching_status)" v-tippy="{ placement: 'bottom', interactive: 'true', animation : 'shift-away' }" :style="{'background-color': colorWatchingStatus(anime.watching_status)}" class="anime-status-marker">
            <i :class="enumWatchingStatusIcon(anime.watching_status)"></i>
        </button>
        <div class="anime-inner">
            <span class="anime-title">{{anime.title}}</span>
            <span class="anime-episodes">{{anime.watched_episodes}} / {{anime.total_episodes <= 0 ? '?' : anime.total_episodes}}</span>
            <span class="anime-rating">{{anime.score}}</span>
        </div>
    </td>
</template>

<script>
    export default {
        name: "Anime",
        props: ['data'],
        data() {
            return {
                anime: null
            };
        },
        methods: {
            enumAiringStatus(num) {
                switch(num) {
                    case 1:
                        return "Airing";
                    case 2:
                        return "Completed";
                    case 3:
                        return "To be Aired";
                    default:
                        return "?";
                }
            },
            enumWatchingStatus(num) {
                switch(num) {
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
            enumWatchingStatusIcon(num) {
                switch(num) {
                    case 1:
                        return "fas fa-caret-square-right";
                    case 2:
                        return "far fa-calendar-check";
                    case 3:
                        return "far fa-clock";
                    case 4:
                        return "far fa-calendar-times";
                    case 6:
                        return "far fa-calendar-alt";
                    default:
                        return "?";
                }
            },
            colorWatchingStatus(num) {
                switch(num) {
                    case 1:
                        return "#2DB039";
                    case 2:
                        return "#26448F";
                    case 3:
                        return "#F1C83E";
                    case 4:
                        return "#A12F31";
                    case 6:
                        return "#84878B";
                    default:
                        return "#000000";
                }
            }
        },
        beforeMount() {
            this.anime = this.data;
        }
    }
</script>

<style scoped>
    .anime {
        font-family: 'Josefin Sans', 'Source Sans Pro', sans-serif;
        margin: 15px!important;
        position: relative;
        cursor: pointer;
    }

    .anime-cover {
        width: 225px;
        height: 318px;
    }

    .anime-title {
        padding-left: 1%;
        padding-right: 1%;
        position: absolute;
        bottom: 50%;
        color: white;
        font-size: 18px;
        font-weight: 500;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: block;
        width: 100%;
        left: 0;
        text-align: center;
        font-family: 'Josefin Sans', 'Source Sans Pro', sans-serif;
    }

    .anime-episodes {
        position: absolute;
        bottom: 10%;
        left: 5%;
        color: white;
        font-family: 'Josefin Sans', 'Source Sans Pro', sans-serif;
    }

    .anime-rating {
        position: absolute;
        bottom: 10%;
        right: 5%;
        color: white;
        font-family: 'Josefin Sans', 'Source Sans Pro', sans-serif;
    }

    .anime-type {
        position: absolute;
        top: 3%;
        right: 5%;
        color: white;
        font-family: 'Audiowide', sans-serif;
    }

    .anime-airing-status {
        position: absolute;
        top: 10%;
        right: 5%;
        color: white;
        font-family: 'Audiowide', sans-serif;
    }

    .anime-edit-button {
        cursor: pointer;
        position: absolute;
        top: 3%;
        left: 25px;
        color: white;
        background-color: #309FAE;
        border: 0;
        width: 25px;
        height: 25px;
        text-align: center;
        font-size: 13px;
    }

    .anime-status-marker {
        position: absolute;
        top: 3%;
        left: 0;
        color: white;
        background-color: green;
        border: 0;
        width: 25px;
        height: 25px;
        text-align: center;
        font-size: 13px;
    }

    .anime-inner {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        top: 78%;
        left: 0;
        width: 100%;
        height: 20%;
        font-family: 'Josefin Sans', 'Source Sans Pro', sans-serif;
    }
</style>