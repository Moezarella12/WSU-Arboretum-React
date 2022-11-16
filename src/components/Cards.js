import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Themes!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
             src="https://w3.winona.edu/Locations/Resources/ThornlessHoneylocust.png"
              text='Legume Family'
              label='Blue Wild Indigo'
              path='/services'
            />
            <CardItem
              src="https://w3.winona.edu/Locations/Resources/purplelovegrass.jpg"
              text='Grass Family'
              label='Purple Lovegrass'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://w3.winona.edu/Locations/Resources/americancolumbine-blossom.jpg'
              text='Edible plants'
              label='Colimbine'
              path='/services'
            />
            <CardItem
              src='https://w3.winona.edu/Locations/Resources/culversroot-blossom.jpg'
              text='Medicinal plants'
              label='Culvers root'
              path='/products'
            />
            <CardItem
              src='/images/showAll.png'
              text='View All Themes'
              label='Click here to see all themes available'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;