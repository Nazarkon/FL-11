function Hamburger(type, calories, option) {
    this.type = type;
    this.option = option;
    let tomato = 0;
    let IsCheeseAdded = false;
    let IsTomatoAdded = false;
    let IsSecretIngredient = false;
    let checkTomato = 0;
    let checkCheese = 0;
    let bite = 0;

    this.getCalories = () => {
        this.calories = calories;
        console.log(this.calories);

    }
    this.setCalories = (item) => {
        this.calories = calories;
        calories = item;
    }
    this.addCheese = () => {
        let cheese = 0;
        cheese += 1;
        if (IsCheeseAdded === true) {
            console.log('Sorry , you cannot add cheese');
        } else if (cheese === 1) {
            checkCheese += 1;
            this.calories = calories;
            calories += 120;
        }
    }
    this.addTomato = () => {
        tomato += 1;
        if (IsTomatoAdded === true) {
            console.log('Sorry , you cannot add tomato');
        } else if (tomato <= 2) {
            checkTomato += 1
            this.calories = calories;
            calories += 20;
        } else {
            console.log('Sorry,you can add tomato only twice.');
        }
    }
    this.addSecretIngredient = () => {
        if (IsSecretIngredient === true) {
            console.log('Sorry,you cannot add secret ingredient');
        } else if (checkCheese >= 1 || checkTomato >= 1) {
            console.log('Sorry you can add secret ingredient only before another ingredient');
        } else if (option === true) {
            console.log('Sorry you can add secret ingredient only once');
        } else {
            option = true;
            this.calories = calories;
            calories += 100;
        }
    }
    this.bite = () => {
        IsTomatoAdded = true;
        IsCheeseAdded = true;
        IsSecretIngredient = true;
        bite++;
    }
    this.info = () => {

        return `${this.type} hamburger: with secret ingredient, with cheese,
        with ${tomato},is bit ${bite} times.Total calories: ${calories}`
    }
}

const myHamburger = new Hamburger('classic', 600, false);
console.log(myHamburger)