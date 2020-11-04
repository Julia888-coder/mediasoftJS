const Product = [
 {
    id: 1,
    price: 4500,
    name: "Пакет Премиум",
    rating: 10,
    },

{
    id: 2,
    price: 2900,
    name: "Пакет Я сам",
    rating: 8,

},
{
    id: 3,
    prise: 500,
    name: "Пакет медитаций",
    rating: 6.7,

},
{
    id: 4,
    prise: 790,
    name: "Марафон по инстаграму",
    rating: 8,

},
{
    id: 5,
    prise: 500,
    name: "Курс по таргету",
    rating: 4.5,
},
];

//пробные массивы
let backet = [
    {
      id: 3,
      count: 1
    },
    {
      id: 4,
      count: 1
    }
  ];
      let result = products.filter(item => backet.map(bac => bac.id).includes(item.id));
      console.log(result);

export default Product;