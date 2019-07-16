import { hot } from 'react-hot-loader/root';
import React from 'react';

import firstImage from 'Images/city.jpg';
import secondImage from 'Images/books.jpg';
import thirdImage from 'Images/tree.jpg';

import {container, } from './styles.css';

const bodyStyles = {
  margin: '0 auto'
};

const Root = () => {
  return (
    <>
      <section style={bodyStyles}>
        <div id="container">
          <img class="third" src={thirdImage} />
          <img class="second" src={secondImage} />
          <img class="first" src={firstImage} />
        </div>
      </section>
    </>
  );
};


export default hot(Root);
