---
title: 总论
sidebarOrder: 1
---
# 🧩 **S-L-G-T 视觉推理协议 v1.0（Draft）**

_Subject · Logic · Grounding · Texture_  
_Visual Reasoning Protocol for Trustworthy AI Imagery_

> 本协议定义了一种用于 **AI 生成图像在新闻、知识传播与公共信息场景中保证逻辑一致性、证据完整性与伦理透明性** 的视觉规范。
> 
> 目标不是生成“好看的图”，而是生成**可解释、可审计、可追责**的图。

---

# 0. 版本说明（Versioning）

- **当前版本：v1.0（Draft）**
    
- 根据真实项目反馈、模型更新和行业实践将持续迭代
    
- 所有变更都会记录在：  
    `/changelog/CHANGELOG.md`
    

---

# 1. 协议背景（Why）

生成式 AI 在 2024–2025 的重大跃迁来自两个方向：

1. **空间一致性（Spatial Consistency）**——影视领域受益最大
    
2. **推理能力（Logical Reasoning）**——如 Gemini 3 的思维模式（Thinking Mode）
    

然而：  
**逻辑 ≠ 真实。  
一致性 ≠ 可信。  
专业感 ≠ 正确性。**

新模型带来的最大风险不是“三只手”，  
而是：

# **可置信但错误的逻辑链（Plausible but Wrong Reasoning）**

新闻、科研和公共服务需要的不是“生成能力”，  
而是**可信视觉链条（Trustworthy Visual Chain）**。

S-L-G-T 协议旨在用一套**结构化语言**约束 AI 的行为，  
让图像生成不仅能“看”，还可以“验证”。

---

# 2. 协议目标（Goals）

S-L-G-T 要求所有 AI 生成的视觉内容必须满足：

### **① 本体明确（Ontological Clarity）**

主体是谁？具体到何种层级？视觉来源是什么？

### **② 逻辑一致（Logical Consistency）**

空间、因果、光源、物理链条必须解释得通。

### **③ 证据可查（Grounding Verifiable）**

每一处视觉要素都必须链接到真实数据或来源。

### **④ 风格负责（Stylistic Accountability）**

风格不是审美，而是修辞；必须符合语境与伦理要求。

换句话说：

> **我们不接受任何“不知道为什么这样画”的图像。**

AI 必须可解释，而人类必须能审计。

---

# 3. 四维度总览（Overview）

|维度|核心问题|必要产出物|常见风险|
|---|---|---|---|
|**S – Subject**|我到底画的是什么？|本体列表、特征 JSON、实体一致性说明|主体漂移、伪造物种、捏造事件|
|**L – Logic**|为什么这样构图？是否符合规律？|空间拓扑、光源链、因果链、3×3 网格|物理幻觉、角度错乱、推理断层|
|**G – Grounding**|根据什么？证据在哪？|数据来源、地理锚点、史料片段、引用规范|“编数据”、伪地形、错引史料|
|**T – Texture**|风格在表达什么？是否适当？|风格表、语境标注、伦理说明|灾难美化、科技塑料感、历史审美错配|

---

# 4. S-L-G-T 正式规范（The Protocol）

---

# **S · Subject（主体 / 本体）**

## 4.1 定义（Definition）

主体（Subject）指图像中所有具有语义意义的实体，包括：

- 人物 / 生物
    
- 建筑 / 场所
    
- 文物 / 物体
    
- 事件关联实体（如风暴、地质构造）
    

AI 不具有天然本体学。  
因此必须由用户提供 **明确的实体定义**。

---

## 4.2 规则（Requirements）

### **S1 – 必须定义本体分辨率（Ontology Resolution）**

实体必须明确到以下层级之一：

- L1：类别（如：船）
    
- L2：类型（如：木船）
    
- L3：细分类（如：宋代战船）
    
- L4：特定个体（如：温州朔门古港2号沉船）
    

**默认最低要求：L3。**

---

### **S2 – 不得生成超范围主体（No Out-of-Scope Entity）**

模型不能随意“补充”：

- 新物种
    
- 新建筑
    
- 新地形
    
- 虚构人物
    

除非在 Prompt 中明确允许。

---

### **S3 – 要求主体一致性（Identity Persistence）**

同一主体在多张图中必须保持：

- 外形一致
    
- 尺度一致
    
- 样貌不漂移
    
- 属性不变（如：鸟喙形状、旗帜样式）
    

---

## 4.3 建议（Recommendations）

- 使用 **数字演员卡（Digital Actor Card）JSON**：  
    `/templates/digital-actor-card.json`
    
- 采用 **命名实体表（Named Entity Table）**
    
- 在长文档中使用 **ID（如：SUB-001）** 引用主体
    

---

# **L · Logic（空间 / 因果 / 物理）**

## 5.1 定义（Definition）

逻辑（Logic）定义图像的**空间组织方式**及其背后的**因果链条**。

包括：

- 构图（Composition）
    
- 光照（Light Source）
    
- 风向（Wind Direction）
    
- 透视关系（Perspective）
    
- 地形遮挡（Occlusion）
    
- 行为链条（If A → Then B）
    

---

## 5.2 规则（Requirements）

### **L1 – 必须指定空间拓扑（Spatial Topology）**

从以下三类中选择：

- 线性流（Linear Flow）
    
- 放射锚（Radial Anchor）
    
- 层级栈（Vertical Stack）
    

每个视觉元素必须服从拓扑结构。

---

### **L2 – 必须满足物理一致性（Physical Consistency）**

包括但不限于：

- 风吹动方向一致
    
- 阴影方向与时间一致
    
- 水面波纹与风场一致
    
- 倾倒物方向符合力场
    
- 地形遮挡真实
    

---

### **L3 – 因果链必须闭合（Causal Closure）**

如：

> “台风登陆 → 树木向西倾倒 → 路灯杆弯曲 → 海浪推移方向变化”

任何一处断链都视为逻辑缺陷。

---

## 5.3 建议（Recommendations）

- 使用 **空间逻辑罗盘（Space Logic Compass）**
    
- 在 Prompt 中显式定义：
    
    - “Primary light source:”
        
    - “Wind vector:”
        
    - “Occlusion rule:”
        
- 采用 **3×3 网格系统（Grid System）**
    

---

# **G · Grounding（证据 / 数据 / 锚点）**

## 6.1 定义（Definition）

Grounding 是本协议的**核心要求**：

> 图像中所有关键像素必须可链接到可验证的事实来源。

---

## 6.2 规则（Requirements）

### **G1 – 必须至少引用一类真实世界数据源**

包括：

- 地理坐标（Lat/Lon）
    
- 卫星影像
    
- CSV 数据
    
- 官方统计
    
- 文献/史料
    
- API（如天气、地震）
    

---

### **G2 – 必须使用“According to” 指令框定数据范围**

如：

```
According to: 
- Wenzhou Gazetteer (1746)
- NOAA Typhoon Track Dataset (2021–2024)
```

模型不允许编造越界数据。

---

### **G3 – 可视化不确定性（Visual Uncertainty）是强制要求**

必须使用：

- 实线（confirmed）
    
- 虚线（hypothesis）
    
- 半透明（unknown）
    

来表达事实 / 推测。

---

## 6.3 建议（Recommendations）

- 使用 `/templates/grounding-checklist.md`
    
- 把 Grounding 来源写入元数据（Metadata）
    
- 对每项引用使用 ID（如：GND-002）
    

---

# **T · Texture（风格 / 修辞 / 伦理）**

## 7.1 定义（Definition）

Texture 是图像的“叙事语气（Tonal Narrative）”。  
它影响观众如何理解内容，因此属于**伦理范畴**。

---

## 7.2 规则（Requirements）

### **T1 – 风格必须符合语境（Contextual Fitness）**

例如：

- 历史复原 → 应使用当时的“时代眼”
    
- 灾难报道 → 禁用戏剧光、炫光、暖滤镜
    
- 科技可视化 → 禁用“科幻风”误导性元素
    

---

### **T2 – 风格必须避免夸饰（No Aesthetic Inflation）**

不得：

- 美化灾难
    
- 丝滑处理痛苦现场
    
- 把历史文献风格化到歪曲信息
    

---

### **T3 – 必须保留“粗粝感 / 瑕疵”以维持真实感**

新闻视觉不应“过度干净”。

---

## 7.3 建议（Recommendations）

- 使用 `/templates/visual-style-cards.md`
    
- 明确标注所用风格来源，例如：
    
    - “Based on Song Dynasty Jiehua aesthetics”
        
    - “Based on 1980s analog film grain”
        

---

# 8. S-L-G-T 执行流程（How to Apply）

### **Step 1 — Define S（主体）**

创建本体表 / JSON 资产库。

### **Step 2 — Define L（逻辑）**

确定拓扑 → 光源 → 风场 → 视角 → 因果链。

### **Step 3 — Inject G（证据）**

引用地理、数据、史料，建立事实约束。

### **Step 4 — Assign T（风格）**

选择语境、伦理、时代美学。

### **Step 5 — 输出双重图像**

- **版本 A：可视化结果**
    
- **版本 B：可审计图层（evidence layers）**
    

类似：

```
/output
  ├── visualization.png
  └── audit.json   ← 所有 S-L-G-T 参数
```

---

# 9. 合规性与审计（Compliance & Audit）

建议每个视觉内容附：

- Grounding 源清单
    
- S-L-G-T 结构化参数
    
- 不确定性标注
    
- 系统版本号（模型版本 / PromptOps 版本）
    
- 审计人员（Reviewer）ID
    

目标结构类似 C2PA 标准。

---

# 10. 未来版本规划（Roadmap）

### **v1.1**

加入《不确定性可视化规范》

### **v1.3**

新增“动态事件推理链”（Dynamic Event Chain）

### **v2.0**

构建“视觉推理 Lint 工具”（自动检测逻辑/证据缺陷）

### **v3.0**

社区共建 → 行业通用标准初稿

---

# 附录（Templates & Tools）

- `/templates/slgt-canvas.pdf`
    
- `/templates/digital-actor-card.json`
    
- `/templates/grounding-checklist.md`
    
- `/templates/visual-style-cards.md`
    
- `/prompts/system/`（盲区探测器、空间导演、证据审计员）
    

---

# 结束语

S-L-G-T 不是“改良版提示词”，  
它是一套 **重建 AI 时代视觉可信度的行业协议**。

它既是框架，也是规矩；  
既是指南，也是防火墙。

> **我们相信，在接下来的三年里，  
> 每一张“可信 AI 视觉”，都会在 S-L-G-T 之下诞生。**

