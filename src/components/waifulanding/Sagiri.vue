<template>
    <div class="sagiri-wrapper">
        <p class="sagiri-name">SAGIRI</p>
        <div class="sagiri-image-wrapper">
            <img class="sagiri-image" src="https://i.imgur.com/qnw2aYk.png" alt="Sagiri" />
        </div>
        <v-card class="sagiri-quote-card" color="#6A9ED8">
            <v-card-title class="sagiri-quote-card-title">
                <h3>The Hikikomori Artist</h3>
            </v-card-title>
            <v-divider class="sagiri-inner-divider"></v-divider>
            <v-card-text class="sagiri-quote">
                Onii-chan... <b>b-baka!</b><br>
                I won't give him to you! I will never ever give him away! I was before you! I love him way more than you do! From the beginning, he's been mine! We'd never lose against you. Never, ever! We won't lose!
                <br><br><v-divider class="sagiri-inner-divider"></v-divider>
                <p class="why-sagiri">Why Sagiri? Obvious...</p>
                <span class="because-sagiri">There's no need to ask. That should be understandable. She's a loli, she's cute, she's white, she's CUTE, she's tsundere and SHE'S SO CUTE. She's an imouto and loves her onii-chan. No words to describe her perfection.</span><br>
                <br>
                <!-- Chips(badges) -->
                <v-chip class="waifu-badge" color="#ffefe0">
                    <i class="fas fa-heart"></i>&nbsp;
                    Cute loli
                </v-chip>
                <v-chip class="waifu-badge" color="#fecdc9">
                    <i class="fas fa-flushed"></i>&nbsp;
                    Shy
                </v-chip>
                <v-chip class="waifu-badge" color="#e25877">
                    <i class="fas fa-angry"></i>&nbsp;
                    Tsundere
                </v-chip>
                <v-chip class="waifu-badge" color="#b29fb0">
                    <i class="fas fa-home"></i>&nbsp;
                    Hikikomori
                </v-chip>
                <v-chip class="waifu-badge" color="#ffa500">
                    <i class="fas fa-pen"></i>&nbsp;
                    Artist
                </v-chip>
                <v-chip class="waifu-badge" color="#ece15d">
                    <i class="fas fa-grin-tongue-squint"></i>&nbsp;
                    BAKA!
                </v-chip>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Sagiri"
    }
</script>

<style>
    .sagiri-name {
        text-align: center;
        color: white;
        font-size: 400%;
        font-family: 'Caveat Brush', sans-serif;
    }

    .sagiri-image-wrapper {
        background-color: var(--v-primary-base);
        width: 100%;
        height: 20vh;
        -webkit-clip-path: polygon(0 0, 100% 17%, 100% 76%, 0% 100%);
        clip-path: polygon(0 0, 100% 17%, 100% 76%, 0% 100%);
    }

    .sagiri-image {
        object-fit: cover;
        object-position: left;
        width: 100%;
        height: 20vh;
        -webkit-clip-path: polygon(0 0, 100% 20%, 100% 73%, 0% 100%);
        clip-path: polygon(0 2%, 100% 20%, 100% 73%, 0% 98%);
        border-top: var(--v-primary-base) solid;
        border-bottom: var(--v-primary-base) solid;
    }

    .sagiri-quote-card {
        margin-top: 1%;
        margin-left: 10%;
        width: 80%;
        font-size: 150%;
        font-family: 'Permanent Marker', 'Source Sans Pro', sans-serif;
        text-align: center;
        padding-left: 10%;
        padding-right: 10%;
    }

    .sagiri-quote-card-title {
        display: flex;
        justify-content: center;
        text-align: center;
        color: --var(v-primary-base);
    }

    .sagiri-quote {
        color: white;
    }

    .sagiri-inner-divider {
        background-color: black;
    }

    .why-sagiri, .because-sagiri {
        color: black;
        font-family: 'Sriracha', 'Permanent Marker', 'Source Sans Pro', sans-serif;
    }

    .why-sagiri {
        font-weight: bold;
    }
</style>