const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const deliveryPerson = order.order.delivery.deliveryPerson
    const client = order.name
    const phoneNumber = order.phoneNumber
    const localization = order.address.street
    const numberHouse = order.address.number
    const numberApartament = order.address.apartment
    console.log(`Olá ${deliveryPerson}, entrega para: ${client}, ${phoneNumber}, R. ${localization}, Nº ${numberHouse}, AP: ${numberApartament}.`);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const nameModify = order.name = 'Luiz Silva';
    const priceModify = order.payment.total = 50;
    const pizzaFlavor = Object.keys(order.order.pizza)
    const drink = order.order.drinks.coke.type
    console.log(`Olá ${nameModify}, o total do seu pedido de ${pizzaFlavor[0]}, ${pizzaFlavor[1]} e ${drink} é ${priceModify}`);
  }
  
  orderModifier(order);