import React from 'react';

class BadgeForm extends React.Component {
    state = {};
    /*Enlazando eventos */
  handleChange = e => {
/*     console.log({
      name: e.target.name,
      value: e.target.value,
    }); */
/*     this.setState({
        [e.target.name]: e.target.value,
    }) */
  };

  handleClick = e => {
    console.log('Button was clicked');
  };

/*   handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state)
  };
 */
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              placeholder = "Intoduce tu nombre"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              placeholder = "Introduce tu apellido"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="email"
              placeholder = "Introduce tu email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Jon Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              placeholder = "Introduce tu email"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              placeholder = "Introduce tu usuario de twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>

    {this.props.error && <p className="text-dinger">{this.props.error.message}</p>}
        </form>
      </div>
    );
  }
}

export default BadgeForm;