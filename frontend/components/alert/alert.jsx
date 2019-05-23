import React from "react";

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.dismissAlerts = this.dismissAlerts.bind(this);
    this.state = { alertsShow: "active" };
  }

  componentWillReceiveProps() {
    if (this.props.errors.length) this.setState({ alertsShow: "active" });
  }

  dismissAlerts() {
    this.setState({ alertsShow: "hidden" });
  }

  render() {
    const { errors } = this.props;
    if (!errors.length) return null;

    const errorLis = errors.map( (error, idx) => <li key={idx}>{error}</li>)
    return (
      <div className={`alert ${this.state.alertsShow}`}>
        <div className="info-symbol">&#9432;</div>
        <div className="alert-message">
          <ul className="alert-list">
            {errorLis}
          </ul>
          <div className="alert-dismiss" onClick={this.dismissAlerts}>&times;</div>
        </div>
      </div>
    );
  }
}

export default Alert;