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
    authorText: {
        fontWeight: "bold",
        padding: theme.spacing.unit
    },
    commentBox: {
        margin: theme.spacing.unit * 4
    }
});

class Comments extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            author: "",
            comment:"",
            commentCounts: 0
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    handleCommits = (e) => {
        if (e.charCode === 13) {
            const data = this.state.data
            const author = this.state.author
            const comment = this.state.comment
            const commentCounts = this.state.commentCounts
            data.push({author:author,comment:comment})
            console.log(data)
            this.setState({
                data,
                author: "",
                comment: "",
                commentCounts : commentCounts + 1
            })
        }
    }

    render() {
        const { classes } = this.props;
        const { data,commentCounts } = this.state;
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
                            {commentCounts}<CommentIcon />
                        </Button>
                    </Card>
                    <div>
                        {data === [] ? null : data.map((comments, index) => {
                            return <div className={classes.commentBox} key={index}>
                                <span className={classes.authorText}>{comments.author}</span>
                                <span>{comments.comment}</span>
                                <Divider />
                            </div>
                        })}
            
                            <TextField
                                id="outlined-dense"
                                label="Author"
                                className={classes.textField}
                                margin="dense"
                                variant="outlined"
                                onKeyPress={this.handleCommits}
                                onChange={this.handleChange}
                                name="author"
                                value = {this.state.author}
                            />
                            <TextField
                                id="outlined-dense"
                                label="Comment"
                                className={classes.textField}
                                margin="dense"
                                variant="outlined"
                                onChange={this.handleChange}
                                name="comment"
                                onKeyPress={this.handleCommits}
                                value = {this.state.comment}

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