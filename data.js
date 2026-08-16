var DATA = {};

// ============================================================
// Part A 模仿朗读（20套）
// 话题覆盖：自然环保、科技发明、历史文化、健康生活、教育成长、
//           社会现象、体育运动、艺术音乐、旅行探索、人物故事
// ============================================================
DATA.partA = [
  {
    id: "A001",
    title: "The Amazon Rainforest",
    topic: "自然环保",
    words: 103,
    text: "The Amazon rainforest is the largest tropical rainforest in the world, covering over five million square kilometers across nine countries in South America. Often called the lungs of the Earth, it produces about twenty percent of the world's oxygen. The rainforest is home to millions of species of plants, animals, and insects, many of which have not yet been discovered by scientists. Unfortunately, deforestation has become a serious problem in recent decades. Large areas of the forest are being cut down for farming and logging. Protecting the Amazon is essential for maintaining the balance of our planet's climate and preserving its incredible biodiversity.",
    difficulty: "medium"
  },
  {
    id: "A002",
    title: "Ocean Pollution",
    topic: "自然环保",
    words: 102,
    text: "Every year, millions of tons of plastic waste end up in our oceans, causing serious damage to marine life. Sea turtles, dolphins, and seabirds often mistake plastic bags for food, which can lead to injury or even death. The plastic waste gradually breaks down into tiny pieces called microplastics, which enter the food chain and eventually reach humans. Scientists estimate that by the year twenty fifty, there could be more plastic than fish in the ocean. To solve this problem, we must reduce our use of single-use plastics, improve recycling systems, and clean up the waste that has already polluted our waters.",
    difficulty: "medium"
  },
  {
    id: "A003",
    title: "Artificial Intelligence",
    topic: "科技发明",
    words: 99,
    text: "Artificial intelligence, or AI, is one of the most significant technological advancements of the twenty-first century. It refers to the development of computer systems that can perform tasks normally requiring human intelligence, such as recognizing speech, making decisions, and translating languages. In recent years, AI has been widely applied in various fields, including healthcare, education, transportation, and entertainment. While AI brings enormous benefits to society, it also raises concerns about job displacement and data privacy. As AI technology continues to evolve rapidly, it is crucial that we develop ethical guidelines to ensure it serves the best interests of humanity.",
    difficulty: "hard"
  },
  {
    id: "A004",
    title: "The History of Television",
    topic: "科技发明",
    words: 110,
    text: "Television has become one of the most popular forms of entertainment in modern society. The invention of television dates back to the late nineteen twenties, when the first successful television transmissions were made. Over the decades, television technology has evolved dramatically, from black-and-white screens to high-definition color displays. Today, smart TVs can connect to the internet, allowing viewers to stream movies, play games, and browse websites. Despite the rise of smartphones and computers, television remains an important medium for news, education, and family entertainment. It continues to bring people together, creating shared experiences across cultures and generations. It has transformed the way we see and understand the world around us.",
    difficulty: "medium"
  },
  {
    id: "A005",
    title: "The Great Wall of China",
    topic: "历史文化",
    words: 100,
    text: "The Great Wall of China is one of the most famous landmarks in the world. It stretches over twenty-one thousand kilometers across northern China, winding through mountains, valleys, and deserts. The wall was built over two thousand years ago to protect the Chinese empire from invasions by northern tribes. Millions of workers spent decades constructing different sections of the wall, using bricks, stones, and packed earth. Today, the Great Wall is a UNESCO World Heritage Site and attracts millions of visitors every year. It stands as a remarkable symbol of Chinese history, culture, and the determination of the Chinese people.",
    difficulty: "easy"
  },
  {
    id: "A006",
    title: "Ancient Egyptian Civilization",
    topic: "历史文化",
    words: 103,
    text: "Ancient Egyptian civilization is one of the oldest and most fascinating civilizations in human history. It developed along the banks of the Nile River more than five thousand years ago. The ancient Egyptians were remarkable builders, engineers, and artists. They constructed massive pyramids and temples that still stand today, showcasing their extraordinary architectural skills. They also invented a writing system called hieroglyphics, which used pictures and symbols to represent words and sounds. The Egyptians made significant contributions to mathematics, medicine, and astronomy. Their rich culture and achievements continue to captivate historians and archaeologists, offering valuable insights into the brilliance of the ancient world.",
    difficulty: "medium"
  },
  {
    id: "A007",
    title: "The Importance of Sleep",
    topic: "健康生活",
    words: 100,
    text: "Sleep is essential for our physical and mental health. When we sleep, our bodies repair damaged cells, strengthen our immune system, and store energy for the next day. Studies show that adults need seven to nine hours of sleep each night to function properly. Lack of sleep can lead to many problems, including poor concentration, weakened memory, and increased risk of illness. To improve sleep quality, experts recommend going to bed at the same time every night, avoiding screens before bedtime, and keeping the bedroom cool and dark. Good sleep habits can make a big difference in our daily lives.",
    difficulty: "easy"
  },
  {
    id: "A008",
    title: "Benefits of Regular Exercise",
    topic: "健康生活",
    words: 103,
    text: "Regular exercise is one of the most effective ways to maintain good health and improve overall well-being. Physical activity strengthens the heart, builds muscle, and helps control body weight. It also releases chemicals in the brain called endorphins, which naturally boost our mood and reduce feelings of stress and anxiety. Research has shown that people who exercise regularly tend to live longer and have a lower risk of chronic diseases such as diabetes and heart disease. Even thirty minutes of moderate exercise a day, such as walking, swimming, or cycling, can bring significant health benefits. Start small and gradually increase your activity level.",
    difficulty: "medium"
  },
  {
    id: "A009",
    title: "The Value of Reading",
    topic: "教育成长",
    words: 106,
    text: "Reading is one of the most valuable habits a person can develop. It opens our minds to new ideas, expands our knowledge, and improves our language skills. When we read, we travel to different places and times without leaving our homes. We can learn about history, science, culture, and the lives of interesting people. Reading also helps improve our concentration and memory. Studies have shown that children who read regularly tend to perform better in school. Whether it is a novel, a biography, or a science magazine, every book we read adds something meaningful to our lives. So pick up a book and start reading today.",
    difficulty: "easy"
  },
  {
    id: "A010",
    title: "The Power of Lifelong Learning",
    topic: "教育成长",
    words: 103,
    text: "Lifelong learning is the continuous pursuit of knowledge throughout one's life. In today's rapidly changing world, the skills we learned in school may quickly become outdated. New technologies, scientific discoveries, and social changes require us to constantly update our knowledge and abilities. Lifelong learning can take many forms, such as reading books, attending workshops, taking online courses, or learning from colleagues. It not only enhances our career prospects but also keeps our minds sharp and active as we age. Research suggests that people who keep learning throughout their lives tend to have better mental health and greater life satisfaction. Learning truly never stops.",
    difficulty: "medium"
  },
  {
    id: "A011",
    title: "The Impact of Social Media",
    topic: "社会现象",
    words: 106,
    text: "Social media has fundamentally transformed the way people communicate, share information, and interact with one another. Platforms such as WeChat, Instagram, and TikTok have billions of active users worldwide. While social media offers numerous benefits, including instant communication and access to diverse perspectives, it also presents significant challenges. Excessive use of social media has been linked to anxiety, depression, and poor sleep quality, particularly among teenagers. The spread of misinformation and online bullying are other serious concerns. As social media continues to shape our society, it is increasingly important for users to develop critical thinking skills and practice responsible digital citizenship in their daily online activities.",
    difficulty: "hard"
  },
  {
    id: "A012",
    title: "Urbanization",
    topic: "社会现象",
    words: 106,
    text: "Urbanization is the process by which more and more people move from rural areas to cities in search of better jobs, education, and living conditions. This trend has accelerated dramatically over the past few decades. Today, more than half of the world's population lives in urban areas. While cities offer numerous opportunities, rapid urbanization also creates serious challenges. Traffic congestion, air pollution, housing shortages, and overcrowding are common problems in many large cities. Governments around the world are working to develop sustainable urban planning strategies, including building green spaces, improving public transportation, and creating affordable housing. The goal is to make cities more livable for everyone.",
    difficulty: "medium"
  },
  {
    id: "A013",
    title: "The Olympic Spirit",
    topic: "体育运动",
    words: 106,
    text: "The Olympic Games are the world's largest international sporting event, bringing together athletes from over two hundred countries. The Games are held every four years, alternating between summer and winter editions. The Olympic motto, faster, higher, stronger, encourages athletes to push beyond their limits and strive for excellence. Beyond competition, the Olympics promote peace, friendship, and mutual understanding among nations. Athletes from different backgrounds and cultures come together in the Olympic Village, sharing meals, stories, and experiences. The opening and closing ceremonies, featuring music, dance, and spectacular performances, celebrate the host country's culture. The Olympics remind us that sports can unite the world in remarkable ways.",
    difficulty: "easy"
  },
  {
    id: "A014",
    title: "Running for Health",
    topic: "体育运动",
    words: 110,
    text: "Running is one of the simplest and most accessible forms of exercise. All you need is a pair of comfortable shoes and a safe place to run. Regular running can improve cardiovascular health, strengthen muscles, and burn calories effectively. It also releases endorphins, which create a feeling of happiness often referred to as the runner's high. Many people find that running helps clear their minds and reduce stress after a long day. For beginners, it is important to start slowly and gradually increase distance and speed. Joining a running club or participating in local races can provide motivation and make the experience more enjoyable. Running benefits both body and mind.",
    difficulty: "medium"
  },
  {
    id: "A015",
    title: "The Healing Power of Music",
    topic: "艺术音乐",
    words: 109,
    text: "Music has a remarkable ability to influence our emotions and even improve our health. Scientific research has shown that listening to music can lower blood pressure, reduce anxiety, and relieve pain. In hospitals around the world, music therapy is increasingly used to help patients recover from surgery and manage chronic conditions. Different types of music produce different effects. Slow, gentle melodies can calm the mind and promote relaxation, while upbeat rhythms can boost energy and motivation. Music also plays an important role in bringing people together, crossing barriers of language, culture, and age. Whether we sing, play an instrument, or simply listen, music enriches our lives in countless ways.",
    difficulty: "medium"
  },
  {
    id: "A016",
    title: "Traditional Chinese Painting",
    topic: "艺术音乐",
    words: 109,
    text: "Traditional Chinese painting is one of the oldest continuous artistic traditions in the world. It uses a brush, ink, and paper or silk to create beautiful images of landscapes, flowers, birds, and figures. Unlike Western painting, which focuses on realistic details and perspective, Chinese painting emphasizes the spirit and essence of the subject. Artists often leave empty spaces on the paper, believing that what is left unsaid can be just as meaningful as what is painted. Many Chinese paintings also include calligraphy and poetry, combining visual art with literature. Painters such as Qi Baishi and Xu Beihong have created masterpieces that continue to inspire art lovers around the world.",
    difficulty: "easy"
  },
  {
    id: "A017",
    title: "Space Exploration",
    topic: "旅行探索",
    words: 109,
    text: "Space exploration represents one of humanity's greatest adventures. Since the first satellite was launched in nineteen fifty-seven, humans have made remarkable progress in understanding the universe. Astronauts have walked on the Moon, robots have explored the surface of Mars, and telescopes have captured stunning images of distant galaxies. The International Space Station, orbiting four hundred kilometers above the Earth, serves as a permanent laboratory where scientists conduct experiments in microgravity. Despite the enormous costs and risks involved, space exploration continues to drive technological innovation and inspire future generations. Many scientists believe that establishing human settlements on other planets may eventually become necessary for the long-term survival of our species.",
    difficulty: "hard"
  },
  {
    id: "A018",
    title: "The Wonders of National Parks",
    topic: "旅行探索",
    words: 108,
    text: "National parks are protected areas of natural beauty that offer breathtaking landscapes and unique wildlife. The United States established the world's first national park, Yellowstone, in eighteen seventy-two. Today, there are thousands of national parks across the globe, preserving forests, mountains, deserts, lakes, and coastal regions. These parks provide habitats for endangered species and serve as living classrooms where visitors can learn about nature and conservation. Activities such as hiking, camping, bird watching, and photography attract millions of visitors each year. National parks also play a vital role in fighting climate change by absorbing carbon dioxide and protecting biodiversity. They are truly treasures that belong to all humanity.",
    difficulty: "medium"
  },
  {
    id: "A019",
    title: "Marie Curie",
    topic: "人物故事",
    words: 110,
    text: "Marie Curie was one of the most brilliant scientists in history. Born in Poland in eighteen sixty-seven, she moved to Paris to study physics and mathematics. Despite facing numerous challenges as a woman in science, she conducted groundbreaking research on radioactivity. Together with her husband Pierre, she discovered two new elements, polonium and radium. In nineteen oh three, she became the first woman to win a Nobel Prize, and in nineteen eleven, she won a second Nobel Prize in a different field of science. During World War I, she developed mobile X-ray units to help treat wounded soldiers. Her dedication to science and selfless service continue to inspire people worldwide.",
    difficulty: "medium"
  },
  {
    id: "A020",
    title: "Thomas Edison",
    topic: "人物故事",
    words: 109,
    text: "Thomas Edison was one of the greatest inventors in American history. He was born in eighteen forty-seven and received very little formal education. Instead, his mother taught him at home, and he developed a strong love for reading and experimenting. Edison held over one thousand patents for his inventions. His most famous inventions include the electric light bulb, the phonograph, and the motion picture camera. Edison was known for his incredible work ethic, often working long hours. He once said that genius is one percent inspiration and ninety-nine percent perspiration. His determination and creativity changed the world, and his inventions continue to influence our daily lives in countless ways.",
    difficulty: "easy"
  }
];

// ============================================================
// Part B 角色扮演（15套）
// 话题覆盖：校园生活、购物消费、旅游出行、健康医疗、社交活动、
//           求职面试、科技应用、家庭生活、社区服务、文化交流
// ============================================================
DATA.partB = [
  {
    id: "B001",
    title: "Joining a School Club",
    topic: "校园生活",
    scenario: "你是一名学生，正在和学校社团负责人讨论加入摄影社团的事情。",
    scenarioEn: "You are a student, talking with the head of a school club about joining the photography club.",
    dialogue: [
      {role: "student", cn: "你好，我想了解一下摄影社团。", en: "Hello, I'd like to know about the photography club."},
      {role: "staff", cn: "欢迎你！我们社团每周三下午活动，主要学习摄影技巧和户外拍摄。", en: "Welcome! Our club meets every Wednesday afternoon. We mainly learn photography skills and do outdoor shooting."},
      {role: "student", cn: "参加社团需要什么条件吗？", en: "Are there any requirements to join the club?"},
      {role: "staff", cn: "没有特别要求，只要你对摄影感兴趣就行。不过需要自备相机。", en: "No special requirements, as long as you are interested in photography. But you need to bring your own camera."},
      {role: "student", cn: "社团有多少成员？", en: "How many members are there in the club?"},
      {role: "staff", cn: "目前有三十名成员，大家都很友好，经常互相帮助。", en: "Currently there are thirty members. Everyone is friendly and often helps each other."}
    ],
    questions: [
      {
        cn: "社团每年会组织几次户外活动？",
        en: "How many outdoor activities does the club organize each year?",
        answer: "We usually organize about four to six outdoor activities each year, including trips to parks, mountains, and the seaside."
      },
      {
        cn: "加入社团需要交费吗？",
        en: "Do I need to pay a fee to join the club?",
        answer: "Yes, there is a small membership fee of fifty yuan per semester to cover equipment and transportation costs."
      },
      {
        cn: "社团有没有举办过摄影比赛？",
        en: "Has the club ever held any photography competitions?",
        answer: "Yes, we hold a photography competition every semester, and the winning photos are displayed in the school gallery."
      }
    ],
    fiveAnswers: [
      {q: "When does the photography club meet?", a: "The club meets every Wednesday afternoon."},
      {q: "What do members mainly do in the club?", a: "They mainly learn photography skills and do outdoor shooting."},
      {q: "What do you need to bring to join the club?", a: "You need to bring your own camera."},
      {q: "How much is the membership fee per semester?", a: "The membership fee is fifty yuan per semester."},
      {q: "What happens to the winning photos in the competition?", a: "The winning photos are displayed in the school gallery."}
    ],
    difficulty: "medium"
  },
  {
    id: "B002",
    title: "Returning a Defective Product",
    topic: "购物消费",
    scenario: "你是一名顾客，在商店退换一件有质量问题的蓝牙耳机。",
    scenarioEn: "You are a customer, returning a defective Bluetooth earphone at a store.",
    dialogue: [
      {role: "customer", cn: "你好，我昨天在这里买了一个蓝牙耳机，但是右边的耳机没有声音。", en: "Hello, I bought a Bluetooth earphone here yesterday, but the right earphone has no sound."},
      {role: "staff", cn: "我看看。请问您带了购物小票吗？", en: "Let me check. Did you bring your receipt?"},
      {role: "customer", cn: "带了，这是购物小票。", en: "Yes, here is the receipt."},
      {role: "staff", cn: "好的，确认是质量问题。您想退款还是换一个新的？", en: "OK, it is confirmed to be a quality issue. Would you like a refund or a replacement?"},
      {role: "customer", cn: "我想换一个新的，请问有现货吗？", en: "I would like a replacement. Do you have it in stock?"},
      {role: "staff", cn: "有的，我们仓库还有几台。请您稍等，我去拿一台新的给您。", en: "Yes, we still have several in the warehouse. Please wait a moment, I will get a new one for you."}
    ],
    questions: [
      {
        cn: "退换货的期限是多久？",
        en: "How long is the return and exchange period?",
        answer: "The return and exchange period is fifteen days from the date of purchase."
      },
      {
        cn: "如果新换的耳机也有问题怎么办？",
        en: "What if the replacement earphone also has problems?",
        answer: "If the replacement has the same problem within the warranty period, you can bring it back for a full refund."
      },
      {
        cn: "你们店有提供延长保修服务吗？",
        en: "Does your store offer extended warranty service?",
        answer: "Yes, we offer an extended warranty for an additional fifty yuan, which covers one extra year."
      }
    ],
    fiveAnswers: [
      {q: "What was wrong with the earphone the customer bought?", a: "The right earphone had no sound."},
      {q: "When did the customer buy the earphone?", a: "The customer bought it yesterday."},
      {q: "What did the customer choose, a refund or a replacement?", a: "The customer chose a replacement."},
      {q: "How long is the return and exchange period?", a: "The return and exchange period is fifteen days from the date of purchase."},
      {q: "How much does the extended warranty cost?", a: "The extended warranty costs fifty yuan for one extra year."}
    ],
    difficulty: "medium"
  },
  {
    id: "B003",
    title: "Planning a Trip to Yunnan",
    topic: "旅游出行",
    scenario: "你正在和旅行社的工作人员讨论暑假去云南的旅行计划。",
    scenarioEn: "You are discussing summer vacation travel plans to Yunnan with a travel agency staff member.",
    dialogue: [
      {role: "student", cn: "你好，我想了解一下暑假去云南的旅行团。", en: "Hello, I would like to know about the summer tour to Yunnan."},
      {role: "staff", cn: "好的！我们有一个七日云南游，包括昆明、大理和丽江。", en: "Sure! We have a seven-day Yunnan tour covering Kunming, Dali, and Lijiang."},
      {role: "student", cn: "旅行团的费用是多少？", en: "How much does the tour cost?"},
      {role: "staff", cn: "每人三千五百元，包括交通、住宿和门票，但不包括餐费。", en: "It is three thousand five hundred yuan per person, including transportation, accommodation, and tickets, but not meals."},
      {role: "student", cn: "出发日期是什么时候？", en: "When is the departure date?"},
      {role: "staff", cn: "我们有七月十五日和七月二十五日两个出发日期，您可以选择其中一个。", en: "We have two departure dates, July fifteenth and July twenty-fifth. You can choose either one."}
    ],
    questions: [
      {
        cn: "旅行团最多有多少人？",
        en: "What is the maximum number of people in the tour group?",
        answer: "Each tour group has a maximum of twenty people to ensure better service quality."
      },
      {
        cn: "需要提前多久报名？",
        en: "How far in advance do I need to sign up?",
        answer: "We recommend signing up at least two weeks before the departure date to secure your spot."
      },
      {
        cn: "有学生优惠吗？",
        en: "Is there a student discount?",
        answer: "Yes, students with a valid student ID can get a ten percent discount on the tour price."
      }
    ],
    fiveAnswers: [
      {q: "What cities does the seven-day Yunnan tour cover?", a: "It covers Kunming, Dali, and Lijiang."},
      {q: "How much does the tour cost per person?", a: "It costs three thousand five hundred yuan per person."},
      {q: "What is NOT included in the tour price?", a: "Meals are not included in the tour price."},
      {q: "What is the maximum number of people in each tour group?", a: "Each tour group has a maximum of twenty people."},
      {q: "What discount can students get?", a: "Students with a valid student ID can get a ten percent discount."}
    ],
    difficulty: "medium"
  },
  {
    id: "B004",
    title: "Visiting a Doctor",
    topic: "健康医疗",
    scenario: "你去看医生，向医生描述你最近咳嗽和发烧的症状。",
    scenarioEn: "You are visiting a doctor and describing your symptoms of coughing and fever.",
    dialogue: [
      {role: "patient", cn: "医生，我最近三天一直咳嗽，还有点发烧。", en: "Doctor, I have been coughing for the past three days, and I also have a slight fever."},
      {role: "doctor", cn: "让我检查一下。体温三十八度五。喉咙有些发炎。", en: "Let me check. Your temperature is thirty-eight point five degrees. Your throat is a bit inflamed."},
      {role: "patient", cn: "严重吗？需要吃药吗？", en: "Is it serious? Do I need medicine?"},
      {role: "doctor", cn: "不太严重，是普通的感冒。我给你开些止咳药和退烧药。", en: "It is not too serious. It is a common cold. I will prescribe some cough medicine and fever-reducing medicine."},
      {role: "patient", cn: "我需要注意什么吗？", en: "Is there anything I should pay attention to?"},
      {role: "doctor", cn: "多喝水，多休息，不要吃辛辣食物。如果三天后还没好转，再来复查。", en: "Drink plenty of water, get plenty of rest, and avoid spicy food. If you do not feel better after three days, come back for a follow-up."}
    ],
    questions: [
      {
        cn: "这药一天吃几次？",
        en: "How many times a day should I take this medicine?",
        answer: "Take the cough medicine three times a day after meals, and the fever medicine only when your temperature is above thirty-eight degrees."
      },
      {
        cn: "我可以继续上学吗？",
        en: "Can I continue going to school?",
        answer: "I would recommend staying home for two days to rest and avoid spreading the cold to your classmates."
      },
      {
        cn: "有什么方法可以预防感冒吗？",
        en: "Are there any ways to prevent catching a cold?",
        answer: "Yes, wash your hands frequently, get enough sleep, eat more fruits and vegetables, and exercise regularly to boost your immune system."
      }
    ],
    fiveAnswers: [
      {q: "How long has the patient been coughing?", a: "The patient has been coughing for the past three days."},
      {q: "What is the patient's temperature?", a: "The patient's temperature is thirty-eight point five degrees."},
      {q: "What medicine did the doctor prescribe?", a: "The doctor prescribed cough medicine and fever-reducing medicine."},
      {q: "How often should the patient take the cough medicine?", a: "The patient should take the cough medicine three times a day after meals."},
      {q: "How many days should the patient stay home?", a: "The patient should stay home for two days."}
    ],
    difficulty: "medium"
  },
  {
    id: "B005",
    title: "Organizing a Birthday Party",
    topic: "社交活动",
    scenario: "你正在和朋友讨论如何给同学李华举办一个惊喜生日派对。",
    scenarioEn: "You are discussing how to throw a surprise birthday party for your classmate Li Hua with your friend.",
    dialogue: [
      {role: "you", cn: "下周六是李华的生日，我们给他办个惊喜派对吧。", en: "Next Saturday is Li Hua's birthday. Let us throw him a surprise party."},
      {role: "friend", cn: "好主意！在哪儿办？需要邀请多少人？", en: "Great idea! Where should we have it? How many people should we invite?"},
      {role: "you", cn: "在我家办吧，地方够大。大概邀请十五个人。", en: "Let us have it at my place. It is big enough. Let us invite about fifteen people."},
      {role: "friend", cn: "那我来负责买蛋糕和装饰品。你觉得他要什么口味的蛋糕？", en: "I will take care of the cake and decorations. What flavor cake do you think he would like?"},
      {role: "you", cn: "他最喜欢巧克力蛋糕。对了，派对下午三点开始。", en: "He loves chocolate cake the most. By the way, the party starts at three p.m."},
      {role: "friend", cn: "好的，我提前一个小时去你家布置。别忘了通知大家保密。", en: "OK, I will come to your house an hour early to set up. Do not forget to tell everyone to keep it a secret."}
    ],
    questions: [
      {
        cn: "派对上准备什么活动？",
        en: "What activities are planned for the party?",
        answer: "We plan to have some party games, sing karaoke, and then cut the cake together. We also prepared a video of everyone's birthday messages for Li Hua."
      },
      {
        cn: "需要每个人准备礼物吗？",
        en: "Does everyone need to bring a gift?",
        answer: "No, gifts are optional. We have organized a group gift instead, so anyone who wants to contribute can give a small amount of money."
      },
      {
        cn: "如果李华那天没空怎么办？",
        en: "What if Li Hua is not free that day?",
        answer: "I already checked with his sister, and she confirmed that he has no plans next Saturday afternoon. So we should be fine."
      }
    ],
    fiveAnswers: [
      {q: "Whose birthday is next Saturday?", a: "It is Li Hua's birthday."},
      {q: "Where will the party be held?", a: "The party will be held at the speaker's house."},
      {q: "How many people will be invited?", a: "About fifteen people will be invited."},
      {q: "What flavor cake will they buy?", a: "They will buy a chocolate cake."},
      {q: "What time will the friend come to set up?", a: "The friend will come at two p.m., an hour before the party starts."}
    ],
    difficulty: "easy"
  },
  {
    id: "B006",
    title: "A Job Interview at a Cafe",
    topic: "求职面试",
    scenario: "你正在一家咖啡馆面试兼职工作，向面试官介绍自己。",
    scenarioEn: "You are interviewing for a part-time job at a cafe and introducing yourself to the interviewer.",
    dialogue: [
      {role: "interviewer", cn: "你好，请先自我介绍一下。", en: "Hello, please introduce yourself first."},
      {role: "you", cn: "我叫王明，是一名大学生，主修英语专业。我对咖啡文化很感兴趣，所以想来这里工作。", en: "My name is Wang Ming. I am a college student majoring in English. I am interested in coffee culture, so I would like to work here."},
      {role: "interviewer", cn: "你以前有相关工作经验吗？", en: "Do you have any relevant work experience?"},
      {role: "you", cn: "我在学校的咖啡社待过一年，学会了基本的咖啡制作。", en: "I was in the school coffee club for a year and learned basic coffee making."},
      {role: "interviewer", cn: "你每周能工作多少小时？", en: "How many hours can you work per week?"},
      {role: "you", cn: "我周末可以全天工作，工作日下午可以工作四到五个小时。", en: "I can work full days on weekends and four to five hours on weekday afternoons."}
    ],
    questions: [
      {
        cn: "这份工作的时薪是多少？",
        en: "What is the hourly wage for this job?",
        answer: "The hourly wage is twenty-five yuan, and there is a free meal provided for each shift longer than four hours."
      },
      {
        cn: "新员工有培训吗？",
        en: "Is there training for new employees?",
        answer: "Yes, new employees receive three days of training before they start working independently. The training covers coffee making, customer service, and hygiene standards."
      },
      {
        cn: "工作满半年后有晋升机会吗？",
        en: "Are there promotion opportunities after working for six months?",
        answer: "Yes, after six months, employees who perform well can be promoted to shift supervisor with a higher salary and more responsibilities."
      }
    ],
    fiveAnswers: [
      {q: "What is the applicant's major?", a: "The applicant majors in English."},
      {q: "Where did the applicant learn basic coffee making?", a: "The applicant learned basic coffee making in the school coffee club."},
      {q: "When can the applicant work?", a: "The applicant can work full days on weekends and four to five hours on weekday afternoons."},
      {q: "What is the hourly wage for the job?", a: "The hourly wage is twenty-five yuan."},
      {q: "How long is the training period for new employees?", a: "New employees receive three days of training."}
    ],
    difficulty: "medium"
  },
  {
    id: "B007",
    title: "Using a New Learning App",
    topic: "科技应用",
    scenario: "你正在向一位技术人员询问一款新学习应用的使用方法。",
    scenarioEn: "You are asking a technician about how to use a new learning app.",
    dialogue: [
      {role: "you", cn: "你好，我下载了你们的学习应用，但不太清楚怎么用。", en: "Hello, I downloaded your learning app, but I am not sure how to use it."},
      {role: "tech", cn: "没问题！首先你需要注册一个账号，然后选择你感兴趣的课程。", en: "No problem! First, you need to register an account, then choose the courses you are interested in."},
      {role: "you", cn: "课程是免费的吗？", en: "Are the courses free?"},
      {role: "tech", cn: "基础课程是免费的，但高级课程需要付费订阅，每月二十元。", en: "Basic courses are free, but advanced courses require a paid subscription of twenty yuan per month."},
      {role: "you", cn: "可以下载课程离线学习吗？", en: "Can I download courses to study offline?"},
      {role: "tech", cn: "可以的，付费用户可以下载所有课程。免费用户每天只能下载两节课。", en: "Yes, paid users can download all courses. Free users can only download two lessons per day."}
    ],
    questions: [
      {
        cn: "这个应用支持哪些设备？",
        en: "What devices does this app support?",
        answer: "The app supports both iOS and Android devices, and you can also access it through a web browser on your computer."
      },
      {
        cn: "如果对课程不满意可以退款吗？",
        en: "Can I get a refund if I am not satisfied with the courses?",
        answer: "Yes, we offer a seven-day money-back guarantee for all paid subscriptions. You can request a full refund within seven days."
      },
      {
        cn: "应用上有没有学习社区可以交流？",
        en: "Is there a learning community on the app for communication?",
        answer: "Yes, there is a community forum where users can ask questions, share notes, and discuss courses with other learners and teachers."
      }
    ],
    fiveAnswers: [
      {q: "What is the first step to use the learning app?", a: "First, you need to register an account."},
      {q: "How much does the paid subscription cost?", a: "The paid subscription costs twenty yuan per month."},
      {q: "How many lessons can free users download per day?", a: "Free users can download two lessons per day."},
      {q: "What devices does the app support?", a: "The app supports both iOS and Android devices, and web browsers on computers."},
      {q: "How long is the money-back guarantee?", a: "The money-back guarantee is for seven days."}
    ],
    difficulty: "medium"
  },
  {
    id: "B008",
    title: "Discussing Weekend Plans",
    topic: "家庭生活",
    scenario: "你正在和家人讨论这个周末的活动安排。",
    scenarioEn: "You are discussing weekend activity plans with your family.",
    dialogue: [
      {role: "you", cn: "妈妈，这个周末我们去做什么？", en: "Mom, what are we doing this weekend?"},
      {role: "mom", cn: "你爸爸想去爬山，但我想去外婆家看看她。你觉得呢？", en: "Your dad wants to go hiking, but I want to visit your grandmother. What do you think?"},
      {role: "you", cn: "我们可以周六去外婆家，周日去爬山。这样两边都能照顾到。", en: "We can visit Grandma on Saturday and go hiking on Sunday. That way we can do both."},
      {role: "mom", cn: "好主意！那我去准备一些水果带给你外婆。", en: "Good idea! I will prepare some fruits to bring to your grandmother."},
      {role: "you", cn: "爬山的话，我想叫上表弟一起。可以吗？", en: "For hiking, I would like to invite my cousin to join us. Is that OK?"},
      {role: "mom", cn: "当然可以。让你爸爸开车去接他。记得带好水和零食。", en: "Of course. Let your dad drive to pick him up. Remember to bring water and snacks."}
    ],
    questions: [
      {
        cn: "外婆家离这里远吗？",
        en: "Is Grandma's house far from here?",
        answer: "It is about an hour's drive. We usually take the highway and arrive before lunch."
      },
      {
        cn: "爬哪座山？需要多长时间？",
        en: "Which mountain are we going to hike? How long will it take?",
        answer: "Your dad wants to hike Mount Baiyun. It usually takes about three to four hours to reach the top."
      },
      {
        cn: "表弟喜欢吃什么零食？",
        en: "What snacks does your cousin like?",
        answer: "Your cousin loves chocolate chip cookies and dried mango. I will pick some up from the supermarket tomorrow."
      }
    ],
    fiveAnswers: [
      {q: "What does Dad want to do this weekend?", a: "Dad wants to go hiking."},
      {q: "What does Mom want to do this weekend?", a: "Mom wants to visit Grandma."},
      {q: "When will the family visit Grandma?", a: "The family will visit Grandma on Saturday."},
      {q: "Which mountain will they hike?", a: "They will hike Mount Baiyun."},
      {q: "Who will the speaker invite to join the hiking?", a: "The speaker will invite their cousin."}
    ],
    difficulty: "easy"
  },
  {
    id: "B009",
    title: "Volunteering at a Library",
    topic: "社区服务",
    scenario: "你正在和图书馆管理员讨论申请做图书馆志愿者的事情。",
    scenarioEn: "You are discussing applying to be a library volunteer with a library staff member.",
    dialogue: [
      {role: "you", cn: "你好，我想申请做图书馆的志愿者。", en: "Hello, I would like to apply to be a library volunteer."},
      {role: "staff", cn: "欢迎你！我们正需要志愿者。你每周能来几次？", en: "Welcome! We do need volunteers. How many times a week can you come?"},
      {role: "you", cn: "我周末都可以来，每次大概三到四个小时。", en: "I can come on weekends, about three to four hours each time."},
      {role: "staff", cn: "太好了。主要工作包括整理书架、帮助读者找书和引导新读者注册。", en: "Great. The main tasks include organizing shelves, helping readers find books, and guiding new readers to register."},
      {role: "you", cn: "需要培训吗？", en: "Do I need training?"},
      {role: "staff", cn: "需要的。下周六上午我们有一次培训，大概两个小时。", en: "Yes. We have a training session next Saturday morning, about two hours."}
    ],
    questions: [
      {
        cn: "志愿者有交通补贴吗？",
        en: "Do volunteers get transportation allowance?",
        answer: "Yes, we provide a transportation allowance of fifteen yuan per shift for volunteers who live more than three kilometers away."
      },
      {
        cn: "做满一定时长会有证书吗？",
        en: "Will I get a certificate after completing a certain number of hours?",
        answer: "Yes, volunteers who complete more than fifty hours of service will receive an official volunteer certificate from the library."
      },
      {
        cn: "志愿者可以优先借阅新书吗？",
        en: "Can volunteers borrow new books with priority?",
        answer: "Yes, volunteers can reserve new books one week before they are available to the general public."
      }
    ],
    fiveAnswers: [
      {q: "When can the volunteer come to the library?", a: "The volunteer can come on weekends."},
      {q: "How many hours can the volunteer work each time?", a: "The volunteer can work about three to four hours each time."},
      {q: "What are the main tasks for volunteers?", a: "The main tasks include organizing shelves, helping readers find books, and guiding new readers to register."},
      {q: "When is the training session?", a: "The training session is next Saturday morning."},
      {q: "How many hours of service are needed to get a certificate?", a: "Volunteers need to complete more than fifty hours of service to get a certificate."}
    ],
    difficulty: "medium"
  },
  {
    id: "B010",
    title: "An Exchange Student Program",
    topic: "文化交流",
    scenario: "你正在和老师讨论参加学校交换生项目的事情。",
    scenarioEn: "You are discussing participating in an exchange student program with your teacher.",
    dialogue: [
      {role: "you", cn: "老师，我想了解一下学校的交换生项目。", en: "Teacher, I would like to know about the school's exchange student program."},
      {role: "teacher", cn: "好的！我们有和英国、美国、澳大利亚三个国家的学校合作。你感兴趣的是哪个国家？", en: "Sure! We have partnerships with schools in the UK, the US, and Australia. Which country are you interested in?"},
      {role: "you", cn: "我想去英国。项目持续多长时间？", en: "I would like to go to the UK. How long does the program last?"},
      {role: "teacher", cn: "一个学期，大约四到五个月。你需要住在寄宿家庭里。", en: "One semester, about four to five months. You will need to stay with a host family."},
      {role: "you", cn: "参加项目需要什么条件？", en: "What are the requirements to join the program?"},
      {role: "teacher", cn: "你的英语成绩需要达到八十分以上，还需要通过面试。另外，费用大约是五万元。", en: "Your English score needs to be above eighty, and you need to pass an interview. Also, the cost is about fifty thousand yuan."}
    ],
    questions: [
      {
        cn: "有奖学金可以申请吗？",
        en: "Are there any scholarships I can apply for?",
        answer: "Yes, the school offers two scholarships each year that cover fifty percent of the program cost for students with outstanding academic performance."
      },
      {
        cn: "寄宿家庭是怎么安排的？",
        en: "How are host families arranged?",
        answer: "The partner school carefully selects and screens all host families. They are all located within thirty minutes of the school by bus."
      },
      {
        cn: "项目结束后能获得什么证书？",
        en: "What certificate will I receive after completing the program?",
        answer: "You will receive an official exchange student certificate from the partner school, as well as a transcript of the courses you completed."
      }
    ],
    fiveAnswers: [
      {q: "Which countries does the exchange program partner with?", a: "The program partners with schools in the UK, the US, and Australia."},
      {q: "How long does the exchange program last?", a: "The program lasts one semester, about four to five months."},
      {q: "Where will the student stay during the program?", a: "The student will stay with a host family."},
      {q: "What English score is required to join the program?", a: "The English score needs to be above eighty."},
      {q: "How much does the program cost?", a: "The program costs about fifty thousand yuan."}
    ],
    difficulty: "hard"
  },
  {
    id: "B011",
    title: "Choosing Elective Courses",
    topic: "校园生活",
    scenario: "你正在和同学讨论新学期的选修课选择。",
    scenarioEn: "You are discussing elective course choices for the new semester with your classmate.",
    dialogue: [
      {role: "you", cn: "新学期的选修课你选了什么？", en: "What elective course did you choose for the new semester?"},
      {role: "classmate", cn: "我选了心理学。听说老师讲得很好，而且考试不难。你呢？", en: "I chose Psychology. I heard the teacher is great and the exam is not too hard. What about you?"},
      {role: "you", cn: "我还在犹豫，想选摄影课或者日语课。", en: "I am still hesitating. I want to choose either Photography or Japanese."},
      {role: "classmate", cn: "摄影课很有趣，但需要自己买器材。日语课的话，以后可能有用。", en: "Photography is fun, but you need to buy your own equipment. Japanese might be useful in the future."},
      {role: "you", cn: "两门课的上课时间分别是什么时候？", en: "What are the class times for both courses?"},
      {role: "classmate", cn: "摄影课是周二下午，日语课是周四下午。你可以根据时间来选。", en: "Photography is on Tuesday afternoon, and Japanese is on Thursday afternoon. You can choose based on the schedule."}
    ],
    questions: [
      {
        cn: "选修课的学分是多少？",
        en: "How many credits is the elective course worth?",
        answer: "Each elective course is worth two credits, and you need to complete at least four elective courses to graduate."
      },
      {
        cn: "可以中途退课换课吗？",
        en: "Can I drop or change the course midway?",
        answer: "Yes, you can drop or change courses within the first two weeks of the semester without any penalty. After that, it will appear on your transcript."
      },
      {
        cn: "日语课需要额外买教材吗？",
        en: "Do I need to buy extra textbooks for the Japanese course?",
        answer: "Yes, the Japanese course requires a textbook that costs about sixty yuan. The teacher will also provide free handouts and online materials."
      }
    ],
    fiveAnswers: [
      {q: "What elective course did the classmate choose?", a: "The classmate chose Psychology."},
      {q: "What two courses is the speaker considering?", a: "The speaker is considering Photography and Japanese."},
      {q: "What does the Photography course require?", a: "The Photography course requires buying your own equipment."},
      {q: "When is the Japanese class?", a: "The Japanese class is on Thursday afternoon."},
      {q: "How many credits is each elective course worth?", a: "Each elective course is worth two credits."}
    ],
    difficulty: "medium"
  },
  {
    id: "B012",
    title: "Hotel Check-in",
    topic: "旅游出行",
    scenario: "你正在酒店前台办理入住手续，询问酒店的相关服务。",
    scenarioEn: "You are checking in at a hotel front desk and asking about hotel services.",
    dialogue: [
      {role: "you", cn: "你好，我预订了一间房，姓名是张伟。", en: "Hello, I booked a room. The name is Zhang Wei."},
      {role: "receptionist", cn: "好的，请稍等。是的，一间标准间，住三晚，对吗？", en: "OK, please wait a moment. Yes, a standard room for three nights, correct?"},
      {role: "you", cn: "对的。房间里有免费WiFi吗？", en: "Yes. Is there free WiFi in the room?"},
      {role: "receptionist", cn: "有的，密码在房卡套上。早餐在二楼餐厅，早上七点到九点半。", en: "Yes, the password is on the key card holder. Breakfast is served in the second-floor restaurant from seven to nine thirty a.m."},
      {role: "you", cn: "请问退房时间是几点？", en: "What time is check-out?"},
      {role: "receptionist", cn: "中午十二点之前。如果需要延迟退房，请提前通知我们。", en: "Before twelve noon. If you need a late check-out, please let us know in advance."}
    ],
    questions: [
      {
        cn: "酒店有健身房或游泳池吗？",
        en: "Does the hotel have a gym or a swimming pool?",
        answer: "Yes, the hotel has a gym on the third floor, which is open from six a.m. to ten p.m. There is also an indoor swimming pool on the rooftop."
      },
      {
        cn: "附近有什么推荐的餐厅吗？",
        en: "Are there any recommended restaurants nearby?",
        answer: "Yes, there is a famous local restaurant called Golden Dragon just two blocks away. They serve excellent Cantonese cuisine and offer a ten percent discount for hotel guests."
      },
      {
        cn: "酒店可以帮忙叫出租车吗？",
        en: "Can the hotel help call a taxi?",
        answer: "Of course. You can ask the front desk or use the hotel app to book a taxi. We also have a free shuttle bus to the airport every two hours."
      }
    ],
    fiveAnswers: [
      {q: "What type of room did the guest book?", a: "The guest booked a standard room."},
      {q: "How many nights will the guest stay?", a: "The guest will stay for three nights."},
      {q: "Where is the breakfast served?", a: "Breakfast is served in the second-floor restaurant."},
      {q: "What time is check-out?", a: "Check-out is before twelve noon."},
      {q: "Where is the hotel gym located?", a: "The hotel gym is on the third floor."}
    ],
    difficulty: "easy"
  },
  {
    id: "B013",
    title: "A Dental Appointment",
    topic: "健康医疗",
    scenario: "你去看牙医，向医生描述牙齿疼痛的问题。",
    scenarioEn: "You are visiting a dentist and describing your toothache problem.",
    dialogue: [
      {role: "you", cn: "医生，我右边的一颗牙最近很疼，尤其是吃冷的东西的时候。", en: "Doctor, one of my teeth on the right side has been hurting recently, especially when I eat cold things."},
      {role: "dentist", cn: "让我看看。有一颗蛀牙，需要补一下。不是很严重，不用担心。", en: "Let me take a look. You have a decayed tooth that needs a filling. It is not too serious, do not worry."},
      {role: "you", cn: "补牙需要多长时间？", en: "How long will the filling take?"},
      {role: "dentist", cn: "大概三十到四十分钟。今天就可以做。", en: "About thirty to forty minutes. We can do it today."},
      {role: "you", cn: "补牙后有什么需要注意的吗？", en: "Is there anything I should be careful about after the filling?"},
      {role: "dentist", cn: "两小时内不要吃东西，二十四小时内不要用那侧嚼硬的食物。", en: "Do not eat anything for two hours, and avoid chewing hard food on that side for twenty-four hours."}
    ],
    questions: [
      {
        cn: "补牙费用大概是多少？",
        en: "How much will the filling cost?",
        answer: "The filling costs about two hundred yuan. If you have dental insurance, it can cover about seventy percent of the cost."
      },
      {
        cn: "补的牙能用多久？",
        en: "How long will the filling last?",
        answer: "A good filling can last five to ten years if you take proper care of your teeth, including regular brushing and flossing."
      },
      {
        cn: "需要定期来检查吗？",
        en: "Do I need to come for regular check-ups?",
        answer: "Yes, we recommend a dental check-up every six months to catch any problems early and maintain good oral health."
      }
    ],
    fiveAnswers: [
      {q: "What was the patient's dental problem?", a: "The patient had a decayed tooth on the right side that hurt, especially when eating cold things."},
      {q: "What treatment does the patient need?", a: "The patient needs a filling."},
      {q: "How long will the filling take?", a: "The filling will take about thirty to forty minutes."},
      {q: "How much does the filling cost?", a: "The filling costs about two hundred yuan."},
      {q: "How often should the patient have dental check-ups?", a: "The patient should have a dental check-up every six months."}
    ],
    difficulty: "medium"
  },
  {
    id: "B014",
    title: "A School Sports Event",
    topic: "社交活动",
    scenario: "你正在和同学讨论即将举行的学校运动会。",
    scenarioEn: "You are discussing the upcoming school sports day with your classmate.",
    dialogue: [
      {role: "you", cn: "下周五是学校运动会，你报了什么项目？", en: "Next Friday is the school sports day. What event did you sign up for?"},
      {role: "classmate", cn: "我报了一百米短跑和跳远。你呢？", en: "I signed up for the hundred-meter dash and the long jump. What about you?"},
      {role: "you", cn: "我报了接力赛和篮球投篮。我们班谁报了长跑？", en: "I signed up for the relay race and basketball shooting. Who in our class signed up for the long-distance run?"},
      {role: "classmate", cn: "李明报了一千五百米。他每天早上都在练习。", en: "Li Ming signed up for the fifteen-hundred-meter run. He has been practicing every morning."},
      {role: "you", cn: "运动会几点开始？", en: "What time does the sports day start?"},
      {role: "classmate", cn: "早上八点半开始，下午四点结束。中午有一个小时的休息时间。", en: "It starts at eight thirty in the morning and ends at four in the afternoon. There is a one-hour lunch break."}
    ],
    questions: [
      {
        cn: "运动会如果下雨会改期吗？",
        en: "Will the sports day be rescheduled if it rains?",
        answer: "Yes, if it rains heavily, the sports day will be postponed to the following Friday. Light rain will not affect the schedule."
      },
      {
        cn: "每个项目的获奖者有什么奖品？",
        en: "What prizes do the winners of each event get?",
        answer: "The top three in each event receive medals and certificates. The overall class champion receives a trophy and a pizza party."
      },
      {
        cn: "家长可以来观看吗？",
        en: "Can parents come to watch?",
        answer: "Yes, parents are welcome to attend. They can sit in the designated guest area on the west side of the field."
      }
    ],
    fiveAnswers: [
      {q: "What events did the classmate sign up for?", a: "The classmate signed up for the hundred-meter dash and the long jump."},
      {q: "Who signed up for the long-distance run?", a: "Li Ming signed up for the fifteen-hundred-meter run."},
      {q: "What events did the speaker sign up for?", a: "The speaker signed up for the relay race and basketball shooting."},
      {q: "What time does the sports day start?", a: "The sports day starts at eight thirty in the morning."},
      {q: "How long is the lunch break?", a: "The lunch break is one hour."}
    ],
    difficulty: "easy"
  },
  {
    id: "B015",
    title: "An Online Learning Platform",
    topic: "科技应用",
    scenario: "你正在和同学讨论一个在线学习平台的使用体验。",
    scenarioEn: "You are discussing the experience of using an online learning platform with your classmate.",
    dialogue: [
      {role: "you", cn: "你用那个在线学习平台了吗？感觉怎么样？", en: "Have you used that online learning platform? How do you feel about it?"},
      {role: "classmate", cn: "用了，挺好的。上面有很多名师课程，还有互动练习。", en: "Yes, it is pretty good. There are many courses by famous teachers, plus interactive exercises."},
      {role: "you", cn: "课程可以回看吗？我有时候来不及看直播。", en: "Can I watch the courses again? Sometimes I cannot catch the live broadcast."},
      {role: "classmate", cn: "可以的，所有直播课都会录下来，三天内可以回看。", en: "Yes, all live classes are recorded and can be replayed within three days."},
      {role: "you", cn: "互动练习是怎么做的？", en: "How do the interactive exercises work?"},
      {role: "classmate", cn: "每节课后都有小测验，系统会自动打分并给出解析。还可以和同学在线讨论。", en: "After each class, there is a short quiz. The system grades it automatically and provides explanations. You can also discuss with classmates online."}
    ],
    questions: [
      {
        cn: "平台上的课程覆盖哪些科目？",
        en: "What subjects do the courses on the platform cover?",
        answer: "The platform covers all major subjects including English, math, physics, chemistry, and biology, from middle school to high school level."
      },
      {
        cn: "使用平台需要什么设备？",
        en: "What equipment do I need to use the platform?",
        answer: "You can use it on a computer, tablet, or smartphone. For live classes, we recommend using a device with a camera and microphone for better interaction."
      },
      {
        cn: "平台有学习进度追踪功能吗？",
        en: "Does the platform have a learning progress tracking feature?",
        answer: "Yes, the platform tracks your study time, quiz scores, and completion rate. It also generates a weekly progress report that you can share with your parents or teachers."
      }
    ],
    fiveAnswers: [
      {q: "What does the online learning platform offer?", a: "It offers courses by famous teachers and interactive exercises."},
      {q: "How long can live classes be replayed?", a: "Live classes can be replayed within three days."},
      {q: "What happens after each class?", a: "There is a short quiz that is graded automatically with explanations."},
      {q: "What subjects does the platform cover?", a: "The platform covers English, math, physics, chemistry, and biology."},
      {q: "What does the weekly progress report include?", a: "It includes study time, quiz scores, and completion rate, and can be shared with parents or teachers."}
    ],
    difficulty: "hard"
  }
];

// ============================================================
// Part C 故事复述（15套）
// 话题覆盖：励志、感恩、勇气、智慧、友谊、诚信、坚持、善良、成长、冒险
// ============================================================
DATA.partC = [
  {
    id: "C001",
    title: "The Boy Who Never Gave Up",
    topic: "励志",
    summary: "一个数学成绩不好的男孩，在老师的鼓励下坚持不懈地努力，最终在数学竞赛中获奖。",
    keywords: [
      {en: "struggle", cn: "挣扎"},
      {en: "encourage", cn: "鼓励"},
      {en: "practice", cn: "练习"},
      {en: "improve", cn: "提高"},
      {en: "succeed", cn: "成功"}
    ],
    story: "There was a boy named Tom who struggled with mathematics. Every time he took a math test, he felt nervous and frustrated. His classmates often teased him, saying he would never be good at numbers. One day, his math teacher, Mr. Brown, noticed his frustration and asked him to stay after class. Mr. Brown told Tom that nobody is born good at everything, and that the key to success is practice and perseverance. He offered to help Tom every day after school for thirty minutes. Tom accepted the offer and began working hard. At first, the progress was slow, and Tom wanted to give up many times. But Mr. Brown always encouraged him, saying that every small step counted. Months passed, and Tom's grades began to improve. By the end of the year, he participated in a school math competition and won second place. Tom learned that with determination and hard work, anything is possible.",
    difficulty: "medium"
  },
  {
    id: "C002",
    title: "A Letter of Gratitude",
    topic: "感恩",
    summary: "一位学生写信感谢曾经帮助过自己的英语老师，回忆老师如何改变了自己的人生。",
    keywords: [
      {en: "gratitude", cn: "感恩"},
      {en: "teacher", cn: "老师"},
      {en: "inspire", cn: "激励"},
      {en: "confident", cn: "自信的"},
      {en: "future", cn: "未来"}
    ],
    story: "Emily was a shy girl who lacked confidence in speaking English. She would sit quietly in the back of the classroom, afraid to open her mouth. Her English teacher, Miss Wang, noticed this and decided to help. Every day, Miss Wang would ask Emily a simple question and patiently wait for her answer. She never criticized Emily's mistakes. Instead, she praised every effort she made. Gradually, Emily began to speak up more in class. Miss Wang also encouraged her to join the school's English speech contest. With her teacher's support, Emily practiced day and night. On the day of the contest, she stood on stage and delivered her speech with confidence. She won the first prize. Years later, Emily became a successful English teacher herself. She wrote a letter to Miss Wang, thanking her for believing in her when she did not believe in herself. She promised to do the same for her own students.",
    difficulty: "medium"
  },
  {
    id: "C003",
    title: "The Brave Lifeguard",
    topic: "勇气",
    summary: "一位年轻的救生员在面对危险时克服恐惧，勇敢地救起了一名溺水者。",
    keywords: [
      {en: "lifeguard", cn: "救生员"},
      {en: "drown", cn: "溺水"},
      {en: "courage", cn: "勇气"},
      {en: "rescue", cn: "营救"},
      {en: "hero", cn: "英雄"}
    ],
    story: "Jack was a seventeen-year-old lifeguard at the city beach. He had been trained for emergencies, but he had never faced a real life-or-death situation. One hot summer afternoon, the beach was crowded with people. Suddenly, Jack heard someone screaming for help. A man was struggling in the water, about fifty meters from the shore. Jack's heart raced. He had never rescued anyone before, and the waves were rough that day. For a moment, fear gripped him. But then he remembered his training. He grabbed his rescue tube, ran into the water, and swam as fast as he could toward the man. The man was panicking and tried to grab Jack, but Jack stayed calm and used the techniques he had learned. He managed to pull the man safely to shore. The crowd cheered. The man thanked Jack with tears in his eyes. That day, Jack learned that courage is not the absence of fear, but acting despite it.",
    difficulty: "medium"
  },
  {
    id: "C004",
    title: "The Wise Old Man",
    topic: "智慧",
    summary: "一位智慧的老人用巧妙的方法解决了村里两个邻居之间的纠纷。",
    keywords: [
      {en: "dispute", cn: "纠纷"},
      {en: "neighbor", cn: "邻居"},
      {en: "wise", cn: "智慧的"},
      {en: "divide", cn: "划分"},
      {en: "share", cn: "分享"}
    ],
    story: "In a small village, two neighbors, Mr. Zhang and Mr. Li, had been arguing for months over a piece of land. Both claimed that a narrow strip of land between their houses belonged to them. The argument became so bitter that they stopped talking to each other. One day, an old man named Grandpa Wang heard about their dispute. He went to see both of them and said he had a simple solution. He suggested that they turn the land into a shared garden instead of dividing it. He said that if they worked together to grow flowers and vegetables, they would both benefit, and their children would have a beautiful place to play. The two men thought about it and agreed. They worked side by side, and slowly, their anger faded. They became good friends, and the garden became the most beautiful spot in the village. Grandpa Wang's wisdom had turned enemies into friends.",
    difficulty: "hard"
  },
  {
    id: "C005",
    title: "Two Friends in the Storm",
    topic: "友谊",
    summary: "两个好朋友在暴风雪中互相帮助，最终安全回到家中。",
    keywords: [
      {en: "storm", cn: "暴风雪"},
      {en: "lost", cn: "迷路"},
      {en: "friendship", cn: "友谊"},
      {en: "support", cn: "支持"},
      {en: "survive", cn: "幸存"}
    ],
    story: "Mike and David were best friends who loved hiking. One winter day, they decided to hike up a mountain despite the weather forecast warning of a possible storm. Halfway up the mountain, a heavy snowstorm hit. The wind was howling, and they could barely see anything. They tried to find their way back, but soon realized they were lost. David started to panic, but Mike stayed calm. He found a small cave where they could shelter from the wind. They had only one jacket between them, so Mike gave it to David, who was shivering badly. They huddled together to keep warm. Mike kept talking to David to keep him awake and positive. Hours later, the storm finally stopped, and they were able to find their way down the mountain with the help of a search team. David later said that without Mike's friendship and courage, he might not have survived. Their bond grew even stronger after that experience.",
    difficulty: "medium"
  },
  {
    id: "C006",
    title: "The Honest Student",
    topic: "诚信",
    summary: "一名学生捡到一笔钱后毫不犹豫地交给了警察，最终找到了失主。",
    keywords: [
      {en: "wallet", cn: "钱包"},
      {en: "honest", cn: "诚实的"},
      {en: "return", cn: "归还"},
      {en: "reward", cn: "奖励"},
      {en: "integrity", cn: "正直"}
    ],
    story: "One afternoon, a high school student named Lin Tao was walking home from school when he noticed a brown leather wallet lying on the sidewalk. He picked it up and opened it. Inside, he found a large amount of cash, several bank cards, and an ID card. Lin Tao knew that someone must be very worried about losing it. Although he came from a poor family and could have used the money, he never thought about keeping it. He went straight to the nearest police station and handed the wallet to a police officer. The officer praised him for his honesty and contacted the owner. The owner, an elderly businessman, was overjoyed. He offered Lin Tao a reward of one thousand yuan, but Lin Tao politely refused, saying that honesty should not come with a price. The businessman was deeply moved by the young man's integrity. He later established a scholarship fund at Lin Tao's school to help students in need.",
    difficulty: "easy"
  },
  {
    id: "C007",
    title: "The Marathon Runner",
    topic: "坚持",
    summary: "一位马拉松选手在比赛中受伤，但他坚持跑完全程，体现了不屈不挠的精神。",
    keywords: [
      {en: "marathon", cn: "马拉松"},
      {en: "injury", cn: "受伤"},
      {en: "persist", cn: "坚持"},
      {en: "finish", cn: "完成"},
      {en: "inspire", cn: "激励"}
    ],
    story: "Sarah had trained for months to run in the city marathon. She was determined to finish the race and had prepared both physically and mentally. The race started well, and she was keeping a good pace. However, at the twenty-kilometer mark, she felt a sharp pain in her right knee. She had injured it during training, and now it was bothering her again. Every step was painful. Many runners passed her, and some people along the road suggested she stop and rest. But Sarah shook her head. She told herself that giving up was not an option. She slowed her pace and kept moving forward, one step at a time. The pain was intense, but her determination was stronger. As she approached the finish line, the crowd began to cheer for her. When she finally crossed the line, tears rolled down her face. She did not win the race, but she had won something more important, the battle against herself.",
    difficulty: "medium"
  },
  {
    id: "C008",
    title: "The Kind Stranger",
    topic: "善良",
    summary: "一位陌生人的善良之举帮助了一个迷路的小女孩找到了家人。",
    keywords: [
      {en: "lost", cn: "迷路"},
      {en: "stranger", cn: "陌生人"},
      {en: "kindness", cn: "善良"},
      {en: "safe", cn: "安全"},
      {en: "grateful", cn: "感激的"}
    ],
    story: "On a cold winter evening, a little girl named Lily got separated from her mother in a crowded shopping mall. She was only five years old and began to cry, feeling scared and alone. Many people walked past her without stopping. Then, a young woman named Anna noticed the crying girl. She knelt down and gently asked Lily what was wrong. Through her tears, Lily explained that she could not find her mommy. Anna comforted her and said she would help her find her mother. She took Lily to the mall's information desk and asked the staff to make an announcement. While they waited, Anna bought Lily a warm drink and stayed with her, telling her stories to keep her calm. Ten minutes later, Lily's mother rushed to the desk, crying with relief. She hugged Lily tightly and turned to thank Anna. Anna simply smiled and said she was glad she could help, then quietly disappeared into the crowd.",
    difficulty: "easy"
  },
  {
    id: "C009",
    title: "Learning to Be Independent",
    topic: "成长",
    summary: "一个依赖父母的学生在外求学过程中学会了独立生活。",
    keywords: [
      {en: "independent", cn: "独立的"},
      {en: "laundry", cn: "洗衣服"},
      {en: "cook", cn: "做饭"},
      {en: "grow", cn: "成长"},
      {en: "confident", cn: "自信的"}
    ],
    story: "When Kevin left home for college, he had never cooked a meal or done his own laundry. His parents had always taken care of everything for him. In the first week of college, Kevin struggled. He burned his instant noodles, shrunk his favorite sweater in the washing machine, and could not keep his dorm room clean. He called his mother every night, feeling homesick and helpless. His roommate, Alex, noticed his struggles and offered to help. Alex taught Kevin how to do laundry, cook simple meals, and manage his time. Kevin was embarrassed at first, but he was determined to learn. Week by week, he became more capable. He learned to make fried rice, wash his clothes properly, and even fix a leaking faucet. By the end of the semester, Kevin had transformed from a dependent boy into a confident young adult. He called his mother and said he could take care of himself now.",
    difficulty: "medium"
  },
  {
    id: "C010",
    title: "The Mountain Adventure",
    topic: "冒险",
    summary: "一群朋友在登山冒险中遇到了意想不到的困难，但他们团结一致最终成功登顶。",
    keywords: [
      {en: "adventure", cn: "冒险"},
      {en: "challenge", cn: "挑战"},
      {en: "teamwork", cn: "团队合作"},
      {en: "summit", cn: "山顶"},
      {en: "proud", cn: "自豪的"}
    ],
    story: "Three friends, Alex, Ben, and Carla, decided to climb Mount Green, the tallest mountain in their region. They had planned for weeks and packed all the necessary gear. The climb started smoothly, but as they reached the halfway point, the trail became steep and rocky. Carla slipped and twisted her ankle. She wanted to turn back, but Alex and Ben refused to leave her behind. They made a makeshift splint for her ankle using a scarf and trekking poles. Then, they took turns supporting her as they continued the climb. The going was slow and exhausting. At one point, they had to cross a narrow ledge with a steep drop on one side. Ben went first, then guided Carla across, while Alex followed from behind. After six hours of challenging climbing, they finally reached the summit. The view from the top was breathtaking. They hugged each other, feeling proud of overcoming the challenge together as a team.",
    difficulty: "hard"
  },
  {
    id: "C011",
    title: "From Failure to Success",
    topic: "励志",
    summary: "一位年轻创业者在经历多次失败后最终取得成功的故事。",
    keywords: [
      {en: "failure", cn: "失败"},
      {en: "business", cn: "生意"},
      {en: "learn", cn: "学习"},
      {en: "adapt", cn: "适应"},
      {en: "success", cn: "成功"}
    ],
    story: "At the age of twenty-two, Lisa started her first business, a small online clothing store. She was excited and full of hope. However, within six months, the business failed because she had not researched the market properly. She lost all her savings. Many people told her to give up and find a regular job. But Lisa refused. She analyzed her mistakes and realized she needed to learn more about business management. She took online courses, read books, and talked to successful entrepreneurs. A year later, she started again, this time with a better plan. She focused on a specific niche, eco-friendly clothing, and used social media to promote her products. The business grew slowly but steadily. There were still challenges along the way, but each time Lisa faced a problem, she remembered her past failure and used it as a lesson. After three years of hard work, her company became one of the top eco-fashion brands in the country.",
    difficulty: "hard"
  },
  {
    id: "C012",
    title: "The Teacher's Gift",
    topic: "感恩",
    summary: "一位老师在退休前收到学生们的感恩礼物，回忆起自己教学生涯中最珍贵的时刻。",
    keywords: [
      {en: "retire", cn: "退休"},
      {en: "gift", cn: "礼物"},
      {en: "memories", cn: "回忆"},
      {en: "impact", cn: "影响"},
      {en: "touch", cn: "感动"}
    ],
    story: "After thirty-five years of teaching, Mr. Chen was retiring. On his last day, the school held a special ceremony for him. His former students from different years came back to say goodbye. One student, now a doctor, stood up and said that Mr. Chen was the first person who believed in him. When everyone else thought he was a troublemaker, Mr. Chen saw something different in him and told him he had potential, which changed his life. Another student, now a writer, said that Mr. Chen taught him to love reading and gave him a book when he was going through a difficult time, which opened a whole new world for him. Then, the students presented Mr. Chen with a scrapbook filled with photos, letters, and memories from his teaching career. Mr. Chen held the book with trembling hands and tears in his eyes. He said it was the most precious gift he had ever received.",
    difficulty: "medium"
  },
  {
    id: "C013",
    title: "Speaking Up on Stage",
    topic: "勇气",
    summary: "一个胆小的女孩克服了舞台恐惧，在学校演讲比赛中展现了勇气。",
    keywords: [
      {en: "shy", cn: "害羞的"},
      {en: "speech", cn: "演讲"},
      {en: "nervous", cn: "紧张的"},
      {en: "overcome", cn: "克服"},
      {en: "proud", cn: "自豪的"}
    ],
    story: "Mei was the quietest girl in her class. She was so shy that she could barely speak in front of a small group. When her English teacher announced a speech contest, Mei wanted to participate but was terrified. Her best friend, Lucy, encouraged her to sign up, saying she had a beautiful voice and just needed to believe in herself. Mei decided to give it a try. She wrote her speech and practiced in front of her mirror every night. As the contest day approached, her anxiety grew. On the day of the contest, her hands were shaking and her heart was pounding. When her name was called, she walked to the stage on trembling legs. She looked at the audience and froze. For a moment, she wanted to run away. Then she saw Lucy smiling at her from the front row, giving her a thumbs up. Mei took a deep breath and began to speak. Her voice grew stronger with each sentence, and by the end, the audience was applauding warmly.",
    difficulty: "medium"
  },
  {
    id: "C014",
    title: "The New Classmate",
    topic: "友谊",
    summary: "班里的同学们主动帮助一位新来的转学生融入新环境，建立了深厚的友谊。",
    keywords: [
      {en: "new", cn: "新的"},
      {en: "classmate", cn: "同学"},
      {en: "welcome", cn: "欢迎"},
      {en: "lonely", cn: "孤独的"},
      {en: "friendship", cn: "友谊"}
    ],
    story: "When Daniel transferred to a new school in the middle of the semester, he felt lonely and out of place. He did not know anyone and missed his old friends. During lunch, he sat alone at a table in the corner of the cafeteria. A boy named Peter noticed him and walked over, asking if he wanted to sit with his group. Daniel hesitated, then nodded. Peter introduced him to his friends, who welcomed him warmly. Over the next few weeks, Peter made sure Daniel was never alone. He showed him around the school, helped him catch up with his studies, and invited him to join the basketball team. Daniel was grateful but too shy to express it. One day, he brought homemade cookies to school and gave them to Peter and his friends, thanking them for making him feel at home. Peter smiled and said that was what friends were for. From that day on, Daniel knew he had found true friends.",
    difficulty: "easy"
  },
  {
    id: "C015",
    title: "The Young Musician",
    topic: "坚持",
    summary: "一位年轻的钢琴学习者经过多年坚持不懈的练习，最终在音乐会上大放异彩。",
    keywords: [
      {en: "piano", cn: "钢琴"},
      {en: "practice", cn: "练习"},
      {en: "patience", cn: "耐心"},
      {en: "perform", cn: "表演"},
      {en: "dream", cn: "梦想"}
    ],
    story: "From the age of six, Sophie dreamed of becoming a pianist. Her parents enrolled her in piano lessons, but the journey was far from easy. For the first few years, Sophie hated practicing. The scales were boring, and her fingers often hit the wrong keys. She wanted to quit many times. Her piano teacher, Mrs. Liu, told her that talent is important, but practice is what makes a musician great. Sophie decided to keep going. She practiced for one hour every day, then two hours, and eventually three hours as she grew older. There were times when she felt frustrated and wanted to smash the piano keys. But she never gave up. At sixteen, Sophie entered a national piano competition. She was nervous, but when her fingers touched the keys, all her fear disappeared. She played with such passion and skill that the audience was spellbound. When she finished, the hall erupted in applause. Sophie won first place, and her dream had finally come true.",
    difficulty: "medium"
  }
];
