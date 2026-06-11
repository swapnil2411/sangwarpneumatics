
"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, CloudUpload, Save, X } from "lucide-react";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(
  () =>
    import(
      "@/components/admin/RichTextEditor"
    ),
  {
    ssr: false,
  }
);

interface BlogFormProps {
  initialData?: any;
  onSubmit: (data: any) => Promise<void>;
  onCancel?: () => void;
}

export default function BlogForm({ initialData, onSubmit, onCancel }: BlogFormProps) {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    shortDescription: "",
    content: "",
    category: "",
    status: "Draft",
    featuredImage: "",
    comments: true,       // add
  featured: false,      // add
  seoIndexing: true,    // add
  });

  useEffect(() => {
    if (!initialData) return;
    setFormData({
      title: initialData.title || "",
      slug: initialData.slug || "",
      shortDescription: initialData.shortDescription || "",
      content: initialData.content || "",
      category: initialData.category || "",
      status: initialData.status || "Draft",
      featuredImage: initialData.featuredImage || "",
comments: initialData.comments ?? true,
featured: initialData.featured ?? false,
seoIndexing: initialData.seoIndexing ?? true,
    });
    setImagePreview(initialData.featuredImage || "");
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let updatedData = { ...formData, [name]: value };
    if (name === "title") {
      updatedData.slug = value
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-");
    }
    setFormData(updatedData);
  };

  const handleToggle = (name: string) => {
  setFormData((prev) => ({ ...prev, [name]: !prev[name as keyof typeof prev] }));
};

  const uploadImage = async (file: File) => {
    try {
      setLoading(true);
      const uploadData = new FormData();
      uploadData.append("file", file);
      const response = await fetch("/api/uploadImage", {
        method: "POST",
        body: uploadData,
      });
      const data = await response.json();
      if (data.success) {
        setImagePreview(data.url);
        setFormData((prev) => ({ ...prev, featuredImage: data.url }));
      }
    } catch (error) {
      console.error("Image Upload Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) await uploadImage(file);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) await uploadImage(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const CATEGORIES = ["Technology", "Design", "Business", "Tutorial", "News", "Other"];

  return (
    <form className="blog-form" onSubmit={handleSubmit}>

      {/* ── Content card ── */}
      <div className="bf-card">
        <div className="bf-card-label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          Content
        </div>

        <div className="bf-field">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. How to build a REST API in Node.js"
            required
          />
        </div>

        <div className="bf-row">
          <div className="bf-field">
            <label htmlFor="slug">Slug</label>
            <input
              id="slug"
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="auto-generated-from-title"
              required
            />
            <span className="bf-hint">Auto-generated from title</span>
          </div>
          <div className="bf-field">
            <label htmlFor="category">Category</label>
            <select id="category" name="category" value={formData.category} onChange={handleChange}>
              <option value="">Select a category…</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="bf-field">
          <label htmlFor="shortDescription">
            Short description
            <span className="bf-char">{formData.shortDescription.length}/160</span>
          </label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            rows={3}
            value={formData.shortDescription}
            onChange={handleChange}
            placeholder="A brief summary shown in previews and search results…"
            maxLength={160}
            required
          />
        </div>

        <div className="bf-field">
  <label htmlFor="content">
    Body
  </label>

  <RichTextEditor
    value={formData.content}
    onChange={(value) =>
      setFormData((prev) => ({
        ...prev,
        content: value,
      }))
    }
  />
</div>
      </div>

      {/* ── Bottom two-col grid ── */}
      <div className="bf-bottom-grid">

        {/* Left: image + nothing else for now */}
        <div className="bf-card">
          <div className="bf-card-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            Featured image
          </div>

          {imagePreview ? (
            <div className="bf-preview-wrap">
              <img src={imagePreview} alt="Preview" className="bf-preview-img" />
              <button
                type="button"
                className="bf-remove-img"
                onClick={() => { setImagePreview(""); setFormData((p) => ({ ...p, featuredImage: "" })); }}
              >
                <X size={14} /> Remove
              </button>
            </div>
          ) : (
            <div
              className={`bf-upload-zone ${isDragging ? "dragging" : ""}`}
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
            >
              {loading ? (
                <div className="bf-uploading">
                  <div className="bf-spinner" />
                  <span>Uploading…</span>
                </div>
              ) : (
                <>
                  <CloudUpload size={28} strokeWidth={1.5} className="bf-upload-icon" />
                  <p className="bf-upload-title">Drop image here</p>
                  <p className="bf-upload-sub">PNG, JPG or WebP · max 5 MB</p>
                  <span className="bf-browse-btn">Browse files</span>
                </>
              )}
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
        </div>

        {/* Right: settings */}
        <div className="bf-card">
          <div className="bf-card-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            Settings
          </div>

          <div className="bf-field">
            <label htmlFor="status">Status</label>
            <select id="status" name="status" value={formData.status} onChange={handleChange}>
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
              <option value="Archived">Archived</option>
            </select>
          </div>

          <div className="bf-divider" />

          <div className="bf-toggle-row">
            <div>
              <p>Comments</p>
              <span>Allow readers to comment</span>
            </div>
            <label className="bf-toggle">
              <input type="checkbox" checked={formData.comments}
  onChange={() => handleToggle("comments")} />
              <span className="bf-track"><span className="bf-thumb" /></span>
            </label>
          </div>

          <div className="bf-toggle-row">
            <div>
              <p>Featured post</p>
              <span>Pin to top of listing</span>
            </div>
            <label className="bf-toggle">
              <input type="checkbox" checked={formData.featured}
  onChange={() => handleToggle("featured")}/>
              <span className="bf-track"><span className="bf-thumb" /></span>
            </label>
          </div>

          <div className="bf-toggle-row">
            <div>
              <p>SEO indexing</p>
              <span>Allow search engines to index</span>
            </div>
            <label className="bf-toggle">
              <input type="checkbox" checked={formData.seoIndexing}
  onChange={() => handleToggle("seoIndexing")} />
              <span className="bf-track"><span className="bf-thumb" /></span>
            </label>
          </div>
        </div>
      </div>

      {/* ── Footer actions ── */}
      <div className="bf-footer">
        {onCancel && (
          <button type="button" className="bf-btn-cancel" onClick={onCancel}>
            Discard
          </button>
        )}
        <button type="submit" className="bf-btn-save" disabled={loading}>
          <Save size={15} />
          {loading ? "Saving…" : "Save & publish"}
        </button>
      </div>

    </form>
  );
}