import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Premanent address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Main area" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Prime code" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="prime code"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Fast delivery</option>
            <option value="non-ac">Normal Delivery</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Product</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
