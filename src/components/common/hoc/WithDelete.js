import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

export default (WrappedComponent, action) => {
    return connect()(class extends PureComponent {
        onDelete = () => {
            this.props.dispatch(action(this.props.data.id));
        };

        render = () => {
            return (
                <WrappedComponent {...this.props} onDelete={this.onDelete}/>
            );
        };
    });
};