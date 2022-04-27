import React, { useEffect } from 'react';
import styled from 'styled-components'
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Movies from '../components/Movies/Movies';
import Viewers from '../components/Viewers/Viewers';
import db from '../firebase';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() =>{
    db.collection("Movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        // console.log(doc.data())
        return { id: doc.id, ...doc.data()}
      });
      dispatch(setMovies(tempMovies))
      // console.log(tempMovies)
    })
  }, []);


  return (
    <Container>
        <ImageSlider />
        <Viewers />
        <Movies />
    </Container>
  )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;

    &::before{
        content: "";
        background: url('/images/home-background.png') center center / cover no-repeat fixed;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`