import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/QuestionAnswer';
import Header from './header';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 1200,
        margin: 'auto',
        boxShadow: '0 0 0 5px rgba(0,0,0,0.03)',
        border: '1px solid #edeeed'

    },
    card: {
        maxWidth: 500,
        flexGrow: 1,
        margin: 'auto',
        margin: theme.spacing.unit * 2,
    },
    media: {
        width: '500px',
        paddingTop: '100%',

    },
    button: {
        margin: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 6,
        paddingRight: theme.spacing.unit * 6,
        border: '1px solid rgba(182, 185, 199, 0.5)',
        color: '#5e47e0',
    },
    textField: {
        marginLeft: theme.spacing.unit * 6,
        marginRight: theme.spacing.unit * 6,
    },
});

class Comments extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                < Header />
                <div className={classes.root}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image=""
                            title="Media"
                        />
                        <Button variant="outlined" color="primary" className={classes.button}>
                            <FavoriteIcon />
                        </Button>
                        <Button variant="outlined" color="primary" className={classes.button}>
                            <CommentIcon />
                        </Button>
                    </Card>
                    <div>
                        <Typography component="p">hfhjdhgyu</Typography>
                        <Divider />
                        <Typography component="p">hfhjdhgyufggggggggggg</Typography>
                        <Divider />
                        <TextField
                            id="outlined-dense"
                            label="Author"
                            className={classes.textField}
                            margin="dense"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-dense"
                            label="Comment"
                            className={classes.textField}
                            margin="dense"
                            variant="outlined"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

Comments.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comments);