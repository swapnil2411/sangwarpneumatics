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

// app/contact/ContactForm.tsx

"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import Select from "react-select";
import toast from "react-hot-toast";

import Button from "@/components/common/Button";
import PageLoader from "@/components/common/PageLoader";
import { validateContactForm, ContactFormData, ContactFormErrors } from "@/lib/validations/formValidations";

type SelectOption = {
  label: string;
  value: string;
};

export default function ContactForm() {
  // Loader
  const [loading, setLoading] = useState(false);

  // Errors
  const [errors, setErrors] =
    useState<ContactFormErrors>({});

  // Form State
  const [form, setForm] =
    useState<ContactFormData>({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      address: "",
      product: "",
      message: "",
    });

  // Product Options
  const productOptions: SelectOption[] = [
    {
      value:
        "Air Filtration & Purification Systems",
      label:
        "Air Filtration & Purification Systems",
    },
    {
      value: "Heatless Dehumidifier",
      label: "Heatless Dehumidifier",
    },
    {
      value: "Compressed Air Dryers",
      label: "Compressed Air Dryers",
    },
    {
      value: "Inline Filters",
      label: "Inline Filters",
    },
    {
      value: "Filtration Trolley",
      label: "Filtration Trolley",
    },
    {
      value: "Others",
      label: "Others",
    },
  ];

  // Handle Change
  const handleChange = (
    key: keyof ContactFormData,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

    // Remove field error while typing
    setErrors((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

  // Submit Form
  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // Frontend Validation
    const validationErrors =
      validateContactForm(form);

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);

      // toast.error(
      //   "Please fill all required fields"
      // );

      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      // API Error
      if (!res.ok) {
        setErrors(data.errors || {});

        toast.error(
          data.message ||
            "Something went wrong"
        );

        return;
      }

      // Success
      toast.success(
        "Form submitted successfully"
      );

      // Reset Form
      setForm({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        address: "",
        product: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.log(error);

      toast.error(
        "Network error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Full Page Loader */}
      <PageLoader loading={loading} />

      <form
        onSubmit={handleSubmit}
        className="contact_form_wrapper"
      >
        <div className="form_container grid gap-4">

          {/* Full Name */}
          <div className="form_element">
            <label>Full Name *</label>

            <input
              value={form.fullName}
              onChange={(e) =>
                handleChange(
                  "fullName",
                  e.target.value
                )
              }
              placeholder="Enter Full Name"
            />

            {errors.fullName && (
              <p className="text-red-500 text-sm">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Company Name */}
          <div className="form_element">
            <label>Company Name</label>

            <input
              value={form.companyName}
              onChange={(e) =>
                handleChange(
                  "companyName",
                  e.target.value
                )
              }
              placeholder="Enter Company Name"
            />
          </div>

          {/* Email */}
          <div className="form_element">
            <label>Email *</label>

            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                handleChange(
                  "email",
                  e.target.value
                )
              }
              placeholder="Enter Email Address"
            />

            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="form_element">
            <label>Phone Number *</label>

            <input
              value={form.phone}
              onChange={(e) =>
                handleChange(
                  "phone",
                  e.target.value
                )
              }
              placeholder="Enter Phone Number"
            />

            {errors.phone && (
              <p className="text-red-500 text-sm">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Address */}
          <div className="form_element">
            <label>Address</label>

            <textarea
              value={form.address}
              onChange={(e) =>
                handleChange(
                  "address",
                  e.target.value
                )
              }
              placeholder="Enter Address"
            />
          </div>

          {/* Product */}
          <div className="form_element">
            <label>
              Product Interested In *
            </label>

            <Select<SelectOption>
              options={productOptions}
              placeholder="Select a Product"
              className="react_select_container"
              classNamePrefix="react_select"
              value={
                productOptions.find(
                  (option) =>
                    option.value ===
                    form.product
                ) || null
              }
              onChange={(option) =>
                handleChange(
                  "product",
                  option?.value || ""
                )
              }
            />

            {errors.product && (
              <p className="text-red-500 text-sm">
                {errors.product}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="form_element">
            <label>Message *</label>

            <textarea
              value={form.message}
              onChange={(e) =>
                handleChange(
                  "message",
                  e.target.value
                )
              }
              placeholder="Enter Your Message"
            />

            {errors.message && (
              <p className="text-red-500 text-sm">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            btnVariant="fill_btn"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Submitting..."
              : "Submit"}
          </Button>

        </div>
      </form>
    </>
  );
}