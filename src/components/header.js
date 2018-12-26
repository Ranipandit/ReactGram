import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
    },
    header: {
        fontFamily:"'Cookie', cursive",
        textAlign:'center',
        color: '#125688',
        marginBottom: theme.spacing.unit *2, 
    }
});
  
class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography component="h2" variant="h1" className={classes.header}>
                    Reactgram
                </Typography>
            </div>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);