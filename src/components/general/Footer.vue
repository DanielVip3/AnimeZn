<template>

    <!-- Footer -->
    <v-footer id="footer" dark height="auto">
        <v-card class="flex" color="primary">
            <v-card-title id="footer-title">
                <div class="logo">
                    <img src="https://i.imgur.com/IhVMgVw.png" />
                </div>

                <v-spacer></v-spacer>

                <div id="up-button-wrapper">
                    <router-link class="up-button-link" to="#top-page" @click.native="scrollFix('#main')">
                        <v-btn class="up-button teal">
                            <v-icon>expand_less</v-icon>
                        </v-btn>
                    </router-link>
                </div>
            </v-card-title>

            <v-card-text id="footer-inner">
                <span class="about-site"><strong class="question">What is this website?</strong>&nbsp;&nbsp;AnimeZn is a webapp that I mainly use to track animes I watch(connecting it to MyAnimeList), and to let others see my favourite things related to japanese animation.</span>
                <span class="about-me"><strong class="question">Who am I?</strong>&nbsp;&nbsp;I'm a full-stack web developer, that loves anime, manga and japanese culture - discover more about me on <a href="https://www.danieledemartino.tk/">https://www.danieledemartino.tk/</a></span>

                <span class="little-text disclaimer">Disclaimer: most of the content of this website is took from third-parties, like animes from AnimeList or images from various artists. All the content belongs to its owner.</span>
            </v-card-text>

            <v-card-actions id="footer-copyright" class="grey justify-center primary darker-4">
                <span>&copy;&nbsp;2018-2019 —&nbsp;<strong>AnimeZn</strong> by DanielVip3. All rights reserved.</span>
            </v-card-actions>
        </v-card>
    </v-footer>

</template>

<script>
    export default {
        name: "Footer",
        methods: {
            scrollFix: function (hashbang) {
                location.href = hashbang;
            },
        }
    }
</script>

<style>
    #footer {
        z-index: 100;
    }

    #footer-title {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
    }

    #footer-title .logo {
        grid-row: 1;
        grid-column: 1;
        text-align: center;
    }

    #footer-title .logo img {
        width: 200px;
    }

    @media (max-width: 280px) {
        #footer-title .logo img {
            width: 100px;
        }
    }

    #up-button-wrapper {
        display: flex;
        justify-content: center;
        grid-row: 1;
        grid-column: 2;
    }

    #up-button-wrapper .up-button {
        width: 100%;
    }

    #up-button-wrapper .up-button-link {
        width: -moz-min-content;
        width: min-content;
        max-width: 100%;
        min-width: 25%;
        text-align: center;
    }

    #footer-inner {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr;
    }

    .little-text {
        font-size: 80%;
    }

    .about-site {
        padding: 0.7vh;
        grid-row: 1;
        grid-column: 1;
        text-align: center;
    }

    .about-me {
        padding: 0.7vh;
        grid-row: 2;
        grid-column: 1;
        text-align: center;
        word-break: break-word;
    }

    .disclaimer {
        padding: 0.7vh;
        grid-row: 3;
        grid-column: 1;
        text-align: center;
    }

    .question {
        color: teal;
    }

    #footer-copyright {
        margin: 0.5%;
        margin-bottom: 1%;
        text-align: center;
    }
</style>