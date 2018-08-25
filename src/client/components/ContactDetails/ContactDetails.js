import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const labelStyle = {
    width: '250px',
    display: 'inline-block'
};

const statusSection = {
    width: '100%',
    height: '50px',
    backgroundColor: 'green'
};

const styles = theme => ({
  card: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardContent: {
      lineHeight: 2
  }
});

const ContactDetails = (props) => {
    const { classes } = props;

    return (
        <Card className={classes.card}>
        <CardHeader
            avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
                GK
            </Avatar>
            }
            action={
            <IconButton>
                <MoreVertIcon />
            </IconButton>
            }
            title="Ganesh Khutwad"
            subheader="9763484283"
        />
        <CardContent>
            <div>
                <span style={labelStyle}>First Name</span>
                <span>Ganesh</span>
            </div>
            <div>
                <span style={labelStyle}>Last Name</span>
                <span>Khutwad</span>
            </div>
            <div>
                <span style={labelStyle}>Mobile Number</span>
                <span>9763484283</span>
            </div>
            <div>
                <span style={labelStyle}>Email address</span>
                <span>ganeshkhutwad30690@gmail.com</span>
            </div>
        </CardContent>
        <div style={statusSection}>
                <span>Active</span>
            </div>
        </Card>
    );
}

ContactDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactDetails);