"use client";

import Button from "@/components/common/Button";
import Select from "react-select";
export default function ContactForm() {
    const productOptions = [
    { value: "Air Filtration & Purification Systems", label: "Air Filtration & Purification Systems" },
    { value: "Heatless Dehumidifier", label: "Heatless Dehumidifier" },
    { value: "Compressed Air Dryers", label: "Compressed Air Dryers" },
    { value: "Inline Filters", label: "Inline Filters" },
    { value: "Inline Filters", label: "Inline Filters" },
    { value: "Filtration Trolley", label: "Filtration Trolley" },
    {value: "Others", label: "Others" },
    ];
    return (
        <div className="contact_form_wrapper">
            <div className="form_container grid gap-4">
                <div className="form_element">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter Full Name" />
                </div>

                <div className="form_element">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" name="company" placeholder="Enter Company Name" />
                </div>

                <div className="form_element">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter Email Address" />
                </div>

                <div className="form_element">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter Phone Number" />
                </div>


                <div className="form_element">
                    <label htmlFor="address">Address</label>
                    <textarea id="address" name="address" placeholder="Enter Address"></textarea>
                </div>

                <div className="form_element">
                    <label htmlFor="subject">Product Interested In</label>
                    <Select
    options={productOptions}
    placeholder="Select a Product"
    className="react_select_container"
    classNamePrefix="react_select"
  />
                </div>

                <div className="form_element">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Enter Your Message"></textarea>
                </div>

                <Button btnVariant="fill_btn">
                    Submit
                </Button>
            </div>
        </div>
    )
}