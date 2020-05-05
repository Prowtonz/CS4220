// declaring a component and storing it in the variable gameTrackerComponent
// This component is using the template and props options
const gameTrackerComponent = {
    template: ` <div>
                    <div class="col" v-for="game in gameTracker">
                    <ul>
                        <li>
                            <small>
                                Deck Used: {{ game.deck_id }}
                                <br/>
                                Remaining Cards: {{ game.remaining }}
                                <br/>
                                @ {{ game.time }}
                            </small>
                        </li>
                    </ul>
                    </div>
                </div>`,
    props: ['gameTracker'],
};

const cards = new Vue({
    el: '#cards',
    data: {
        appName: 'Deck of Cards App',
        shuffle: '',
        numberOfCards: '',
        deck: {},
        isPlaying: false,
        selectedCards: [],
        gameTracker: [],
    },
    computed: {
        remainingCards: function () {
            if (this.deck && this.deck.cards) {
                return this.deck.remaining;
            } else {
                return 0;
            }
        },
    },
    methods: {
        playGame: async function () {
            this.isPlaying = true;

            const response = await axios.get(`http://localhost:8888/api/play`);
            this.deck = response.data;
        },
        throwaway: async function () {
            const response = await axios.post(`http://localhost:8888/api/throwaway`, {
                deck: this.deck,
                selectedCards: this.selectedCards,
            });

            this.deck = response.data;
            this.isPlaying = false;
        },
        trackGame: function () {
            // create a new date and time string formatted to local time
            const now = new Date().toLocaleString('en-US');

            // push game data that we want to add to the history
            this.gameTracker.push({
                deck_id: this.deck.deck_id,
                remaining: this.deck.remaining,
                time: now,
            });
        },
        clear: function () {
            // the trackGame() function is called from the clear() function
            // it tracks some information before we reset the game data
            this.trackGame();

            this.deck = {};
            this.numberOfCards = '';
            this.shuffle = '';
            this.selectedCards = [];
        },
    },
    components: {
        // the key (left side) is the the components name
        // the value (right side) is the component itself as declared at the top
        'tracker-component': gameTrackerComponent,
    },
});
