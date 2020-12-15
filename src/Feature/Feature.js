import React from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

class Feature extends React.Component {
    render() {
        const options = this.props.feature.map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <FeatureItem 
                    key={itemHash}
                    id={itemHash}
                    featureName={this.props.featureName}
                    selected={this.props.selected}
                    item={item}
                    handleFeatureChange={this.props.handleFeatureChange}
                />
            );
        });

        return (
            <fieldset className="feature">
              <legend className="feature__name">
                <h3>{this.props.featureName}</h3>
              </legend>
              {options}
            </fieldset>
        );
    }
}

export default Feature;