class Fighter {
    constructor(object){
      this.name = object.name;
      this.damage = object.damage;
      this.agility = object.agility,
      this.hp = object.hp
    }
    getName(){
        return this.name;
    }
    getDamege(){
        return this.damage;
    }
    getAgility(){
        return this.agility;
    }
    gethp(){
        return this.hp;
    }
}
const Fighter1 = new Fighter({name:'John',damage:20,agility:25,hp:100});
const Fighter2 = new Fighter({name:'Jim',damage:10,agility:40,hp:120});
console.log(Fighter1)
console.log(Fighter2)
