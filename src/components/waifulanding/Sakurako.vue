<template>
    <div class="sakurako-wrapper">
        <p class="sakurako-name">SAKURAKO</p>
        <div class="sakurako-image-wrapper">
            <img class="sakurako-image" height="400" src="https://i.imgur.com/6HM02Q7.png" alt="Sakurako" />
        </div>
        <v-card class="sakurako-quote-card" color="#FCFCFC">
            <v-card-title class="sakurako-quote-card-title">
                <h3>The Pudding-eater Schoolgirl</h3>
            </v-card-title>
            <v-divider class="sakurako-inner-divider"></v-divider>
            <v-card-text class="sakurako-quote">
                Acting like a goody-two-shoes? What a baka.<br>
                You wanna fight?<br>
                PUDDING! Yum~!
                <br><br><v-divider class="sakurako-inner-divider"></v-divider>
                <p class="why-sakurako">Why Sakurako? No doubt...</p>
                <span class="because-sakurako">She's perfect. She's cute, and she's got a little tooth sticking out of her mouth. Also she loves pudding, and when she eats pudding she looks so cute. She's stupid but lovable and also likes to play a lot. That's PERFECTION.</span><br>
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
                <v-chip class="waifu-badge" color="#dedede">
                    <i class="fas fa-grin-tongue-wink"></i>&nbsp;
                    Baka but cute
                </v-chip>
                <v-chip class="waifu-badge" color="#ffa500">
                    <i class="fas fa-glass-cheers"></i>&nbsp;
                    Party girl
                </v-chip>
                <v-chip class="waifu-badge" color="#ece15d">
                    <i class="fas fa-grin-tongue-squint"></i>&nbsp;
                    Pudding~
                </v-chip>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Sakurako",
        components: {
        }
    }
</script>

<style>
    .sakurako-wrapper {
        display: flex;
        flex-direction: column;
    }

    .sakurako-name {
        text-align: center;
        color: #AB8077;
        font-size: 400%;
        font-family: 'Caveat Brush', sans-serif;
    }

    .sakurako-image-wrapper {
        background-color: var(--v-primary-base);
        width: 100%;
        height: 20vh;
        -webkit-clip-path: polygon(0 0, 100% 17%, 100% 76%, 0% 100%);
        clip-path: polygon(0 0, 100% 17%, 100% 76%, 0% 100%);
    }

    .sakurako-image {
        object-fit: cover;
        object-position: left;
        width: 100%;
        height: 20vh;
        -webkit-clip-path: polygon(0 2%, 100% 20%, 100% 73%, 0% 98%);
        clip-path: polygon(0 2%, 100% 20%, 100% 73%, 0% 98%);
        border-top: var(--v-primary-base) solid;
        border-bottom: var(--v-primary-base) solid;
    }

    .sakurako-quote-card {
        margin-top: 1%;
        margin-left: 10%;
        width: 80%;
        font-size: 150%;
        font-family: 'Permanent Marker', 'Source Sans Pro', sans-serif;
        text-align: center;
        padding-left: 10%;
        padding-right: 10%;
    }

    .sakurako-quote-card-title {
        display: flex;
        justify-content: center;
        text-align: center;
        color: --var(v-primary-base);
    }

    .sakurako-quote {
        color: #AB8077;
    }

    .sakurako-inner-divider {
        background-color: black;
    }

    .why-sakurako, .because-sakurako {
        color: black;
        font-family: 'Sriracha', 'Permanent Marker', 'Source Sans Pro', sans-serif;
    }

    .why-sakurako {
        font-weight: bold;
    }

</style>