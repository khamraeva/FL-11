let people = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];
function getNumbers(str) {
	const numArray = [];
	for(let i = 0; i < str.length; i++) {
		if (!isNaN(+str[i])) {			
			numArray.push(+str[i]);
		}
	}
	return numArray;
}
getNumbers('string');
getNumbers('n1um3ber95');
function findTypes() {
	let object = {};
	for(let i = 0; i < arguments.length; i++) {
		let key = typeof arguments[i];	
		if (object.hasOwnProperty(key)) {
			object[key] += 1;
		} else {
			object[key] = 1;
		}
	}
	return object;
}
findTypes('number');
findTypes(null, 5, 'hello', 6);
//2 executeforEach
function executeforEach(array, fn) {
	for(let i = 0; i < array.length; i++) {
		fn(array[i]);
	}
}
function mapArray(array, fn) {
	let newArray = [];
	executeforEach(array, function(el) {
		newArray.push(fn(el));
	});
	return newArray;
}
mapArray([2, 5, 8], function(el) { 
  return el + 3;
}); 
function filterArray(array, fn) {
	let newArray = [];
	executeforEach(array, function(el) {
		if (fn(el)) {
			newArray.push(el);
		}
	});
	return newArray;
}
filterArray([2, 5, 8], function(el) { 
  return el > 3; 
}); 
function showFormattedDate(time) {
	let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	let year = time.getFullYear();
	let month = monthNames[time.getMonth()];
	let day = time.getDate();
	return `Date: ${month} ${day} ${year}`;
}
showFormattedDate(new Date('2019-01-27T01:10:00')); 
function canConvertToDate(date) {
	return new Date(date).toString() !== 'Invalid Date';
}
canConvertToDate('2016-13-18T00:00:00');
canConvertToDate('2016-03-18T00:00:00');
function daysBetween(firstDate, secondDate) {
	return Math.round((secondDate - firstDate) / 1000 / 60 / 60 / 24);
}
daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));
function getAmountOfAdultPeople() {
  let today = new Date();
	let adultPeople = filterArray(people, function(el) { 
		return daysBetween(new Date(el[' birthday ']), today) > 18 * 365 + 4;
	}); 
  return adultPeople.length;
}
getAmountOfAdultPeople(people);
function keys(object) {
  let array = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      array.push(key);
    }
  }
  return array;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});
function values(object) {
  let array = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      array.push(object[key]);
    }
  }
  return array;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});