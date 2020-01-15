import React, { Fragment } from 'react';
import styles from './GifCard.module.css';

class GifCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imageStatus: false };
        this.imageRef = React.createRef();
        this.loadingBox = React.createRef();
    }

    componentDidMount() {

        this.loadingBox.current.style.width =
            this.props.image.fixed_height.width + "px";
        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    setSpans = () => {

        this.imageRef.current.style.width = this.props.image.fixed_height.width;

        this.setState({ imageStatus: true });
    };


    render() {
        return (
            !this.props.image.fixed_width.url ? "loading" : (
                <Fragment>
                    <div
                        ref={this.loadingBox}
                        className={
                            this.state.imageStatus
                                ? `${styles.itemHide}`
                                : `${styles.masonryBrick}`
                        }
                    ></div>


                    <img
                        src={this.props.image.fixed_height.url}
                        style={this.state.imageStatus ? {} : { display: "none" }}
                        ref={this.imageRef}
                        className={styles.masonryBrick}
                    ></img>
                </Fragment>
            )
        )
    }
}

export default GifCard; 