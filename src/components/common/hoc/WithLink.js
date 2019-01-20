import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

export default (WrappedComponent) => {
    return class extends PureComponent {
        render = () => <Link to={this.props.link} className="no-underline"><WrappedComponent {...this.props}/></Link>;
    };
};