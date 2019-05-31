<template>
    <div class="satania-wrapper">
        <p class="satania-name">SATANIA</p>
        <div class="satania-image-wrapper">
            <img class="satania-image" height="400" src="https://i.imgur.com/Nyi2OPn.jpg" alt="Satania" />
        </div>
        <v-card class="satania-quote-card" color="#edc8c5">
            <v-card-title class="satania-quote-card-title">
                <h3>The Kindest Archdemon</h3>
            </v-card-title>
            <v-divider class="satania-inner-divider"></v-divider>
            <v-card-text class="satania-quote">
                Homework? You still have a long way to go. I am the Great Archdemon Satanichia, Queen of all Hell! Naturally, I don't do homework!<br>
                Recycling a plastic bottle with the cap still on... so evil!<br>
                GABRIEL!
                <br><br><v-divider class="satania-inner-divider"></v-divider>
                <p class="why-satania">Why Satania? Heh heh...</p>
                <span class="because-satania">She's the cutest demon in the world. She wants to conquer the world but she always fails, and that's so cute. Also she's got a tooth like Sakurako's. And her evil laugh is so cute, but she's cute even if she cries.</span><br>
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
                <v-chip class="waifu-badge" color="#dedede">
                    <i class="fas fa-grin-tongue-wink"></i>&nbsp;
                    Baka but cute
                </v-chip>
                <v-chip class="waifu-badge" color="#ffd500">
                    <i class="fas fa-angry"></i>&nbsp;
                    Tries to be evil
                </v-chip>
                <v-chip class="waifu-badge" color="#ff0000">
                    <i class="fas fa-fire-alt"></i>&nbsp;
                    Demon
                </v-chip>
                <v-chip class="waifu-badge" color="#ece15d">
                    <i class="fas fa-grin-tongue-squint"></i>&nbsp;
                    DAI AKUMA!
                </v-chip>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Satania",
        components: {
        }
    }
</script>

<style>
    .satania-wrapper {
        display: flex;
        flex-direction: column;
    }

    .satania-name {
        text-align: center;
        color: #9A394C;
        font-size: 400%;
        font-family: 'Caveat Brush', sans-serif;
    }

    .satania-image-wrapper {
        background-color: var(--v-primary-base);
        width: 100%;
        height: 20vh;
        -webkit-clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 78%);
        clip-path: polygon(0 17%, 100% 0%, 100% 100%, 0 76%);
    }

    .satania-image {
        object-fit: cover;
        object-position: right;
        width: 100%;
        height: 20vh;
        -webkit-clip-path: polygon(0 20%, 100% 2%, 100% 98%, 0 73%);
        clip-path: polygon(0 20%, 100% 2%, 100% 98%, 0 73%);
        border-top: var(--v-primary-base) solid;
        border-bottom: var(--v-primary-base) solid;
    }

    .satania-quote-card {
        margin-top: 1%;
        margin-left: 10%;
        width: 80%;
        font-size: 150%;
        font-family: 'Permanent Marker', 'Source Sans Pro', sans-serif;
        text-align: center;
        padding-left: 10%;
        padding-right: 10%;
    }

    .satania-quote-card-title {
        display: flex;
        justify-content: center;
        text-align: center;
        color: --var(v-primary-base);
    }

    .satania-quote {
        color: #9A394C;
    }

    .satania-inner-divider {
        background-color: black;
    }

    .why-satania, .because-satania {
        color: black;
        font-family: 'Sriracha', 'Permanent Marker', 'Source Sans Pro', sans-serif;
    }

    .why-satania {
        font-weight: bold;
    }

</style>