import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('should add movies to the cart', () => {
  const cart = new Cart();
  const movie = new Movie(134, 'Мстители', 2012, 'США', 'Avengers Assemble', 'Фантастика', 137, 3500);
  cart.add(movie);

  expect(cart.items.length).toBe(1);
});

test('should calculate the total cost', () => {
  const cart = new Cart();
  const movieOne = new Movie(134, 'Мстители', 2012, 'США', 'Avengers Assemble', 'Фантастика', 137, 3500);
  const movieTwo = new Movie(133, 'Мстители', 2012, 'США', 'Avengers Assemble', 'Фантастика', 137, 3500);
  const movieThree = new Movie(132, 'Мстители', 2012, 'США', 'Avengers Assemble', 'Фантастика', 137, 3500);
  cart.add(movieOne);
  cart.add(movieTwo);
  cart.add(movieThree);
  
  expect(cart.total()).toBe(10500);
});

test('should calculate the total cost with a discount', () => {
  const cart = new Cart();
  const movieOne = new Movie(134, 'Мстители', 2012, 'США', 'Avengers Assemble', 'Фантастика', 137, 3500);
  const movieTwo = new Movie(133, 'Мстители', 2012, 'США', 'Avengers Assemble', 'Фантастика', 137, 3500);
  const movieThree = new Movie(132, 'Мстители', 2012, 'США', 'Avengers Assemble', 'Фантастика', 137, 3500);
  cart.add(movieOne);
  cart.add(movieTwo);
  cart.add(movieThree);
  
  expect(cart.discountTotal(50)).toBe(5250);
});

test('should delete an object by the id', () => {
  const cart = new Cart();
  const movieOne = new Movie(134, 'Мстители', 2012, 'США', 'Avengers Assemble', 'Фантастика', 137, 3500);
  const movieTwo = new Movie(133, 'Мстители', 2012, 'США', 'Avengers Assemble', 'Фантастика', 137, 3500);
  const movieThree = new Movie(132, 'Мстители', 2012, 'США', 'Avengers Assemble', 'Фантастика', 137, 3500);
  cart.add(movieOne);
  cart.add(movieTwo);
  cart.add(movieThree);
  cart.deliteItem(133);
  
  expect(cart.items.length).toBe(2);
});






