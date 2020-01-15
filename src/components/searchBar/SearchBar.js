import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './SearchBar.module.css';
import search from './search.png';

class SearchBar extends React.Component {
    state = { searchedKeyword: "", error: "" };

    inputHandler = (e) => {
        this.setState({ searchedKeyword: e.target.value })
    }

    formHandler = (e) => {
        e.preventDefault();
        if (!this.state.searchedKeyword) {
            this.setState({
                error: (<div className={styles.errorContainer}>< div className={styles.error}>
                    <img src="https://media.giphy.com/media/1QGRJ9cOTbh5K/giphy.gif" />
                </div><p>Please Search a Gif</p></div>)
            })
        } else {
            this.props.history.push({
                pathname: `/search/${this.state.searchedKeyword}`,
                state: {
                    searchedKeyword: this.state.searchedKeyword
                }
            })
        }

    }
    render() {
        return (

            <Fragment>
                {this.state.error ? <div>{this.state.error}</div> : ""}
                <div className={styles.container}>
                    <form className={styles.form} onSubmit={this.formHandler}>
                        <div className={styles.formContainer}>
                            <input type="text" className={styles.search} onChange={this.inputHandler} placeholder='Search a Gif' required />
                            <img src={search} alt="search" className={styles.image} onClick={this.formHandler} />
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(SearchBar); 
