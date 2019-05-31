<template>
    <div class="uninteractive" :style="[!active ? {'display': 'none'} : {'display': 'block'}]">
        <v-card class="loader" color="primary" dark :style="windowHeight > 800 ? {'height': '40%'} : {'height': '40%'}">
            <v-card-text>
                <v-progress-circular class="loader-loading"
                                     indeterminate
                                     :width="windowHeight > 800? 10 : 6"
                                     :size="windowHeight > 800? 150 : 75"
                                     color="red"
                                     >
                </v-progress-circular>
                <p class="loader-text" :style="windowHeight > 800 ? {'font-size': '150%'} : {'font-size': '100%'}">Please, wait until the AnimeList loads.</p>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Loader",
        props: ['active'],
        data() {
            return {
                windowHeight: 0
            };
        },
        mounted() {
            this.$nextTick(() => {
                window.addEventListener('resize', () => {
                    this.windowHeight = window.innerHeight;
                });
            });
        }
    }
</script>

<style scoped>
    .uninteractive {
        background-color: rgba(255, 255, 255, 0.3);
        z-index: 98;
        position: fixed;
        width: 100%;
        height: 100%;
    }

    .loader {
        text-align: center;
        z-index: 99;
        position: fixed;
        margin: auto;
        top: 50%;
        bottom: 50%;
        left: 0;
        right: 0;
        width: 30%;
    }

    .loader-loading {
        position: absolute;
        margin: auto;
        top: 50%;
        bottom: 50%;
        left: 0;
        right: 0;
    }
</style>