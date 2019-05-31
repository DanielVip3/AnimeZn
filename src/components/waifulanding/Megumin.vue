<template>
    <div class="megumin-wrapper">
        <p class="megumin-name">MEGUMIN</p>
        <div class="megumin-image-wrapper">
            <img class="megumin-image" height="400" src="https://i.imgur.com/eQfSAZ1.jpg" alt="Megumin" />
        </div>
        <v-card class="megumin-quote-card" color="#FFE1C9">
            <v-card-title class="megumin-quote-card-title">
                <h3>The Crimson Demon</h3>
            </v-card-title>
            <v-divider class="megumin-inner-divider"></v-divider>
            <v-card-text class="megumin-quote">
                Darkness blacker than black and darker than dark, I beseech thee, combine with my deep crimson. The time of awakening cometh. Justice, fallen upon the infallible boundary, appear now as an intangible distortion! Dance, Dance, Dance! I desire for my torrent of power a destructive force: a destructive force without equal! Return all creation to cinders, and come from the abyss! Bust forth, <b>EXPLOSION!</b>
                <br><br><v-divider class="megumin-inner-divider"></v-divider>
                <p class="why-megumin">Why Megumin? Pretty easy...</p>
                <span class="because-megumin">I mean, see her. She's a loli, she's cute, she's a Crimson Demon and she's tsundere but also so funny. Also she casts weird Explosion Spells. All of us love explosions. Do I need to continue?</span><br>
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
                <v-chip class="waifu-badge" color="#dc143c">
                    <i class="fas fa-bomb"></i>&nbsp;
                    Best EXPLOSION! girl
                </v-chip>
                <v-chip class="waifu-badge" color="#ffa500">
                    <i class="fas fa-glass-cheers"></i>&nbsp;
                    Party girl
                </v-chip>
                <v-chip class="waifu-badge" color="#667ce8">
                    <i class="fas fa-hat-wizard"></i>&nbsp;
                    Chuunibyou
                </v-chip>
                <v-chip class="waifu-badge" color="#ece15d">
                    <i class="fas fa-grin-tongue-squint"></i>&nbsp;
                    Lalatina.
                </v-chip>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Megumin",
        components: {
        }
    }
</script>

<style>
    .megumin-wrapper {
        display: flex;
        flex-direction: column;
    }

    .megumin-name {
        text-align: center;
        color: crimson;
        font-size: 400%;
        font-family: 'Caveat Brush', sans-serif;
    }

    .megumin-image-wrapper {
        background-color: var(--v-primary-base);
        width: 100%;
        height: 20vh;
        -webkit-clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 78%);
        clip-path: polygon(0 17%, 100% 0%, 100% 100%, 0 76%);
    }

    .megumin-image {
        object-fit: cover;
        object-position: right;
        width: 100%;
        height: 20vh;
        -webkit-clip-path: polygon(0 20%, 100% 2%, 100% 98%, 0 73%);
        clip-path: polygon(0 20%, 100% 2%, 100% 98%, 0 73%);
        border-top: var(--v-primary-base) solid;
        border-bottom: var(--v-primary-base) solid;
    }

    .megumin-quote-card {
        margin-top: 1%;
        margin-left: 10%;
        width: 80%;
        font-size: 150%;
        font-family: 'Permanent Marker', 'Source Sans Pro', sans-serif;
        text-align: center;
        padding-left: 10%;
        padding-right: 10%;
    }

    .megumin-quote-card-title {
        display: flex;
        justify-content: center;
        text-align: center;
        color: --var(v-primary-base);
    }

    .megumin-quote {
        color: crimson;
    }

    .megumin-inner-divider {
        background-color: black;
    }

    .why-megumin, .because-megumin {
        color: black;
        font-family: 'Sriracha', 'Permanent Marker', 'Source Sans Pro', sans-serif;
    }

    .why-megumin {
        font-weight: bold;
    }
</style>