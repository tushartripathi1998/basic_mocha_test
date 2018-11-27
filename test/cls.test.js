const assert = require('assert');

class Car{
	park(){
		return 'stopped';
		}
	drive(){
		return 'vroom';
		}
}

let car;

beforeEach(()=>{
car = new Car();
});

describe('Car action', () =>{
	it('car park',() =>{
		assert.equal(car.park(), 'stopped');
});
	it('car driven',() =>{
		assert.equal(car.drive(), 'vroom');
});
});
