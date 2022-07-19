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
    // Adicione abaixo as informações necessárias.
    const address = 'address'; //armazenando a palavra 'adress' em uma variável;
    const deliveryPerson = order.order.delivery.deliveryPerson; //acessando a chave 'deliveryPerson' em uma variável através de 'notação de ponto';
    const customerName = order['name']; //acessando e armazenando a chave 'name' em uma variável através de 'notação de chaves';
    const customerPhone = order['phoneNumber']; //acessando e armazenando a chave 'phoneNumber' em uma variável através de 'notação de chaves';
    const street = order[address].street; //acessando e armazenando a chave 'street' em uma variável, através de 'notação de chaves' e 'notação de ponto';
    const number = order[address].number; //acessando e armazenando a chave 'number' em uma variável, através de 'notação de chaves' e 'notação de ponto';
    const apartment = order[address].apartment; //acessando e armazenando a chave 'apartment' em uma variável. através de 'notação de chaves' e 'notação de ponto';

    console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}.`)
}

customerInfo(order);

const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const newPerson = order.name = 'Luis Silva'; //alterando o nome da pessoa
    const newPrice = order.payment.total = '50'; //alterando o valor total
    const pizzas = Object.keys(order.order.pizza); //recuperando as chaves que edtao em 'order.order.pizzas'
    const coke = order.order.drinks.coke.type; //recuperando o 'type' da chave 'coke'

    console.log(`Olá ${newPerson}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${coke} é R$ ${newPrice}`)
}

orderModifier(order);