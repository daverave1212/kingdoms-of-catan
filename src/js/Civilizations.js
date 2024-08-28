
const Civilizations = [    
    {
        "Rome": {
            Powers: {
                "Modest Start": [
                    "You are always first to place your starting pieces.",
                    "You start with only 1 settlement and 1 road.",
                    "Your first built settlement and 2 roads are free."
                ],
                "Colosseum": [
                    "If you surround all 6 edges of a tile with your roads, that represents a Colosseum.",
                    "From then on, you can also buy Development Cards with (1 Brick, 1 Sheep).",
                    "Awards 1 victory point."
                ],
                "Calendar": [
                    "On your turn, after you roll, if you didn't get any resource, you get 1 resource from the bank.",
                ]
            }
        }
    },
    {
        "Aztec": {
            Powers: {
                "Floating Farms": [
                    "The first time you build (not place) a settlement near water, you can choose an extra tile and place it on the water near your settlement.",
                    "If you do, you can't use the ports there.",
                    "Put a 4. or a 10. on it (your choice)."
                ],
                "Warriors": "You can get a Knight card from the development deck for any 3 resources. Then shuffle the development deck.",
                "Sacrifices": "You can sacrifice a used Knight card to gain 1 resource of your choice from the bank. The Knight goes back to the Development deck."
            }
        }
    },
    {
        "Communists": {
            Powers: {
                "Equality": [
                    "Until they have at least 1 City, each player rolls a d12 instead of 2d6.",
                    "You always roll 1d12.",
                    "The Robber is moved on 1 and 7."
                ],
                "Redistribution": "When another player buys a development card, one resource spent goes to you instead of the bank (that player chooses which resource you get).",
                "Authority": "Once per your turn, after you roll, you can discard 1 resource of any type to cancel the roll and roll again. If you have at least 1 city, you don't need to discard."
            }
        }
    },
    {
        "Egypt": {
            Powers: {
                "Desert Farmers": "Before the game starts, put a 6. number token on a Desert tile. That Desert now produces Wheat only for your adjacent settlements/cities.",
                "Pyramid": {
                    "Resources": ['Brick', 'Brick', 'Brick', 'Brick', 'Brick'],
                    "Effect": "Build the Pyramid on any tile. Awards 2 victory points. That tile becomes immune/invalid to the robber and other civilization powers."
                },
                "Excavation Roads": "You can build 2 roads (at once) directly on a tile to connect 2 opposite tile corners."
            }
        }
    },
    {
        "Gypsies (Nomads)": {
            Powers: {
                "Crowding Nomads": "You can build, place and move settlements within 1 edge of another settlement (normally instead of 2) (other players still can't).",
                "Moving Settlement": "For 1 Wood, you can move 1 settlement one edge in any direction where you have a road (not cities).",
                "Mysticism": "When you steal resources with the robber, you can look at that player's resources and pick one of choice."
            }
        }
    },
    {
        "Celts": {
            Powers: {
                "Oppidae": "You can not build cities. You can build up to 3 settlements on the same tile intersection. You can use city miniatures as settlements.",
                "Herding": "If you have any port settlement/city, you can trade 2 Sheep for any resource.",
                "Scattered Tribes": "When you build a new settlement, remove all your roads connecting that settlement to another. Get 1 Sheep for each road removed.",
                "Druidcraft": "When you get a Development card, look at the first 3 on the deck and choose 1 to keep. Then put them back."
            },
            spacing: 0.5
        }
    },
    {
        "China": {
            Powers: {
                "Large Population": "You start with 3 Settlements and 0 Roads. You always put all 3 settlements after all other players.",
                "Great Wall": [
                    "You can build 2 roads on the same edge, to form a 'double road'.",
                    "If you have 3 double roads one after another, that is the Great Wall.",
                    "Awards 1 victory point and each double road counts as 2 roads towards Longest Road."
                ],
                "Chinese Year": [
                    "When the game starts, add the special Chinese development cards to the development deck, then shuffle it. These special Chinese development cards will have positive effects for China, no matter who uses them."
                ]
            }
        }
    },
    {
        "Japan": {
            Powers: {
                "Fishing Boats": "You can use ports even if you just have a road that leads to them.",
                "Rapid Technology": [
                    "When you build your first City, take a 5. or 9. token and put it on any tile.",
                    "That tile now also produces resources on that number."
                ],
                "Prominent Culture": "When moving the robber to a tile where you have a port settlement (but not city), that player can't steal a resource from you."
            }
        }
    },
    {
        "America": {
            Powers: {
                "Rapid Expansion": [
                    "You can't build roads.",
                    "You can and must build your settlements within 2 free edges of another settlement you have.",
                    "Your new Settlements cost 1 extra Ore and one extra resource of choice.",
                    "You don't place roads at the start of the game."
                ],
                "Diplomacy": "When a player moves the Robber, you can say 'No' to their first tile choice. They must pick a different tile.",
                "Capitalism": "On 7's, you discard only if you have 10 or more cards in hand."
            }
        }
    },
    {
        "Arab": {
            Powers: {
                "Trade Route": "After everyone has placed their settlements, connect the closest 2 settlements (at least one of yours) with your roads for free (see appendix).",
                "Bazaar": "You can trade any 4 resources for 1 resource (the rest, aka port trading, is done as normal).",
                "Spread Islam": {
                    Resources: ["Sheep", "Sheep", "Wheat", "Wheat"],
                    Effect: "Gain 0.1 Victory Points for each road you have. Until your next turn, whenever another player builds something, you get one of the spent resources instead of the bank (that player chooses which resource you get). You can buy Spread Islam once per turn."
                }
            }
        }
    },
    // {
    //     "Greece": {
    //         Powers: {
    //             "Democracy": "When a player rolls a 7 and moves the Robber, you can issue a vote. All players vote (you too) if they are ok with that move. If the votes are 50% or more against, the player chooses another tile to put the robber on (without voting this time)."
    //         }
    //     }
    // },
    {
        "Indus": {
            Powers: {
                "Peacefulness": [
                    "You can not gain Ore normally.",
                    "For building, you can substitute any resource for Ore."
                ],
                "Water Well": [
                    "1 wood, 1 ore",
                    "Instead of settlements, you can build Wells, even 1 edge away from another settlement.",
                    "Whenever someone rolls 4 or 10, each Well gives you one Ore.",
                    "Water Wells MUST be built near Mountains."
                ],
                "Hinduism": [
                    "After setting up the game (after China), put the Hinduism Development card as the 7th card in the Development deck.",
                    "Once Hinduism has been drawn, you can gain Ore normally and you can substitute Ore for any resource."
                ]
            }
        }
    },
    {
        "Mesopotamia": {
            Powers: {
                "City of Babylon": [
                    "Instead of starting with 2 settlements and 2 roads, you start with 1 City and 2 semi-roads.",
                    "The City of Babylon sits on a tile edge instead of an intersection, and collects resources from all 4 neighboring tiles (2 from the edge, and 2 from each edge end/intersection).",
                    "Your 2 semi-roads are placed on the same edge as the City of Babylon, going opposite directions, and count as normal roads. Other settlements must be at least 1.5 roads away from the City of Babylon.",
                    "When setting the game up, you are always the second to place your city piece on the board."
                ],
                "Writing & Agriculture": {
                    Resources: ['Wheat', 'Brick'],
                    Effect: "At the end of your turn, get 2 resources of your choice."
                }
            },
            spacing: 1.5
        }
    },
    {
        "Vikings": {
            "Powers": {
                "Prepared for War": "You start the game with 1 usable Knight card.",
                "Boats": {
                    "Resources": ["Wood", "Wood"],
                    "Effect": "You can also build roads (and boats) with 2 Wood."
                },
                "Raid": {
                    Resources: ["Wood", "Wood", "Ore", "Ore"],
                    Effect: "Each other player must either give you one resource (of their choice), destroy one road (or boat), or give you one used development card."
                },
                "Pillaging": "If you block a tile that's near water with the Robber, you collect 1 resource from ALL players with settlements or cities near that tile."
            },
            spacing: 0.75
        }
    },
    {
        "Mongols": {
            Powers: {
                "Conquer": "If you connect enemy settlements (but not cities) to your settlements or cities with roads, that enemy settlement also produces resources for you.",
                "Territory Control": "Each settlement (but not city) you have counts towards having the longest road.",
                "Khan": {
                    Resources: ['Ore', 'Ore', 'Ore', 'Ore'],
                    Effect: "Place an extra robber on any tile, and collect a resource from one of the tile's neighboring players (as if you played a knight). Acts as a normal robber, and any player may move it. This robber counts as +2 towards the largest army for you."
                }
            }
        }
    },
    {
        "Ottomans": {
            Powers: {
                "Warfare": {
                    Resources: ["Wood", "Ore"],
                    Effect: "When you play a knight, you can pay (1 Wood, 1 Ore) to swap the number token of the tile where you placed the robber with another neighboring tile's number token."
                },
                "Constantinople": {
                    Resources: ["Wood", "Brick", "Brick", "Wheat", "Sheep", "Ore"],
                    Effect: "Upgrade a city to Constantinople. Constantinople produces 3 resources from neighboring tiles and awards a total of 3 Victory Points."
                },
                "Sharia Law": [
                    "When a player (including you) draws a development card (except civilization ones), they show it to you. You can force them to draw a different one, and shuffle the previous one back into the deck. They must keep the new card."
                ]
            }
        }
    },
    {
        "Dacians": {
            Powers: {
                "Barbarian Clans": {
                    Resources: ["Wood", "Sheep", "Sheep", "Ore"],
                    Effect: "After each player has finished placing their starting pieces, place 4 barbarian settlements, wherever you like (respecting distance rules). Whenever a barbarian settlement produces resources, place a token underneath the settlement. If they have a road leading to it, any player can conquer a barbarian settlement for (1 Brick, 1 Sheep, 1 Ore). You (Dacians) can conquer barbarians for any 3 of those 4 resources instead."
                },
                "Blend In": "You can have roads on edges even where other players have roads (you can build them there, and other players can also build roads where you already have a roads).",
                "Zamolxis": "You can shuffle a used knight back into the deck to use it again, either to just move the robber (without collecting) or just collect (without moving it)."
            },
            spacing: 0.4
        }
    }
].sort((a, b) => getOnlyKey(a).localeCompare(getOnlyKey(b)))