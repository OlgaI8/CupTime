import { Product } from "./Product";

const products = [
  {
    id: 0,
    title: 'Кокосовая матча',
    image: 'images/photo-2.jpg',
    price: 390,
  },
  {
    id: 1,
    title: 'Зеленый индонезийский чай',
    image: 'images/photo-1.jpg',
    price: 340,
  },
  {
    id: 2,
    title: 'Черный чай из Эфиопии',
    image: 'images/photo.jpg',
    price: 380,
  },
  {
    id: 3,
    title: 'Черный чай из Калифорнии',
    image: 'images/photo-5.jpg',
    price: 360,
  },
  {
    id: 4,
    title: 'Органическая веганская матча',
    image: 'images/photo-4.jpg',
    price: 400,
  },
  {
    id: 5,
    title: 'Чай черный Лакандона',
    image: 'images/photo-3.jpg',
    price: 390,
  },
];

export const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">Чай</h2>

        <ul className="products__list">

          {products.map((item) => (
            <Product key={item.id} data={item} />
          ))}

        </ul>
      </div>
    </section>
  );
}