import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchConfig, updateSearch } from '../redux/movies/movie.actions';
import { MovieSearch, StyledHeader, MovieTitle } from '../styles/AppContainer.style';


export const MovieAppHeader = ((props) => {
    const [toggleSearch, setToggle] = React.useState(false);
    const moviesState = useSelector(({ movies }) => movies);
    const dispatch = useDispatch()
    const [scrolled, setScrolled] = React.useState(false);

    useEffect(() => {
        dispatch(fetchConfig())
    }, [])



    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    const onChange = (val) => dispatch(updateSearch(val));

    let navbarClasses = 'navbar';
    if (scrolled) {
        navbarClasses = `${navbarClasses} scrolled`;
    }

    return (
        <StyledHeader className={navbarClasses}>
            <Col {...props} className='d-flex'>
                <img src={'./images/Back.png'} alt={'back'} className='mx-3 back' />
                {!toggleSearch ? <MovieTitle> {moviesState?.section?.title ?? ""} </MovieTitle> :
                    <MovieSearch className="w-90" value={moviesState.search
                    } onChange={(e) => onChange(e.target.value)} />}
                <img onClick={() => { setToggle((prevToggle) => !prevToggle) }} src={'./images/search.png'} alt={'search'} className='mx-3 search' />
            </Col></StyledHeader>
    )
})


