import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../Doctors/Doctors';



const Home = () => {

    const data = useLoaderData();
    // console.log(data);

    return (
        <div className=''>
            <Banner></Banner>
            <Doctors data={data}></Doctors>
        </div>
    );
};

export default Home;