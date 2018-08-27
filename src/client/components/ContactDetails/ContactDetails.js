import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const labelStyle = {
    width: '250px',
    display: 'inline-block'
};

const statusSection = {
    width: '100%',
    height: '50px',
    background: '#B5F2B5',
    borderTop: 'solid 1px #ccc',
    textAlign: 'center',
    boxSizing: 'border-box',
    paddingTop: '14px'
};

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: '0 auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
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

const ContactDetails = ({classes, list}) => {
    return (
        <Card className={classes.card}>
        <CardHeader
            avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
                {list.id}
            </Avatar>
            }
            action={
            <IconButton>
                <MoreVertIcon />
            </IconButton>
            }
            title={`${list.firstName} ${list.lastName}`}
            subheader={list.mobileNum}
        />
        <CardContent>
            <div>
                <span style={labelStyle}>First Name</span>
                <span>{list.firstName}</span>
            </div>
            <div>
                <span style={labelStyle}>Last Name</span>
                <span>{list.lastName}</span>
            </div>
            <div>
                <span style={labelStyle}>Mobile Number</span>
                <span>{list.mobileNum}</span>
            </div>
            <div>
                <span style={labelStyle}>Email address</span>
                <span>{list.email}</span>
            </div>
        </CardContent>
        <div style={statusSection}>
                <span>{list.status}</span>
            </div>
        </Card>
    );
}

ContactDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactDetails);