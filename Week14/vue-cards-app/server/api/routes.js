// use the express router to create endpoints in our server
const express = require('express');
const router = express.Router();

// require in the custom node module previously built
const deckofcards = require('deckofcards');

// localhost:8888/api/play
router.get('/play', async (req, res) => {
    const shuffle = true;
    const n = 5;

    try {
        const deck = await deckofcards.deck(shuffle);
        const drawn = await deckofcards.draw(deck.deck_id, n);

        res.json(drawn);
    } catch (err) {
        res.json({ err });
    }
});

// localhost:8888/api/throwaway
router.post('/throwaway', async (req, res) => {
    const { deck, selectedCards } = req.body;

    try {
        const remainingCards = deck.cards.filter((card) => {
            return !selectedCards.includes(card.code);
        });

        const drawn = await deckofcards.draw(deck.deck_id, selectedCards.length);

        // concat the remaining card with the newly drawn cards
        const finalHand = remainingCards.concat(drawn.cards);

        // assign the new array created from above into the cards key
        drawn.cards = finalHand;

        res.json(drawn);
    } catch (err) {
        res.json({ err });
    }
});

module.exports = router;
