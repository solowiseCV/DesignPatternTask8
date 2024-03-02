class Telephone{
  constructor(){
    this.phoneNumbers = [];
    this.observers = [];
  }
  addPhoneNumber(number){
    this.phoneNumbers.push(number);
  }
  removePhoneNumber(number){
    const index = this.phoneNumbers.indexOf(number);
    if(index !== -1)
    {
      this.phoneNumbers.splice(index,1);
    }  }
  dialPhoneNumber(number){
    if(this.phoneNumbers.includes(number)){
      this.notifyObservers( number);
    }
    else{
      this.notifyObservers(number + ' is not in your contacts');
    }
  }
  nofityObservers(message){
    this.observers.forEach(observer => observer.update(message));
  }
  addObserver(observer){
    this.observers.push(observer);
  }
  removeObserver(observer){
    const index = this.observers.indexOf(observer);
    if(index !== -1)
    {
      this.observers.splice(index,1);
    }
  }
  notifyObservers(phoneNumber){
    this.observers.forEach(observer => observer.update(phoneNumber));
  }
}
class Observer{
  update(phoneNumber){
    console.log("Dialing the number", phoneNumber);
  }
}
class ConcreteObserver1 extends Observer{
  update(phoneNumber){
    console.log("Dialed", phoneNumber);
  }
}
class ConcreteObserver2 extends Observer{
  update(phoneNumber){
    console.log("Now Dialing", phoneNumber);
  }
}
const telephone = new Telephone();
const observer1 = new ConcreteObserver1();
const observer2 = new ConcreteObserver2();
telephone.addObserver(observer1);
telephone.addObserver(observer2);
telephone.addPhoneNumber('+2347023232');
telephone.dialPhoneNumber('+2347023232');
telephone.removePhoneNumber('+2347023232');
telephone.dialPhoneNumber('+2347023232');
telephone.dialPhoneNumber('+2347023232');
