import React from 'react';
import CartOption from '../CartOption/CartOption';
import CartTotal from '../CartTotal/CartTotal';

class Cart extends React.Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
      
            return (
              <CartOption 
                selectedOption={selectedOption}
                feature={feature}
                key={featureHash}
              />
            );
        });
        
        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <CartTotal
                    selected={this.props.selected}
                />
            </section>
        );
    }
}

export default Cart;