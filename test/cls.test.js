const assert = require('assert');

class Car{
	park(){
		return 'stopped';
		}
	drive(){
		return 'vroom';
		}
}

describe('Car action', () =>{
	it('car park',() =>{
		const car = new Car();
		assert.equal(car.park(), 'stopped');
});
	it('car driven',() =>{
		const car = new Car();
		assert.equal(car.drive(), 'vroom');
});
});
