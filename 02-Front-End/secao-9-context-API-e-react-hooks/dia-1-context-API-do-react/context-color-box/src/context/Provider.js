//adicionar as informações das cores e a função para alterar a cor do botão

import PropTypes from 'prop-types';
import React from 'react';
import ColorsContext from './ColorsContext';


class Provider extends React.Component {
  state = {
    colors: ['blue', 'red', 'yellow'],
    colorIndex: 0,
  }

  nextColor = () => {
    const {colorIndex, colors} = this.state;
    if(colorIndex < (colors.length -1)) {
      this.setState((prevState) => ({ colorIndex: prevState.colorIndex + 1}));
    } else {
      this.setState({ colorIndex: 0})
    }
  }

  render() {
    const context = {
      ...this.state,
      nextColor: this.nextColor,
    };
    const {children} = this.props;
    return (
      <ColorsContext.Provider value={context}>
        {children}
      </ColorsContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;