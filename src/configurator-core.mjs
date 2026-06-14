export function calculatePrice(basePrice = 0, ingredients = []){
  const b = Number(basePrice) || 0;
  if(!Array.isArray(ingredients)) return b;
  return ingredients.reduce((s,it)=>s + (Number(it.price)||0), b);
}

export function addToCart(cart = [], item){
  const next = Array.isArray(cart) ? [...cart] : [];
  next.push(item);
  return next;
}

export function formatCurrency(n){
  return `${n} ₸`;
}
