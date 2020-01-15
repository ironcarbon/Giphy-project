import React, { Fragment } from 'react';
import Logo from '../logo/Logo';
import SearchBar from '../searchBar/SearchBar';
import TrendingGif from '../trendingGif/TrendingGif';
import styles from "../../main.css";
const Landing = () => {
    return (
        <Fragment>
            <Logo />
            <SearchBar />
            {/* <TrendingGif />  */}
            {/* We can implement TrendingGif Component in the future */}
        </Fragment>
    )
}

export default Landing;