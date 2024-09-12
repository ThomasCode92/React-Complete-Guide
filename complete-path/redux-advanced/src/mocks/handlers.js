import { delay, http, HttpResponse } from 'msw';

const card = {
  items: [
    { id: 'p1', name: 'My First Book', price: 6, quantity: 1, totalPrice: 6 },
  ],
  totalQuantity: 1,
  changed: false,
};

export const handlers = [
  http.get('/cart', () => {
    return HttpResponse.json(card, { status: 200 });
  }),

  http.put('/cart', async ({ request }) => {
    const data = await request.json();

    card.items = data.items;
    card.totalQuantity = data.totalQuantity;

    await delay(2000);

    return HttpResponse.json(card, { status: 200 });
  }),
];
