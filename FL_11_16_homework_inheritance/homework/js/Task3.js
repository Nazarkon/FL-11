function Pokémon() {
    this.getType = () => {
        return this.type;
    }
    this.getSpecie = () => {
        return this.species;
    }
    this.canFly = () => {
        if (this.Fly) {
            return this.Fly;
        } else {
            return false
        }
    }
    this.getPokemonType = () => {
        return this.name;
    }
}

function Charmander() {
    Pokémon.call(this, Charmander)
    this.name = 'Charmander';
    this.type = 'Fire';
    this.species = 'Lizard Pokémon';
    this.evolve = () => new Charmeleon();
}

function Charmeleon() {
    Pokémon.call(this, Charmeleon)
    this.name = 'Charmeleon';
    this.type = 'Fire';
    this.species = 'Flame Pokémon';
    this.evolve = () => new Charizard();
}

function Charizard() {
    Pokémon.call(this, Charizard)
    this.name = 'Charizard';
    this.type = 'Fire';
    this.species = 'Flame Pokémon';
    this.Fly = true;
    this.evolve = () => this;
}
const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();

console.log(charmander.getType());
console.log(charmander.getType() === charmeleon.getType());
console.log(charmeleon.getType() === charizard.getType());

console.log(charmander.evolve().constructor === Charmeleon);
console.log(charmeleon.evolve().constructor === Charizard);

console.log(charmander.getSpecie());
console.log(charmeleon.getSpecie());
console.log(charizard.getSpecie() === charmeleon.getSpecie());

console.log(charmander.canFly());
console.log(charmander.canFly() === charmeleon.canFly());
console.log(charizard.canFly());



function Pichu() {
    Pokémon.call(this, Pichu);
    this.name = 'Pichu';
    this.type = 'Electric';
    this.specie = 'Mouse Pokémon';
    this.evolve = () => new Pikachu();
}

function Pikachu() {
    Pokémon.call(this, Pikachu);
    this.name = 'Pikachu';
    this.type = 'Electric';
    this.specie = 'Mouse Pokémon';
    this.evolve = () => new Raichu();
}

function Raichu() {
    Pokémon.call(this, Raichu);
    this.name = 'Raichu';
    this.type = 'Electric';
    this.specie = 'Mouse Pokémon';
    this.evolve = () => this;
}

let pichu = new Pichu();
let pikachu = new Pikachu();
let raichu = new Raichu();

console.log(pichu.getPokemonType());

pikachu = pichu.evolve();
console.log(pikachu.getPokemonType());
console.log(pikachu.constructor === Pikachu);

raichu = pikachu.evolve();
console.log(raichu.getPokemonType());
console.log(raichu.constructor === Raichu);

let raichu2 = raichu.evolve();
console.log(raichu2 === raichu);