import React from "react";
import Header from "./Header"
export default function Contact() {
  return (
    <>
    <Header />
    <p>Contact me</p>
    <div className="contact">
      <form>
        <div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="staticEmail" placeholder="youremail@example.com" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputMessage" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <input type="input" className="form-control" id="inputMessage" placeholder="Your message here" />
            </div>
          </div>
        </div>
        </form>

        {/* <ul>
          <li>https://github.com/Ebyington</li>
          <li>ericbyington33@gmail.com</li>
          <li>(555)555-5555</li>
        </ul> */}
     
    </div>
     
    </>
  )
}
