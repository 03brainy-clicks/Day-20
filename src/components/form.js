import React, { useState } from "react";

const Form = () => {
  const [uname, setUname] = useState({
    username: "",
  });
  const [email, setEmail] = useState({
    email: "",
  });
  const [contact, setContact] = useState({
    contact: "",
  });
  const [message, setMessage] = useState({
    message: "",
  });

  function printdata() {
    console.log(uname.username);
    console.log(email.email);
    console.log(contact.contact);
    console.log(message.message);
  }
  return (
    <>
      <div className="container main d-flex align-items-center justify-content-center">
        <div className="col-md-7 mx-auto" id="card">
          <div className="row">
            <div className="col-md-6 px-5 py-3 ">
              <div>
                <h2 className="text-center my-3">
                  <b>
                    <span>G</span>et In Touch
                  </b>
                </h2>
              </div>
              <form action="">
                <div className="name my-3 justify-content-center">
                  <label htmlFor="name">Name</label> <br />
                  <input
                    type="text"
                    value={uname.username}
                    required
                    onChange={(event) => {
                      setUname({ username: event.target.value });
                    }}
                  />
                </div>
                <div className="email my-3">
                  <label htmlFor="email">Email</label> <br />
                  <input
                    type="email"
                    value={email.email}
                    required
                    onChange={(event) => {
                      setEmail({ email: event.target.value });
                    }}
                  />
                </div>
                <div className="contact my-3 ">
                  <label htmlFor="contact">Contact</label> <br />
                  <input
                    type="text"
                    value={contact.contact}
                    required
                    onChange={(event) => {
                      setContact({ contact: event.target.value });
                    }}
                  />
                </div>
                <div className="message my-3">
                  <label htmlFor="message">Message</label> <br />
                  <textarea
                    value={message.message}
                    required
                    onChange={(event) => {
                      setMessage({ message: event.target.value });
                    }}
                  ></textarea>
                </div>
                <div className="my-4">
                  <button
                    type="submit"
                    className="btn px-5  "
                    id="submit"
                    onClick={printdata}
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6" id="image"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
