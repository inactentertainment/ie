(()=>{const $=s=>document.querySelector(s);const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));const toast=message=>{document.querySelector('#toast').textContent=message};
const articles=[{"slug":"ai-music-production","title":"AI music grows up: from instant song to intentional production","topic":"AI Music","deck":"A producer’s guide to directing, evaluating, arranging, and presenting AI music as a deliberate creative experiment.","longform":true,"wordCount":3228,"featureNumber":1,"published":"2026-10-08","author":"InAct Entertainment Editorial","url":"articles/ai-music-production.html","legacyIndex":20,"watch":["music","album"],"primer":{"title":"Before you begin","text":"A song is the musical work: words and melody. A recording is one captured version of that work. A writer develops the song. A producer helps shape the recording. Distribution gets a release to listening services. AI can help create material, but people still need to choose what to keep, explain the project, and check the rules for release. Start with a short goal: what should the listener hear or feel?","terms":"Creative brief: a short plan for the sound you want.\nArrangement: how the parts of a song are organized.\nStem: an audio file containing a separated part or group of parts.\nMIDI: note and control information, rather than a finished audio recording."}},{"slug":"ai-search-marketing","title":"Marketing in AI search: become the useful answer, not another slogan","topic":"Digital Marketing","deck":"Build decision-first content, separate evidence from promotion, and measure qualified progress without promising a secret AI-ranking trick.","longform":true,"wordCount":3158,"featureNumber":2,"published":"2026-10-08","author":"InAct Entertainment Editorial","url":"articles/ai-search-marketing.html","legacyIndex":21,"watch":["seo","ideas"],"primer":{"title":"Before you begin","text":"Marketing helps people understand an offer. Search helps them find information. SEO means making a website easier for search systems and people to understand. AI search can produce an answer using information from different places. Your first job is still simple: answer a real customer question clearly, support your claims, and make the next step easy to find.","terms":"Audience: the people you want to help.\nOffer: what someone gets and under what terms.\nQualified inquiry: a request that fits the business’s defined needs.\nConversion: a chosen action, such as an inquiry, not always a sale."}},{"slug":"business-agents","title":"Beyond the chatbot: design an AI workflow that actually moves work forward","topic":"AI Workflows","deck":"An operational guide to business agents, predictable rules, shared context, human review, and measurable improvements.","longform":true,"wordCount":3309,"featureNumber":3,"published":"2026-10-08","author":"InAct Entertainment Editorial","url":"articles/business-agents.html","legacyIndex":22,"watch":["work","ai"],"primer":{"title":"Before you begin","text":"A workflow is a series of steps that turns a request into a result. A rule follows a set instruction. An AI model can help draft or sort information. An agent can choose and use tools within the limits it is given. None of these things gets to decide its own business authority. Begin by mapping one task and choosing who reviews the result.","terms":"Input: information that starts the task.\nOutput: the result the task should produce.\nApproval gate: a point where a person must review or allow an action.\nMCP: a connection standard for tools and context; it does not grant permission by itself."}},{"slug":"realtime-music","title":"Real-time music models: when the listener becomes part of the instrument","topic":"AI Music","deck":"Explore the musical feedback loop: intention, control, audible response, and a better next decision.","longform":true,"wordCount":3248,"featureNumber":4,"published":"2026-10-09","author":"InAct Entertainment Editorial","url":"articles/realtime-music.html","legacyIndex":23,"watch":["music","ai"],"primer":{"title":"Before you begin","text":"An ordinary player plays a recording that already exists. A real-time music tool can create new sound while you use its controls. You might ask for more rhythm or a different texture, then listen to what happens. The important question is whether the change matches what you meant. This lesson studies the interaction, not just how impressive the music sounds.","terms":"Generative: creating new material from learned patterns.\nTexture: how the sounds combine and feel together.\nDensity: how much musical activity is present.\nFeedback loop: act, notice the result, and decide what to do next."}},{"slug":"ai-artist-identities","title":"AI artist identities: the difference between a persona and a performer","topic":"AI Music","deck":"Build a compelling experimental musical identity with honest storytelling, visible human direction, and an audience promise.","longform":true,"wordCount":3331,"featureNumber":5,"published":"2026-10-09","author":"InAct Entertainment Editorial","url":"articles/ai-artist-identities.html","legacyIndex":24,"watch":["album","music"],"primer":{"title":"Before you begin","text":"A music project can use a fictional character without pretending the character is a real singer. A persona is the identity presented to listeners. A performer is a person who performs. A human artist can use AI without becoming a fictional persona. Explain the project, the identity, and the responsible people separately. Then listeners can choose to explore it with a clear understanding.","terms":"Persona: a presented identity or character.\nProduction credit: information about who or what contributed to a recording.\nAudience promise: the experience a project aims to offer.\nRelease record: notes about materials, decisions, reviews, and permissions checked."}}];
const courses=[
  {
    "id": "purpose-momentum",
    "order": 1,
    "title": "Purpose & Momentum",
    "deck": "Build a reason to begin and a routine that helps you keep going.",
    "outcome": "Write your purpose statement and a realistic seven-day learning plan.",
    "stage": "Foundation",
    "videos": [
      "habits"
    ],
    "modules": [
      {
        "title": "Start with purpose",
        "lessons": [
          "What matters to you and whom you want to help",
          "Your why, how, and what in plain words"
        ]
      },
      {
        "title": "Learn without feeling lost",
        "lessons": [
          "How to learn a new skill as an adult",
          "Turn a large goal into one small practice"
        ]
      },
      {
        "title": "Build useful habits",
        "lessons": [
          "Make practice easier to begin",
          "Create a routine and review it weekly"
        ]
      },
      {
        "title": "Confidence through action",
        "lessons": [
          "Use feedback without giving up",
          "Separate a setback from your identity"
        ]
      },
      {
        "title": "Communication and leadership",
        "lessons": [
          "Explain your idea so people understand it",
          "Listen, ask better questions, and lead with a clear purpose"
        ]
      },
      {
        "title": "Your first learning project",
        "lessons": [
          "Choose a meaningful problem",
          "Build a seven-day plan and reflect on what changed"
        ]
      }
    ],
    "url": "courses/purpose-momentum.html",
    "published": [],
    "resources": [
      [
        "James Clear on habits",
        "https://jamesclear.com/"
      ],
      [
        "The Diary Of A CEO",
        "https://www.youtube.com/TheDiaryOfACEO"
      ]
    ],
    "featured": true,
    "tint": "#17253d",
    "related": [
      "leadership"
    ],
    "foundationAvailable": true
  },
  {
    "id": "leadership",
    "title": "Leadership for Life & Work",
    "deck": "Lead with judgment, communicate clearly, and adapt your style to the people and situation.",
    "outcome": "Create a leadership agreement and practice a difficult conversation.",
    "stage": "Leadership",
    "tint": "#27304b",
    "videos": [],
    "modules": [
      {
        "title": "Leadership begins with responsibility",
        "lessons": [
          "Influence without a formal title",
          "Accountability and everyday decisions"
        ]
      },
      {
        "title": "Styles without rigid labels",
        "lessons": [
          "Directive, participative, coaching, and delegating approaches",
          "Match support to the task and person"
        ]
      },
      {
        "title": "Listen and communicate",
        "lessons": [
          "Ask questions and listen before responding",
          "Give specific feedback with respect"
        ]
      },
      {
        "title": "Decide and delegate",
        "lessons": [
          "Decision boundaries and shared ownership",
          "Delegation with a check-in plan"
        ]
      },
      {
        "title": "Handle conflict and change",
        "lessons": [
          "Conflict, trust, and repair",
          "Change leadership and uncertainty"
        ]
      },
      {
        "title": "Build a leadership practice",
        "lessons": [
          "Lead a realistic team scenario",
          "Review decisions and improve your approach"
        ]
      }
    ],
    "url": "courses/leadership.html",
    "published": [],
    "resources": [],
    "order": 2,
    "featured": false,
    "related": [],
    "foundationAvailable": true
  },
  {
    "id": "ai-foundations",
    "order": 3,
    "title": "AI Foundations",
    "deck": "Understand what AI does before asking it to do important work.",
    "outcome": "Create and check a useful AI-assisted draft.",
    "stage": "Foundation",
    "videos": [
      "ai",
      "work"
    ],
    "modules": [
      {
        "title": "What AI actually means",
        "lessons": [
          "AI, machine learning, and generative AI",
          "How a model differs from an app or a search engine"
        ]
      },
      {
        "title": "Your first useful prompt",
        "lessons": [
          "Give a task, context, and a clear result",
          "Improve a draft through a conversation"
        ]
      },
      {
        "title": "Check the answer",
        "lessons": [
          "Find and read the original source",
          "Spot guesses, invented details, and missing context"
        ]
      },
      {
        "title": "Use your judgment",
        "lessons": [
          "What you should review yourself",
          "Privacy, consent, and information you should keep out"
        ]
      },
      {
        "title": "Choose tools by the task",
        "lessons": [
          "Compare tools without chasing every release",
          "Understand free plans, paid features, and changing limits"
        ]
      },
      {
        "title": "Your first AI project",
        "lessons": [
          "Create a simple brief or planning aid",
          "Test it, revise it, and explain what helped"
        ]
      }
    ],
    "url": "courses/ai-foundations.html",
    "published": [],
    "resources": [
      [
        "Wharton AI teaching and work resources",
        "https://mackinstitute.wharton.upenn.edu/2023/watch-chatgpt-for-work-training-and-education/"
      ]
    ],
    "featured": true,
    "tint": "#132b42",
    "related": [],
    "foundationAvailable": true
  },
  {
    "id": "music-ai",
    "order": 4,
    "title": "Sound, Story & AI: The Modern Music Industry",
    "deck": "Understand the music business, shape your sound, and explore how AI changes creation and listening.",
    "outcome": "Plan a small release with clear roles, records, and listening goals.",
    "stage": "Creative industry",
    "videos": [
      "music",
      "album"
    ],
    "modules": [
      {
        "title": "How the industry took shape",
        "lessons": [
          "From sheet music and records to radio and streaming",
          "How technology changed listening and discovery"
        ]
      },
      {
        "title": "Who does what",
        "lessons": [
          "Artists, writers, producers, managers, labels, and publishers",
          "Songs and recordings are different things"
        ]
      },
      {
        "title": "How music reaches listeners",
        "lessons": [
          "Distribution, platforms, playlists, live shows, and audience building",
          "Revenue sources, credits, and royalty concepts"
        ]
      },
      {
        "title": "Create with intention",
        "lessons": [
          "Musical basics, listening, lyrics, and a creative brief",
          "Compare drafts, arrange a song, and review the result"
        ]
      },
      {
        "title": "Add AI thoughtfully",
        "lessons": [
          "Generated music, stems, MIDI, and human direction",
          "Real-time music and experimental artist identities"
        ]
      },
      {
        "title": "Prepare a release",
        "lessons": [
          "Review permissions, terms, credits, and delivery requirements",
          "Build a release plan and measure useful listener response"
        ]
      }
    ],
    "url": "courses/music-ai.html",
    "published": [
      {
        "module": 3,
        "slug": "ai-music-production"
      },
      {
        "module": 4,
        "slug": "realtime-music"
      },
      {
        "module": 4,
        "slug": "ai-artist-identities"
      }
    ],
    "resources": [
      [
        "Google music research and tools",
        "https://deepmind.google/models/lyria/"
      ],
      [
        "U.S. Copyright Office AI resources",
        "https://www.copyright.gov/ai/"
      ]
    ],
    "featured": true,
    "tint": "#321b3e",
    "related": [],
    "foundationAvailable": true
  },
  {
    "id": "everyday-ai",
    "order": 5,
    "title": "Everyday Life with AI",
    "deck": "Use technology to handle time, information, work, and daily decisions.",
    "outcome": "Build a personal routine with clear human review points.",
    "stage": "Daily life",
    "videos": [
      "habits",
      "ai"
    ],
    "modules": [
      {
        "title": "Time and attention",
        "lessons": [
          "Plan a week that fits your real commitments",
          "Turn a long task list into useful next steps"
        ]
      },
      {
        "title": "Learn and research",
        "lessons": [
          "Ask questions at the right level",
          "Compare sources and keep useful notes"
        ]
      },
      {
        "title": "Money organization",
        "lessons": [
          "Organize a household budget with verified numbers",
          "Use AI to prepare questions rather than make financial decisions"
        ]
      },
      {
        "title": "Work and career",
        "lessons": [
          "Describe your skills and explore roles",
          "Draft a resume and practice an interview honestly"
        ]
      },
      {
        "title": "Clear communication",
        "lessons": [
          "Write emails, prepare meetings, and resolve confusion",
          "Use translation and accessibility tools thoughtfully"
        ]
      },
      {
        "title": "Your personal life flow",
        "lessons": [
          "Build reminders and checklists",
          "Review what to automate and what to decide yourself"
        ]
      }
    ],
    "url": "courses/everyday-ai.html",
    "published": [],
    "resources": [
      [
        "CFPB consumer tools",
        "https://www.consumerfinance.gov/consumer-tools/"
      ]
    ],
    "featured": false,
    "tint": "#183735",
    "related": [
      "organization",
      "career-ai",
      "digital-safety"
    ],
    "foundationAvailable": true
  },
  {
    "id": "organization",
    "title": "Organize Your Life & Work",
    "deck": "Bring order to your time, home, family responsibilities, business, and digital files with practical AI support.",
    "outcome": "Build one trusted capture system, a simple filing structure, and a weekly review.",
    "stage": "Life & organization",
    "tint": "#16352b",
    "videos": [],
    "modules": [
      {
        "title": "Start with a trusted system",
        "lessons": [
          "Capture tasks and separate actions from reference",
          "A weekly review that fits your life"
        ]
      },
      {
        "title": "Organize time and commitments",
        "lessons": [
          "Calendars, reminders, and next actions",
          "Prioritize with capacity and buffer time"
        ]
      },
      {
        "title": "Home and family systems",
        "lessons": [
          "Household routines and shared responsibilities",
          "Family schedules and age-appropriate participation"
        ]
      },
      {
        "title": "Digital files and information",
        "lessons": [
          "Name files and find them again",
          "Email, backups, and sensitive records"
        ]
      },
      {
        "title": "Organize a small business",
        "lessons": [
          "Client files, invoices, and recurring work",
          "AI-assisted sorting with human review"
        ]
      },
      {
        "title": "Maintain order without perfection",
        "lessons": [
          "A practical seven-day organization reset",
          "Repair the system when life changes"
        ]
      }
    ],
    "url": "courses/organization.html",
    "published": [],
    "resources": [],
    "order": 6,
    "featured": true,
    "related": [],
    "foundationAvailable": true
  },
  {
    "id": "small-business",
    "order": 7,
    "title": "Start and Grow a Small Business",
    "deck": "Go from an idea to an offer, customers, and a business you can operate.",
    "outcome": "Draft a one-page business plan and a first-customer experiment.",
    "stage": "Business foundation",
    "videos": [
      "ideas",
      "mvp"
    ],
    "modules": [
      {
        "title": "Understand the business",
        "lessons": [
          "What problem you solve and who has it",
          "Business models, customers, and value"
        ]
      },
      {
        "title": "Test before spending",
        "lessons": [
          "Talk to potential customers",
          "Build the smallest useful offer"
        ]
      },
      {
        "title": "Plan the basics",
        "lessons": [
          "Costs, pricing, revenue, profit, and cash flow",
          "Find official registration, licensing, and tax information"
        ]
      },
      {
        "title": "Find your first customers",
        "lessons": [
          "Explain the offer and make buying clear",
          "Practice customer service and follow-up"
        ]
      },
      {
        "title": "Run and improve",
        "lessons": [
          "Keep records and measure useful progress",
          "Choose when to expand and when to simplify"
        ]
      },
      {
        "title": "Your business launch plan",
        "lessons": [
          "Use AI to organize research without inventing facts",
          "Present an offer, budget, and a 30-day test"
        ]
      }
    ],
    "url": "courses/small-business.html",
    "published": [],
    "resources": [
      [
        "SBA business planning",
        "https://www.sba.gov/counseling/plan-your-business/"
      ],
      [
        "SCORE mentoring and workshops",
        "https://www.score.org/"
      ]
    ],
    "featured": false,
    "tint": "#252844",
    "related": [
      "scale-business",
      "print-on-demand",
      "amazon-business",
      "learning-products",
      "business-funding",
      "customer-experience"
    ],
    "foundationAvailable": true
  },
  {
    "id": "scale-business",
    "title": "Scale a Business in the AI Age",
    "deck": "Grow capacity without letting costs, customer experience, and control fall apart.",
    "outcome": "Create a capacity map and a staged growth test with stop conditions.",
    "stage": "Business growth",
    "tint": "#252c46",
    "videos": [],
    "modules": [
      {
        "title": "Growth and scale are different",
        "lessons": [
          "Revenue growth, costs, and operational capacity",
          "Choose a sustainable growth goal"
        ]
      },
      {
        "title": "Measure the real constraint",
        "lessons": [
          "Find bottlenecks and measure throughput",
          "Customer quality and unit economics"
        ]
      },
      {
        "title": "Repeatable operations",
        "lessons": [
          "Standardize before automating",
          "Build exception handling and review"
        ]
      },
      {
        "title": "People and responsibility",
        "lessons": [
          "Delegation, hiring, and training",
          "Track ownership and decisions"
        ]
      },
      {
        "title": "Finance a controlled expansion",
        "lessons": [
          "Cash timing and financing trade-offs",
          "Compare costs without invented projections"
        ]
      },
      {
        "title": "Test the next stage",
        "lessons": [
          "Pilot expansion with a rollback plan",
          "Review results before wider rollout"
        ]
      }
    ],
    "url": "courses/scale-business.html",
    "published": [],
    "resources": [],
    "order": 8,
    "featured": false,
    "related": [],
    "foundationAvailable": true
  },
  {
    "id": "print-on-demand",
    "title": "Print on Demand in the AI Age",
    "deck": "Turn a clear customer idea into a tested physical product, with realistic costs and careful design review.",
    "outcome": "Create a sample-tested product brief and an honest unit-cost worksheet.",
    "stage": "Business model",
    "tint": "#392b1b",
    "videos": [],
    "modules": [
      {
        "title": "Understand the print-on-demand model",
        "lessons": [
          "Production after an order and who fulfills it",
          "Costs, margin, and the customer promise"
        ]
      },
      {
        "title": "Research the customer",
        "lessons": [
          "Find a use case instead of copying trends",
          "Research demand without making sales guarantees"
        ]
      },
      {
        "title": "Create and check the design",
        "lessons": [
          "AI-assisted ideation and original design decisions",
          "Check permissions, trademarks, and platform rules"
        ]
      },
      {
        "title": "Test the physical product",
        "lessons": [
          "File resolution, placement, and color limits",
          "Order and inspect a sample"
        ]
      },
      {
        "title": "Build the listing and delivery promise",
        "lessons": [
          "Images, sizing, descriptions, and returns",
          "Compare marketplaces and your own shop"
        ]
      },
      {
        "title": "Learn from a small launch",
        "lessons": [
          "Run a small launch and record evidence",
          "Improve one product before expanding the catalog"
        ]
      }
    ],
    "url": "courses/print-on-demand.html",
    "published": [],
    "resources": [],
    "order": 9,
    "featured": false,
    "related": [],
    "foundationAvailable": true
  },
  {
    "id": "amazon-business",
    "title": "Build a Business with Amazon",
    "deck": "Compare KDP, audiobooks, Merch on Demand, selling, and affiliate routes before choosing your first project.",
    "outcome": "Create a platform comparison and a verified first-project checklist.",
    "stage": "Business model",
    "tint": "#3b2c19",
    "videos": [],
    "modules": [
      {
        "title": "Map the Amazon business routes",
        "lessons": [
          "Publishing, audio, merchandise, inventory, and referrals",
          "Eligibility, rights, costs, and responsibilities"
        ]
      },
      {
        "title": "KDP publishing",
        "lessons": [
          "Reader value, manuscript, cover, and proofing",
          "AI-generated disclosure and current KDP rules"
        ]
      },
      {
        "title": "Audiobooks and ACX",
        "lessons": [
          "Rights holders, narrators, production, and distribution",
          "Authorized narration and ACX submission standards"
        ]
      },
      {
        "title": "Merch on Demand",
        "lessons": [
          "Applications, original design, and royalties",
          "Intellectual property and listing rules"
        ]
      },
      {
        "title": "Seller and affiliate routes",
        "lessons": [
          "FBA, merchant fulfillment, and product economics",
          "Associates, disclosures, and approved linking practices"
        ]
      },
      {
        "title": "Launch one verified project",
        "lessons": [
          "Choose a route and make a quality checklist",
          "Check the current program rules before launch"
        ]
      }
    ],
    "url": "courses/amazon-business.html",
    "published": [],
    "resources": [],
    "order": 10,
    "featured": false,
    "related": [],
    "foundationAvailable": true
  },
  {
    "id": "learning-products",
    "order": 11,
    "title": "Teach, Create & Sell Digital Products",
    "deck": "Turn something useful you know into a lesson, tool, or digital resource.",
    "outcome": "Design one useful learning product and a small feedback test.",
    "stage": "Build and teach",
    "videos": [
      "work",
      "mvp"
    ],
    "modules": [
      {
        "title": "Start with the learner",
        "lessons": [
          "Identify the problem and the starting skill",
          "Write an outcome someone can demonstrate"
        ]
      },
      {
        "title": "Teach in small steps",
        "lessons": [
          "Explain, model, practice, and give feedback",
          "Use questions throughout rather than only at the end"
        ]
      },
      {
        "title": "Choose the product",
        "lessons": [
          "Lessons, templates, journals, apps, and toolkits",
          "Make the product usable and accessible"
        ]
      },
      {
        "title": "Use AI in the build",
        "lessons": [
          "Create drafts, examples, and practice activities",
          "Check accuracy, rights, and the learning experience"
        ]
      },
      {
        "title": "Package and present",
        "lessons": [
          "Describe what the customer gets",
          "Price, deliver, support, and collect useful feedback"
        ]
      },
      {
        "title": "Your first learning product",
        "lessons": [
          "Prototype a short lesson or tool",
          "Test it with a learner and improve the design"
        ]
      }
    ],
    "url": "courses/learning-products.html",
    "published": [],
    "resources": [
      [
        "Khan Academy learning resources",
        "https://www.khanacademy.org/"
      ]
    ],
    "featured": false,
    "tint": "#193323",
    "related": [],
    "foundationAvailable": true
  },
  {
    "id": "business-funding",
    "order": 12,
    "title": "Funding Your Business",
    "deck": "Learn the options, costs, documents, and questions behind business funding.",
    "outcome": "Prepare a funding-readiness checklist and compare options using verified terms.",
    "stage": "Business money",
    "videos": [],
    "modules": [
      {
        "title": "Understand the need",
        "lessons": [
          "Why the business needs money and when",
          "Separate startup costs, working capital, and equipment"
        ]
      },
      {
        "title": "Know the options",
        "lessons": [
          "Self-funding, loans, credit lines, and equity",
          "SBA programs, community lenders, and grant limitations"
        ]
      },
      {
        "title": "Read the terms",
        "lessons": [
          "Interest, fees, repayment, collateral, and guarantees",
          "Compare total cost and the effect on cash flow"
        ]
      },
      {
        "title": "Prepare the evidence",
        "lessons": [
          "Business plans, financial statements, and projections",
          "Organize records and explain assumptions"
        ]
      },
      {
        "title": "Use AI for preparation",
        "lessons": [
          "Create a document checklist and draft questions",
          "Verify providers, protect sensitive data, and review every claim"
        ]
      },
      {
        "title": "Your funding-readiness brief",
        "lessons": [
          "Compare two options with verified figures",
          "Prepare for a lender or adviser conversation"
        ]
      }
    ],
    "url": "courses/business-funding.html",
    "published": [],
    "resources": [
      [
        "SBA loan programs",
        "https://www.sba.gov/funding-programs/loans"
      ],
      [
        "SCORE financial readiness and mentoring",
        "https://www.score.org/"
      ],
      [
        "Official SBA video channel",
        "https://www.youtube.com/sba"
      ]
    ],
    "featured": false,
    "tint": "#17353c",
    "related": [],
    "foundationAvailable": true
  },
  {
    "id": "business-workflows",
    "order": 13,
    "title": "AI Workflows for Business",
    "deck": "Connect tasks, people, tools, and review so work moves forward.",
    "outcome": "Design and test one small business workflow.",
    "stage": "Business systems",
    "videos": [
      "work",
      "ai"
    ],
    "modules": [
      {
        "title": "See the process",
        "lessons": [
          "Map the steps from request to result",
          "Find delays, repeated work, and missing information"
        ]
      },
      {
        "title": "Make a repeatable workflow",
        "lessons": [
          "Rules, checklists, and standard procedures",
          "Choose where AI can draft, sort, or summarize"
        ]
      },
      {
        "title": "Use good information",
        "lessons": [
          "Keep business knowledge organized",
          "Connect answers to approved source material"
        ]
      },
      {
        "title": "Understand automation and agents",
        "lessons": [
          "When a fixed rule is enough",
          "What an agent can do and who authorizes actions"
        ]
      },
      {
        "title": "Test the real cases",
        "lessons": [
          "Use incomplete, mixed, and unusual requests",
          "Count review time, errors, and exceptions"
        ]
      },
      {
        "title": "Your workflow pilot",
        "lessons": [
          "Write an intake and review process",
          "Test the pilot before expanding its permissions"
        ]
      }
    ],
    "url": "courses/business-workflows.html",
    "published": [
      {
        "module": 3,
        "slug": "business-agents"
      }
    ],
    "resources": [
      [
        "Wharton workplace learning",
        "https://knowledge.wharton.upenn.edu/faculty/ethan-mollick/"
      ]
    ],
    "featured": false,
    "tint": "#123235",
    "related": [
      "project-management"
    ],
    "foundationAvailable": true
  },
  {
    "id": "project-management",
    "title": "Projects from Idea to Delivery",
    "deck": "Define a useful result, plan the work, and coordinate people without drowning in tools.",
    "outcome": "Write a project brief with milestones, owners, risks, and acceptance criteria.",
    "stage": "Project delivery",
    "tint": "#193539",
    "videos": [],
    "modules": [
      {
        "title": "Define a result people can use",
        "lessons": [
          "The user need and a clear finished result",
          "Acceptance criteria and evidence"
        ]
      },
      {
        "title": "Plan scope and constraints",
        "lessons": [
          "Deliverables, boundaries, and assumptions",
          "Time, budget, and capacity"
        ]
      },
      {
        "title": "Sequence the work",
        "lessons": [
          "Tasks, dependencies, and milestones",
          "Choose a simple tracking system"
        ]
      },
      {
        "title": "Coordinate decisions",
        "lessons": [
          "Owners, reviewers, and decision authority",
          "Meetings and updates that unblock work"
        ]
      },
      {
        "title": "Handle change and risk",
        "lessons": [
          "Document scope changes",
          "Test a risk response and fallback"
        ]
      },
      {
        "title": "Deliver and learn",
        "lessons": [
          "Handover, support, and closure",
          "Use a retrospective to improve the next project"
        ]
      }
    ],
    "url": "courses/project-management.html",
    "published": [],
    "resources": [],
    "order": 14,
    "featured": false,
    "related": [],
    "foundationAvailable": true
  },
  {
    "id": "digital-marketing",
    "order": 15,
    "title": "Digital Marketing & Social Media",
    "deck": "Help the right people find, understand, and choose your work.",
    "outcome": "Build an audience plan and a measurable content experiment.",
    "stage": "Reach and growth",
    "videos": [
      "seo",
      "ideas"
    ],
    "modules": [
      {
        "title": "Marketing before posting",
        "lessons": [
          "Audience, offer, positioning, and trust",
          "Customer journeys and useful next steps"
        ]
      },
      {
        "title": "Social media foundations",
        "lessons": [
          "Choose platforms by people and purpose",
          "Build a profile, content pillars, and a posting rhythm"
        ]
      },
      {
        "title": "Create useful content",
        "lessons": [
          "Tell a clear story with text, images, and video",
          "Use AI for drafts while checking claims and tone"
        ]
      },
      {
        "title": "Search and discovery",
        "lessons": [
          "SEO basics and useful website content",
          "What changes in AI search and what still matters"
        ]
      },
      {
        "title": "Measure and improve",
        "lessons": [
          "Reach, engagement, inquiries, and actual outcomes",
          "Test an idea without making unsupported promises"
        ]
      },
      {
        "title": "Your campaign experiment",
        "lessons": [
          "Build a simple content calendar",
          "Review results and choose the next adjustment"
        ]
      }
    ],
    "url": "courses/digital-marketing.html",
    "published": [
      {
        "module": 3,
        "slug": "ai-search-marketing"
      }
    ],
    "resources": [
      [
        "HubSpot social media course",
        "https://academy.hubspot.com/courses/social-media"
      ],
      [
        "Google Search Central",
        "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
      ]
    ],
    "featured": false,
    "tint": "#382c1c",
    "related": [
      "ai-content-studio"
    ],
    "foundationAvailable": true
  },
  {
    "id": "customer-experience",
    "title": "E-commerce & Customer Experience",
    "deck": "Design a clear buying journey and dependable service before adding more products or automation.",
    "outcome": "Map a customer journey and write a useful order-and-support checklist.",
    "stage": "Business operations",
    "tint": "#29321f",
    "videos": [],
    "modules": [
      {
        "title": "Understand the buying journey",
        "lessons": [
          "Customer questions from discovery to support",
          "Promises, evidence, and friction"
        ]
      },
      {
        "title": "Make the offer clear",
        "lessons": [
          "Describe value without unsupported claims",
          "Pricing, delivery, and fit"
        ]
      },
      {
        "title": "Product and checkout information",
        "lessons": [
          "Useful product details and accessible layouts",
          "Review the actual payment and confirmation flow"
        ]
      },
      {
        "title": "Fulfillment and communication",
        "lessons": [
          "Order status, stock, and fulfillment ownership",
          "Messages with checked customer information"
        ]
      },
      {
        "title": "Handle questions and problems",
        "lessons": [
          "Returns, complaints, and escalation",
          "AI drafts with human decisions"
        ]
      },
      {
        "title": "Improve the customer system",
        "lessons": [
          "Measure a meaningful customer outcome",
          "Test one improvement and document the result"
        ]
      }
    ],
    "url": "courses/customer-experience.html",
    "published": [],
    "resources": [],
    "order": 16,
    "featured": false,
    "related": [],
    "foundationAvailable": true
  },
  {
    "id": "web-design",
    "order": 17,
    "title": "Web Design & Interactive Apps",
    "deck": "Learn how pages become useful experiences people can actually use.",
    "outcome": "Build a responsive, accessible business page or small interactive tool.",
    "stage": "Build and create",
    "videos": [
      "html",
      "mvp"
    ],
    "modules": [
      {
        "title": "How the web works",
        "lessons": [
          "Domains, hosting, browsers, and files",
          "HTML for structure, CSS for style, JavaScript for behavior"
        ]
      },
      {
        "title": "Plan the experience",
        "lessons": [
          "What a visitor needs to understand and do",
          "Page structure, navigation, and clear calls to action"
        ]
      },
      {
        "title": "Build for real devices",
        "lessons": [
          "Layouts that adapt to phones and computers",
          "Readable type, contrast, keyboard access, and motion choices"
        ]
      },
      {
        "title": "Add useful interaction",
        "lessons": [
          "Forms, calculators, and local browser saving",
          "Understand what needs a server or an account"
        ]
      },
      {
        "title": "Build with AI and review",
        "lessons": [
          "Ask for code you can explain",
          "Test links, inputs, errors, and loading behavior"
        ]
      },
      {
        "title": "Your first published project",
        "lessons": [
          "Use GitHub and static hosting",
          "Document the project and make the next revision"
        ]
      }
    ],
    "url": "courses/web-design.html",
    "published": [],
    "resources": [
      [
        "Kevin Powell beginner learning",
        "https://thecascade.dev/courses/html-css-beginners/"
      ],
      [
        "freeCodeCamp curriculum",
        "https://www.freecodecamp.org/learn/"
      ]
    ],
    "featured": false,
    "tint": "#182b48",
    "related": [],
    "foundationAvailable": true
  },
  {
    "id": "ai-content-studio",
    "title": "Build an AI Content Studio",
    "deck": "Create useful writing, graphics, and media through a repeatable brief, review, and publishing process.",
    "outcome": "Build a content brief, review checklist, and small reusable asset set.",
    "stage": "Creative production",
    "tint": "#371b2c",
    "videos": [],
    "modules": [
      {
        "title": "Start with a content brief",
        "lessons": [
          "Audience, purpose, message, and format",
          "Human judgment in a repeatable production loop"
        ]
      },
      {
        "title": "Research and evidence",
        "lessons": [
          "Separate sources from draft suggestions",
          "Trace important claims to evidence"
        ]
      },
      {
        "title": "Draft and shape the voice",
        "lessons": [
          "Use AI for options rather than volume alone",
          "Revise for clear and consistent language"
        ]
      },
      {
        "title": "Visual and audio production",
        "lessons": [
          "Plan visuals that explain the idea",
          "Use sound with a clear listening purpose"
        ]
      },
      {
        "title": "Review rights and quality",
        "lessons": [
          "Check permissions, consent, and representation",
          "Review accessibility and platform requirements"
        ]
      },
      {
        "title": "Publish and improve",
        "lessons": [
          "Publish a coherent small content set",
          "Measure usefulness and revise the process"
        ]
      }
    ],
    "url": "courses/ai-content-studio.html",
    "published": [],
    "resources": [],
    "order": 18,
    "featured": false,
    "related": [],
    "foundationAvailable": true
  },
  {
    "id": "career-ai",
    "title": "Career Skills in the AI Age",
    "deck": "Describe your strengths, research opportunities, and prepare honest work samples with AI support.",
    "outcome": "Build a skills story, tailored application plan, and portfolio task.",
    "stage": "Career & work",
    "tint": "#24344b",
    "videos": [],
    "modules": [
      {
        "title": "Map the value you bring",
        "lessons": [
          "Skills, evidence, and transferable experience",
          "Choose a role based on tasks and fit"
        ]
      },
      {
        "title": "Research roles and employers",
        "lessons": [
          "Read job requirements critically",
          "Use primary employer information"
        ]
      },
      {
        "title": "Write truthful applications",
        "lessons": [
          "Resumes and cover letters with verified facts",
          "AI assistance without invented credentials"
        ]
      },
      {
        "title": "Build work samples",
        "lessons": [
          "Create a relevant portfolio sample",
          "Explain your decisions and contribution"
        ]
      },
      {
        "title": "Practice conversations",
        "lessons": [
          "Interview examples and clear questions",
          "Negotiate and evaluate a fit with care"
        ]
      },
      {
        "title": "Plan a sustainable search",
        "lessons": [
          "Track applications and follow-up",
          "Review feedback and adjust your search"
        ]
      }
    ],
    "url": "courses/career-ai.html",
    "published": [],
    "resources": [],
    "order": 19,
    "featured": false,
    "related": [],
    "foundationAvailable": true
  },
  {
    "id": "digital-safety",
    "title": "Digital Safety & AI Judgment",
    "deck": "Protect accounts, recognize manipulation, and use AI tools with better information boundaries.",
    "outcome": "Create an account-safety checklist and practice a suspicious-message review.",
    "stage": "Digital judgment",
    "tint": "#2c2739",
    "videos": [],
    "modules": [
      {
        "title": "Protect the basics",
        "lessons": [
          "Unique passwords, password managers, and MFA",
          "Updates, backups, and recovery options"
        ]
      },
      {
        "title": "Recognize suspicious messages",
        "lessons": [
          "Urgency, impersonation, and unexpected requests",
          "Verify through an independent known channel"
        ]
      },
      {
        "title": "Protect personal information",
        "lessons": [
          "Reduce unnecessary data sharing",
          "Permission, retention, and access"
        ]
      },
      {
        "title": "Use AI with boundaries",
        "lessons": [
          "Choose a tool for the task and data",
          "Human review before consequential actions"
        ]
      },
      {
        "title": "Evaluate claims and media",
        "lessons": [
          "Source, date, context, and manipulated media",
          "Separate uncertainty from a confident tone"
        ]
      },
      {
        "title": "Build a response plan",
        "lessons": [
          "Report a concern and recover access",
          "Review your safety habits regularly"
        ]
      }
    ],
    "url": "courses/digital-safety.html",
    "published": [],
    "resources": [],
    "order": 20,
    "featured": false,
    "related": [],
    "foundationAvailable": true
  }
];
let learningState={saved:[],completed:[],notes:{}};try{const data=JSON.parse(localStorage.getItem('inact-learning-v2'));if(data&&Array.isArray(data.saved)&&Array.isArray(data.completed)&&data.notes&&typeof data.notes==='object')learningState=data}catch(e){}let storageNotice=false;
function persist(){try{localStorage.setItem('inact-learning-v2',JSON.stringify(learningState))}catch(e){if(!storageNotice){toast('Browser storage is unavailable. Your learning progress stays in this session.');storageNotice=true}}}
const themes={'AI Music':['#815795','#c6a8e3'],'Tech News':['#334e83','#98b3e6'],'AI Workflows':['#315b5d','#96d4d4'],'Web Design':['#3c5275','#a7c8f2'],'Digital Marketing':['#695634','#d5bd86'],'Free Learning':['#3b6545','#a3d5ad']};
function banner(a,i){const[c,light]=themes[a.topic];let art='';if(a.topic==='AI Music')art=Array.from({length:31},(_,n)=>{const h=14+Math.abs(Math.sin((n+i)*.62))*63;return`<rect class="music-bar" style="animation-delay:${-n*.19}s;animation-duration:${1.4+n%4*.3}s" x="${330+n*7}" y="${78-h/2}" width="3" height="${h}" rx="2" fill="${light}" opacity="${.25+n/50}"/>`}).join('');else if(a.topic==='Tech News')art=`<circle cx="460" cy="77" r="43" fill="none" stroke="${light}" opacity=".5"/><path d="M330 108L370 67 410 89 450 35 485 68 535 28" fill="none" stroke="${light}" stroke-width="2"/><circle cx="450" cy="35" r="5" fill="${light}"/>`;else if(a.topic==='AI Workflows')art=`<path d="M335 78H395V42H470V100H535" fill="none" stroke="${light}" opacity=".5"/><path class="workflow-light" d="M335 78H395V42H470V100H535" fill="none" stroke="#fff" stroke-width="3"/>`+[335,395,470,535].map((x,j)=>`<rect x="${x-14}" y="${[78,42,100,100][j]-14}" width="28" height="28" rx="7" fill="${c}" stroke="${light}"/>`).join('');else if(a.topic==='Web Design')art=`<rect x="340" y="28" width="195" height="96" rx="8" fill="none" stroke="${light}" opacity=".65"/><path d="M340 48H535M400 48V124" stroke="${light}" opacity=".35"/><rect x="418" y="65" width="100" height="12" rx="3" fill="${light}" opacity=".35"/><rect x="418" y="85" width="63" height="23" rx="5" fill="${light}" opacity=".65"/>`;else if(a.topic==='Digital Marketing')art=`<path d="M348 118H535" stroke="${light}" opacity=".3"/>`+[30,54,42,79,95].map((h,j)=>`<rect class="chart-bar" style="animation-delay:${-j*.9}s;animation-duration:${5+j*.7}s" x="${355+j*34}" y="${118-h}" width="18" height="${h}" rx="4" fill="${light}" opacity="${.25+j*.12}"/>`).join('');else art=`<path d="M345 43Q390 28 432 43V123Q390 107 345 123ZM432 43Q477 28 522 43V123Q477 107 432 123Z" fill="none" stroke="${light}" stroke-width="2"/><path d="M360 64H415M360 80H405M449 64H505M449 80H497" stroke="${light}" opacity=".4"/>`;return`<svg class="banner" viewBox="0 0 580 155" role="img" aria-label="${esc(a.topic)} article illustration"><defs><linearGradient id="b${i}"><stop stop-color="#09101b"/><stop offset="1" stop-color="${c}" stop-opacity=".55"/></linearGradient></defs><rect width="580" height="155" fill="url(#b${i})"/><path d="M0 133H580" stroke="${light}" opacity=".1"/><text x="25" y="42" fill="${light}" font-family="Arial" font-size="10" letter-spacing="3">INACT COURSES</text><text x="25" y="91" fill="#e6edf9" font-family="Georgia" font-size="28">${esc(a.topic)}</text><text x="26" y="123" fill="${light}" font-family="Arial" font-size="10" letter-spacing="2">${a.longform?'FEATURE '+String(a.featureNumber).padStart(2,'0'):'QUICK READ'} · EXPLORE / APPLY</text>${art}</svg>`}
let savedView=false,allCoursesView=false;
function publishedLesson(slug){return articles.find(a=>a.slug===slug)}
function moduleMarkup(c,m,n){const links=c.published.filter(p=>p.module===n).map(p=>publishedLesson(p.slug)).filter(Boolean);return `<div class="course-module"><span class="module-index">MODULE ${String(n+1).padStart(2,'0')}</span><h4>${esc(m.title)}</h4><ul>${m.lessons.map(t=>`<li>${esc(t)} <span class="planned-tag">Planned lesson</span></li>`).join('')}</ul>${links.map(a=>`<a class="available-lesson" href="${esc(a.url)}">Available deeper lesson · ${esc(a.title)} →</a>`).join('')}</div>`}
function renderCourses(){const query=$('#course-search').value.trim().toLowerCase();$('#course-path').hidden=savedView;$('#course-saved-list').hidden=!savedView;$('#course-path').replaceChildren();$('#course-saved-list').replaceChildren();
if(savedView){const selected=articles.filter(a=>learningState.saved.includes(a.legacyIndex)&&(!query||[a.title,a.deck].join(' ').toLowerCase().includes(query)));selected.forEach(a=>{const card=document.createElement('article');card.className='saved-lesson-card';card.innerHTML=`<span>Saved in this browser · ${esc(a.topic)}</span><a href="${esc(a.url)}">${esc(a.title)}</a><p>${esc(a.deck)}</p>`;$('#course-saved-list').append(card)});if(!selected.length)$('#course-saved-list').innerHTML='<p class="course-empty">No saved lessons match. Open an available lesson and choose “Save in this browser.”</p>';$('#course-count').textContent=selected.length+' saved lessons in this browser';return}
const featuredOrder=['purpose-momentum','ai-foundations','music-ai','organization'];const pool=query||allCoursesView?courses:featuredOrder.map(id=>courses.find(c=>c.id===id));const shown=pool.filter(c=>!query||[c.title,c.deck,...c.modules.flatMap(m=>[m.title,...m.lessons])].join(' ').toLowerCase().includes(query));$('#course-path').classList.toggle('featured-grid',!query&&!allCoursesView);shown.forEach(c=>{const card=document.createElement('details');card.className='course-card';card.style.setProperty('--course-tint',c.tint);card.id='path-'+c.id;const related=courses.filter(x=>c.related.includes(x.id));card.innerHTML=`<summary><div><span class="course-stage">${esc(c.stage)} · Choose freely</span><h3>${esc(c.title)}</h3><p>${esc(c.deck)}</p></div><span class="course-expand" aria-hidden="true">+</span></summary><div class="course-body"><p class="course-outcome"><strong>What you’ll build</strong>${esc(c.outcome)}</p><p>Published foundation lesson: explanations, worked example, three checks, and a practical project. The six curriculum modules below are being developed.</p><div class="module-grid">${c.modules.map((m,n)=>moduleMarkup(c,m,n)).join('')}</div>${related.length?`<div class="course-related"><h4>Explore related courses</h4>${related.map(x=>`<a href="${esc(x.url)}">${esc(x.title)} →</a>`).join('')}</div>`:''}<div class="course-actions"><a class="platinum" href="${esc(c.url)}#foundation-unit">Start the foundation lesson →</a><a class="outline" href="${esc(c.url)}">Explore the course →</a><span class="small">Choose any course. No prerequisites or required sequence.</span></div></div>`;$('#course-path').append(card)});if(!shown.length)$('#course-path').innerHTML='<p class="course-empty">No course matches. Try a different skill or topic.</p>';$('#course-count').textContent=query?shown.length+' matching courses':allCoursesView?'20 independent courses · Choose what you need':'4 featured choices · Explore all 20 courses';}
function changeCourseView(view){savedView=view==='saved';allCoursesView=view==='all';for(const[id,active]of[['featured-courses',view==='featured'],['all-courses',view==='all'],['saved-courses',savedView]]){$('#'+id).classList.toggle('active',active);$('#'+id).setAttribute('aria-pressed',String(active))}renderCourses()}
$('#course-search').oninput=renderCourses;$('#featured-courses').onclick=()=>changeCourseView('featured');$('#all-courses').onclick=()=>changeCourseView('all');$('#saved-courses').onclick=()=>changeCourseView('saved');renderCourses();


})();