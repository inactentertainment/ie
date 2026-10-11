
const LOGOS={"ie": "assets/brand-ie.png", "wdw": "assets/brand-wdw.png", "ep": "assets/brand-ep.png", "bb": "assets/brand-bb.png", "dsb": "assets/brand-dsb.png", "mhd": "assets/brand-mhd.png", "cb": "assets/brand-cb.png", "lf": "assets/brand-lf.png", "phg": "assets/perennial-white.svg", "music": "assets/ie-record.svg", "funding": "assets/ie-funding.svg", "banner": "assets/ie-banner.svg", "casino": "assets/brand-casino.png"};
const SOCIAL=[{"label":"YouTube","url":"https://www.youtube.com/@InActEntertainment","svg":"<svg aria-hidden=\"true\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>YouTube</title><path d=\"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z\"/></svg>"},{"label":"TikTok","url":"https://www.tiktok.com/@inactentertainment","svg":"<svg aria-hidden=\"true\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>TikTok</title><path d=\"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z\"/></svg>"},{"label":"Pinterest","url":"https://www.pinterest.com/inactentertainment","svg":"<svg aria-hidden=\"true\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Pinterest</title><path d=\"M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z\"/></svg>"},{"label":"Facebook","url":"https://www.facebook.com/InActEntertainment","svg":"<svg aria-hidden=\"true\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Facebook</title><path d=\"M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z\"/></svg>"},{"label":"Instagram","url":"https://www.instagram.com/ieplr/","svg":"<svg aria-hidden=\"true\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Instagram</title><path d=\"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077\"/></svg>"},{"label":"Gumroad","url":"https://ieplr.gumroad.com/","svg":"<svg aria-hidden=\"true\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Gumroad</title><path d=\"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0Zm-.007 5.12c4.48 0 5.995 3.025 6.064 4.744h-3.239c-.069-.962-.897-2.406-2.896-2.406-2.136 0-3.514 1.857-3.514 4.126 0 2.27 1.378 4.125 3.514 4.125 1.93 0 2.758-1.512 3.103-3.025h-3.103v-1.238h6.509v6.327h-2.855v-3.989c-.207 1.444-1.102 4.264-4.617 4.264-3.516 0-5.584-2.82-5.584-6.326 0-3.645 2.276-6.602 6.618-6.602z\"/></svg>"},{"label":"Etsy","url":"https://www.etsy.com/shop/examinethepast","svg":"<svg aria-hidden=\"true\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Etsy</title><path d=\"M8.559 2.445c0-.325.033-.52.59-.52h7.465c1.3 0 2.02 1.11 2.54 3.193l.42 1.666h1.27c.23-4.728.43-6.784.43-6.784s-3.196.36-5.09.36H6.635L1.521.196v1.37l1.725.326c1.21.24 1.5.496 1.6 1.606 0 0 .11 3.27.11 8.64 0 5.385-.09 8.61-.09 8.61 0 .973-.39 1.333-1.59 1.573l-1.722.33V24l5.13-.165h8.55c1.935 0 6.39.165 6.39.165.105-1.17.75-6.48.855-7.064h-1.2l-1.284 2.91c-1.005 2.28-2.476 2.445-4.11 2.445h-4.906c-1.63 0-2.415-.64-2.415-2.05V12.8s3.62 0 4.79.096c.912.064 1.463.325 1.76 1.598l.39 1.695h1.41l-.09-4.278.192-4.305h-1.391l-.45 1.89c-.283 1.244-.48 1.47-1.754 1.6-1.666.17-4.815.14-4.815.14V2.45h-.05z\"/></svg>"},{"label":"Redbubble","url":"https://www.redbubble.com/people/IELUXURY/shop","svg":"<svg aria-hidden=\"true\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Redbubble</title><path d=\"M16.633 16.324h-3.199a.321.321 0 0 1-.32-.322V7.974a.32.32 0 0 1 .32-.32H16.4c2.226 0 2.693 1.31 2.693 2.408 0 .636-.169 1.14-.504 1.511.816.337 1.256 1.096 1.256 2.194 0 1.601-1.201 2.557-3.212 2.557m-4.644 0H5.345a.32.32 0 0 1-.32-.322V7.974a.32.32 0 0 1 .32-.32h3.103c1.939 0 3.096 1.043 3.096 2.791 0 1.163-.585 2.077-1.527 2.448l2.21 2.897a.322.322 0 0 1-.24.533M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12S18.63 0 12.001 0\"/></svg>"},{"label":"Zazzle","url":"https://www.zazzle.com/store/ieluxury","svg":"<svg aria-hidden=\"true\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Zazzle</title><path d=\"M0 12C0 5.382 5.382 0 12 0s12 5.382 12 12-5.382 12-12 12S0 18.618 0 12zm5.936 6.179c.134.177.422.155.665-.045.532-.42 1.042-.753 2.016-.753 1.839 0 3.301 1.152 5.495 1.152 1.684.021 2.747-.62 3.346-1.485.465-.664.686-1.573.686-2.282 0-.997-.576-1.662-1.573-1.662-.953 0-1.373.487-1.419 1.196-.021.288-.021.843-.199 1.108-.177.288-.51.377-.908.377-1.042 0-2.283-.841-3.655-.841h-.2l8.928-7.223c.155-.112.222-.377.045-.51l-1.374-1.618c-.244-.222-.421-.199-.665 0-.466.377-.908.754-1.861.754-1.552 0-3.213-.975-5.383-.975-1.55 0-2.416.576-3.014 1.197-.576.62-.974 1.617-.974 2.57 0 .975.576 1.595 1.529 1.595.864 0 1.374-.487 1.374-1.174 0-.398.021-.753.199-1.018.155-.266.554-.51 1.108-.51.864 0 2.503.597 3.523.597h.066l-9.04 7.179c-.177.133-.177.442-.066.597Z\"/></svg>"},{"label":"Amazon","url":"https://www.amazon.com/stores/InAct-Entertainment-Publishing/author/B0CQLJ53CL","svg":"<svg aria-hidden=\"true\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Amazon</title><path d=\"M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z\"/></svg>"},{"label":"Fiverr","url":"https://www.fiverr.com/ieluxury","svg":"<svg aria-hidden=\"true\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Fiverr</title><path d=\"M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z\"/></svg>"}];
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
const brands=[
{key:'wdw',name:'Instructional Design',subtitle:'Learn · Design · Build',category:'Learning',kind:'Founder’s professional portfolio',color:'#80b7e5',tint:'#091b35',xy:[50,8],description:'The founder’s home for instructional design, curriculum architecture, and human-directed AI workflows—turning learning needs into clear, usable experiences.',tools:[['ID Blueprint Engine','An interactive starting point for structuring a learning-design brief.'],['Curriculum Architecture Review','Explore six lenses, from purpose and evidence to access and implementation.'],['Six-stage Workflow Explorer','Follow Discover, Define, Design, Build, Review, and Measure across education and corporate contexts.'],['AI Command Center','Explore AI-supported approaches to organizing and developing work.'],['Portfolio & learning library','Examine cases, scenarios, microlearning, and evidence behind the design.']],url:'https://wdw.llc/',action:'View professional portfolio'},
{key:'ep',name:'Examine the Past',subtitle:'History · Discovery · Learning',category:'Learning',kind:'History education & apps',color:'#bdce7c',tint:'#152313',round:true,xy:[73,17],description:'Make history something learners can investigate. Interactive technology connects events, places, questions, and classroom experiences.',tools:[['Interactive Timeline & History Maps','Explore when events happened and the places that shaped them.'],['On This Day in History','Use a date-driven discovery tool to begin a conversation or lesson.'],['Bloom’s Question Builder','Develop questions that move beyond recall toward deeper thinking.'],['Current Event & Movie Analysis','Structure inquiry around news and historically themed films.'],['Free deeper-thinking packet','Access the questioning resources, poster, and folder; explore History Unlocked games.']],url:'https://wdwedu.github.io/examine-the-past-home/',action:'Explore history tools'},
{key:'bb',name:'Basketball Brilliance',subtitle:'Coach · Player · Parent',category:'Lifestyle',kind:'Basketball learning & team tools',color:'#f5a664',tint:'#321c0c',round:true,xy:[88,34],description:'Three roles. One mission. A basketball learning platform connecting practice, game knowledge, player development, and the people supporting the team.',tools:[['Free Training Lab','Build age-, skill-, equipment-, and time-aware practice lessons with cues and timers.'],['Voice-enabled Basketball Library','Search terminology, hear pronunciation, and listen to explanations.'],['20 free player lessons & video resources','Learn through structured articles and official basketball viewing links.'],['Coach, player & parent portals','Explore role-specific routes into the team’s learning and organization.'],['Member development tools','Player journals, saved learning, and personal dashboards support ongoing reflection.']],url:'https://inactentertainment.github.io/basketball-brilliance/',action:'Explore Basketball Brilliance'},
{key:'dsb',name:'Divine Shades of Brown',subtitle:'Culture · Community · Opportunity',category:'Creative',kind:'Founding preview',color:'#c9a883',tint:'#302017',round:true,xy:[90,55],description:'A developing digital home for Black diaspora culture, everyday resources, and opportunity. Explore the interactive founding preview and its growing vision.',tools:[['Black Atlas directory preview','Explore sample listings and directory controls; a verified directory is part of the vision.'],['Opportunities explorer','Browse pathways into scholarships, grants, careers, and programs.'],['Find Help resource links','Connect with established support, mental health, and community resources.'],['Brown Passport travel preview','Discover the direction of the travel guides and planning experience.'],['DSB Journal & Today in Black','Explore culture, history, and ideas through the preview’s editorial sections.']],url:'https://inactentertainment.github.io/divine-shades-of-brown/',action:'Explore the DSB preview'},
{key:'mhd',name:'Mental Health Discussions',subtitle:'Understand · Prepare · Connect',category:'Lifestyle',kind:'Free public education & tools',color:'#c8ccd3',tint:'#25262a',round:true,xy:[83,76],description:'Free public education and practical care-preparation tools. An expansive reference library helps people understand terminology, prepare questions, and find routes to support.',tools:[['Voice Glossary & Reference Library','Type, speak, and listen to plain-language definitions and pronunciation.'],['Ask MHD & Find Care','Explore educational questions and care-access resources.'],['Appointment Prep Builder','Organize observations and questions into a provider-ready summary.'],['Medication & Treatment Guides','Understand terms and treatment options before conversations with a professional.'],['Family, Crisis & Evidence Centers','Explore caregiver tools, legal and state-law references, and source-aware discussions.']],url:'https://mentalhealthdiscussions.org/',action:'Explore the free resources'},
{key:'cb',name:'Cannabis Basics',subtitle:'Learn without confusion',category:'Lifestyle',kind:'Education, tools & member logbook',color:'#79c391',tint:'#082820',round:true,xy:[63,92],description:'Understand product information and keep a more useful record of your experiences. Plain-language education meets practical apps for discovery and reflection.',tools:[['Product Decoder','Translate printed THC, CBD, product, and terpene information into clearer language.'],['Dispensary Locator','Search by city or ZIP and explore nearby retailers with map-based tools.'],['Free Logbook Worksheet','Request the educational worksheet by email to begin keeping a personal record.'],['Member Quick Log & Full Log','Use structured session records and saved dispensaries in the member experience.'],['Articles, FAQs & product education','Build your vocabulary and prepare more informed questions.']],url:'https://cannabisbasics.github.io/cannabis-basics/',action:'Explore Cannabis Basics'},
{key:'music',name:'ie Music & Artists',subtitle:'AI music · New possibilities',category:'Creative',kind:'Experimental AI music & artist identities',color:'#ceb1ed',tint:'#271235',xy:[37,92],description:'We create human-directed AI music and experimental artist identities as a way to participate in music’s evolution—exploring how creative intention, technology, and listening can meet.',tools:[['BluDawn · Golden Rays','Discover a release from our evolving experimental music world.'],['One connected listening page','Choose the streaming service you use through the release’s HyperFollow hub.'],['AI artist exploration','Fictional artistic identities give us a space to test sound, story, and presentation openly.'],['Music for your scroll','Open this page’s player and add ie audio files by genre for local listening.'],['Learn alongside the experiment','Explore our free lessons on AI music, release workflows, and the changing industry.']],url:'music.html',action:'Explore Music and Artists'},
{key:'casino',name:'ie Casino Games',subtitle:'Curiosity turned into play',category:'Creative',kind:'Free social games · Fictional chips',color:'#baaee3',tint:'#201a35',xy:[17,76],description:'After the founder’s first-ever casino visit, a simple question became a side project: could we build something fun and engaging ourselves? This is our playful experiment in interactive entertainment.',tools:[['Casa 21','Enter the social card-game experience and explore its table interface.'],['Time Travel Slots','Visit a second playable room with a different theme and interaction style.'],['Private-table experience','Casa 21 provides create-and-join routes for shared fictional-chip play.'],['A growing game world','The Big Bluff is identified as coming soon, alongside the two open rooms.'],['Free social play','The hub identifies fictional chips with no cash value.']],url:'https://inactentertainment.github.io/ie-casino-games/',action:'Enter ie Casino Games'},
{key:'lf',name:'LiveFit.info',subtitle:'Move with purpose',category:'Lifestyle',kind:'Free fitness apps',color:'#eb9367',tint:'#30180f',xy:[10,55],description:'Ten free fitness tools help turn goals, available equipment, and daily time into a practical plan. An optional Personalized Roadmap is offered separately as a $7 one-time product.',tools:[['Calorie & TDEE + Protein Target','Explore estimates for everyday nutrition planning.'],['Walking & Steps + Interval Timer','Plan movement and time your workout intervals.'],['Workout, Dumbbell & Band Generators','Build routines around the equipment you actually have.'],['Equipment Matcher & Comparison','Compare options and identify equipment that fits your needs.'],['Home Gym Space Planner','Think through your training space before buying or rearranging equipment.']],url:'https://inactentertainment.github.io/livefit-info/',action:'Try the free fitness tools'},
{key:'phg',name:'Perennial Home & Gardens',subtitle:'Plan · Plant · Grow',category:'Client work',kind:'Client website · Founding gardener preview',color:'#aeca92',tint:'#192919',round:true,xy:[27,17],description:'A home-and-garden client website bringing planning technology and practical growing resources together. Explore its free tools and clearly marked developing planner experience.',tools:[['My Growing Zone','Explore ZIP- and location-based growing context and frost information.'],['Garden Planner Gen 2 preview','Map a garden space and explore the next-generation planning direction.'],['Garden Calculator','Estimate soil, compost, mulch, and spacing for a project.'],['Plant Companions & Seasonal Calendar','Plan plant pairings and organize seasonal tasks.'],['Free garden resource sheets','Request plant-profile and houseplant-care worksheets by email.']],url:'https://perennialhomeandgardens.github.io/perennial-home-and-gardens/',action:'Explore garden planning'},
{key:'funding',name:'ie Strategic Funding',subtitle:'Capital · Opportunity · Growth',category:'Business',kind:'Commercial-finance referral & consulting',color:'#c4d7ea',tint:'#112c36',xy:[12,32],description:'Connect a business goal with a clearer financing conversation. We help identify commercial funding needs, organize preliminary information, and explore referral pathways to independent financing providers. InAct Entertainment LLC is not a lender and does not make lending or credit-approval decisions. Approval, amounts, rates, and terms are determined by the provider and are not guaranteed.',tools:[['Working capital & business credit','Explore business term financing and lines of credit for operating needs, inventory, expansion, or seasonal cash flow.'],['Equipment financing & leasing','Discuss commercial equipment, machinery, and vehicle acquisition through financing or leasing structures.'],['Accounts-receivable factoring','Explore invoice-based funding conversations for businesses waiting on customer payments.'],['Asset-based financing','Identify whether receivables, inventory, or other business assets may support a financing discussion.'],['Commercial real estate & referral intake','Outline business-property needs, intended use of funds, and timing for an appropriate provider review.']],url:'#contact',action:'Start a funding conversation'},
{key:'ie',name:'InAct Entertainment LLC',subtitle:'Build · Learn · Create',category:'Shop',kind:'Independent creative studio',color:'#c5cede',tint:'#18212d',round:true,xy:[50,72],description:'We are an independent creative studio connecting education, practical apps, AI-assisted workflows, music, and interactive entertainment. Our websites turn curiosity into useful experiences; our Gumroad hub brings resources, membership, and creative services together.',tools:[['Business & productivity','Browse resources for planning, organization, and practical workflows.'],['Education & learning','Explore classroom, curriculum, and learning resources.'],['ie Music Lab','Discover our creative music products and experiments.'],['Wellness, home & garden','Find resources connected to everyday routines and growing spaces.'],['Premier Membership & Services','Explore membership details or begin a creative-service conversation.']],url:'https://ieplr.gumroad.com/',action:'Visit the Gumroad hub'}];
const $=s=>document.querySelector(s);const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const musicMark='<span class="music-mark" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 30V14l24-5v18M12 17l24-5"/><ellipse cx="7" cy="32" rx="5" ry="3"/><ellipse cx="31" cy="29" rx="5" ry="3"/><path d="M20 28v10m5-8v11m5-5v7"/></svg></span>';
function logo(b,cls=''){return `<img class="${cls}${b.round?' round':''} brand-logo-${b.key}" src="${LOGOS[b.key]}" alt="${esc(b.name)} logo" width="142" height="76">`}
function toolList(b){return b.tools.map(([title,text])=>`<li><strong>${esc(title)}</strong> · ${esc(text)}</li>`).join('')}
document.querySelectorAll('[data-logo]').forEach(img=>img.src=LOGOS[img.dataset.logo]);
brands.forEach((b,i)=>{if(b.key!=='ie'){const[x,y]=b.xy;const n=document.createElement('button');n.className='node';n.dataset.brand=b.key;n.style.cssText=`--x:${x}%;--y:${y}%;--accent:${b.color}`;n.setAttribute('aria-label',`Explore ${b.name}`);n.innerHTML=`<span class="node-logo${b.round?' round':''}">${logo(b)}</span><strong>${esc(b.key==='phg'?'Home and Gardens':b.name)}</strong><small>${esc(b.subtitle)}</small>`;n.onpointerdown=()=>{$('.network').dataset.pointerHold='true'};n.onclick=()=>{delete $('.network').dataset.pointerHold;showBrand(i)};$('#nodes').append(n)}});
$('.core').onclick=()=>showBrand(brands.findIndex(b=>b.key==='ie'));
function updateConnectors(){const network=$('.network').getBoundingClientRect(),core=$('.core').getBoundingClientRect();if(!network.width||!network.height)return;const sx=(core.left+core.width/2-network.left)/network.width*1000,sy=(core.top+core.height/2-network.top)/network.height*690;const nodeRects=[...document.querySelectorAll('.node')].map(n=>n.querySelector('.node-logo').getBoundingClientRect());nodeRects.forEach((r,i)=>{const x=(r.left+r.width/2-network.left)/network.width*1000,y=(r.top+r.height/2-network.top)/network.height*690,ns='http://www.w3.org/2000/svg';let gradient=document.getElementById(`connector-${i}`),line=document.getElementById(`connector-path-${i}`),pulse=document.getElementById(`connector-pulse-${i}`);if(!gradient){gradient=document.createElementNS(ns,'linearGradient');gradient.id=`connector-${i}`;gradient.setAttribute('gradientUnits','userSpaceOnUse');for(const[offset,opacity]of [['0%','0'],['22%','.6'],['65%','.35'],['100%','0']]){const stop=document.createElementNS(ns,'stop');stop.setAttribute('offset',offset);stop.setAttribute('stop-color','#8296b4');stop.setAttribute('stop-opacity',opacity);gradient.append(stop)}$('#line-defs').append(gradient);line=document.createElementNS(ns,'path');line.id=`connector-path-${i}`;line.setAttribute('class','path');line.style.stroke=`url(#connector-${i})`;$('#connectors').append(line);pulse=line.cloneNode();pulse.id=`connector-pulse-${i}`;pulse.setAttribute('class','moving');pulse.style.animationDelay=`-${i*.8}s`;$('#connectors').append(pulse)}for(const[k,v]of Object.entries({x1:sx,y1:sy,x2:x,y2:y}))gradient.setAttribute(k,v);line.setAttribute('d',`M${sx} ${sy} L${x} ${y}`);pulse.setAttribute('d',line.getAttribute('d'))})}
const headerObserver=new ResizeObserver(()=>{document.documentElement.style.setProperty('--header-height',`${Math.ceil($('header').getBoundingClientRect().height)}px`);document.documentElement.style.scrollPaddingTop=`${Math.ceil($('header').getBoundingClientRect().height)+18}px`});headerObserver.observe($('header'));const networkObserver=new ResizeObserver(updateConnectors);networkObserver.observe($('.network'));document.querySelectorAll('#nodes img').forEach(img=>img.addEventListener('load',updateConnectors));requestAnimationFrame(updateConnectors);
function createFilters(target,labels,onChange){labels.forEach((label,i)=>{const f=document.createElement('button');f.className='filter'+(!i?' active':'');f.textContent=label;f.setAttribute('aria-pressed',String(!i));f.onclick=()=>{target.querySelectorAll('button').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});f.classList.add('active');f.setAttribute('aria-pressed','true');onChange(label,i)};target.append(f)})}
function showBrand(i){const b=brands[i],d=$('#detail');d.style.cssText=`--accent:${b.color};--tint:${b.tint}`;$('#detail-icon').innerHTML=logo(b,'dialog-brand-logo');$('#detail-kind').textContent=b.kind;$('#detail-title').textContent=b.name;$('#detail-text').textContent=b.description;$('#detail-tools').innerHTML=toolList(b);$('#detail-link').href=b.url;$('#detail-link').textContent=b.action+' ↗';$('#detail-link').target=['funding','music'].includes(b.key)?'_self':'_blank';$('#detail-link').onclick=b.key==='funding'?e=>{e.preventDefault();d.close();beginFunding()}:null;d.showModal();d.scrollTop=0}
for(const d of document.querySelectorAll('dialog')){d.querySelector('.close').onclick=()=>d.close();d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}})}
SOCIAL.forEach(s=>{const a=document.createElement('a');a.href=s.url;a.target='_blank';a.rel='noopener noreferrer';a.setAttribute('aria-label',`Visit InAct on ${s.label}`);a.innerHTML=s.svg+`<span>${s.label}</span>`;$('#social-links').append(a)});
let toastTimer;function toast(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').hidden=false;toastTimer=setTimeout(()=>$('#toast').hidden=true,4500)}
document.querySelectorAll('.share-button').forEach(b=>b.onclick=async()=>{const url=location.protocol==='file:'?'https://ieplr.com/':location.href.split('#')[0];try{if(navigator.share&&location.protocol!=='file:')await navigator.share({title:'InAct Entertainment',text:'One studio. A world of possibilities.',url});else{await navigator.clipboard.writeText(url);toast(location.protocol==='file:'?'IEPLR.com copied · This redesigned page is still a prototype.':'Page link copied')}}catch(e){if(e.name!=='AbortError')toast(`Share this address: ${url}`)}});

const inquiryForm=$('#inquiry-form'),service=$('#inquiry-service');let inquiryStep=0;const needs=new Set();
const serviceOptions={'Website & interactive app':['Business website','Interactive tool / app','Portfolio & business card','Website refresh'],'AI & business workflow':['Workflow mapping','AI-assisted content','Automation planning','Business productivity'],'Instructional design & learning':['Course design','Curriculum development','Interactive lessons','Training & professional development'],'Digital marketing & branding':['Brand strategy','Content & campaigns','Digital product launch','Creative assets'],'Music & creative media':['AI music experiment','Artist identity','Video & storytelling','Creative collaboration'],'Commercial funding':['Working capital / line of credit','Equipment finance / lease','Receivables factoring','Asset-based financing','Commercial real estate','Not sure — explore options'],'Partnership or general inquiry':['Partnership','Product question','Speaking / collaboration','Something else']};
function updateNeeds(){needs.clear();$('#need-choices').replaceChildren();(serviceOptions[service.value]||[]).forEach(label=>{const b=document.createElement('button');b.type='button';b.className='need-choice';b.textContent=label;b.setAttribute('aria-pressed','false');b.onclick=()=>{if(needs.has(label))needs.delete(label);else needs.add(label);b.setAttribute('aria-pressed',String(needs.has(label)));updateInquiryReview()};$('#need-choices').append(b)});const funding=service.value==='Commercial funding';$('#funding-fields').hidden=!funding;$('#project-fields').hidden=funding;$('#inquiry-company').required=funding;$('#service-hint').textContent=funding?'Choose the financing pathways you want to discuss. This is a preliminary commercial-purpose inquiry; no credit check is authorized.':'Choose any options that fit. We’ll build the conversation around your goals.';updateInquiryReview()}
service.addEventListener('change',updateNeeds);
function inquiryText(){const f=new FormData(inquiryForm),get=n=>String(f.get(n)||'').trim();return ['INACT ENTERTAINMENT LLC · INQUIRY','Direction: '+get('service'),'Interests: '+([...needs].join(', ')||'To be discussed'),'Starting point: '+get('stage'),'Timing: '+get('timeline'),...(service.value==='Commercial funding'?['Funding amount: '+get('fundingAmount'),'Time in business: '+get('businessAge'),'Industry: '+get('industry'),'Monthly gross revenue: '+get('revenue'),'Commercial financing inquiry. InAct is not a lender. Independent providers determine underwriting, approval, amounts, rates, and terms.']:['Budget: '+get('budget')]),'Goal: '+get('message'),'Name: '+get('name'),'Organization: '+get('company'),'Email: '+get('email'),'Phone: '+get('phone'),'Preferred reply: '+get('method'),'Permission to contact: '+($('#inquiry-consent').checked?'Yes':'Pending')].join('\n')}
function updateInquiryReview(){$('#inquiry-summary').textContent=inquiryText();$('#message-count').textContent=$('#inquiry-message').value.length;$('#inquiry-fallback').hidden=true}
inquiryForm.addEventListener('input',updateInquiryReview);inquiryForm.addEventListener('change',updateInquiryReview);
function changeInquiryStep(n,focus=true){inquiryStep=n;document.querySelectorAll('[data-step]').forEach(e=>e.hidden=Number(e.dataset.step)!==n);document.querySelectorAll('.inquiry-steps li').forEach((e,i)=>{e.classList.toggle('active',i===n);if(i===n)e.setAttribute('aria-current','step');else e.removeAttribute('aria-current')});$('#inquiry-back').hidden=n===0;$('#inquiry-next').hidden=n===2;$('#inquiry-send').hidden=n!==2;$('#inquiry-next').textContent=n===0?'Shape the details →':'Review & connect →';$('#inquiry-status').textContent='Step '+(n+1)+' of 3';updateInquiryReview();const field=inquiryForm.querySelector('fieldset:not([hidden]) .form-control');if(field&&focus){field.focus({preventScroll:true});inquiryForm.scrollIntoView({behavior:'smooth',block:'start'})}}
function validateStep(){const step=inquiryForm.querySelector('fieldset:not([hidden])');for(const e of step.querySelectorAll('input,select,textarea')){if(!e.closest('[hidden]')&&!e.reportValidity())return false}if(inquiryStep===2&&$('#inquiry-method').value!=='Email'&&!$('#inquiry-phone').value.trim()){$('#inquiry-status').textContent='Add a phone number for a phone or text reply.';$('#inquiry-phone').focus();return false}return true}
$('#inquiry-next').onclick=()=>{if(validateStep())changeInquiryStep(inquiryStep+1)};$('#inquiry-back').onclick=()=>changeInquiryStep(inquiryStep-1);
inquiryForm.addEventListener('submit',e=>{e.preventDefault();if(inquiryStep<2){if(validateStep())changeInquiryStep(inquiryStep+1);return}if(!validateStep())return;updateInquiryReview();$('#inquiry-fallback').hidden=false;const f=new FormData(inquiryForm),post=document.createElement('form');post.method='POST';post.action='https://formsubmit.co/inactentertainment@gmail.com';const fields={_subject:'[InAct Entertainment / IEPLR] '+service.value,_template:'table',_next:new URL('index.html?inquiry=sent#contact',location.href).href,Department:document.querySelector('#department-route').textContent,Website:'InAct Entertainment / IEPLR',Page:location.href,name:String(f.get('name')||''),email:String(f.get('email')||''),Inquiry:inquiryText()};Object.entries(fields).forEach(([name,value])=>{const input=document.createElement('input');input.type='hidden';input.name=name;input.value=value;post.append(input)});document.body.append(post);$('#inquiry-status').textContent='Opening secure submission…';post.submit()});
$('#copy-inquiry').onclick=async()=>{try{await navigator.clipboard.writeText(inquiryText());$('#email-status').textContent='Inquiry copied. Paste it into an email to inactentertainment@gmail.com.'}catch{$('#email-status').textContent='Copy unavailable. Use Download brief or select the summary text.'}};
$('#download-inquiry').onclick=()=>{const u=URL.createObjectURL(new Blob([inquiryText()],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=u;a.download='inact-inquiry.txt';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)};
function beginFunding(){service.value='Commercial funding';updateNeeds();changeInquiryStep(0);$('#contact').scrollIntoView({behavior:'smooth'});service.focus({preventScroll:true})}
changeInquiryStep(0,false);

// Published tracks can be added here as {title, genre, src}; the prototype has no invented audio.
const PUBLISHED_TRACKS=[{"genre": "Hip-Hop", "artist": "Nas", "title": "One Mic", "videoId": "JCOURZ-yx4E", "theme": "A focused voice, conviction, and storytelling.", "alternates": []}, {"genre": "Afrobeats", "artist": "2Baba", "title": "African Queen", "videoId": "_A0fWBHu9pM", "alternates": ["713jhG0us1k"], "theme": "A warm Afropop classic celebrating connection."}, {"genre": "Ambient", "artist": "Brian Eno", "title": "An Ending (Ascent)", "videoId": "OlaTeXX3uH8", "alternates": ["OnAS7efua64"], "theme": "Instrumental space for reflection and focused work.", "instrumental": true}, {"genre": "Blues", "artist": "B.B. King", "title": "The Thrill Is Gone", "videoId": "SgXSomPE_FY", "alternates": ["kpC69qIe02E"], "theme": "A classic live performance with expressive musical craft."}, {"genre": "Classical", "artist": "Lang Lang · Beethoven", "title": "Für Elise", "videoId": "s71I_EWJk7I", "alternates": ["FW_KCau2iTI"], "theme": "A familiar piano piece for a quieter learning moment.", "instrumental": true}, {"genre": "Country", "artist": "Dolly Parton", "title": "9 to 5", "videoId": "UbxUSsFXYo4", "alternates": [], "theme": "Work, ambition, and the everyday push to make something happen."}, {"genre": "EDM", "artist": "Avicii", "title": "Wake Me Up", "videoId": "IcrbM1l_BoI", "alternates": ["5y_KJAg8bHI"], "theme": "Discovery, growing, and finding your own direction."}, {"genre": "Experimental", "artist": "Herbie Hancock", "title": "Rockit", "videoId": "GHhD4PD75zY", "alternates": [], "theme": "An instrumental crossover where technology meets musical invention.", "instrumental": true}, {"genre": "Funk", "artist": "Earth, Wind & Fire", "title": "September", "videoId": "Gs069dndIYk", "alternates": ["3cKtSlsYVEU"], "theme": "Shared joy, movement, and a timeless groove."}, {"genre": "Gospel", "artist": "Kirk Franklin", "title": "I Smile", "videoId": "Z8SPwT3nQZ8", "alternates": ["S174winqP2g"], "theme": "Encouragement and finding a little light in a difficult day."}, {"genre": "House / Club", "artist": "Daft Punk", "title": "One More Time", "videoId": "FGBhQbmPwH8", "alternates": ["fa5IWHDbftI"], "theme": "A classic celebration of rhythm and the joy of creating."}, {"genre": "Jazz", "artist": "Louis Armstrong", "title": "What a Wonderful World", "videoId": "rBrd_3VMC3c", "alternates": ["CaCSuzR4DwM"], "theme": "A familiar vocal standard about noticing the world around us."}, {"genre": "Latin", "artist": "Celia Cruz", "title": "La Vida Es Un Carnaval", "videoId": "x4oN50uhSII", "alternates": ["t8pjh1URlXs", "7Ho86ggAVrY"], "theme": "An uplifting salsa classic about living through life's difficult moments."}, {"genre": "Lo-Fi", "artist": "Nujabes", "title": "Aruarian Dance", "videoId": "qYcoJpqCha4", "alternates": [], "theme": "Instrumental jazz-hop for a calm creative flow.", "instrumental": true}, {"genre": "Pop", "artist": "Whitney Houston", "title": "I Wanna Dance with Somebody", "videoId": "eH3giaIzONA", "alternates": [], "theme": "A recognizable pop favorite full of energy and connection."}, {"genre": "R&B", "artist": "Bill Withers", "title": "Lovely Day", "videoId": "bEeaS6fuUoA", "alternates": ["QCgeitX5xg0"], "theme": "A brighter mood for the next idea and the next useful step."}, {"genre": "Reggae", "artist": "Bob Marley & The Wailers", "title": "Three Little Birds", "videoId": "HNBCVM4KbUM", "alternates": [], "theme": "A gentle reminder to breathe and keep moving."}, {"genre": "Rock", "artist": "Journey", "title": "Don't Stop Believin'", "videoId": "1k8craCGpgs", "alternates": ["VcjzHMhBtf0", "mM3Vmn4pdog"], "theme": "A classic about keeping possibility in view."}, {"genre": "Soul", "artist": "Simply Red", "title": "Holding Back the Years", "videoId": "yG07WSu7Q9w", "alternates": [], "theme": "Reflection, memory, and an unhurried soulful groove."}, {"genre": "Soundtracks", "artist": "Vangelis", "title": "Chariots of Fire", "videoId": "8a-HfNE3EIo", "alternates": [], "theme": "An instrumental theme with a sense of purpose and forward motion.", "instrumental": true}, {"genre": "Soul", "artist": "James Brown & Luciano Pavarotti", "title": "It's a Man's Man's Man's World · Live", "videoId": "GaB9F3R9cIY", "alternates": [], "theme": "A powerful historic duet about achievement and the importance of partnership.", "lyricsUrl": "https://music.apple.com/us/song/1743396597"}, {"genre": "Jazz", "artist": "John Coltrane", "title": "My Favorite Things", "videoId": "rqpriUFsMQQ", "alternates": ["ej6gfL4yF4E"], "theme": "An instrumental jazz exploration for listening, reflection, and creative work.", "instrumental": true}, {"genre": "Jazz", "artist": "Miles Davis", "title": "So What · Official live video", "videoId": "zqNTltOGh5c", "alternates": [], "theme": "Instrumental musical craft, conversation, and space to think.", "instrumental": true}, {"genre": "Hip-Hop", "artist": "2Pac", "title": "Keep Ya Head Up", "videoId": "SHVzWMFMH6Y", "theme": "Resilience, dignity, and community support.", "alternates": []}, {"genre": "Hip-Hop", "artist": "The Notorious B.I.G.", "title": "Juicy", "videoId": "_JZom_gVfuw", "theme": "Ambition and a story of changed circumstances.", "alternates": []}, {"genre": "Hip-Hop", "artist": "JAY-Z", "title": "Blueprint (Momma Loves Me)", "videoId": "PU0El0sLWbg", "theme": "Family, formative experiences, and personal history. Official lyric video; explicit language.", "alternates": ["dKvgphSdG84"], "contentNote": "Explicit language · official lyric video"}, {"genre": "Jazz", "artist": "Miles Davis", "title": "Flamenco Sketches", "videoId": "nTwp1sgUJrM", "theme": "Space, patient listening, and reflective focus.", "alternates": [], "instrumental": true}, {"genre": "Jazz", "artist": "John Coltrane", "title": "Naima", "videoId": "bPAC6zt_1ZM", "theme": "A lyrical instrumental for calm concentration.", "alternates": [], "instrumental": true}, {"genre": "Soul", "artist": "James Brown", "title": "The Payback", "videoId": "D7ks03zsg1o", "theme": "An enduring funk groove; the story concerns betrayal and revenge.", "alternates": []}, {"genre": "R&B", "artist": "Bill Withers", "title": "Can We Pretend", "videoId": "qiSmeCIi3Lo", "theme": "Reflection and the wish to begin again.", "alternates": []}, {"genre": "R&B", "artist": "Sade", "title": "Smooth Operator", "videoId": "4TYv2PhG89A", "theme": "An elegant groove and a cautionary portrait.", "alternates": []}, {"genre": "R&B", "artist": "Sade", "title": "No Ordinary Love", "videoId": "_WcWHZc8s2I", "theme": "Atmosphere, devotion, and emotional depth.", "alternates": []}, {"genre": "R&B", "artist": "Sade", "title": "By Your Side", "videoId": "C8QJmI_V3j4", "theme": "Support, steadiness, and care.", "alternates": []}, {"genre": "R&B", "artist": "Erykah Badu", "title": "Didn't Cha Know", "videoId": "Np21rH7Ldto", "theme": "Finding direction and learning through uncertainty.", "alternates": []}, {"genre": "R&B", "artist": "Erykah Badu", "title": "Bag Lady", "videoId": "OqN0jsSeqPo", "theme": "Letting go of burdens and making room to move forward.", "alternates": []}, {"genre": "R&B", "artist": "Erykah Badu", "title": "On & On (Remix Edit)", "videoId": "-CPCs7vVz6s", "theme": "A reflective groove with an independent point of view.", "alternates": []}, {"genre": "Hip-Hop / R&B", "artist": "Erykah Badu feat. Common", "title": "Love of My Life (An Ode to Hip Hop)", "videoId": "dNk3R23Twgw", "theme": "A creative conversation between hip-hop and soul.", "alternates": []}];
const genres=['Afrobeats','Ambient','Blues','Classical','Country','EDM','Experimental','Funk','Gospel','Hip-Hop','Hip-Hop / R&B','House / Club','Jazz','Latin','Lo-Fi','Pop','R&B','Reggae','Rock','Soul','Soundtracks','Sound Effects'];
for(const id of ['listen-genre','upload-genre']){$('#'+id).innerHTML=(id==='listen-genre'?'<option value="All genres">All genres</option><option value="My playlist">My playlist</option>':'')+genres.map(g=>`<option>${g}</option>`).join('')}
$('#upload-genre').value='Soul';let tracks=[...PUBLISHED_TRACKS],currentTrack=null,shuffle=false,repeat=false;const audio=$('#audio');audio.hidden=true;
const trackKey=t=>t.videoId||t.src;let savedTrackIds=[];try{savedTrackIds=JSON.parse(localStorage.getItem('ie-music-playlist')||'[]');if(!Array.isArray(savedTrackIds))savedTrackIds=[]}catch{}const sessionFavorites=new Set();
function isFavorite(t){return t.local?sessionFavorites.has(trackKey(t)):savedTrackIds.includes(trackKey(t))}
function saveFavorite(t){const key=trackKey(t);if(t.local){if(sessionFavorites.has(key))sessionFavorites.delete(key);else sessionFavorites.add(key)}else{savedTrackIds=savedTrackIds.includes(key)?savedTrackIds.filter(x=>x!==key):[...savedTrackIds,key];try{localStorage.setItem('ie-music-playlist',JSON.stringify(savedTrackIds))}catch{toast('Playlist available for this visit; browser saving is unavailable.')}}renderPlaylist()}

function setMusicOpen(open){const panel=$('#music-panel');if(open&&innerWidth<1100&&!$('#release-panel').hidden)setReleaseOpen(false);const keepVideo=!open&&!!officialSoulPanel;panel.classList.toggle('music-minimized',keepVideo);panel.hidden=!open&&!keepVideo;$('#music-toggle').setAttribute('aria-expanded',String(open));$('#music-toggle').setAttribute('aria-label',open?'Minimize music player':'Open music player');if(open){$('#listen-genre').focus();officialSoulPanel?.scrollIntoView({block:'nearest'});}}
$('#music-toggle').onclick=()=>setMusicOpen($('#music-panel').hidden||$('#music-panel').classList.contains('music-minimized'));$('#music-close').onclick=()=>{setMusicOpen(false);$('#music-toggle').focus()};document.addEventListener('click',e=>{if(!e.composedPath().some(el=>el.classList?.contains('music-wrap')||el.classList?.contains('official-soul-panel')||el.id==='release-panel'))setMusicOpen(false)});document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!$('#release-panel').hidden){setReleaseOpen(false);$('#open-release').focus()}else if(!$('#music-panel').hidden){setMusicOpen(false);$('#music-toggle').focus()}else if(officialSoulPanel)setMusicOpen(false)}});
function setReleaseOpen(open){$('#release-panel').hidden=!open;$('#open-release').setAttribute('aria-expanded',String(open));if(open){audio.pause();if(ytPlayer?.pauseVideo)ytPlayer.pauseVideo();if(innerWidth<1100)setMusicOpen(false);$('#release-close').focus()}}
$('#open-release').onclick=()=>setReleaseOpen($('#release-panel').hidden);$('#release-close').onclick=()=>{setReleaseOpen(false);$('#music-toggle').focus()};
let officialSoulPanel=null,ytPlayer=null,ytReady=false,videoEpoch=0,apiPromise=null,wantsPlaying=false;
function paintPlay(playing){$('#music-toggle').classList.toggle('playing',playing);$('#master-play').innerHTML=playing?'Pause <span class="pause-symbol" aria-hidden="true"></span>':'Play ▶';$('#master-play').setAttribute('aria-label',playing?'Pause current track':'Play current track')}
function closeOfficialSoul(){videoEpoch++;wantsPlaying=false;try{ytPlayer?.destroy()}catch{}ytPlayer=null;ytReady=false;officialSoulPanel?.remove();officialSoulPanel=null;if($('#music-panel').classList.contains('music-minimized')){$('#music-panel').classList.remove('music-minimized');$('#music-panel').hidden=true;}paintPlay(false);$('#master-play').disabled=!currentTrack;updateTimeline();}
function youtubeAPI(){if(window.YT?.Player)return Promise.resolve(window.YT);if(apiPromise)return apiPromise;apiPromise=new Promise((resolve,reject)=>{const prior=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{if(prior)prior();resolve(window.YT)};const s=document.createElement('script');s.src='https://www.youtube.com/iframe_api';s.onerror=()=>{apiPromise=null,wantsPlaying=false;reject(Error('Player controls could not load'))};document.head.append(s)});return apiPromise}
function openOfficialSoul(){const t=PUBLISHED_TRACKS.find(t=>t.genre==='Soul');playTrack(t)}
async function openMusicVideo(t,version=0){closeOfficialSoul();const epoch=videoEpoch,ids=[t.videoId,...(t.alternates||[])];audio.pause();audio.hidden=true;ytReady=false;wantsPlaying=true;paintPlay(true);$('#master-play').disabled=false;officialSoulPanel=document.createElement('aside');officialSoulPanel.className='official-soul-panel inline-music-video';officialSoulPanel.setAttribute('aria-label',t.artist+' music video player');officialSoulPanel.innerHTML=`<div class="official-soul-heading"><span>${esc(t.artist)} · ${esc(t.title)}</span><button type="button" class="icon-button" data-expand-music aria-label="Expand music panel">↗</button><button type="button" class="icon-button" data-stop-video aria-label="Stop music">■</button></div><iframe id="ie-youtube-player" title="${esc(t.artist)}: ${esc(t.title)}" src="https://www.youtube-nocookie.com/embed/${ids[version]}?autoplay=1&playsinline=1&enablejsapi=1&rel=0&origin=${encodeURIComponent(location.origin)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><p class="video-player-note" role="status">Publisher player · Press play in the video if needed.</p><p><a href="https://www.youtube.com/watch?v=${ids[version]}" target="_blank" rel="noopener noreferrer">Open on YouTube ↗</a></p>`;const slot=$('#playlist .selected-track');(slot||$('#playlist')).append(officialSoulPanel);officialSoulPanel.querySelector('[data-stop-video]').onclick=()=>$('#music-stop').click();officialSoulPanel.querySelector('[data-expand-music]').onclick=()=>{if($('#music-panel').classList.contains('music-minimized'))setMusicOpen(true);else officialSoulPanel.querySelector('iframe').requestFullscreen?.().catch(()=>toast('Use the video fullscreen control.'))};officialSoulPanel.scrollIntoView({block:'nearest'});const note=()=>officialSoulPanel?.querySelector('.video-player-note');setTimeout(()=>{if(epoch===videoEpoch&&!ytReady&&note())note().textContent='Use the video’s own playback controls. Shared controls are still connecting.'},6000);
 try{const YT=await youtubeAPI();if(epoch!==videoEpoch||!officialSoulPanel)return;ytPlayer=new YT.Player('ie-youtube-player',{events:{onReady:e=>{if(epoch!==videoEpoch)return;ytReady=true;$('#master-play').disabled=false;e.target.setVolume(Number($('#music-volume').value));if(wantsPlaying)e.target.playVideo();else e.target.pauseVideo();updateTimeline()},onStateChange:e=>{if(epoch!==videoEpoch)return;if(e.data===1)wantsPlaying=true;if(e.data===2)wantsPlaying=false;paintPlay(e.data===1);updateTimeline();if(e.data===0){if(repeat){wantsPlaying=true;e.target.seekTo(0);e.target.playVideo()}else if(visibleTracks().length>1)stepTrack(1)}},onAutoplayBlocked:()=>{if(note())note().textContent='Press Play in the video or music controller to begin.'},onError:e=>{if(epoch!==videoEpoch)return;paintPlay(false);$('#master-play').disabled=false;if([100,101,150].includes(e.data)&&version+1<ids.length){$('#now-playing').textContent='Trying an alternate publisher version…';openMusicVideo(t,version+1)}else{if(note())note().textContent='This publisher video is unavailable here. Try the next track or open its YouTube link.'}}}})}catch{if(epoch===videoEpoch&&note())note().textContent='Use the video’s own controls. Shared playback controls are unavailable.'}}
function visibleTracks(){const genre=$('#listen-genre').value;return tracks.filter(t=>genre==='My playlist'?isFavorite(t):genre==='All genres'||t.genre===genre)}
function renderPlaylist(){const list=visibleTracks(),root=$('#playlist'),existing=officialSoulPanel?.closest('li');let cursor=root.firstChild;
 for(const t of list){let li=existing&&t===currentTrack?existing:document.createElement('li');if(li!==existing){const b=document.createElement('button');b.className='track-choice';b.innerHTML=`${esc(t.artist||'Local audio')} · ${esc(t.title)}<small>${esc(t.genre)} · ${t.contentNote?esc(t.contentNote):t.videoId?'Publisher video':'Local audio'}</small>`;b.onclick=()=>{if(t===currentTrack&&officialSoulPanel){setMusicOpen(true);return}playTrack(t)};li.append(b);const favorite=document.createElement('button');favorite.type='button';favorite.className='track-favorite';favorite.onclick=()=>saveFavorite(t);li.append(favorite);}
 li.classList.toggle('selected-track',t===currentTrack);li.querySelector('.track-choice')?.setAttribute('aria-current',String(t===currentTrack));const favorite=li.querySelector('.track-favorite');if(favorite){favorite.textContent=isFavorite(t)?'♥ Saved':'♡ Add to my playlist';favorite.setAttribute('aria-pressed',String(isFavorite(t)));favorite.setAttribute('aria-label',(isFavorite(t)?'Remove ':'Add ')+t.title+(isFavorite(t)?' from':' to')+' my playlist');}
 if(li===cursor)cursor=cursor.nextSibling;else root.insertBefore(li,cursor);
 }
 while(cursor){const next=cursor.nextSibling;if(cursor===existing){cursor.classList.add('current-outside-list');cursor=next;continue}cursor.remove();cursor=next;}
 if(!list.length&&!existing){root.replaceChildren();const li=document.createElement('li');li.className='small';li.textContent=$('#listen-genre').value==='My playlist'?'Add songs with the heart buttons to build your personal playlist.':'Our ie sound effects collection is being prepared. Original previews will appear when published.';root.append(li);}
 $('#prev').disabled=$('#next').disabled=list.length<2;$('#shuffle').disabled=list.length<2;
}
async function playTrack(t){if(!t)return;const wasMinimized=$('#music-panel').classList.contains('music-minimized');if(!t.videoId&&!t.src){toast('This preview is being prepared.');return;}if(currentTrack!==t)closeOfficialSoul();currentTrack=t;if(!$('#release-panel').hidden)setReleaseOpen(false);$('#now-playing').textContent=`${t.artist||'Local audio'} · ${t.title} · ${t.genre}`;$('#music-track-theme').textContent=t.theme||'Your local audio stays in this browser session.';renderTrackDetails(t);renderPlaylist();if(t.videoId){openMusicVideo(t);if(wasMinimized)setMusicOpen(false);return}closeOfficialSoul();audio.hidden=false;audio.src=t.src;audio.volume=Number($('#music-volume').value)/100;try{await audio.play()}catch{toast('Use the audio controls to begin listening.')}}
function stepTrack(direction){const list=visibleTracks();if(!list.length)return;const index=list.indexOf(currentTrack);let nextIndex=index<0?0:(index+direction+list.length)%list.length;if(shuffle&&list.length>1){const other=list.filter(t=>t!==currentTrack);playTrack(other[Math.floor(Math.random()*other.length)]);return}playTrack(list[nextIndex])}
function chooseGenre(g){$('#listen-genre').value=g;renderPlaylist();const list=visibleTracks(),first=list.find(t=>t.local)||list[0];$('#master-play').disabled=!first;if(first)playTrack(first);else{audio.pause();closeOfficialSoul();currentTrack=null;$('#master-play').disabled=true;renderTrackDetails(null);updateTimeline();$('#now-playing').textContent='Sound Effects · Original previews coming soon';paintPlay(false)}}
$('#listen-genre').onchange=()=>chooseGenre($('#listen-genre').value);$('#prev').onclick=()=>stepTrack(-1);$('#next').onclick=()=>stepTrack(1);$('#shuffle').onclick=()=>{shuffle=!shuffle;$('#shuffle').setAttribute('aria-pressed',String(shuffle))};$('#repeat').onclick=()=>{repeat=!repeat;audio.loop=repeat;$('#repeat').setAttribute('aria-pressed',String(repeat))};$('#master-play').onclick=()=>{if(!currentTrack){playTrack(visibleTracks()[0]);return}if(currentTrack.videoId){if(!officialSoulPanel){openMusicVideo(currentTrack);return}const playing=ytReady?ytPlayer.getPlayerState()===1:wantsPlaying;wantsPlaying=!playing;if(ytReady){if(wantsPlaying)ytPlayer.playVideo();else ytPlayer.pauseVideo()}else{const frame=officialSoulPanel.querySelector('iframe');frame?.contentWindow?.postMessage(JSON.stringify({event:'command',func:wantsPlaying?'playVideo':'pauseVideo',args:[]}),new URL(frame.src).origin)}paintPlay(wantsPlaying)}else if(audio.paused)audio.play().catch(()=>toast('Use the audio controls.'));else audio.pause()};$('#music-volume').oninput=()=>{audio.volume=Number($('#music-volume').value)/100;if(ytReady)ytPlayer.setVolume(Number($('#music-volume').value))};audio.onplay=()=>paintPlay(true);audio.onpause=()=>{if(!ytReady)paintPlay(false)};audio.onended=()=>{if(!repeat&&visibleTracks().length>1)stepTrack(1)};audio.onerror=()=>toast('This local audio could not be played. Try another supported format.');
$('#music-files').onchange=e=>{const incoming=[...e.target.files].filter(f=>f.type.startsWith('audio/')||/\.(mp3|wav|m4a|ogg|flac)$/i.test(f.name));for(const f of incoming)tracks.push({title:f.name.replace(/\.[^.]+$/,''),artist:'Local audio',genre:$('#upload-genre').value,src:URL.createObjectURL(f),local:true});$('#listen-genre').value=$('#upload-genre').value;renderPlaylist();if(incoming.length)playTrack(visibleTracks().at(-1));toast(`${incoming.length} local track${incoming.length===1?'':'s'} added`);e.target.value=''};$('#clear-tracks').onclick=()=>{closeOfficialSoul();audio.pause();audio.removeAttribute('src');audio.load();audio.hidden=true;for(const t of tracks)if(t.local)URL.revokeObjectURL(t.src);tracks=[...PUBLISHED_TRACKS];sessionFavorites.clear();currentTrack=null;$('#now-playing').textContent='Choose a genre. Familiar classics await.';$('#music-track-theme').textContent='';renderTrackDetails(null);updateTimeline();renderPlaylist()};renderPlaylist();

function renderTrackDetails(t){const box=$('#music-track-details');if(!box)return;box.replaceChildren();if(!t){box.hidden=true;return}box.hidden=false;box.closest('details').open=true;const title=document.createElement('h3');title.textContent=t.title;const meta=document.createElement('p');meta.textContent=(t.artist||'Local audio')+' · '+t.genre+(t.inact?' · InAct Entertainment Music':'');const note=document.createElement('p');note.className='small';note.textContent=t.instrumental?'Instrumental selection. No sung lyrics in this recording.':t.lyricsUrl?'Read the lyrics through the linked music service. Availability may depend on your region or account.':'Use the publisher video’s captions when available. Full lyrics are not hosted here.';const context=document.createElement('p');context.textContent=t.theme||'Your local audio stays in this browser session.';box.append(title,meta,context,note);if(t.lyricsUrl){const link=document.createElement('a');link.href=t.lyricsUrl;link.textContent='Lyrics & track details ↗';link.target='_blank';link.rel='noopener noreferrer';link.className='outline';box.append(link)}}
function timeLabel(value){const n=Math.max(0,Math.floor(Number(value)||0));return Math.floor(n/60)+':'+String(n%60).padStart(2,'0')}
function playbackClock(){let duration=0,position=0;try{if(currentTrack?.videoId){if(ytReady){duration=ytPlayer.getDuration?.()||0;position=ytPlayer.getCurrentTime?.()||0}}else if(currentTrack&&audio.src){duration=audio.duration;position=audio.currentTime}}catch{}return{duration:Number.isFinite(duration)?duration:0,position:Number.isFinite(position)?position:0}}
function updateTimeline(){const seek=$('#music-seek');if(!seek)return;const{duration,position}=playbackClock();seek.disabled=duration<=0;seek.max=String(duration||1);if(document.activeElement!==seek)seek.value=String(position);seek.setAttribute('aria-valuetext',timeLabel(position)+' of '+timeLabel(duration));$('#music-elapsed').textContent=timeLabel(position);$('#music-duration').textContent=duration?timeLabel(duration):'—';$('#music-stop').disabled=!currentTrack&&!officialSoulPanel}
function seekMusic(value){const{duration}=playbackClock();if(!duration)return;const time=Math.max(0,Math.min(Number(value)||0,duration));if(currentTrack?.videoId&&ytReady)ytPlayer.seekTo(time,true);else if(currentTrack&&!currentTrack.videoId)audio.currentTime=time;updateTimeline()}
$('#music-seek').oninput=e=>{const value=Number(e.target.value);$('#music-elapsed').textContent=timeLabel(value);e.target.setAttribute('aria-valuetext',timeLabel(value));};$('#music-seek').onchange=e=>seekMusic(e.target.value);
$('#music-stop').onclick=()=>{audio.pause();if(audio.src)try{audio.currentTime=0}catch{}closeOfficialSoul();paintPlay(false);updateTimeline();$('#now-playing').textContent=currentTrack?'Stopped · '+currentTrack.artist+' · '+currentTrack.title:'Choose a genre.'};
for(const event of ['loadedmetadata','durationchange','timeupdate','seeked'])audio.addEventListener(event,updateTimeline);const timelineTimer=setInterval(()=>{if(!document.hidden&&currentTrack)updateTimeline()},500);window.addEventListener('pagehide',()=>{clearInterval(timelineTimer);audio.pause();closeOfficialSoul()});updateTimeline();

document.addEventListener('visibilitychange',()=>{if(document.hidden&&currentTrack?.videoId){wantsPlaying=false;try{ytPlayer?.pauseVideo()}catch{}paintPlay(false)}});

