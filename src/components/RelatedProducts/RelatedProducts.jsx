import React, { useEffect } from 'react'
import RelatedProduct from '../RelatedProduct/RelatedProduct';

export default function RelatedProducts({ products }) {


    console.log(products);

    // const cardData = [
    //     {
    //       id: 1,
    //       image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Cocktail')}`,
    //       title: 'Cocktail',
    //       description: 'Tropical mix of flavors, perfect for parties.',
    //       price: 8.99,
    //       link: 'https://lqrs.com'
    //     },
    //     {
    //       id: 2,
    //       image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Smoothie')}`,
    //       title: 'Smoothie',
    //       description: 'Refreshing blend of fruits and yogurt.',
    //       price: 5.49,
    //       link: 'https://lqrs.com'
    //     },
    //     {
    //       id: 3,
    //       image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Iced Coffee')}`,
    //       title: 'Iced Coffee',
    //       description: 'Cold brewed coffee with a hint of vanilla.',
    //       price: 4.99,
    //       link: 'https://lqrs.com'
    //     },
    //     {
    //       id: 4,
    //       image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Mojito')}`,
    //       title: 'Mojito',
    //       description: 'Classic Cuban cocktail with mint and lime.',
    //       price: 7.99,
    //       link: 'https://lqrs.com'
    //     },
    //     {
    //       id: 5,
    //       image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Matcha Latte')}`,
    //       title: 'Matcha Latte',
    //       description: 'Creamy green tea latte, rich in antioxidants.',
    //       price: 6.49,
    //       link: 'https://lqrs.com'
    //     },
    //     {
    //       id: 6,
    //       image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Fruit Punch')}`,
    //       title: 'Fruit Punch',
    //       description: 'Sweet and tangy punch, bursting with fruity flavors.',
    //       price: 3.99,
    //       link: 'https://lqrs.com'
    //     },
    //     {
    //       id: 7,
    //       image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Bubble Tea')}`,
    //       title: 'Bubble Tea',
    //       description: 'Chewy tapioca pearls in a sweet milk tea base.',
    //       price: 4.99,
    //       link: 'https://lqrs.com'
    //     }
    //   ];
      
    //   const Card = ({ card, onAddToCart }) => (
    //     <div className="card">
    //       <img src={card.image} alt={card.title} />
    //       <h3>{card.title}</h3>
    //       <p>{card.description}</p>
    //       <p>${card.price.toFixed(2)}</p>
    //       <button onClick={() => onAddToCart(card)}>Add to Cart</button>
    //       <a href={card.link} target="_blank" rel="noopener noreferrer">More Info</a>
    //     </div>
    //   );
      
    //   const SwipeCards = () => {
    //     const [cards] = useState(cardData);
      
    //     const addToCart = (product) => {
    //       // Implement your add to cart logic here
    //       console.log('Adding to cart:', product);
    //     };
      
    //     return (
    //       <div className="card-container">
    //         {cards.map(card => (
    //           <Card key={card.id} card={card} onAddToCart={addToCart} />
    //         ))}
    //       </div>
    //     );
    //   };

    return (
        <div className="bg-slate-200">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 border-t-2 border-black">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Other Items in This Category</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product, index) => {
                        return (
                            <RelatedProduct product={product} key={index} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
