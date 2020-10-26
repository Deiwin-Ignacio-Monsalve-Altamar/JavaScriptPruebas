import React from 'react';
import { connect } from 'react-redux';


import Search from '../componets/Search';
import Categories from '../componets/Categories';
import Carousel from '../componets/Carousel';
/* import useInitialState from '../hooks/useInitialState'; */
import CarouselItem from '../componets/CarouselItem';

import '../assets/styles/App.scss';
import Header from '../componets/Header';
import Footer from '../componets/Footer';

/* const API = 'http://localhost:3000/initalState' */

const Home = ({ myList, trends, originals}) =>{

    /* onst initalState = useInitialState(API); */

    /*Utilizando logicas */

    return(
        <>
		<Header />
            <Search isHome/>
            {myList.length > 0 && (
				<Categories title='Mi Lista'>
					<Carousel>
						{myList.map((item) => (
                            <CarouselItem 
                            key={`${item.id}_mylist`} 
                            {...item} 
                            isList
                            />
						))}
					</Carousel>
				</Categories>
			)}
			<Categories title='Tendencias'>
				<Carousel>
					{trends.map((item) => (
						<CarouselItem key={`${item.id}_trends`} {...item} />
					))}
				</Carousel>
			</Categories>
			<Categories title='Originales de PlatziVideo'>
				<Carousel>
					{originals.map((item) => (
						<CarouselItem key={`${item.id}_originals`} {...item} />
					))}
				</Carousel>
			</Categories>
			<Footer />
        </>
    )
}

const mapStateToProps = (state) => {
	return {
        myList: state.myList,
		trends: state.trends,
		originals: state.originals,
	};
};
// export default Home;
// export default connect(props, actions)(Home);
export default connect(mapStateToProps, null)(Home);