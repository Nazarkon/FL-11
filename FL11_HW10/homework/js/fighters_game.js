class Fighter {

    constructor(object) {
        let maxHp = 100;
        let minHp = 0;
        let wins = 0;
        let lose = 0;
        let currhp = object.hp;
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
            this.heal = function (healpoints) {
                if (currhp >= maxHp) {
                    currhp = maxHp;
                }else{
                    currhp +=healpoints;
                }
            }
        this.attack = (fighterAttack) => {
            let interest = 100;
            let between = interest - fighterAttack.getAgility();
            if (Math.random() * interest < between) {
                let damageValue = object.damage;
            console.log(this.getName() + ' give ' + this.getDamage() + ' damage ' + 'to ' + fighterAttack.getName());
                Fighter2.dealDamage(damageValue);
            } else {
                console.log(this.getName() + ' missed');
            }
        }
        this.dealDamage = function (damagevl) {

            if (this.gethp() <= minHp) {
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
        Fighter2.addWin();
        Fighter1.addLose();
        console.log(`You lose ${Fighter1.getName()}`);
    } else if (Fighter2.gethp() === 0) {
        Fighter1.addWin();
        Fighter2.addLose();
        console.log(`You lose ${Fighter2.getName()}`);
    } else {
        battle(Fighter1, Fighter2);
    }
}
const Fighter1 = new Fighter({
    name: 'John',
    damage: 20,
    agility: 70,
    hp: 100
});
const Fighter2 = new Fighter({
    name: 'Jim',
    damage: 50,
    agility: 5,
    hp: 120
});
battle(Fighter1, Fighter2);