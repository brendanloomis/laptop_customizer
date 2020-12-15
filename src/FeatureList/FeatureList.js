import React from 'react';
import Feature from '../Feature/Feature.js';

class FeatureList extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return(
                <Feature 
                    feature={this.props.features[feature]} 
                    featureName={feature} 
                    key={featureHash}
                    selected={this.props.selected}
                    handleFeatureChange={this.props.handleFeatureChange}
                />
            );
        });

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        );
    }
}

FeatureList.defaultProps = {
    features: {}
};

export default FeatureList;