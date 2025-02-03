// src/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.toeiclist.createMany({
    data: [
        {
            "words": "analyze",
            "class": "verb",
            "japanese": "分析",
            "sentence": "I need to analyze the data carefully.",
            "level": "intermediate",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "benefit",
            "class": "noun",
            "japanese": "利益",
            "sentence": "The new policy will benefit the company.",
            "level": "intermediate",
            "userNotes": null,
            "category": "finance"
          },
          {
            "words": "collaborate",
            "class": "verb",
            "japanese": "協力",
            "sentence": "We should collaborate on this project.",
            "level": "advanced",
            "userNotes": null,
            "category": "marketing"
          },
          {
            "words": "compensate",
            "class": "verb",
            "japanese": "補償",
            "sentence": "The company will compensate for the loss.",
            "level": "advanced",
            "userNotes": null,
            "category": "legal"
          },
          {
            "words": "develop",
            "class": "verb",
            "japanese": "開發",
            "sentence": "We plan to develop a new marketing strategy.",
            "level": "beginner",
            "userNotes": null,
            "category": "marketing"
          },
          {
            "words": "efficient",
            "class": "adjective",
            "japanese": "効率的",
            "sentence": "This system is more efficient than the old one.",
            "level": "beginner",
            "userNotes": null,
            "category": "technology"
          },
          {
            "words": "negotiation",
            "class": "noun",
            "japanese": "交渉",
            "sentence": "The negotiation process was lengthy.",
            "level": "intermediate",
            "userNotes": null,
            "category": "customer service"
          },
          {
            "words": "rapidly",
            "class": "adverb",
            "japanese": "急速に",
            "sentence": "The company is growing rapidly.",
            "level": "advanced",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "despite",
            "class": "preposition",
            "japanese": "にもかかわらず",
            "sentence": "Despite the challenges, we succeeded.",
            "level": "intermediate",
            "userNotes": null,
            "category": "general vocabulary"
          },
          {
            "words": "overhead",
            "class": "noun",
            "japanese": "経費",
            "sentence": "The company cut its overhead costs by 10%.",
            "level": "advanced",
            "userNotes": null,
            "category": "finance"
          },
          {
            "words": "access",
            "class": "noun",
            "japanese": "アクセス",
            "sentence": "The system is not granting access to new users.",
            "level": "beginner",
            "userNotes": null,
            "category": "technology"
          },
          {
            "words": "deadline",
            "class": "noun",
            "japanese": "締切",
            "sentence": "The deadline for submitting the report is tomorrow.",
            "level": "intermediate",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "expand",
            "class": "verb",
            "japanese": "拡大する",
            "sentence": "The company plans to expand into international markets.",
            "level": "intermediate",
            "userNotes": null,
            "category": "marketing"
          },
          {
            "words": "approval",
            "class": "noun",
            "japanese": "承認",
            "sentence": "We need approval from the board of directors to proceed.",
            "level": "intermediate",
            "userNotes": null,
            "category": "human resources"
          },
          {
            "words": "efficient",
            "class": "adjective",
            "japanese": "効率的な",
            "sentence": "The new software is much more efficient than the old one.",
            "level": "intermediate",
            "userNotes": null,
            "category": "technology"
          },
          {
            "words": "flexible",
            "class": "adjective",
            "japanese": "柔軟な",
            "sentence": "We need a flexible approach to meet customer demands.",
            "level": "intermediate",
            "userNotes": null,
            "category": "customer service"
          },
          {
            "words": "unexpectedly",
            "class": "adverb",
            "japanese": "思いがけず",
            "sentence": "The project was completed unexpectedly early.",
            "level": "advanced",
            "userNotes": null,
            "category": "general vocabulary"
          },
          {
            "words": "budget",
            "class": "noun",
            "japanese": "予算",
            "sentence": "We need to allocate the budget for the new project.",
            "level": "beginner",
            "userNotes": null,
            "category": "finance"
          },
          {
            "words": "distribute",
            "class": "verb",
            "japanese": "配布する",
            "sentence": "The marketing department will distribute the brochures.",
            "level": "intermediate",
            "userNotes": null,
            "category": "marketing"
          },
          {
            "words": "global",
            "class": "adjective",
            "japanese": "グローバル",
            "sentence": "The company is focusing on global expansion.",
            "level": "beginner",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "proceed",
            "class": "verb",
            "japanese": "進む",
            "sentence": "After the inspection, the project will proceed as planned.",
            "level": "intermediate",
            "userNotes": null,
            "category": "legal"
          },
          {
            "words": "inquiry",
            "class": "noun",
            "japanese": "問い合わせ",
            "sentence": "The customer made an inquiry about the product's features.",
            "level": "beginner",
            "userNotes": null,
            "category": "customer service"
          },
          {
            "words": "negotiate",
            "class": "verb",
            "japanese": "交渉する",
            "sentence": "The two companies are negotiating a merger deal.",
            "level": "advanced",
            "userNotes": null,
            "category": "finance"
          },
          {
            "words": "indicate",
            "class": "verb",
            "japanese": "示す",
            "sentence": "The data indicates a strong growth in sales.",
            "level": "beginner",
            "userNotes": null,
            "category": "general vocabulary"
          },
          {
            "words": "reliable",
            "class": "adjective",
            "japanese": "信頼できる",
            "sentence": "Our team is known for being reliable and hardworking.",
            "level": "intermediate",
            "userNotes": null,
            "category": "human resources"
          },
          {
            "words": "sufficient",
            "class": "adjective",
            "japanese": "十分な",
            "sentence": "The company has sufficient resources to handle the demand.",
            "level": "intermediate",
            "userNotes": null,
            "category": "technology"
          },
          {
            "words": "execute",
            "class": "verb",
            "japanese": "実行する",
            "sentence": "We will execute the plan once all approvals are obtained.",
            "level": "advanced",
            "userNotes": null,
            "category": "legal"
          },
          {
            "words": "complaint",
            "class": "noun",
            "japanese": "苦情",
            "sentence": "The company received a complaint regarding the service.",
            "level": "beginner",
            "userNotes": null,
            "category": "customer service"
          },
          {
            "words": "feature",
            "class": "noun",
            "japanese": "特徴",
            "sentence": "One of the key features of the product is its durability.",
            "level": "beginner",
            "userNotes": null,
            "category": "marketing"
          },
          {
            "words": "advertise",
            "class": "verb",
            "japanese": "広告する",
            "sentence": "The company will advertise its new product in major newspapers.",
            "level": "intermediate",
            "userNotes": null,
            "category": "marketing"
          },
          {
            "words": "achievement",
            "class": "noun",
            "japanese": "達成",
            "sentence": "Her achievement in sales was impressive.",
            "level": "intermediate",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "assist",
            "class": "verb",
            "japanese": "手伝う",
            "sentence": "I will assist you with the project tomorrow.",
            "level": "beginner",
            "userNotes": null,
            "category": "customer service"
          },
          {
            "words": "collaboration",
            "class": "noun",
            "japanese": "協力",
            "sentence": "Successful collaboration is key to growth.",
            "level": "intermediate",
            "userNotes": null,
            "category": "marketing"
          },
          {
            "words": "criteria",
            "class": "noun",
            "japanese": "基準",
            "sentence": "We need to meet all the criteria to qualify.",
            "level": "advanced",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "diversify",
            "class": "verb",
            "japanese": "多様化する",
            "sentence": "The company plans to diversify its products.",
            "level": "intermediate",
            "userNotes": null,
            "category": "marketing"
          },
          {
            "words": "eligible",
            "class": "adjective",
            "japanese": "資格がある",
            "sentence": "Only eligible candidates will be considered.",
            "level": "intermediate",
            "userNotes": null,
            "category": "human resources"
          },
          {
            "words": "feedback",
            "class": "noun",
            "japanese": "フィードバック",
            "sentence": "The manager gave positive feedback on my work.",
            "level": "beginner",
            "userNotes": null,
            "category": "customer service"
          },
          {
            "words": "finalize",
            "class": "verb",
            "japanese": "最終決定する",
            "sentence": "We need to finalize the details of the contract.",
            "level": "intermediate",
            "userNotes": null,
            "category": "legal"
          },
          {
            "words": "globalize",
            "class": "verb",
            "japanese": "グローバル化する",
            "sentence": "They are looking to globalize their operations.",
            "level": "advanced",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "income",
            "class": "noun",
            "japanese": "収入",
            "sentence": "His income has increased this year.",
            "level": "beginner",
            "userNotes": null,
            "category": "finance"
          },
          {
            "words": "justify",
            "class": "verb",
            "japanese": "正当化する",
            "sentence": "You need to justify the cost increase to the client.",
            "level": "intermediate",
            "userNotes": null,
            "category": "legal"
          },
          {
            "words": "launch",
            "class": "verb",
            "japanese": "発射する",
            "sentence": "The company will launch its new product next month.",
            "level": "beginner",
            "userNotes": null,
            "category": "marketing"
          },
          {
            "words": "maintain",
            "class": "verb",
            "japanese": "維持する",
            "sentence": "It's important to maintain good customer relations.",
            "level": "intermediate",
            "userNotes": null,
            "category": "customer service"
          },
          {
            "words": "policy",
            "class": "noun",
            "japanese": "方針",
            "sentence": "The company has a strict return policy.",
            "level": "beginner",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "quote",
            "class": "noun",
            "japanese": "見積もり",
            "sentence": "Can you provide a quote for this project?",
            "level": "intermediate",
            "userNotes": null,
            "category": "finance"
          },
          {
            "words": "reduce",
            "class": "verb",
            "japanese": "減少する",
            "sentence": "The company is planning to reduce its workforce.",
            "level": "advanced",
            "userNotes": null,
            "category": "human resources"
          },
          {
            "words": "revenue",
            "class": "noun",
            "japanese": "収益",
            "sentence": "Our revenue grew by 15% last quarter.",
            "level": "intermediate",
            "userNotes": null,
            "category": "finance"
          },
          {
            "words": "satisfaction",
            "class": "noun",
            "japanese": "満足",
            "sentence": "Customer satisfaction is our top priority.",
            "level": "beginner",
            "userNotes": null,
            "category": "customer service"
          },
          {
            "words": "subscription",
            "class": "noun",
            "japanese": "定期購読",
            "sentence": "He signed up for a subscription to the service.",
            "level": "intermediate",
            "userNotes": null,
            "category": "marketing"
          },
          {
            "words": "transaction",
            "class": "noun",
            "japanese": "取引",
            "sentence": "The transaction was completed successfully.",
            "level": "beginner",
            "userNotes": null,
            "category": "finance"
          },
          {
            "words": "vendor",
            "class": "noun",
            "japanese": "供給業者",
            "sentence": "We are working with several vendors for this project.",
            "level": "intermediate",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "allocate",
            "class": "verb",
            "japanese": "割り当てる",
            "sentence": "We need to allocate more resources for the new project.",
            "level": "intermediate",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "contract",
            "class": "noun",
            "japanese": "契約",
            "sentence": "We signed a one-year contract for the service.",
            "level": "beginner",
            "userNotes": null,
            "category": "legal"
          },
          {
            "words": "deliver",
            "class": "verb",
            "japanese": "配達する",
            "sentence": "The product will be delivered within two weeks.",
            "level": "beginner",
            "userNotes": null,
            "category": "customer service"
          },
          {
            "words": "estimate",
            "class": "verb",
            "japanese": "見積もる",
            "sentence": "We need to estimate the costs before proceeding.",
            "level": "intermediate",
            "userNotes": null,
            "category": "finance"
          },
          {
            "words": "framework",
            "class": "noun",
            "japanese": "枠組み",
            "sentence": "The company developed a new framework for the project.",
            "level": "advanced",
            "userNotes": null,
            "category": "technology"
          },
          {
            "words": "guarantee",
            "class": "verb",
            "japanese": "保証する",
            "sentence": "We guarantee the quality of our products.",
            "level": "intermediate",
            "userNotes": null,
            "category": "customer service"
          },
          {
            "words": "implement",
            "class": "verb",
            "japanese": "実行する",
            "sentence": "We will implement the new system next month.",
            "level": "intermediate",
            "userNotes": null,
            "category": "technology"
          },
          {
            "words": "inventory",
            "class": "noun",
            "japanese": "在庫",
            "sentence": "We need to check the inventory before ordering more products.",
            "level": "beginner",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "deadline",
            "class": "noun",
            "japanese": "締め切り",
            "sentence": "The deadline for submitting the report is next Friday.",
            "level": "beginner",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "monitor",
            "class": "verb",
            "japanese": "監視する",
            "sentence": "We need to monitor the progress of the project.",
            "level": "intermediate",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "organize",
            "class": "verb",
            "japanese": "整理する",
            "sentence": "Please organize the documents before the meeting.",
            "level": "beginner",
            "userNotes": null,
            "category": "general vocabulary"
          },
          {
            "words": "postpone",
            "class": "verb",
            "japanese": "延期する",
            "sentence": "The meeting has been postponed until next week.",
            "level": "intermediate",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "priority",
            "class": "noun",
            "japanese": "優先事項",
            "sentence": "Customer satisfaction is our number one priority.",
            "level": "intermediate",
            "userNotes": null,
            "category": "customer service"
          },
          {
            "words": "purchase",
            "class": "verb",
            "japanese": "購入する",
            "sentence": "I will purchase the equipment for the office.",
            "level": "beginner",
            "userNotes": null,
            "category": "finance"
          },
          {
            "words": "qualify",
            "class": "verb",
            "japanese": "資格を得る",
            "sentence": "He qualifies for the position because of his experience.",
            "level": "intermediate",
            "userNotes": null,
            "category": "human resources"
          },
          {
            "words": "recruit",
            "class": "verb",
            "japanese": "採用する",
            "sentence": "The company plans to recruit new staff next month.",
            "level": "intermediate",
            "userNotes": null,
            "category": "human resources"
          },
          {
            "words": "clarify",
            "class": "verb",
            "japanese": "明確にする",
            "sentence": "The manager will clarify the instructions in the meeting.",
            "level": "intermediate",
            "userNotes": null,
            "category": "customer service"
          },
          {
            "words": "strategy",
            "class": "noun",
            "japanese": "戦略",
            "sentence": "We need to develop a strategy for the upcoming quarter.",
            "level": "intermediate",
            "userNotes": null,
            "category": "marketing"
          },
          {
            "words": "submit",
            "class": "verb",
            "japanese": "提出する",
            "sentence": "You must submit the report by Friday.",
            "level": "beginner",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "advance",
            "class": "verb",
            "japanese": "進む",
            "sentence": "The company plans to advance its technology next year.",
            "level": "intermediate",
            "userNotes": null,
            "category": "technology"
          },
          {
            "words": "board",
            "class": "noun",
            "japanese": "取締役会",
            "sentence": "The board of directors approved the new policy.",
            "level": "intermediate",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "cancel",
            "class": "verb",
            "japanese": "キャンセルする",
            "sentence": "The meeting has been canceled due to unforeseen circumstances.",
            "level": "beginner",
            "userNotes": null,
            "category": "customer service"
          },
          {
            "words": "breakthrough",
            "class": "noun",
            "japanese": "大発見",
            "sentence": "The new technology represents a major breakthrough.",
            "level": "advanced",
            "userNotes": null,
            "category": "technology"
          },
          {
            "words": "focus",
            "class": "verb",
            "japanese": "集中する",
            "sentence": "We need to focus on customer needs to improve sales.",
            "level": "beginner",
            "userNotes": null,
            "category": "marketing"
          },
          {
            "words": "analyze",
            "class": "verb",
            "japanese": "分析する",
            "sentence": "We need to analyze the data before making a decision.",
            "level": "intermediate",
            "userNotes": null,
            "category": "technology"
          },
          {
            "words": "hire",
            "class": "verb",
            "japanese": "採用する",
            "sentence": "The company is planning to hire more employees.",
            "level": "beginner",
            "userNotes": null,
            "category": "human resources"
          },
          {
            "words": "inspect",
            "class": "verb",
            "japanese": "検査する",
            "sentence": "We will inspect the products before shipment.",
            "level": "intermediate",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "join",
            "class": "verb",
            "japanese": "加わる",
            "sentence": "She will join the team as a project manager.",
            "level": "beginner",
            "userNotes": null,
            "category": "human resources"
          },
          {
            "words": "knowledge",
            "class": "noun",
            "japanese": "知識",
            "sentence": "The team has extensive knowledge of the industry.",
            "level": "intermediate",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "lack",
            "class": "noun",
            "japanese": "欠乏",
            "sentence": "There is a lack of communication between departments.",
            "level": "intermediate",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "motivate",
            "class": "verb",
            "japanese": "動機付ける",
            "sentence": "The manager motivated the team to achieve their targets.",
            "level": "intermediate",
            "userNotes": null,
            "category": "human resources"
          },
          {
            "words": "network",
            "class": "noun",
            "japanese": "ネットワーク",
            "sentence": "Networking is essential for business growth.",
            "level": "intermediate",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "option",
            "class": "noun",
            "japanese": "選択肢",
            "sentence": "The customer has several options to choose from.",
            "level": "beginner",
            "userNotes": null,
            "category": "customer service"
          },
          {
            "words": "product",
            "class": "noun",
            "japanese": "製品",
            "sentence": "The new product will launch next month.",
            "level": "beginner",
            "userNotes": null,
            "category": "marketing"
          },
          {
            "words": "quality",
            "class": "adjective",
            "japanese": "質の良い",
            "sentence": "The company focuses on providing high-quality products.",
            "level": "intermediate",
            "userNotes": null,
            "category": "customer service"
          },
          {
            "words": "allocate",
            "class": "verb",
            "japanese": "割り当てる",
            "sentence": "We need to allocate more resources to the project.",
            "level": "intermediate",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "share",
            "class": "noun",
            "japanese": "共有",
            "sentence": "The company will share its annual results next week.",
            "level": "beginner",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "target",
            "class": "noun",
            "japanese": "目標",
            "sentence": "Our target is to increase sales by 20%.",
            "level": "beginner",
            "userNotes": null,
            "category": "marketing"
          },
          {
            "words": "update",
            "class": "verb",
            "japanese": "更新する",
            "sentence": "Please update the document with the latest information.",
            "level": "intermediate",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "value",
            "class": "noun",
            "japanese": "価値",
            "sentence": "The product offers great value for the price.",
            "level": "intermediate",
            "userNotes": null,
            "category": "marketing"
          },
          {
            "words": "warranty",
            "class": "noun",
            "japanese": "保証",
            "sentence": "The product comes with a two-year warranty.",
            "level": "beginner",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "exceed",
            "class": "verb",
            "japanese": "超える",
            "sentence": "The company expects to exceed its sales targets this year.",
            "level": "advanced",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "yield",
            "class": "verb",
            "japanese": "生み出す",
            "sentence": "The new system will yield better results.",
            "level": "intermediate",
            "userNotes": null,
            "category": "technology"
          },
          {
            "words": "zone",
            "class": "noun",
            "japanese": "地域",
            "sentence": "The company operates in several regions and zones.",
            "level": "intermediate",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "application",
            "class": "noun",
            "japanese": "申請",
            "sentence": "You can submit your application online.",
            "level": "beginner",
            "userNotes": null,
            "category": "human resources"
          },
          {
            "words": "breach",
            "class": "noun",
            "japanese": "侵害",
            "sentence": "The contract was terminated due to a breach of terms.",
            "level": "advanced",
            "userNotes": null,
            "category": "legal"
          },
          {
            "words": "closure",
            "class": "noun",
            "japanese": "終了",
            "sentence": "The company will announce the closure of its office next week.",
            "level": "intermediate",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "demand",
            "class": "noun",
            "japanese": "需要",
            "sentence": "There is a high demand for our new products.",
            "level": "beginner",
            "userNotes": null,
            "category": "business"
          },
          {
            "words": "essential",
            "class": "adjective",
            "japanese": "必須の",
            "sentence": "Time management is an essential skill in the workplace.",
            "level": "intermediate",
            "userNotes": null,
            "category": "general vocabulary"
          }
        ,
    ],
  });

  console.log("✅ 資料插入完成！");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
