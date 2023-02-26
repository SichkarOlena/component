import React, {PureComponent} from 'react';


class Counter extends PureComponent {
    constructor(props) {
        super(props);
        this.state= {
            count:  0,
        };
    }
    handleAdd= ()=> {this.setState((state,props)=>({count: state.count+1}))}
    handleSub= ()=> {this.setState((state,props)=>({count: state.count-1}))}
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.step === this.props.step;
    // }

    render() {
        const {count} = this.state;
        const styles ={
            with: '50%',
            margin:'auto',
            display:'flex',
            flexDirection: 'column',
            backgroundColor: 'pink',
            textAlign: 'center'
        }
        return (
            <section styles = { styles }>
                <h3>count: {count}</h3>
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleSub}>-</button>
            </section>
        );
    }
}
Counter.defaultProps = {
    step:1,
};
export default Counter;