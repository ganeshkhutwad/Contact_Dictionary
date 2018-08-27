import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ContactList, AddButton, SimpleModal } from 'components';
import { contactListActions } from 'actions';
class ListContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            openForm: false
        }
    }
    componentDidMount() {
        this.props.dispatch(contactListActions.getList());
    }

    openFormHandler = () => {
        this.setState({
            ...this.state,
            openForm: true
        });
    }

    closeFormHandler = () => {
        this.setState({
            ...this.state,
            openForm: false
        });
    }
    
    render() {  
        return (
            <section>
                <ContactList lists={this.props.lists} />
                <AddButton openForm={this.openFormHandler} />
                <SimpleModal open={this.state.openForm} 
                             closeModal={this.closeFormHandler} />
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