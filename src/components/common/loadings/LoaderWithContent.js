import React, {PureComponent} from 'react';

import Loader from '../loadings/BasicLoader';

export default (WrappedComponent, initialFetchAction) => {
    return class extends PureComponent {
        componentDidMount = () => {
            if (initialFetchAction) {
                const id = this.props.match.params.id ? this.props.match.params.id : null;
                this.props.dispatch(initialFetchAction(id));
            }
        };

        render = () => {
            const {data, ...rest} = this.props;
            let toDisplay;

            if (data === null) {
                toDisplay = <Loader/>;
            }
            else if (data.length === 0) {
                toDisplay = 'NoResult';
            }
            else {
                toDisplay = <WrappedComponent data={data} {...rest}/>
            }
            return (
                <div>
                    {toDisplay}
                </div>
            );
        }
    }
};