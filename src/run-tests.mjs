import assert from 'assert';
import { calculatePrice, addToCart } from './configurator-core.mjs';

// calculatePrice tests
{
  const base = 1000;
  const ingredients = [{name:'a',price:200},{name:'b',price:100}];
  const p = calculatePrice(base, ingredients);
  assert.strictEqual(p, 1300, 'calculatePrice should sum base + ingredients');
}

// addToCart tests
{
  const cart = [];
  const item = {id:1,price:500};
  const next = addToCart(cart, item);
  assert.strictEqual(next.length, 1, 'addToCart should return cart with added item');
  assert.deepStrictEqual(next[0], item, 'added item should be present');
}

console.log('All configurator tests passed');
