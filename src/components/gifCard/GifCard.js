import React, { Fragment } from 'react';
import styles from './GifCard.module.css';
import Loading from '../loading/Loading';
import spinner from './spinner.gif';


class GifCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imageStatus: false };
        this.imageRef = React.createRef();
        this.loadingBox = React.createRef();
    }

    componentDidMount() {
        this.loadingBox.current.style.height =
            this.props.image.fixed_width.height + "px";
        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    componentDidUpdate(prevProps) {
        if (this.props.gif.id !== prevProps.gif.id) {
            this.setState({ imageStatus: false });
            this.loadingBox.current.style.height =
                this.props.image.fixed_width.height + "px";
            this.imageRef.current.addEventListener("load", this.setSpans);
        }
    }

    setSpans = () => {
        this.setState({ imageStatus: true });
    };


    render() {
        return !this.props.image.fixed_width.url ? (
            <Loading />
        ) : (
                <Fragment>
                    <div
                        ref={this.loadingBox}
                        // key={this.props.gif.id}
                        className={
                            this.state.imageStatus
                                ? `${styles.itemHide}`
                                : `${styles.masonryBrick}`
                        }
                    >
                        <img
                            src={spinner}
                            className={
                                this.state.imageStatus
                                    ? `${styles.itemHide}`
                                    : `${styles.spinner}`
                            }
                        ></img>
                    </div>

                    <img
                        src={this.props.image.fixed_width.url}
                        ref={this.imageRef}
                        className={
                            this.state.imageStatus ? styles.masonryBrick : styles.itemHide
                        }
                        key={this.props.gif.id}
                    ></img>
                </Fragment>
            );
    }
}

export default GifCard; 