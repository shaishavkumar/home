import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {

    const [data, setData] = useState({
        fullName:'',
        phoneNumber:'',
        eMail:'',
        msg:'',
    });

    const InputEvent =(event) =>{
          const {name, value} = event.target;
          setData((preVal =>{
              return(
                  {
                      ...preVal,
                      [name]:value,
                  }
              );
          }))
    }

    const formSubmit=(event) =>{
        //  event.preventDefault();

         alert(`My Name is ${data.fullName}. My Mobile Number is "${data.phoneNumber}". My Email Address is "${data.eMail}" and i Want to say "${data.msg}".`);
    }
  
    // const validateTextBox = ()=>{
    //     var box1 = document.getElementById("name");
    //     var box2 = document.getElementById("phonenumber");
    //     var box3 = document.getElementById("email");
    
    //         if ((box1.value.length ==="") || (box2.value.length === "") || (box3.value.length ==="")){
    //         alert("Fill the mandatory field");
    //         return false;
    //     }
    // }
    

    return (
        <>
            <div className="my-5 main-contact">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div animate__animated animate__backInUp">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="form-group entries">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="text" className="form-control" id="name" 
                                name="fullName"
                                value={data.fullName}
                                onChange={InputEvent}
                                placeholder="Enter Your Full Name" required/>
                            </div>
                            <div className="form-group entries">
                                <label for="exampleFormControlInput1">Mobile Number</label>
                                <input type="number" className="form-control" id="phonenumber" 
                                name="phoneNumber"
                                value={data.phoneNumber}
                                onChange={InputEvent}
                                placeholder="Enter Your Contact Number" required/>
                            </div>
                            <div className="form-group entries">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="email" 
                                name="eMail"
                                value={data.eMail}
                                onChange={InputEvent}
                                placeholder="Enter Your Email Address" required/>
                            </div>
                            <div className="form-group entries">
                                <label for="exampleFormControlTextarea1">Massage</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                name="msg"
                                value={data.msg}
                                onChange={InputEvent}></textarea>
                            </div>
                            <div className="col-md-3 col-5 mx-auto entries">
                                <button  className="btn" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;