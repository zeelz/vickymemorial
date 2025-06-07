export interface ProgramItem {
  activity: string
  speaker?: string
  duration?: string
}

export interface Hymn {
  title: string
  verses: string[]
}

export interface BiblePassage {
  title: string
  reference: string
  passage: string
}

export interface Tribute {
  name: string
  relationship: string
  message: string[]
  image?: string
}

export interface PersonDetails {
  fullName: string
  title: string
  birthDate: string
  deathDate: string
  heroImage: string
  quote: string
}

export interface ServiceDetails {
  church: string
  address: string
  date: string
}

export interface ContactInfo {
  name: string
  phone: string
}

export interface MemorialData {
  person: PersonDetails
  service: ServiceDetails
  galleryImages: string[]
  programSchedule: ProgramItem[]
  hymns: Hymn[]
  biblePassages: BiblePassage[]
  tributes: Tribute[]
  contacts: ContactInfo[]
  bankDetails: {
    fundName: string
    bankName: string
    account: string
  }
}

// Phone numbers organized together for easy management
export const phoneNumbers = {
  family: {
    sarahJohnson: "(217) 555-0123",
    michaelThompson: "(217) 555-0456",
  },
  church: {
    pastorDavidMiller: "(217) 555-0789",
  },
  services: {
    funeralArrangements: "(217) 555-0321",
  },
}

export const memorialData: MemorialData = {
  person: {
    fullName: "Victoria Ngozi Okonta",
    title: "Daughter, Sister, Wife, Mum…and Grandma",
    birthDate: "March 31, 1962",
    deathDate: "May 2, 2025",
    heroImage: "vic11.png",
    quote: "A life well lived is a precious gift of peace and love",
  },

  service: {
    church: "Service of Songs",
    address: "25, Bakare Street, Agodo, Cele-Egbe, Lagos",
    date: "Saturday, June 21, 2025"
  },

  galleryImages: [
    "vic1.jpg",
    "vic2.jpg",
    "vic3.jpg",
    "vic1.jpg",
    "vic1.jpg",
    "vic1.jpg",
  ],

  // galleryImages: [
  //   "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop",
  //   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  //   "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=400&fit=crop",
  //   "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop",
  //   "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=400&fit=crop",
  //   "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop",
  // ],

  programSchedule: [
    {activity: "Opening Prayer", speaker: "Chiedu Okonta", duration: "3 mins" },
    {activity: "Worship", speaker: "Pekkie Martynz ", duration: "10 mins"},
    {activity: "Welcome Address", speaker: "Tochukwu Okon", duration: "3 mins"},
    {activity: "1st Bible Reading", speaker: "Mariam Kenudi (Rom. 8:18-25)", duration: "3 mins"},
    {activity: "Opening Hymn: Blessed Assurance",duration: "3 mins"},
    {activity: "The Word", speaker: "Pastor Solomon Pedro ", duration: "15 mins"},
    {activity: "Hymn 2: Be Still my Soul",duration: "3 mins"},
    {activity: "1st Tribute", speaker: "ARRODSON Representative", duration: "2 mins"},
    {activity: "2nd Bible Reading", speaker: "Uncle Emma Biose (1 Thess. 4:13-18)"},
    {activity: "Hymn 3: Nearer my God to Thee",duration: "3 mins"},
    {activity: "2nd Tribute", speaker: "Joyce Ihezue", duration: " 3 mins"},
    {activity: "3rd Bible Reading", speaker: "Onyinye Okonta (Rom. 8:28-39)", duration: "3 mins"},
    {activity: "3rd tribute", speaker: "Folashade", duration: " 3 mins"},
    {activity: "Special Song: How He Loves Us/Reckless Love (Medley)", duration: "5 mins"},
    {activity: "Tribute by the Children/Vote of Thanks", duration: " 5 mins"},
    {activity: "Closing Hymn: Praise The Lord/ Tochukwu (in Igbo)",duration: "3 mins"},



  ],

  hymns: [
    {
      title: "Hymn 1: Blessed Assurance",
      verses: [
        "1.\nBlessed assurance, Jesus is mine!\nOh, what a foretaste of glory divine!\nHeir of salvation, purchase of God,\nBorn of His Spirit, washed in His blood.",

        "Refrain:\nThis is my story, this is my song,\nPraising my Savior all the day long.\nThis is my story, this is my song,\nPraising my Savior all the day long.",

        "2.\nPerfect communion, perfect delight,\nVisions of rapture now burst on my sight.\nAngels descending bring from above\nEchoes of mercy, whispers of love.\n\n[Refrain]",

        "3.\nPerfect submission, all is at rest.\nI in my Savior am happy and bless’d,\nWatching and waiting, looking above,\nFilled with His goodness, lost in his love.\n\n[Refrain]"
      ],
    },
    
  ],

  biblePassages: [
    {
      title: "1st Bible Reading",
      reference: "John 11:25-27",
      passage:
        "²⁵18 I consider that our present sufferings are not worth comparing with the glory that will be revealed in us. 19 For the creation waits in eager expectation for the children of God to be revealed. 20 For the creation was subjected to frustration, not by its own choice, but by the will of the one who subjected it, in hope 21 that[a] the creation itself will be liberated from its bondage to decay and brought into the freedom and glory of the children of God. 22 We know that the whole creation has been groaning as in the pains of childbirth right up to the present time. 23 Not only so, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies. 24 For in this hope we were saved. But hope that is seen is no hope at all. Who hopes for what they already have? 25 But if we hope for what we do not yet have, we wait for it patiently.",
    },
    {
      title: "2nd Bible Reading",
      reference: "1 Thess. 4:13-18",
      passage:
        "13 Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope. 14 For we believe that Jesus died and rose again, and so we believe that God will bring with Jesus those who have fallen asleep in him. 15 According to the Lord’s word, we tell you that we who are still alive, who are left until the coming of the Lord, will certainly not precede those who have fallen asleep. 16 For the Lord himself will come down from heaven, with a loud command, with the voice of the archangel and with the trumpet call of God, and the dead in Christ will rise first. 17 After that, we who are still alive and are left will be caught up together with them in the clouds to meet the Lord in the air. And so we will be with the Lord forever. 18 Therefore encourage one another with these words.",
    },
    {
      title: "3rd Bible Reading",
      reference: "Rom. 8:28-39",
      passage:
        "28 And we know that in all things God works for the good of those who love him, who[a] have been called according to his purpose. 29 For those God foreknew he also predestined to be conformed to the image of his Son, that he might be the firstborn among many brothers and sisters. 30 And those he predestined, he also called; those he called, he also justified; those he justified, he also glorified.",
    },
  ],

  tributes: [
    {
      name: "Ifeoma",
      relationship: "Daughter (Ada)",
      message: [""],
        // "When you’re a kid, you don\’t really know your mother as a person of her own. You only know her as your mum. She cares for you, teaches, and guides you. My experience was not different from that. My mum was so strict when I was growing up. Looking back now, I think I knew she loved me, loved all of us, but it didn’t always seem that way then. What with the flogging and lambasting when you flaunted the rules. When I got older, I started to understand who she was, as a person. She re-introduced herself to us, sort of… My mum was so kind, she had a huge heart. She was funny, and a joy to be with. I just know that if she was not my mum, and  we were mates, she and I would have been friends. Ngo loved her husband and it showed. She was committed to him and our family. She sacrificed so much for us. It’s difficult not to love and respect someone who had to go through a lot of sacrifices for you.\nI loved my mum, passionately. As I grew older I respected the person I found her to be. The woman who loved and respected her husband no matter what. The mother who protected and sacrificed for her family despite the odds. Ngo was a strong woman. I remember telling my friends a while ago that I want to raise my kids exactly as my mum and dad raised me. They may not have had a lot of funds to be classified as rich, but the values they imbued in us, in me, would stay with me forever. I love you to the moon and back mum. You know I would have given anything to take the pain you suffered this past year. I really believed He was going to heal you. I know you wanted so much to get better, be there for us, and enjoy time with us as a family. But God had other plans for you. I can’t say I know what those plans are, but I know who our God is, and though it hurts so much, knowing that His plans are to bring us to a worthy end gives me peace and comfort.\nThank you for being the woman you were - the Proverbs 31 woman. We, her children arise and call her blessed; her husband also praises her: Many women do noble things, but she surpasses them all. Charm is deceptive, and beauty is fleeting; but this woman who feared the LORD is to be praised. We honor her for all that her hands have done, her works bring her praise from every area.",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop",
    },
    {
      name: "Fumnanya",
      relationship: "Daughter",
      message: [

        "Where You Used to Be",

        "I've looked at this space for days on end,",
        "Blank pages echo the loss of a friend—",
        "No, not a friend… my mother, my guide,",
        "The one who held me when the world lied.",

        "I can't believe you're really gone,",
        "That I’ll wake each day and just go on.",
        "No wedding day smile from you in the crowd,",
        "No soft lullaby sung low, not loud.",

        "You won’t hold my baby, won’t touch their skin,",
        "Won’t burst the bubble wrap we used to win.",
        "Who’ll laugh with me at the silliest things?",
        "Who’ll quiet the chaos that life often brings?",

        "I could rage at God with fists and screams,",
        "For all the prayers, for all the dreams.",
        "For every night I begged and cried,",
        "While hope still flickered, though you slowly died.",

        "He knew you were all I had left—",
        "Still He watched as I was cleft.",
        "He let me hope, let me believe,",
        "And left me here alone to grieve.",

        "He could’ve whispered, “She won’t survive,”",
        "Could’ve spared the faith I kept alive.",
        "But even if He had… what then?",
        "I’d still break in two. Again. And again.",

        "Prepared? I thought I was, I swear,",
        "But nothing readies you for empty air.",
        "For hearing silence where your voice should be,",
        "For the gaping hole left inside me.",

        "Oh, it hurts—it hurts like hell.",
        "And no soft scripture can ever quell",
        "The ache of a daughter torn in two,",
        "Now walking in a world without you.",

        "I don’t have words of peace or grace,",
        "Only tears that stain this hollow space.",
        "It just… it sucks to lose a mum.",
        "No poetry can make that numb.",

        "There’s a hole in my heart, wide and true—",
        "I used to have one… now I have two.",
        "One made by you, the other made by Dad",
        "He died ahead, I guess he cleared the path",

        "But still, I write… though my words fall flat.",
        "You deserved more than this—you both did.",
        "Yet in this ache, I hold on to who you made me:",
        "God first… everything after—",
        "Even this grief that threatens to swallow me thereafter.",

        "And somehow, in the silence, I feel you near—",
        "Not in sight…",
        "But always here."
      ],
      image: "nanya.jpg",
    },
    {
      name: "",
      message: [
        "ARODSSON Lagos (Abiodun Adebayo Salako - State Chairman)",
        "We the Executive Committee (EXCO) and entire members of the Association of Retired Officers of Department of State Services of Nigeria (ARODSSON) Lagos State Chapter, commiserate with you on the home-call of our colleague and member, Late Mrs. Victoria Okonta.",
        "The deceased worked with the Department of State Services at the National Headquarters, Awolowo Road, Lagos State, back then in the Operations, Administration Departments etc. She was a diligent and professional officer, always dedicated to her duties. She was a kind hearted woman, caring and loving. Madam Victoria was a goal-getter and team player whilst in the Service.",
        "Importantly, she was a member of the past EXCOs of ARODSSON, Lagos Chapter. She obviously left a befitting legacy to her children.",
        "We look to Almighty God for comfort who knows the end from the beginning. Therefore, the Lord shall meet all the needs of the children and family, of the departed colleague, left behind.",
        "May the Almighty God grant her soul eternal rest and give the family the fortitude to bear the irreparable loss and fill the irreplaceable vacuum created by her transition, Amen.",
        "Kindly accept our heartfelt condolences once again."
      ],
      relationship: "ARODSSON",
      image: ""
    },
    {
      name: "Deaconess Okosun",
      message: [
        "",
        "Dear Sister Vic, as I've always called you. Your legacy of love, kindness and Faith will forever be etched in our hearts. It has pleased God to call you home, your impact on our lives remains profound. We will cherish the memories of our shared prayers, laughter and tears. Your unwavering commitment to Christ inspired a lot of us. Rest now in the bosom of our lord Jesus. We will miss you dearly but celebrate your life and the hope of eternal life we shared in Christ.",
        "Adieu Sister Vic!",
        "Adieu the Strong woman!"
      ],
      relationship: "Deaconess",
      image: ""
    },
    {
      name: "Joyce Ihezue",
      message: [
        "",
        "Tribute to a Beautiful Heart and a Loving Friend: Mrs Vicky Ngozi Okonta.", "Aah! I find it difficult to do this. Vicky, you were a beautiful soul, you loved to a fault, you were a cheerful giver, you loved God sincerely and it showed in your relationship with anyone that came your way. You loved your husband so dearly and your children were your heartbeat. You cherished them so much and made all the sacrifices for their well-being and education. You were the definition of a virtuous woman. Now that you are to eat the fruit of your labour, death snatched you away from us. I know you are in a better place resting. Goodnight my friend!",
        "Mrs. Joyce Ihezue (friend of the family)"
      ],
      relationship: "Friend of the family",
      image: ""
    },    
    {
      name: "Oliver Agu",
      message: [
        "Tribute to a dear Family. (Ngozi Okonta  and her husband who had gone to be with the Lord some years ago).",
        "I met this great family when I was posted to head a branch of the company I was working for. We were all attending different branches of TREM in Lagos before relocating to Benin city, and we joined in pioneering the establishment of a branch of the church in that city. We were like family as they made sure that I followed them home after service every Sunday to eat a good meal because I was not married then.",
        "They played a big role in helping me to make the choice of who I eventually married. I still remember and live by some of the candid advice and sometimes instructions they (Mr. and Mrs. Okonta) gave me. I still hear the silent voice of Mr. Okonta, as he admonished me on what to do when we had some challenges in our marriage. Their marriage was a model. Even if they are gone, I still feel them encouraging me to be my best self. I still remember vividly how Mr. Okonta stood his ground in prayers, rejecting the devil’s plan to take his wife and commanded her to get up, and she was healed completely. This act helped my prayer life tremendously. My friendship with the Okontas was one of the most important in my life because we shared some wonderful times, and their love continued to guide me. It was difficult for me to write only about Sister Ngozi because they were inseparable and did things together. As we mourn their loss, we also celebrate the gift of friendship. I take consolation in the fact that they are already waiting for us in heaven."
      ],
      relationship: "Friend of the family",
      image: ""
    },
    {
      name: "Chiedu Okonta",
      message: [
        "TRIBUTE TO VICTORIA NGOZI OKONTA",
        "As it is written. Death is swallowed up in victory. Oh death where is thy sting? Oh grave where is thy victory?",
        "Late Mrs Ngozi Victoria Okonta, the wife of my late elder brother will be remembered for several good deeds that she did on this earth. I could recall when I completed my NYSC and had to live with my elder brother's family briefly.",
        "For that one year and seven months she accommodated me and we all lived happily as a family. From where I moved into my accommodation afterwards.",
        "During my marriage and wedding she was on-ground seeing that all went well.",
        "May God grant you eternal rest in his blossom and the family the fortitude to bear the loss in Jesus name",
        "Pastor Chiedu Okonta"
      ],
      relationship: "Family",
      image: ""
    },
    {
      name: "Mama Uche & Family",
      message: [
        "Mama Uche & Family",
        "Dear beloved Mrs. Victoria Ngozi Okonta a.k.a. Aunty Ngo",
        "The Ijehs extend our deepest condolences on the passing of our beloved Aunty. She may be gone, but her love, wisdom, and legacy lives on in our hearts.",
        "Her impact on our family and community won't be forgotten. Her kindness, generosity, and warmth touched countless lives. Oluoma and Ifeoma cherish memories of their spending weekends and holidays at the barracks.",
        "Rest in peace dearest. May your soul find eternal peace. We'll miss you dearly.",
        "With love and sympathy from the Ijehs (Mrs Mercy Kenudi Ijeh Nee Maduka)."
      ],
      relationship: "Family",
      image: ""
    },
  ],

  contacts: [
    {
      name: "Ifeoma",
      phone: "08117625340",
    },
    {
      name: "Nanya",
      phone: "08103793295",
    },
    {
      name: "Tochi",
      phone: "09111631749",
    }
  ],

  bankDetails: {
    fundName: "Victoria Ngozi Okonta",
    bankName: "Access Bank",
    account: "0008124402"
  },
}

// Biography content as a separate export for easier editing
export const biographyContent = {
  paragraphs: [
    "Victoria Ngozi Okonta was born on March 31, 1962 to Mr. and Mrs. Kenudi Nwoko. She went to be with the lord on May 2, 2025 after a protracted illness.",

    "Ngo baby, as she was fondly called by her husband (a name that captured both her warmth and her spirited nature) was a fearless woman. She did nothing halfway. When she showed up, whether in love, friendship, work, or family, she gave her all. You always knew where she stood, and if she believed in you, she made sure you never forgot it. She is survived by a grandchild, three children, three sisters, one brother, her in-laws and other extended family.",
    
    "We don’t intend for this to be a biography, how could it be? There’s so much to the life of ‘Ngo Baby’ that would require considerable time and space to document. However, to help give you a glimpse into the life of our mum, we’ve put together a series of real life stories that we hope will make you come to appreciate who she was, and what she stood for. Through them, we hope you come to see not just who our mother was, but what she believed in, what she fought for, and the love she gave so freely. It is our hope and prayer, as we know it would be hers that these few lines inspire you to embrace and carry forward the very best of who she was.",

    "May her light continue to shine through the lives she touched.",

    "Ifeoma Blessed:",
    "My mum was the very definition of a family-centered career woman. She joined the National Security Organisation (NSO) in 1979, and when it was restructured in 1986, she became part of what is now known as the Department of State Services (DSS). She entered the service as a teenager, barely eighteen years old. She served for twenty-five years and retired in 2004.",

    "My mum was fearless. Determined. Strong-willed. She didn’t back down. I remember one incident while we lived in Benin that still plays clearly in my mind. She was on her way to work and had taken a cab. At the time, the government had asked all commercial transporters to paint their cars in red and yellow to distinguish them from private vehicles. This driver hadn’t complied yet. So, when the Mobile Police officers (MOPOL) stopped him and began to harass him, my mum was sitting right there in the backseat. The man tried to explain himself, but the officers weren’t listening.",

    "My mum stepped out of the car and asked what the issue was. They dismissed her, told her to get another cab and leave. She stood her ground and told them the car was hers and that the driver worked for her. They didn’t believe her and tried to intimidate her, but she refused to budge. Calmly, firmly, she told them to either take both of them to their station or let them go. Not one word of retreat. When they realised she was DSS, their entire tone changed. They let them go. That cab driver was so thankful he refused to collect his fare. She never saw him again.",

    "That was my mum. She never walked past injustice. She always stepped in. Even though she didn’t talk much, everyone knew not to cross her. She was quiet, but strict. No-nonsense. We, her children, knew this side of her the most. If we messed up, she didn’t hesitate to discipline us. I still remember how often she threatened to rub pepper on Tochukwu when we were younger.",

    "After her years in service, she remained active in the Association of Retired Officers of the Department of State Services of Nigeria (ARODSSON) in both the Benin and Lagos chapters. She even served as one of the executives for a while before she fell ill in 2020.",

    "Looking back, I sometimes wonder if her job shaped her courage and resilience. Maybe. But I also think she had no choice. She had to be strong. Like me, she was the Ada—the first daughter—in her family. That role comes with weight. She lost her parents at a young age and had to step into the role of caregiver long before she met my dad. She carried responsibility before she even became a wife or mother.",

    "A few weeks before she passed, I remember telling her how overwhelmed I was with life and all the things I had to carry. She hadn’t been able to speak for over nine months by then. I sat beside her and told her I understood now. The weight she must have felt. How lonely it must have been sometimes. And how, somehow, she still showed up for everyone.",

    "That’s who she was. That’s who I hope to be."
  ],
}
