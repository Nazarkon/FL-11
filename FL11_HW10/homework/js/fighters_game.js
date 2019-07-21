let maxHp = 100;
let minHp = 0;
let wins = 0;
let lose = 0;
let currhp = 100;
class Fighter {
    constructor(object) {

        this.getName = () => object.name,
            this.getDamage = () => object.damage,
            this.getAgility = () => object.agility,
            this.gethp = () => currhp,
            this.addWin = function () {
                wins += 1;
            },
            this.addLose = function () {
                lose += 1;
            }
        this.attack = (fighterAttack) => {
            let interest = 100;
            let between = interest - fighterAttack.getAgility();
            if (Math.random() * interest < between) {
                let damageValue = object.damage;
                this.dealDamage(damageValue);
                return console.log(this.getName() + ' give ' + this.getDamage() + ' damage ');
            } else {
                return console.log('missed');
            }
        }
        this.dealDamage = function (damagevl) {

            if (currhp <= minHp) {
                currhp = minHp;
            } else {
                currhp -= damagevl
            }
        }
        this.logCombatHistory = function () {
            console.log(`Name: ${this.getName()} Wins: ${wins} Lose:${lose}`);
        }
    }
}
let battle = (Fighter1, Fighter2) => {
    Fighter1.attack(Fighter2);
    Fighter2.attack(Fighter1);
    if (Fighter1.gethp() === 0) {
        Fighter1.addWin();
        Fighter1.addLose();
        console.log(`You lose ${Fighter1.getName()}`);
    } else if (Fighter2.gethp() === 0) {
        Fighter2.addWin();
        Fighter2.addLose();
        console.log(`You lose ${Fighter2.getName()}`);
    } else {
        battle(Fighter1, Fighter2);
    }
}
const Fighter1 = new Fighter({
    name: 'John',
    damage: 40,
    agility: 25,
    hp: 100
});
const Fighter2 = new Fighter({
    name: 'Jim',
    damage: 20,
    agility: 5,
    hp: 100
});
battle(Fighter1, Fighter2);