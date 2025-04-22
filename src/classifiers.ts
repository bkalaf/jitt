import { ObjectId } from 'mongodb';
// import ClassifierData from './../classifier.json' with { type: 'json' };

const value = {};
interface RootObject {
    conditions: string[];
    attributes: Attributes;
    path: string[];
    traits?: Attributes;
    itemType?: string;
    fullname?: string;
}

interface Attributes {
    gender?: string;
    youthSize?: string;
    suitType?: string;
    blazerType?: string;
}

function handleYouthSize(value?: '0-24M' | '2T-5T' | '4T+') {
    if (value == null) return undefined;
    switch (value) {
        case '0-24M':
            return 'low';
        case '2T-5T':
            return 'mid';
        case '4T+':
            return 'high';
    }
}

const reference = {
    bags: {
        backpack: {
            itemType: 'backpack',
            taxonomy: {
                mens: "Men::Men's accessories::Backpacks",
                womens: "Women::Women's handbags::Backpacks"
            },
            path: '/bags/backpack'
        },
        briefcase: {
            itemType: 'briefcase',
            taxonomy: {
                mens: "Men::Men's accessories::Briefcases"
            },
            path: '/bags/briefcase'
        },
        bucket: {
            itemType: 'bucket bag',
            taxonomy: {
                womens: "Women::Women's handbags::Bucket Bags"
            },
            path: '/bags/bucket'
        },
        cosmetic: {
            itemType: 'cosmetic bag',
            taxonomy: {
                womens: "Women::Women's handbags::Cosmetic bags"
            },
            path: '/bags/cosmetic'
        },
        'cross-body': {
            itemType: 'cross-body bag',
            taxonomy: {
                womens: "Women::Women's handbags::Crossbody Bags"
            },
            path: '/bags/cross-body'
        },
        messenger: {
            itemType: 'messenger bag',
            taxonomy: {
                womens: "Women::Women's handbags::Messenger Bags"
            },
            path: '/bags/messenger'
        },
        hobo: {
            itemType: 'hobo bag',
            taxonomy: {
                womens: "Women::Women's handbags::Hobo Bags"
            },
            path: '/bags/hobo'
        },
        satchel: {
            itemType: 'satchel',
            taxonomy: {
                womens: "Women::Women's handbags::Satchel"
            },
            path: '/bags/satchel'
        },
        shoulder: {
            itemType: 'shoulder bag',
            taxonomy: {
                womens: "Women::Women's handbags::Shoulder Bags"
            },
            path: '/bags/shoulder'
        },
        tote: {
            itemType: 'tote bag',
            taxonomy: {
                womens: "Women::Women's handbags::Tote Bags"
            },
            path: '/bags/tote'
        },
        'fanny-pack': {
            itemType: 'fanny-pack',
            taxonomy: {
                womens: "Women::Women's handbags::Waist Bags & Fanny Packs"
            },
            path: '/bags/fanny-pack'
        },
        luggage: {
            itemType: 'suitcase',
            taxonomy: 'Other::Travel & Luggage::Suitcases',
            'carry-on': {
                itemType: 'carry-on suitcase',
                taxonomy: 'Other::Travel & Luggage::Carry-On Luggage',
                path: '/bags/luggage/carry-on'
            },
            path: '/bags/luggage'
        },
        itemType: 'bag',
        taxonomy: {
            mens: "Men::Men's accessories::Bags"
        }
    },
    apparel: {
        accessories: {
            head: {
                bandana: {
                    itemType: 'bandana',
                    taxonomy: {
                        mens: "Men || Men's accessories || Bandanas",
                        womens: "Women || Women's accessories || Bandanas",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/head/bandana'
                },
                'bow-tie': {
                    itemType: 'bow-tie',
                    taxonomy: {
                        mens: "Men || Men's accessories || Bow Ties",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/head/bow-tie'
                },
                'collar-stay': {
                    itemType: 'collar-stay',
                    taxonomy: {
                        mens: "Men || Men's accessories || Collar Stays",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/head/collar-stay'
                },
                sunglasses: {
                    itemType: 'sunglasses',
                    taxonomy: {
                        mens: "Men || Men's accessories || Sunglasses",
                        womens: "Women || Women's accessories || Sunglasses",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/head/sunglasses'
                },
                tie: {
                    itemType: 'tie',
                    taxonomy: {
                        mens: "Men || Men's accessories || Ties",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/head/tie'
                },
                'hair-accessory': {
                    itemType: 'hair-accessory',
                    taxonomy: {
                        womens: "Women || Women's accessories || Hair accessories",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/head/hair-accessory'
                },
                headband: {
                    itemType: 'headband',
                    taxonomy: {
                        womens: "Women || Women's accessories || Headbands",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/head/headband'
                },
                hijab: {
                    itemType: 'hijab',
                    taxonomy: {
                        womens: "Women || Women's accessories || Hijabs",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/head/hijab'
                },
                scarf: {
                    itemType: 'scarf',
                    taxonomy: {
                        mens: "Men || Men's accessories || Scarves",
                        womens: "Women || Women's accessories || Scarves",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/head/scarf'
                },
                hat: {
                    itemType: 'hat',
                    taxonomy: {
                        mens: "Men || Men's accessories || Hats",
                        womens: "Women || Women's accessories || Hats",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/head/hat',
                    fedora: {
                        itemType: 'fedora',
                        taxonomy: {
                            mens: "Men || Men's accessories || Hats",
                            womens: "Women || Women's accessories || Hats",
                            boys: {
                                low: 'Kids || Boys accessories || Boys 0-24 mos',
                                mid: 'Kids || Boys accessories || Boys 2T-5T',
                                high: 'Kids || Boys accessories || Boys (4+)'
                            },
                            girls: {
                                low: 'Kids || Girls accessories || Girls 0-24 mos',
                                mid: 'Kids || Girls accessories || Girls 2T-5T',
                                high: 'Kids || Girls accessories || Girls (4+)'
                            }
                        },
                        path: '/apparel/accessories/head/hat/fedora'
                    },
                    'fitted-cap': {
                        itemType: 'fitted-cap',
                        taxonomy: {
                            mens: "Men || Men's accessories || Hats",
                            womens: "Women || Women's accessories || Hats",
                            boys: {
                                low: 'Kids || Boys accessories || Boys 0-24 mos',
                                mid: 'Kids || Boys accessories || Boys 2T-5T',
                                high: 'Kids || Boys accessories || Boys (4+)'
                            },
                            girls: {
                                low: 'Kids || Girls accessories || Girls 0-24 mos',
                                mid: 'Kids || Girls accessories || Girls 2T-5T',
                                high: 'Kids || Girls accessories || Girls (4+)'
                            }
                        },
                        path: '/apparel/accessories/head/hat/fitted-cap',
                        mlb: {
                            itemType: 'fitted-cap',
                            taxonomy: {
                                mens: 'Sports & outdoors || Fan shop || MLB',
                                womens: 'Sports & outdoors || Fan shop || MLB',
                                boys: {
                                    low: 'Sports & outdoors || Fan shop || MLB',
                                    mid: 'Sports & outdoors || Fan shop || MLB',
                                    high: 'Sports & outdoors || Fan shop || MLB'
                                },
                                girls: {
                                    low: 'Sports & outdoors || Fan shop || MLB',
                                    mid: 'Sports & outdoors || Fan shop || MLB',
                                    high: 'Sports & outdoors || Fan shop || MLB'
                                }
                            },
                            path: '/apparel/accessories/head/hat/fitted-cap/mlb'
                        },
                        nba: {
                            itemType: 'fitted-cap',
                            taxonomy: {
                                mens: 'Sports & outdoors || Fan shop || NBA',
                                womens: 'Sports & outdoors || Fan shop || NBA',
                                boys: {
                                    low: 'Sports & outdoors || Fan shop || NBA',
                                    mid: 'Sports & outdoors || Fan shop || NBA',
                                    high: 'Sports & outdoors || Fan shop || NBA'
                                },
                                girls: {
                                    low: 'Sports & outdoors || Fan shop || NBA',
                                    mid: 'Sports & outdoors || Fan shop || NBA',
                                    high: 'Sports & outdoors || Fan shop || NBA'
                                }
                            },
                            path: '/apparel/accessories/head/hat/fitted-cap/nba'
                        },
                        ncaa: {
                            itemType: 'fitted-cap',
                            taxonomy: {
                                mens: 'Sports & outdoors || Fan shop || NCAA',
                                womens: 'Sports & outdoors || Fan shop || NCAA',
                                boys: {
                                    low: 'Sports & outdoors || Fan shop || NCAA',
                                    mid: 'Sports & outdoors || Fan shop || NCAA',
                                    high: 'Sports & outdoors || Fan shop || NCAA'
                                },
                                girls: {
                                    low: 'Sports & outdoors || Fan shop || NCAA',
                                    mid: 'Sports & outdoors || Fan shop || NCAA',
                                    high: 'Sports & outdoors || Fan shop || NCAA'
                                }
                            },
                            path: '/apparel/accessories/head/hat/fitted-cap/ncaa'
                        },
                        nfl: {
                            itemType: 'fitted-cap',
                            taxonomy: {
                                mens: 'Sports & outdoors || Fan shop || NFL',
                                womens: 'Sports & outdoors || Fan shop || NFL',
                                boys: {
                                    low: 'Sports & outdoors || Fan shop || NFL',
                                    mid: 'Sports & outdoors || Fan shop || NFL',
                                    high: 'Sports & outdoors || Fan shop || NFL'
                                },
                                girls: {
                                    low: 'Sports & outdoors || Fan shop || NFL',
                                    mid: 'Sports & outdoors || Fan shop || NFL',
                                    high: 'Sports & outdoors || Fan shop || NFL'
                                }
                            },
                            path: '/apparel/accessories/head/hat/fitted-cap/nfl'
                        },
                        nhl: {
                            itemType: 'fitted-cap',
                            taxonomy: {
                                mens: 'Sports & outdoors || Fan shop || NHL',
                                womens: 'Sports & outdoors || Fan shop || NHL',
                                boys: {
                                    low: 'Sports & outdoors || Fan shop || NHL',
                                    mid: 'Sports & outdoors || Fan shop || NHL',
                                    high: 'Sports & outdoors || Fan shop || NHL'
                                },
                                girls: {
                                    low: 'Sports & outdoors || Fan shop || NHL',
                                    mid: 'Sports & outdoors || Fan shop || NHL',
                                    high: 'Sports & outdoors || Fan shop || NHL'
                                }
                            },
                            path: '/apparel/accessories/head/hat/fitted-cap/nhl'
                        }
                    },
                    ballcap: {
                        itemType: 'ballcap',
                        taxonomy: {
                            mens: "Men || Men's accessories || Hats",
                            womens: "Women || Women's accessories || Hats",
                            boys: {
                                low: 'Kids || Boys accessories || Boys 0-24 mos',
                                mid: 'Kids || Boys accessories || Boys 2T-5T',
                                high: 'Kids || Boys accessories || Boys (4+)'
                            },
                            girls: {
                                low: 'Kids || Girls accessories || Girls 0-24 mos',
                                mid: 'Kids || Girls accessories || Girls 2T-5T',
                                high: 'Kids || Girls accessories || Girls (4+)'
                            }
                        },
                        path: '/apparel/accessories/head/hat/ballcap',
                        mlb: {
                            itemType: 'ballcap',
                            taxonomy: {
                                mens: 'Sports & outdoors || Fan shop || MLB',
                                womens: 'Sports & outdoors || Fan shop || MLB',
                                boys: {
                                    low: 'Sports & outdoors || Fan shop || MLB',
                                    mid: 'Sports & outdoors || Fan shop || MLB',
                                    high: 'Sports & outdoors || Fan shop || MLB'
                                },
                                girls: {
                                    low: 'Sports & outdoors || Fan shop || MLB',
                                    mid: 'Sports & outdoors || Fan shop || MLB',
                                    high: 'Sports & outdoors || Fan shop || MLB'
                                }
                            },
                            path: '/apparel/accessories/head/hat/ballcap/mlb'
                        },
                        nba: {
                            itemType: 'ballcap',
                            taxonomy: {
                                mens: 'Sports & outdoors || Fan shop || NBA',
                                womens: 'Sports & outdoors || Fan shop || NBA',
                                boys: {
                                    low: 'Sports & outdoors || Fan shop || NBA',
                                    mid: 'Sports & outdoors || Fan shop || NBA',
                                    high: 'Sports & outdoors || Fan shop || NBA'
                                },
                                girls: {
                                    low: 'Sports & outdoors || Fan shop || NBA',
                                    mid: 'Sports & outdoors || Fan shop || NBA',
                                    high: 'Sports & outdoors || Fan shop || NBA'
                                }
                            },
                            path: '/apparel/accessories/head/hat/ballcap/nba'
                        },
                        ncaa: {
                            itemType: 'ballcap',
                            taxonomy: {
                                mens: 'Sports & outdoors || Fan shop || NCAA',
                                womens: 'Sports & outdoors || Fan shop || NCAA',
                                boys: {
                                    low: 'Sports & outdoors || Fan shop || NCAA',
                                    mid: 'Sports & outdoors || Fan shop || NCAA',
                                    high: 'Sports & outdoors || Fan shop || NCAA'
                                },
                                girls: {
                                    low: 'Sports & outdoors || Fan shop || NCAA',
                                    mid: 'Sports & outdoors || Fan shop || NCAA',
                                    high: 'Sports & outdoors || Fan shop || NCAA'
                                }
                            },
                            path: '/apparel/accessories/head/hat/ballcap/ncaa'
                        },
                        nfl: {
                            itemType: 'ballcap',
                            taxonomy: {
                                mens: 'Sports & outdoors || Fan shop || NFL',
                                womens: 'Sports & outdoors || Fan shop || NFL',
                                boys: {
                                    low: 'Sports & outdoors || Fan shop || NFL',
                                    mid: 'Sports & outdoors || Fan shop || NFL',
                                    high: 'Sports & outdoors || Fan shop || NFL'
                                },
                                girls: {
                                    low: 'Sports & outdoors || Fan shop || NFL',
                                    mid: 'Sports & outdoors || Fan shop || NFL',
                                    high: 'Sports & outdoors || Fan shop || NFL'
                                }
                            },
                            path: '/apparel/accessories/head/hat/ballcap/nfl'
                        },
                        nhl: {
                            itemType: 'ballcap',
                            taxonomy: {
                                mens: 'Sports & outdoors || Fan shop || NHL',
                                womens: 'Sports & outdoors || Fan shop || NHL',
                                boys: {
                                    low: 'Sports & outdoors || Fan shop || NHL',
                                    mid: 'Sports & outdoors || Fan shop || NHL',
                                    high: 'Sports & outdoors || Fan shop || NHL'
                                },
                                girls: {
                                    low: 'Sports & outdoors || Fan shop || NHL',
                                    mid: 'Sports & outdoors || Fan shop || NHL',
                                    high: 'Sports & outdoors || Fan shop || NHL'
                                }
                            },
                            path: '/apparel/accessories/head/hat/ballcap/nhl'
                        }
                    }
                }
            },
            jewelry: {
                bracelet: {
                    itemType: 'bracelet',
                    taxonomy: {
                        mens: 'Men::Jewelry::Bracelets',
                        womens: 'Women::Jewelry::Bracelets'
                    }
                },
                cufflinks: {
                    itemType: 'cufflinks',
                    taxonomy: {
                        mens: 'Men || Jewelry || Cufflinks'
                    },
                    path: '/apparel/accessories/jewelry/cufflinks'
                },
                earrings: {
                    itemType: 'earrings',
                    taxonomy: {
                        mens: 'Men || Jewelry || Earrings',
                        womens: 'Women || Jewelry || Earrings'
                    },
                    path: '/apparel/accessories/jewelry/earrings'
                },
                necklace: {
                    itemType: 'necklace',
                    taxonomy: {
                        mens: 'Men || Jewelry || Necklaces',
                        womens: 'Women || Jewelry || Necklaces'
                    },
                    path: '/apparel/accessories/jewelry/necklace'
                },
                pin: {
                    itemType: 'pin',
                    taxonomy: {
                        mens: 'Men || Jewelry || Pins',
                        womens: 'Women || Jewelry || Pins'
                    },
                    path: '/apparel/accessories/jewelry/pin'
                },
                ring: {
                    itemType: 'ring',
                    taxonomy: {
                        mens: 'Men || Jewelry || Rings',
                        womens: 'Women || Jewelry || Rings'
                    },
                    path: '/apparel/accessories/jewelry/ring'
                },
                watch: {
                    itemType: 'watch',
                    taxonomy: {
                        mens: "Men || Men's accessories || Watches",
                        womens: "Women || Women's accessories || Watches"
                    },
                    path: '/apparel/accessories/jewelry/watch'
                },
                'nose-ring': {
                    itemType: 'nose ring',
                    taxonomy: {
                        womens: 'Women || Jewelry || Nose Rings'
                    },
                    path: '/apparel/accessories/jewelry/nose-ring'
                },
                'toe-ring': {
                    itemType: 'toe ring',
                    taxonomy: {
                        womens: 'Women || Jewelry || Toe Rings'
                    },
                    path: '/apparel/accessories/jewelry/toe-ring'
                }
            },
            misc: {
                taxonomy: {},
                path: '/apparel/accessories/misc',
                belt: {
                    itemType: 'belt',
                    taxonomy: {
                        mens: "Men || Men's accessories || Belts",
                        womens: "Women || Women's accessories || Belts",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/misc/belt'
                },
                cardholder: {
                    itemType: 'cardholder',
                    taxonomy: {
                        mens: "Men || Men's accessories || Cardholders",
                        womens: "Women || Women's accessories || Cardholders",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/misc/cardholder'
                },
                earmuff: {
                    itemType: 'earmuff',
                    taxonomy: {
                        mens: "Men || Men's accessories || Other",
                        womens: "Women || Women's accessories || Other",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/misc/earmuff'
                },
                gloves: {
                    itemType: 'gloves',
                    taxonomy: {
                        mens: "Men || Men's accessories || Fashion Gloves",
                        womens: "Women || Women's accessories || Fashion Gloves",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/misc/gloves'
                },
                handkerchief: {
                    itemType: 'handkerchief',
                    taxonomy: {
                        mens: "Men || Men's accessories || Handkerchiefs",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/misc/handkerchief'
                },
                turban: {
                    itemType: 'turban',
                    taxonomy: {
                        mens: "Men || Men's accessories || Turbans",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/misc/turban'
                },
                umbrella: {
                    itemType: 'umbrella',
                    taxonomy: {
                        mens: "Men || Men's accessories || Umbrellas",
                        womens: "Women || Women's accessories || Umbrellas",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/misc/umbrella'
                },
                wallet: {
                    itemType: 'wallet',
                    taxonomy: {
                        mens: "Men || Men's accessories || Wallets",
                        womens: "Women || Women's accessories || Wallets",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/misc/wallet'
                },
                fascinator: {
                    itemType: 'fascinator',
                    taxonomy: {
                        womens: "Women || Women's accessories || Fascinators",
                        boys: {
                            low: 'Kids || Boys accessories || Boys 0-24 mos',
                            mid: 'Kids || Boys accessories || Boys 2T-5T',
                            high: 'Kids || Boys accessories || Boys (4+)'
                        },
                        girls: {
                            low: 'Kids || Girls accessories || Girls 0-24 mos',
                            mid: 'Kids || Girls accessories || Girls 2T-5T',
                            high: 'Kids || Girls accessories || Girls (4+)'
                        }
                    },
                    path: '/apparel/accessories/misc/fascinator'
                }
            }
        },
        footwear: {
            itemType: 'footwear',
            taxonomy: {
                mens: 'Men || Shoes || All Shoes',
                boys: {
                    low: 'Kids || Boys shoes || Boys 0-24 mos',
                    mid: 'Kids || Boys shoes || Boys 2T-5T',
                    high: 'Kids || Boys shoes || Boys (4+)'
                },
                girls: {
                    low: 'Kids || Girls shoes || Girls 0-24 mos',
                    mid: 'Kids || Girls shoes || Girls 2T-5T',
                    high: 'Kids || Girls shoes || Girls (4+)'
                }
            },
            path: '/apparel/footwear',
            sneakers: {
                itemType: 'sneakers',
                taxonomy: {
                    mens: 'Men || Shoes || Fashion sneakers',
                    womens: 'Women || Shoes || Fashion sneakers'
                },
                path: '/apparel/footwear/sneakers',
                athletic: {
                    itemType: 'athletic sneakers',
                    taxonomy: {
                        mens: 'Men || Shoes || Athletic',
                        womens: 'Women || Shoes || Athletic'
                    },
                    path: '/apparel/footwear/sneakers/athletic'
                },
                'fashion-sneakers': {
                    itemType: 'sneakers',
                    taxonomy: {
                        mens: 'Men || Shoes || Fashion sneakers',
                        womens: 'Women || Shoes || Fashion sneakers'
                    },
                    path: '/apparel/footwear/sneakers/fashion-sneakers'
                }
            },
            loafers: {
                itemType: 'loafers',
                taxonomy: {
                    mens: 'Men || Shoes || Loafers',
                    womens: 'Women || Shoes || Loafers'
                },
                path: '/apparel/footwear/loafers',
                deck: {
                    itemType: 'deck shoes',
                    taxonomy: {},
                    path: '/apparel/footwear/loafers/deck'
                },
                monk: {
                    itemType: 'monk shoes',
                    taxonomy: {},
                    path: '/apparel/footwear/loafers/monk'
                },
                'penny-loafers': {
                    itemType: 'penny loafers',
                    taxonomy: {},
                    path: '/apparel/footwear/loafers/penny-loafers'
                }
            },
            heels: {
                itemType: 'heels',
                taxonomy: {
                    womens: 'Women || Shoes || Heels'
                },
                path: '/apparel/footwear/heels',
                'ankel-strap': {
                    itemType: 'ankle-strap heels',
                    taxonomy: {},
                    path: '/apparel/footwear/heels/ankel-strap'
                },
                espadrille: {
                    itemType: 'espadrille heels',
                    taxonomy: {},
                    path: '/apparel/footwear/heels/espadrille'
                },
                'mary-jane': {
                    itemType: 'mary janes',
                    taxonomy: {},
                    path: '/apparel/footwear/heels/mary-jane'
                },
                pumps: {
                    itemType: 'pumps',
                    taxonomy: {},
                    path: '/apparel/footwear/heels/pumps'
                },
                'sling-back': {
                    itemType: 'sling-backs',
                    taxonomy: {},
                    path: '/apparel/footwear/heels/sling-back'
                },
                't-strap': {
                    itemType: 't-strap heels',
                    taxonomy: {},
                    path: '/apparel/footwear/heels/t-strap'
                }
            },
            sandals: {
                itemType: 'sandals',
                taxonomy: {
                    mens: 'Men || Shoes || Sandals',
                    womens: 'Women || Shoes || Sandals'
                },
                path: '/apparel/footwear/sandals',
                'flip-flops': {
                    itemType: 'flip-flops',
                    taxonomy: {},
                    path: '/apparel/footwear/sandals/flip-flops'
                }
            },
            specialized: {
                itemType: 'specialized',
                taxonomy: {},
                path: '/apparel/footwear/specialized',
                orthopedic: {
                    itemType: 'orthopedic',
                    taxonomy: {
                        mens: 'Men || Shoes || Work & safety',
                        womens: 'Women || Shoes || Work & safety'
                    },
                    path: '/apparel/footwear/specialized/orthopedic'
                },
                'safety-shoes': {
                    itemType: 'saftey shoes',
                    taxonomy: {
                        mens: 'Men || Shoes || Work & safety',
                        womens: 'Women || Shoes || Work & safety'
                    },
                    path: '/apparel/footwear/specialized/safety-shoes',
                    'non-slip': {
                        itemType: 'non-slip',
                        taxonomy: {},
                        path: '/apparel/footwear/specialized/safety-shoes/non-slip'
                    }
                },
                'work-shoes': {
                    itemType: 'work shoes',
                    taxonomy: {
                        mens: 'Men || Shoes || Work & safety',
                        womens: 'Women || Shoes || Work & safety'
                    },
                    path: '/apparel/footwear/specialized/work-shoes'
                },
                'hiking-boots': {
                    itemType: 'hiking-boots',
                    taxonomy: {
                        mens: 'Men || Shoes || Outdoor',
                        womens: 'Women || Shoes || Outdoor'
                    },
                    path: '/apparel/footwear/specialized/hiking-boots'
                },
                'trail-runners': {
                    itemType: 'trail-runners',
                    taxonomy: {
                        mens: 'Men || Shoes || Outdoor',
                        womens: 'Women || Shoes || Outdoor'
                    },
                    path: '/apparel/footwear/specialized/trail-runners'
                },
                'cross-trainers': {
                    itemType: 'cross-trainers',
                    taxonomy: {
                        mens: 'Men || Shoes || Outdoor',
                        womens: 'Women || Shoes || Outdoor'
                    },
                    path: '/apparel/footwear/specialized/cross-trainers'
                },
                'climbing-shoes': {
                    itemType: 'climbing-shoes',
                    taxonomy: {
                        mens: 'Men || Shoes || Outdoor',
                        womens: 'Women || Shoes || Outdoor'
                    },
                    path: '/apparel/footwear/specialized/climbing-shoes'
                },
                'water-shoes': {
                    itemType: 'water-shoes',
                    taxonomy: {
                        mens: 'Men || Shoes || Outdoor',
                        womens: 'Women || Shoes || Outdoor'
                    },
                    path: '/apparel/footwear/specialized/water-shoes'
                }
            },
            'mules-clogs': {
                itemType: 'mules',
                taxonomy: {
                    mens: 'Men || Shoes || Mules',
                    womens: 'Women || Shoes || Mules'
                },
                path: '/apparel/footwear/mules-clogs',
                clogs: {
                    itemType: 'clogs',
                    taxonomy: {
                        mens: 'Men || Shoes || Clogs',
                        womens: 'Women || Shoes || Clogs'
                    },
                    path: '/apparel/footwear/mules-clogs/clogs',
                    platform: {
                        itemType: 'platform shoes',
                        taxonomy: {},
                        path: '/apparel/footwear/mules-clogs/clogs/platform'
                    }
                },
                mules: {
                    itemType: 'mules',
                    taxonomy: {
                        mens: 'Men || Shoes || Mules',
                        womens: 'Women || Shoes || Mules'
                    },
                    path: '/apparel/footwear/mules-clogs/mules'
                }
            },
            boots: {
                itemType: 'boots',
                taxonomy: {
                    mens: 'Men || Shoes || Boots',
                    womens: 'Women || Shoes || Boots'
                },
                path: '/apparel/footwear/boots',
                'ankle-boot': {
                    itemType: 'ankle-boot',
                    taxonomy: {},
                    path: '/apparel/footwear/boots/ankle-boot'
                },
                country: {
                    itemType: 'country',
                    taxonomy: {},
                    path: '/apparel/footwear/boots/country'
                },
                frye: {
                    itemType: 'frye boots',
                    taxonomy: {},
                    path: '/apparel/footwear/boots/frye'
                },
                combat: {
                    itemType: 'combat boots',
                    taxonomy: {},
                    path: '/apparel/footwear/boots/combat'
                },
                chukka: {
                    itemType: 'chukka boots',
                    taxonomy: {},
                    path: '/apparel/footwear/boots/chukka'
                },
                riding: {
                    itemType: 'riding boots',
                    taxonomy: {},
                    path: '/apparel/footwear/boots/riding'
                },
                'knee-high': {
                    itemType: 'knee-high boots',
                    taxonomy: {},
                    path: '/apparel/footwear/boots/knee-high'
                },
                'half-calf': {
                    itemType: 'half-calf boots',
                    taxonomy: {},
                    path: '/apparel/footwear/boots/half-calf'
                },
                'over-the-knee': {
                    itemType: 'over-the-knee boots',
                    taxonomy: {},
                    path: '/apparel/footwear/boots/over-the-knee'
                },
                snow: {
                    itemType: 'snow boots',
                    taxonomy: {},
                    path: '/apparel/footwear/boots/snow'
                },
                wellington: {
                    itemType: 'wellingtons',
                    taxonomy: {},
                    path: '/apparel/footwear/boots/wellington'
                }
            },
            oxfords: {
                itemType: 'oxfords',
                taxonomy: {
                    mens: 'Men || Shoes || Oxfords',
                    womens: 'Women || Shoes || Oxfords'
                },
                path: '/apparel/footwear/oxfords',
                saddle: {
                    itemType: 'saddle shoes',
                    taxonomy: {},
                    path: '/apparel/footwear/oxfords/saddle'
                },
                'wing-tips': {
                    itemType: 'wing-tips',
                    taxonomy: {},
                    path: '/apparel/footwear/oxfords/wing-tips'
                },
                'winkle-picker': {
                    itemType: 'winkle-picker',
                    taxonomy: {},
                    path: '/apparel/footwear/oxfords/winkle-picker'
                },
                moccassins: {
                    itemType: 'moccassins',
                    taxonomy: {},
                    path: '/apparel/footwear/oxfords/moccassins'
                }
            },
            'slip-ons': {
                itemType: 'slip-ons',
                taxonomy: {
                    mens: 'Men || Shoes || Slip-Ons',
                    womens: 'Women || Shoes || Slip-Ons'
                },
                path: '/apparel/footwear/slip-ons',
                slippers: {
                    itemType: 'slippers',
                    taxonomy: {
                        mens: 'Men || Shoes || Slippers',
                        womens: 'Women || Shoes || Slippers'
                    },
                    path: '/apparel/footwear/slip-ons/slippers'
                },
                dockside: {
                    itemType: 'dockside',
                    taxonomy: {},
                    path: '/apparel/footwear/slip-ons/dockside'
                }
            }
        },
        undergarments: {
            itemType: 'undergarments',
            taxonomy: {
                mens: 'Men || Other || All Other',
                womens: 'Women || Other || All Other'
            },
            path: '/apparel/undergarments',
            socks: {
                itemType: 'socks',
                taxonomy: {
                    mens: 'Men || Athletic apparel || Socks',
                    womens: 'Women || Athletic apparel || Socks'
                },
                path: '/apparel/undergarments/socks'
            },
            bra: {
                itemType: 'bra',
                taxonomy: {
                    womens: 'Women || Underwear || Bras'
                },
                path: '/apparel/undergarments/bra',
                'sports-bra': {
                    itemType: 'sports bra',
                    taxonomy: {
                        womens: 'Women || Athletic apparel || Sports bras'
                    },
                    path: '/apparel/undergarments/bra/sports-bra'
                }
            },
            underwear: {
                itemType: 'underwear',
                taxonomy: {},
                path: '/apparel/undergarments/underwear',
                'g-string': {
                    itemType: 'g-string',
                    taxonomy: {
                        womens: 'Women || Underwear || G-strings & thongs'
                    },
                    path: '/apparel/undergarments/underwear/g-string'
                },
                thong: {
                    itemType: 'thong',
                    taxonomy: {
                        womens: 'Women || Underwear || G-strings & thongs'
                    },
                    path: '/apparel/undergarments/underwear/thong'
                },
                panties: {
                    itemType: 'panties',
                    taxonomy: {
                        womens: 'Women || Underwear || Panties'
                    },
                    path: '/apparel/undergarments/underwear/panties'
                },
                thermals: {
                    itemType: 'thermal underwear',
                    taxonomy: {
                        womens: 'Women || Underwear || Thermal underwear'
                    },
                    path: '/apparel/undergarments/underwear/thermals'
                },
                briefs: {
                    itemType: 'briefs',
                    taxonomy: {},
                    path: '/apparel/undergarments/underwear/briefs'
                },
                boxers: {
                    itemType: 'boxers',
                    taxonomy: {},
                    path: '/apparel/undergarments/underwear/boxers'
                }
            },
            sleepwear: {
                itemType: 'sleepwear',
                taxonomy: {
                    womens: 'Women || Sleepwear & robes || Other'
                },
                path: '/apparel/undergarments/sleepwear',
                nightgown: {
                    itemType: 'nightgown',
                    taxonomy: {
                        womens: 'Women || Sleepwear & robes || Nightgowns & sleep shirts'
                    },
                    path: '/apparel/undergarments/sleepwear/nightgown'
                },
                'sleep-shirt': {
                    itemType: 'sleep-shirt',
                    taxonomy: {
                        womens: 'Women || Sleepwear & robes || Nightgowns & sleep shirts'
                    },
                    path: '/apparel/undergarments/sleepwear/sleep-shirt'
                },
                pajamas: {
                    itemType: 'pajamas',
                    taxonomy: {
                        womens: 'Women || Sleepwear & robes || Pajama sets'
                    },
                    path: '/apparel/undergarments/sleepwear/pajamas',
                    'pajama-top': {
                        itemType: 'pajama-top',
                        taxonomy: {
                            womens: 'Women || Sleepwear & robes || Pajama tops'
                        },
                        path: '/apparel/undergarments/sleepwear/pajamas/pajama-top'
                    },
                    'pajama-pants': {
                        itemType: 'pajama pants',
                        taxonomy: {
                            womens: 'Women || Sleepwear & robes || Pajama pants'
                        },
                        path: '/apparel/undergarments/sleepwear/pajamas/pajama-pants'
                    }
                },
                robe: {
                    itemType: 'robe',
                    taxonomy: {
                        womens: 'Women || Sleepwear & robes || Robes'
                    },
                    path: '/apparel/undergarments/sleepwear/robe'
                }
            },
            swimwear: {
                itemType: 'swimwear',
                taxonomy: {
                    boys: {
                        low: 'Kids || Boys swimwear || Boys 0-24 mos',
                        mid: 'Kids || Boys swimwear || Boys 2T-5T',
                        high: 'Kids || Boys swimwear || Boys (4+)'
                    },
                    girls: {
                        low: 'Kids || Girls swimwear || Girls 0-24 mos',
                        mid: 'Kids || Girls swimwear || Girls 2T-5T',
                        high: 'Kids || Girls swimwear || Girls (4+)'
                    }
                },
                path: '/apparel/undergarments/swimwear',
                'board-shorts': {
                    itemType: 'board shorts',
                    taxonomy: {
                        mens: 'Men || Swimwear || Board shorts'
                    },
                    path: '/apparel/undergarments/swimwear/board-shorts'
                },
                speedo: {
                    itemType: 'swim briefs',
                    taxonomy: {
                        mens: 'Men || Swimwear || Swim briefs'
                    },
                    path: '/apparel/undergarments/swimwear/speedo',
                    athletic: {
                        itemType: 'swim briefs',
                        taxonomy: {
                            mens: 'Men || Athletic apparel || Competitive swimwear'
                        },
                        path: '/apparel/undergarments/swimwear/speedo/athletic'
                    }
                },
                trunks: {
                    itemType: 'swim trunks',
                    taxonomy: {
                        mens: 'Men || Swimwear || Swim trunks'
                    },
                    path: '/apparel/undergarments/swimwear/trunks'
                },
                'beach-accessories': {
                    itemType: 'beach accessories',
                    taxonomy: {
                        womens: 'Women || Swimwear || Beach accessories'
                    },
                    path: '/apparel/undergarments/swimwear/beach-accessories'
                },
                'cover-up': {
                    itemType: 'cover-up',
                    taxonomy: {
                        womens: 'Women || Swimwear || Cover-ups'
                    },
                    path: '/apparel/undergarments/swimwear/cover-up'
                },
                'one-piece': {
                    itemType: 'one-piece',
                    taxonomy: {
                        womens: 'Women || Swimwear || One-piece'
                    },
                    path: '/apparel/undergarments/swimwear/one-piece'
                },
                'two-piece': {
                    itemType: 'two piece bikini',
                    taxonomy: {
                        womens: 'Women || Swimwear || Two-piece'
                    },
                    path: '/apparel/undergarments/swimwear/two-piece'
                }
            }
        },
        'head-to-toe': {
            itemType: 'head-to-toe',
            taxonomy: {},
            path: '/apparel/head-to-toe',
            dress: {
                itemType: 'dress',
                taxonomy: {
                    girls: {
                        low: 'Kids || Girls dresses || Girls 0-24 mos',
                        mid: 'Kids || Girls dresses || Girls 2T-5T',
                        high: 'Kids || Girls dresses || Girls (4+)'
                    }
                },
                path: '/apparel/head-to-toe/dress',
                'high-low': {
                    itemType: 'high-low dress',
                    taxonomy: {
                        womens: 'Women || Dresses || High Low'
                    },
                    path: '/apparel/head-to-toe/dress/high-low'
                },
                maternity: {
                    itemType: 'maternity dress',
                    taxonomy: {
                        womens: 'Women || Maternity || Dresses'
                    },
                    path: '/apparel/head-to-toe/dress/maternity'
                },
                athletic: {
                    itemType: 'athletic dress',
                    taxonomy: {
                        womens: 'Women || Athletic apparel || Athletic Dresses'
                    },
                    path: '/apparel/head-to-toe/dress/athletic'
                },
                jumpsuit: {
                    itemType: 'jumpsuit',
                    taxonomy: {
                        womens: 'Women || Dresses || Jumpsuits & Rompers'
                    },
                    path: '/apparel/head-to-toe/dress/jumpsuit'
                },
                romper: {
                    itemType: 'romper',
                    taxonomy: {
                        womens: 'Women || Dresses || Jumpsuits & Rompers'
                    },
                    path: '/apparel/head-to-toe/dress/romper'
                },
                'knee-length': {
                    itemType: 'knee-length dress',
                    taxonomy: {
                        womens: 'Women || Dresses || Knee-length'
                    },
                    path: '/apparel/head-to-toe/dress/knee-length'
                },
                maxi: {
                    itemType: 'maxi dress',
                    taxonomy: {
                        womens: 'Women || Dresses || Maxi'
                    },
                    path: '/apparel/head-to-toe/dress/maxi'
                },
                midi: {
                    itemType: 'midi dress',
                    taxonomy: {
                        womens: 'Women || Dresses || Midi'
                    },
                    path: '/apparel/head-to-toe/dress/midi'
                },
                mini: {
                    itemType: 'mini dress',
                    taxonomy: {
                        womens: 'Women || Dresses || Above knee, mini'
                    },
                    path: '/apparel/head-to-toe/dress/mini'
                }
            },
            suit: {
                itemType: 'suit',
                taxonomy: {
                    boys: {
                        low: 'Kids || Boys coats & jackets || Boys 0-24 mos',
                        mid: 'Kids || Boys coats & jackets || Boys 2T-5T',
                        high: 'Kids || Boys coats & jackets || Boys (4+)'
                    }
                },
                path: '/apparel/head-to-toe/suit',
                snowsuit: {
                    itemType: 'snowsuit',
                    taxonomy: {
                        mens: 'Men || Athletic apparel || Snowsuits',
                        womens: 'Women || Athletic apparel || Snowsuits'
                    },
                    path: '/apparel/head-to-toe/suit/snowsuit'
                },
                tracksuit: {
                    itemType: 'tracksuit',
                    taxonomy: {
                        mens: 'Men || Athletic apparel || Tracksuits',
                        womens: 'Women || Athletic apparel || Tracksuits'
                    },
                    path: '/apparel/head-to-toe/suit/tracksuit'
                },
                tuxedo: {
                    itemType: 'tuxedo',
                    taxonomy: {
                        mens: 'Men || Suits || Tuxedo'
                    },
                    path: '/apparel/head-to-toe/suit/tuxedo'
                },
                sweatsuit: {
                    itemType: 'sweatsuit',
                    taxonomy: {
                        mens: 'Men || Sweats & hoodies || Sweatsuits',
                        womens: 'Women || Athletic apparel || Athletic Sweatsuits'
                    },
                    path: '/apparel/head-to-toe/suit/sweatsuit'
                },
                'dress-suit': {
                    itemType: 'dress-suit',
                    taxonomy: {
                        womens: 'Women || Suits & blazers || Dress suit'
                    },
                    path: '/apparel/head-to-toe/suit/dress-suit'
                },
                maternity: {
                    itemType: 'maternity suit',
                    taxonomy: {
                        womens: 'Women || Maternity || Maternity Suits'
                    },
                    path: '/apparel/head-to-toe/suit/maternity'
                },
                'pant-suit': {
                    itemType: 'pant-suit',
                    taxonomy: {
                        womens: 'Women || Suits & blazers || Pant suit'
                    },
                    path: '/apparel/head-to-toe/suit/pant-suit'
                },
                'skirt-suit': {
                    itemType: 'skirt-suit',
                    taxonomy: {
                        womens: 'Women || Suits & blazers || Skirt suit'
                    },
                    path: '/apparel/head-to-toe/suit/skirt-suit'
                },
                bodysuit: {
                    itemType: 'bodysuit',
                    taxonomy: {
                        womens: 'Women || Tops & blouses || Bodysuits'
                    },
                    path: '/apparel/head-to-toe/suit/bodysuit'
                },
                'double-breasted': {
                    itemType: 'double-breasted suit',
                    taxonomy: {
                        mens: 'Men || Suits || Double breasted'
                    },
                    path: '/apparel/head-to-toe/suit/double-breasted'
                },
                'one-button': {
                    itemType: 'one-button suit',
                    taxonomy: {
                        mens: 'Men || Suits || One button'
                    },
                    path: '/apparel/head-to-toe/suit/one-button'
                },
                'two-button': {
                    itemType: 'two-button suit',
                    taxonomy: {
                        mens: 'Men || Suits || Two button'
                    },
                    path: '/apparel/head-to-toe/suit/two-button'
                },
                'three-button': {
                    itemType: 'three-button suit',
                    taxonomy: {
                        mens: 'Men || Suits || Three button'
                    },
                    path: '/apparel/head-to-toe/suit/three-button'
                },
                'four-button': {
                    itemType: 'four-button suit',
                    taxonomy: {
                        mens: 'Men || Suits || Four button'
                    },
                    path: '/apparel/head-to-toe/suit/four-button'
                }
            }
        },
        tops: {
            itemType: 'tops',
            taxonomy: {
                mens: 'Men || Tops || Other',
                womens: 'Women || Tops & blouses || Other',
                boys: {
                    low: 'Kids || Boys tops & t-shirts || Boys 0-24 mos',
                    mid: 'Kids || Boys tops & t-shirts || Boys 2T-5T',
                    high: 'Kids || Boys tops & t-shirts || Boys (4+)'
                },
                girls: {
                    low: 'Kids || Girls tops & t-shirts || Girls 0-24 mos',
                    mid: 'Kids || Girls tops & t-shirts || Girls 2T-5T',
                    high: 'Kids || Girls tops & t-shirts || Girls (4+)'
                }
            },
            path: '/apparel/tops',
            jacket: {
                itemType: 'jacket',
                taxonomy: {
                    mens: 'Men || Coats & jackets || Other',
                    womens: 'Women || Coats & jackets || Other',
                    boys: {
                        low: 'Kids || Boys coats & jackets || Boys 0-24 mos',
                        mid: 'Kids || Boys coats & jackets || Boys 2T-5T',
                        high: 'Kids || Boys coats & jackets || Boys (4+)'
                    },
                    girls: {
                        low: 'Kids || Girls coats & jackets || Girls 0-24 mos',
                        mid: 'Kids || Girls coats & jackets || Girls 2T-5T',
                        high: 'Kids || Girls coats & jackets || Girls (4+)'
                    }
                },
                path: '/apparel/tops/jacket',
                varsity: {
                    itemType: 'varsity jacket',
                    taxonomy: {
                        mens: 'Men || Coats & jackets || Varsity/baseball'
                    },
                    path: '/apparel/tops/jacket/varsity'
                },
                maternity: {
                    itemType: 'maternity jacket',
                    taxonomy: {
                        womens: 'Women || Maternity || Coats & jackets'
                    },
                    path: '/apparel/tops/jacket/maternity'
                },
                bomber: {
                    itemType: 'bomber jacket',
                    taxonomy: {
                        mens: 'Men || Coats & jackets || Flight/bomber'
                    },
                    path: '/apparel/tops/jacket/bomber'
                },
                athletic: {
                    itemType: 'athletic jacket',
                    taxonomy: {
                        mens: 'Men || Athletic apparel || Jackets',
                        womens: 'Women || Athletic apparel || Jackets'
                    },
                    path: '/apparel/tops/jacket/athletic'
                },
                cape: {
                    itemType: 'cape',
                    taxonomy: {
                        womens: 'Women || Coats & jackets || Cape'
                    },
                    path: '/apparel/tops/jacket/cape'
                },
                fleece: {
                    itemType: 'fleece jacket',
                    taxonomy: {
                        mens: 'Men || Coats & jackets || Fleece jacket',
                        womens: 'Women || Coats & jackets || Fleece jacket'
                    },
                    path: '/apparel/tops/jacket/fleece'
                },
                hoodie: {
                    itemType: 'hoodie',
                    taxonomy: {
                        mens: 'Men || Sweats & hoodies || Hoodie',
                        womens: 'Women || Athletic apparel || Athletic Hoodies'
                    },
                    path: '/apparel/tops/jacket/hoodie'
                },
                'jean-jacket': {
                    itemType: 'jean jacket',
                    taxonomy: {
                        mens: 'Men || Coats & jackets || Jean jacket',
                        womens: 'Women || Coats & jackets || Jean jacket'
                    },
                    path: '/apparel/tops/jacket/jean-jacket'
                },
                military: {
                    itemType: 'military jacket',
                    taxonomy: {
                        mens: 'Men || Coats & jackets || Military',
                        womens: 'Women || Coats & jackets || Military'
                    },
                    path: '/apparel/tops/jacket/military'
                },
                biker: {
                    itemType: 'biker jacket',
                    taxonomy: {
                        mens: 'Men || Coats & jackets || Motorcycle',
                        womens: 'Women || Coats & jackets || Motorcycle'
                    },
                    path: '/apparel/tops/jacket/biker'
                },
                parka: {
                    itemType: 'parka',
                    taxonomy: {
                        mens: 'Men || Coats & jackets || Parka',
                        womens: 'Women || Coats & jackets || Parka'
                    },
                    path: '/apparel/tops/jacket/parka'
                },
                peacoat: {
                    itemType: 'peacoat',
                    taxonomy: {
                        mens: 'Men || Coats & jackets || Peacoat',
                        womens: 'Women || Coats & jackets || Peacoat'
                    },
                    path: '/apparel/tops/jacket/peacoat'
                },
                poncho: {
                    itemType: 'poncho',
                    taxonomy: {
                        mens: 'Men || Coats & jackets || Poncho',
                        womens: 'Women || Coats & jackets || Poncho'
                    },
                    path: '/apparel/tops/jacket/poncho'
                },
                puffer: {
                    itemType: 'puffer jacket',
                    taxonomy: {
                        mens: 'Men || Coats & jackets || Puffer',
                        womens: 'Women || Coats & jackets || Puffer'
                    },
                    path: '/apparel/tops/jacket/puffer'
                },
                raincoat: {
                    itemType: 'raincoat',
                    taxonomy: {
                        mens: 'Men || Coats & jackets || Rainwear',
                        womens: 'Women || Coats & jackets || Raincoat'
                    },
                    path: '/apparel/tops/jacket/raincoat'
                },
                trenchcoat: {
                    itemType: 'trenchcoat',
                    taxonomy: {
                        mens: 'Men || Coats & jackets || Trench',
                        womens: 'Women || Coats & jackets || Trench'
                    },
                    path: '/apparel/tops/jacket/trenchcoat'
                },
                vest: {
                    itemType: 'vest',
                    taxonomy: {
                        mens: 'Men || Coats & jackets || Vest',
                        womens: 'Women || Coats & jackets || Vest'
                    },
                    path: '/apparel/tops/jacket/vest'
                },
                windbreaker: {
                    itemType: 'windbreaker',
                    taxonomy: {
                        mens: 'Men || Coats & jackets || Windbreaker',
                        womens: 'Women || Coats & jackets || Windbreaker'
                    },
                    path: '/apparel/tops/jacket/windbreaker'
                },
                wool: {
                    itemType: 'wool jacket',
                    taxonomy: {
                        mens: 'Men || Coats & jackets || Wool',
                        womens: 'Women || Coats & jackets || Wool'
                    },
                    path: '/apparel/tops/jacket/wool'
                },
                blazer: {
                    itemType: 'blazer',
                    taxonomy: {
                        mens: 'Men || Blazers & sport coats || Other',
                        womens: 'Women || Suits & blazers || Blazer'
                    },
                    path: '/apparel/tops/jacket/blazer',
                    'double-breasted': {
                        itemType: 'double-breasted blazer',
                        taxonomy: {
                            mens: 'Men || Blazers & sport coats || Double breasted'
                        },
                        path: '/apparel/tops/jacket/blazer/double-breasted'
                    },
                    'one-button': {
                        itemType: 'one-button blazer',
                        taxonomy: {
                            mens: 'Men || Blazers & sport coats || One button'
                        },
                        path: '/apparel/tops/jacket/blazer/one-button'
                    },
                    maternity: {
                        itemType: 'maternity blazer',
                        taxonomy: {
                            womens: 'Women || Maternity || Maternity Blazers'
                        },
                        path: '/apparel/tops/jacket/blazer/maternity'
                    },
                    'two-button': {
                        itemType: 'two-button blazer',
                        taxonomy: {
                            mens: 'Men || Blazers & sport coats || Two button'
                        },
                        path: '/apparel/tops/jacket/blazer/two-button'
                    },
                    'three-button': {
                        itemType: 'three-button blazer',
                        taxonomy: {
                            mens: 'Men || Blazers & sport coats || Three button'
                        },
                        path: '/apparel/tops/jacket/blazer/three-button'
                    },
                    'four-button': {
                        itemType: 'four-button blazer',
                        taxonomy: {
                            mens: 'Men || Blazers & sport coats || Four button'
                        },
                        path: '/apparel/tops/jacket/blazer/four-button'
                    }
                },
                'sport-coat': {
                    itemType: 'sport-coat',
                    taxonomy: {
                        mens: 'Men || Blazers & sport coats || Other',
                        womens: 'Women || Suits & blazers || Other'
                    },
                    path: '/apparel/tops/jacket/sport-coat',
                    'double-breasted': {
                        itemType: 'double-breasted sport-coat',
                        taxonomy: {
                            mens: 'Men || Blazers & sport coats || Double breasted'
                        },
                        path: '/apparel/tops/jacket/sport-coat/double-breasted'
                    },
                    'one-button': {
                        itemType: 'one-button sport-coat',
                        taxonomy: {
                            mens: 'Men || Blazers & sport coats || One button'
                        },
                        path: '/apparel/tops/jacket/sport-coat/one-button'
                    },
                    'two-button': {
                        itemType: 'two-button sport-coat',
                        taxonomy: {
                            mens: 'Men || Blazers & sport coats || Two button'
                        },
                        path: '/apparel/tops/jacket/sport-coat/two-button'
                    },
                    'three-button': {
                        itemType: 'three-button sport-coat',
                        taxonomy: {
                            mens: 'Men || Blazers & sport coats || Three button'
                        },
                        path: '/apparel/tops/jacket/sport-coat/three-button'
                    },
                    'four-button': {
                        itemType: 'four-button sport-coat',
                        taxonomy: {
                            mens: 'Men || Blazers & sport coats || Four button'
                        },
                        path: '/apparel/tops/jacket/sport-coat/four-button'
                    }
                }
            },
            sweater: {
                itemType: 'sweater',
                taxonomy: {
                    mens: 'Men || Sweaters || Other',
                    womens: 'Women || Sweaters || Other'
                },
                path: '/apparel/tops/sweater',
                collared: {
                    itemType: 'collared sweater',
                    taxonomy: {
                        womens: 'Women || Sweaters || Collared'
                    },
                    path: '/apparel/tops/sweater/collared'
                },
                cowl: {
                    itemType: 'cowl-neck sweater',
                    taxonomy: {
                        womens: 'Women || Sweaters || Cowl neck'
                    },
                    path: '/apparel/tops/sweater/cowl'
                },
                crew: {
                    itemType: 'crewneck',
                    taxonomy: {
                        mens: 'Men || Sweaters || Crewneck',
                        womens: 'Women || Sweaters || Crewneck'
                    },
                    path: '/apparel/tops/sweater/crew'
                },
                mock: {
                    itemType: 'sweater',
                    taxonomy: {
                        womens: 'Women || Sweaters || Mock Sweaters'
                    },
                    path: '/apparel/tops/sweater/mock'
                },
                scoop: {
                    itemType: 'scoop-neck sweater',
                    taxonomy: {
                        womens: 'Women || Sweaters || Scoop neck'
                    },
                    path: '/apparel/tops/sweater/scoop'
                },
                'v-neck': {
                    itemType: 'v-neck sweater',
                    taxonomy: {
                        mens: 'Men || Sweaters || V-neck',
                        womens: 'Women || Sweaters || V-neck'
                    },
                    path: '/apparel/tops/sweater/v-neck'
                },
                'full-zip': {
                    itemType: 'full-zip sweater',
                    taxonomy: {
                        mens: 'Men || Sweaters || Full zip',
                        womens: 'Women || Sweaters || Full zip'
                    },
                    path: '/apparel/tops/sweater/full-zip'
                },
                athletic: {
                    itemType: 'sweater',
                    taxonomy: {},
                    path: '/apparel/tops/sweater/athletic'
                },
                maternity: {
                    itemType: 'maternity sweater',
                    taxonomy: {
                        womens: 'Women || Maternity || Sweaters'
                    },
                    path: '/apparel/tops/sweater/maternity'
                }
            },
            'casual-shirt': {
                itemType: 'casual-shirt',
                taxonomy: {},
                path: '/apparel/tops/casual-shirt',
                camisole: {
                    itemType: 'camisole',
                    taxonomy: {
                        womens: 'Women || Tops & blouses || Camisoles'
                    },
                    path: '/apparel/tops/casual-shirt/camisole',
                    maternity: {
                        itemType: 'camisole',
                        taxonomy: {
                            womens: 'Women || Maternity || Maternity Camisoles'
                        },
                        path: '/apparel/tops/casual-shirt/camisole/maternity'
                    }
                },
                jersey: {
                    itemType: 'jersey',
                    taxonomy: {
                        mens: 'Men || Athletic apparel || Jerseys',
                        womens: 'Women || Athletic apparel || Jerseys'
                    },
                    path: '/apparel/tops/casual-shirt/jersey',
                    mlb: {
                        itemType: 'jersey',
                        taxonomy: {
                            mens: 'Sports & outdoors || Fan shop || MLB',
                            womens: 'Sports & outdoors || Fan shop || MLB'
                        },
                        path: '/apparel/tops/casual-shirt/jersey/mlb'
                    },
                    nba: {
                        itemType: 'jersey',
                        taxonomy: {
                            mens: 'Sports & outdoors || Fan shop || NBA',
                            womens: 'Sports & outdoors || Fan shop || NBA'
                        },
                        path: '/apparel/tops/casual-shirt/jersey/nba'
                    },
                    ncaa: {
                        itemType: 'jersey',
                        taxonomy: {
                            mens: 'Sports & outdoors || Fan shop || NCAA',
                            womens: 'Sports & outdoors || Fan shop || NCAA'
                        },
                        path: '/apparel/tops/casual-shirt/jersey/ncaa'
                    },
                    nfl: {
                        itemType: 'jersey',
                        taxonomy: {
                            mens: 'Sports & outdoors || Fan shop || NFL',
                            womens: 'Sports & outdoors || Fan shop || NFL'
                        },
                        path: '/apparel/tops/casual-shirt/jersey/nfl'
                    },
                    nhl: {
                        itemType: 'jersey',
                        taxonomy: {
                            mens: 'Sports & outdoors || Fan shop || NHL',
                            womens: 'Sports & outdoors || Fan shop || NHL'
                        },
                        path: '/apparel/tops/casual-shirt/jersey/nhl'
                    }
                },
                polo: {
                    itemType: 'polo',
                    taxonomy: {
                        mens: 'Men || Tops || Polos',
                        womens: 'Women || Tops & blouses || Polo shirt'
                    },
                    path: '/apparel/tops/casual-shirt/polo',
                    athletic: {
                        itemType: 'athletic polo',
                        taxonomy: {
                            mens: 'Men || Athletic apparel || Athletic Polos',
                            womens: 'Women || Athletic apparel || Athletic Polos'
                        },
                        path: '/apparel/tops/casual-shirt/polo/athletic'
                    },
                    maternity: {
                        itemType: 'maternity polo',
                        taxonomy: {
                            womens: 'Women || Maternity || Maternity Polos'
                        },
                        path: '/apparel/tops/casual-shirt/polo/maternity'
                    }
                },
                rugby: {
                    itemType: 'rugby',
                    taxonomy: {
                        mens: 'Men || Tops || Rugby Shirts'
                    },
                    path: '/apparel/tops/casual-shirt/rugby'
                },
                'snow-bib': {
                    itemType: 'snow-bib',
                    taxonomy: {
                        mens: 'Men || Athletic apparel || Snow Bibs',
                        womens: 'Women || Athletic apparel || Snow Bibs'
                    },
                    path: '/apparel/tops/casual-shirt/snow-bib'
                },
                sweatshirt: {
                    itemType: 'sweatshirt',
                    taxonomy: {
                        mens: 'Men || Sweats & hoodies || Sweatshirt, pullover',
                        womens: 'Women || Athletic apparel || Athletic Sweatshirts'
                    },
                    path: '/apparel/tops/casual-shirt/sweatshirt',
                    athletic: {
                        itemType: 'athletic sweatshirt',
                        taxonomy: {
                            mens: 'Men || Athletic apparel || Athletic Sweatshirts',
                            womens: 'Women || Athletic apparel || Athletic Sweatshirts'
                        },
                        path: '/apparel/tops/casual-shirt/sweatshirt/athletic'
                    },
                    maternity: {
                        itemType: 'maternity sweatshirt',
                        taxonomy: {
                            womens: 'Women || Maternity || Sweaters'
                        },
                        path: '/apparel/tops/casual-shirt/sweatshirt/maternity'
                    }
                },
                'tank-top': {
                    itemType: 'tank-top',
                    taxonomy: {
                        mens: 'Men || Tops || Tank',
                        womens: 'Women || Tops & blouses || Tank Tops'
                    },
                    path: '/apparel/tops/casual-shirt/tank-top',
                    athletic: {
                        itemType: 'athletictank-top',
                        taxonomy: {
                            mens: 'Men || Athletic apparel || Athletic Tank Tops',
                            womens: 'Women || Athletic apparel || Athletic Tank Tops'
                        },
                        path: '/apparel/tops/casual-shirt/tank-top/athletic'
                    },
                    maternity: {
                        itemType: 'maternity tank-top',
                        taxonomy: {
                            womens: 'Women || Maternity || Maternity Tank Tops'
                        },
                        path: '/apparel/tops/casual-shirt/tank-top/maternity'
                    }
                },
                't-shirt': {
                    itemType: 't-shirt',
                    taxonomy: {
                        mens: 'Men || Tops || T-shirts',
                        womens: 'Women || Tops & blouses || T-shirts'
                    },
                    path: '/apparel/tops/casual-shirt/t-shirt',
                    athletic: {
                        itemType: 'athletic t-shirt',
                        taxonomy: {
                            mens: 'Men || Athletic apparel || Athletic T-Shirts',
                            womens: 'Women || Athletic apparel || Athletic T-Shirts'
                        },
                        path: '/apparel/tops/casual-shirt/t-shirt/athletic'
                    },
                    maternity: {
                        itemType: 'maternity t-shirt',
                        taxonomy: {
                            womens: 'Women || Maternity || Maternity T-Shirts'
                        },
                        path: '/apparel/tops/casual-shirt/t-shirt/maternity'
                    }
                },
                'tube-top': {
                    itemType: 'tube-top',
                    taxonomy: {
                        womens: 'Women || Tops & blouses || Other'
                    },
                    path: '/apparel/tops/casual-shirt/tube-top'
                },
                tunic: {
                    itemType: 'tunic',
                    taxonomy: {
                        womens: 'Women || Tops & blouses || Tunic'
                    },
                    path: '/apparel/tops/casual-shirt/tunic'
                },
                halter: {
                    itemType: 'halter',
                    taxonomy: {
                        womens: 'Women || Tops & blouses || Halter'
                    },
                    path: '/apparel/tops/casual-shirt/halter'
                },
                henley: {
                    itemType: 'henley',
                    taxonomy: {
                        mens: 'Men || Tops || Henley',
                        womens: 'Women || Sweaters || Henley'
                    },
                    path: '/apparel/tops/casual-shirt/henley'
                },
                turtleneck: {
                    itemType: 'turtleneck',
                    taxonomy: {
                        mens: 'Men || Tops || Turtleneck',
                        womens: 'Women || Tops & blouses || Turtleneck'
                    },
                    path: '/apparel/tops/casual-shirt/turtleneck'
                }
            },
            'formal-shirt': {
                itemType: 'formal-shirt',
                taxonomy: {},
                path: '/apparel/tops/formal-shirt',
                blouse: {
                    itemType: 'blouse',
                    taxonomy: {
                        womens: 'Women || Tops & blouses || Blouse'
                    },
                    path: '/apparel/tops/formal-shirt/blouse',
                    maternity: {
                        itemType: 'maternity blouse',
                        taxonomy: {
                            womens: 'Women || Maternity || Maternity Blouses'
                        },
                        path: '/apparel/tops/formal-shirt/blouse/maternity'
                    }
                },
                cardigan: {
                    itemType: 'cardigan',
                    taxonomy: {
                        mens: 'Men || Sweaters || Cardigan',
                        womens: 'Women || Sweaters || Cardigan'
                    },
                    path: '/apparel/tops/formal-shirt/cardigan'
                },
                hawaiian: {
                    itemType: 'hawaiian',
                    taxonomy: {
                        mens: 'Men || Tops || Hawaiian',
                        womens: 'Women || Tops & blouses || Other'
                    },
                    path: '/apparel/tops/formal-shirt/hawaiian'
                },
                'knit-top': {
                    itemType: 'knit-top',
                    taxonomy: {
                        womens: 'Women || Tops & blouses || Knit top'
                    },
                    path: '/apparel/tops/formal-shirt/knit-top'
                },
                'suit-jacket': {
                    itemType: 'suit-jacket',
                    taxonomy: {
                        mens: 'Men || Blazers & sport coats || Other',
                        womens: 'Women || Suits & blazers || Blazer'
                    },
                    path: '/apparel/tops/formal-shirt/suit-jacket'
                },
                vest: {
                    itemType: 'vest',
                    taxonomy: {},
                    path: '/apparel/tops/formal-shirt/vest',
                    athletic: {
                        itemType: 'athletic vest',
                        taxonomy: {
                            mens: 'Men || Athletic apparel || Vests',
                            womens: 'Women || Athletic apparel || Vests'
                        },
                        path: '/apparel/tops/formal-shirt/vest/athletic'
                    }
                },
                'button-downs': {
                    itemType: 'button-downs',
                    taxonomy: {
                        mens: 'Men || Tops || Button-front',
                        womens: 'Women || Tops & blouses || Button down shirt'
                    },
                    path: '/apparel/tops/formal-shirt/button-downs',
                    'oxford-shirt': {
                        itemType: 'oxford-shirt',
                        taxonomy: {},
                        path: '/apparel/tops/formal-shirt/button-downs/oxford-shirt'
                    },
                    'button-up': {
                        itemType: 'button-up',
                        taxonomy: {
                            mens: 'Men || Tops || Button-front'
                        },
                        path: '/apparel/tops/formal-shirt/button-downs/button-up'
                    },
                    maternity: {
                        itemType: 'maternity button-down',
                        taxonomy: {
                            womens: 'Women || Maternity || Maternity Button-Ups'
                        },
                        path: '/apparel/tops/formal-shirt/button-downs/maternity'
                    },
                    fitted: {
                        itemType: 'fitted',
                        taxonomy: {
                            mens: 'Men || Tops || Dress shirts'
                        },
                        path: '/apparel/tops/formal-shirt/button-downs/fitted'
                    },
                    dress: {
                        itemType: 'dress',
                        taxonomy: {
                            mens: 'Men || Tops || Dress shirts'
                        },
                        path: '/apparel/tops/formal-shirt/button-downs/dress'
                    }
                }
            }
        },
        bottoms: {
            itemType: 'bottoms',
            taxonomy: {
                boys: {
                    low: 'Kids || Boys bottoms || Boys 0-24 mos',
                    mid: 'Kids || Boys bottoms || Boys 2T-5T',
                    high: 'Kids || Boys bottoms || Boys (4+)'
                },
                girls: {
                    low: 'Kids || Girls bottoms || Girls 0-24 mos',
                    mid: 'Kids || Girls bottoms || Girls 2T-5T',
                    high: 'Kids || Girls bottoms || Girls (4+)'
                }
            },
            path: '/apparel/bottoms',
            skirts: {
                itemType: 'skirts',
                taxonomy: {
                    womens: 'Women || Skirts || Other'
                },
                path: '/apparel/bottoms/skirts',
                asymmetrical: {
                    itemType: 'asymmetrical skirt',
                    taxonomy: {
                        womens: 'Women || Skirts || Asymmetrical'
                    },
                    path: '/apparel/bottoms/skirts/asymmetrical'
                },
                bubble: {
                    itemType: 'bubble skirt',
                    taxonomy: {
                        womens: 'Women || Skirts || Bubble'
                    },
                    path: '/apparel/bottoms/skirts/bubble'
                },
                full: {
                    itemType: 'full skirt',
                    taxonomy: {
                        womens: 'Women || Skirts || Full skirt'
                    },
                    path: '/apparel/bottoms/skirts/full'
                },
                maxi: {
                    itemType: 'maxi skirt',
                    taxonomy: {
                        womens: 'Women || Skirts || Maxi'
                    },
                    path: '/apparel/bottoms/skirts/maxi'
                },
                mini: {
                    itemType: 'mini skirt',
                    taxonomy: {
                        womens: 'Women || Skirts || Mini'
                    },
                    path: '/apparel/bottoms/skirts/mini'
                },
                peasant: {
                    itemType: 'peasant skirt',
                    taxonomy: {
                        womens: 'Women || Skirts || Peasant'
                    },
                    path: '/apparel/bottoms/skirts/peasant'
                },
                pleated: {
                    itemType: 'pleated skirt',
                    taxonomy: {
                        womens: 'Women || Skirts || Pleated'
                    },
                    path: '/apparel/bottoms/skirts/pleated'
                },
                pencil: {
                    itemType: 'pencil skirt',
                    taxonomy: {
                        womens: 'Women || Skirts || Straight, pencil'
                    },
                    path: '/apparel/bottoms/skirts/pencil'
                },
                tiered: {
                    itemType: 'tiered skirt',
                    taxonomy: {
                        womens: 'Women || Skirts || Tiered'
                    },
                    path: '/apparel/bottoms/skirts/tiered'
                },
                wrap: {
                    itemType: 'wrap skirt',
                    taxonomy: {
                        womens: 'Women || Skirts || Wrap'
                    },
                    path: '/apparel/bottoms/skirts/wrap'
                },
                athletic: {
                    itemType: 'athletic skirt',
                    taxonomy: {
                        womens: 'Women || Athletic apparel || Athletic Skirts'
                    },
                    path: '/apparel/bottoms/skirts/athletic'
                },
                maternity: {
                    itemType: 'maternity skirt',
                    taxonomy: {
                        womens: 'Women || Maternity || Skirts'
                    },
                    path: '/apparel/bottoms/skirts/maternity'
                }
            },
            shorts: {
                itemType: 'shorts',
                taxonomy: {
                    mens: 'Men || Shorts || Other',
                    womens: 'Women || Shorts || Other'
                },
                path: '/apparel/bottoms/shorts',
                athletic: {
                    itemType: 'athletic shorts',
                    taxonomy: {
                        mens: 'Men || Shorts || Athletic',
                        womens: 'Women || Athletic apparel || Shorts'
                    },
                    path: '/apparel/bottoms/shorts/athletic'
                },
                maternity: {
                    itemType: 'maternity shorts',
                    taxonomy: {},
                    path: '/apparel/bottoms/shorts/maternity'
                },
                chinos: {
                    itemType: 'chinos shorts',
                    taxonomy: {
                        mens: 'Men || Shorts || Khakis, chinos',
                        womens: 'Women || Shorts || Chino & khaki'
                    },
                    path: '/apparel/bottoms/shorts/chinos'
                },
                corduroy: {
                    itemType: 'corduroy shorts',
                    taxonomy: {
                        mens: 'Men || Shorts || Corduroys'
                    },
                    path: '/apparel/bottoms/shorts/corduroy'
                },
                denim: {
                    itemType: 'denim shorts',
                    taxonomy: {
                        mens: 'Men || Shorts || Denim',
                        womens: 'Women || Shorts || Denim'
                    },
                    path: '/apparel/bottoms/shorts/denim'
                },
                khakis: {
                    itemType: 'khakis shorts',
                    taxonomy: {
                        mens: 'Men || Shorts || Khakis, chinos',
                        womens: 'Women || Shorts || Chino & khaki'
                    },
                    path: '/apparel/bottoms/shorts/khakis'
                },
                leather: {
                    itemType: 'leather shorts',
                    taxonomy: {},
                    path: '/apparel/bottoms/shorts/leather'
                },
                linen: {
                    itemType: 'linen shorts',
                    taxonomy: {},
                    path: '/apparel/bottoms/shorts/linen'
                },
                bermuda: {
                    itemType: 'bermuda shorts',
                    taxonomy: {
                        womens: 'Women || Shorts || Bermuda'
                    },
                    path: '/apparel/bottoms/shorts/bermuda'
                },
                bike: {
                    itemType: 'bike shorts',
                    taxonomy: {
                        womens: 'Women || Shorts || Bike'
                    },
                    path: '/apparel/bottoms/shorts/bike'
                },
                board: {
                    itemType: 'board shorts',
                    taxonomy: {
                        mens: 'Men || Shorts || Board, surf'
                    },
                    path: '/apparel/bottoms/shorts/board'
                },
                cargo: {
                    itemType: 'cargo shorts',
                    taxonomy: {
                        mens: 'Men || Shorts || Cargo',
                        womens: 'Women || Shorts || Cargo'
                    },
                    path: '/apparel/bottoms/shorts/cargo'
                },
                carpenter: {
                    itemType: 'carpenter shorts',
                    taxonomy: {
                        mens: 'Men || Shorts || Carpenter, utility'
                    },
                    path: '/apparel/bottoms/shorts/carpenter'
                },
                casual: {
                    itemType: 'casual shorts',
                    taxonomy: {
                        mens: 'Men || Shorts || Casual shorts'
                    },
                    path: '/apparel/bottoms/shorts/casual'
                },
                dress: {
                    itemType: 'dress shorts',
                    taxonomy: {
                        mens: 'Men || Shorts || Dress shorts'
                    },
                    path: '/apparel/bottoms/shorts/dress'
                },
                'high-waisted': {
                    itemType: 'high-waisted shorts',
                    taxonomy: {
                        womens: 'Women || Shorts || High-waisted'
                    },
                    path: '/apparel/bottoms/shorts/high-waisted'
                },
                'short-shorts': {
                    itemType: 'short-shorts',
                    taxonomy: {
                        womens: 'Women || Shorts || Short shorts'
                    },
                    path: '/apparel/bottoms/shorts/short-shorts'
                },
                skort: {
                    itemType: 'skort',
                    taxonomy: {
                        womens: 'Women || Shorts || Skort'
                    },
                    path: '/apparel/bottoms/shorts/skort',
                    athletic: {
                        itemType: 'athletic skort',
                        taxonomy: {
                            womens: 'Women || Athletic apparel || Athletic Skorts'
                        },
                        path: '/apparel/bottoms/shorts/skort/athletic'
                    }
                }
            },
            pants: {
                itemType: 'pants',
                taxonomy: {
                    mens: 'Men || Pants || Other',
                    womens: 'Women || Pants || Other'
                },
                path: '/apparel/bottoms/pants',
                athletic: {
                    itemType: 'athletic pants',
                    taxonomy: {
                        mens: 'Men || Athletic apparel || Pants',
                        womens: 'Women || Athletic apparel || Athletic Pants'
                    },
                    path: '/apparel/bottoms/pants/athletic'
                },
                maternity: {
                    itemType: 'maternity pants',
                    taxonomy: {},
                    path: '/apparel/bottoms/pants/maternity'
                },
                chinos: {
                    itemType: 'chinos pants',
                    taxonomy: {
                        mens: 'Men || Pants || Khakis, chinos',
                        womens: 'Women || Pants || Khakis, chinos'
                    },
                    path: '/apparel/bottoms/pants/chinos'
                },
                corduroy: {
                    itemType: 'corduroys',
                    taxonomy: {
                        mens: 'Men || Pants || Corduroys',
                        womens: 'Women || Pants || Corduroys'
                    },
                    path: '/apparel/bottoms/pants/corduroy'
                },
                khakis: {
                    itemType: 'khakis pants',
                    taxonomy: {
                        mens: 'Men || Pants || Khakis, chinos',
                        womens: 'Women || Pants || Khakis, chinos'
                    },
                    path: '/apparel/bottoms/pants/khakis'
                },
                leather: {
                    itemType: 'leather pants',
                    taxonomy: {
                        womens: 'Women || Pants || Leather'
                    },
                    path: '/apparel/bottoms/pants/leather'
                },
                linen: {
                    itemType: 'linen pants',
                    taxonomy: {
                        womens: 'Women || Pants || Linen'
                    },
                    path: '/apparel/bottoms/pants/linen'
                },
                cargo: {
                    itemType: 'cargo pants',
                    taxonomy: {
                        mens: 'Men || Pants || Cargo',
                        womens: 'Women || Pants || Cargo'
                    },
                    path: '/apparel/bottoms/pants/cargo'
                },
                carpenter: {
                    itemType: 'carpenter pants',
                    taxonomy: {
                        mens: 'Men || Pants || Carpenter'
                    },
                    path: '/apparel/bottoms/pants/carpenter'
                },
                casual: {
                    itemType: 'casual pants',
                    taxonomy: {
                        mens: 'Men || Pants || Casual pants',
                        womens: 'Women || Pants || Casual pants'
                    },
                    path: '/apparel/bottoms/pants/casual'
                },
                dress: {
                    itemType: 'dress pants',
                    taxonomy: {
                        mens: 'Men || Pants || Dress - flat front',
                        womens: 'Women || Pants || Dress pants'
                    },
                    path: '/apparel/bottoms/pants/dress'
                },
                sweatpants: {
                    itemType: 'sweatpants',
                    taxonomy: {
                        mens: 'Men || Sweats & hoodies || Sweat Pants',
                        womens: 'Women || Athletic apparel || Athletic Sweat Pants'
                    },
                    path: '/apparel/bottoms/pants/sweatpants'
                }
            },
            jeans: {
                itemType: 'jeans',
                taxonomy: {
                    mens: 'Men || Jeans || Other',
                    womens: 'Women || Jeans || Other'
                },
                path: '/apparel/bottoms/jeans',
                athletic: {
                    itemType: 'athletic jeans',
                    taxonomy: {},
                    path: '/apparel/bottoms/jeans/athletic'
                },
                maternity: {
                    itemType: 'maternity jeans',
                    taxonomy: {
                        womens: 'Women || Maternity || Jeans'
                    },
                    path: '/apparel/bottoms/jeans/maternity'
                },
                boyfriend: {
                    itemType: 'boyfriend jeans',
                    taxonomy: {
                        womens: 'Women || Jeans || Boyfriend'
                    },
                    path: '/apparel/bottoms/jeans/boyfriend'
                },
                cargo: {
                    itemType: 'cargo jeans',
                    taxonomy: {
                        mens: 'Men || Jeans || Cargo',
                        womens: 'Women || Jeans || Cargo'
                    },
                    path: '/apparel/bottoms/jeans/cargo'
                },
                carpenter: {
                    itemType: 'carpenter jeans',
                    taxonomy: {
                        mens: 'Men || Jeans || Carpenter'
                    },
                    path: '/apparel/bottoms/jeans/carpenter'
                },
                leggings: {
                    itemType: 'leggings',
                    taxonomy: {
                        womens: 'Women || Jeans || Leggings'
                    },
                    path: '/apparel/bottoms/jeans/leggings'
                },
                overalls: {
                    itemType: 'overalls',
                    taxonomy: {
                        mens: 'Men || Jeans || Overalls',
                        womens: 'Women || Jeans || Overalls'
                    },
                    path: '/apparel/bottoms/jeans/overalls'
                },
                baggy: {
                    itemType: 'baggy jeans',
                    taxonomy: {
                        mens: 'Men || Jeans || Baggy, loose'
                    },
                    path: '/apparel/bottoms/jeans/baggy'
                },
                bootcut: {
                    itemType: 'bootcut jeans',
                    taxonomy: {
                        mens: 'Men || Jeans || Boot cut',
                        womens: 'Women || Jeans || Boot cut'
                    },
                    path: '/apparel/bottoms/jeans/bootcut'
                },
                capri: {
                    itemType: 'capri jeans',
                    taxonomy: {
                        womens: 'Women || Jeans || Capri Jeans'
                    },
                    path: '/apparel/bottoms/jeans/capri'
                },
                cropped: {
                    itemType: 'cropped jeans',
                    taxonomy: {
                        womens: 'Women || Jeans || Cropped Jeans'
                    },
                    path: '/apparel/bottoms/jeans/cropped'
                },
                flare: {
                    itemType: 'flare jeans',
                    taxonomy: {
                        womens: 'Women || Jeans || Flare'
                    },
                    path: '/apparel/bottoms/jeans/flare'
                },
                straight: {
                    itemType: 'straight jeans',
                    taxonomy: {
                        mens: 'Men || Jeans || Classic, straight leg',
                        womens: 'Women || Jeans || Straight leg'
                    },
                    path: '/apparel/bottoms/jeans/straight'
                },
                relaxed: {
                    itemType: 'relaxed jeans',
                    taxonomy: {
                        mens: 'Men || Jeans || Relaxed',
                        womens: 'Women || Jeans || Relaxed'
                    },
                    path: '/apparel/bottoms/jeans/relaxed'
                },
                skinny: {
                    itemType: 'skinny jeans',
                    taxonomy: {
                        mens: 'Men || Jeans || Skinny Jeans',
                        womens: 'Women || Jeans || Skinny Jeans'
                    },
                    path: '/apparel/bottoms/jeans/skinny'
                },
                slim: {
                    itemType: 'slim jeans',
                    taxonomy: {
                        mens: 'Men || Jeans || Slim Jeans',
                        womens: 'Women || Jeans || Slim Jeans'
                    },
                    path: '/apparel/bottoms/jeans/slim'
                },
                wide: {
                    itemType: 'wide jeans',
                    taxonomy: {
                        womens: 'Women || Jeans || Wide leg'
                    },
                    path: '/apparel/bottoms/jeans/wide'
                }
            }
        }
    }
};

function checkYouth(item?: { high: string; mid: string; low: string }) {
    if (item == null) return;
    const { high, mid, low } = item;
    if (high.includes('4+') && mid.includes('2T-5T') && low.includes('0-24'))
        return;
    if (!high.includes('4+') && !mid.includes('2T-5T') && !low.includes('0-24'))
        return;
    throw new Error(`YOUTH MISMATCH: ${JSON.stringify(item)}`);
}
function addNode(itemType?: string, ...path: string[]) {
    return function (
        taxonomy:
            | string
            | undefined
            | [string?, string?]
            | [
                  string | undefined,
                  string | undefined,
                  [string, string, string] | undefined,
                  [string, string, string] | undefined
              ]
    ) {
        const $taxonomy =
            taxonomy == null
                ? undefined
                : typeof taxonomy === 'string'
                ? taxonomy.replaceAll('::', ' || ')
                : {
                      mens: taxonomy[0]?.replaceAll('::', ' || '),
                      womens: taxonomy[1]?.replaceAll('::', ' || '),
                      ...(taxonomy[2] == null
                          ? {}
                          : {
                                boys: {
                                    low: taxonomy[2][0]?.replaceAll(
                                        '::',
                                        ' || '
                                    ),
                                    mid: taxonomy[2][1]?.replaceAll(
                                        '::',
                                        ' || '
                                    ),
                                    high: taxonomy[2][2]?.replaceAll(
                                        '::',
                                        ' || '
                                    )
                                }
                            }),
                      ...(taxonomy[3] == null
                          ? {}
                          : {
                                girls: {
                                    low: taxonomy[3][0]?.replaceAll(
                                        '::',
                                        ' || '
                                    ),
                                    mid: taxonomy[3][1]?.replaceAll(
                                        '::',
                                        ' || '
                                    ),
                                    high: taxonomy[3][2]?.replaceAll(
                                        '::',
                                        ' || '
                                    )
                                }
                            })
                  };
        if (
            taxonomy != null &&
            taxonomy[0] == null &&
            typeof $taxonomy === 'object' &&
            $taxonomy != null
        )
            delete $taxonomy['mens'];
        if (
            taxonomy != null &&
            taxonomy[1] == null &&
            typeof $taxonomy === 'object' &&
            $taxonomy != null
        )
            delete $taxonomy['womens'];
        if (typeof $taxonomy === 'object' && $taxonomy.boys)
            checkYouth($taxonomy.boys);
        if (typeof $taxonomy === 'object' && $taxonomy.girls)
            checkYouth($taxonomy.girls);

        const node = {
            _itemType: itemType,
            _taxonomy: $taxonomy,
            _path: '/'.concat(path.join('/'))
        };
        const p = path
            .map((x) => (x.includes('-') ? `['${x}']` : '.'.concat(x)))
            .join('');
        const text = `reference${p} = ${JSON.stringify(node ?? {})};`;
        console.log(text);
        eval(text);
    };
}

addNode(
    'bandana',
    'apparel',
    'accessories',
    'head',
    'bandana'
)([
    "Men::Men's accessories::Bandanas",
    "Women::Women's accessories::Bandanas",
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'bow-tie',
    'apparel',
    'accessories',
    'head',
    'bow-tie'
)([
    "Men::Men's accessories::Bow Ties",
    undefined,
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'collar-stay',
    'apparel',
    'accessories',
    'head',
    'collar-stay'
)([
    "Men::Men's accessories::Collar Stays",
    undefined,
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'sunglasses',
    'apparel',
    'accessories',
    'head',
    'sunglasses'
)([
    "Men::Men's accessories::Sunglasses",
    "Women::Women's accessories::Sunglasses",
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'tie',
    'apparel',
    'accessories',
    'head',
    'tie'
)([
    "Men::Men's accessories::Ties",
    undefined,
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'hair-accessory',
    'apparel',
    'accessories',
    'head',
    'hair-accessory'
)([
    undefined,
    "Women::Women's accessories::Hair accessories",
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'headband',
    'apparel',
    'accessories',
    'head',
    'headband'
)([
    undefined,
    "Women::Women's accessories::Headbands",
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'hijab',
    'apparel',
    'accessories',
    'head',
    'hijab'
)([
    undefined,
    "Women::Women's accessories::Hijabs",
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'scarf',
    'apparel',
    'accessories',
    'head',
    'scarf'
)([
    "Men::Men's accessories::Scarves",
    "Women::Women's accessories::Scarves",
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'hat',
    'apparel',
    'accessories',
    'head',
    'hat'
)([
    "Men::Men's accessories::Hats",
    "Women::Women's accessories::Hats",
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'fedora',
    'apparel',
    'accessories',
    'head',
    'hat',
    'fedora'
)([
    "Men::Men's accessories::Hats",
    "Women::Women's accessories::Hats",
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'fitted-cap',
    'apparel',
    'accessories',
    'head',
    'hat',
    'fitted-cap'
)([
    "Men::Men's accessories::Hats",
    "Women::Women's accessories::Hats",
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'fitted-cap',
    'apparel',
    'accessories',
    'head',
    'hat',
    'fitted-cap',
    'mlb'
)([
    'Sports & outdoors::Fan shop::MLB',
    'Sports & outdoors::Fan shop::MLB',
    [
        'Sports & outdoors::Fan shop::MLB',
        'Sports & outdoors::Fan shop::MLB',
        'Sports & outdoors::Fan shop::MLB'
    ],
    [
        'Sports & outdoors::Fan shop::MLB',
        'Sports & outdoors::Fan shop::MLB',
        'Sports & outdoors::Fan shop::MLB'
    ]
]);
addNode(
    'fitted-cap',
    'apparel',
    'accessories',
    'head',
    'hat',
    'fitted-cap',
    'nba'
)([
    'Sports & outdoors::Fan shop::NBA',
    'Sports & outdoors::Fan shop::NBA',
    [
        'Sports & outdoors::Fan shop::NBA',
        'Sports & outdoors::Fan shop::NBA',
        'Sports & outdoors::Fan shop::NBA'
    ],
    [
        'Sports & outdoors::Fan shop::NBA',
        'Sports & outdoors::Fan shop::NBA',
        'Sports & outdoors::Fan shop::NBA'
    ]
]);
addNode(
    'fitted-cap',
    'apparel',
    'accessories',
    'head',
    'hat',
    'fitted-cap',
    'ncaa'
)([
    'Sports & outdoors::Fan shop::NCAA',
    'Sports & outdoors::Fan shop::NCAA',
    [
        'Sports & outdoors::Fan shop::NCAA',
        'Sports & outdoors::Fan shop::NCAA',
        'Sports & outdoors::Fan shop::NCAA'
    ],
    [
        'Sports & outdoors::Fan shop::NCAA',
        'Sports & outdoors::Fan shop::NCAA',
        'Sports & outdoors::Fan shop::NCAA'
    ]
]);
addNode(
    'fitted-cap',
    'apparel',
    'accessories',
    'head',
    'hat',
    'fitted-cap',
    'nfl'
)([
    'Sports & outdoors::Fan shop::NFL',
    'Sports & outdoors::Fan shop::NFL',
    [
        'Sports & outdoors::Fan shop::NFL',
        'Sports & outdoors::Fan shop::NFL',
        'Sports & outdoors::Fan shop::NFL'
    ],
    [
        'Sports & outdoors::Fan shop::NFL',
        'Sports & outdoors::Fan shop::NFL',
        'Sports & outdoors::Fan shop::NFL'
    ]
]);
addNode(
    'fitted-cap',
    'apparel',
    'accessories',
    'head',
    'hat',
    'fitted-cap',
    'nhl'
)([
    'Sports & outdoors::Fan shop::NHL',
    'Sports & outdoors::Fan shop::NHL',
    [
        'Sports & outdoors::Fan shop::NHL',
        'Sports & outdoors::Fan shop::NHL',
        'Sports & outdoors::Fan shop::NHL'
    ],
    [
        'Sports & outdoors::Fan shop::NHL',
        'Sports & outdoors::Fan shop::NHL',
        'Sports & outdoors::Fan shop::NHL'
    ]
]);
addNode(
    'ballcap',
    'apparel',
    'accessories',
    'head',
    'hat',
    'ballcap'
)([
    "Men::Men's accessories::Hats",
    "Women::Women's accessories::Hats",
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'ballcap',
    'apparel',
    'accessories',
    'head',
    'hat',
    'ballcap',
    'mlb'
)([
    'Sports & outdoors::Fan shop::MLB',
    'Sports & outdoors::Fan shop::MLB',
    [
        'Sports & outdoors::Fan shop::MLB',
        'Sports & outdoors::Fan shop::MLB',
        'Sports & outdoors::Fan shop::MLB'
    ],
    [
        'Sports & outdoors::Fan shop::MLB',
        'Sports & outdoors::Fan shop::MLB',
        'Sports & outdoors::Fan shop::MLB'
    ]
]);
addNode(
    'ballcap',
    'apparel',
    'accessories',
    'head',
    'hat',
    'ballcap',
    'nba'
)([
    'Sports & outdoors::Fan shop::NBA',
    'Sports & outdoors::Fan shop::NBA',
    [
        'Sports & outdoors::Fan shop::NBA',
        'Sports & outdoors::Fan shop::NBA',
        'Sports & outdoors::Fan shop::NBA'
    ],
    [
        'Sports & outdoors::Fan shop::NBA',
        'Sports & outdoors::Fan shop::NBA',
        'Sports & outdoors::Fan shop::NBA'
    ]
]);
addNode(
    'ballcap',
    'apparel',
    'accessories',
    'head',
    'hat',
    'ballcap',
    'ncaa'
)([
    'Sports & outdoors::Fan shop::NCAA',
    'Sports & outdoors::Fan shop::NCAA',
    [
        'Sports & outdoors::Fan shop::NCAA',
        'Sports & outdoors::Fan shop::NCAA',
        'Sports & outdoors::Fan shop::NCAA'
    ],
    [
        'Sports & outdoors::Fan shop::NCAA',
        'Sports & outdoors::Fan shop::NCAA',
        'Sports & outdoors::Fan shop::NCAA'
    ]
]);
addNode(
    'ballcap',
    'apparel',
    'accessories',
    'head',
    'hat',
    'ballcap',
    'nfl'
)([
    'Sports & outdoors::Fan shop::NFL',
    'Sports & outdoors::Fan shop::NFL',
    [
        'Sports & outdoors::Fan shop::NFL',
        'Sports & outdoors::Fan shop::NFL',
        'Sports & outdoors::Fan shop::NFL'
    ],
    [
        'Sports & outdoors::Fan shop::NFL',
        'Sports & outdoors::Fan shop::NFL',
        'Sports & outdoors::Fan shop::NFL'
    ]
]);
addNode(
    'ballcap',
    'apparel',
    'accessories',
    'head',
    'hat',
    'ballcap',
    'nhl'
)([
    'Sports & outdoors::Fan shop::NHL',
    'Sports & outdoors::Fan shop::NHL',
    [
        'Sports & outdoors::Fan shop::NHL',
        'Sports & outdoors::Fan shop::NHL',
        'Sports & outdoors::Fan shop::NHL'
    ],
    [
        'Sports & outdoors::Fan shop::NHL',
        'Sports & outdoors::Fan shop::NHL',
        'Sports & outdoors::Fan shop::NHL'
    ]
]);
addNode(undefined, 'apparel', 'accessories', 'misc')([undefined, undefined]);
addNode(
    'belt',
    'apparel',
    'accessories',
    'misc',
    'belt'
)([
    "Men::Men's accessories::Belts",
    "Women::Women's accessories::Belts",
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'cardholder',
    'apparel',
    'accessories',
    'misc',
    'cardholder'
)([
    "Men::Men's accessories::Cardholders",
    "Women::Women's accessories::Cardholders",
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'earmuff',
    'apparel',
    'accessories',
    'misc',
    'earmuff'
)([
    "Men::Men's accessories::Other",
    "Women::Women's accessories::Other",
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'gloves',
    'apparel',
    'accessories',
    'misc',
    'gloves'
)([
    "Men::Men's accessories::Fashion Gloves",
    "Women::Women's accessories::Fashion Gloves",
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'handkerchief',
    'apparel',
    'accessories',
    'misc',
    'handkerchief'
)([
    "Men::Men's accessories::Handkerchiefs",
    undefined,
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'turban',
    'apparel',
    'accessories',
    'misc',
    'turban'
)([
    "Men::Men's accessories::Turbans",
    undefined,
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'umbrella',
    'apparel',
    'accessories',
    'misc',
    'umbrella'
)([
    "Men::Men's accessories::Umbrellas",
    "Women::Women's accessories::Umbrellas",
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'wallet',
    'apparel',
    'accessories',
    'misc',
    'wallet'
)([
    "Men::Men's accessories::Wallets",
    "Women::Women's accessories::Wallets",
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'fascinator',
    'apparel',
    'accessories',
    'misc',
    'fascinator'
)([
    undefined,
    "Women::Women's accessories::Fascinators",
    [
        'Kids::Boys accessories::Boys 0-24 mos',
        'Kids::Boys accessories::Boys 2T-5T',
        'Kids::Boys accessories::Boys (4+)'
    ],
    [
        'Kids::Girls accessories::Girls 0-24 mos',
        'Kids::Girls accessories::Girls 2T-5T',
        'Kids::Girls accessories::Girls (4+)'
    ]
]);
addNode(
    'footwear',
    'apparel',
    'footwear'
)([
    'Men::Shoes::All Shoes',
    undefined,
    [
        'Kids::Boys shoes::Boys 0-24 mos',
        'Kids::Boys shoes::Boys 2T-5T',
        'Kids::Boys shoes::Boys (4+)'
    ],
    [
        'Kids::Girls shoes::Girls 0-24 mos',
        'Kids::Girls shoes::Girls 2T-5T',
        'Kids::Girls shoes::Girls (4+)'
    ]
]);
addNode(
    'sneakers',
    'apparel',
    'footwear',
    'sneakers'
)(['Men::Shoes::Fashion sneakers', 'Women::Shoes::Fashion sneakers']);
addNode(
    'athletic sneakers',
    'apparel',
    'footwear',
    'sneakers',
    'athletic'
)(['Men::Shoes::Athletic', 'Women::Shoes::Athletic']);
addNode(
    'sneakers',
    'apparel',
    'footwear',
    'sneakers',
    'fashion-sneakers'
)(['Men::Shoes::Fashion sneakers', 'Women::Shoes::Fashion sneakers']);
addNode(
    'loafers',
    'apparel',
    'footwear',
    'loafers'
)(['Men::Shoes::Loafers', 'Women::Shoes::Loafers']);
addNode('deck shoes', 'apparel', 'footwear', 'loafers', 'deck')([]);
addNode('monk shoes', 'apparel', 'footwear', 'loafers', 'monk')([]);
addNode('penny loafers', 'apparel', 'footwear', 'loafers', 'penny-loafers')([]);
addNode(
    'heels',
    'apparel',
    'footwear',
    'heels'
)([undefined, 'Women::Shoes::Heels']);
addNode('ankle-strap heels', 'apparel', 'footwear', 'heels', 'ankel-strap')([]);
addNode('espadrille heels', 'apparel', 'footwear', 'heels', 'espadrille')([]);
addNode('mary janes', 'apparel', 'footwear', 'heels', 'mary-jane')([]);
addNode('pumps', 'apparel', 'footwear', 'heels', 'pumps')([]);
addNode('sling-backs', 'apparel', 'footwear', 'heels', 'sling-back')([]);
addNode('t-strap heels', 'apparel', 'footwear', 'heels', 't-strap')([]);

addNode(
    'sandals',
    'apparel',
    'footwear',
    'sandals'
)(['Men::Shoes::Sandals', 'Women::Shoes::Sandals']);
addNode('flip-flops', 'apparel', 'footwear', 'sandals', 'flip-flops')([]);
addNode('specialized', 'apparel', 'footwear', 'specialized')([]);
addNode(
    'orthopedic',
    'apparel',
    'footwear',
    'specialized',
    'orthopedic'
)(['Men::Shoes::Work & safety', 'Women::Shoes::Work & safety']);
addNode(
    'saftey shoes',
    'apparel',
    'footwear',
    'specialized',
    'safety-shoes'
)(['Men::Shoes::Work & safety', 'Women::Shoes::Work & safety']);
addNode(
    'non-slip',
    'apparel',
    'footwear',
    'specialized',
    'safety-shoes',
    'non-slip'
)([]);
addNode(
    'work shoes',
    'apparel',
    'footwear',
    'specialized',
    'work-shoes'
)(['Men::Shoes::Work & safety', 'Women::Shoes::Work & safety']);
addNode(
    'hiking-boots',
    'apparel',
    'footwear',
    'specialized',
    'hiking-boots'
)(['Men::Shoes::Outdoor', 'Women::Shoes::Outdoor']);
addNode(
    'trail-runners',
    'apparel',
    'footwear',
    'specialized',
    'trail-runners'
)(['Men::Shoes::Outdoor', 'Women::Shoes::Outdoor']);
addNode(
    'cross-trainers',
    'apparel',
    'footwear',
    'specialized',
    'cross-trainers'
)(['Men::Shoes::Outdoor', 'Women::Shoes::Outdoor']);
addNode(
    'climbing-shoes',
    'apparel',
    'footwear',
    'specialized',
    'climbing-shoes'
)(['Men::Shoes::Outdoor', 'Women::Shoes::Outdoor']);
addNode(
    'water-shoes',
    'apparel',
    'footwear',
    'specialized',
    'water-shoes'
)(['Men::Shoes::Outdoor', 'Women::Shoes::Outdoor']);
addNode(
    'mules',
    'apparel',
    'footwear',
    'mules-clogs'
)(['Men::Shoes::Mules', 'Women::Shoes::Mules']);
addNode(
    'clogs',
    'apparel',
    'footwear',
    'mules-clogs',
    'clogs'
)(['Men::Shoes::Clogs', 'Women::Shoes::Clogs']);
addNode(
    'mules',
    'apparel',
    'footwear',
    'mules-clogs',
    'mules'
)(['Men::Shoes::Mules', 'Women::Shoes::Mules']);
addNode(
    'platform shoes',
    'apparel',
    'footwear',
    'mules-clogs',
    'clogs',
    'platform'
)([]);
addNode(
    'boots',
    'apparel',
    'footwear',
    'boots'
)(['Men::Shoes::Boots', 'Women::Shoes::Boots']);
addNode('ankle-boot', 'apparel', 'footwear', 'boots', 'ankle-boot')([]);
addNode('country', 'apparel', 'footwear', 'boots', 'country')([]);
addNode('frye boots', 'apparel', 'footwear', 'boots', 'frye')([]);
addNode('combat boots', 'apparel', 'footwear', 'boots', 'combat')([]);
addNode('chukka boots', 'apparel', 'footwear', 'boots', 'chukka')([]);
addNode('riding boots', 'apparel', 'footwear', 'boots', 'riding')([]);
addNode('knee-high boots', 'apparel', 'footwear', 'boots', 'knee-high')([]);
addNode('half-calf boots', 'apparel', 'footwear', 'boots', 'half-calf')([]);
addNode(
    'over-the-knee boots',
    'apparel',
    'footwear',
    'boots',
    'over-the-knee'
)([]);
addNode('snow boots', 'apparel', 'footwear', 'boots', 'snow')([]);
addNode('wellingtons', 'apparel', 'footwear', 'boots', 'wellington')([]);

addNode(
    'oxfords',
    'apparel',
    'footwear',
    'oxfords'
)(['Men::Shoes::Oxfords', 'Women::Shoes::Oxfords']);
addNode('saddle shoes', 'apparel', 'footwear', 'oxfords', 'saddle')([]);
addNode('wing-tips', 'apparel', 'footwear', 'oxfords', 'wing-tips')([]);
addNode('winkle-picker', 'apparel', 'footwear', 'oxfords', 'winkle-picker')([]);
addNode(
    'slip-ons',
    'apparel',
    'footwear',
    'slip-ons'
)(['Men::Shoes::Slip-Ons', 'Women::Shoes::Slip-Ons']);
addNode(
    'slippers',
    'apparel',
    'footwear',
    'slip-ons',
    'slippers'
)(['Men::Shoes::Slippers', 'Women::Shoes::Slippers']);
addNode('dockside', 'apparel', 'footwear', 'slip-ons', 'dockside')([]);
addNode('moccassins', 'apparel', 'footwear', 'oxfords', 'moccassins')([]);

addNode(
    'cufflinks',
    'apparel',
    'accessories',
    'jewelry',
    'cufflinks'
)(['Men::Jewelry::Cufflinks']);
addNode(
    'earrings',
    'apparel',
    'accessories',
    'jewelry',
    'earrings'
)(['Men::Jewelry::Earrings', 'Women::Jewelry::Earrings']);
addNode(
    'necklace',
    'apparel',
    'accessories',
    'jewelry',
    'necklace'
)(['Men::Jewelry::Necklaces', 'Women::Jewelry::Necklaces']);
addNode(
    'pin',
    'apparel',
    'accessories',
    'jewelry',
    'pin'
)(['Men::Jewelry::Pins', 'Women::Jewelry::Pins']);
addNode(
    'ring',
    'apparel',
    'accessories',
    'jewelry',
    'ring'
)(['Men::Jewelry::Rings', 'Women::Jewelry::Rings']);
addNode(
    'watch',
    'apparel',
    'accessories',
    'jewelry',
    'watch'
)(["Men::Men's accessories::Watches", "Women::Women's accessories::Watches"]);
addNode(
    'nose ring',
    'apparel',
    'accessories',
    'jewelry',
    'nose-ring'
)([undefined, 'Women::Jewelry::Nose Rings']);
addNode(
    'toe ring',
    'apparel',
    'accessories',
    'jewelry',
    'toe-ring'
)([undefined, 'Women::Jewelry::Toe Rings']);
addNode(
    'undergarments',
    'apparel',
    'undergarments'
)(['Men::Other::All Other', 'Women::Other::All Other']);
addNode(
    'socks',
    'apparel',
    'undergarments',
    'socks'
)(['Men::Athletic apparel::Socks', 'Women::Athletic apparel::Socks']);
addNode(
    'bra',
    'apparel',
    'undergarments',
    'bra'
)([undefined, 'Women::Underwear::Bras']);
addNode(
    'sports bra',
    'apparel',
    'undergarments',
    'bra',
    'sports-bra'
)([undefined, 'Women::Athletic apparel::Sports bras']);
addNode('underwear', 'apparel', 'undergarments', 'underwear')([undefined]);
addNode(
    'g-string',
    'apparel',
    'undergarments',
    'underwear',
    'g-string'
)([undefined, 'Women::Underwear::G-strings & thongs']);
addNode(
    'thong',
    'apparel',
    'undergarments',
    'underwear',
    'thong'
)([undefined, 'Women::Underwear::G-strings & thongs']);
addNode(
    'panties',
    'apparel',
    'undergarments',
    'underwear',
    'panties'
)([undefined, 'Women::Underwear::Panties']);
addNode(
    'thermal underwear',
    'apparel',
    'undergarments',
    'underwear',
    'thermals'
)([undefined, 'Women::Underwear::Thermal underwear']);
addNode(
    'briefs',
    'apparel',
    'undergarments',
    'underwear',
    'briefs'
)([undefined]);
addNode(
    'boxers',
    'apparel',
    'undergarments',
    'underwear',
    'boxers'
)([undefined]);
addNode(
    'sleepwear',
    'apparel',
    'undergarments',
    'sleepwear'
)([undefined, 'Women || Sleepwear & robes || Other']);
addNode(
    'nightgown',
    'apparel',
    'undergarments',
    'sleepwear',
    'nightgown'
)([undefined, 'Women::Sleepwear & robes::Nightgowns & sleep shirts']);
addNode(
    'sleep-shirt',
    'apparel',
    'undergarments',
    'sleepwear',
    'sleep-shirt'
)([undefined, 'Women::Sleepwear & robes::Nightgowns & sleep shirts']);
addNode(
    'pajamas',
    'apparel',
    'undergarments',
    'sleepwear',
    'pajamas'
)([undefined, 'Women::Sleepwear & robes::Pajama sets']);
addNode(
    'pajama-top',
    'apparel',
    'undergarments',
    'sleepwear',
    'pajamas',
    'pajama-top'
)([undefined, 'Women::Sleepwear & robes::Pajama tops']);
addNode(
    'pajama pants',
    'apparel',
    'undergarments',
    'sleepwear',
    'pajamas',
    'pajama-pants'
)([undefined, 'Women::Sleepwear & robes::Pajama pants']);
addNode(
    'nightgown',
    'apparel',
    'undergarments',
    'sleepwear',
    'nightgown'
)([undefined, 'Women::Sleepwear & robes::Nightgowns & sleep shirts']);
addNode(
    'robe',
    'apparel',
    'undergarments',
    'sleepwear',
    'robe'
)([undefined, 'Women::Sleepwear & robes::Robes']);
addNode(
    'swimwear',
    'apparel',
    'undergarments',
    'swimwear'
)([
    undefined,
    undefined,
    [
        'Kids || Boys swimwear || Boys 0-24 mos',
        'Kids || Boys swimwear || Boys 2T-5T',
        'Kids || Boys swimwear || Boys (4+)'
    ],
    [
        'Kids || Girls swimwear || Girls 0-24 mos',
        'Kids || Girls swimwear || Girls 2T-5T',
        'Kids || Girls swimwear || Girls (4+)'
    ]
]);
addNode(
    'board shorts',
    'apparel',
    'undergarments',
    'swimwear',
    'board-shorts'
)(['Men::Swimwear::Board shorts']);
addNode(
    'swim briefs',
    'apparel',
    'undergarments',
    'swimwear',
    'speedo'
)(['Men::Swimwear::Swim briefs']);
addNode(
    'swim briefs',
    'apparel',
    'undergarments',
    'swimwear',
    'speedo',
    'athletic'
)(['Men::Athletic apparel::Competitive swimwear']);
addNode(
    'swim trunks',
    'apparel',
    'undergarments',
    'swimwear',
    'trunks'
)(['Men::Swimwear::Swim trunks']);
addNode(
    'beach accessories',
    'apparel',
    'undergarments',
    'swimwear',
    'beach-accessories'
)([undefined, 'Women::Swimwear::Beach accessories']);
addNode(
    'cover-up',
    'apparel',
    'undergarments',
    'swimwear',
    'cover-up'
)([undefined, 'Women::Swimwear::Cover-ups']);
addNode(
    'one-piece',
    'apparel',
    'undergarments',
    'swimwear',
    'one-piece'
)([undefined, 'Women::Swimwear::One-piece']);
addNode(
    'two piece bikini',
    'apparel',
    'undergarments',
    'swimwear',
    'two-piece'
)([undefined, 'Women::Swimwear::Two-piece']);
addNode('head-to-toe', 'apparel', 'head-to-toe')([]);
addNode(
    'dress',
    'apparel',
    'head-to-toe',
    'dress'
)([
    undefined,
    undefined,
    undefined,
    [
        'Kids::Girls dresses::Girls 0-24 mos',
        'Kids::Girls dresses::Girls 2T-5T',
        'Kids::Girls dresses::Girls (4+)'
    ]
]);
addNode(
    'high-low dress',
    'apparel',
    'head-to-toe',
    'dress',
    'high-low'
)([undefined, 'Women::Dresses::High Low']);
addNode(
    'maternity dress',
    'apparel',
    'head-to-toe',
    'dress',
    'maternity'
)([undefined, 'Women::Maternity::Dresses']);
addNode(
    'athletic dress',
    'apparel',
    'head-to-toe',
    'dress',
    'athletic'
)([undefined, 'Women::Athletic apparel::Athletic Dresses']);
addNode(
    'jumpsuit',
    'apparel',
    'head-to-toe',
    'dress',
    'jumpsuit'
)([undefined, 'Women::Dresses::Jumpsuits & Rompers']);
addNode(
    'romper',
    'apparel',
    'head-to-toe',
    'dress',
    'romper'
)([undefined, 'Women::Dresses::Jumpsuits & Rompers']);

addNode(
    'knee-length dress',
    'apparel',
    'head-to-toe',
    'dress',
    'knee-length'
)([undefined, 'Women::Dresses::Knee-length']);
addNode(
    'maxi dress',
    'apparel',
    'head-to-toe',
    'dress',
    'maxi'
)([undefined, 'Women::Dresses::Maxi']);
addNode(
    'midi dress',
    'apparel',
    'head-to-toe',
    'dress',
    'midi'
)([undefined, 'Women::Dresses::Midi']);
addNode(
    'mini dress',
    'apparel',
    'head-to-toe',
    'dress',
    'mini'
)([undefined, 'Women::Dresses::Above knee, mini']);
addNode(
    'suit',
    'apparel',
    'head-to-toe',
    'suit'
)([
    undefined,
    undefined,
    [
        'Kids::Boys coats & jackets::Boys 0-24 mos',
        'Kids::Boys coats & jackets::Boys 2T-5T',
        'Kids::Boys coats & jackets::Boys (4+)'
    ],
    undefined
]);

addNode(
    'snowsuit',
    'apparel',
    'head-to-toe',
    'suit',
    'snowsuit'
)(['Men::Athletic apparel::Snowsuits', 'Women::Athletic apparel::Snowsuits']);
addNode(
    'tracksuit',
    'apparel',
    'head-to-toe',
    'suit',
    'tracksuit'
)(['Men::Athletic apparel::Tracksuits', 'Women::Athletic apparel::Tracksuits']);
addNode(
    'tuxedo',
    'apparel',
    'head-to-toe',
    'suit',
    'tuxedo'
)(['Men::Suits::Tuxedo']);
addNode(
    'sweatsuit',
    'apparel',
    'head-to-toe',
    'suit',
    'sweatsuit'
)([
    'Men::Sweats & hoodies::Sweatsuits',
    'Women::Athletic apparel::Athletic Sweatsuits'
]);
addNode(
    'dress-suit',
    'apparel',
    'head-to-toe',
    'suit',
    'dress-suit'
)([undefined, 'Women::Suits & blazers::Dress suit']);
addNode(
    'maternity suit',
    'apparel',
    'head-to-toe',
    'suit',
    'maternity'
)([undefined, 'Women::Maternity::Maternity Suits']);
addNode(
    'pant-suit',
    'apparel',
    'head-to-toe',
    'suit',
    'pant-suit'
)([undefined, 'Women::Suits & blazers::Pant suit']);
addNode(
    'skirt-suit',
    'apparel',
    'head-to-toe',
    'suit',
    'skirt-suit'
)([undefined, 'Women::Suits & blazers::Skirt suit']);

addNode(
    'bodysuit',
    'apparel',
    'head-to-toe',
    'suit',
    'bodysuit'
)([undefined, 'Women::Tops & blouses::Bodysuits']);
addNode(
    'double-breasted suit',
    'apparel',
    'head-to-toe',
    'suit',
    'double-breasted'
)(['Men::Suits::Double breasted']);
addNode(
    'one-button suit',
    'apparel',
    'head-to-toe',
    'suit',
    'one-button'
)(['Men::Suits::One button']);
addNode(
    'two-button suit',
    'apparel',
    'head-to-toe',
    'suit',
    'two-button'
)(['Men::Suits::Two button']);
addNode(
    'three-button suit',
    'apparel',
    'head-to-toe',
    'suit',
    'three-button'
)(['Men::Suits::Three button']);
addNode(
    'four-button suit',
    'apparel',
    'head-to-toe',
    'suit',
    'four-button'
)(['Men::Suits::Four button']);
addNode(
    'tops',
    'apparel',
    'tops'
)([
    'Men || Tops || Other',
    'Women || Tops & blouses || Other',
    [
        'Kids || Boys tops & t-shirts || Boys 0-24 mos',
        'Kids || Boys tops & t-shirts || Boys 2T-5T',
        'Kids || Boys tops & t-shirts || Boys (4+)'
    ],
    [
        'Kids || Girls tops & t-shirts || Girls 0-24 mos',
        'Kids || Girls tops & t-shirts || Girls 2T-5T',
        'Kids || Girls tops & t-shirts || Girls (4+)'
    ]
]);
addNode(
    'jacket',
    'apparel',
    'tops',
    'jacket'
)([
    'Men || Coats & jackets || Other',
    'Women || Coats & jackets || Other',
    [
        'Kids || Boys coats & jackets || Boys 0-24 mos',
        'Kids || Boys coats & jackets || Boys 2T-5T',
        'Kids || Boys coats & jackets || Boys (4+)'
    ],
    [
        'Kids || Girls coats & jackets || Girls 0-24 mos',
        'Kids || Girls coats & jackets || Girls 2T-5T',
        'Kids || Girls coats & jackets || Girls (4+)'
    ]
]);
addNode(
    'varsity jacket',
    'apparel',
    'tops',
    'jacket',
    'varsity'
)(['Men::Coats & jackets::Varsity/baseball']);
addNode(
    'maternity jacket',
    'apparel',
    'tops',
    'jacket',
    'maternity'
)([undefined, 'Women::Maternity::Coats & jackets']);
addNode(
    'bomber jacket',
    'apparel',
    'tops',
    'jacket',
    'bomber'
)(['Men::Coats & jackets::Flight/bomber']);
addNode(
    'athletic jacket',
    'apparel',
    'tops',
    'jacket',
    'athletic'
)(['Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']);
addNode(
    'cape',
    'apparel',
    'tops',
    'jacket',
    'cape'
)([undefined, 'Women::Coats & jackets::Cape']);
addNode(
    'fleece jacket',
    'apparel',
    'tops',
    'jacket',
    'fleece'
)([
    'Men::Coats & jackets::Fleece jacket',
    'Women::Coats & jackets::Fleece jacket'
]);
addNode(
    'hoodie',
    'apparel',
    'tops',
    'jacket',
    'hoodie'
)([
    'Men::Sweats & hoodies::Hoodie',
    'Women::Athletic apparel::Athletic Hoodies'
]);
addNode(
    'jean jacket',
    'apparel',
    'tops',
    'jacket',
    'jean-jacket'
)(['Men::Coats & jackets::Jean jacket', 'Women::Coats & jackets::Jean jacket']);
addNode(
    'military jacket',
    'apparel',
    'tops',
    'jacket',
    'military'
)(['Men::Coats & jackets::Military', 'Women::Coats & jackets::Military']);
addNode(
    'biker jacket',
    'apparel',
    'tops',
    'jacket',
    'biker'
)(['Men::Coats & jackets::Motorcycle', 'Women::Coats & jackets::Motorcycle']);
addNode(
    'parka',
    'apparel',
    'tops',
    'jacket',
    'parka'
)(['Men::Coats & jackets::Parka', 'Women::Coats & jackets::Parka']);
addNode(
    'peacoat',
    'apparel',
    'tops',
    'jacket',
    'peacoat'
)(['Men::Coats & jackets::Peacoat', 'Women::Coats & jackets::Peacoat']);
addNode(
    'poncho',
    'apparel',
    'tops',
    'jacket',
    'poncho'
)(['Men::Coats & jackets::Poncho', 'Women::Coats & jackets::Poncho']);
addNode(
    'puffer jacket',
    'apparel',
    'tops',
    'jacket',
    'puffer'
)(['Men::Coats & jackets::Puffer', 'Women::Coats & jackets::Puffer']);
addNode(
    'raincoat',
    'apparel',
    'tops',
    'jacket',
    'raincoat'
)(['Men::Coats & jackets::Rainwear', 'Women::Coats & jackets::Raincoat']);
addNode(
    'trenchcoat',
    'apparel',
    'tops',
    'jacket',
    'trenchcoat'
)(['Men::Coats & jackets::Trench', 'Women::Coats & jackets::Trench']);
addNode(
    'vest',
    'apparel',
    'tops',
    'jacket',
    'vest'
)(['Men::Coats & jackets::Vest', 'Women::Coats & jackets::Vest']);
addNode(
    'windbreaker',
    'apparel',
    'tops',
    'jacket',
    'windbreaker'
)(['Men::Coats & jackets::Windbreaker', 'Women::Coats & jackets::Windbreaker']);
addNode(
    'wool jacket',
    'apparel',
    'tops',
    'jacket',
    'wool'
)(['Men::Coats & jackets::Wool', 'Women::Coats & jackets::Wool']);
addNode(
    'blazer',
    'apparel',
    'tops',
    'jacket',
    'blazer'
)([
    'Men || Blazers & sport coats || Other',
    'Women || Suits & blazers || Blazer'
]);
addNode(
    'double-breasted blazer',
    'apparel',
    'tops',
    'jacket',
    'blazer',
    'double-breasted'
)(['Men || Blazers & sport coats || Double breasted']);
addNode(
    'one-button blazer',
    'apparel',
    'tops',
    'jacket',
    'blazer',
    'one-button'
)(['Men || Blazers & sport coats || One button']);
addNode(
    'maternity blazer',
    'apparel',
    'tops',
    'jacket',
    'blazer',
    'maternity'
)([undefined, 'Women::Maternity::Maternity Blazers']);
addNode(
    'two-button blazer',
    'apparel',
    'tops',
    'jacket',
    'blazer',
    'two-button'
)(['Men || Blazers & sport coats || Two button']);
addNode(
    'three-button blazer',
    'apparel',
    'tops',
    'jacket',
    'blazer',
    'three-button'
)(['Men || Blazers & sport coats || Three button']);
addNode(
    'four-button blazer',
    'apparel',
    'tops',
    'jacket',
    'blazer',
    'four-button'
)(['Men || Blazers & sport coats || Four button']);
addNode(
    'sport-coat',
    'apparel',
    'tops',
    'jacket',
    'sport-coat'
)([
    'Men || Blazers & sport coats || Other',
    'Women || Suits & blazers || Other'
]);
addNode(
    'double-breasted sport-coat',
    'apparel',
    'tops',
    'jacket',
    'sport-coat',
    'double-breasted'
)(['Men || Blazers & sport coats || Double breasted']);
addNode(
    'one-button sport-coat',
    'apparel',
    'tops',
    'jacket',
    'sport-coat',
    'one-button'
)(['Men || Blazers & sport coats || One button']);
addNode(
    'two-button sport-coat',
    'apparel',
    'tops',
    'jacket',
    'sport-coat',
    'two-button'
)(['Men || Blazers & sport coats || Two button']);
addNode(
    'three-button sport-coat',
    'apparel',
    'tops',
    'jacket',
    'sport-coat',
    'three-button'
)(['Men || Blazers & sport coats || Three button']);
addNode(
    'four-button sport-coat',
    'apparel',
    'tops',
    'jacket',
    'sport-coat',
    'four-button'
)(['Men || Blazers & sport coats || Four button']);

addNode(
    'sweater',
    'apparel',
    'tops',
    'sweater'
)(['Men::Sweaters::Other', 'Women || Sweaters || Other']);
addNode(
    'collared sweater',
    'apparel',
    'tops',
    'sweater',
    'collared'
)([undefined, 'Women::Sweaters::Collared']);
addNode(
    'cowl-neck sweater',
    'apparel',
    'tops',
    'sweater',
    'cowl'
)([undefined, 'Women::Sweaters::Cowl neck']);
addNode(
    'crewneck',
    'apparel',
    'tops',
    'sweater',
    'crew'
)(['Men::Sweaters::Crewneck', 'Women::Sweaters::Crewneck']);
addNode(
    'sweater',
    'apparel',
    'tops',
    'sweater',
    'mock'
)([undefined, 'Women::Sweaters::Mock Sweaters']);
addNode(
    'scoop-neck sweater',
    'apparel',
    'tops',
    'sweater',
    'scoop'
)([undefined, 'Women::Sweaters::Scoop neck']);
addNode(
    'v-neck sweater',
    'apparel',
    'tops',
    'sweater',
    'v-neck'
)(['Men::Sweaters::V-neck', 'Women || Sweaters || V-neck']);
addNode(
    'full-zip sweater',
    'apparel',
    'tops',
    'sweater',
    'full-zip'
)(['Men::Sweaters::Full zip', 'Women::Sweaters::Full zip']);
addNode('sweater', 'apparel', 'tops', 'sweater', 'athletic')([]);
addNode(
    'maternity sweater',
    'apparel',
    'tops',
    'sweater',
    'maternity'
)([undefined, 'Women::Maternity::Sweaters']);

addNode('casual-shirt', 'apparel', 'tops', 'casual-shirt')([]);

addNode(
    'camisole',
    'apparel',
    'tops',
    'casual-shirt',
    'camisole'
)([undefined, 'Women::Tops & blouses::Camisoles']);
addNode(
    'camisole',
    'apparel',
    'tops',
    'casual-shirt',
    'camisole',
    'maternity'
)([undefined, 'Women::Maternity::Maternity Camisoles']);
addNode(
    'jersey',
    'apparel',
    'tops',
    'casual-shirt',
    'jersey'
)(['Men::Athletic apparel::Jerseys', 'Women::Athletic apparel::Jerseys']);
addNode(
    'jersey',
    'apparel',
    'tops',
    'casual-shirt',
    'jersey',
    'mlb'
)(['Sports & outdoors::Fan shop::MLB', 'Sports & outdoors::Fan shop::MLB']);
addNode(
    'jersey',
    'apparel',
    'tops',
    'casual-shirt',
    'jersey',
    'nba'
)(['Sports & outdoors::Fan shop::NBA', 'Sports & outdoors::Fan shop::NBA']);
addNode(
    'jersey',
    'apparel',
    'tops',
    'casual-shirt',
    'jersey',
    'ncaa'
)(['Sports & outdoors::Fan shop::NCAA', 'Sports & outdoors::Fan shop::NCAA']);
addNode(
    'jersey',
    'apparel',
    'tops',
    'casual-shirt',
    'jersey',
    'nfl'
)(['Sports & outdoors::Fan shop::NFL', 'Sports & outdoors::Fan shop::NFL']);
addNode(
    'jersey',
    'apparel',
    'tops',
    'casual-shirt',
    'jersey',
    'nhl'
)(['Sports & outdoors::Fan shop::NHL', 'Sports & outdoors::Fan shop::NHL']);

addNode(
    'polo',
    'apparel',
    'tops',
    'casual-shirt',
    'polo'
)(['Men::Tops::Polos', 'Women::Tops & blouses::Polo shirt']);
addNode(
    'athletic polo',
    'apparel',
    'tops',
    'casual-shirt',
    'polo',
    'athletic'
)([
    'Men::Athletic apparel::Athletic Polos',
    'Women::Athletic apparel::Athletic Polos'
]);
addNode(
    'maternity polo',
    'apparel',
    'tops',
    'casual-shirt',
    'polo',
    'maternity'
)([undefined, 'Women::Maternity::Maternity Polos']);

addNode(
    'rugby',
    'apparel',
    'tops',
    'casual-shirt',
    'rugby'
)(['Men::Tops::Rugby Shirts']);
addNode(
    'snow-bib',
    'apparel',
    'tops',
    'casual-shirt',
    'snow-bib'
)(['Men::Athletic apparel::Snow Bibs', 'Women::Athletic apparel::Snow Bibs']);
addNode(
    'sweatshirt',
    'apparel',
    'tops',
    'casual-shirt',
    'sweatshirt'
)([
    'Men::Sweats & hoodies::Sweatshirt, pullover',
    'Women::Athletic apparel::Athletic Sweatshirts'
]);
addNode(
    'athletic sweatshirt',
    'apparel',
    'tops',
    'casual-shirt',
    'sweatshirt',
    'athletic'
)([
    'Men::Athletic apparel::Athletic Sweatshirts',
    'Women::Athletic apparel::Athletic Sweatshirts'
]);
addNode(
    'maternity sweatshirt',
    'apparel',
    'tops',
    'casual-shirt',
    'sweatshirt',
    'maternity'
)([undefined, 'Women::Maternity::Sweaters']);

addNode(
    'tank-top',
    'apparel',
    'tops',
    'casual-shirt',
    'tank-top'
)(['Men::Tops::Tank', 'Women::Tops & blouses::Tank Tops']);
addNode(
    'athletictank-top',
    'apparel',
    'tops',
    'casual-shirt',
    'tank-top',
    'athletic'
)([
    'Men::Athletic apparel::Athletic Tank Tops',
    'Women::Athletic apparel::Athletic Tank Tops'
]);
addNode(
    'maternity tank-top',
    'apparel',
    'tops',
    'casual-shirt',
    'tank-top',
    'maternity'
)([undefined, 'Women::Maternity::Maternity Tank Tops']);

addNode(
    't-shirt',
    'apparel',
    'tops',
    'casual-shirt',
    't-shirt'
)(['Men::Tops::T-shirts', 'Women::Tops & blouses::T-shirts']);
addNode(
    'athletic t-shirt',
    'apparel',
    'tops',
    'casual-shirt',
    't-shirt',
    'athletic'
)([
    'Men::Athletic apparel::Athletic T-Shirts',
    'Women::Athletic apparel::Athletic T-Shirts'
]);
addNode(
    'maternity t-shirt',
    'apparel',
    'tops',
    'casual-shirt',
    't-shirt',
    'maternity'
)([undefined, 'Women::Maternity::Maternity T-Shirts']);
addNode(
    'tube-top',
    'apparel',
    'tops',
    'casual-shirt',
    'tube-top'
)([undefined, 'Women::Tops & blouses::Other']);
addNode(
    'tunic',
    'apparel',
    'tops',
    'casual-shirt',
    'tunic'
)([undefined, 'Women::Tops & blouses::Tunic']);
addNode(
    'halter',
    'apparel',
    'tops',
    'casual-shirt',
    'halter'
)([undefined, 'Women::Tops & blouses::Halter']);
addNode(
    'henley',
    'apparel',
    'tops',
    'casual-shirt',
    'henley'
)(['Men::Tops::Henley', 'Women::Sweaters::Henley']);
addNode(
    'turtleneck',
    'apparel',
    'tops',
    'casual-shirt',
    'turtleneck'
)(['Men::Tops::Turtleneck', 'Women::Tops & blouses::Turtleneck']);

addNode('formal-shirt', 'apparel', 'tops', 'formal-shirt')([]);
addNode(
    'blouse',
    'apparel',
    'tops',
    'formal-shirt',
    'blouse'
)([undefined, 'Women::Tops & blouses::Blouse']);
addNode(
    'maternity blouse',
    'apparel',
    'tops',
    'formal-shirt',
    'blouse',
    'maternity'
)([undefined, 'Women::Maternity::Maternity Blouses']);
addNode(
    'cardigan',
    'apparel',
    'tops',
    'formal-shirt',
    'cardigan'
)(['Men::Sweaters::Cardigan', 'Women::Sweaters::Cardigan']);
addNode(
    'hawaiian',
    'apparel',
    'tops',
    'formal-shirt',
    'hawaiian'
)(['Men::Tops::Hawaiian', 'Women::Tops & blouses::Other']);
addNode(
    'knit-top',
    'apparel',
    'tops',
    'formal-shirt',
    'knit-top'
)([undefined, 'Women::Tops & blouses::Knit top']);
addNode(
    'suit-jacket',
    'apparel',
    'tops',
    'formal-shirt',
    'suit-jacket'
)(['Men::Blazers & sport coats::Other', 'Women::Suits & blazers::Blazer']);

addNode('vest', 'apparel', 'tops', 'formal-shirt', 'vest')([]);
addNode(
    'button-downs',
    'apparel',
    'tops',
    'formal-shirt',
    'button-downs'
)(['Men::Tops::Button-front', 'Women::Tops & blouses::Button down shirt']);
addNode(
    'athletic vest',
    'apparel',
    'tops',
    'formal-shirt',
    'vest',
    'athletic'
)(['Men::Athletic apparel::Vests', 'Women::Athletic apparel::Vests']);
addNode(
    'oxford-shirt',
    'apparel',
    'tops',
    'formal-shirt',
    'button-downs',
    'oxford-shirt'
)([]);
addNode(
    'button-up',
    'apparel',
    'tops',
    'formal-shirt',
    'button-downs',
    'button-up'
)(['Men::Tops::Button-front']);
addNode(
    'maternity button-down',
    'apparel',
    'tops',
    'formal-shirt',
    'button-downs',
    'maternity'
)([undefined, 'Women::Maternity::Maternity Button-Ups']);
addNode(
    'fitted',
    'apparel',
    'tops',
    'formal-shirt',
    'button-downs',
    'fitted'
)(['Men::Tops::Dress shirts']);
addNode(
    'dress',
    'apparel',
    'tops',
    'formal-shirt',
    'button-downs',
    'dress'
)(['Men::Tops::Dress shirts']);

addNode(
    'bottoms',
    'apparel',
    'bottoms'
)([
    undefined,
    undefined,
    [
        'Kids || Boys bottoms || Boys 0-24 mos',
        'Kids || Boys bottoms || Boys 2T-5T',
        'Kids || Boys bottoms || Boys (4+)'
    ],
    [
        'Kids || Girls bottoms || Girls 0-24 mos',
        'Kids || Girls bottoms || Girls 2T-5T',
        'Kids || Girls bottoms || Girls (4+)'
    ]
]);

addNode(
    'skirts',
    'apparel',
    'bottoms',
    'skirts'
)([undefined, 'Women || Skirts || Other']);
addNode(
    'asymmetrical skirt',
    'apparel',
    'bottoms',
    'skirts',
    'asymmetrical'
)([undefined, 'Women::Skirts::Asymmetrical']);
addNode(
    'bubble skirt',
    'apparel',
    'bottoms',
    'skirts',
    'bubble'
)([undefined, 'Women::Skirts::Bubble']);
addNode(
    'full skirt',
    'apparel',
    'bottoms',
    'skirts',
    'full'
)([undefined, 'Women::Skirts::Full skirt']);
addNode(
    'maxi skirt',
    'apparel',
    'bottoms',
    'skirts',
    'maxi'
)([undefined, 'Women::Skirts::Maxi']);
addNode(
    'mini skirt',
    'apparel',
    'bottoms',
    'skirts',
    'mini'
)([undefined, 'Women::Skirts::Mini']);
addNode(
    'peasant skirt',
    'apparel',
    'bottoms',
    'skirts',
    'peasant'
)([undefined, 'Women::Skirts::Peasant']);
addNode(
    'pleated skirt',
    'apparel',
    'bottoms',
    'skirts',
    'pleated'
)([undefined, 'Women::Skirts::Pleated']);
addNode(
    'pencil skirt',
    'apparel',
    'bottoms',
    'skirts',
    'pencil'
)([undefined, 'Women::Skirts::Straight, pencil']);
addNode(
    'tiered skirt',
    'apparel',
    'bottoms',
    'skirts',
    'tiered'
)([undefined, 'Women::Skirts::Tiered']);
addNode(
    'wrap skirt',
    'apparel',
    'bottoms',
    'skirts',
    'wrap'
)([undefined, 'Women::Skirts::Wrap']);
addNode(
    'athletic skirt',
    'apparel',
    'bottoms',
    'skirts',
    'athletic'
)([undefined, 'Women::Athletic apparel::Athletic Skirts']);
addNode(
    'maternity skirt',
    'apparel',
    'bottoms',
    'skirts',
    'maternity'
)([undefined, 'Women::Maternity::Skirts']);

addNode(
    'shorts',
    'apparel',
    'bottoms',
    'shorts'
)(['Men || Shorts || Other', 'Women || Shorts || Other']);
addNode(
    'athletic shorts',
    'apparel',
    'bottoms',
    'shorts',
    'athletic'
)(['Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']);
addNode('maternity shorts', 'apparel', 'bottoms', 'shorts', 'maternity')([]);
addNode(
    'chinos shorts',
    'apparel',
    'bottoms',
    'shorts',
    'chinos'
)(['Men::Shorts::Khakis, chinos', 'Women::Shorts::Chino & khaki']);
addNode(
    'corduroy shorts',
    'apparel',
    'bottoms',
    'shorts',
    'corduroy'
)(['Men::Shorts::Corduroys']);
addNode(
    'denim shorts',
    'apparel',
    'bottoms',
    'shorts',
    'denim'
)(['Men::Shorts::Denim', 'Women::Shorts::Denim']);
addNode(
    'khakis shorts',
    'apparel',
    'bottoms',
    'shorts',
    'khakis'
)(['Men::Shorts::Khakis, chinos', 'Women::Shorts::Chino & khaki']);
addNode('leather shorts', 'apparel', 'bottoms', 'shorts', 'leather')([]);
addNode('linen shorts', 'apparel', 'bottoms', 'shorts', 'linen')([]);
addNode(
    'bermuda shorts',
    'apparel',
    'bottoms',
    'shorts',
    'bermuda'
)([undefined, 'Women::Shorts::Bermuda']);
addNode(
    'bike shorts',
    'apparel',
    'bottoms',
    'shorts',
    'bike'
)([undefined, 'Women::Shorts::Bike']);
addNode(
    'board shorts',
    'apparel',
    'bottoms',
    'shorts',
    'board'
)(['Men::Shorts::Board, surf']);
addNode(
    'cargo shorts',
    'apparel',
    'bottoms',
    'shorts',
    'cargo'
)(['Men::Shorts::Cargo', 'Women::Shorts::Cargo']);
addNode(
    'carpenter shorts',
    'apparel',
    'bottoms',
    'shorts',
    'carpenter'
)(['Men::Shorts::Carpenter, utility']);
addNode(
    'casual shorts',
    'apparel',
    'bottoms',
    'shorts',
    'casual'
)(['Men::Shorts::Casual shorts']);
addNode(
    'dress shorts',
    'apparel',
    'bottoms',
    'shorts',
    'dress'
)(['Men::Shorts::Dress shorts']);
addNode(
    'high-waisted shorts',
    'apparel',
    'bottoms',
    'shorts',
    'high-waisted'
)([undefined, 'Women::Shorts::High-waisted']);
addNode(
    'short-shorts',
    'apparel',
    'bottoms',
    'shorts',
    'short-shorts'
)([undefined, 'Women::Shorts::Short shorts']);
addNode(
    'skort',
    'apparel',
    'bottoms',
    'shorts',
    'skort'
)([undefined, 'Women::Shorts::Skort']);
addNode(
    'athletic skort',
    'apparel',
    'bottoms',
    'shorts',
    'skort',
    'athletic'
)([undefined, 'Women::Athletic apparel::Athletic Skorts']);

addNode(
    'pants',
    'apparel',
    'bottoms',
    'pants'
)(['Men || Pants || Other', 'Women || Pants || Other']);
addNode(
    'athletic pants',
    'apparel',
    'bottoms',
    'pants',
    'athletic'
)(['Men::Athletic apparel::Pants', 'Women::Athletic apparel::Athletic Pants']);
addNode('maternity pants', 'apparel', 'bottoms', 'pants', 'maternity')([]);
addNode(
    'chinos pants',
    'apparel',
    'bottoms',
    'pants',
    'chinos'
)(['Men::Pants::Khakis, chinos', 'Women::Pants::Khakis, chinos']);
addNode(
    'corduroys',
    'apparel',
    'bottoms',
    'pants',
    'corduroy'
)(['Men::Pants::Corduroys', 'Women::Pants::Corduroys']);
addNode(
    'khakis pants',
    'apparel',
    'bottoms',
    'pants',
    'khakis'
)(['Men::Pants::Khakis, chinos', 'Women::Pants::Khakis, chinos']);
addNode(
    'leather pants',
    'apparel',
    'bottoms',
    'pants',
    'leather'
)([undefined, 'Women::Pants::Leather']);
addNode(
    'linen pants',
    'apparel',
    'bottoms',
    'pants',
    'linen'
)([undefined, 'Women::Pants::Linen']);
addNode(
    'cargo pants',
    'apparel',
    'bottoms',
    'pants',
    'cargo'
)(['Men::Pants::Cargo', 'Women::Pants::Cargo']);
addNode(
    'carpenter pants',
    'apparel',
    'bottoms',
    'pants',
    'carpenter'
)(['Men::Pants::Carpenter']);
addNode(
    'casual pants',
    'apparel',
    'bottoms',
    'pants',
    'casual'
)(['Men::Pants::Casual pants', 'Women::Pants::Casual pants']);
addNode(
    'dress pants',
    'apparel',
    'bottoms',
    'pants',
    'dress'
)(['Men::Pants::Dress - flat front', 'Women::Pants::Dress pants']);
addNode(
    'sweatpants',
    'apparel',
    'bottoms',
    'pants',
    'sweatpants'
)([
    'Men::Sweats & hoodies::Sweat Pants',
    'Women::Athletic apparel::Athletic Sweat Pants'
]);

addNode(
    'jeans',
    'apparel',
    'bottoms',
    'jeans'
)(['Men || Jeans || Other', 'Women || Jeans || Other']);
addNode('athletic jeans', 'apparel', 'bottoms', 'jeans', 'athletic')([]);
addNode(
    'maternity jeans',
    'apparel',
    'bottoms',
    'jeans',
    'maternity'
)([undefined, 'Women::Maternity::Jeans']);
addNode(
    'boyfriend jeans',
    'apparel',
    'bottoms',
    'jeans',
    'boyfriend'
)([undefined, 'Women::Jeans::Boyfriend']);
addNode(
    'cargo jeans',
    'apparel',
    'bottoms',
    'jeans',
    'cargo'
)(['Men::Jeans::Cargo', 'Women::Jeans::Cargo']);
addNode(
    'carpenter jeans',
    'apparel',
    'bottoms',
    'jeans',
    'carpenter'
)(['Men::Jeans::Carpenter']);
addNode(
    'leggings',
    'apparel',
    'bottoms',
    'jeans',
    'leggings'
)([undefined, 'Women::Jeans::Leggings']);
addNode(
    'overalls',
    'apparel',
    'bottoms',
    'jeans',
    'overalls'
)(['Men::Jeans::Overalls', 'Women::Jeans::Overalls']);
addNode(
    'baggy jeans',
    'apparel',
    'bottoms',
    'jeans',
    'baggy'
)(['Men::Jeans::Baggy, loose']);
addNode(
    'bootcut jeans',
    'apparel',
    'bottoms',
    'jeans',
    'bootcut'
)(['Men::Jeans::Boot cut', 'Women::Jeans::Boot cut']);
addNode(
    'capri jeans',
    'apparel',
    'bottoms',
    'jeans',
    'capri'
)([undefined, 'Women::Jeans::Capri Jeans']);
addNode(
    'cropped jeans',
    'apparel',
    'bottoms',
    'jeans',
    'cropped'
)([undefined, 'Women::Jeans::Cropped Jeans']);
addNode(
    'flare jeans',
    'apparel',
    'bottoms',
    'jeans',
    'flare'
)([undefined, 'Women::Jeans::Flare']);
addNode(
    'straight jeans',
    'apparel',
    'bottoms',
    'jeans',
    'straight'
)(['Men::Jeans::Classic, straight leg', 'Women::Jeans::Straight leg']);
addNode(
    'relaxed jeans',
    'apparel',
    'bottoms',
    'jeans',
    'relaxed'
)(['Men::Jeans::Relaxed', 'Women::Jeans::Relaxed']);
addNode(
    'skinny jeans',
    'apparel',
    'bottoms',
    'jeans',
    'skinny'
)(['Men::Jeans::Skinny Jeans', 'Women::Jeans::Skinny Jeans']);
addNode(
    'slim jeans',
    'apparel',
    'bottoms',
    'jeans',
    'slim'
)(['Men::Jeans::Slim Jeans', 'Women::Jeans::Slim Jeans']);
addNode(
    'wide jeans',
    'apparel',
    'bottoms',
    'jeans',
    'wide'
)([undefined, 'Women::Jeans::Wide leg']);

addNode('toys-games', 'toys-games')([]);
addNode('puzzles', 'toys-games', 'puzzles')([]);
addNode(
    'jigsaw puzzles',
    'toys-games',
    'puzzles',
    'jigsaws'
)('Toys & Collectibles::Games & Puzzles::Jigsaw Puzzles');

addNode('group games', 'toys-games', 'group-games')([]);
addNode(
    'board game',
    'toys-games',
    'group-games',
    'board-games'
)('Toys & Collectibles::Games & Puzzles::Board Games');
addNode(
    'checkers',
    'toys-games',
    'group-games',
    'board-games',
    'checkers'
)('Toys & Collectibles::Games & Puzzles::Chess & Checkers');
addNode(
    'chess',
    'toys-games',
    'group-games',
    'board-games',
    'chess'
)('Toys & Collectibles::Games & Puzzles::Chess & Checkers');
addNode(
    'card game',
    'toys-games',
    'group-games',
    'card-games'
)('Toys & Collectibles::Games & Puzzles::Card Games');
addNode(
    'stacking game',
    'toys-games',
    'group-games',
    'stacking-games'
)('Toys & Collectibles::Games & Puzzles::Stacking Games');

addNode('stuffed toys', 'toys-games', 'stuffed-toys')([]);
addNode(
    'bean-bag plush',
    'toys-games',
    'stuffed-toys',
    'bean-bag-plush'
)('Toys & Collectibles::Stuffed Animals & Plush::Beanbag Plushies');
addNode(
    'plush puppets',
    'toys-games',
    'stuffed-toys',
    'plush-puppets'
)('Toys & Collectibles::Stuffed Animals & Plush::Plush Puppets');
addNode(
    'plush figures',
    'toys-games',
    'stuffed-toys',
    'plush-figures'
)('Toys & Collectibles::Stuffed Animals & Plush::Plush Figures');
addNode(
    'stuffed animals',
    'toys-games',
    'stuffed-toys',
    'stuffed-animals'
)('Toys & Collectibles::Stuffed Animals & Plush::Stuffed Animals');

addNode('dolls', 'toys-games', 'dolls')([]);
addNode(
    'action-figures',
    'toys-games',
    'dolls',
    'action-figures'
)('Toys & Collectibles::Action Figures & Accessories::Action Figures');

addNode('toy guns', 'toys-games', 'toy-guns')(undefined);
addNode(
    'NERF gun',
    'toys-games',
    'toy-guns',
    'nerf-guns'
)('Toys & Collectibles::Sports & Outdoor Play::NERF & Blaster Guns');
addNode(
    'NERF ammunition',
    'toys-games',
    'toy-guns',
    'nerf-guns',
    'ammunition'
)('Toys & Collectibles::Sports & Outdoor Play::NERF & Blaster Darts');

addNode('office goods', 'office-goods')(undefined);
addNode('ink & toner', 'office-goods', 'ink-toner')(undefined);
addNode(
    'inkjet cartridges',
    'office-goods',
    'ink-toner',
    'inkjet-cartridge'
)('Office::Ink & Toner::Ink Cartidges');
addNode('notebook', 'office-goods', 'notebook')(undefined);
addNode(
    'journal',
    'office-goods',
    'notebook',
    'journal'
)('Office::Notebooks & Writing Pads::Journals');
addNode('printer paper', 'office-goods', 'printer-paper')(undefined);
addNode(
    'photo paper',
    'office-goods',
    'printer-paper',
    'photo-paper'
)('Office::Paper::Photo Paper');

export type NodeData = [
    string,
    string | undefined,
    (
        | string
        | undefined
        | [
              string | undefined,
              string | undefined,
              [string, string, string] | undefined,
              [string, string, string] | undefined
          ]
    ),
    NodeData[]?
];

export function buildTaxonomy(
    value?:
        | string
        | undefined
        | [
              string | undefined,
              string | undefined,
              [string, string, string] | undefined,
              [string, string, string] | undefined
          ]
) {
    if (value == null) return undefined;
    if (typeof value === 'string') return value.replaceAll('::', ' || ');
    const [mens, womens, boys, girls] = value;
    const result = {
        ...(mens ? { mens: mens.replaceAll('::', ' || ') } : {}),
        ...(womens ? { womens: womens.replaceAll('::', ' || ') } : {}),
        ...(boys
            ? {
                  boys: {
                      low: boys[0].replaceAll('::', ' || '),
                      mid: boys[1].replaceAll('::', ' || '),
                      high: boys[2].replaceAll('::', ' || ')
                  }
              }
            : {}),
        ...(girls
            ? {
                  girls: {
                      low: girls[0].replaceAll('::', ' || '),
                      mid: girls[1].replaceAll('::', ' || '),
                      high: girls[2].replaceAll('::', ' || ')
                  }
              }
            : {})
    };
    return result;
}
export function constructNode(name: string, ...path: string[]) {
    return function (itemType?: string) {
        return function (
            taxonomy?:
                | string
                | undefined
                | [
                      string | undefined,
                      string | undefined,
                      [string, string, string] | undefined,
                      [string, string, string] | undefined
                  ]
        ) {
            return function (...children: NodeData[]) {
                const $path = ['', ...path, name].join('/')
                const $taxonomy = buildTaxonomy(taxonomy);

                const node = {
                    _path: $path,
                    _taxonomy: $taxonomy,
                    _itemType: itemType
                }

                const safePath = $path.split('/').slice(1).map(x => x.includes('-') ? `['${x}']` : `.${x}`).join('');
                const code = `reference${safePath} = ${JSON.stringify(node)}`
                eval(code);

                for (const [childName, childIT, childTax, childChild] of children) {
                    constructNode(childName, ...[...path, name])(childIT)(childTax)(...childChild ?? [])
                }
            };
        };
    };
}

constructNode('pet-supplies')('pet supplies')()(
    [
        'dogs',
        'dog supplies',
        'Pet Supplies || Dog Supplies || Other Dog Supplies',
        [
            [
                'harness',
                'dog harness',
                'Pet Supplies::Dog Supplies::Dog Harnesses'
            ],
            [
                'waste-bags',
                'pet waste bags',
                'Pet Supplies::Dog Supplies::Dog Waste Bags'
            ]
        ]
    ],
    ['cats', 'cat supplies', undefined]
);
constructNode('tools')('tools')(undefined)(
    [
        'electrical',
        'electrical tools',
        'Tools::Electrical Tools::Other Electrical Tools',
        [['timer', 'timer', undefined]]
    ],
    [
        'fastening',
        'fastening tools',
        'Tools::Fastening Tools::Other Fastening Tools',
        [['hooks', 'hooks', undefined]]
    ]
);
for (const [key, value] of Object.entries(reference.bags)) {
    reference.bags[key as keyof typeof reference.bags] =
        typeof value === 'string'
            ? value
            : 'mens' in value || 'womens' in value
            ? value
            : ({
                  ...value,
                  path: ['/bags', key].join('/')
              } as any);
}
for (const [key, value] of Object.entries(reference.bags.luggage)) {
    reference.bags.luggage[key as keyof typeof reference.bags.luggage] =
        typeof value === 'string'
            ? value
            : 'mens' in value || 'womens' in value
            ? value
            : ({
                  ...value,
                  path: ['/bags/luggage', key].join('/')
              } as any);
}
console.log(JSON.stringify(reference, null, '\t'));
