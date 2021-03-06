// Initiate the program after DOM is loaded
var init = () => {
  const SDE_Program = new Main();
};

// Load the program after when the browser is ready
window.addEventListener("load", init);

class Main {

  private meats: Meat[];

  public constructor() {
      this.meats = [];

      for (let i = 0; i < this.randomNumber(3, 10); i++) {
          this.meats.push(
              new Beef("Beef","Red", this.randomNumber(400, 600)
              )
          );
      }

      this.logMeats();
  };

  private logMeats () {
      meats.forEach(element => console.log(element));
  }

  private randomNumber(min: number, max: number): number {
      return Math.round(Math.random() * (max - min) + min);
  }
}

abstract class Meat {
  protected name: string;
  protected colour: string;
  protected weight: Number;

  constructor(name: string, colour: string, weight: number) {
      this.name = name;
      this.colour = colour;
      this. weight = weight;
  }

  public getName (): string {
      return this.name;
  }

  public getColour (): string {
      return this.colour;
  }

  public getWeight (): number {
      return this.weight;
  }
}

class Beef extends Meat {
         */

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(name: string, colour: string, weight: number) {
        if (!Meat.instance) {
            Meat.instance = new Meat(name: string, colour: string, weight: number);
        }

        return Meat.instance;
    }

  constructor(name: string, colour: string, weight: number) {
       super(name, colour, weight);
   }
}
class Steak {
    constructor() {
      this.operations = function(term1, term2, operation) {
        switch (operation) {
          case 'add':
            return term1 + term2;
          case 'sub':
            return term1 - term2;
          default:
            return NaN;
        }
      };
    }
  }
  class Chicken {
    constructor() {
      this.add = function(term1, term2) {
        return term1 + term2;
      };
      this.sub = function(term1, term2) {
        return term1 - term2;
      };
    }
  }
  
  // Adapter Class
  class PriceAdapter {
    constructor() {
      const newMeat = new Chicken();
  
      this.operations = function(term1, term2, operation) {
        switch (operation) {
          case 'add':
            // using the new implementation under the hood
            return newMeat.add(term1, term2);
          case 'sub':
            return newMeat.sub(term1, term2);
          default:
            return NaN;
        }
      };
    }
  }
  
  class MeatCreator {
    
    public createDefaultMeat () {
      return Meat.getInstance("Angus", "Red", 500)
    }
    
    public createMeat (name, colour, weight) {
      return Meat.getInstance(this.name, this.colour, this.weight)
    }
  }

  // usage
  const oldMeat = new Steak();
  console.log(oldMeat.operations(10, 5, 'add')); // 15
  
  const newMeat = new Chicken();
  console.log(newMeat.add(10, 5)); // 15
  

  
  const adaptedMeat = new Steacken();
  console.log(adaptedMeat.operations(10, 5, 'add')); // 15;
