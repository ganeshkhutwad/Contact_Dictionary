import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ContactList, AddButton } from 'components';
import { contactListActions } from 'actions';
class ListContainer extends Component {

    componentDidMount() {
        this.props.dispatch(contactListActions.getList());
    }

    addContact = () => {
        const list = {
            id: 3,
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            mobileNum: 8888888888,
            status: 'Active'
        };

        this.props.dispatch(contactListActions.createList(list));
    }

    render() {  
        return (
            <section>
                <ContactList lists={this.props.lists} />
                <AddButton addContact={this.addContact} />
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

export default connect(mapStateToProps)(ListContainer);