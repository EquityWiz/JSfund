class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName()
    {
        console.log(`My name is ${ this.name }`);
    }
    showStats()
    {
        console.log(`Name: ${this.name}\n Health: ${this.health}\n Strength: ${this.strength}\n Speed: ${this.speed}`)
    }
    drinkSake()
    {
        return this.health += 20;
    }
}
// const ninjaOne = new Ninja("Hyabusa", 100);
// ninjaOne.sayName()
// ninjaOne.drinkSake()
// ninjaOne.showStats()

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200)
        this.strength = 10
        this.speed = 10
        this.wisdom = 10;
    }
    speakWisdom()
    {
        super.drinkSake();
        console.log("I'm wise...")
    }
}
const mrSensei = new Sensei("Mr. Sensei")
mrSensei.sayName();
mrSensei.speakWisdom();
mrSensei.showStats();