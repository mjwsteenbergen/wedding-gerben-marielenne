export class Coords {
    latitude!: number;
    longitude!: number;
}

export class WLocation {
    id!: string;
    title!: string;
    description!: string;
    coordinates!: Coords;
    link!: string;
    imageLink?: string;
}

// {
//     id: "temp",
//         title: "Secret location",
//             description: "Here",
//                 coordinates: {
//         latitude: 52.1,
//             longitude: 4.21,
//             },
//     link: "https://nntn.nl"
// },
// {
//     id: "temp-venlo",
//         title: "Venlo",
//             description: "Here",
//                 coordinates: {
//         latitude: 51.23,
//             longitude: 6.10,
//             },
//     link: "https://nntn.nl"
// },


export function getLocations(): WLocation[] {
    return [
        {
            id: "location-78",
            title: "Alles klaar, fietsen maar!",
            description: "",
            coordinates: {
                latitude: 51.610239,
                longitude: 4.791088,
            },
            link: "",
            imageLink: ""
        },
        {
            id: "location-91",
            title: "Terug naar het begin...",
            description: "",
            coordinates: {
                latitude: 51.629087,
                longitude: 4.838759,
            },
            link: "",
            imageLink: ""
        },
        {
            id: "location-2",
            title: "Een persoonlijke boodschap",
            description: "maar van wie?",
            coordinates: {
                latitude: 51.642524,
                longitude: 4.851408,
            },
            link: "",
            imageLink: ""
        },
        {
            id: "location-4",
            title: "Een persoonlijke boodschap",
            description: "maar van wie?",
            coordinates: {
                latitude: 51.639249,
                longitude: 4.87617,
            },
            link: "",
            imageLink: ""
        },
        {
            id: "location-87",
            title: "Tijd voor een spelletje!",
            description: "Wie van jullie kan het beter",
            coordinates: {
                latitude: 51.656784,
                longitude: 4.862427,
            },
            link: "",
            imageLink: ""
        },
        {
            id: "location-1",
            title: "Een persoonlijke boodschap",
            description: "Derek en Luke",
            coordinates: {
                latitude: 51.676249,
                longitude: 4.865101,
            },
            link: "https://youtu.be/W02BJDfha28",
            imageLink: ""
        },
        {
            id: "location-29",
            title: "Maak de limerick af!",
            description: "Verzamel de zinnen door de route heen... en onthoud wat je hebt gezien!",
            coordinates: {
                latitude: 51.665229,
                longitude: 4.93125,
            },
            link: "",
            imageLink: "/gerbenmarielenne/img/hester-pieter.gif"
        },
        {
            id: "location-28",
            title: "QUIZTIME!",
            description: "Pak uit de fietstasje het zakje met de 1 er op.",
            coordinates: {
                latitude: 51.65727,
                longitude: 4.934658,
            },
            link: "",
            imageLink: ""
        },
        {
            id: "location-5",
            title: "Een persoonlijke boodschap",
            description: "maar van wie?",
            coordinates: {
                latitude: 51.646998,
                longitude: 4.929589,
            },
            link: "",
            imageLink: ""
        },
        {
            id: "location-3",
            title: "Een persoonlijke boodschap",
            description: "maar van wie?",
            coordinates: {
                latitude: 51.631251,
                longitude: 4.911146,
            },
            link: "",
            imageLink: ""
        },
        {
            id: "location-30",
            title: "Maak de limerick af!",
            description: "Verzamel de zinnen door de route heen... en onthoud wat je hebt gezien! (Je kunt ook de vorige foto zien in de lijst met geopende locaties)",
            coordinates: {
                latitude: 51.626449,
                longitude: 4.913882,
            },
            link: "",
            imageLink: ""
        },
        {
            id: "location-52",
            title: "Zeilthema (nog een leuke titel verzinnen)",
            description: "In een explosief interview met Roos worden de grote geheimen onthuld.",
            coordinates: {
                latitude: 51.60745,
                longitude: 4.917798,
            },
            link: "https://youtu.be/9RgOXEuXXSI",
            imageLink: ""
        },
        {
            id: "location-40",
            title: "Een persoonlijke boodschap",
            description: "maar van wie?",
            coordinates: {
                latitude: 51.600171,
                longitude: 4.894667,
            },
            link: "",
            imageLink: ""
        },
        {
            id: "location-88",
            title: "Een persoonlijke boodschap",
            description: "Hester en Dennis",
            coordinates: {
                latitude: 51.593455,
                longitude: 4.86109,
            },
            link: "https://youtu.be/3OfnWX5i1MU",
            imageLink: ""
        },
        {
            id: "location-87-dubbel",
            title: "Een moment van bezinning",
            description: "",
            coordinates: {
                latitude: 51.586824,
                longitude: 4.8564,
            },
            link: "",
            imageLink: ""
        },
        {
            id: "location-86",
            title: "Een persoonlijke boodschap",
            description: "Kirsten",
            coordinates: {
                latitude: 51.57739,
                longitude: 4.842077,
            },
            link: "https://youtu.be/tYlfQSuUVO4",
            imageLink: ""
        },
        {
            id: "location-85",
            title: "Een persoonlijke boodschap",
            description: "maar van wie?",
            coordinates: {
                latitude: 51.572457,
                longitude: 4.826822,
            },
            link: "",
            imageLink: ""
        },
        {
            id: "location-81",
            title: "Maak de limerick af!",
            description: "Maak de limerick compleet met de voorgaande zinnen.",
            coordinates: {
                latitude: 51.587241,
                longitude: 4.786334,
            },
            link: "",
            imageLink: ""
        },
        {
            id: "location-80",
            title: "THE END ",
            description: "",
            coordinates: {
                latitude: 51.59292,
                longitude: 4.787877,
            },
            link: "",
            imageLink: ""
        },
        {
            id: "debug-1",
            title: "Leiden Centraal",
            description: "Station Leiden Centraal is het grootste spoorwegstation in de Nederlandse stad Leiden, provincie Zuid-Holland. Leiden heeft daarnaast twee andere spoorwegstations: aan de zuidoostelijke kant van de stad ligt station Leiden Lammenschans en aan de zuidwestelijke kant, op de grens van de gemeenten Leiden en Voorschoten, ligt station De Vink.",
            coordinates: {
                latitude: 52.165458,
                longitude: 4.4801473,
            },
            link: "https://nl.wikipedia.org/wiki/Station_Leiden_Centraal",
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ErfgoedLeiden_LEI001013300_Station_Leiden%2C_Stationsplein_1.jpg/260px-ErfgoedLeiden_LEI001013300_Station_Leiden%2C_Stationsplein_1.jpg"
        },
        {
            id: "debug-2",
            title: "Alphen Huis",
            description: "",
            coordinates: {
                latitude: 52.1215568,
                longitude: 4.6550943,
            },
            link: "",
            imageLink: ""
        },
        {
            id: "debug-3",
            title: "Rotterdam Alexander station",
            description: "Ik had even wat text nodig: Chill on the couch table nyan fluffness ahh cucumber! run in circles meow meow mama cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog or lick left leg for ninety minutes, still dirty. Chew on cable sleep on keyboard, yet ask to be pet then attack owners hand. Good morning sunshine let me in let me out let me in let me out let me in let me out who broke this door anyway pet my belly, you know you want to; seize the hand and shred it!, for if it smells like fish eat as much as you wish for have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat lick the plastic bag yet murr i hate humans they are so annoying. Intently sniff hand destroy the blinds for sweet beast. Grab pompom in mouth and put in water dish you call this cat food or lick the curtain just to be annoying or eat all the power cords ignore the human until she needs to get up, then climb on her lap and sprawl. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked as lick i the shoes. This cat happen now, it was too purr-fect!!! annoy the old grumpy cat, start a fight and then retreat to wash when i lose, i bet my nine lives on you-oooo-ooo-hooo hit you unexpectedly chew iPad power cord, and nyan fluffness ahh cucumber!. Meow all night having their mate disturbing sleeping humans trip owner up in kitchen i want food yet run around the house at 4 in the morning cat mojo cat fur is the new black yet kitty scratches couch bad kitty. Sniff all the things snuggles up to shoulders or knees and purrs you to sleep ooh, are those your $250 dollar sandals? lemme use that as my litter box i vomit in the bed in the middle of the night and asdflkjaertvlkjasntvkjn (sits on keyboard) for cough hairball, eat toilet paper. Pounce on unsuspecting person spill litter box, scratch at owner, destroy all furniture, especially couch fish i must find my red catnip fishy fish plop down in the middle where everybody walks. 𝕄𝔼𝕆𝕎 lick butt and make a weird face sit in a box for hours yet eat and than sleep on your face man running from cops stops to pet cats, goes to jail so eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap. Hide head under blanket so no one can see look at dog hiiiiiisssss sleep everywhere, but not in my bed yet try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard but in the middle of the night i crawl onto your chest and purr gently to help you sleep. Grass smells good scratch the box dream about hunting birds. Purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table curl into a furry donut touch my tail, i shred your hand purrrr. Kick up litter crash against wall but walk away like nothing happened and disappear for four days and return home with an expensive injury; bite the vet, yet find empty spot in cupboard and sleep all day yet use lap as chair, yet pet my belly, you know you want to; seize the hand and shred it! yowling nonstop the whole night.\n\nDamn that dog . Leave fur on owners clothes dismember a mouse and then regurgitate parts of it on the family room floor for purr purr purr until owner pets why owner not pet me hiss scratch meow i will ruin the couch with my claws bleghbleghvomit my furball really tie the room together. Cat snacks. Sleep everywhere, but not in my bed meow for food, then when human fills food dish, take a few bites of food and continue meowing thug cat but see brother cat receive pets, attack out of jealousy, but eat grass, throw it back up yet dead stare with ears cocked. Pretend not to be evil. No, you can't close the door, i haven't decided whether or not i wanna go out scream at teh bath. Cat ass trophy stare at ceiling, so knock dish off table head butt cant eat out of my own dish, yet meow all night having their mate disturbing sleeping humans funny little cat chirrup noise shaking upright tail when standing next to you be superior. Touch my tail, i shred your hand purrrr make it to the carpet before i vomit mmmmmm yet annoy the old grumpy cat, start a fight and then retreat to wash when i lose or ask to be pet then attack owners hand.\n\nGroom forever, stretch tongue and leave it slightly out, blep open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! run at 3am or when in doubt, wash so cats woo but check cat door for ambush 10 times before coming in. Attack dog, run away and pretend to be victim sleep everywhere, but not in my bed and intently sniff hand. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back for hide when guests come over, yet litter box is life. You have cat to be kitten me right meow cats are a queer kind of folk so cry louder at reflection curl up and sleep on the freshly laundered towels or lick butt and make a weird face scratch me there, elevator butt. Leave fur on owners clothes cat dog hate mouse eat string barf pillow no baths hate everything for spend all night ensuring people don't sleep sleep all day. Bring your owner a dead bird bite plants so miaow then turn around and show you my bum flee in terror at cucumber discovered on floor for roll on the floor purring your whiskers off. Hunt by meowing loudly at 5am next to human slave food dispenser please let me outside pouty face yay! wait, it's cold out please let me inside pouty face oh, thank you rub against mommy's leg oh it looks so nice out, please let me outside again the neighbor cat was mean to me please let me back inside cat sit like bread or ptracy, for eat grass, throw it back up shake treat bag. Fat baby cat best buddy little guy sugar, my siamese, stalks me (in a good way), day and night yet and sometimes switches in french and say 'miaou' just because well why not or stare at guinea pigs meow in empty rooms russian blue. Kitty scratches couch bad kitty sleep in the bathroom sink toilet paper attack claws fluff everywhere meow miao french ciao litterbox flex claws on the human's belly and purr like a lawnmower. I shredded your linens for you cat cat moo moo lick ears lick paws or jump off balcony, onto stranger's head stick butt in face, but eat the rubberband. Ignore the squirrels, you'll never catch them anyway scratch the postman wake up lick paw wake up owner meow meow and mrow for i am the best. Stare at owner accusingly then wink. My water bowl is clean and freshly replenished, so i'll drink from the toilet good morning sunshine tuxedo cats always looking dapper yet shove bum in owner's face like camera lens my slave human didn't give me any food so i pooped on the floor. Going to catch the red dot today going to catch the red dot today jump up to edge of bath, fall in then scramble in a mad panic to get out pushes butt to face. Hit you unexpectedly.\n\nJump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans throw down all the stuff in the kitchen for fall asleep upside-down and scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food or meow meow we are 3 small kittens sleeping most of our time, we are around 15 weeks old i think, i don’t know i can’t count. Lick master's hand at first then bite because im moody cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers yet eat plants, meow, and throw up because i ate plants. Howl on top of tall thing i'm going to lap some water out of my master's cup meow be superior and soft kitty warm kitty little ball of furr. Under the bed cough furball into food bowl then scratch owner for a new one but catch eat throw up catch eat throw up bad birds. Knock dish off table head butt cant eat out of my own dish spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce. Run up and down stairs. Stand in doorway, unwilling to chose whether to stay in or go out refuse to leave cardboard box groom forever, stretch tongue and leave it slightly out, blep poop in the plant pot. Sitting in a box disappear for four days and return home with an expensive injury; bite the vet sleeps on my head. Poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls fooled again thinking the dog likes me. Claws in your leg meowing non stop for food. Experiences short bursts of poo-phoria after going to the loo small kitty warm kitty little balls of fur munch, munch, chomp, chomp and i like cats because they are fat and fluffy eat fish on floor but nya nya nyan under the bed.\n\n",
            coordinates: {
                latitude: 51.9521386,
                longitude: 4.5494486,
            },
            link: "",
            imageLink: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.totalntertainment.com%2Fwp-content%2Fuploads%2FRick-Astley.jpg&f=1&nofb=1"
        },
        {
            id: "debug-4",
            title: "Gouda station",
            description: "",
            coordinates: {
                latitude: 52.0167875,
                longitude: 4.7050806,
            },
            link: "",
            imageLink: ""
        },
        {
            id: "debug-5",
            title: "Kralingse Zoom, Rotterdam",
            description: "",
            coordinates: {
                latitude: 51.9215083,
                longitude: 4.5317793,
            },
            link: "",
            imageLink: ""
        },
    ]
}

export function getRoute(): number[][] {
    return [
        [51.610239, 4.791088],
        [51.611474, 4.791369],
        [51.61302, 4.792185],
        [51.614566, 4.793],
        [51.614138, 4.794956],
        [51.61371, 4.796911],
        [51.613282, 4.798867],
        [51.612854, 4.800822],
        [51.612426, 4.802777],
        [51.611997, 4.804732],
        [51.611569, 4.806688],
        [51.611141, 4.808643],
        [51.611238, 4.810843],
        [51.611335, 4.813042],
        [51.611431, 4.815242],
        [51.611528, 4.817441],
        [51.612681, 4.817827],
        [51.613833, 4.818213],
        [51.615458, 4.818084],
        [51.615229, 4.819865],
        [51.614999, 4.821646],
        [51.614769, 4.823427],
        [51.614539, 4.825208],
        [51.616165, 4.826238],
        [51.617177, 4.826753],
        [51.618136, 4.826667],
        [51.619056, 4.82626],
        [51.619975, 4.825852],
        [51.620428, 4.825895],
        [51.621545, 4.827433],
        [51.622663, 4.828972],
        [51.62378, 4.83051],
        [51.624897, 4.832048],
        [51.626014, 4.833586],
        [51.627132, 4.835125],
        [51.628249, 4.836663],
        [51.629366, 4.838201],
        [51.629087, 4.838759],
        [51.629087, 4.838759],
        [51.628993, 4.839177],
        [51.630372, 4.840347],
        [51.631751, 4.841516],
        [51.633129, 4.842686],
        [51.634508, 4.843855],
        [51.63551, 4.844799],
        [51.636512, 4.845743],
        [51.637514, 4.846688],
        [51.638516, 4.847632],
        [51.639518, 4.848576],
        [51.64052, 4.84952],
        [51.641522, 4.850464],
        [51.642524, 4.851408],
        [51.642524, 4.851408],
        [51.642777, 4.851226],
        [51.643803, 4.851269],
        [51.645126, 4.851647],
        [51.646449, 4.852025],
        [51.646972, 4.852298],
        [51.647235, 4.85298],
        [51.647434, 4.85394],
        [51.647504, 4.85608],
        [51.646529, 4.856247],
        [51.645973, 4.856182],
        [51.645793, 4.856719],
        [51.645607, 4.85821],
        [51.644488, 4.857481],
        [51.644242, 4.857384],
        [51.644116, 4.857277],
        [51.643766, 4.857202],
        [51.643646, 4.857019],
        [51.643024, 4.857051],
        [51.643037, 4.858081],
        [51.643224, 4.85821],
        [51.64317, 4.858768],
        [51.643184, 4.859208],
        [51.642651, 4.859508],
        [51.642884, 4.860624],
        [51.641882, 4.861703],
        [51.64088, 4.862781],
        [51.641086, 4.864272],
        [51.640926, 4.866761],
        [51.64066, 4.868467],
        [51.639968, 4.870414],
        [51.639275, 4.872361],
        [51.639222, 4.873016],
        [51.639388, 4.873756],
        [51.639415, 4.874797],
        [51.639249, 4.87617],
        [51.639249, 4.87617],
        [51.640112, 4.875494],
        [51.640974, 4.874818],
        [51.641836, 4.874142],
        [51.642698, 4.873466],
        [51.643377, 4.875044],
        [51.644056, 4.876621],
        [51.645161, 4.878423],
        [51.64618, 4.87793],
        [51.647198, 4.877436],
        [51.647558, 4.877082],
        [51.646712, 4.874797],
        [51.646328, 4.872834],
        [51.645943, 4.87087],
        [51.645559, 4.868907],
        [51.645174, 4.866943],
        [51.645121, 4.865055],
        [51.644935, 4.86307],
        [51.645334, 4.862298],
        [51.645407, 4.861708],
        [51.645274, 4.861697],
        [51.645347, 4.860656],
        [51.646353, 4.860699],
        [51.646819, 4.860528],
        [51.64825, 4.860509],
        [51.649682, 4.86049],
        [51.651113, 4.860471],
        [51.652544, 4.860452],
        [51.653203, 4.86086],
        [51.654308, 4.861617],
        [51.655412, 4.862373],
        [51.656784, 4.862427],
        [51.656784, 4.862427],
        [51.657609, 4.862394],
        [51.657862, 4.861386],
        [51.658155, 4.86115],
        [51.659167, 4.861493],
        [51.660178, 4.861836],
        [51.660444, 4.862266],
        [51.661509, 4.862593],
        [51.662574, 4.86292],
        [51.662787, 4.862791],
        [51.663789, 4.863194],
        [51.66479, 4.863596],
        [51.665123, 4.864004],
        [51.666585, 4.864602],
        [51.668047, 4.8652],
        [51.668223, 4.865377],
        [51.66838, 4.865393],
        [51.669331, 4.864545],
        [51.670574, 4.864296],
        [51.671817, 4.864047],
        [51.673344, 4.864219],
        [51.674871, 4.86439],
        [51.676249, 4.865101],
        [51.676249, 4.865101],
        [51.676973, 4.865559],
        [51.677791, 4.866428],
        [51.678609, 4.867297],
        [51.678723, 4.869432],
        [51.678576, 4.87072],
        [51.678546, 4.873064],
        [51.678516, 4.875408],
        [51.678683, 4.877951],
        [51.679821, 4.87778],
        [51.680958, 4.877608],
        [51.681004, 4.878337],
        [51.680565, 4.879759],
        [51.680126, 4.881181],
        [51.68138, 4.881578],
        [51.682634, 4.881974],
        [51.682834, 4.881567],
        [51.682914, 4.881577],
        [51.68304, 4.882286],
        [51.682933, 4.882843],
        [51.682172, 4.88375],
        [51.68141, 4.884657],
        [51.680925, 4.886041],
        [51.680439, 4.887425],
        [51.679954, 4.888809],
        [51.679468, 4.890193],
        [51.679481, 4.891158],
        [51.679069, 4.892703],
        [51.678656, 4.894248],
        [51.678809, 4.895868],
        [51.679025, 4.898062],
        [51.679241, 4.900256],
        [51.679241, 4.900256],
        [51.679348, 4.902509],
        [51.678989, 4.905267],
        [51.679009, 4.908131],
        [51.678896, 4.91047],
        [51.678789, 4.910642],
        [51.677815, 4.911425],
        [51.67684, 4.912208],
        [51.675999, 4.912745],
        [51.675157, 4.913281],
        [51.674651, 4.914193],
        [51.674545, 4.914998],
        [51.674391, 4.915255],
        [51.673919, 4.91533],
        [51.673833, 4.915534],
        [51.673793, 4.91592],
        [51.673507, 4.916028],
        [51.67354, 4.916489],
        [51.674897, 4.91621],
        [51.67507, 4.916339],
        [51.67515, 4.917251],
        [51.674598, 4.919016],
        [51.674046, 4.920781],
        [51.67348, 4.923377],
        [51.673041, 4.924407],
        [51.672442, 4.924847],
        [51.671344, 4.925265],
        [51.670057, 4.925947],
        [51.668769, 4.926628],
        [51.668024, 4.928677],
        [51.667558, 4.929396],
        [51.667345, 4.930319],
        [51.667066, 4.93049],
        [51.66664, 4.930372],
        [51.665149, 4.930598],
        [51.665229, 4.93125],
        [51.665229, 4.93125],
        [51.66477, 4.931542],
        [51.663922, 4.931789],
        [51.663275, 4.931518],
        [51.662561, 4.932318],
        [51.661552, 4.932606],
        [51.660218, 4.933175],
        [51.659191, 4.933344],
        [51.658595, 4.934262],
        [51.65727, 4.934658],
        [51.65727, 4.934658],
        [51.657026, 4.934637],
        [51.655922, 4.932947],
        [51.655482, 4.932668],
        [51.655163, 4.932759],
        [51.65479, 4.932615],
        [51.653925, 4.932813],
        [51.653539, 4.932631],
        [51.652499, 4.932843],
        [51.651459, 4.933054],
        [51.650713, 4.933398],
        [51.650646, 4.930952],
        [51.649994, 4.928763],
        [51.648496, 4.929176],
        [51.646998, 4.929589],
        [51.646998, 4.929589],
        [51.646772, 4.929042],
        [51.64603, 4.928114],
        [51.645287, 4.927185],
        [51.644545, 4.926256],
        [51.643803, 4.925327],
        [51.643061, 4.924399],
        [51.642318, 4.92347],
        [51.641576, 4.922541],
        [51.640833, 4.921612],
        [51.640091, 4.920684],
        [51.639348, 4.919755],
        [51.638606, 4.918826],
        [51.637864, 4.917897],
        [51.637122, 4.916969],
        [51.636379, 4.91604],
        [51.635637, 4.915111],
        [51.634894, 4.914182],
        [51.633822, 4.91297],
        [51.632537, 4.912058],
        [51.631251, 4.911146],
        [51.631251, 4.911146],
        [51.629593, 4.910159],
        [51.628494, 4.910406],
        [51.627395, 4.910653],
        [51.626569, 4.912713],
        [51.626449, 4.913882],
        [51.626449, 4.913882],
        [51.626463, 4.914957],
        [51.626676, 4.916352],
        [51.62711, 4.917447],
        [51.627031, 4.917704],
        [51.626072, 4.917511],
        [51.625899, 4.91735],
        [51.625806, 4.917296],
        [51.624082, 4.916771],
        [51.622762, 4.916245],
        [51.62169, 4.915784],
        [51.620465, 4.915253],
        [51.619998, 4.914878],
        [51.619452, 4.914245],
        [51.618959, 4.913494],
        [51.618249, 4.9125],
        [51.617676, 4.911889],
        [51.61697, 4.911481],
        [51.616455, 4.911483],
        [51.615842, 4.911655],
        [51.615229, 4.91217],
        [51.61401, 4.91328],
        [51.613103, 4.91415],
        [51.612195, 4.91502],
        [51.611568, 4.915621],
        [51.610309, 4.916554],
        [51.609371, 4.917137],
        [51.608433, 4.917719],
        [51.60745, 4.917798],
        [51.60745, 4.917798],
        [51.606557, 4.917948],
        [51.605465, 4.918302],
        [51.604372, 4.918656],
        [51.603432, 4.916403],
        [51.602492, 4.91415],
        [51.601799, 4.913313],
        [51.600733, 4.911511],
        [51.60118, 4.91002],
        [51.601626, 4.908528],
        [51.601806, 4.907069],
        [51.601986, 4.90561],
        [51.603172, 4.90355],
        [51.603479, 4.90355],
        [51.604332, 4.901726],
        [51.603945, 4.901791],
        [51.603639, 4.902241],
        [51.602772, 4.902606],
        [51.602173, 4.900825],
        [51.601573, 4.899044],
        [51.600973, 4.897263],
        [51.600373, 4.895482],
        [51.600171, 4.894667],
        [51.600171, 4.894667],
        [51.600123, 4.89451],
        [51.599603, 4.892926],
        [51.599135, 4.891539],
        [51.598666, 4.890152],
        [51.598034, 4.88826],
        [51.597402, 4.886368],
        [51.596878, 4.884591],
        [51.596686, 4.882461],
        [51.596494, 4.880331],
        [51.596869, 4.879085],
        [51.596916, 4.877545],
        [51.596963, 4.876004],
        [51.595982, 4.87605],
        [51.594629, 4.876149],
        [51.593658, 4.876084],
        [51.593663, 4.874228],
        [51.593667, 4.872372],
        [51.593686, 4.870609],
        [51.593705, 4.868845],
        [51.593765, 4.867189],
        [51.593825, 4.865532],
        [51.5935, 4.862796],
        [51.593455, 4.86109],
        [51.593455, 4.86109],
        [51.592379, 4.860981],
        [51.591343, 4.860852],
        [51.590782, 4.860026],
        [51.589631, 4.858264],
        [51.589217, 4.857981],
        [51.588969, 4.857556],
        [51.588798, 4.855937],
        [51.588566, 4.855533],
        [51.587152, 4.856036],
        [51.586824, 4.8564],
        [51.586824, 4.8564],
        [51.586334, 4.854698],
        [51.585671, 4.853092],
        [51.584837, 4.851022],
        [51.584201, 4.849435],
        [51.583486, 4.848512],
        [51.582569, 4.848166],
        [51.581717, 4.847661],
        [51.580663, 4.846069],
        [51.57964, 4.844449],
        [51.578242, 4.842886],
        [51.577487, 4.842062],
        [51.57739, 4.842077],
        [51.57739, 4.842077],
        [51.577083, 4.840679],
        [51.57673, 4.839188],
        [51.576376, 4.837697],
        [51.576096, 4.837525],
        [51.575269, 4.838373],
        [51.574442, 4.83922],
        [51.574042, 4.83782],
        [51.573642, 4.83642],
        [51.573242, 4.83502],
        [51.572842, 4.83362],
        [51.572242, 4.832654],
        [51.571042, 4.831967],
        [51.571769, 4.830433],
        [51.572495, 4.828899],
        [51.572457, 4.826822],
        [51.572457, 4.826822],
        [51.57246, 4.825565],
        [51.572381, 4.823353],
        [51.572302, 4.82114],
        [51.57288, 4.818877],
        [51.573457, 4.816614],
        [51.573941, 4.815216],
        [51.574425, 4.813818],
        [51.574814, 4.812317],
        [51.575203, 4.810815],
        [51.57592, 4.809393],
        [51.576636, 4.807971],
        [51.577519, 4.807096],
        [51.578401, 4.80622],
        [51.579329, 4.805484],
        [51.580257, 4.804747],
        [51.581591, 4.803865],
        [51.582924, 4.802983],
        [51.583981, 4.801789],
        [51.585038, 4.800594],
        [51.585876, 4.79839],
        [51.586101, 4.796721],
        [51.586326, 4.795052],
        [51.586555, 4.792873],
        [51.586784, 4.790693],
        [51.587012, 4.788514],
        [51.587241, 4.786334],
        [51.587241, 4.786334],
        [51.588082, 4.786964],
        [51.588923, 4.787593],
        [51.59019, 4.788301],
        [51.591456, 4.789009],
        [51.592096, 4.789052],
        [51.592576, 4.788558],
        [51.59292, 4.787877],
    ];
}

export function getExistingLocations(): WLocation[] {
    if (window.localStorage.getItem("foundLocations") === null) {
        window.localStorage.setItem("foundLocations", "[]");
    }
    var json = JSON.parse(window.localStorage.getItem("foundLocations") || "");
    // var json = getLocations();

    return (json as WLocation[]);
}

export function purgeLocations(): void {
    window.localStorage.setItem("foundLocations", "[]");
}

export function getFirstLocation(): WLocation {
    return {
        id: "introduction",
        coordinates: {
            latitude: 0,
            longitude: 0
        },
        description: "Lief bruidspaar, \n\nDit cadeau is een beetje anders dan anders. We wilden graag iets voor jullie verzinnen, wat leuk is om te krijgen, én leuk is om te doen.\nDaarom sturen we jullie op een verrassingsfietstocht! \n\nIn de fietstassen zitten een aantal ingepakte cadeautjes, deze mogen jullie nu al uitpakken. Sommige cadeautje zullen handig zijn om mee te nemen voor onderweg, anderen zijn gewoon voor de leuk 😀. \nDe tasjes die in de fietstassen zitten, mogen jullie nog niet openmaken. Deze moeten in de fietstassen blijven en gaan met jullie mee op avontuur. \n\n<b>Hoe werkt het?</b>\n\nJullie mogen zelf een mooie dag uitkiezen waarop jullie zin hebben een stuk te gaan fietsen. Bevestig de fietstassen op je fiets (met daarin in ieder geval de genummerde tasjes) en maak natuurlijk even een foto. Deze website zal jullie guide zijn voor een leuke fietsroute rond Breda. De knooppunten die jullie gaan volgen zijn: 78, 91, 02, 04, 87, 01, 29, 28, 05, 03, 30, 52, 40, 88, 87, 86, 85, 81, 80. Als je op de open secret knop onderin drukt, opent hij Google Maps naar de eerste locatie.\n\nOp de website kan je de rest van de route zien die jullie vandaag gaan fietsen. Elk punt dat op de kaart staat zal een geheim bevatten die je alleen kan openen als je bij het punt bent (zorg ervoor dat deze pagina je locatie mag gebruiken).\nAls je een geheim gelezen hebt, kan je op de (❌) rechts bovenin klikken om hem te sluiten.\n\n<b>Een aantal aandachtspuntjes van tevoren:</b>\n - Zorg dat je telefoon opgeladen is en dat je voldoende internet hebt;\n - Zet je locatievoorziening op je telefoon aan;\n - Neem voor de zekerheid een opgeladen powerbank (+kabeltje) mee;\n - Vertrek op tijd – jullie hebben ongeveer 3,5 uur nodig voor de fietstocht zelf, met stops ongeveer 4,5 uur. \n\nVeel succes, plezier en gefeliciteerd met jullie huwelijk!\n\nLiefs, \n\nDe neefjes & nichtjes \n",
        title: "Click me!",
        link: "https://www.google.com/maps/dir//51.6103228,4.7899855/@51.6102839,4.789439,18z"
    }
}