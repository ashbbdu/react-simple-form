import React, { useState } from "react"
const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        comments: false,
        candidates: false,
        offers: false,
        notification: ""
    })

    const onChangeHander = (event) => {
        const { name, type, value, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formData)
    }

    return (
        <div className="main-container my-4">
            <form onSubmit={submitHandler}>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" type="text" className="form-control" placeholder="Enter First Name" onChange={onChangeHander} value={formData.firstName} />

                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" className="form-control" placeholder="Enter Last Name" onChange={onChangeHander} value={formData.lastName} />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" className="form-control" placeholder="Enter Your Email" onChange={onChangeHander} value={formData.email} />

                <label htmlFor="country">Coutnry</label>
                <select className="form-control" name="country" id='country' onChange={onChangeHander} value={formData.country}>
                    <option value="" defaultChecked>Select a Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Israel">Israel</option>
                    <option value="Australia">Australia</option>
                    <option value="Japan">Japan</option>


                </select>

                <label htmlFor="street">Street</label>
                <input id="street" name="street" type="text" className="form-control" placeholder="Enter Street Address" onChange={onChangeHander} value={formData.street} />

                <label htmlFor="city">City</label>
                <input id="city" name="city" type="text" className="form-control" placeholder="Enter City" onChange={onChangeHander} value={formData.city} />

                <label htmlFor="state">State / Province</label>
                <input id="state" name="state" type="text" className="form-control" placeholder="Enter State" onChange={onChangeHander} value={formData.state} />


                <label htmlFor="zip">ZIP / Postal code</label>
                <input id="zip" name="zip" type="text" className="form-control" placeholder="Enter Zip/Postal Code" onChange={onChangeHander} value={formData.zip} />

                <h6>By Email</h6>

                <input type="checkbox" id="comments" name="comments" className="mr-2" onChange={onChangeHander} checked={formData.comments} />
                <label htmlFor="comments">Comments</label>
                <p>Get notified when someones posts a comment on a posting.</p>


                <input type="checkbox" id="candidates" name="candidates" className="mr-2" onChange={onChangeHander} checked={formData.candidates} />
                <label htmlFor="candidates">Candidates</label>
                <p>Get notified when a candidate applies for a job.</p>

                <input type="checkbox" id="offers" name="offers" className="mr-2" onChange={onChangeHander} checked={formData.offers} />
                <label htmlFor="offers">Offers</label>
                <p>Get notified when a candidate accepts or rejects an offer.</p>

                <h6>Push Notifications</h6>
                <p>These are delivered via SMS to your mobile phone.</p>

                <input type="radio" id="everything" name="notification" onChange={onChangeHander} value="Everything" checked={formData.notification === "Everything"} />
                <label htmlFor="everything">Everything</label><br></br>

                <input type="radio" id="same" name="notification" onChange={onChangeHander} value="Same as Email" checked={formData.notification === "Same as Email"} />
                <label htmlFor="same">Same as Email</label> <br></br>

                <input type="radio" id="none" name="notification" onChange={onChangeHander} value="No push notification" checked={formData.notification === "No push notification"} />
                <label htmlFor="none">No push notifications</label><br></br>

                <button className="btn btn-primary my-2">Submit</button>
            </form>
        </div>
    )
}


export default Form;