import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMovies } from '../redux/movies/movie.actions';
import { StyledContainer } from '../styles/AppContainer.style';
import { MovieCard } from './MovieCard';
import { Row } from 'react-bootstrap';
import { MovieAppHeader } from './MovieAppHeader';


export default function AppWrapper() {
    const [currentPage, setPage] = useState(1);
    const dispatch = useDispatch();
    const moviesState = useSelector(({ movies }) => movies);
    const observer = useRef()

    const lastValRef = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && currentPage < moviesState.pageMax) {
                setPage(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [currentPage])



    useEffect(() => {
        dispatch(addMovies(currentPage))
    }, [currentPage])


    let search = moviesState.search;
    let filteredData = moviesState.movies;

    if (!["", null].includes(search))
        filteredData = filteredData.filter((movie) => {
            return movie.name.toLowerCase().includes(search.toLowerCase())
        })

    return (
        <StyledContainer fluid>
            <MovieAppHeader />
            <Row className='pl-5'>
                {
                    filteredData.map((val, index) => <MovieCard key={val.id} ref={moviesState.movies.length === index + 1 ? lastValRef : null} val={val} />)
                }
            </Row>
        </StyledContainer>
    );
}
