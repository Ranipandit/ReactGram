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
import IconButton from '@material-ui/core/IconButton';

import posts from '../data/posts';

const styles = theme => ({
    root: {
        display:'flex',
        flexWrap:'wrap',
        maxWidth:1200,
        margin:'auto'
    },
    card: {
        maxWidth: 345,
        flexGrow:1,
        margin: theme.spacing.unit*2,
        border:'1px solid #edeeed',
        background:'#fff',
        boxShadow: '0 0 0 5px rgba(0,0,0,0.03)',
      },
      media: {
        width:'345px',
        paddingTop: '95%',
    },
    button: {
        margin: theme.spacing.unit*2,
        paddingLeft: theme.spacing.unit*5,
        paddingRight: theme.spacing.unit*5,
    },
});

class Grids extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {
                posts.map((data, index) => {
                    return (
                        <Card className={classes.card} key={index}>
                            <CardMedia
                                className={classes.media}
                                image={data.display_src}
                                title="Media"
                            />
                            <CardContent>
                                <Typography component="p">{data.caption}</Typography>
                            </CardContent>
                            <Button variant="outlined" className={classes.button}>
                                {data.likes}
                                <FavoriteIcon />
                            </Button>
                            <Button variant="outlined" className={classes.button}>
                                <CommentIcon />
                            </Button>
                        </Card>
                        )
                    })
                }
            </div>
        );
    }
}

Grids.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Grids);