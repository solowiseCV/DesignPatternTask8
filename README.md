# Telephone Package

## Replit Link for the project (read the readme file here first before going to replit thanks)
[Click here to run the interactive version of this project on replit ](https://replit.com/@uchesolomon61/javascriptDesignPatternsTask8#index.js)
- Or clone this repo to view and run the static but direct to the task version on your local machine


## About the project
This project implements a simple telephone package in JavaScript, showcasing design patterns such as the observer pattern. The telephone package includes functionality to add, remove, and dial phone numbers, with the ability to notify observers whenever a phone number is dialed.



## Features

- AddPhoneNumber: Add a new phone number to the telephone.
- RemovePhoneNumber: Remove a phone number from the telephone.
- DialPhoneNumber: Dial a phone number (only added phone numbers can be dialed).
- Observer Pattern: Utilizes the observer pattern to notify observers when a phone number is dialed.

## Implementation

The project consists of the following classes:

- **Observer**: Base class for observers, with a default `update` method.
- **ConcreteObserver1**: Concrete observer class that prints the dialed phone number.
- **ConcreteObserver2**: Another concrete observer class that prints a custom message when dialing.

- **Telephone**: Main class implementing the telephone package with methods for adding, removing, and dialing phone numbers. It also manages a list of observers and notifies them when a phone number is dialed.

## Usage

```javascript
// Example Usage

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