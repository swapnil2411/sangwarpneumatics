// "use client";

// import { useState } from "react";

// interface BlogFormProps {
//   initialData?: any;
//   onSubmit: (data: any) => Promise<void>;
// }

// export default function BlogForm({
//   initialData,
//   onSubmit,
// }: BlogFormProps) {
//   const [loading, setLoading] =
//     useState(false);

//   const [imagePreview, setImagePreview] =
//     useState(
//       initialData?.featuredImage || ""
//     );

//   const [formData, setFormData] =
//     useState({
//       title:
//         initialData?.title || "",

//       slug:
//         initialData?.slug || "",

//       shortDescription:
//         initialData?.shortDescription ||
//         "",

//       content:
//         initialData?.content || "",

//       category:
//         initialData?.category || "",

//       status:
//         initialData?.status ||
//         "Draft",

//       featuredImage:
//         initialData?.featuredImage ||
//         "",
//     });

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement |
//       HTMLTextAreaElement |
//       HTMLSelectElement
//     >
//   ) => {
//     const { name, value } =
//       e.target;

//     let updatedData = {
//       ...formData,
//       [name]: value,
//     };

//     if (name === "title") {
//       updatedData.slug = value
//         .toLowerCase()
//         .replace(/[^\w\s]/gi, "")
//         .replace(/\s+/g, "-");
//     }

//     setFormData(updatedData);
//   };

//   const handleImageUpload =
//   async (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {

//     const file =
//       e.target.files?.[0];

//     if (!file) return;

//     try {

//       setLoading(true);

//       const formDataObj =
//         new FormData();

//       formDataObj.append(
//         "file",
//         file
//       );

//       const response =
//         await fetch(
//           "/api/uploadImage",
//           {
//             method: "POST",
//             body: formDataObj,
//           }
//         );

//       const data =
//         await response.json();

//       if (data.success) {

//         setImagePreview(
//           data.url
//         );

//         setFormData(
//           (prev) => ({
//             ...prev,
//             featuredImage:
//               data.url,
//           })
//         );

//       }

//     } catch (error) {

//       console.error(error);

//     } finally {

//       setLoading(false);

//     }
//   };

//   const handleSubmit =
//     async (
//       e: React.FormEvent
//     ) => {
//       e.preventDefault();

//       await onSubmit(formData);
//     };

//   return (
//     <form
//       className="blog-form"
//       onSubmit={handleSubmit}
//     >
//       <div>
//         <label>
//           Blog Title
//         </label>

//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={
//             handleChange
//           }
//           required
//         />
//       </div>

//       <div>
//         <label>
//           Slug
//         </label>

//         <input
//           type="text"
//           name="slug"
//           value={formData.slug}
//           onChange={
//             handleChange
//           }
//           required
//         />
//       </div>

//       <div>
//         <label>
//           Short Description
//         </label>

//         <textarea
//           rows={4}
//           name="shortDescription"
//           value={
//             formData.shortDescription
//           }
//           onChange={
//             handleChange
//           }
//           required
//         />
//       </div>

//       <div>
//         <label>
//           Category
//         </label>

//         <input
//           type="text"
//           name="category"
//           value={
//             formData.category
//           }
//           onChange={
//             handleChange
//           }
//         />
//       </div>

//       <div>
//   <label>
//     Featured Image
//   </label>

//   <input
//     type="file"
//     accept="image/*"
//     onChange={
//       handleImageUpload
//     }
//   />

//   {imagePreview && (
//     <img
//       src={imagePreview}
//       alt="Preview"
//       className="preview-image"
//     />
//   )}
// </div>

//       <div>
//         <label>
//           Content
//         </label>

//         <textarea
//           rows={12}
//           name="content"
//           value={
//             formData.content
//           }
//           onChange={
//             handleChange
//           }
//           required
//         />
//       </div>

//       <div>
//         <label>
//           Status
//         </label>

//         <select
//           name="status"
//           value={
//             formData.status
//           }
//           onChange={
//             handleChange
//           }
//         >
//           <option value="Draft">
//             Draft
//           </option>

//           <option value="Published">
//             Published
//           </option>
//         </select>
//       </div>

//       <button
//         type="submit"
//       >
//         Save Blog
//       </button>
//     </form>
//   );
// }

"use client";

import { useEffect, useState } from "react";

interface BlogFormProps {
initialData?: any;
onSubmit: (data: any) => Promise<void>;
}

export default function BlogForm({
initialData,
onSubmit,
}: BlogFormProps) {
const [loading, setLoading] = useState(false);

const [imagePreview, setImagePreview] =
useState("");

const [formData, setFormData] =
useState({
title: "",
slug: "",
shortDescription: "",
content: "",
category: "",
status: "Draft",
featuredImage: "",
});

useEffect(() => {
if (!initialData) return;


setFormData({
  title:
    initialData.title || "",

  slug:
    initialData.slug || "",

  shortDescription:
    initialData.shortDescription || "",

  content:
    initialData.content || "",

  category:
    initialData.category || "",

  status:
    initialData.status || "Draft",

  featuredImage:
    initialData.featuredImage || "",
});

setImagePreview(
  initialData.featuredImage || ""
);


}, [initialData]);

const handleChange = (
e: React.ChangeEvent<
HTMLInputElement |
HTMLTextAreaElement |
HTMLSelectElement
>
) => {
const { name, value } = e.target;


let updatedData = {
  ...formData,
  [name]: value,
};

if (name === "title") {
  updatedData.slug = value
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-");
}

setFormData(updatedData);


};

const handleImageUpload =
async (
e: React.ChangeEvent<HTMLInputElement>
) => {


  const file =
    e.target.files?.[0];

  if (!file) return;

  try {

    setLoading(true);

    const uploadData =
      new FormData();

    uploadData.append(
      "file",
      file
    );

    const response =
      await fetch(
        "/api/uploadImage",
        {
          method: "POST",
          body: uploadData,
        }
      );

    const data =
      await response.json();

    if (data.success) {

      setImagePreview(
        data.url
      );

      setFormData(
        (prev) => ({
          ...prev,
          featuredImage:
            data.url,
        })
      );
    }

  } catch (error) {

    console.error(
      "Image Upload Error:",
      error
    );

  } finally {

    setLoading(false);

  }
};


const handleSubmit =
async (
e: React.FormEvent
) => {


  e.preventDefault();

  console.log(
    "Submitting:",
    formData
  );

  await onSubmit(
    formData
  );
};


return (
<form
className="blog-form"
onSubmit={
handleSubmit
}
> <div> <label>
Blog Title </label>


    <input
      type="text"
      name="title"
      value={
        formData.title
      }
      onChange={
        handleChange
      }
      required
    />
  </div>

  <div>
    <label>
      Slug
    </label>

    <input
      type="text"
      name="slug"
      value={
        formData.slug
      }
      onChange={
        handleChange
      }
      required
    />
  </div>

  <div>
    <label>
      Short Description
    </label>

    <textarea
      rows={4}
      name="shortDescription"
      value={
        formData.shortDescription
      }
      onChange={
        handleChange
      }
      required
    />
  </div>

  <div>
    <label>
      Category
    </label>

    <input
      type="text"
      name="category"
      value={
        formData.category
      }
      onChange={
        handleChange
      }
    />
  </div>

  <div>
    <label>
      Featured Image
    </label>

    <input
      type="file"
      accept="image/*"
      onChange={
        handleImageUpload
      }
    />

    {loading && (
      <p>
        Uploading...
      </p>
    )}

    {imagePreview && (
      <img
        src={imagePreview}
        alt="Preview"
        className="preview-image"
      />
    )}
  </div>

  <div>
    <label>
      Content
    </label>

    <textarea
      rows={12}
      name="content"
      value={
        formData.content
      }
      onChange={
        handleChange
      }
      required
    />
  </div>

  <div>
    <label>
      Status
    </label>

    <select
      name="status"
      value={
        formData.status
      }
      onChange={
        handleChange
      }
    >
      <option value="Draft">
        Draft
      </option>

      <option value="Published">
        Published
      </option>
    </select>
  </div>

  <button
    type="submit"
    disabled={loading}
  >
    {loading
      ? "Uploading..."
      : "Save Blog"}
  </button>
</form>


);
}
