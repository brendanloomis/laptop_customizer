import React from 'react';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class CartOption extends React.Component {
    render() {
        return (
            <div className="summary__option">
                <div className="summary__option__label">{this.props.feature} </div>
                <div className="summary__option__value">{this.props.selectedOption.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(this.props.selectedOption.cost)}
                </div>
            </div>
        );
    }
}

export default CartOption;