new Vue({
    el: '#app',
    data: {
        trainers: [
            { 
                name: 'Ash', 
                image: 'images/entrenadores/ash.png', 
                pokemons: [
                    { name: 'Pikachu', image: 'images/pokemones/pikachu.png' },
                    { name: 'Bulbasaur', image: 'images/pokemones/bulbasaur.png' },
                    { name: 'Charizard', image: 'images/pokemones/charizard.png' },
                    { name: 'Squirtle', image: 'images/pokemones/squirtle.png' },
                    { name: 'Pidgeotto', image: 'images/pokemones/pidgeotto.png' }
                ], 
                showPokemons: false 
            },
            { 
                name: 'Brock', 
                image: 'images/entrenadores/brock.png', 
                pokemons: [
                    { name: 'Onix', image: 'images/pokemones/onix.png' },
                    { name: 'Geodude', image: 'images/pokemones/geodude.png' },
                    { name: 'Vulpix', image: 'images/pokemones/vulpix.png' },
                    { name: 'Zubat', image: 'images/pokemones/zubat.png' },
                    { name: 'Kabutops', image: 'images/pokemones/kabutops.png' }
                ], 
                showPokemons: false 
            },
            { 
                name: 'Misty', 
                image: 'images/entrenadores/misty.png', 
                pokemons: [
                    { name: 'Starmie', image: 'images/pokemones/starmie.png' },
                    { name: 'Psyduck', image: 'images/pokemones/psyduck.png' },
                    { name: 'Goldeen', image: 'images/pokemones/goldeen.png' },
                    { name: 'Horsea', image: 'images/pokemones/horsea.png' },
                    { name: 'Togepi', image: 'images/pokemones/togepi.png' }
                ], 
                showPokemons: false 
            },
            { 
                name: 'Lt. Surge', 
                image: 'images/entrenadores/lt_surge.png', 
                pokemons: [
                    { name: 'Raichu', image: 'images/pokemones/raichu.png' },
                    { name: 'Voltorb', image: 'images/pokemones/voltorb.png' },
                    { name: 'Electabuzz', image: 'images/pokemones/electabuzz.png' },
                    { name: 'Magnemite', image: 'images/pokemones/magnemite.png' },
                    { name: 'Jolteon', image: 'images/pokemones/jolteon.png' }
                ], 
                showPokemons: false 
            },
            { 
                name: 'Erika', 
                image: 'images/entrenadores/erika.png', 
                pokemons: [
                    { name: 'Tangela', image: 'images/pokemones/tangela.png' },
                    { name: 'Victreebel', image: 'images/pokemones/victreebel.png' },
                    { name: 'Vileplume', image: 'images/pokemones/vileplume.png' },
                    { name: 'Parasect', image: 'images/pokemones/parasect.png' },
                    { name: 'Exeggutor', image: 'images/pokemones/exeggutor.png' }
                ], 
                showPokemons: false 
            },
            { 
                name: 'Koga', 
                image: 'images/entrenadores/koga.png', 
                pokemons: [
                    { name: 'Weezing', image: 'images/pokemones/weezing.png' },
                    { name: 'Golbat', image: 'images/pokemones/golbat.png' },
                    { name: 'Muk', image: 'images/pokemones/muk.png' },
                    { name: 'Venomoth', image: 'images/pokemones/venomoth.png' },
                    { name: 'Nidoking', image: 'images/pokemones/nidoking.png' }
                ], 
                showPokemons: false 
            },
            { 
                name: 'Sabrina', 
                image: 'images/entrenadores/sabrina.png', 
                pokemons: [
                    { name: 'Alakazam', image: 'images/pokemones/alakazam.png' },
                    { name: 'Mr. Mime', image: 'images/pokemones/mr_mime.png' },
                    { name: 'Venomoth', image: 'images/pokemones/venomoth.png' },
                    { name: 'Kadabra', image: 'images/pokemones/kadabra.png' },
                    { name: 'Espeon', image: 'images/pokemones/espeon.png' }
                ], 
                showPokemons: false 
            },
            { 
                name: 'Blaine', 
                image: 'images/entrenadores/blaine.png', 
                pokemons: [
                    { name: 'Magmar', image: 'images/pokemones/magmar.png' },
                    { name: 'Rapidash', image: 'images/pokemones/rapidash.png' },
                    { name: 'Arcanine', image: 'images/pokemones/arcanine.png' },
                    { name: 'Ninetales', image: 'images/pokemones/ninetales.png' },
                    { name: 'Growlithe', image: 'images/pokemones/growlithe.png' }
                ], 
                showPokemons: false 
            },
            { 
                name: 'Giovanni', 
                image: 'images/entrenadores/giovanni.png', 
                pokemons: [
                    { name: 'Rhydon', image: 'images/pokemones/rhydon.png' },
                    { name: 'Dugtrio', image: 'images/pokemones/dugtrio.png' },
                    { name: 'Nidoqueen', image: 'images/pokemones/nidoqueen.png' },
                    { name: 'Nidoking', image: 'images/pokemones/nidoking.png' },
                    { name: 'Kangaskhan', image: 'images/pokemones/kangaskhan.png' }
                ], 
                showPokemons: false 
            },
            { 
                name: 'Lorelei', 
                image: 'images/entrenadores/lorelei.png', 
                pokemons: [
                    { name: 'Dewgong', image: 'images/pokemones/dewgong.png' },
                    { name: 'Cloyster', image: 'images/pokemones/cloyster.png' },
                    { name: 'Slowbro', image: 'images/pokemones/slowbro.png' },
                    { name: 'Jynx', image: 'images/pokemones/jynx.png' },
                    { name: 'Lapras', image: 'images/pokemones/lapras.png' }
                ], 
                showPokemons: false 
            },
            { 
                name: 'Bruno', 
                image: 'images/entrenadores/bruno.png', 
                pokemons: [
                    { name: 'Onix', image: 'images/pokemones/onix.png' },
                    { name: 'Hitmonchan', image: 'images/pokemones/hitmonchan.png' },
                    { name: 'Hitmonlee', image: 'images/pokemones/hitmonlee.png' },
                    { name: 'Machamp', image: 'images/pokemones/machamp.png' },
                    { name: 'Primeape', image: 'images/pokemones/primeape.png' }
                ], 
                showPokemons: false 
            },
            { 
                name: 'Agatha', 
                image: 'images/entrenadores/agatha.png', 
                pokemons: [
                    { name: 'Gengar', image: 'images/pokemones/gengar.png' },
                    { name: 'Golbat', image: 'images/pokemones/golbat.png' },
                    { name: 'Haunter', image: 'images/pokemones/haunter.png' },
                    { name: 'Arbok', image: 'images/pokemones/arbok.png' },
                    { name: 'Misdreavus', image: 'images/pokemones/misdreavus.png' }
                ], 
                showPokemons: false 
            },
            { 
                name: 'Lance', 
                image: 'images/entrenadores/lance.png', 
                pokemons: [
                    { name: 'Dragonite', image: 'images/pokemones/dragonite.png' },
                    { name: 'Gyarados', image: 'images/pokemones/gyarados.png' },
                    { name: 'Aerodactyl', image: 'images/pokemones/aerodactyl.png' },
                    { name: 'Charizard', image: 'images/pokemones/charizard.png' },
                    { name: 'Kingdra', image: 'images/pokemones/kingdra.png' }
                ], 
                showPokemons: false 
            },
            { 
                name: 'Gary', 
                image: 'images/entrenadores/gary.png', 
                pokemons: [
                    { name: 'Arcanine', image: 'images/pokemones/arcanine.png' },
                    { name: 'Blastoise', image: 'images/pokemones/blastoise.png' },
                    { name: 'Nidoking', image: 'images/pokemones/nidoking.png' },
                    { name: 'Umbreon', image: 'images/pokemones/umbreon.png' },
                    { name: 'Scizor', image: 'images/pokemones/scizor.png' }
                ], 
                showPokemons: false 
            }
        ],
        selectedTrainers: [],
        battleMessage: ''
    },
    computed: {
        canStartBattle() {
            return this.selectedTrainers.length === 2;
        }
    },
    methods: {
        viewPokemons(index) {
            this.trainers[index].showPokemons = !this.trainers[index].showPokemons;
        },
        selectTrainer(index) {
            if (this.selectedTrainers.includes(index)) {
                this.selectedTrainers = this.selectedTrainers.filter(i => i !== index);
            } else if (this.selectedTrainers.length < 2) {
                this.selectedTrainers.push(index);
            }
        },
        startBattle() {
            if (this.canStartBattle) {
                const trainer1 = this.trainers[this.selectedTrainers[0]].name;
                const trainer2 = this.trainers[this.selectedTrainers[1]].name;
                this.battleMessage = `Se realizará un nuevo combate entre ${trainer1} vs ${trainer2}`;
                this.selectedTrainers = [];
            }
        }
    }
});