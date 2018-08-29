/**
@author Ganesh Khutwad
ListContainer is a container for contact list.
It is connected with application store to get application level states and
wraps Dumb components.
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

        // Initial state.
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

    // Open form to create new record.
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

    // Reset form when form gets close.
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
    
    // Close confirmation popup.
    closeConfirmationBoxHandler = () => {
        this.setState({
            ...this.state,
            openConfirmationBox: false
        });
    }

    // Submit form event, trigger action to add or update record.
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

    // When user select edit option.
    editContactHandler = (contact) => {
        this.setState({
            ...this.state,
            openForm: true,
            formValues: { ...contact },
            operationType: 'edit'
        });
    }

    // When user select delete option.
    deleteContactHandler = (contact) => {
        this.setState({
            ...this.state,
            openConfirmationBox: true,
            id: contact.id,
            operationType: 'delete'
        });
    }

    // Trigger delete action to remove selected record.
    deleteRecordHandler = () => {
        this.setState({
            ...this.state,
            openConfirmationBox: false
        });
        this.props.actions.deleteContact(this.state.id);
    }

    // When state is changes, every time returns Virtual DOM.
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

// Map application state with props to access within component.
function mapStateToProps(state, ownProps) {
    return {
        lists: state.contactLists
    }
}

// Map actions with props to access within component.
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(contactListActions, dispatch)
    }
}

// Check prop types
ListContainer.propType = {
    lists: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// Connect React component with Redux to access application state.
export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);