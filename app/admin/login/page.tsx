// "use client";

// import { useEffect, useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useRouter } from "next/navigation";
// import "../../styles/login.css"

// import { auth } from "@/lib/firebase";
// import { useAuth } from "@/context/AuthContext";

// // import "./login.css";

// export default function LoginPage() {
//   const router = useRouter();

//   const { user, loading: authLoading } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!authLoading && user) {
//       router.push("/admin/dashboard");
//     }
//   }, [user, authLoading, router]);

//   const handleLogin = async (
//     e: React.FormEvent
//   ) => {
//     e.preventDefault();

//     try {
//       setLoading(true);
//       setError("");

//       await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       router.push("/admin/dashboard");
//     } catch (err: any) {
//       setError(
//         err?.message || "Invalid credentials"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">

//         <h1>Sangawar CMS</h1>
//         <p>Admin Login</p>

//         <form onSubmit={handleLogin}>

//           <div className="form-group">
//             <label>Email</label>

//             <input
//               type="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(e) =>
//                 setEmail(e.target.value)
//               }
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>

//             <input
//               type="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) =>
//                 setPassword(e.target.value)
//               }
//               required
//             />
//           </div>

//           {error && (
//             <p className="error-text">
//               {error}
//             </p>
//           )}

//           <button
//             type="submit"
//             disabled={loading}
//           >
//             {loading
//               ? "Signing In..."
//               : "Login"}
//           </button>

//         </form>

//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!authLoading && user) {
      router.push("/admin/dashboard");
    }
  }, [user, authLoading, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin/dashboard");
    } catch (err: any) {
      setError(err?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      {/* ── Left panel ── */}
      <div style={styles.left}>
        {/* Dark overlay */}
        <div style={styles.overlay} />
        <div style={styles.leftContent}>

          <h2 style={styles.tagline}>Manage your content with confidence</h2>
          <p style={styles.taglineSub}>
            A powerful admin panel to control every aspect of your platform —
            content, users, and settings in one place.
          </p>

          
        </div>

        <p style={styles.leftFooter}>© 2026 Sangawar CMS · All rights reserved</p>
      </div>

      {/* ── Right panel (form) ── */}
      <div style={styles.right}>
        <div style={styles.formInner}>
          {/* Logo */}
          <div style={styles.logoArea}>
            <Image
              src="/assets/sangawar-logo.png"
              alt="Sangawar Logo"
              width={100}
              height={28}
              style={{ margin: "0 auto"}}
              />
          </div>

          <h1 style={styles.formHeading}>Welcome back</h1>
          <p style={styles.formSub}>Sign in to your admin account</p>

          <form onSubmit={handleLogin} style={{ width: "100%" }}>
            {/* Email */}
            <div style={styles.field}>
              <label style={styles.label}>Email address</label>
              <div style={styles.inputWrap}>
                <span style={styles.inputIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="2,4 12,13 22,4" />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
            </div>

            {/* Password */}
            <div style={styles.field}>
              <label style={styles.label}>Password</label>
              <div style={styles.inputWrap}>
                <span style={styles.inputIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={styles.input}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  style={styles.eyeBtn}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Forgot */}
            <div style={styles.forgotRow}>
              <a href="/admin/forgot-password" style={styles.forgotLink}>Forgot password?</a>
            </div>

            {/* Error */}
            {error && (
              <div style={styles.errorBox}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A32D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span style={styles.errorText}>{error}</span>
              </div>
            )}

            {/* Submit */}
            <button type="submit" disabled={loading} style={{ ...styles.submitBtn, opacity: loading ? 0.7 : 1 }}>
              {loading && <span style={styles.spinner} />}
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ─── Styles ─────────────────────────────────────────────────── */
const styles: Record<string, React.CSSProperties> = {
  page: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  /* Left */
  left: {
    flex: 2,
    backgroundImage: "url('https://images.unsplash.com/photo-1738918922725-d70c666ddccb?q=80&w=687&auto=format&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "2.5rem",
    position: "relative",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0, 1, 85, 0.8)",
    zIndex: 0,
  },
  leftContent: { position: "absolute", zIndex: 1, top: "50%", left: "2.5rem", transform: "translateY(-50%)", maxWidth: "60%", textAlign: "left" },
  brandRow: { display: "flex", alignItems: "center", gap: 10, marginBottom: "2.5rem" },
  brandMark: {
    width: 36, height: 36, borderRadius: 8,
    background: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.25)",
    display: "flex", alignItems: "center", justifyContent: "center",
    color: "#fff",
  },
  brandName: { fontSize: 15, fontWeight: 500, color: "#fff" },
  tagline: { fontSize: 45, fontWeight: 500, color: "#fff", lineHeight: 1.35, marginBottom: "0.75rem" },
  taglineSub: { fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, marginBottom: "2rem" },
  pills: { display: "flex", flexDirection: "column", gap: 10 },
  pill: {
    display: "flex", alignItems: "center", gap: 10,
    background: "rgba(255,255,255,0.08)",
    border: "0.5px solid rgba(255,255,255,0.15)",
    borderRadius: 10, padding: "10px 14px",
  },
  pillIcon: { fontSize: 15 },
  pillText: { fontSize: 13, color: "rgba(255,255,255,0.75)" },
  leftFooter: { fontSize: 12, color: "rgba(255,255,255,0.35)", position: "absolute", bottom: "2.5rem", left: "2.5rem", zIndex: 1 },

  /* Right */
  right: {
    flex: 1,
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2.5rem",
  },
  formInner: { width: "100%", maxWidth: "90%" },

  /* Logo */
  logoArea: { display: "flex", alignItems: "center", gap: 12, marginBottom: "2rem" },
  logoCircle: {
    width: 44, height: 44, borderRadius: 10,
    background: "#EEEDFE",
    border: "1px solid #AFA9EC",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  logoTitle: { fontSize: 15, fontWeight: 500, color: "#1a1a2e", margin: 0 },
  logoSub: { fontSize: 12, color: "#888", margin: 0 },

  /* Form */
  formHeading: { fontSize: 24, fontWeight: 500, color: "#1a1a2e", marginBottom: 4, textAlign: "center" },
  formSub: { fontSize: 14, color: "#888", marginBottom: "1.75rem", textAlign: "center" },
  field: { marginBottom: "1rem" },
  label: { display: "block", fontSize: 13, fontWeight: 500, color: "#555", marginBottom: 6 },
  inputWrap: { position: "relative" },
  inputIcon: {
    position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)",
    color: "#aaa", display: "flex", pointerEvents: "none",
  },
  input: {
    width: "100%", height: 40,
    padding: "0 40px 0 36px",
    border: "0.5px solid #ddd",
    borderRadius: 8,
    background: "#f9f9fb",
    color: "#1a1a2e",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
  },
  eyeBtn: {
    position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
    background: "none", border: "none", cursor: "pointer",
    color: "#aaa", display: "flex", alignItems: "center", padding: 2,
  },

  /* Forgot */
  forgotRow: { textAlign: "right", marginTop: -6, marginBottom: "1.25rem" },
  forgotLink: { fontSize: 12, color: "#534AB7", textDecoration: "none" },

  /* Error */
  errorBox: {
    display: "flex", alignItems: "center", gap: 8,
    background: "#FCEBEB", border: "0.5px solid #F7C1C1",
    borderRadius: 8, padding: "10px 12px", marginBottom: "1rem",
  },
  errorText: { fontSize: 13, color: "#791F1F" },

  /* Submit */
  submitBtn: {
    width: "100%", height: 40,
    background: "#0952ba",
    border: "none", borderRadius: 8,
    color: "#fff", fontSize: 14, fontWeight: 500,
    cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
    transition: "background 0.15s",
  },

  /* Spinner */
  spinner: {
    width: 14, height: 14,
    border: "2px solid rgba(255,255,255,0.3)",
    borderTopColor: "#fff",
    borderRadius: "50%",
    display: "inline-block",
    animation: "spin 0.6s linear infinite",
  },
};