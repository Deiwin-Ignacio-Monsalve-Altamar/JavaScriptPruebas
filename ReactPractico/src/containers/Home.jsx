import React,{ useEffect, useState } from 'react'

import Header from '../componets/Header';
import Search from '../componets/Search';
import Categories from '../componets/Categories';
import Carousel from '../componets/Carousel';
import useInitialState from '../hooks/useInitialState';
import CarouselItem from '../componets/CarouselItem';
import Footer from '../componets/Footer'

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState'

const Home = () =>{

    const initalState = useInitialState(API);

    /*Utilizando logicas */

    return(
        <>
            <Search />
            {initalState.myList?.length > 0 &&
            
            <Categories title="Mi lista">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>
                        
            }



            <Categories title="Tendencias">
                <Carousel>
                    {initalState.trends?.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>


            <Categories title="Originales de platzi videos">
                <Carousel>
                {initalState.originals?.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>
        </>
    )
}

export default Home;