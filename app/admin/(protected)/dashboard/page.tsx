

// export default function DashboardPage() {
//   return (
//     <div>
//       <h1 className="page-title">
//         Dashboard
//       </h1>

//       <div className="dashboard-grid">

//         <div className="dashboard-card">
//           <h3>Total Blogs</h3>
//           <span>0</span>
//         </div>

//         <div className="dashboard-card">
//           <h3>Published Blogs</h3>
//           <span>0</span>
//         </div>

//         <div className="dashboard-card">
//           <h3>Draft Blogs</h3>
//           <span>0</span>
//         </div>

//       </div>
//     </div>
//   );
// }

"use client";

import {
  useEffect,
  useState,
} from "react";

interface DashboardStats {
  totalBlogs: number;
  publishedBlogs: number;
  draftBlogs: number;
}

export default function DashboardPage() {
  const [stats, setStats] =
    useState<DashboardStats>({
      totalBlogs: 0,
      publishedBlogs: 0,
      draftBlogs: 0,
    });

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchStats =
      async () => {
        try {
          const response =
            await fetch(
              "/api/dashboard"
            );

          const data =
            await response.json();

          if (
            data.success
          ) {
            setStats({
              totalBlogs:
                data.totalBlogs,

              publishedBlogs:
                data.publishedBlogs,

              draftBlogs:
                data.draftBlogs,
            });
          }
        } catch (error) {
          console.error(
            error
          );
        } finally {
          setLoading(false);
        }
      };

    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="page-title">
        Dashboard
      </h1>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>
            Total Blogs
          </h3>

          <span>
            {loading
              ? "..."
              : stats.totalBlogs}
          </span>
        </div>

        <div className="dashboard-card">
          <h3>
            Published Blogs
          </h3>

          <span>
            {loading
              ? "..."
              : stats.publishedBlogs}
          </span>
        </div>

        <div className="dashboard-card">
          <h3>
            Draft Blogs
          </h3>

          <span>
            {loading
              ? "..."
              : stats.draftBlogs}
          </span>
        </div>
      </div>
    </div>
  );
}