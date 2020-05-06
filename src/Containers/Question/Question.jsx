import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Question = () => {
  const [change, handleChange]= useState();
  const [correct, setCorrect]= useState("Please answer the question");

  const checkAnswer = (answer) =>  answer === "true" || answer === "True" ? setCorrect("that's Correct! Well Done") : setCorrect("that's Incorrect");

  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} md="4">
          <h3>Is the Sun a star?</h3>
          <Form.Control
            required
            type="text"
            placeholder="True or False"
            onChange={e => handleChange(e.target.value)}
          />
          <p>{correct}</p>
        </Form.Group>
        </Form.Row>
      <Button type="submit" onClick={() => checkAnswer(change)}>Submit Answer</Button>
    </Form>
  )
};

export default Question;
