import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/QuestionAnswer';
import { Link } from 'react-router-dom';
import Header from './header';
import posts from '../data/posts-data';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 1200,
        margin: 'auto'
    },
    card: {
        maxWidth: 345,
        flexGrow: 1,
        margin: theme.spacing.unit * 2,
        border: '1px solid #edeeed',
        boxShadow: '0 0 0 5px rgba(0,0,0,0.03)',
    },
    media: {
        width: '345px',
        paddingTop: '100%',

    },
    button: {
        margin: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 6,
        paddingRight: theme.spacing.unit * 6,
        border: '1px solid rgba(182, 185, 199, 0.5)',
        color: '#5e47e0',
    },
});

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: posts
        }
    }
    likeHandler = (i) => {
        const { post } = this.state;
        post[i].likes = post[i].likes + 1
        this.setState({ post })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                < Header />
                <div className={classes.root}>
                    {
                        posts.map((data, index) => {

                            return (
                                <Card className={classes.card} key={index}>
                                    <Link to='/comments' className={classes.link} >
                                        <CardMedia
                                            className={classes.media}
                                            image={"/images/" + data.display_src}
                                            title="Media"
                                        />
                                    </Link>
                                    <CardContent>
                                        <Typography component="p">{data.caption}</Typography>
                                    </CardContent>
                                    <Button variant="outlined" color="primary" className={classes.button} onClick={() => this.likeHandler(index)}>
                                        {data.likes}
                                        <FavoriteIcon />
                                    </Button>
                                    <Link to='/comments'>
                                        <Button variant="outlined" color="primary" className={classes.button}>
                                            <CommentIcon />
                                        </Button>
                                    </Link>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

Posts.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Posts);