const goods = [
    {   
        id: 0,
        name: 'A',
        description: 'A description',
        sizes: ['small','large'],
        price: 100,
        available: true,
    },
    {
        id: 1,
        name: 'B',
        description: 'A description',
        sizes: ['small','large'],
        price: 200,
        available: true,
    },
    {
        id: 2,
        name: 'C',
        description: 'A description',
        sizes: ['small','large'],
        price: 300,
        available: true,
    },
    {
        id: 3,
        name: 'D',
        description: 'A description',
        sizes: ['small','large'],
        price: 400,
        available: true,
    },
    {
        id: 4,
        name: 'E',
        description: 'A description',
        sizes: ['small','large'],
        price: 500,
        available: true,
    }
];

const cart = [
    {
        good: goods[0].id,
        amount: 3,
    },
    {
        good: goods[1].id,
        amount: 5,
    }
];

function AddToCart(goodID, amount) {
    let newItem = {
        good: goods[goodID].id,
        amount: amount,
    };
    cart.push(newItem);
};

function RemoveFromCart(goodID) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].good === goodID) {
            cart.splice(i, 1);
        };
    };
};

function ClearCart() {
    cart.splice(0, cart.length);
};

function CartTotal() {
    var total = new Object();
    total.totalAmount = 0;
    total.totalSumm = 0;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    for (let i = 0; i < cart.length; i++) {
        total.totalAmount += cart[i].amount;
        total.totalSumm += goods[cart[i].good].price * cart[i].amount; 
    }
    return total;
};

ClearCart();
console.log(cart);

AddToCart(0, 9);
AddToCart(3, 2);
AddToCart(4, 8);
console.log(cart);

RemoveFromCart(4);
console.log(cart);

console.log(cart[0].amount)
console.log(CartTotal());
