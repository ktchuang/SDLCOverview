# 軟體開發全局：SDLC 流程與職務總覽

---

## 一、SDLC 生命週期概覽

軟體開發生命週期大致可分為以下階段，各職務在不同階段交互參與：

```
市場探索 → 需求定義 → 系統設計 → 開發實作 → 測試驗證 → 部署發佈 → 維運監控 → 持續迭代
   ↑                                                                          |
   └──────────────────── 客戶回饋 / 市場變化 ←─────────────────────────────────┘
```

---

## 二、面向系統開發（Engineering-Facing Roles）

### 1. Product Management（產品管理）

| 項目 | 說明 |
|------|------|
| **核心任務** | 定義產品願景、策略與路線圖（Roadmap） |
| **日常職責** | — 收集並優先排序需求（從市場、客戶、內部）<br>— 撰寫 PRD（Product Requirements Document）<br>— 定義 User Story、Acceptance Criteria<br>— 與 Engineering、Design、Sales 對齊目標<br>— 管理 Backlog，決定 Sprint 優先級<br>— 追蹤產品 KPI（DAU、Retention、NPS 等）<br>— Go-to-Market 策略協調 |
| **關鍵產出** | PRD、Roadmap、Feature Spec、Release Notes 草稿 |
| **協作對象** | Engineering、UX/UI、Sales、Marketing、Executive |

---

### 2. System Architect（系統架構師）

| 項目 | 說明 |
|------|------|
| **核心任務** | 設計系統的高階技術架構，確保可擴展性、可維護性與一致性 |
| **日常職責** | — 制定技術選型（語言、框架、資料庫、中介軟體）<br>— 設計微服務 / 單體架構拆分策略<br>— 定義 API 規範與模組間介面契約<br>— 制定資料流、事件驅動架構設計<br>— 評估技術債並制定償還計畫<br>— 撰寫 ADR（Architecture Decision Records）<br>— 效能瓶頸分析與容量規劃<br>— 指導團隊落實架構原則 |
| **關鍵產出** | 架構設計文件、技術選型報告、ADR、系統拓樸圖 |
| **協作對象** | Engineering Lead、SRE、Security、Product |

---

### 3. Software Engineering（軟體工程 — 含 Frontend / Backend / Fullstack）

| 項目 | 說明 |
|------|------|
| **核心任務** | 實作產品功能，將設計與需求轉化為可運行的程式碼 |
| **日常職責** | — 功能開發（Feature Development）<br>— Code Review 與 Pair Programming<br>— 單元測試與整合測試撰寫<br>— Bug 修復與效能調校<br>— 技術文件撰寫（API Doc、README）<br>— 參與 Sprint Planning、Daily Standup、Retrospective<br>— CI/CD Pipeline 維護 |
| **關鍵產出** | Production-ready Code、Test Cases、Technical Doc |
| **協作對象** | Product、QA、Designer、SRE |

---

### 4. Library and Kernel Development（底層 / 核心庫開發）

| 項目 | 說明 |
|------|------|
| **核心任務** | 開發與維護底層核心模組、SDK、共用函式庫、驅動程式或系統核心 |
| **日常職責** | — 設計高效能、低耦合的核心 API<br>— 實作底層演算法與資料結構<br>— 跨平台相容性處理（OS、硬體抽象層）<br>— 效能基準測試（Benchmarking）與優化<br>— 記憶體管理、並行處理等系統級問題處理<br>— 版本管理與向後相容策略<br>— 撰寫 SDK 文件與 Migration Guide<br>— 與上層應用團隊協調 API 契約 |
| **關鍵產出** | SDK / Library Release、API Reference、Changelog、Performance Report |
| **協作對象** | Application Engineers、System Architect、QA |

---

### 5. IT Infrastructure / SRE / Staff Engineering（基礎建設與可靠性工程）

| 項目 | 說明 |
|------|------|
| **核心任務** | 確保系統基礎設施的穩定、可靠與自動化運維 |
| **日常職責** | — 雲端基礎設施管理（AWS / GCP / Azure）<br>— IaC（Infrastructure as Code）實踐：Terraform、Pulumi<br>— CI/CD Pipeline 建設與維護<br>— 監控與告警系統建設（Prometheus、Grafana、Datadog）<br>— SLI / SLO / SLA 定義與追蹤<br>— Incident Response 與 On-call 輪值<br>— 容量規劃（Capacity Planning）<br>— 災難復原演練（DR Drill）<br>— 成本優化（FinOps）<br>— 開發者體驗工具鏈建設（Developer Platform / Internal Tooling） |
| **Staff Engineer 特殊職責** | — 跨團隊技術決策與標準制定<br>— 解決高難度、跨領域技術問題<br>— 技術導師（Mentorship）<br>— 推動工程文化與最佳實踐 |
| **關鍵產出** | Runbook、Postmortem 報告、Infra 拓樸文件、SLO Dashboard |
| **協作對象** | All Engineering Teams、Security、Product |

---

### 6. System Security（系統安全）

| 項目 | 說明 |
|------|------|
| **核心任務** | 保護系統免受資安威脅，確保合規性 |
| **日常職責** | — 安全架構審查（Threat Modeling）<br>— 滲透測試（Penetration Testing）<br>— 程式碼安全掃描（SAST / DAST）<br>— 弱點管理（Vulnerability Management）<br>— 身份驗證與授權機制設計（OAuth、RBAC、Zero Trust）<br>— 資料加密策略（At rest / In transit）<br>— 合規管理（GDPR、SOC2、ISO 27001、HIPAA）<br>— 安全事件應變（Security Incident Response）<br>— Security Awareness Training<br>— Supply Chain Security（依賴套件審查） |
| **關鍵產出** | 安全評估報告、合規稽核文件、Incident Report |
| **協作對象** | SRE、Engineering、Legal、Compliance |

---

### 7. Scalability and System Continuity（可擴展性與系統持續性）

| 項目 | 說明 |
|------|------|
| **核心任務** | 確保系統能隨業務成長而水平 / 垂直擴展，並在故障時維持服務連續 |
| **日常職責** | — 高可用架構設計（HA、Multi-AZ、Multi-Region）<br>— 負載均衡與自動擴縮策略<br>— 資料庫分片（Sharding）、讀寫分離<br>— 快取策略（Redis、CDN）<br>— 降級與熔斷機制（Circuit Breaker、Graceful Degradation）<br>— 備份策略與 RTO / RPO 定義<br>— 混沌工程（Chaos Engineering）實踐<br>— 業務連續計畫（BCP）制定 |
| **關鍵產出** | BCP 文件、DR Plan、容量規劃報告、壓力測試報告 |
| **協作對象** | System Architect、SRE、Engineering |

> **備註**：此職能在許多組織中由 SRE 或 System Architect 兼任，但在大規模系統中可能獨立設職。

---

### 8. Quality Assurance（品質保證）

| 項目 | 說明 |
|------|------|
| **核心任務** | 確保產品品質符合預期標準，降低缺陷風險 |
| **日常職責** | — 測試策略與計畫制定<br>— 測試案例設計（功能 / 回歸 / 邊界 / 探索性）<br>— 自動化測試框架建設（Selenium、Cypress、Playwright）<br>— API 測試（Postman、REST Assured）<br>— 效能測試（JMeter、k6、Locust）<br>— 相容性測試（瀏覽器、裝置、OS）<br>— 缺陷追蹤與品質指標分析<br>— UAT（User Acceptance Testing）協調<br>— 測試環境管理 |
| **關鍵產出** | 測試計畫、測試報告、Bug Report、品質儀表板 |
| **協作對象** | Engineering、Product、Release Management |

---

### 9. Release Management（發佈管理）

| 項目 | 說明 |
|------|------|
| **核心任務** | 管控軟體從開發到正式環境的發佈流程 |
| **日常職責** | — 發佈排程規劃與協調<br>— 版本號策略管理（Semantic Versioning）<br>— Release Branch 管理與 Cherry-pick 策略<br>— Go / No-Go 決策會議主持<br>— 發佈檢查清單（Release Checklist）維護<br>— 藍綠部署 / 金絲雀發佈 / Feature Flag 策略<br>— Rollback 計畫制定<br>— Release Notes 彙整與發佈<br>— 跨團隊發佈時程同步 |
| **關鍵產出** | Release Plan、Release Notes、Rollback Procedure、Post-release Report |
| **協作對象** | Engineering、QA、SRE、Product、Customer Support |

---

### 10. UX/UI Design（使用者體驗與介面設計）⭐ 補充職務

| 項目 | 說明 |
|------|------|
| **核心任務** | 設計直覺、易用且美觀的使用者介面與互動體驗 |
| **日常職責** | — 使用者研究（User Research）：訪談、問卷、可用性測試<br>— 建立 User Persona 與 User Journey Map<br>— Wireframe 與 Prototype 製作（Figma、Sketch）<br>— 互動設計（Interaction Design）<br>— 設計系統（Design System）建立與維護<br>— 無障礙設計（Accessibility / a11y）<br>— 與前端工程師協作確保設計還原度<br>— A/B Testing 設計配合 |
| **關鍵產出** | Wireframe、Mockup、Prototype、Design System、User Research Report |
| **協作對象** | Product、Frontend Engineering、Marketing |

---

### 11. Data Engineering / Data Science（資料工程 / 資料科學）⭐ 補充職務

| 項目 | 說明 |
|------|------|
| **核心任務** | 建設資料基礎建設，提供數據驅動的洞察與決策支持 |
| **日常職責** | — ETL / ELT Pipeline 設計與維護<br>— 資料倉儲（Data Warehouse）建設<br>— 資料品質監控與治理（Data Governance）<br>— 資料模型設計（Dimensional Modeling）<br>— 商業智慧報表（BI Dashboard）<br>— 機器學習模型開發與部署（MLOps）<br>— A/B Testing 資料分析<br>— 使用者行為分析 |
| **關鍵產出** | Data Pipeline、BI Dashboard、分析報告、ML Model |
| **協作對象** | Product、Engineering、Marketing、Executive |

---

### 12. DevOps / Platform Engineering（開發維運 / 平台工程）⭐ 補充職務

| 項目 | 說明 |
|------|------|
| **核心任務** | 建設內部開發者平台，提升開發效率與部署速度 |
| **日常職責** | — 內部開發者入口（Internal Developer Portal）建設<br>— 容器化與編排（Docker、Kubernetes）<br>— Service Mesh 管理（Istio、Linkerd）<br>— 日誌聚合與可觀測性（OpenTelemetry）<br>— 開發環境標準化（Dev Containers、Codespaces）<br>— 自助式部署工具開發<br>— Golden Path / Template 維護 |
| **關鍵產出** | Platform 文件、Self-service 工具、Template Repo |
| **協作對象** | All Engineering Teams、SRE |

> **備註**：DevOps 與 SRE 在不同組織中的邊界不同。一般而言，DevOps 偏重 CI/CD 與工具鏈，SRE 偏重生產環境可靠性。

---

## 三、面向客戶（Customer-Facing Roles）

### 1. Business Development（業務拓展）

| 項目 | 說明 |
|------|------|
| **核心任務** | 探索新市場、新客群、新商業模式，建立策略夥伴關係 |
| **日常職責** | — 市場趨勢分析與機會評估<br>— 潛在合作夥伴 / 通路的識別與接洽<br>— 策略聯盟與合作框架談判<br>— 新市場進入策略制定（GTM Strategy）<br>— 競爭分析（Competitive Analysis）<br>— 商業模式設計與驗證（定價、授權模式）<br>— 與 Product 團隊回饋市場需求<br>— 參與產業展會與社群經營 |
| **關鍵產出** | 市場分析報告、合作提案、GTM Plan、Partnership Agreement |
| **協作對象** | Sales、Product、Marketing、Executive |

---

### 2. Pre-Sales / Solution Engineer（售前工程 / 解決方案工程師）

| 項目 | 說明 |
|------|------|
| **核心任務** | 以技術專業支援銷售流程，協助客戶理解產品價值與技術可行性 |
| **日常職責** | — 客戶需求的技術可行性評估<br>— 技術簡報與產品 Demo<br>— POC（Proof of Concept）規劃與執行<br>— 技術提案撰寫（Technical Proposal）<br>— RFP / RFI / RFQ 回覆<br>— 競品技術比較分析<br>— 客製化需求評估與工時估算<br>— 與 Engineering 協調客戶特殊需求的可行性 |
| **關鍵產出** | 技術提案、POC 報告、Demo 環境、RFP Response |
| **協作對象** | Sales、Engineering、Product、Customer |

---

### 3. Sales（銷售）

| 項目 | 說明 |
|------|------|
| **核心任務** | 達成營收目標，管理從潛在客戶到成交的完整銷售漏斗 |
| **日常職責** | — 潛在客戶開發（Lead Generation / Prospecting）<br>— 客戶需求探詢與關係建立<br>— 銷售簡報與商務談判<br>— 報價、合約與訂單管理<br>— Pipeline 管理與銷售預測（Forecast）<br>— CRM 維護（Salesforce、HubSpot）<br>— 續約與 Upsell / Cross-sell 經營<br>— 客戶拜訪與關係維護 |
| **關鍵產出** | 銷售報告、Forecast、合約、客戶提案 |
| **協作對象** | Pre-Sales、BD、Customer Support、Product |

---

### 4. System Analysis（系統分析師）

| 項目 | 說明 |
|------|------|
| **核心任務** | 橋接業務需求與技術實現，將模糊的業務問題轉化為明確的系統需求 |
| **日常職責** | — 業務流程分析與建模（BPMN、Flow Chart）<br>— 需求訪談與引導工作坊（Requirement Elicitation）<br>— 需求規格書撰寫（SRS / FRS）<br>— 使用案例分析（Use Case Diagram）<br>— 資料流程圖與 ER Diagram 繪製<br>— Gap Analysis（現況 vs. 目標）<br>— 需求追溯矩陣（Traceability Matrix）維護<br>— 跨部門需求衝突協調<br>— 變更請求（Change Request）管理 |
| **關鍵產出** | SRS、Use Case Doc、Flow Chart、Gap Analysis Report |
| **協作對象** | Product、Engineering、Customer、System Designer |

---

### 5. System Design（系統設計）

| 項目 | 說明 |
|------|------|
| **核心任務** | 將系統分析的需求轉化為具體的系統設計方案 |
| **日常職責** | — 系統邏輯設計（模組劃分、元件互動）<br>— 資料庫設計（Schema、正規化、索引策略）<br>— API 介面設計（RESTful / GraphQL / gRPC）<br>— 整合方案設計（第三方系統、Legacy 系統整合）<br>— 狀態機設計與工作流引擎規劃<br>— 設計文件撰寫（HLD / LLD）<br>— 技術限制與 Trade-off 分析<br>— 設計審查（Design Review）主持 |
| **關鍵產出** | HLD（High-Level Design）、LLD（Low-Level Design）、DB Schema、API Spec |
| **協作對象** | System Analyst、System Architect、Engineering |

> **備註**：System Design 與 System Architect 的區別在於，Architect 關注全局架構與技術選型，而 System Design 更關注特定模組或功能的詳細設計方案。

---

### 6. Project Management（專案管理）

| 項目 | 說明 |
|------|------|
| **核心任務** | 確保專案在範圍、時程、預算內交付 |
| **日常職責** | — 專案計畫制定（WBS、甘特圖、里程碑）<br>— 資源分配與團隊協調<br>— 風險識別、評估與緩解策略<br>— 進度追蹤與狀態報告<br>— 利害關係人管理（Stakeholder Management）<br>— 會議主持（Kick-off、Status Meeting、Steering Committee）<br>— 變更管理（Scope Change Control）<br>— 預算控管與成本追蹤<br>— 跨團隊依賴管理<br>— 問題升級（Escalation）處理 |
| **關鍵產出** | 專案計畫、進度報告、風險登記冊、會議紀錄 |
| **協作對象** | All Teams、Customer、Executive |

---

### 7. Customer Support / Field Application Engineering / Account Consultant（客戶支援與顧問）

| 子角色 | 任務說明 |
|--------|----------|
| **Customer Support** | — 客戶問題接收與分級（Ticket Triage: L1/L2/L3）<br>— 問題排查與解決<br>— 知識庫（Knowledge Base）建設與維護<br>— SLA 追蹤與報告<br>— 客戶滿意度調查（CSAT / NPS）<br>— Bug Report 轉交 Engineering |
| **Field Application Engineer (FAE)** | — 現場技術支援與產品導入（On-site Deployment）<br>— 客戶環境的技術問題診斷<br>— 客製化整合與調校<br>— 技術培訓（Training / Workshop）<br>— 蒐集客戶端實際使用回饋<br>— 協助客戶進行升級與遷移 |
| **Account Consultant / Customer Success** | — 客戶健康度追蹤（Health Score）<br>— 定期業務回顧（QBR / MBR）<br>— 使用狀況分析與最佳化建議<br>— 續約風險預警與挽留策略<br>— Upsell / Cross-sell 機會識別<br>— 客戶旅程（Customer Journey）優化<br>— Onboarding 流程管理 |

| **關鍵產出** | 工單報告、知識庫文章、QBR 簡報、客戶健康報告 |
| **協作對象** | Engineering、Sales、Product |

---

### 8. Documentation / Technical Writing / Press（文件與內容）

| 子角色 | 任務說明 |
|--------|----------|
| **Technical Writer** | — 產品使用手冊（User Guide）<br>— API 文件（API Documentation）<br>— 安裝與部署指南<br>— Release Notes 撰寫<br>— 內部技術文件標準化<br>— 文件版本管理 |
| **Developer Relations / Advocate** | — 開發者文件與教學（Tutorial）<br>— Sample Code 與 Quick Start Guide<br>— 技術部落格撰寫<br>— 社群經營與開發者活動 |
| **Press / Communications** | — 產品發佈新聞稿<br>— 媒體關係管理<br>— 公司對外聲明<br>— 內容行銷策略<br>— 案例研究（Case Study）撰寫 |

| **關鍵產出** | User Guide、API Doc、Blog Post、Press Release、Case Study |
| **協作對象** | Product、Engineering、Marketing、Executive |

---

## 四、補充重要職務 ⭐

以下為原清單中未列出，但在完整 SDLC 中扮演重要角色的職務：

### 1. Engineering Manager / Tech Lead（工程管理 / 技術主管）

| 項目 | 說明 |
|------|------|
| **核心任務** | 帶領工程團隊交付成果，兼顧技術品質與人員發展 |
| **日常職責** | — Sprint Planning 與任務分派<br>— 1:1 績效面談與職涯輔導<br>— 技術決策把關<br>— 團隊招聘與面試<br>— 跨團隊技術協調<br>— 技術債優先級判斷<br>— 開發流程改善 |

---

### 2. Marketing（行銷）

| 項目 | 說明 |
|------|------|
| **核心任務** | 建立品牌認知，產生銷售線索（Lead Generation） |
| **日常職責** | — 產品行銷策略（Product Marketing）<br>— 內容行銷（白皮書、Webinar、Blog）<br>— SEO / SEM / 數位廣告<br>— 社群媒體經營<br>— 活動策劃（Conference、Meetup）<br>— 競品分析與市場定位 |

---

### 3. Legal / Compliance（法務 / 合規）

| 項目 | 說明 |
|------|------|
| **核心任務** | 確保產品與業務運營符合法律與法規要求 |
| **日常職責** | — 合約審查與談判<br>— 智慧財產權管理（專利、商標）<br>— 開源授權合規（License Compliance）<br>— 隱私權政策與 GDPR / CCPA 合規<br>— 出口管制與制裁合規<br>— 糾紛處理 |

---

### 4. Scrum Master / Agile Coach（敏捷教練）

| 項目 | 說明 |
|------|------|
| **核心任務** | 促進敏捷流程運作，移除團隊障礙 |
| **日常職責** | — 主持 Scrum 儀式（Standup、Planning、Retro、Review）<br>— 障礙排除（Impediment Removal）<br>— 團隊速度（Velocity）追蹤與改善<br>— 跨團隊敏捷流程協調（SAFe、LeSS）<br>— 持續改善文化推動 |

---

## 五、職務與 SDLC 階段對照矩陣

| SDLC 階段 | 主要參與職務 |
|-----------|-------------|
| **市場探索** | BD、Marketing、Product、Sales |
| **需求定義** | Product、System Analyst、Customer、Pre-Sales |
| **系統設計** | System Architect、System Designer、UX/UI、Data Engineer |
| **開發實作** | Software Engineer、Library/Kernel Dev、Tech Lead |
| **測試驗證** | QA、Security、Engineering |
| **部署發佈** | Release Management、SRE、DevOps |
| **維運監控** | SRE、IT Infra、Security、Customer Support |
| **持續迭代** | Product、Engineering、Data Science、Customer Success |

---

## 六、典型組織架構示意

```
                            ┌─────────────┐
                            │   C-Suite   │
                            │ CEO/CTO/CPO │
                            └──────┬──────┘
                                   │
              ┌────────────────────┼────────────────────┐
              │                    │                     │
     ┌────────▼────────┐  ┌───────▼────────┐  ┌────────▼────────┐
     │   Engineering   │  │    Product &   │  │   Go-to-Market  │
     │                 │  │    Design      │  │                 │
     ├─────────────────┤  ├────────────────┤  ├─────────────────┤
     │ Software Eng    │  │ Product Mgmt   │  │ Sales           │
     │ Library/Kernel  │  │ UX/UI Design   │  │ Pre-Sales / SE  │
     │ SRE / DevOps    │  │ System Analyst │  │ BD              │
     │ Security        │  │ Data Science   │  │ Marketing       │
     │ QA              │  │ System Design  │  │ Customer Support│
     │ Platform Eng    │  │ Tech Writing   │  │ FAE / CS        │
     │ Eng Manager     │  │ Scrum Master   │  │ Account Consult │
     │ Release Mgmt    │  │                │  │ Press / Comms   │
     └─────────────────┘  └────────────────┘  └─────────────────┘
```

---

> **結語**：不同規模與產業的組織，職務劃分粒度會有差異。小型團隊中一人可能兼任多個角色（如 PM 兼 Scrum Master、Engineer 兼 SRE），而大型企業則會進一步細分。關鍵在於確保 SDLC 每個階段的職責都有人承擔，避免出現責任真空。