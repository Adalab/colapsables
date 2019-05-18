import React from "react";

class Collapsible extends React.Component {
  render() {
    const {id, cidState, action, name, tv} = this.props;
    return (
      <section id={id} className={`collapsible ${cidState === id ? 'collapsible--open' : ''}`}>
        <div className="collapsible__trigger" onClick={action} data-id={id}>
          <h2 className="collapsible__title">{name}</h2> 
        </div>
        <div className="collapsible__panel">
          <p>de: {tv}</p>
        </div>
      </section>
    );
  }
}

export default Collapsible;