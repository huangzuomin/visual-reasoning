---
title: 主体（S）
sidebarOrder: 2
---

# S-L-G-T / S：Subject 模块指南  
slgt-subject.md

> 定义主体，不是起几个名词，而是为每一个可视化对象建立可复用的“身份数据包”。

---

## 1. 模块定位：为什么先从 S 开始

在 S-L-G-T 框架中，**S（Subject）决定了“谁出现在画面里”**，也是后续 L（Logic）空间布局、G（Grounding）证据锚定、T（Texture）风格匹配的起点。

在传统生成式工作流里，记者/编辑常常只给出一句模糊的描述：

- “一个医生”
- “一个鞋厂工人”
- “温州的几种动物”

然后把解释权完全交给模型的“刻板印象数据库”，结果就是：

- 医生默认变成“白人男性 + 听诊器”
- 鞋厂工人变成“80 年代脏乱车间里的工人”
- 温州动物图里出现“野生水仙”“莫名其妙的怪兽”

**S 模块的目标**：把这些模糊类别，升级为可复用、可审计、可协作的 **Subject Block（S-Block）**，成为整个项目库中可以调用的“数字演员”和“数字道具”。

---

## 2. 核心概念：本体分辨率梯队（Ontology Resolution Ladder）

一个主体（Subject）的“分辨率”决定了 AI 会不会乱猜。我们将 S 的精度划分为四个层级：

1. **Level 1：符号级（Symbolic）**  
   - 提示：`a boat` / “一艘船”  
   - 特征：AI 随机拼装一个“看起来像船”的东西。  
   - 用途：只适合随笔插画，**不能用于新闻**。

2. **Level 2：描述级（Descriptive）**  
   - 提示：`a wooden ancient Chinese boat` / “一艘中国古代木船”  
   - 特征：大致风格对，但细节不可靠。  
   - 用途：低要求插画。

3. **Level 3：类型级（Typological）**  
   - 提示：`a Song Dynasty "Fuchuan" with water-tight compartments`  
   - 特征：进入**类型/机种**层面，结构开始可考据。  
   - 用途：科普、历史说明图。

4. **Level 4：实例级（Instance）** ★ 新闻推荐标准  
   - 提示：`the "Shipwreck No.2" excavated at Wenzhou Shuomen Port`  
   - 特征：绑定**唯一指代对象**，需要配合参考图或详细特征。  
   - 用途：调查报道、考古复原、重要新闻封面。

> **原则：在新闻/科普项目中，S 必须尽量向 Level 4 靠拢。**  
> S ≠ 一个名词；S = 一组经过验证的“身份数据”。

---

## 3. S 的三大资产类型

### 3.1 人物主体（Digital Casting：数字选角）

典型场景：

- “温州鞋厂工人”
- “急诊科医生”
- “温州本地生态调查员”

错误写法：

- “a worker in a factory”  
- “a Chinese doctor”  

这些都是 Level 1–2。需要升级为：

- 明确 **年龄/性别/职业层级**
- 明确 **服装/装备/身体状态**
- 明确 **时代与技术环境**

> 例：  
> “2025 年，温州一线智能工厂女技师，在平板上监控机械臂运转，而不是 80 年代缝纫机工人。”

---

### 3.2 器物 / 场景主体（Object Blueprint：物体蓝图）

典型场景：

- 温州古港城墙  
- 某型号器械（内窥镜、无人机）  
- 某类城市设施（防洪闸门）

错误写法：

- “an old city wall”  
- “a high-tech drone”

正确做法：给出几何结构 + 材质 + 做旧逻辑 + 禁止项。

---

### 3.3 抽象概念实体化（Concept → Subject）

典型场景：

- “温州民营经济的韧性”  
- “经济软着陆”  
- “算法偏见”

这里没有现成的 S，需要借助 **隐喻翻译**：

- 软着陆 → 暴风雨中的猛禽精准抓住悬崖树枝  
- 民营经济韧性 → 在潮水反复冲刷下仍屹立的防波堤地基切面

---

## 4. S 工具箱（Subject Toolkit）

本节给出可直接在项目中复用的工具与模板。

---

### 4.1 工具一：数字演员卡（Digital Casting Sheet）

**用途**：锁定人物的可视化身份，保证多张图中的一致性（不变脸、不变装）。

**模板：**

```markdown
## Digital Casting Sheet / 数字演员卡

- Subject_ID（内部代号）: Doctor_Li_ER / Worker_WZ_Factory_2025
- Role（角色）: 急诊科主任 / 智能鞋厂一线技师

### A. 生物特征（Biometrics）
- Age & Gender: East Asian male, ~55 years / East Asian female, ~28 years
- Face Landmarks: 高颧骨、眼下轻微黑眼圈、左眼下方有痣 …
- Body Type & Posture: 略微驼背 / 肩膀略前倾、习惯站在设备旁

### B. 穿着与装备（Attire & Gear）
- Uniform: 白大褂敞开，里面是蓝格子衬衫 / 防静电蓝色工装，胸口有“Smart Mfg”徽标
- Accessories: 听诊器挂在脖子上、蓝色手术口罩拉到下巴 / 工业平板电脑、防护眼镜顶在头上

### C. 工作环境锚点（Context Anchors）
- Location: 三甲医院急诊走廊、灯光略冷白 / 高天花厂房，背景有机械臂而不是缝纫机
- Era Clues: 电子病历终端、LCD 显示器 / 机械臂、传送带、看板屏幕

### D. 负向约束（Negative Constraints）
- No: 80 年代昏黄灯泡 / No: 脏乱车间、老式缝纫机、煤油灯
- No: “医生 = 一律白人男性” / No: “工人 = 满身油污、破旧厂房”
````

---

### 4.2 工具二：物体蓝图（Object Blueprint）

**用途**：约束场景/器物，防止“看起来对，其实胡编”。

**模板：**

```markdown
## Object Blueprint / 物体蓝图

- Object_ID: Wenzhou_Ancient_Port_Wall
- Name: 温州朔门古港瓮城

### A. 几何拓扑（Geometry）
- Shape: 半圆形瓮城，而不是方形城楼
- Height vs Thickness: 高度 < 城墙延伸长度，顶部略外翻
- Openings: 仅在面向江面一侧开闸门

### B. 材质与做旧（Material & Aging）
- Core: 夯土芯，外包灰砖
- Surface: 局部有苔藓，水位线附近有明显水蚀痕迹
- Avoid: 现代混凝土纹理、钢结构护栏

### C. 负向约束（Negative Constraints）
- No: 欧式城堡垛口
- No: 彩色 LED 夜景灯
- No: 玻璃幕墙、现代栏杆
```

---

### 4.3 工具三：刻板印象粉碎机（Cliché Breaker Checklist）

**用途**：在 S 级别提前拆除偏见与陈词滥调，避免“AI 把偏见画实了”。

**Checklist：**

```markdown
## Cliché Breaker / 刻板印象粉碎机

[ ] 群体是否被“单一脸谱化”？  
    e.g. “程序员 = 男性、格子衫、秃头”

[ ] 是否默认了贫困/弱势 = 脏乱、破败？  
    —— 能否改为在干净但简陋的环境中认真劳动？

[ ] 是否使用了过时职业符号？  
    e.g. “作家 = 羽毛笔”，可以改为笔电+文稿堆

[ ] 是否给了主体“尊严姿态”？  
    —— 不只作为被凝视的对象，而是有主动性（工作、思考、行动）
```

---

### 4.4 工具四：本体编译器（Ontology Compiler Prompt）

**用途**：把一个粗糙名词，自动升级为高分辨率 Subject 定义。

**系统提示词（System Prompt 模板）：**

```markdown
You are a **Visual Casting Director & Technical Asset Manager**.

When I give you a vague subject (e.g. "a delivery worker", "a Wenzhou shoe factory worker"),
follow this workflow:

1. Challenge ambiguity:
   - Ask 3 clarification questions:
     * Exact era / year?
     * Specific work scenario?
     * Any distinctive clothes, tools, or environment?

2. After my answers, compile a **Subject Block**:

[Subject Block Template]
- Role & Context:
- Age/Gender/Ethnicity:
- Visual Anchors: [face landmarks, clothes, tools]
- Environment Anchors:
- Negative Constraints:

Do NOT generate images. Only output the Subject Block.
```

---

## 5. 工作流：从模糊名词到 S-Block

以“温州鞋厂工人（2025 智能工厂场景）”为例：

### Step 1：用户起点（模糊需求）

> “我要画一张温州鞋厂工人的图，体现智能制造。”

### Step 2：本体编译器发问

- 是 80 年代家庭作坊，还是 2025 年智能工厂？
    
- 重点是繁重劳动，还是人机协作？
    
- 想突出男性传统工人，还是新一代技师（可以是女性）？
    

### Step 3：补全语义 → 形成 S-Block

> 回答：  
> —— 2025 年，温州智能鞋厂  
> —— 重点是“人盯着屏幕指挥机器，而不是弯腰干体力活”  
> —— 主体是一名 20 多岁女技师，更有“新产业劳动力”的象征性

**生成的 S-Block：**

```markdown
Subject_ID: WZ_ShoeFactory_Tech_2025

- Role & Context:
  - A young female technician in a Wenzhou smart shoe factory, 2025.
- Age/Gender/Ethnicity:
  - East Asian female, mid-20s, slightly tired but focused expression.
- Visual Anchors:
  - Wearing clean, anti-static blue workwear with a small company logo patch.
  - Holding a rugged industrial tablet showing production data dashboards.
  - Safety glasses pushed up on her head, hair tied back.
- Environment Anchors:
  - Background: robotic arms handling shoe soles on conveyor belts.
  - Large LED status boards in the distance (OEE, output numbers).
- Negative Constraints:
  - No dirty, chaotic workshop.
  - No old sewing machines, no dim tungsten lamps.
  - No “sweatshop” aesthetics.
```

这个 S-Block 随后可以：

- 存入项目库（slgt-assets/subjects/…）
    
- 在多个项目中复用（报道、数据图、海报）
    
- 交给不同人/不同模型，保证视觉统一
    

---

## 6. 案例：温州本土动物 S-Block（新闻真实级）

以本书核心案例“温州生物多样性图表”为例，以下是两个已通过多模型交叉验证和人工核查的 S-Block 片段，可直接复用：

### 6.1 弹涂鱼（Periophthalmus modestus）

```markdown
Subject_ID: WZ_Mudskipper

- Taxonomy:
  - Latin Name: Periophthalmus modestus
  - Common Name: 弹涂鱼 (Mudskipper)

- Visual Anchors (Visual DNA):
  - Eyes: Protruding "periscope-like" eyes positioned on top of the head.
  - Fins: Strong, bent pectoral fins used like arms to crawl on mud.
  - Skin: Wet, slimy grey-brown skin with irregular dark blotches.

- Action & Pose:
  - Crawling on exposed mudflat during low tide.
  - Body slightly lifted off the ground, supported by pectoral fins.

- Environment Anchors:
  - Wet, reflective mud surface with small puddles.
  - Background hint of estuary/river bank, not deep open sea.

- Negative Constraints:
  - No underwater swimming.
  - No generic fish silhouette.
  - No clear blue sea background.
```

### 6.2 黄腹角雉（Tragopan caboti）

```markdown
Subject_ID: WZ_Cabots_Tragopan

- Taxonomy:
  - Latin Name: Tragopan caboti
  - Common Name: 黄腹角雉 (Cabot's Tragopan)

- Visual Anchors:
  - Plumage: Deep chestnut-red body covered with buff-colored round spots.
  - Head: Black head with vivid orange and cobalt-blue throat lappet.
  - Display Detail (if needed): Two small blue fleshy horns when in display.

- Action & Pose:
  - Standing on mossy rock in mountain forest, side profile.
  - Tail short and compact (not long pheasant-like).

- Environment Anchors:
  - Misty evergreen broadleaf forest, high-altitude vibe.
  - Ground covered with moss and fallen leaves.

- Negative Constraints:
  - No long pheasant tail, no peacock feathers.
  - No bright green body.
  - No flat farmland background.
```

---

## 7. 与项目库的集成方式（实践建议）

在你的“项目库”中，可以为 S-Block 单独开一个目录，例如：

```text
/visual-reasoning-project
  /slgt
    slgt-overview.md
    slgt-subject.md       ← 本文件
    slgt-logic.md
    slgt-grounding.md
    slgt-texture.md
  /assets
    /subjects
      WZ_Mudskipper.md
      WZ_Cabots_Tragopan.md
      WZ_ShoeFactory_Tech_2025.md
    /objects
      WZ_Ancient_Port_Wall.md
```

约定：

- S-Block 文档只负责“谁”——不掺杂构图、风格信息
    
- 不同项目（新闻选题、频道包装、可视化专题），都从这里调用相同的 S-Block，保证 **跨团队一致性**
    

---

## 8. 快速上手清单（给一线记者/编辑）

**当你准备用 AI 画一张图时，先问自己：**

1. 我写的是 **类别词** 还是 **实例级主体**？
    
2. 这个主体能不能在 3 句话内，被描述成一个 S-Block？
    
3. 这个 S-Block 是否：
    
    - 有明确的时代与地点？
        
    - 有 2–3 个“肉眼一看就能认出”的视觉锚点？
        
    - 明确写出了 **绝对不能画成什么样**？
        

只要 S-Block 写好了，你后面在 L/G/T 环节的时间会少一半，翻车概率会少 90%。

> **一句话总结 S 模块**：  
> **不要把“谁”交给模型瞎编。  
> 每一个出现在画面里的主体，都应该先在 S-Block 里“实名登记”。**