import Button from "@restart/ui/esm/Button";
import { Form, Container } from "react-bootstrap";
const Style = {
  width: "100%",
  height: "50%",
};
const SignUpView = ({ handleInputChange, handleSubmit }) => {
  return (
    <div>
      <div style={Style} className="container ">
        <div className="container col-md-10 ">
          <h2 className="text-center">Sign Up</h2>
          <form>
            <Form.Group className="col-md-12">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback />
            </Form.Group>
            <br />
            <Form.Group className="col-md-12">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback />
            </Form.Group>
            <br />
            <Form.Group className="col-md-12">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                autoComplete="new-password"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback />
            </Form.Group>
            <br />
            <Form.Group className="col-md-12">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                autoComplete="new-password"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback />
            </Form.Group>
          </form>
          <br />
          <div className="text-center">
            <Button className="btn btn-success " onClick={handleSubmit}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { SignUpView };
