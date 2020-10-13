import React from 'react';

// define Initial state
const initialState = {
    name: 'Kiran Dash',
    message: 'HOC is cool'
}

// define State Type - Be careful as type of state might change if different data types might come in state variables
type State = Readonly<typeof initialState>;

const messageHoc = (WrappedComponent: any) => {
    class HOC extends React.Component<{}, State> {
        // define the state
        readonly state: State = initialState;

        render() {
            return (
                <WrappedComponent 
                    name={this.state.name} 
                    message={this.state.message} 
                />
            )
        }
    }

    return HOC;
}

export default messageHoc;
