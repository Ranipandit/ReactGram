import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';  
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import posts from '../data/posts';

const styles = {
    root: {
        display:'flex',
        flexWrap:'wrap',
        maxWidth:1200,
        margin:'auto'
    },
    card: {
        maxWidth: 375,
        flexGrow:1,
        marginLeft:"10px",
        marginRight:"10px",
        marginBottom:"10px",
        border: '1px solid #edeeed',
        background:'#fff',
        boxShadow: '0 0 0 5px rgba(0,0,0,0.03)',
      },
      media: {
        width:'375px',
        paddingTop: '56.25%',
    },
};

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
                                <Typography component="p">{data.likes}</Typography>
                            </CardContent>
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