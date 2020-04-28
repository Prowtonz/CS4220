const cards = new Vue({
    el: '#cards',
    data: {
        appName: 'Deck of Cards App',
        deck: {},
        selectedCards: [],
        isPlaying: false
    },
    computed: {
        remainingCards: function () {
            // compute the number of cards remaining
            if (this.deck && this.deck.cards) {
                return this.deck.remaining;
            } else {
                return 0;
            }
        }
    },
    methods: {
        playGame: async function() {
            this.isPlaying = true;

            // make a GET http request to our server for a 5 cards hand
            const response = await axios.get(`http://localhost:8888/api/play`)
            this.deck = response.data;
        },
        throwawayCards: async function() {
            this.isPlaying = false;

            // make a POST http request to our server to throwaway and replace cards
            const response = await axios.post(`http://localhost:8888/api/throwaway`, {
                deck: this.deck,
                selectedCards: this.selectedCards
            });

            this.deck = response.data
        },
        replay: function() {
            // reset the data in memory to play again
            this.deck = {};
            this.selectedCards =[];
        }
    }
})