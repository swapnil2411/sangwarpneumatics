// "use client";

// import Button from "@/components/common/Button";
// import Select from "react-select";
// export default function ContactForm() {
//     const productOptions = [
//     { value: "Air Filtration & Purification Systems", label: "Air Filtration & Purification Systems" },
//     { value: "Heatless Dehumidifier", label: "Heatless Dehumidifier" },
//     { value: "Compressed Air Dryers", label: "Compressed Air Dryers" },
//     { value: "Inline Filters", label: "Inline Filters" },
//     { value: "Inline Filters", label: "Inline Filters" },
//     { value: "Filtration Trolley", label: "Filtration Trolley" },
//     {value: "Others", label: "Others" },
//     ];
//     return (
//         <div className="contact_form_wrapper">
//             <div className="form_container grid gap-4">
//                 <div className="form_element">
//                     <label htmlFor="name">Full Name</label>
//                     <input type="text" id="name" name="name" placeholder="Enter Full Name" />
//                 </div>

//                 <div className="form_element">
//                     <label htmlFor="company">Company Name</label>
//                     <input type="text" id="company" name="company" placeholder="Enter Company Name" />
//                 </div>

//                 <div className="form_element">
//                     <label htmlFor="email">Email</label>
//                     <input type="email" id="email" name="email" placeholder="Enter Email Address" />
//                 </div>

//                 <div className="form_element">
//                     <label htmlFor="phone">Phone Number</label>
//                     <input type="tel" id="phone" name="phone" placeholder="Enter Phone Number" />
//                 </div>


//                 <div className="form_element">
//                     <label htmlFor="address">Address</label>
//                     <textarea id="address" name="address" placeholder="Enter Address"></textarea>
//                 </div>

//                 <div className="form_element">
//                     <label htmlFor="subject">Product Interested In</label>
//                     <Select
//     options={productOptions}
//     placeholder="Select a Product"
//     className="react_select_container"
//     classNamePrefix="react_select"
//   />
//                 </div>

//                 <div className="form_element">
//                     <label htmlFor="message">Message</label>
//                     <textarea id="message" name="message" placeholder="Enter Your Message"></textarea>
//                 </div>

//                 <Button btnVariant="fill_btn">
//                     Submit
//                 </Button>
//             </div>
//         </div>
//     )
// }

"use client";

import { useState } from "react";
import Button from "@/components/common/Button";
import dynamic from "next/dynamic";
import { TailSpin } from "react-loader-spinner";
import PageLoader from "@/components/common/PageLoader";
import toast from "react-hot-toast";
import Select from "react-select";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
  fullName?: string;
  email?: string;
  phone?: string;
  product?: string;
  message?: string;
}>({});

type SelectOption = {
  label: string;
  value: string;
};

  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    address: "",
    product: "",
    message: "",
  });

  const productOptions: SelectOption[] = [
    { value: "Air Filtration & Purification Systems", label: "Air Filtration & Purification Systems" },
    { value: "Heatless Dehumidifier", label: "Heatless Dehumidifier" },
    { value: "Compressed Air Dryers", label: "Compressed Air Dryers" },
    { value: "Inline Filters", label: "Inline Filters" },
    { value: "Filtration Trolley", label: "Filtration Trolley" },
    { value: "Others", label: "Others" },
  ];

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors(data.errors || {});
      } else {
        setForm({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          address: "",
          product: "",
          message: "",
        });
        toast.success("Form submitted successfully");
      }
    } catch (err) {
      console.log(err);
       toast.error("Failed to submit form");
    }finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <PageLoader />
      )}

      <form onSubmit={handleSubmit} className="contact_form_wrapper">
      <div className="form_container grid gap-4">

        <div className="form_element">
          <label htmlFor="name">Full Name</label>
          <input
            value={form.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            placeholder="Enter Full Name"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        <div className="form_element">
          <label htmlFor="company">Company Name</label>
          <input
            value={form.companyName}
            onChange={(e) => handleChange("companyName", e.target.value)}
            placeholder="Enter Company Name"
          />
        </div>

        <div className="form_element">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Enter Email Address"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
        </div>

        <div className="form_element">
          <label htmlFor="phone">Phone Number</label>
          <input
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="Enter Phone Number"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone[0]}</p>}
        </div>

        <div className="form_element">
          <label htmlFor="address">Address</label>
          <textarea
            value={form.address}
            onChange={(e) => handleChange("address", e.target.value)}
            placeholder="Enter Address"
          />
        </div>

        <div className="form_element">
          <label htmlFor="subject">Product Interested In</label>
          <Select
            options={productOptions}
            placeholder="Select a Product"
            className="react_select_container"
            classNamePrefix="react_select"
            onChange={(option) =>
    handleChange("product", option?.value || "")
  }
          />
          {errors.product && <p className="text-red-500 text-sm">{errors.product[0]}</p>}
        </div>

        <div className="form_element">
          <label htmlFor="message">Message</label>
          <textarea
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Enter Your Message"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message[0]}</p>}
        </div>

        <Button btnVariant="fill_btn" type="submit">
          {loading ? "Sending..." : "Submit"}
        </Button>

      </div>
      </form>
    </>
    
  );
}