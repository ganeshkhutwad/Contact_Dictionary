/**
@author Ganesh Khutwad
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { DynaForm } from 'components';
import { ContactList, AddButton, SimpleModal, ConfirmationBox } from 'components';
import { contactListActions } from 'actions';

class ListContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            openForm: false,
            openConfirmationBox: false,
            id: null,
            formValues: {
                id: null,
                firstName: null,
                lastName: null,
                email: null,
                mobileNum: null,
                status: null
            },
            operationType: null
        }
    }
    componentDidMount() {
        this.props.actions.loadContactLists();
    }

    openFormHandler = () => {
        this.setState({
            ...this.state,
            openForm: true,
            formValues: {
                ...this.state.formValues,
                id: Math.floor(Math.random() * 100) + 1
            },
            operationType: 'add'
        });
    }

    closeFormHandler = () => {
        this.setState({
            ...this.state,
            openForm: false,
            formValues: {
                id: null,
                firstName: null,
                lastName: null,
                email: null,
                mobileNum: null,
                status: null
            },
            operationType: null
        });
    }
    
    closeConfirmationBoxHandler = () => {
        this.setState({
            ...this.state,
            openConfirmationBox: false
        });
    }

    formSubmitHandler = (formValue) => {
        this.setState({
            ...this.state,
            openForm: false
        });
        
        if (this.state.operationType === 'add') {
            this.props.actions.addContact(formValue);
        } else if (this.state.operationType === 'edit') {
            this.props.actions.updateContact(formValue);
        }
    }

    editContactHandler = (contact) => {
        this.setState({
            ...this.state,
            openForm: true,
            formValues: { ...contact },
            operationType: 'edit'
        });
    }

    deleteContactHandler = (contact) => {
        this.setState({
            ...this.state,
            openConfirmationBox: true,
            id: contact.id,
            operationType: 'delete'
        });
    }

    deleteRecordHandler = () => {
        this.setState({
            ...this.state,
            openConfirmationBox: false
        });
        this.props.actions.deleteContact(this.state.id);
    }

    render() {  
        return (
            <section>
                <ContactList 
                    editContact={this.editContactHandler}
                    deleteContact={this.deleteContactHandler} 
                    lists={this.props.lists}
                />
                <AddButton 
                    openForm={this.openFormHandler}
                />
                <SimpleModal 
                    open={this.state.openForm} 
                    closeModal={this.closeFormHandler} 
                >
                    <MuiThemeProvider muiTheme={getMuiTheme()}>
                        <DynaForm formValues={this.state.formValues} onSubmit={this.formSubmitHandler} />
                    </MuiThemeProvider>
                </SimpleModal>
                <SimpleModal open={this.state.openConfirmationBox} 
                             closeModal={this.closeConfirmationBoxHandler}
                >
                    <ConfirmationBox value={this.state.id} deleteRecord={this.deleteRecordHandler} />
                </SimpleModal>
            </section>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log('value of state ==>', state);
    return {
        lists: state.contactLists
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(contactListActions, dispatch)
    }
}

ListContainer.propType = {
    lists: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);