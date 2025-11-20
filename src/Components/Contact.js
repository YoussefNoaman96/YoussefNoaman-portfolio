import React , {useState} from "react";
import img from "../assets/img/contact-img.svg"
export const  Contact = ()=>{
    const [userInfo,setuserInfo] = useState({
        fName : "",
        lName : "",
        email : "",
        phoneNo : "",
        message : ""
    })
    const [active , setactive] = useState(false)
    const [buttonText, setButtonText] = useState("send");
    const [status, setStatus] = useState({ ok: null, message: "" });
    const send =()=>{
        if(userInfo.fName !== "" && userInfo.lName !== "" && userInfo.email !== "" && userInfo.phoneNo !== ""){    
            setButtonText("arrived");   
            setactive(true);
            setStatus({ ok: true, message: "Sent successfully!" });
        }else{
            setStatus({ ok: false, message: "Please enter full details." });
        }
    }
    return(
        <section className="contact" id="connect">
            <div className="container  d-flex justify-content-center align-items-center row">
                <div className="form-img col-md-6  col-12">
                    <img src={img} alt="" className="w-100"/>
                </div>
                <div className="form col-md-6  col-12">
                    <h2 className="mb-3">Get In Touch</h2>
                    <div className="name row">
                        <div className="space col-sm-6 col-12 w-50  p-0">
                            <input type="text" className="ps-2  " placeholder="First Name" value={userInfo.fName} onChange={(e)=> setuserInfo({...userInfo , fName:e.target.value})}/>
                        </div>
                        <div className="space col-sm-6 col-12 w-50  p-0">
                            <input type="text" className="ps-2 " placeholder="Last Name" value={userInfo.lName} onChange={(e)=> setuserInfo({...userInfo , lName:e.target.value})}/>
                        </div>
                    </div>
                    <div className=" row">
                    <div className="space col-sm-6 col-12 w-50  p-0">
                            <input type="email" className="ps-2" placeholder="Email Address"  value={userInfo.email} onChange={(e)=> setuserInfo({...userInfo , email:e.target.value})}/>
                        </div>
                        <div className="space col-sm-6 col-12 w-50  p-0">
                            <input type="text" className="ps-2" placeholder="Phone Number"  value={userInfo.phoneNo} onChange={(e)=> setuserInfo({...userInfo , phoneNo:e.target.value})}/>
                        </div>
                    </div>
                    <textarea rows="5"  className="ps-3 d-block" placeholder="Message" value={userInfo.message} onChange={(e)=> setuserInfo({...userInfo , message:e.target.value})}></textarea>
                    <button type="submit" onClick={send} className={active ? "active" : ""}><span>{buttonText}</span></button>
                    <div className="mt-2">
                        {status.message && (
                            <span className={status.ok ? "text-success" : "text-danger"}>
                            {status.message}</span>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
