import { useEffect } from 'react';

import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

import { Box, styled } from '@mui/material';

import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';


const Component = styled(Box)`
  padding: 10px;
  background: #F2F2F2; 
`

const Home = () => {

  const dispatch = useDispatch();

  const { products } = useSelector(state => state.getProducts)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <MidSection />
        <Slide products={products} title="Discounts for You" timer={false} />
        <Slide products={products} title="Suggested Items" timer={false} />
        <Slide products={products} title="Top Selections" timer={false} />
      </Component>
    </>
  )
}

export default Home