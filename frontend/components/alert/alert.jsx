import React from "react";

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.dismissAlerts = this.dismissAlerts.bind(this);
    this.state = { alertsShow: "hidden" };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.errors !== prevProps.errors) {
      if (this.props.errors.length && this.state.alertsShow === "hidden") {
        this.setState({ alertsShow: "active" });
      } else if (this.props.errors.length === 0 && this.props.errors !== prevProps.errors) {
        this.setState({ alertsShow: "hidden" });
      }
    }
  }

  dismissAlerts() {
    this.setState({ alertsShow: "hidden" });
  }

  render() {
    const { errors } = this.props;
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