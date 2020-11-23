let menu = {
  _courses: {
  appetizers: [
  
  ],
  mains: [
  
  ],
  desserts: [
  
  ],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizersIn) {
    this._courses.appetizers = appetizersIn;
  },
  set mains(mainsIn) {
    this._courses.mains = mainsIn;
  },
  set desserts(dessertsIn) {
    this._courses.desserts = dessertsIn;
  },
  get courses(){
  return {
  appetizers: this.appetizers,
  mains: this.mains,
  desserts: this.desserts,
  };
  },
  addDishToCourse(courseName, dishName, dishPrice){
  let dish = {
    name: dishName,
    price: dishPrice,
  }
  this._courses[courseName].push(dish); 
  },
  getRandomDishFromCourse(courseName){
  let dishes = this._courses[courseName];
  return dishes[Math.floor(Math.random() * dishes.length)];
  },
  generateRandomMeal(){
  let appetizer = this.getRandomDishFromCourse('appetizers')
  let main = this.getRandomDishFromCourse('mains')
  let dessert = this.getRandomDishFromCourse('desserts')
  let totalPrice = appetizer.price + main.price + dessert.price;
  return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is $${totalPrice}.`;
  },
  };
  
  
  menu.addDishToCourse("appetizers", "salad", 3.0);
  menu.addDishToCourse("appetizers", "mini Pizza", 2.0);
  menu.addDishToCourse("appetizers", "Brusqueta", 4.0);
  menu.addDishToCourse("mains", "pasta", 5.0);
  menu.addDishToCourse("mains", "big pizza", 5.0);
  menu.addDishToCourse("mains", "meat balls", 6.0);
  menu.addDishToCourse("desserts", "ice cream", 3.0);
  menu.addDishToCourse("desserts", "Cake", 3.0);
  menu.addDishToCourse("desserts", "Lemon Pie", 3.0);
  

  let meal = menu.generateRandomMeal();
  console.log(meal);


