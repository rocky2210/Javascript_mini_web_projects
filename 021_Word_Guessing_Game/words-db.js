let wordList = [
    {
        word: "sun",
        hint: "the star at the center of the solar system"
    },
    {
        word: "mercury",
        hint: "the closest planet to the sun"
    },
    {
        word: "venus",
        hint: "the second planet from the sun"
    },
    {
        word: "earth",
        hint: "the third planet from the sun, the only known planet to support life"
    },
    {
        word: "mars",
        hint: "the fourth planet from the sun, often called the 'Red Planet'"
    },
    {
        word: "jupiter",
        hint: "the largest planet in the solar system"
    },
    {
        word: "saturn",
        hint: "the sixth planet from the sun, known for its rings"
    },
    {
        word: "uranus",
        hint: "the seventh planet from the sun, tilted on its side"
    },
    {
        word: "neptune",
        hint: "the eighth planet from the sun, known for its blue color"
    },
    {
        word: "pluto",
        hint: "formerly considered the ninth planet from the sun, now classified as a dwarf planet"
    },
    {
        word: "moon",
        hint: "a natural satellite that orbits a planet"
    },
    {
        word: "meteor",
        hint: "a small body of matter from outer space that enters the Earth's atmosphere, appearing as a streak of light"
    },
    {
        word: "comet",
        hint: "a small celestial body consisting of ice, rock, and dust that orbits the sun"
    },
    {
        word: "satellite",
        hint: "an object that orbits a planet, moon, or other celestial body"
    },
    {
        word: "banana",
        hint: "yellow fruit"
    },
    {
        word: "apple",
        hint: "red or green fruit"
    },
    {
        word: "orange",
        hint: "citrus fruit"
    },
    {
        word: "grape",
        hint: "small round fruit, often used to make wine"
    },
    {
        word: "strawberry",
        hint: "red fruit with small seeds on the surface"
    },
    {
        word: "kiwi",
        hint: "brown, fuzzy fruit with green flesh"
    },
    {
        word: "watermelon",
        hint: "large fruit with green skin and red flesh, often eaten in the summer"
    },
    {
        word: "pineapple",
        hint: "tropical fruit with spiky skin and sweet yellow flesh"
    },
    {
        word: "pear",
        hint: "fruit with a sweet, juicy flesh and thin skin"
    },
    {
        word: "peach",
        hint: "soft, fuzzy fruit with a stone in the middle"
    },
    {
        word: "mango",
        hint: "tropical fruit with sweet, juicy flesh and large flat seed"
    },
    {
        word: "cherry",
        hint: "small, round fruit, often red or dark purple"
    },
    {
        word: "blueberry",
        hint: "small, round fruit, often blue in color and used in baking"
    },
    {
        word: "plum",
        hint: "round fruit with a juicy interior, often purple or red"
    },
    {
        word: "apricot",
        hint: "small, orange fruit with a velvety skin and a large stone"
    },
    {
        word: "lemon",
        hint: "yellow citrus fruit with a sour taste"
    },
    {
        word: "lime",
        hint: "small, green citrus fruit, often used in drinks"
    },
    {
        word: "fig",
        hint: "soft, pear-shaped fruit with sweet, dark flesh and many seeds"
    },
    {
        word: "pomegranate",
        hint: "round fruit with a tough outer skin and juicy seeds inside"
    },
    {
        word: "coconut",
        hint: "large fruit with a hard, brown shell and sweet, white flesh"
    },
    {
        word: "astronaut",
        hint: "person trained for spaceflight"
    },
    {
        word: "spaceship",
        hint: "vehicle designed for travel in outer space"
    },
    {
        word: "galaxy",
        hint: "huge collection of stars, gas, and dust bound together by gravity"
    },
    {
        word: "blackhole",
        hint: "region of spacetime where gravity is so strong that nothing, not even light, can escape"
    },
    {
        word: "nebula",
        hint: "large cloud of gas and dust in space"
    },
    {
        word: "comet",
        hint: "small celestial body consisting of ice, rock, and dust"
    },
    {
        word: "meteoroid",
        hint: "small rock or particle in space"
    },
    {
        word: "supernova",
        hint: "explosion of a massive star at the end of its life cycle"
    },
    {
        word: "constellation",
        hint: "group of stars forming a recognizable pattern"
    },
    {
        word: "telescope",
        hint: "instrument used to observe distant objects in space"
    },
    {
        word: "orbit",
        hint: "path that an object follows as it travels around another object in space"
    },
    {
        word: "satellite",
        hint: "object that orbits a planet or other celestial body"
    },
    {
        word: "space station",
        hint: "habitable artificial satellite in low Earth orbit"
    },
    {
        word: "exoplanet",
        hint: "planet that orbits a star outside the solar system"
    },
    {
        word: "asteroid",
        hint: "small rocky body that orbits the Sun, typically found in the asteroid belt between Mars and Jupiter"
    },
    {
        word: "cosmos",
        hint: "universe seen as a well-ordered whole"
    },
    {
        word: "space probe",
        hint: "unmanned spacecraft sent from Earth to explore outer space"
    },
    {
        word: "cosmonaut",
        hint: "Russian term for astronaut"
    },
    {
        word: "rover",
        hint: "vehicle designed to move across the surface of a planet or other celestial body"
    },
    {
        word: "gravity",
        hint: "force that attracts objects toward each other"
    },
    {
        word: "energy",
        hint: "the ability to do work"
    },
    {
        word: "acceleration",
        hint: "rate of change of velocity"
    },
    {
        word: "velocity",
        hint: "speed in a given direction"
    },
    {
        word: "momentum",
        hint: "product of an object's mass and velocity"
    },
    {
        word: "force",
        hint: "push or pull on an object"
    },
    {
        word: "kinetic",
        hint: "related to motion"
    },
    {
        word: "potential",
        hint: "stored energy"
    },
    {
        word: "friction",
        hint: "force that opposes motion between surfaces"
    },
    {
        word: "work",
        hint: "product of force and distance"
    },
    {
        word: "power",
        hint: "rate at which work is done"
    },
    {
        word: "inertia",
        hint: "tendency of an object to resist changes in motion"
    },
    {
        word: "torque",
        hint: "a measure of how much a force acting on an object causes that object to rotate"
    },
    {
        word: "electricity",
        hint: "form of energy resulting from the existence of charged particles"
    },
    {
        word: "magnetism",
        hint: "force exerted by magnets"
    },
    {
        word: "wave",
        hint: "disturbance that travels through space and matter"
    },
    {
        word: "frequency",
        hint: "number of complete wavelengths that pass a point in a given time"
    },
    {
        word: "quantum",
        hint: "smallest possible discrete unit of any physical property"
    },
    {
        word: "gold",
        hint: "precious metal, symbol Au"
    },
    {
        word: "silver",
        hint: "precious metal, symbol Ag"
    },
    {
        word: "iron",
        hint: "metal used in construction and manufacturing, symbol Fe"
    },
    {
        word: "copper",
        hint: "metal used in electrical wiring and plumbing, symbol Cu"
    },
    {
        word: "aluminum",
        hint: "lightweight metal used in various applications, symbol Al"
    },
    {
        word: "lead",
        hint: "heavy metal, symbol Pb"
    },
    {
        word: "zinc",
        hint: "metal used in alloys and as a dietary supplement, symbol Zn"
    },
    {
        word: "nickel",
        hint: "metal used in alloys and coins, symbol Ni"
    },
    {
        word: "tin",
        hint: "metal used in alloys and soldering, symbol Sn"
    },
    {
        word: "mercury",
        hint: "liquid metal at room temperature, symbol Hg"
    },
    {
        word: "platinum",
        hint: "precious metal, symbol Pt"
    },
    {
        word: "titanium",
        hint: "strong, lightweight metal used in aerospace and medical applications, symbol Ti"
    },
    {
        word: "magnesium",
        hint: "metal used in alloys and as a dietary supplement, symbol Mg"
    },
    {
        word: "uranium",
        hint: "radioactive metal used as fuel in nuclear reactors, symbol U"
    },
    {
        word: "chromium",
        hint: "metal used in stainless steel and chrome plating, symbol Cr"
    },
    {
        word: "cobalt",
        hint: "metal used in alloys and in batteries, symbol Co"
    },
    {
        word: "tungsten",
        hint: "hard, dense metal used in electrical filaments and armor-piercing ammunition, symbol W"
    },
    {
        word: "cadmium",
        hint: "toxic metal used in batteries and as a pigment, symbol Cd"
    },
    {
        word: "bismuth",
        hint: "metal used in alloys and medications, symbol Bi"
    },
    {
        word: "rhodium",
        hint: "rare, precious metal used in jewelry and catalytic converters, symbol Rh"
    },
    {
        word: "atom",
        hint: "smallest unit of matter"
    },
    {
        word: "element",
        hint: "substance made up of only one type of atom"
    },
    {
        word: "compound",
        hint: "substance made up of two or more elements chemically combined"
    },
    {
        word: "reactant",
        hint: "substance that undergoes change in a chemical reaction"
    },
    {
        word: "product",
        hint: "substance formed as a result of a chemical reaction"
    },
    {
        word: "acid",
        hint: "substance that donates a proton or accepts an electron pair in reactions"
    },
    {
        word: "base",
        hint: "substance that accepts protons or releases hydroxide ions in reactions"
    },
    {
        word: "pH",
        hint: "measure of the acidity or basicity of a solution"
    },
    {
        word: "mole",
        hint: "unit of measurement used in chemistry to express amounts of a substance"
    },
    {
        word: "bond",
        hint: "force that holds atoms together in molecules"
    },
    {
        word: "oxidation",
        hint: "loss of electrons in a chemical reaction"
    },
    {
        word: "reduction",
        hint: "gain of electrons in a chemical reaction"
    },
    {
        word: "isotope",
        hint: "atoms of the same element with different numbers of neutrons"
    },
    {
        word: "valence",
        hint: "number of bonds an atom can form"
    },
    {
        word: "ionic",
        hint: "type of chemical bond formed through the transfer of electrons"
    },
    {
        word: "covalent",
        hint: "type of chemical bond formed through the sharing of electrons"
    },
    {
        word: "equilibrium",
        hint: "state of a reversible chemical reaction where the forward and reverse reactions occur at equal rates"
    }
]