import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

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

const options = [
    'Edit',
    'Delete'
];

const ITEM_HEIGHT = 48;

class ContactDetails extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            anchorEl: null
        }
    }

    handleClick = event => {
        this.setState({
            ...this.state,
            anchorEl: event.currentTarget
        });
    }

    handleClose = () => {
        this.setState({
            ...this.state,
            anchorEl: null
        });
    }


    render() {
        const { classes, list } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <Card className={classes.card}>
            <CardHeader
                avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                    {list.id}
                </Avatar>
                }
                action={
                <div>
                <IconButton aria-label="More"
                            aria-owns={open ? 'menu' : null}
                            aria-haspopup="true"
                            onClick={this.handleClick}>
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    PaperProps={{
                        style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: 200,
                        },
                    }}
                >
                    {options.map(option => (
                        <MenuItem key={option} onClick={this.handleClose}>
                        {option}
                        </MenuItem>
                    ))}
                </Menu>
                </div>

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
   
}

ContactDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactDetails);