var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
const mtg = require('mtgsdk');
const https = require('request');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));
mongoose.connect('mongodb://localhost/cards');

var CardSchema = new mongoose.Schema({
    cmc: {type: Number},
    colors: {type: Array},
    id: {type: String, unique: true},
    image_uris: {type: Object},
    mana_cost: {type: String},
    name: {type: String},
    oracle_text: {type: String},
    power: {type: String},
    purchase_uris: {type: Object},
    rarity: {type: String},
    toughness: {type: String},
    type_line: {type: String},
    usd: {type: String},
    loyalty: {type: String}
})
var Card = mongoose.model('Card', CardSchema)

app.get('/delete', (req, res) => {
    Card.remove({}, function(err){
        if (err){
            console.log(err);
        }
        else{
            console.log("All gone!")
        }
    })
})

app.get('/find', (req, res)=>{
    var card = Card.findOne({'name': { $regex: 'Forest' }}, function(err, card){
        if (err){
            console.log(err);
        }
        else{
            console.log(card);
        }
    })
})


app.get('/creature', (req, res) => {
    var card = Card.find({colors: 'G'}, function (err, card){
        if (err){
            console.log("ugh");
        }
        else{
            console.log(card);
        }
        res.json({'message': 'ok'})
    })
})

app.post('/creature', (req, res) => {
    console.log(req.body);
    var deck = [];
    var cards = Card.find({ $and: [req.body, {type_line: { $regex: 'Creature' }}, {cmc: 1}]}, function(err, cards){
        if (err){
            console.log(err);
        }
        else{
            for (var i = 0; i < 3; i++){
                deck.push(cards[Math.floor(Math.random()*cards.length)]);
            }
            var cards = Card.find({ $and: [req.body, {type_line: { $regex: 'Creature' }}, {cmc: 2}]}, function(err, cards){
                if (err){
                    console.log(err);
                }
                else{
                    for (var i = 0; i < 4; i++){
                        deck.push(cards[Math.floor(Math.random()*cards.length)]);
                    }
                    var cards = Card.find({ $and: [req.body, {type_line: { $regex: 'Creature' }}, {cmc: 3}]}, function(err, cards){
                        if (err){
                            console.log(err);
                        }
                        else{
                            for (var i = 0; i < 4; i++){
                                deck.push(cards[Math.floor(Math.random()*cards.length)]);
                            }
                            var cards = Card.find({ $and: [req.body, {type_line: { $regex: 'Creature' }}, {cmc: 4}]}, function(err, cards){
                                if (err){
                                    console.log(err);
                                }
                                else{
                                    for (var i = 0; i < 3; i++){
                                        deck.push(cards[Math.floor(Math.random()*cards.length)]);
                                    }
                                    var cards = Card.find({ $and: [req.body, {type_line: { $regex: 'Creature' }}, {cmc: 5}]}, function(err, cards){
                                        if (err){
                                            console.log(err);
                                        }
                                        else{
                                            for (var i = 0; i < 2; i++){
                                                deck.push(cards[Math.floor(Math.random()*cards.length)]);
                                            }
                                            var cards = Card.find({ $and: [req.body, {type_line: { $regex: 'Creature' }}, {cmc: 6}]}, function(err, cards){
                                                if (err){
                                                    console.log(err);
                                                }
                                                else{
                                                    for (var i = 0; i < 2; i++){
                                                        deck.push(cards[Math.floor(Math.random()*cards.length)]);
                                                    }
                                                    console.log(deck.length);
                                                    for (var i = 0; i < deck.length; i++){
                                                        console.log(deck[i].name);
                                                    }
                                                    res.json({data: deck});
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
})

app.post('/noncreature', (req, res) => {
    console.log(req.body)
    var deck = [];
    var cards = Card.find({ $and: [req.body], cmc: 1, type_line: { $regex: 'Sorcery|Enchantment|Instant|Planeswalker|Artifact' } }, function(err, cards){
        if (err){
            console.log(err);
        }
        else{
            for (var i = 0; i < 4; i++){
                deck.push(cards[Math.floor(Math.random()*cards.length)]);
            }
            var cards = Card.find({ $and: [req.body], cmc: 2, type_line: { $regex: 'Sorcery|Enchantment|Instant|Planeswalker|Artifact' } }, function(err, cards){
                if (err){
                    console.log(err);
                }
                else{
                    for (var i = 0; i < 4; i++){
                        deck.push(cards[Math.floor(Math.random()*cards.length)]);
                    }
                    var cards = Card.find({ $and: [req.body], cmc: 3, type_line: { $regex: 'Sorcery|Enchantment|Instant|Planeswalker|Artifact' } }, function(err, cards){
                        if (err){
                            console.log(err);
                        }
                        else{
                            for (var i = 0; i < 4; i++){
                                deck.push(cards[Math.floor(Math.random()*cards.length)]);
                            }
                            var cards = Card.find({ $and: [req.body], cmc: 4, type_line: { $regex: 'Sorcery|Enchantment|Instant|Planeswalker|Artifact' } }, function(err, cards){
                                if (err){
                                    console.log(err);
                                }
                                else{
                                    for (var i = 0; i < 3; i++){
                                        deck.push(cards[Math.floor(Math.random()*cards.length)]);
                                    }
                                    var cards = Card.find({ $and: [req.body], cmc: 5, type_line: { $regex: 'Sorcery|Enchantment|Instant|Planeswalker|Artifact' } }, function(err, cards){
                                        if (err){
                                            console.log(err);
                                        }
                                        else{
                                            for (var i = 0; i < 2; i++){
                                                deck.push(cards[Math.floor(Math.random()*cards.length)]);
                                            }
                                            var cards = Card.find({ $and: [req.body], cmc: 6, type_line: { $regex: 'Sorcery|Enchantment|Instant|Planeswalker|Artifact' } }, function(err, cards){
                                                if (err){
                                                    console.log(err);
                                                }
                                                else{
                                                    for (var i = 0; i < 1; i++){
                                                        deck.push(cards[Math.floor(Math.random()*cards.length)]);
                                                    }
                                                    console.log(deck.length);
                                                    res.json({data: deck});
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
})

app.post('/lands', (req, res)=>{
    var deck = [];
    var cards = Card.find({ $and: [{ oracle_text: { $regex: 'Add {'+req.body['colors']+'}'}}, { type_line: { $regex: 'Basic Land' } } ] }, function(err, cards){
        if (err){
            console.log(err);
        }
        else{
            for (var i = 0; i < 24; i++){
                deck.push(cards[Math.floor(Math.random()*cards.length)]);
            }
            console.log(deck.length);
            for (var i = 0; i < deck.length; i++){
                console.log(deck[i].name);
            }
            res.json({data: deck});
        }
    })
})

app.get('/plains', (req, res)=>{
    var card = Card.find({ name: 'Plains' }, function(err, card){
        if (err){
            console.log(err);
        }
        else{
            console.log(card);
        }
    })
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})



// ******************************************************************* BANISHED TO THE SHADOW REALM *************************************************************************
// app.post('/creature', (req, res) => {
//     console.log(req.body);
//     var deck = [];
//     var cards = Card.find({ colors: { $in: ['W'] }, type_line: { $regex: 'Creature' }, cmc: 1 }, function(err, cards){
//         if (err){
//             console.log(err);
//         }
//         else{
//             for (var i = 0; i < 3; i++){
//                 deck.push(cards[Math.floor(Math.random()*cards.length)]);
//             }
//             var cards = Card.find({ $and: [{ colors: { $in: ['W'] }}, { colors: { $nin: ['U', 'G', 'B', 'R'] } }], type_line: { $regex: 'Creature' }, cmc: 2 }, function(err, cards){
//                 if (err){
//                     console.log(err);
//                 }
//                 else{
//                     for (var i = 0; i < 4; i++){
//                         deck.push(cards[Math.floor(Math.random()*cards.length)]);
//                     }
//                     var cards = Card.find({ $and: [{ colors: { $in: ['W'] }}, { colors: { $nin: ['U', 'G', 'B', 'R'] } }], type_line: { $regex: 'Creature' }, cmc: 3 }, function(err, cards){
//                         if (err){
//                             console.log(err);
//                         }
//                         else{
//                             for (var i = 0; i < 4; i++){
//                                 deck.push(cards[Math.floor(Math.random()*cards.length)]);
//                             }
//                             var cards = Card.find({ $and: [{ colors: { $in: ['W'] }}, { colors: { $nin: ['U', 'G', 'B', 'R'] } }], type_line: { $regex: 'Creature' }, cmc: 4 }, function(err, cards){
//                                 if (err){
//                                     console.log(err);
//                                 }
//                                 else{
//                                     for (var i = 0; i < 3; i++){
//                                         deck.push(cards[Math.floor(Math.random()*cards.length)]);
//                                     }
//                                     var cards = Card.find({ $and: [{ colors: { $in: ['W'] }}, { colors: { $nin: ['U', 'G', 'B', 'R'] } }], type_line: { $regex: 'Creature' }, cmc: 5 }, function(err, cards){
//                                         if (err){
//                                             console.log(err);
//                                         }
//                                         else{
//                                             for (var i = 0; i < 2; i++){
//                                                 deck.push(cards[Math.floor(Math.random()*cards.length)]);
//                                             }
//                                             var cards = Card.find({ $and: [{ colors: { $in: ['W'] }}, { colors: { $nin: ['U', 'G', 'B', 'R'] } }], type_line: { $regex: 'Creature' }, cmc: 6 }, function(err, cards){
//                                                 if (err){
//                                                     console.log(err);
//                                                 }
//                                                 else{
//                                                     for (var i = 0; i < 2; i++){
//                                                         deck.push(cards[Math.floor(Math.random()*cards.length)]);
//                                                     }
//                                                     console.log(deck.length);
//                                                     for (var i = 0; i < deck.length; i++){
//                                                         console.log(deck[i].name);
//                                                     }
//                                                     res.json({data: deck});
//                                                 }
//                                             })
//                                         }
//                                     })
//                                 }
//                             })
//                         }
//                     })
//                 }
//             })
//         }
//     })
// })

//https://api.scryfall.com/cards?page=2/search?q=f%3Astandard

// THIS CODE WILL INITIALIZE YOUR DATABASE THE FIRST TIME YOU LOAD THIS UP. UNCOMMENT IT OUT AND LET IT RUN ONCE, THEN COMMMENT IT BACK OUT
// app.get('/cards', (req, res) => {
//         var arr = [];
//         function readPage(url){
//             console.log(url);
//             https(url, unique=true, function(error, response, body){
//             body = JSON.parse(body);
//             var data = body['data'];
//             for (var i = 0; i < data.length; i++){
//                 arr.push(data[i]);
//             }
//             if (body['has_more']){
//                 readPage(body['next_page']);
//             }
//             else{
//                 return res.json({data: arr});
//             }
//         })
//     }
//     readPage('https://api.scryfall.com/cards/search?q=f%3Astandard');
// })

// app.get('/cards/:color', (req, res)=>{
//     var card = Card.find({ colors: { $in: [req.params.color] }}, function(err, card){
//         if (err){
//             console.log(err);
//         }
//         else{
//             console.log(card);
//         }
//     })
// })

// app.get('/cards', (req, res)=>{
//     var cards = [];
//     function readPage(url){
//         console.log(url);
//         https(url, unique=true, function(error, response, body){
//             body = JSON.parse(body);
//             var data = body['data'];
//             for (var i = 0; i < data.length; i++){
//                 cards.push(data[i]);
//             }
//             if (body['has_more']){
//                 readPage(body['next_page']);
//             }
//             else{
//                 for (var i = 0; i < cards.length; i++){
//                     var card = new Card({cmc: cards[i]['cmc'], colors: cards[i]['colors'], id: cards[i]['id'], image_uris: cards[i]['image_uris'], mana_cost: cards[i]['mana_cost'], name: cards[i]['name'], oracle_text: cards[i]['oracle_text'], power: cards[i]['power'], purchase_uris: cards[i]['purchase_uris'], rarity: cards[i]['rarity'], toughness: cards[i]['toughness'], type_line: cards[i]['type_line'], usd: cards[i]['usd'], loyalty: cards[i]['loyalty']});
//                     card.save(function(err, card){
//                         if (err){
//                             console.log("Eek!");
//                         }
//                         else{
//                             console.log(card);
//                         }
//                     })
//                 }
//             }
//         })
//     }
//     readPage('https://api.scryfall.com/cards/search?q=f%3Astandard');
// })