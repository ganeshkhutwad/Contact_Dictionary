/**
@author Ganesh Khutwad
To list contact details on contact card.
 */
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

// Define classes to style elements.
const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: '0 auto'
    },
    label: {
        width: '250px',
        display: 'inline-block'
    },
    active: {
        width: '100%',
        height: '50px',
        background: '#B5F2B5',
        borderTop: 'solid 1px #ccc',
        textAlign: 'center',    
        boxSizing: 'border-box',
        paddingTop: '14px',
        textTransform: 'capitalize'
    },
    inactive: {
        width: '100%',
        height: '50px',
        background: '#cccccc2e',
        borderTop: 'solid 1px #ccc',
        textAlign: 'center',
        boxSizing: 'border-box',
        paddingTop: '14px',
        textTransform: 'capitalize'
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

// action list for each contact card.
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

    handleClose = (option, contact) => {
        this.setState({
            ...this.state,
            anchorEl: null
        });
        if (option === 'Edit') {
            this.props.editContact(contact);
        } else if (option === 'Delete') {
            this.props.deleteContact(contact);
        }
    }


    render() {
        const { classes, list } = this.props;
        const statusClass = list.status.toLowerCase() === 'active' ? classes.active : classes.inactive;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        // return virtual DOM.
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
                        <MenuItem key={option} onClick={this.handleClose.bind(this, option, list)}>
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
                    <span className={classes.label}>First Name</span>
                    <span>{list.firstName}</span>
                </div>
                <div>
                    <span className={classes.label}>Last Name</span>
                    <span>{list.lastName}</span>
                </div>
                <div>
                    <span className={classes.label}>Mobile Number</span>
                    <span>{list.mobileNum}</span>
                </div>
                <div>
                    <span className={classes.label}>Email address</span>
                    <span>{list.email}</span>
                </div>
            </CardContent>
            <div className={statusClass}>
                    <span>{list.status}</span>
                </div>
            </Card>
        );
    }
   
}

ContactDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactDetails);
