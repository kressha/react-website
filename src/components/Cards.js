import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these INFINITE home choices!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpg'
              text='Get to know the cat that hates to be carried'
              label='Siamese'
              path='/Uyu'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Get to know the cat that hates to be carried'
              label='Siamese'
              path='/Uyu'
            />
          </ul> */}
          <ul className='cards__items'>
            <CardItem
              src='images/pexels-expect-best-323780.jpg'
              text='Browse homes, connect with a local agent, explore financing solutions, schedule home tours, and more.'
              label='Buy a home'
              path='/residential'
            />
            <CardItem
              src='images/pexels-pixabay-164522.jpg'
              text='Have a seamless online experience, from shopping on rental network, to applying, to paying rent.'
              label='Rent a home'
              path='/residential'
            />
            <CardItem
              src='images/pexels-oleksandr-pidvalnyi-7599735.jpg'
              text='Find the right loan with these easy steps, so you can get the home you want.'
              label='Finance a home'
              path='/residential'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;