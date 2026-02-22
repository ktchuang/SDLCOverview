import { useState, useEffect, useRef } from "react";

const PHASES = [
  {
    id: "explore",
    name: "市場探索",
    nameEn: "Market Discovery",
    icon: "🔭",
    color: "#007AFF",
    colorLight: "#E8F2FF",
    size: "large",
    description: "探索新市場機會、分析競爭態勢、驗證商業假設",
    roles: [
      { title: "Business Development", task: "市場趨勢分析、策略聯盟、GTM (Go-To-Market) 策略制定" },
      { title: "Marketing", task: "品牌定位、內容行銷、Lead Generation" },
      { title: "Product Management", task: "產品願景定義、市場需求收集與優先排序" },
      { title: "Sales", task: "客戶需求探詢、市場回饋傳遞" },
    ],
    stats: { label: "關鍵產出", value: "GTM Plan・市場分析・Roadmap" },
  },
  {
    id: "define",
    name: "需求定義",
    nameEn: "Requirements",
    icon: "📋",
    color: "#5856D6",
    colorLight: "#F0EFFF",
    size: "medium",
    description: "將業務需求轉化為明確的系統需求規格",
    roles: [
      { title: "Product Management", task: "PRD 撰寫、User Story 定義、Backlog 排序" },
      { title: "System Analyst", task: "需求訪談、業務流程建模、SRS 撰寫" },
      { title: "Pre-Sales / SE", task: "客戶技術可行性評估、RFP 回覆" },
      { title: "UX/UI Design", task: "User Research、Persona 建立、Journey Map" },
    ],
    stats: { label: "關鍵產出", value: "PRD・SRS・Use Case・Wireframe" },
  },
  {
    id: "design",
    name: "系統設計",
    nameEn: "System Design",
    icon: "✏️",
    color: "#AF52DE",
    colorLight: "#F5EEFF",
    size: "medium",
    description: "設計系統架構、資料庫結構與 API 介面",
    roles: [
      { title: "System Architect", task: "技術選型、微服務架構設計、ADR 撰寫" },
      { title: "System Designer", task: "HLD/LLD、DB Schema、API Spec 設計" },
      { title: "UX/UI Design", task: "Mockup、Prototype、Design System 建立" },
      { title: "Data Engineer", task: "資料模型設計、ETL Pipeline 規劃" },
    ],
    stats: { label: "關鍵產出", value: "HLD・LLD・API Spec・Prototype" },
  },
  {
    id: "develop",
    name: "開發實作",
    nameEn: "Development",
    icon: "⚡",
    color: "#FF9500",
    colorLight: "#FFF4E5",
    size: "large",
    description: "將設計轉化為可運行的程式碼",
    roles: [
      { title: "Software Engineer", task: "功能開發、Code Review、單元測試" },
      { title: "Library / Kernel Dev", task: "核心模組開發、SDK 維護、效能優化" },
      { title: "Tech Lead / EM", task: "技術決策把關、Sprint 管理、團隊帶領" },
      { title: "Scrum Master", task: "敏捷儀式主持、障礙排除、速度追蹤" },
    ],
    stats: { label: "關鍵產出", value: "Production Code・Test Suite・Tech Doc" },
  },
  {
    id: "test",
    name: "測試驗證",
    nameEn: "Testing & QA",
    icon: "🔍",
    color: "#34C759",
    colorLight: "#E8FAF0",
    size: "medium",
    description: "確保產品品質符合預期標準",
    roles: [
      { title: "Quality Assurance", task: "測試計畫、自動化測試、效能測試、相容性測試" },
      { title: "Security", task: "滲透測試、SAST/DAST、弱點掃描" },
      { title: "Software Engineer", task: "Bug 修復、效能調校、整合測試" },
      { title: "System Analyst", task: "UAT 協調、需求追溯驗證" },
    ],
    stats: { label: "關鍵產出", value: "測試報告・Bug Report・安全評估" },
  },
  {
    id: "release",
    name: "部署發佈",
    nameEn: "Release & Deploy",
    icon: "🚀",
    color: "#FF2D55",
    colorLight: "#FFE8ED",
    size: "small",
    description: "管控軟體從開發到正式環境的發佈流程",
    roles: [
      { title: "Release Management", task: "發佈排程、Go/No-Go 決策、Rollback 計畫" },
      { title: "SRE / DevOps", task: "CI/CD Pipeline、藍綠部署、金絲雀發佈" },
      { title: "Technical Writer", task: "Release Notes、升級指南撰寫" },
      { title: "Customer Support", task: "客戶通知、FAQ 準備" },
    ],
    stats: { label: "關鍵產出", value: "Release Plan・Release Notes・Runbook" },
  },
  {
    id: "operate",
    name: "維運監控",
    nameEn: "Operations",
    icon: "📡",
    color: "#00C7BE",
    colorLight: "#E5FAF9",
    size: "medium",
    description: "確保系統穩定運行、快速回應事件",
    roles: [
      { title: "SRE / IT Infra", task: "監控告警、On-call、Incident Response、容量規劃" },
      { title: "Security", task: "安全事件應變、合規稽核、威脅監控" },
      { title: "Customer Support", task: "工單處理(L1-L3)、知識庫維護、SLA 追蹤" },
      { title: "FAE", task: "現場支援、客戶環境診斷、技術培訓" },
    ],
    stats: { label: "關鍵產出", value: "SLO Dashboard・Postmortem・知識庫" },
  },
  {
    id: "iterate",
    name: "持續迭代",
    nameEn: "Iteration",
    icon: "🔄",
    color: "#FF6B35",
    colorLight: "#FFF0EA",
    size: "small",
    description: "收集回饋、分析數據、驅動下一輪改進",
    roles: [
      { title: "Product Management", task: "數據分析、功能優先級調整、Roadmap 更新" },
      { title: "Data Science", task: "A/B Testing 分析、使用者行為洞察" },
      { title: "Customer Success", task: "客戶健康度追蹤、QBR、續約經營" },
      { title: "Engineering", task: "技術債償還、架構重構、效能優化" },
    ],
    stats: { label: "關鍵產出", value: "分析報告・改善提案・更新 Roadmap" },
  },
];

const ROLE_CATEGORIES = [
  {
    category: "面向系統開發",
    categoryEn: "Engineering",
    color: "#007AFF",
    roles: [
      "Library / Kernel Dev",
      "SRE / IT Infra",
      "SRE / DevOps",
      "Security",
      "System Architect",
      "Quality Assurance",
      "Product Management",
      "Release Management",
      "Software Engineer",
      "Tech Lead / EM",
      "UX/UI Design",
      "Data Engineer",
      "Data Science",
      "Scrum Master",
    ],
  },
  {
    category: "面向客戶",
    categoryEn: "Customer-Facing",
    color: "#FF9500",
    roles: [
      "System Designer",
      "System Analyst",
      "Pre-Sales / SE",
      "Business Development",
      "Sales",
      "Marketing",
      "Customer Support",
      "FAE",
      "Customer Success",
      "Technical Writer",
    ],
  },
];

function FlowArrow({ fromIdx, toIdx, isLoop }) {
  if (isLoop) return null;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#CBD5E1",
        fontSize: "20px",
        fontWeight: 300,
        userSelect: "none",
      }}
    >
      →
    </div>
  );
}

function PhaseNode({ phase, index, isActive, onClick, total }) {
  const progress = ((index + 1) / total) * 100;
  return (
    <button
      onClick={() => onClick(phase.id)}
      style={{
        background: isActive ? phase.color : "#FFFFFF",
        border: isActive ? `2px solid ${phase.color}` : "2px solid #E5E7EB",
        borderRadius: "16px",
        padding: "12px 8px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        minWidth: "90px",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isActive ? "scale(1.08)" : "scale(1)",
        boxShadow: isActive
          ? `0 8px 25px ${phase.color}33`
          : "0 2px 8px rgba(0,0,0,0.04)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: isActive ? "rgba(255,255,255,0.4)" : phase.colorLight,
          borderRadius: "0 0 14px 14px",
        }}
      />
      <span style={{ fontSize: "24px", lineHeight: 1 }}>{phase.icon}</span>
      <span
        style={{
          fontSize: "12px",
          fontWeight: 700,
          color: isActive ? "#FFFFFF" : "#1A1A1A",
          letterSpacing: "0.02em",
        }}
      >
        {phase.name}
      </span>
      <span
        style={{
          fontSize: "9px",
          color: isActive ? "rgba(255,255,255,0.8)" : "#94A3B8",
          fontWeight: 500,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        {phase.nameEn}
      </span>
    </button>
  );
}

function FlowChart({ activePhase, onPhaseClick }) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "24px",
        padding: "28px 24px 20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
        border: "1px solid #F0F0F5",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#007AFF",
          }}
        />
        <span
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: "#1A1A1A",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          SDLC Lifecycle Flow
        </span>
      </div>

      {/* Flow nodes - horizontal scroll on mobile */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          overflowX: "auto",
          paddingBottom: "12px",
        }}
      >
        {PHASES.map((phase, idx) => (
          <div
            key={phase.id}
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
          >
            <PhaseNode
              phase={phase}
              index={idx}
              isActive={activePhase === phase.id}
              onClick={onPhaseClick}
              total={PHASES.length}
            />
            {idx < PHASES.length - 1 && <FlowArrow />}
          </div>
        ))}
      </div>

      {/* Feedback loop indicator */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          marginTop: "8px",
          padding: "10px 16px",
          background:
            "linear-gradient(135deg, #FFF0EA 0%, #E8F2FF 50%, #E8FAF0 100%)",
          borderRadius: "12px",
          border: "1px dashed #CBD5E1",
        }}
      >
        <span style={{ fontSize: "14px" }}>🔄</span>
        <span
          style={{
            fontSize: "11px",
            fontWeight: 600,
            color: "#475467",
            letterSpacing: "0.03em",
          }}
        >
          客戶回饋 / 市場變化 — Continuous Feedback Loop
        </span>
        <span style={{ fontSize: "14px" }}>🔄</span>
      </div>
    </div>
  );
}

function RoleCard({ role, accentColor }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        padding: "12px 14px",
        background: "#FAFBFC",
        borderRadius: "12px",
        border: "1px solid #F0F0F5",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "4px",
          minHeight: "36px",
          borderRadius: "2px",
          background: accentColor,
          flexShrink: 0,
          marginTop: "2px",
        }}
      />
      <div>
        <div
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: "#1A1A1A",
            marginBottom: "3px",
          }}
        >
          {role.title}
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "#475467",
            lineHeight: 1.5,
          }}
        >
          {role.task}
        </div>
      </div>
    </div>
  );
}

function PhaseDetail({ phase, onClose }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "24px",
        padding: "28px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
        border: `2px solid ${phase.color}22`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative top bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: `linear-gradient(90deg, ${phase.color}, ${phase.color}88)`,
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "16px",
              background: phase.colorLight,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "26px",
            }}
          >
            {phase.icon}
          </div>
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: "22px",
                fontWeight: 800,
                color: "#1A1A1A",
                letterSpacing: "-0.02em",
              }}
            >
              {phase.name}
            </h2>
            <div
              style={{
                fontSize: "12px",
                color: phase.color,
                fontWeight: 600,
                marginTop: "2px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {phase.nameEn}
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            background: "#F2F4F7",
            border: "none",
            borderRadius: "10px",
            width: "32px",
            height: "32px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            color: "#94A3B8",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#E5E7EB")}
          onMouseLeave={(e) => (e.target.style.background = "#F2F4F7")}
        >
          ✕
        </button>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "14px",
          color: "#475467",
          lineHeight: 1.7,
          margin: "0 0 20px",
          padding: "12px 16px",
          background: phase.colorLight,
          borderRadius: "12px",
          borderLeft: `3px solid ${phase.color}`,
        }}
      >
        {phase.description}
      </p>

      {/* Roles grid */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "12px",
        }}
      >
        <span style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A1A" }}>
          參與職務
        </span>
        <span
          style={{
            fontSize: "11px",
            fontWeight: 600,
            color: "#FFFFFF",
            background: phase.color,
            padding: "2px 8px",
            borderRadius: "6px",
          }}
        >
          {phase.roles.length}
        </span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        {phase.roles.map((role, i) => (
          <RoleCard key={i} role={role} accentColor={phase.color} />
        ))}
      </div>

      {/* Key output */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "14px 16px",
          background: "#FAFBFC",
          borderRadius: "14px",
          border: "1px solid #F0F0F5",
        }}
      >
        <div
          style={{
            fontSize: "10px",
            fontWeight: 700,
            color: phase.color,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
          }}
        >
          {phase.stats.label}
        </div>
        <div
          style={{
            width: "1px",
            height: "20px",
            background: "#E5E7EB",
          }}
        />
        <div
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#1A1A1A",
          }}
        >
          {phase.stats.value}
        </div>
      </div>
    </div>
  );
}

function RoleSummaryCard() {
  const [expanded, setExpanded] = useState(null);
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "24px",
        padding: "24px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
        border: "1px solid #F0F0F5",
      }}
    >
      <div
        style={{
          fontSize: "13px",
          fontWeight: 700,
          color: "#1A1A1A",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}
      >
        職務分類總覽
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {ROLE_CATEGORIES.map((cat, ci) => (
          <div key={ci}>
            <button
              onClick={() => setExpanded(expanded === ci ? null : ci)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 14px",
                background: expanded === ci ? cat.color + "0D" : "#FAFBFC",
                border:
                  expanded === ci
                    ? `1px solid ${cat.color}33`
                    : "1px solid #F0F0F5",
                borderRadius: expanded === ci ? "12px 12px 0 0" : "12px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "3px",
                    background: cat.color,
                  }}
                />
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#1A1A1A",
                  }}
                >
                  {cat.category}
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 500,
                    color: "#94A3B8",
                    textTransform: "uppercase",
                  }}
                >
                  {cat.categoryEn}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: cat.color,
                    background: cat.color + "15",
                    padding: "2px 7px",
                    borderRadius: "5px",
                  }}
                >
                  {cat.roles.length} 職務
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#94A3B8",
                    transition: "transform 0.2s",
                    transform: expanded === ci ? "rotate(180deg)" : "rotate(0)",
                  }}
                >
                  ▾
                </span>
              </div>
            </button>
            {expanded === ci && (
              <div
                style={{
                  padding: "10px 14px 14px",
                  background: cat.color + "08",
                  border: `1px solid ${cat.color}33`,
                  borderTop: "none",
                  borderRadius: "0 0 12px 12px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                }}
              >
                {cat.roles.map((r, ri) => (
                  <span
                    key={ri}
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#475467",
                      background: "#FFFFFF",
                      padding: "5px 10px",
                      borderRadius: "8px",
                      border: "1px solid #E5E7EB",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {r}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({ label, value, sublabel, color }) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
        border: "1px solid #F0F0F5",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      <div
        style={{
          fontSize: "10px",
          fontWeight: 700,
          color: color || "#94A3B8",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "32px",
          fontWeight: 800,
          color: "#1A1A1A",
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: "11px",
          color: "#94A3B8",
          fontWeight: 500,
        }}
      >
        {sublabel}
      </div>
    </div>
  );
}

function MiniPhaseGrid({ activePhase, onPhaseClick }) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "24px",
        padding: "24px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
        border: "1px solid #F0F0F5",
      }}
    >
      <div
        style={{
          fontSize: "13px",
          fontWeight: 700,
          color: "#1A1A1A",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          marginBottom: "14px",
        }}
      >
        快速跳轉
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "8px",
        }}
      >
        {PHASES.map((p) => (
          <button
            key={p.id}
            onClick={() => onPhaseClick(p.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 12px",
              background: activePhase === p.id ? p.colorLight : "#FAFBFC",
              border:
                activePhase === p.id
                  ? `1.5px solid ${p.color}44`
                  : "1.5px solid transparent",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            <span style={{ fontSize: "16px" }}>{p.icon}</span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: activePhase === p.id ? 700 : 500,
                color: activePhase === p.id ? p.color : "#475467",
              }}
            >
              {p.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function SDLCBento() {
  const [activePhase, setActivePhase] = useState(null);
  const detailRef = useRef(null);

  const handlePhaseClick = (id) => {
    setActivePhase(activePhase === id ? null : id);
    if (activePhase !== id) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 100);
    }
  };

  const activeData = PHASES.find((p) => p.id === activePhase);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F2F4F7",
        fontFamily:
          "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        padding: "24px 16px 60px",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "24px", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "5px 14px",
              background: "#FFFFFF",
              borderRadius: "20px",
              fontSize: "11px",
              fontWeight: 600,
              color: "#007AFF",
              marginBottom: "14px",
              border: "1px solid #E8F2FF",
              letterSpacing: "0.05em",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#34C759",
                animation: "pulse 2s infinite",
              }}
            />
            INTERACTIVE GUIDE
          </div>
          <h1
            style={{
              margin: "0 0 6px",
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 900,
              color: "#1A1A1A",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
            }}
          >
            軟體開發生命週期
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "#94A3B8",
              fontWeight: 500,
            }}
          >
            Software Development Life Cycle — 點擊任一階段查看詳細職務與產出
          </p>
        </div>

        {/* Flow Chart - Full Width */}
        <div style={{ marginBottom: "16px" }}>
          <FlowChart activePhase={activePhase} onPhaseClick={handlePhaseClick} />
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
            marginBottom: activeData ? "16px" : 0,
          }}
        >
          <StatCard
            label="SDLC 階段"
            value="8"
            sublabel="完整循環"
            color="#007AFF"
          />
          <StatCard
            label="涵蓋職務"
            value="20+"
            sublabel="跨部門協作"
            color="#AF52DE"
          />
          <StatCard
            label="雙面向"
            value="2"
            sublabel="開發 × 客戶"
            color="#FF9500"
          />
        </div>

        {/* Bottom Section: Side panel + detail */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: activeData ? "280px 1fr" : "1fr",
            gap: "12px",
            marginTop: "12px",
          }}
        >
          {/* Side panels */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <MiniPhaseGrid
              activePhase={activePhase}
              onPhaseClick={handlePhaseClick}
            />
            <RoleSummaryCard />
          </div>

          {/* Phase Detail */}
          {activeData && (
            <div ref={detailRef}>
              <PhaseDetail
                key={activeData.id}
                phase={activeData}
                onClose={() => setActivePhase(null)}
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            marginTop: "32px",
            fontSize: "11px",
            color: "#CBD5E1",
            fontWeight: 500,
          }}
        >
          SDLC 全局職務與流程總覽 — Bento Box Infographic
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { height: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 4px; }
        button:hover { filter: brightness(0.97); }
      `}</style>
    </div>
  );
}