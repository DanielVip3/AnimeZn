<template>
    <div class="kaede-wrapper">
        <p class="kaede-name">KAEDE</p>
        <div class="kaede-image-wrapper">
            <img class="kaede-image" height="400" src="https://i.imgur.com/r1qtcdC.jpg" alt="Kaede" />
        </div>
        <v-card class="kaede-quote-card" color="#BA9698">
            <v-card-title class="kaede-quote-card-title">
                <h3>The Naive Panda-loli</h3>
            </v-card-title>
            <v-divider class="kaede-inner-divider"></v-divider>
            <v-card-text class="kaede-quote">
                Onii-chan has given Kaede so much happiness. She loves him now, has always loved him, and will always love him.
                <br><br><v-divider class="kaede-inner-divider"></v-divider>
                <p class="why-kaede">Why Kaede? Uhm...</p>
                <span class="because-kaede">I think that it should be self-explanatory. Just seeing her cuteness with that panda costume should answer this. But maybe, the fact that she's naive and doesn't know nothing about the outside word, makes her even more cute. Also, he loves her onii-chan. I won't talk anymore about her, to avoid spoilers from Bunny Girl Senpai.</span><br>
                <br>
                <!-- Chips(badges) -->
                <v-chip class="waifu-badge" color="#ffefe0">
                    <i class="fas fa-heart"></i>&nbsp;
                    Cute loli
                </v-chip>
                <v-chip class="waifu-badge" color="#d65cc7">
                    <i class="fas fa-grin-hearts"></i>&nbsp;
                    Adorable
                </v-chip>
                <v-chip class="waifu-badge" color="#fecdc9">
                    <i class="fas fa-flushed"></i>&nbsp;
                    Shy
                </v-chip>
                <v-chip class="waifu-badge" color="#b29fb0">
                    <i class="fas fa-home"></i>&nbsp;
                    Hikikomori
                </v-chip>
                <v-chip class="waifu-badge" color="#a0522d">
                    <i class="fas fa-male"></i>&nbsp;
                    Onii-chan
                </v-chip>
                <v-chip class="waifu-badge" color="#ece15d">
                    <i class="fas fa-grin-tongue-squint"></i>&nbsp;
                    Panda
                </v-chip>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Kaede",
        components: {
        }
    }
</script>

<style>
    .kaede-wrapper {
        display: flex;
        flex-direction: column;
    }

    .kaede-name {
        text-align: center;
        color: #FFEAD5;
        font-size: 400%;
        font-family: 'Caveat Brush', sans-serif;
    }

    .kaede-image-wrapper {
        background-color: var(--v-primary-base);
        width: 100%;
        height: 20vh;
        -webkit-clip-path: polygon(0 0, 100% 18%, 100% 75%, 0% 100%);
        clip-path: polygon(0 0, 100% 18%, 100% 75%, 0% 100%);
    }

    .kaede-image {
        object-fit: cover;
        object-position: left;
        width: 100%;
        height: 20vh;
        -webkit-clip-path: polygon(0 2%, 100% 20%, 100% 73%, 0% 98%);
        clip-path: polygon(0 2%, 100% 20%, 100% 73%, 0% 98%);
        border-top: var(--v-primary-base) solid;
        border-bottom: var(--v-primary-base) solid;
    }

    .kaede-quote-card {
        margin-top: 1%;
        margin-left: 10%;
        width: 80%;
        font-size: 150%;
        font-family: 'Permanent Marker', 'Source Sans Pro', sans-serif;
        text-align: center;
        padding-left: 10%;
        padding-right: 10%;
    }

    .kaede-quote-card {
        margin-top: 1%;
        margin-left: 10%;
        width: 80%;
        font-size: 150%;
        font-family: 'Permanent Marker', 'Source Sans Pro', sans-serif;
        text-align: center;
        padding-left: 10%;
        padding-right: 10%;
    }

    .kaede-quote-card-title {
        display: flex;
        justify-content: center;
        text-align: center;
        color: --var(v-primary-base);
    }

    .kaede-quote {
        color: #FFEAD5;
    }

    .kaede-inner-divider {
        background-color: black;
    }

    .why-kaede, .because-kaede {
        color: black;
        font-family: 'Sriracha', 'Permanent Marker', 'Source Sans Pro', sans-serif;
    }

    .why-kaede {
        font-weight: bold;
    }

</style>