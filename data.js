var DATA = {};

// ============================================================
// Part A 模仿朗读（20套：8套真题 + 12套模拟）
// 话题覆盖：自然环保、科技发明、历史文化、健康生活、教育成长、
//           社会现象、体育运动、艺术音乐、旅行探索、人物故事
// ============================================================
DATA.partA = [
  // ---- SoloTalk测试套题18（导入格式真题） ----
  {
    id: "A_S18",
    title: "SoloTalk套题18 - Antarctica Penguins",
    topic: "自然环保",
    source: "SoloTalk测试套题18（高考真题格式）",
    words: 97,
    text: "At the southernmost extreme of our planet, the continent of Antarctica is as large as the United States of America. Ninety percent of all the world's ice is found here. This frozen world is largely deserted until the start of spring. Adelie penguins are in a hurry. The clock is ticking. Instead of waiting for the summer melt, the new arrivals hasten south over the frozen sea. They have come here to breed, but polar summers are so short, they must be in position before it. As the sea ice melt, life can journey farther south.",
    difficulty: "medium"
  },
  // ---- 8套真题 ----
  {
    id: "A001",
    title: "Chinese New Year and Ice Breaking",
    topic: "社会现象",
    source: "2025年广东高考真题 Test A",
    words: 97,
    text: "As Chinese New Year draws near, while some are having fun on ice, for others, ice is an obstruction. While sailing an ice-bound sea, a ship can very easily get stuck. But it can't suppress people's desire to go home for reunion. That's why people have come up with this combination. Whenever they run into obstructing sea ice, the excavator comes into play, breaking up the ice and allowing passengers to return home safely. This is what Chinese people are like. No matter how far away they are or how difficult it is, they get together for reunion on this day.",
    difficulty: "medium"
  },
  {
    id: "A002",
    title: "Ocean Plastic Pollution",
    topic: "自然环保",
    source: "2025年广东高考真题 Test C",
    words: 93,
    text: "Our oceans give us life and food. They can feed one billion people every day forever. But plastic waste is hurting our oceans. Every minute, a truckload of plastic goes into the sea. Plastic floats on top, mixes with water, and sits at the bottom of the ocean. It never disappears. Instead, it breaks into tiny pieces called microplastics. These microplastics are eaten by fish and other sea animals, and eventually end up on our plates. We must act now to reduce plastic waste and protect our oceans for future generations.",
    difficulty: "medium"
  },
  {
    id: "A003",
    title: "Wave Energy",
    topic: "自然环保",
    source: "2024年广东高考真题 Test C",
    words: 93,
    text: "Wave energy comes from ocean waves, which are endless because they're caused by how the Earth and Moon move. This energy can be turned into electricity, even from small waves. Unlike fossil fuels, wave energy is clean and renewable. It produces no harmful gases and will never run out. Many countries are now building wave energy stations along their coastlines. Scientists believe that in the future, wave energy could power millions of homes around the world. However, the technology is still developing, and there are challenges to overcome, such as high costs and the impact on marine life.",
    difficulty: "medium"
  },
  {
    id: "A004",
    title: "Childhood Memories",
    topic: "教育成长",
    source: "2023年广东高考真题 Test A",
    words: 97,
    text: "When we think of our childhood, we often think of it as a time of long school holidays, a time of exploration. We were free to play, to run, and to dream. We built forts out of cardboard boxes and turned backyards into magical kingdoms. We collected rocks, chased butterflies, and climbed trees. Our imagination had no limits. As we grow older, the responsibilities of adult life can make us forget the simple joys of those early years. But the memories remain, reminding us of a time when the world was full of wonder and every day was an adventure waiting to happen.",
    difficulty: "easy"
  },
  {
    id: "A005",
    title: "Music: The Universal Language",
    topic: "艺术音乐",
    source: "2023年广东高考真题 Test B",
    words: 98,
    text: "Music. It's the universal language we all know, we all feel. It holds the remarkable power to bring us together. Across cultures and continents, music speaks directly to our hearts. A beautiful melody can make us smile, bring tears to our eyes, or inspire us to dance. Scientists have found that music can reduce stress, improve memory, and even help patients recover from illness. In schools, music education helps children develop creativity and social skills. Whether we are singing, playing an instrument, or simply listening with our eyes closed, music enriches our lives and connects us to one another in ways that words alone cannot.",
    difficulty: "medium"
  },
  {
    id: "A006",
    title: "Personal Habits and Routines",
    topic: "健康生活",
    source: "2022年广东高考真题 Test A",
    words: 104,
    text: "Everyone has their own routine and personal habits. Although it is difficult to change them, sometimes it's a good idea to try something different, like Rodman and Gina. Rodman used to be a night owl, staying up late and struggling to wake up in the morning. Gina was an early bird, always rising before sunrise. When they decided to swap routines for a month, both discovered unexpected benefits. Rodman found that mornings were peaceful and productive, while Gina learned that late nights offered quiet time for reflection. Sometimes, stepping out of our comfort zone and trying a new routine can open our eyes to new possibilities and improve our lives in surprising ways.",
    difficulty: "medium"
  },
  {
    id: "A007",
    title: "Elephants Searching for Water",
    topic: "自然环保",
    source: "2022年广东高考真题 Test B",
    words: 104,
    text: "A week has passed. The elephants are still searching for water. They have traveled over fifty kilometers from their original habitat, crossing roads and farmlands. The dry season has been particularly harsh this year, and their usual water sources have dried up. The herd, led by a wise matriarch, moves with determination. Young calves struggle to keep up, but the adults protect them carefully. Local authorities and villagers have been working together to guide the elephants safely and provide them with food and water. Scientists are monitoring their journey closely, hoping to understand why these magnificent creatures left their home and how we can better protect them in the future.",
    difficulty: "hard"
  },
  {
    id: "A008",
    title: "Melting Ice and Polar Bears",
    topic: "自然环保",
    source: "2021年广东高考真题 Test A",
    words: 101,
    text: "In recent years, more and more ice has been melting. And for one animal, this is a critical issue. Polar bears depend on sea ice for hunting, traveling, and breeding. As the ice melts earlier each spring and freezes later each autumn, polar bears are forced to swim longer distances to find food. Many are losing weight and struggling to survive. Scientists warn that if global temperatures continue to rise, polar bears could face extinction within this century. The shrinking ice also affects the entire Arctic ecosystem, from seals to fish to the indigenous peoples who have lived there for thousands of years. Protecting polar bears means addressing climate change.",
    difficulty: "hard"
  },
  // ---- 12套模拟 ----
  {
    id: "A009",
    title: "The Amazon Rainforest",
    topic: "自然环保",
    source: "广东高考模拟卷",
    words: 103,
    text: "The Amazon rainforest is the largest tropical rainforest in the world, covering over five million square kilometers across nine countries in South America. Often called the lungs of the Earth, it produces about twenty percent of the world's oxygen. The rainforest is home to millions of species of plants, animals, and insects, many of which have not yet been discovered by scientists. Unfortunately, deforestation has become a serious problem in recent decades. Large areas of the forest are being cut down for farming and logging. Protecting the Amazon is essential for maintaining the balance of our planet's climate and preserving its incredible biodiversity.",
    difficulty: "medium"
  },
  {
    id: "A010",
    title: "Artificial Intelligence",
    topic: "科技发明",
    source: "广东高考模拟卷",
    words: 99,
    text: "Artificial intelligence, or AI, is one of the most significant technological advancements of the twenty-first century. It refers to the development of computer systems that can perform tasks normally requiring human intelligence, such as recognizing speech, making decisions, and translating languages. In recent years, AI has been widely applied in various fields, including healthcare, education, transportation, and entertainment. While AI brings enormous benefits to society, it also raises concerns about job displacement and data privacy. As AI technology continues to evolve rapidly, it is crucial that we develop ethical guidelines to ensure it serves the best interests of humanity.",
    difficulty: "hard"
  },
  {
    id: "A011",
    title: "The Great Wall of China",
    topic: "历史文化",
    source: "广东高考模拟卷",
    words: 100,
    text: "The Great Wall of China is one of the most famous landmarks in the world. It stretches over twenty-one thousand kilometers across northern China, winding through mountains, valleys, and deserts. The wall was built over two thousand years ago to protect the Chinese empire from invasions by northern tribes. Millions of workers spent decades constructing different sections of the wall, using bricks, stones, and packed earth. Today, the Great Wall is a UNESCO World Heritage Site and attracts millions of visitors every year. It stands as a remarkable symbol of Chinese history, culture, and the determination of the Chinese people.",
    difficulty: "easy"
  },
  {
    id: "A012",
    title: "Ancient Egyptian Civilization",
    topic: "历史文化",
    source: "广东高考模拟卷",
    words: 103,
    text: "Ancient Egyptian civilization is one of the oldest and most fascinating civilizations in human history. It developed along the banks of the Nile River more than five thousand years ago. The ancient Egyptians were remarkable builders, engineers, and artists. They constructed massive pyramids and temples that still stand today, showcasing their extraordinary architectural skills. They also invented a writing system called hieroglyphics, which used pictures and symbols to represent words and sounds. The Egyptians made significant contributions to mathematics, medicine, and astronomy. Their rich culture and achievements continue to captivate historians and archaeologists, offering valuable insights into the brilliance of the ancient world.",
    difficulty: "medium"
  },
  {
    id: "A013",
    title: "The Importance of Sleep",
    topic: "健康生活",
    source: "广东高考模拟卷",
    words: 100,
    text: "Sleep is essential for our physical and mental health. When we sleep, our bodies repair damaged cells, strengthen our immune system, and store energy for the next day. Studies show that adults need seven to nine hours of sleep each night to function properly. Lack of sleep can lead to many problems, including poor concentration, weakened memory, and increased risk of illness. To improve sleep quality, experts recommend going to bed at the same time every night, avoiding screens before bedtime, and keeping the bedroom cool and dark. Good sleep habits can make a big difference in our daily lives.",
    difficulty: "easy"
  },
  {
    id: "A014",
    title: "Benefits of Regular Exercise",
    topic: "健康生活",
    source: "广东高考模拟卷",
    words: 103,
    text: "Regular exercise is one of the most effective ways to maintain good health and improve overall well-being. Physical activity strengthens the heart, builds muscle, and helps control body weight. It also releases chemicals in the brain called endorphins, which naturally boost our mood and reduce feelings of stress and anxiety. Research has shown that people who exercise regularly tend to live longer and have a lower risk of chronic diseases such as diabetes and heart disease. Even thirty minutes of moderate exercise a day, such as walking, swimming, or cycling, can bring significant health benefits. Start small and gradually increase your activity level.",
    difficulty: "medium"
  },
  {
    id: "A015",
    title: "The Value of Reading",
    topic: "教育成长",
    source: "广东高考模拟卷",
    words: 106,
    text: "Reading is one of the most valuable habits a person can develop. It opens our minds to new ideas, expands our knowledge, and improves our language skills. When we read, we travel to different places and times without leaving our homes. We can learn about history, science, culture, and the lives of interesting people. Reading also helps improve our concentration and memory. Studies have shown that children who read regularly tend to perform better in school. Whether it is a novel, a biography, or a science magazine, every book we read adds something meaningful to our lives. So pick up a book and start reading today.",
    difficulty: "easy"
  },
  {
    id: "A016",
    title: "The Power of Lifelong Learning",
    topic: "教育成长",
    source: "广东高考模拟卷",
    words: 103,
    text: "Lifelong learning is the continuous pursuit of knowledge throughout one's life. In today's rapidly changing world, the skills we learned in school may quickly become outdated. New technologies, scientific discoveries, and social changes require us to constantly update our knowledge and abilities. Lifelong learning can take many forms, such as reading books, attending workshops, taking online courses, or learning from colleagues. It not only enhances our career prospects but also keeps our minds sharp and active as we age. Research suggests that people who keep learning throughout their lives tend to have better mental health and greater life satisfaction. Learning truly never stops.",
    difficulty: "medium"
  },
  {
    id: "A017",
    title: "The Olympic Spirit",
    topic: "体育运动",
    source: "广东高考模拟卷",
    words: 106,
    text: "The Olympic Games are the world's largest international sporting event, bringing together athletes from over two hundred countries. The Games are held every four years, alternating between summer and winter editions. The Olympic motto, faster, higher, stronger, encourages athletes to push beyond their limits and strive for excellence. Beyond competition, the Olympics promote peace, friendship, and mutual understanding among nations. Athletes from different backgrounds and cultures come together in the Olympic Village, sharing meals, stories, and experiences. The opening and closing ceremonies, featuring music, dance, and spectacular performances, celebrate the host country's culture. The Olympics remind us that sports can unite the world in remarkable ways.",
    difficulty: "easy"
  },
  {
    id: "A018",
    title: "Traditional Chinese Painting",
    topic: "艺术音乐",
    source: "广东高考模拟卷",
    words: 109,
    text: "Traditional Chinese painting is one of the oldest continuous artistic traditions in the world. It uses a brush, ink, and paper or silk to create beautiful images of landscapes, flowers, birds, and figures. Unlike Western painting, which focuses on realistic details and perspective, Chinese painting emphasizes the spirit and essence of the subject. Artists often leave empty spaces on the paper, believing that what is left unsaid can be just as meaningful as what is painted. Many Chinese paintings also include calligraphy and poetry, combining visual art with literature. Painters such as Qi Baishi and Xu Beihong have created masterpieces that continue to inspire art lovers around the world.",
    difficulty: "easy"
  },
  {
    id: "A019",
    title: "Space Exploration",
    topic: "旅行探索",
    source: "广东高考模拟卷",
    words: 109,
    text: "Space exploration represents one of humanity's greatest adventures. Since the first satellite was launched in nineteen fifty-seven, humans have made remarkable progress in understanding the universe. Astronauts have walked on the Moon, robots have explored the surface of Mars, and telescopes have captured stunning images of distant galaxies. The International Space Station, orbiting four hundred kilometers above the Earth, serves as a permanent laboratory where scientists conduct experiments in microgravity. Despite the enormous costs and risks involved, space exploration continues to drive technological innovation and inspire future generations. Many scientists believe that establishing human settlements on other planets may eventually become necessary for the long-term survival of our species.",
    difficulty: "hard"
  },
  {
    id: "A020",
    title: "Marie Curie",
    topic: "人物故事",
    source: "广东高考模拟卷",
    words: 110,
    text: "Marie Curie was one of the most brilliant scientists in history. Born in Poland in eighteen sixty-seven, she moved to Paris to study physics and mathematics. Despite facing numerous challenges as a woman in science, she conducted groundbreaking research on radioactivity. Together with her husband Pierre, she discovered two new elements, polonium and radium. In nineteen oh three, she became the first woman to win a Nobel Prize, and in nineteen eleven, she won a second Nobel Prize in a different field of science. During World War I, she developed mobile X-ray units to help treat wounded soldiers. Her dedication to science and selfless service continue to inspire people worldwide.",
    difficulty: "medium"
  }
];

// ============================================================
// Part B 角色扮演（20套：8套真题 + 12套模拟）
// 每套包含：情景对话、三问（cn/en/answer）、五答（q/a）
// ============================================================
DATA.partB = [
  // ---- SoloTalk测试套题18（导入格式真题） ----
  {
    id: "B_S18",
    title: "SoloTalk套题18 - Classical Music Talk",
    topic: "艺术音乐",
    source: "SoloTalk测试套题18（高考真题格式）",
    scenario: "角色：你是Paul。\n任务：（1）与Jenny谈论兴趣爱好；\n(2)根据谈话内容回答朋友的提问。\n生词：classicalmusic古典音乐 incredible极好的 depth深度",
    scenarioEn: "You are Paul, talking with Jenny about hobbies and interests.",
    dialogue: [
      {role: "Paul", cn: "你好Jenny，很高兴在这里见到你。最近怎么样？", en: "Hello, Jenny. It's glad to see you here. How's everything going?"},
      {role: "Jenny", cn: "嗨Paul，也很高兴见到你。一切都好，你呢？", en: "Hi, Paul. Glad to see you too. Everything is OK. What about you?"},
      {role: "Paul", cn: "我也很好。对了，这个周末有什么计划吗？", en: "I'm fine, too. By the way, do you have any plans for this weekend?"},
      {role: "Jenny", cn: "没什么特别的，怎么了？", en: "Nothing much. Why?"},
      {role: "Paul", cn: "我在想去听音乐会，你想一起去吗？", en: "I'm thinking about going to a concert. Do you want to go with me?"},
      {role: "Jenny", cn: "当然好啊！你想听什么类型的音乐会？", en: "Sure. What kind of concert are you thinking about going to?"},
      {role: "Paul", cn: "在城市音乐厅的古典音乐会。", en: "A classical music concert in the city concert hall."},
      {role: "Jenny", cn: "太棒了！我真的很喜欢古典音乐。", en: "That's great! I'm really into classical music."}
    ],
    questions: [
      {cn: "你通常喜欢听谁的音乐？", en: "Whose music do you usually enjoy listening to?", answer: "Beethoven's. I think his music is incredible. I've heard that listening to it can make you more intelligent, too. Besides, it does help people relax."},
      {cn: "你还听其他什么类型的音乐？", en: "Do you listen to other kinds of music?", answer: "Actually, I mostly just listen to classical music. I don't like pop music, because I don't think pop music has much depth."},
      {cn: "你怎么对古典音乐产生兴趣的？", en: "How did you become interested in classical music?", answer: "Well, when I was about 10 years old, I started playing the piano. I think that was how it all started. And now playing the piano is one of my hobbies."}
    ],
    fiveAnswers: [
      {q: "What do you want to do this weekend?", a: "Go to a concert."},
      {q: "What kind of music does Jenny like?", a: "Classical music."},
      {q: "How does Jenny feel about Beethoven's music?", a: "Incredible."},
      {q: "Why does Jenny dislike pop music?", a: "Because it doesn't have much depth."},
      {q: "When did Jenny start playing the piano?", a: "At the age of ten."}
    ],
    difficulty: "medium"
  },
  // ---- 8套真题 ----
  {
    id: "B001",
    title: "Photographing Fishtail Waves",
    topic: "旅行探索",
    source: "2025年广东高考真题 Test A",
    scenario: "角色是Mary，与Tom谈论在海南拍摄鱼尾浪照片的经历。Tom最近上了电视采访。",
    scenarioEn: "You are Mary, talking with Tom about his experience photographing fishtail waves in Hainan. Tom was recently on a TV interview.",
    dialogue: [
      {role: "Mary", cn: "Tom，我昨天在电视上看到你了！你拍摄鱼尾浪上电视采访了，太厉害了！", en: "Tom, I saw you on TV yesterday! You were interviewed about photographing fishtail waves. That's amazing!"},
      {role: "Tom", cn: "谢谢，Mary！是的，我在海南拍摄鱼尾浪已经两年了，电视台听说了就来做了一个采访。", en: "Thank you, Mary! Yes, I've been photographing fishtail waves in Hainan for two years. The TV station heard about it and came to do an interview."},
      {role: "Mary", cn: "两年了！那你一开始是怎么开始拍鱼尾浪的呢？", en: "Two years! How did you start photographing fishtail waves in the first place?"},
      {role: "Tom", cn: "两年前我去海南度假，早上在海滩散步时看到了鱼尾浪，觉得太美了，就决定用相机记录下来。", en: "Two years ago, I went to Hainan for a vacation. While walking along the beach one morning, I saw the fishtail waves and thought they were so beautiful that I decided to capture them with my camera."},
      {role: "Mary", cn: "听说有一位生物老师给你发了邮件？", en: "I heard a biology teacher sent you an email?"},
      {role: "Tom", cn: "是的，她在网上看到了我的照片，给我发了邮件，说我的照片不仅有美感，还有科学价值。", en: "Yes, she saw my photos online and emailed me. She said my photos were not only beautiful but also scientifically valuable."}
    ],
    questions: [
      {
        cn: "你是怎么有这个想法的？",
        en: "How did you come up with this idea?",
        answer: "I was on vacation in Hainan two years ago. One morning, I was walking along the beach and saw the beautiful fishtail waves. I was so amazed by their unique shape that I decided to capture them with my camera. That's how the whole project started."
      },
      {
        cn: "那位老师在邮件里说了什么？",
        en: "What did that teacher say in the email?",
        answer: "The teacher said that my photos were not only beautiful but also scientifically valuable. She encouraged me to keep photographing and offered to help me connect with marine researchers who study wave patterns."
      },
      {
        cn: "到目前为止，你拍了多少张照片？",
        en: "How many photos have you taken so far?",
        answer: "So far, I have taken more than five hundred photos of fishtail waves. Each one is unique because the waves change constantly depending on the wind, tide, and weather conditions."
      }
    ],
    fiveAnswers: [
      {q: "How long has Tom been photographing fishtail waves in Hainan?", a: "Tom has been photographing fishtail waves in Hainan for two years."},
      {q: "Where did Tom first see the fishtail waves?", a: "Tom first saw the fishtail waves while walking along the beach in Hainan during a vacation."},
      {q: "Who sent Tom an email after seeing his photos?", a: "A biology teacher sent Tom an email after seeing his photos online."},
      {q: "What did the biology teacher say about Tom's photos?", a: "The teacher said the photos were not only beautiful but also scientifically valuable."},
      {q: "How many photos has Tom taken so far?", a: "Tom has taken more than five hundred photos of fishtail waves so far."}
    ],
    difficulty: "medium"
  },
  {
    id: "B002",
    title: "Walking the Silk Road",
    topic: "旅行探索",
    source: "2025年广东高考真题 Test C",
    scenario: "角色是Mary，与Tom谈论行走丝绸之路的经历。",
    scenarioEn: "You are Mary, talking with Tom about the experience of walking the Silk Road.",
    dialogue: [
      {role: "Tom", cn: "Mary，听说你刚走完了丝绸之路，恭喜你！", en: "Mary, I heard you just finished walking the Silk Road. Congratulations!"},
      {role: "Mary", cn: "谢谢你，Tom！是的，我走完了整个丝绸之路，花了六个月的时间。", en: "Thank you, Tom! Yes, I walked the entire Silk Road. It took me six months."},
      {role: "Tom", cn: "六个月！你为什么选择步行而不是坐车呢？", en: "Six months! Why did you choose to walk instead of taking a vehicle?"},
      {role: "Mary", cn: "因为步行可以让我慢慢体验旅程，真正感受丝绸之路的历史和文化。", en: "Because walking allows me to experience the journey slowly and truly feel the history and culture of the Silk Road."},
      {role: "Tom", cn: "一定很辛苦吧。你是如何准备这次旅行的？", en: "It must have been hard. How did you prepare for this trip?"},
      {role: "Mary", cn: "我花了一年时间准备，研究了路线、锻炼了身体，还学了几门语言的基本用语。", en: "I spent a year preparing. I researched the route, trained physically, and learned basic phrases in several languages."}
    ],
    questions: [
      {
        cn: "你为什么选择步行？",
        en: "Why did you choose to walk?",
        answer: "I chose to walk because I wanted to experience the journey slowly and truly. Walking allows me to see the landscapes, meet local people, and feel the history of the Silk Road in a way that driving or flying never could. It was a spiritual journey as much as a physical one."
      },
      {
        cn: "你是如何准备这次旅行的？",
        en: "How did you prepare for this trip?",
        answer: "I spent a year preparing. I researched the route and studied the history and culture of the countries along the way. I trained physically by hiking every weekend with a heavy backpack. I also learned basic phrases in several languages and got all the necessary visas and vaccinations."
      },
      {
        cn: "你怎样与不同国家的人沟通？",
        en: "How do you communicate with people from different countries?",
        answer: "I used a combination of basic English, hand gestures, and a translation app on my phone. Sometimes I also drew pictures to communicate. Most people were patient and kind, and we managed to understand each other despite the language barrier."
      }
    ],
    fiveAnswers: [
      {q: "How long did it take Mary to walk the Silk Road?", a: "It took Mary six months to walk the entire Silk Road."},
      {q: "Why did Mary choose to walk instead of taking a vehicle?", a: "Mary chose to walk to experience the journey slowly and truly feel the history and culture."},
      {q: "How long did Mary spend preparing for the trip?", a: "Mary spent a year preparing for the trip."},
      {q: "How did Mary train physically for the trip?", a: "Mary trained physically by hiking every weekend with a heavy backpack."},
      {q: "What tools did Mary use to communicate with people from different countries?", a: "Mary used basic English, hand gestures, a translation app, and sometimes drew pictures to communicate."}
    ],
    difficulty: "hard"
  },
  {
    id: "B003",
    title: "Afforestation in Hometown",
    topic: "自然环保",
    source: "2024年广东高考真题 Test C",
    scenario: "角色是Tom，与Mary谈论家乡植树造林的变化。",
    scenarioEn: "You are Tom, talking with Mary about the afforestation changes in your hometown.",
    dialogue: [
      {role: "Mary", cn: "Tom，听说你的家乡变化很大，是不是？", en: "Tom, I heard your hometown has changed a lot. Is that true?"},
      {role: "Tom", cn: "是的，Mary。十年前我的家乡还是一个荒凉的地方，几乎没有什么树。现在到处都是绿色的森林。", en: "Yes, Mary. Ten years ago, my hometown was a barren place with very few trees. Now it is covered with green forests."},
      {role: "Mary", cn: "那变化是怎么发生的呢？", en: "How did the change happen?"},
      {role: "Tom", cn: "当地政府和村民一起努力，启动了一个大规模的植树项目。政府提供了免费的树苗和技术指导。", en: "The local government and villagers worked together to start a massive tree-planting project. The government provided free seedlings and technical guidance."},
      {role: "Mary", cn: "村民的收入增加了吗？", en: "Did the villagers' income increase?"},
      {role: "Tom", cn: "当然！村民开始种果树卖水果，还发展了生态旅游，收入大幅增加。", en: "Absolutely! The villagers started growing fruit trees and selling fruits. They also developed eco-tourism, which significantly increased their income."}
    ],
    questions: [
      {
        cn: "那时你的家乡是什么样的呢？",
        en: "What was your hometown like then?",
        answer: "Ten years ago, my hometown was a barren and dry place. There were very few trees, and the land was mostly empty. The wind would blow dust everywhere, and many young people had left to find work in the cities. It was a difficult place to live."
      },
      {
        cn: "变化是怎么发生的呢？",
        en: "How did the change happen?",
        answer: "The local government started a tree-planting project and encouraged villagers to participate. They provided free tree seedlings and technical guidance. The villagers worked together, planting trees on the hills and along the roads. After years of effort, the barren land turned into green forests."
      },
      {
        cn: "他们如何增加收入呢？",
        en: "How do they increase their income?",
        answer: "The villagers started growing fruit trees and selling the fruits. They also developed eco-tourism, inviting visitors to experience the beautiful forest scenery. Some villagers opened farmhouse restaurants and sold local products, which significantly increased their income."
      }
    ],
    fiveAnswers: [
      {q: "What was Tom's hometown like ten years ago?", a: "Ten years ago, Tom's hometown was a barren and dry place with very few trees."},
      {q: "Who started the tree-planting project?", a: "The local government started the tree-planting project and encouraged villagers to participate."},
      {q: "What did the government provide for the villagers?", a: "The government provided free tree seedlings and technical guidance."},
      {q: "How did the villagers increase their income?", a: "The villagers started growing fruit trees, selling fruits, and developing eco-tourism."},
      {q: "What did some villagers open to increase their income?", a: "Some villagers opened farmhouse restaurants and sold local products."}
    ],
    difficulty: "medium"
  },
  {
    id: "B004",
    title: "Giraffe-Themed Hotel",
    topic: "旅行探索",
    source: "2023年广东高考真题 Test A",
    scenario: "角色是Mary，与Tom谈论在长颈鹿主题酒店的经历。",
    scenarioEn: "You are Mary, talking with Tom about the experience at a giraffe-themed hotel.",
    dialogue: [
      {role: "Tom", cn: "Mary，我刚从肯尼亚回来，住了一家长颈鹿主题酒店！", en: "Mary, I just came back from Kenya. I stayed at a giraffe-themed hotel!"},
      {role: "Mary", cn: "哇，听起来太棒了！你真的在酒店里看到长颈鹿了吗？", en: "Wow, that sounds amazing! Did you really see giraffes in the hotel?"},
      {role: "Tom", cn: "是的！长颈鹿在酒店周围自由走动，有时候还会来到餐厅窗边。", en: "Yes! The giraffes walk freely around the hotel grounds. Sometimes they even come to the dining room windows."},
      {role: "Mary", cn: "太不可思议了！长颈鹿在酒店停留了多久？", en: "That's incredible! How long did the giraffes stay at the hotel?"},
      {role: "Tom", cn: "每天早上大概停留两到三个小时来觅食，然后回到附近的森林。", en: "They usually stay for about two to three hours each morning to feed, and then return to the nearby forest."},
      {role: "Mary", cn: "这趟旅行你花了多少钱？", en: "How much did you spend on this trip?"},
      {role: "Tom", cn: "整个旅行大约花了一万五千元，包括机票、住宿和游览。酒店本身每晚大约两千元。", en: "The whole trip cost about fifteen thousand yuan, including flights, accommodation, and tours. The hotel itself was about two thousand yuan per night."}
    ],
    questions: [
      {
        cn: "你真的在酒店里看到长颈鹿了吗？",
        en: "Did you really see giraffes in the hotel?",
        answer: "Yes, I really saw giraffes in the hotel! They walk freely around the hotel grounds. Sometimes they come right up to the dining room windows, and you can feed them while having breakfast. It was an amazing experience to see them so close."
      },
      {
        cn: "长颈鹿在酒店停留了多久？",
        en: "How long did the giraffes stay at the hotel?",
        answer: "The giraffes usually stay around the hotel for about two to three hours each morning. They come to feed and then return to the nearby forest. But during the dry season, they stay longer because the hotel provides water and food for them."
      },
      {
        cn: "这趟旅行你花了多少钱？",
        en: "How much did you spend on this trip?",
        answer: "The whole trip cost me about fifteen thousand yuan, including flights, accommodation, and safari tours. The hotel itself was about two thousand yuan per night, which is a bit expensive, but it was absolutely worth it for the unique experience."
      }
    ],
    fiveAnswers: [
      {q: "Where did Tom just come back from?", a: "Tom just came back from Kenya."},
      {q: "What is special about the hotel Tom stayed at?", a: "The hotel is giraffe-themed and real giraffes walk around the hotel grounds."},
      {q: "What can guests do while having breakfast?", a: "Guests can feed giraffes through the dining room windows while having breakfast."},
      {q: "How long do the giraffes usually stay around the hotel each morning?", a: "The giraffes usually stay around the hotel for about two to three hours each morning."},
      {q: "How much did Tom's whole trip cost?", a: "Tom's whole trip cost about fifteen thousand yuan."}
    ],
    difficulty: "medium"
  },
  {
    id: "B005",
    title: "Repair Café",
    topic: "社会现象",
    source: "2023年广东高考真题 Test B",
    scenario: "角色是Mary，与Tom谈论维修咖啡馆。",
    scenarioEn: "You are Mary, talking with Tom about repair cafés.",
    dialogue: [
      {role: "Tom", cn: "Mary，我上周末去了一家维修咖啡馆，真的很有趣！", en: "Mary, I went to a repair café last weekend. It was really interesting!"},
      {role: "Mary", cn: "维修咖啡馆？什么是维修咖啡馆？", en: "A repair café? What is a repair café?"},
      {role: "Tom", cn: "就是一个人们可以带坏掉的东西去，志愿者免费帮忙修理的地方。", en: "It's a place where people can bring broken items and volunteers help fix them for free."},
      {role: "Mary", cn: "听起来不错！这类咖啡馆很流行吗？", en: "Sounds good! Are these cafés popular?"},
      {role: "Tom", cn: "是的，现在全世界有两千多家维修咖啡馆，越来越受欢迎了。", en: "Yes, there are now more than two thousand repair cafés worldwide, and they are becoming increasingly popular."},
      {role: "Mary", cn: "那它们还提供什么呢？除了修理服务之外。", en: "What else do they offer? Besides repair services."},
      {role: "Tom", cn: "他们还提供修理技能工作坊，还有专家来讲授可持续发展和环保知识。", en: "They also offer repair skills workshops, and experts give talks on sustainability and environmental protection."}
    ],
    questions: [
      {
        cn: "什么是维修咖啡馆？",
        en: "What is a repair café?",
        answer: "A repair café is a place where people can bring their broken items, such as electronics, clothes, or furniture, and volunteers help them fix these items for free. While waiting, people can enjoy a cup of coffee and chat with others. It's a community-based project that promotes repair and reuse."
      },
      {
        cn: "这类咖啡馆很流行吗？",
        en: "Are these cafés popular?",
        answer: "Yes, repair cafés have become very popular in recent years. There are now more than two thousand repair cafés around the world. People love the idea because it saves money, reduces waste, and helps protect the environment. Many cities are opening new ones every month."
      },
      {
        cn: "那它们还提供什么呢？",
        en: "What else do they offer?",
        answer: "Besides repair services, repair cafés also offer workshops where people can learn basic repair skills. Some cafés host events where experts talk about sustainability and environmental protection. They also provide a social space where neighbors can meet, share skills, and build community connections."
      }
    ],
    fiveAnswers: [
      {q: "What did Tom do last weekend?", a: "Tom went to a repair café last weekend."},
      {q: "What can people do at a repair café?", a: "People can bring broken items and volunteers help fix them for free."},
      {q: "How many repair cafés are there worldwide?", a: "There are more than two thousand repair cafés worldwide."},
      {q: "Why do people love repair cafés?", a: "People love repair cafés because they save money, reduce waste, and help protect the environment."},
      {q: "What else do repair cafés offer besides repair services?", a: "Repair cafés also offer repair skills workshops and talks on sustainability and environmental protection."}
    ],
    difficulty: "medium"
  },
  {
    id: "B006",
    title: "Living in China",
    topic: "文化交流",
    source: "2022年广东高考真题 Test A",
    scenario: "角色是Mary，与Tom谈论在中国生活的经历。",
    scenarioEn: "You are Mary, talking with Tom about the experience of living in China.",
    dialogue: [
      {role: "Tom", cn: "Mary，你在北京多久了？", en: "Mary, how long have you been in Beijing?"},
      {role: "Mary", cn: "大约六个月了，Tom。我非常喜欢这里！", en: "About six months, Tom. I'm really enjoying it here!"},
      {role: "Tom", cn: "你对北京的第一印象是什么？", en: "What was your first impression of Beijing?"},
      {role: "Mary", cn: "北京是一个充满活力的城市，古老和现代完美融合，人们也非常友好。", en: "Beijing is a vibrant city where ancient and modern blend perfectly. The people are also very friendly."},
      {role: "Tom", cn: "你来这里之前学过中文吗？", en: "Did you learn Chinese before you came here?"},
      {role: "Mary", cn: "是的，我来之前学了一年中文，但实际交流比课堂上难多了。", en: "Yes, I studied Chinese for a year before I came. But real-life conversation is much harder than in class."},
      {role: "Tom", cn: "你能跟我多说点你在北京的生活吗？", en: "Can you tell me more about your life in Beijing?"},
      {role: "Mary", cn: "当然！我在一所小学教英语，周末喜欢探索城市、参观博物馆。我还参加了书法课和太极班。", en: "Sure! I teach English at a primary school. On weekends, I like to explore the city and visit museums. I've also joined a calligraphy class and a tai chi group."}
    ],
    questions: [
      {
        cn: "你对北京的第一印象是什么？",
        en: "What was your first impression of Beijing?",
        answer: "My first impression of Beijing was that it's a huge and vibrant city with a fascinating mix of old and new. There are ancient temples and traditional hutongs right next to modern skyscrapers. The streets are full of energy, and the food is amazing. I was also impressed by how welcoming the people were."
      },
      {
        cn: "你来这里之前学过中文吗？",
        en: "Did you learn Chinese before you came here?",
        answer: "Yes, I studied Chinese for about a year before I came here. I took evening classes at a language school in my hometown. But honestly, real-life conversation is much harder than what I learned in class. I'm still learning and practicing every day."
      },
      {
        cn: "你能跟我多说点你在北京的生活吗？",
        en: "Can you tell me more about your life in Beijing?",
        answer: "Sure! I teach English at a primary school during the week. On weekends, I like to explore the city, visit museums, and try different restaurants. I've also joined a Chinese calligraphy class and a tai chi group in a local park. I've made many good friends here and I feel very lucky to experience life in such a wonderful city."
      }
    ],
    fiveAnswers: [
      {q: "How long has Mary been in Beijing?", a: "Mary has been in Beijing for about six months."},
      {q: "What was Mary's first impression of Beijing?", a: "Mary's first impression was that Beijing is a vibrant city with a mix of old and new, and friendly people."},
      {q: "How long did Mary study Chinese before coming to Beijing?", a: "Mary studied Chinese for about a year before coming to Beijing."},
      {q: "What does Mary do during the week?", a: "Mary teaches English at a primary school during the week."},
      {q: "What classes has Mary joined in Beijing?", a: "Mary has joined a Chinese calligraphy class and a tai chi group."}
    ],
    difficulty: "medium"
  },
  {
    id: "B007",
    title: "Wuzhen Theatre Festival",
    topic: "艺术音乐",
    source: "2022年广东高考真题 Test B",
    scenario: "角色是Tom，与Mary谈论参加乌镇戏剧节的经历。",
    scenarioEn: "You are Tom, talking with Mary about the experience at the Wuzhen Theatre Festival.",
    dialogue: [
      {role: "Mary", cn: "Tom，听说你在乌镇戏剧节表演了，怎么样？", en: "Tom, I heard you performed at the Wuzhen Theatre Festival. How was it?"},
      {role: "Tom", cn: "太棒了，Mary！气氛非常好，有来自世界各地的表演者。", en: "It was amazing, Mary! The atmosphere was incredible, with performers from all over the world."},
      {role: "Mary", cn: "戏剧节里有多少个演出？", en: "How many performances are there in the festival?"},
      {role: "Tom", cn: "有一百多个演出，包括戏剧、街头表演、木偶剧和音乐会，持续十天。", en: "There were more than one hundred performances, including plays, street performances, puppet shows, and concerts. It lasted for ten days."},
      {role: "Mary", cn: "你最难忘的经历是什么？", en: "What is your most unforgettable experience?"},
      {role: "Tom", cn: "最难忘的是在雨天表演，观众打着伞看完了整场演出，结束时还起立鼓掌。", en: "The most unforgettable part was performing on a rainy day. The audience watched our entire performance with umbrellas and gave us a standing ovation at the end."},
      {role: "Mary", cn: "你觉得你的表演怎么样？", en: "How do you think your performance was?"},
      {role: "Tom", cn: "我觉得表演得不错，虽然开始有点紧张，忘了一句台词，但即兴发挥，观众没发现。", en: "I think it went well. Although I was nervous at first and forgot one line, I improvised and the audience didn't notice."}
    ],
    questions: [
      {
        cn: "戏剧节里有多少个演出？",
        en: "How many performances are there in the festival?",
        answer: "There were more than one hundred performances during the festival, including plays, street performances, puppet shows, and music concerts. They took place in theaters, on the streets, and even on boats along the river. It was a ten-day event with performances from morning until late at night."
      },
      {
        cn: "你最难忘的经历是什么？",
        en: "What is your most unforgettable experience?",
        answer: "My most unforgettable experience was performing on a rainy day. We thought the audience would leave, but instead, people stood in the rain with umbrellas, watching our entire performance. When we finished, they gave us a standing ovation. I was deeply moved by their passion and support for the arts."
      },
      {
        cn: "你觉得你的表演怎么样？",
        en: "How do you think your performance was?",
        answer: "I think my performance went well, though I was nervous at first. I forgot one line, but I improvised and the audience didn't seem to notice. My fellow actors were very supportive. Overall, I felt it was a great learning experience and I'm proud of what we accomplished together."
      }
    ],
    fiveAnswers: [
      {q: "What kind of performance did Tom do at the festival?", a: "Tom was in a street performance, acting out a traditional Chinese story."},
      {q: "How many performances were there during the festival?", a: "There were more than one hundred performances during the festival."},
      {q: "How long did the Wuzhen Theatre Festival last?", a: "The festival lasted for ten days."},
      {q: "What was Tom's most unforgettable experience?", a: "Tom's most unforgettable experience was performing on a rainy day when the audience stayed and watched in the rain."},
      {q: "What happened when Tom forgot a line?", a: "Tom improvised and the audience didn't seem to notice."}
    ],
    difficulty: "hard"
  },
  {
    id: "B008",
    title: "Leaf Peeping",
    topic: "旅行探索",
    source: "2021年广东高考真题 Test A",
    scenario: "角色是Tom，与Mary谈论观赏树叶（leaf peeping）的活动。",
    scenarioEn: "You are Tom, talking with Mary about the activity of leaf peeping.",
    dialogue: [
      {role: "Mary", cn: "Tom，听说你上周末去观赏树叶了，怎么样？", en: "Tom, I heard you went leaf peeping last weekend. How was it?"},
      {role: "Tom", cn: "太美了，Mary！秋天的颜色真的很惊艳！", en: "It was beautiful, Mary! The autumn colors were absolutely stunning!"},
      {role: "Mary", cn: "Leaf peeping？那是什么意思呢？", en: "Leaf peeping? What does that mean?"},
      {role: "Tom", cn: "就是人们在秋天去旅行，欣赏树叶变色的美景，尤其是枫叶变红变黄。", en: "It's a popular autumn activity where people travel to see the colorful fall foliage, especially maple leaves turning red and golden."},
      {role: "Mary", cn: "你只是看树叶吗？还做别的吗？", en: "Do you just look at leaves? Or do you do other things?"},
      {role: "Tom", cn: "不只是看树叶，我们还去远足、拍照、在树下野餐，享受秋天的空气。", en: "It's not just about looking at leaves. We also go hiking, take photographs, have picnics under the trees, and enjoy the fresh autumn air."},
      {role: "Mary", cn: "什么时候看树叶最好？", en: "When is the best time to see leaves?"},
      {role: "Tom", cn: "通常是十月初到十一月中旬，取决于地点和天气。", en: "Usually from early October to mid-November, depending on the location and weather."}
    ],
    questions: [
      {
        cn: "那是什么意思呢？",
        en: "What does that mean?",
        answer: "Leaf peeping is a popular autumn activity where people travel to areas with colorful fall foliage, especially to see the leaves of maple, oak, and other trees change color. The term 'peeping' means looking at or admiring the beautiful autumn leaves. It's a tradition in many countries."
      },
      {
        cn: "你只是看树叶吗？",
        en: "Do you just look at leaves?",
        answer: "No, it's not just about looking at leaves. We also go hiking, take photographs, have picnics under the colorful trees, and enjoy the fresh autumn air. Some people collect fallen leaves as souvenirs or make art with them. It's also a great opportunity to spend time with family and friends in nature."
      },
      {
        cn: "什么时候看树叶最好？",
        en: "When is the best time to see leaves?",
        answer: "The best time is usually from early October to mid-November, depending on the location and weather. In cooler regions, the leaves change color earlier. The peak season is when the leaves have turned red, orange, and golden but haven't fallen yet. This usually lasts for about two to three weeks."
      }
    ],
    fiveAnswers: [
      {q: "What did Tom do last weekend?", a: "Tom went leaf peeping last weekend."},
      {q: "What does 'leaf peeping' mean?", a: "Leaf peeping is an autumn activity where people travel to see colorful fall foliage."},
      {q: "What other activities can people do besides looking at leaves?", a: "People can also go hiking, take photographs, have picnics, and collect fallen leaves."},
      {q: "When is the best time for leaf peeping?", a: "The best time is usually from early October to mid-November."},
      {q: "How long does the peak season usually last?", a: "The peak season usually lasts for about two to three weeks."}
    ],
    difficulty: "easy"
  },
  // ---- 12套模拟 ----
  {
    id: "B009",
    title: "Joining a School Club",
    topic: "校园生活",
    source: "广东高考模拟卷",
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
    id: "B010",
    title: "Returning a Defective Product",
    topic: "购物消费",
    source: "广东高考模拟卷",
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
    id: "B011",
    title: "Planning a Trip to Yunnan",
    topic: "旅游出行",
    source: "广东高考模拟卷",
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
    id: "B012",
    title: "Visiting a Doctor",
    topic: "健康医疗",
    source: "广东高考模拟卷",
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
    id: "B013",
    title: "Organizing a Birthday Party",
    topic: "社交活动",
    source: "广东高考模拟卷",
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
    id: "B014",
    title: "A Job Interview at a Cafe",
    topic: "求职面试",
    source: "广东高考模拟卷",
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
    id: "B015",
    title: "Using a New Learning App",
    topic: "科技应用",
    source: "广东高考模拟卷",
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
    id: "B016",
    title: "Discussing Weekend Plans",
    topic: "家庭生活",
    source: "广东高考模拟卷",
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
    id: "B017",
    title: "Volunteering at a Library",
    topic: "社区服务",
    source: "广东高考模拟卷",
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
    id: "B018",
    title: "An Exchange Student Program",
    topic: "文化交流",
    source: "广东高考模拟卷",
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
    id: "B019",
    title: "Choosing Elective Courses",
    topic: "校园生活",
    source: "广东高考模拟卷",
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
    id: "B020",
    title: "Hotel Check-in",
    topic: "旅游出行",
    source: "广东高考模拟卷",
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
  }
];

// ============================================================
// Part C 故事复述（20套：8套真题 + 12套模拟）
// 每套包含：梗概、关键词、完整故事原文
// ============================================================
DATA.partC = [
  // ---- SoloTalk测试套题18（导入格式真题） ----
  {
    id: "C_S18",
    title: "SoloTalk套题18 - Ann's Iceland Trip",
    topic: "人物故事",
    source: "SoloTalk测试套题18（高考真题格式）",
    summary: "Ann一家计划去冰岛旅游，她以为他们必须赶在冰岛融化之前去到那里。",
    keywords: "busy（忙碌的），travel（旅游），summerholiday（暑假），answer（回答），melt（融化）",
    story: "Mr. Green works as a doctor in a hospital. He's very good to the patients and many people like to see him when they do not feel well, so he's very busy all the time. His wife works in a school near London, and she has to do the housework every day.\n\nMr. and Mrs. Green have a daughter named Ann. She's eight years old this year and she began to go to school last summer. Some of her friends often go travelling abroad, but her parents do not have any time.\n\nThis summer Mrs. Green's summer holiday begins, and Mr. Green has nothing to do. So she asks her husband to take the family to Iceland. Mr. Green agrees with her. Ann and her mother are very happy. So Ann tells her friends that her father is going to take the family to Iceland.\n\n\"Why are you going to travel to Iceland, Ann?\" asks a girl, one of her friends.\n\nThe little girl doesn't know how she should answer the question. She thinks for a few minutes and says, \"We're going to see it before it melts.\"",
    keyPoints: "Mr. Green is a doctor and he's always busy, His wife works in a school near London, And their daughter Ann began to go to school last summer, Some of her friends often go travelling abroad, but her parents don't have any time, Mrs. Green asks her husband to take the family to Iceland this summer holiday, Mr. Green agrees, So Ann happily tells her friends about the travel, Then one of her friends asks her why they're going to travel to Iceland, She thinks for several minutes and then she answers that they're going to see Iceland before it melts,",
    difficulty: "medium"
  },
  // ---- 8套真题 ----
  {
    id: "C001",
    title: "The Favorite Writer",
    topic: "励志",
    source: "2025年广东高考真题 Test A",
    summary: "Tom向Mary推荐自己最喜爱的作家，后来发现Mary就是该作家。",
    keywords: [
      {en: "same", cn: "相同的"},
      {en: "favorite writer", cn: "最喜爱的作家"},
      {en: "meeting", cn: "见面"},
      {en: "arrived", cn: "到达"},
      {en: "surprised", cn: "惊讶的"}
    ],
    story: "Tom loved reading very much. Recently, he joined a book club. There he met Mary. Tom found they had the same taste for books. During their conversations, Tom kept talking about his favorite writer, whose pen name was Lily Stone. He told Mary how much he admired this writer's novels and how the stories had changed his life. Mary listened quietly and smiled. One day, Tom suggested they attend a book signing event where Lily Stone was supposed to appear. When the day arrived, Tom was thrilled. They went to the bookstore together and waited eagerly. When the writer finally walked in, Tom was surprised to see that it was Mary herself! Mary explained that she had been writing under a pen name for years and had never told anyone in the book club. Tom could hardly believe that he had been sitting next to his favorite writer all along. They both laughed about the funny coincidence, and Tom felt even more inspired to pursue his own dream of writing.",
    difficulty: "medium"
  },
  {
    id: "C002",
    title: "The Sleeping Pills Scare",
    topic: "家庭生活",
    source: "2025年广东高考真题 Test C",
    summary: "Mary照顾小孙子，以为他误食安眠药，虚惊一场。",
    keywords: [
      {en: "look after", cn: "照顾"},
      {en: "alone", cn: "独自"},
      {en: "sleeping pills", cn: "安眠药"},
      {en: "terrified", cn: "恐惧的"},
      {en: "fell off", cn: "掉落"}
    ],
    story: "One weekend, Mary was asked to look after her five-year-old grandson, little Timmy, while her daughter was away. She was happy to spend time alone with him. In the afternoon, Mary went to the kitchen to prepare some snacks. When she came back, she saw Timmy standing near the bedside table with a bottle in his hand. Mary's heart sank when she realized it was her bottle of sleeping pills. She was terrified that Timmy had swallowed some. She grabbed the bottle and saw that the cap was open. She immediately called the hospital and her daughter, crying and panicking. The doctor told her to bring Timmy in right away. At the hospital, the doctor examined Timmy carefully. To everyone's relief, it turned out that Timmy had not eaten any pills at all. He had simply been curious about the bottle and had knocked it off the table. The pills had fallen off onto the floor, and Timmy had not touched them. Mary was so relieved that she hugged Timmy tightly and promised to be more careful in the future.",
    difficulty: "medium"
  },
  {
    id: "C003",
    title: "The Wrong Stadium",
    topic: "友谊",
    source: "2024年广东高考真题 Test C",
    summary: "Tom去看球赛走错球场，帮助Mary回家，在她家看到现场球赛。",
    keywords: [
      {en: "soccer game", cn: "足球赛"},
      {en: "wrong", cn: "错误的"},
      {en: "bag", cn: "包"},
      {en: "hesitated", cn: "犹豫"},
      {en: "sitting room", cn: "客厅"}
    ],
    story: "Tom was a big soccer fan. One Saturday, he went to watch a soccer game at the city stadium. However, he went to the wrong stadium by mistake. When he realized his error, the game at the other stadium had already started, and it was too late to go there. Disappointed, Tom was about to leave when he noticed an elderly woman, Mary, looking confused and lost. She was carrying a heavy bag and seemed unable to find her way. Tom hesitated for a moment, then decided to help her. He approached Mary and offered to help her carry her bag and walk her home. Mary was very grateful and accepted. On the way, they chatted and Tom learned that Mary also loved soccer. When they arrived at Mary's house, she invited Tom in for a cup of tea. To Tom's surprise and delight, Mary had a large-screen TV in her sitting room, and the soccer game he had wanted to watch was being broadcast live! Mary's family was watching it, and they welcomed Tom to join them. Tom ended up having a wonderful afternoon, watching the game with new friends, all because he had gone to the wrong stadium and helped a stranger.",
    difficulty: "medium"
  },
  {
    id: "C004",
    title: "Parcels for Mary",
    topic: "善良",
    source: "2023年广东高考真题 Test A",
    summary: "邮局职员Tom接到Mary来电查询包裹，了解到她独居寂寞后组织邻居给她寄包裹。",
    keywords: [
      {en: "parcels", cn: "包裹"},
      {en: "neighbors", cn: "邻居"},
      {en: "lonely", cn: "孤独的"},
      {en: "idea", cn: "主意"},
      {en: "bought", cn: "买"}
    ],
    story: "Tom worked at a small post office in a quiet town. One day, he received a phone call from an elderly woman named Mary. She called to ask if there were any parcels for her. Tom checked but found nothing. Mary sounded disappointed. Tom learned that Mary lived alone and her children lived far away. She rarely received any parcels or letters. Tom felt sorry for her. Over the next few weeks, Mary called several more times, always asking about parcels. Each time, there was nothing for her. Tom noticed that Mary sounded increasingly lonely. Then Tom had an idea. He told his colleagues and neighbors about Mary's situation. They decided to send her small parcels regularly, with books, handmade crafts, and warm letters. Some neighbors even bought small gifts to include. When Mary received the first parcel, she was overjoyed. She called the post office to thank Tom. She said the parcels made her feel connected and cared for. Tom and his neighbors continued sending parcels, and Mary was no longer lonely. She even started sending small gifts back to them. The whole community became closer because of one woman's loneliness and one man's kindness.",
    difficulty: "medium"
  },
  {
    id: "C005",
    title: "Painting for Paints",
    topic: "感恩",
    source: "2023年广东高考真题 Test B",
    summary: "Mary用画作换颜料，后将获奖画作送给Tom。",
    keywords: [
      {en: "painting", cn: "画作"},
      {en: "paints", cn: "颜料"},
      {en: "dream", cn: "梦想"},
      {en: "get", cn: "得到"},
      {en: "won", cn: "赢得"}
    ],
    story: "Mary was a talented young artist who loved painting more than anything. However, she came from a poor family and could not afford to buy good quality paints. One day, she ran out of paints completely and was unable to continue her work. She was devastated. Her friend Tom, who owned a small art supply shop, noticed her sadness. Mary had an idea. She offered to trade one of her paintings for a set of paints. Tom agreed happily. Mary got the paints she needed and continued pursuing her dream of becoming a professional artist. Months later, Mary entered a national art competition with a beautiful landscape painting she had created using the paints Tom had given her. To her joy and surprise, she won first prize. The award ceremony was held in the city, and Mary's painting was displayed in a famous gallery. Mary felt deeply grateful to Tom for his help. She decided to give the award-winning painting to Tom as a gift, saying that without his kindness, she would never have been able to create it. Tom was deeply touched and proudly hung the painting in his shop, where it inspired many young artists.",
    difficulty: "medium"
  },
  {
    id: "C006",
    title: "Tom's Lie About the Trip",
    topic: "成长",
    source: "2022年广东高考真题 Test A",
    summary: "Tom不想去奶奶家乡，撒谎后认识到错误。",
    keywords: [
      {en: "voted", cn: "投票"},
      {en: "Grandma's choice", cn: "奶奶的选择"},
      {en: "complained", cn: "抱怨"},
      {en: "lied", cn: "撒谎"},
      {en: "fun", cn: "乐趣"}
    ],
    story: "Every summer, Tom's family would vote on where to go for their vacation. This year, his grandmother's choice won the vote. She wanted to visit her old hometown in the countryside. Tom complained bitterly because he wanted to go to the beach. He thought the countryside would be boring and there would be nothing to do. The night before they left, Tom lied to his parents, saying he felt sick and couldn't go. His parents were worried but let him stay at home with his aunt. However, while his family was away, Tom felt lonely and bored at home. His aunt showed him photos that his grandmother had sent from the countryside. The photos showed beautiful mountains, clear rivers, and his grandmother's old house. His cousins were having a great time catching fish and flying kites. Tom realized he had made a mistake. He had lied because he was selfish, and now he was missing out on all the fun. He called his grandmother and apologized. The next day, his father came to pick him up. When Tom arrived at the countryside, he had the most amazing time. He learned that trying new things could be wonderful, and he promised never to lie again.",
    difficulty: "easy"
  },
  {
    id: "C007",
    title: "Mary the Writer",
    topic: "励志",
    source: "2022年广东高考真题 Test B",
    summary: "Mary不想从事家族糖果生意，想当作家，最终得到家人支持。",
    keywords: [
      {en: "sweets makers", cn: "糖果制造商"},
      {en: "writer", cn: "作家"},
      {en: "upset", cn: "不安的"},
      {en: "talk", cn: "谈话"},
      {en: "mistake", cn: "错误"}
    ],
    story: "Mary's family had been sweets makers for three generations. Her parents owned a famous candy shop and expected Mary to take over the family business. However, Mary had a different dream. She wanted to be a writer. She loved creating stories and dreamed of publishing her own novels. When Mary told her parents about her dream, they were upset. They argued that making sweets was a stable and profitable business, while writing was risky and uncertain. Mary felt hurt and misunderstood. She stopped talking to her parents and spent all her time writing in her room. The situation got worse until Mary's grandmother intervened. She sat down with Mary and her parents for a serious talk. Grandma said that she had once wanted to be a teacher but had given up her dream to continue the family business. She told Mary's parents that they were making a mistake by forcing Mary into a path she didn't love. Grandma encouraged Mary to pursue writing while also learning the family business as a backup. Mary's parents finally understood and supported her dream. Mary went on to become a successful writer, and she even wrote a story about a family of sweets makers.",
    difficulty: "medium"
  },
  {
    id: "C008",
    title: "Grandma's Drawing Collection",
    topic: "感恩",
    source: "2021年广东高考真题 Test A",
    summary: "Tom儿时扔掉的画被奶奶收藏，奶奶去世后Tom发现并举办展览。",
    keywords: [
      {en: "drawing", cn: "画作"},
      {en: "throw", cn: "扔掉"},
      {en: "grandma", cn: "奶奶"},
      {en: "exhibition", cn: "展览"},
      {en: "touched", cn: "感动的"}
    ],
    story: "When Tom was a little boy, he loved drawing. He would draw everywhere, on paper, on walls, and even on his textbooks. One day, his art teacher asked the class to draw something about their families. Tom drew a picture of his grandmother cooking in the kitchen. He was not satisfied with it and thought it looked ugly, so he crumpled it up and was about to throw it away. His grandmother saw this and quietly picked up the drawing from the trash. She smoothed it out and kept it. Years passed. Tom grew up and became an architect. He had largely forgotten about his childhood drawings. One day, his grandmother passed away. While sorting through her belongings, Tom found a small box. Inside were all the drawings he had made as a child, including the one he had tried to throw away. His grandmother had kept every single one. There was also a note that read, I always knew you would do great things. These drawings remind me of where you started. Tom was deeply touched. He decided to hold a small exhibition of his childhood drawings to honor his grandmother's love and belief in him. The exhibition was called Grandma's Collection, and it moved everyone who visited.",
    difficulty: "medium"
  },
  // ---- 12套模拟 ----
  {
    id: "C009",
    title: "The Boy Who Never Gave Up",
    topic: "励志",
    source: "广东高考模拟卷",
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
    id: "C010",
    title: "A Letter of Gratitude",
    topic: "感恩",
    source: "广东高考模拟卷",
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
    id: "C011",
    title: "The Brave Lifeguard",
    topic: "勇气",
    source: "广东高考模拟卷",
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
    id: "C012",
    title: "The Wise Old Man",
    topic: "智慧",
    source: "广东高考模拟卷",
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
    id: "C013",
    title: "Two Friends in the Storm",
    topic: "友谊",
    source: "广东高考模拟卷",
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
    id: "C014",
    title: "The Honest Student",
    topic: "诚信",
    source: "广东高考模拟卷",
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
    id: "C015",
    title: "The Marathon Runner",
    topic: "坚持",
    source: "广东高考模拟卷",
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
    id: "C016",
    title: "The Kind Stranger",
    topic: "善良",
    source: "广东高考模拟卷",
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
    id: "C017",
    title: "Learning to Be Independent",
    topic: "成长",
    source: "广东高考模拟卷",
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
    id: "C018",
    title: "The Mountain Adventure",
    topic: "冒险",
    source: "广东高考模拟卷",
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
    id: "C019",
    title: "From Failure to Success",
    topic: "励志",
    source: "广东高考模拟卷",
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
    id: "C020",
    title: "The Teacher's Gift",
    topic: "感恩",
    source: "广东高考模拟卷",
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
  }
];
