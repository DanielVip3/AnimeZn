<template>
    <div>
        <Sakurako class="character" id="sakurako"></Sakurako>
        <v-divider color="#212121" class="divider" inset></v-divider>
        <Megumin class="character" id="megumin"></Megumin>
        <v-divider color="#212121" class="divider" inset></v-divider>
        <Sagiri class="character" id="sagiri"></Sagiri>
        <v-divider color="#212121" class="divider" inset></v-divider>
        <Satania class="character" id="satania"></Satania>
        <v-divider color="#212121" class="divider" inset></v-divider>
        <Kaede class="character" id="kaede"></Kaede>
        <v-divider color="#212121" class="divider" inset></v-divider>
        <div id="waifu-conclusion">
            <p id="love-waifu">Yeah. I love my waifus.</p>
            <i id="waifu-heart" class="fas fa-heart"></i>
        </div>
    </div>
</template>

<script>
    import Sakurako from '../../components/waifulanding/Sakurako';
    import Megumin from '../../components/waifulanding/Megumin';
    import Sagiri from '../../components/waifulanding/Sagiri';
    import Satania from '../../components/waifulanding/Satania';
    import Kaede from '../../components/waifulanding/Kaede';

    export default {
        name: "WaifuLanding",
        components: {
            Sakurako,
            Megumin,
            Sagiri,
            Satania,
            Kaede
        },
        data() {
            return {
                waifu_images: ["https://i.imgur.com/8xlCLIF.jpg", "https://i.imgur.com/L3dglv9.png", "https://i.imgur.com/694gNGX.jpg", "https://i.imgur.com/kQNUiTQ.jpg", "https://i.imgur.com/RuOYpjy.png", "https://i.imgur.com/Hc62mGC.jpg", "https://i.imgur.com/FG0oyVI.jpg", "https://i.imgur.com/LgISpM4.jpg", "https://i.imgur.com/gkfv6HW.jpg", "https://i.imgur.com/l732kjc.jpg", "https://i.imgur.com/nFICCFK.jpg", "https://i.imgur.com/dIcxIXZ.jpg", "https://i.imgur.com/qoCA5gE.jpg", "https://i.imgur.com/wZRZQ1V.jpg", "https://i.imgur.com/PZEq8wa.jpg", "https://i.imgur.com/kr34VwL.jpg", "https://i.imgur.com/QzDCGGX.jpg", "https://i.imgur.com/iJTHSBl.jpg", "https://i.imgur.com/Sqgfaiz.png", "https://i.imgur.com/NrStUqL.png", "https://i.imgur.com/e7MBuiu.jpg", "https://i.imgur.com/uCdbbMk.jpg", "https://i.imgur.com/pO5o6Kz.jpg", "https://i.imgur.com/IYICAin.jpg", "https://i.imgur.com/kVUkMJc.jpg", "https://i.imgur.com/Ky1y7EH.jpg", "https://i.imgur.com/Pbkt8GX.png", "https://i.imgur.com/V1NRlsL.png", "https://i.imgur.com/1okKOmi.jpg", "https://i.imgur.com/jwhqO6T.png", "https://i.imgur.com/MrwtTeT.jpg", "https://i.imgur.com/vqRL1vK.png", "https://i.imgur.com/L5YCaOW.jpg"],
            }
        },
        methods: {
        },
        created: function() {
        }
    }
</script>

<style>

    #sakurako {
        background-color: #EAC6A5;
    }

    #megumin {
        background-color: #EF9793;
    }

    #sagiri {
        background-color: #324FAF;
    }

    #satania {
        background-color: #DF666D;
    }

    #kaede {
        background-color: #976763;
    }

    .character {
        padding-top: 2%;
        padding-bottom: 2%;
    }

    .waifu-badge {
        font-family: 'Sriracha';
    }

    #carousel-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 2%;
        text-align: center;
        font-size: 200%;
        font-weight: bold;
    }

    #carousel {
        margin-right: 10%;
        margin-left: 10%;
        max-width: 570px;
        min-width: 260px;
    }

    #waifu-conclusion {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #love-waifu {
        margin-top: 1%;
        text-align: center;
        font-size: 400%;
    }

    #waifu-heart {
        color: #BE1931;
        text-align: center;
        font-size: 1000%;
    }
</style>