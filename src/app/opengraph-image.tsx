import { ImageResponse } from "next/og";

export const alt = "Taha Khadraoui — DevOps & Cloud Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0b0c0e",
          backgroundImage:
            "radial-gradient(900px circle at 50% -20%, rgba(255,255,255,0.06), transparent 70%)",
          color: "#f4f5f7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.16)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              color: "#a7b9cc",
            }}
          >
            TK
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 22, fontWeight: 600 }}>Taha Khadraoui</span>
            <span style={{ fontSize: 15, color: "#6c737f" }}>DevOps &amp; Cloud Engineer</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 74, fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.035em" }}>
            I build the app
          </div>
          <div
            style={{
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              color: "#d8dbe2",
            }}
          >
            and the cloud it runs on.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 22,
            borderTop: "1px solid rgba(255,255,255,0.10)",
            paddingTop: 26,
            fontSize: 19,
            color: "#9aa1ad",
          }}
        >
          {["AWS", "Kubernetes", "Terraform", "NestJS", "Flutter", "CI/CD"].map((tag) => (
            <span key={tag} style={{ display: "flex" }}>
              {tag}
            </span>
          ))}
          <span style={{ display: "flex", marginLeft: "auto", color: "#a7b9cc" }}>
            CKAD · AWS Certified
          </span>
        </div>
      </div>
    ),
    size,
  );
}
