export interface ProgramItem {
  activity: string
  speaker?: string
  duration?: string
  tab?: string
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
  message: string | string[]
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
    "okontas-1.jpg",
    "okontas-10.jpg",
    "okontas-11.jpg",
    "okontas-12.jpg",
    "okontas-13.jpg",
    "okontas-14.jpg",
    "okontas-15.jpg",
    "okontas-16.jpg",
    "okontas-17.jpg",
    "okontas-18.jpg",
    "okontas-19.jpg",
    "okontas-2.jpg",
    "okontas-20.jpg",
    "okontas-21.jpg",
    "okontas-22.jpg",
    "okontas-23.jpg",
    "okontas-24.jpg",
    "okontas-25.jpg",
    "okontas-26.jpg",
    "okontas-27.jpg",
    "okontas-28.jpg",
    "okontas-29.jpg",
    "okontas-3.jpg",
    "okontas-30.jpg",
    "okontas-31.jpg",
    "okontas-32.jpg",
    "okontas-33.jpg",
    "okontas-34.jpg",
    "okontas-35.jpg",
    "okontas-36.jpg",
    "okontas-37.jpg",
    "okontas-38.jpg",
    "okontas-39.jpg",
    "okontas-4.jpg",
    "okontas-40.jpg",
    "okontas-41.jpg",
    "okontas-42.jpg",
    "okontas-43.jpg",
    "okontas-44.jpg",
    "okontas-45.jpg",
    "okontas-46.jpg",
    "okontas-47.jpg",
    "okontas-48.jpg",
    "okontas-49.jpg",
    "okontas-5.jpg",
    "okontas-50.jpg",
    "okontas-51.jpg",
    "okontas-52.jpg",
    "okontas-53.jpg",
    "okontas-54.jpg",
    "okontas-55.jpg",
    "okontas-56.jpg",
    "okontas-57.jpg",
    "okontas-58.jpg",
    "okontas-59.jpg",
    "okontas-6.jpg",
    "okontas-60.jpg",
    "okontas-61.jpg",
    "okontas-7.jpg",
    "okontas-8.jpg",
    "okontas-9.jpg",
  ],

// tabs:
  // home
  // program
  // biography
  // gallery
  // scripture
  // tributes

  programSchedule: [
    {activity: "Opening Prayer", speaker: "Chiedu Okonta", duration: "3 mins" },
    {activity: "Worship", speaker: "Pekkie Martynz ", duration: "10 mins"},
    {activity: "Welcome Address", speaker: "Tochukwu Okonta", duration: "3 mins"},
    {activity: "1st Bible Reading", speaker: "Mariam Kenudi (Rom. 8:18-25)", duration: "3 mins", tab: "scripture"},
    {activity: "Opening Hymn: Blessed Assurance",duration: "3 mins", tab: "scripture"},
    {activity: "The Word", speaker: "Pastor Solomon Pedro ", duration: "15 mins"},
    {activity: "Hymn 2: Be Still my Soul",duration: "3 mins", tab: "scripture"},
    {activity: "1st Tribute", speaker: "ARRODSON Representative", duration: "2 mins"},
    {activity: "2nd Bible Reading", speaker: "Uncle Emma Biose (1 Thess. 4:13-18)", tab: "scripture"},
    {activity: "Hymn 3: Nearer my God to Thee",duration: "3 mins", tab: "scripture"},
    {activity: "2nd Tribute", speaker: "Joyce Ihezue", duration: " 3 mins"},
    {activity: "3rd Bible Reading", speaker: "Onyinye Okonta (Rom. 8:28-39)", duration: "3 mins", tab: "scripture"},
    {activity: "3rd tribute", speaker: "Folashade", duration: " 3 mins"},
    {activity: "Special Song", duration: "5 mins"},
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
    {
      title: "Hymn 2: Be Still my Soul",
      verses: [      
        "Be still, my soul; the Lord is on thy side;\nbear patiently the cross of grief or pain.\nLeave to thy God to order and provide;\nIn every change He faithful will remain.\nBe still, my soul; thy best, thy heav'nly Friend\nthrough thorny ways leads to a joyful end.",

        "Be still, my soul; thy God doth undertake\nto guide the future as He has the past.\nThy hope, thy confidence let nothing shake;\nall now mysterious shall be bright at last.\nBe still, my soul; the waves and winds still know\nHis voice who ruled them while He dwelt below.\n",
        
        "Be still, my soul; when dearest friends depart,\nand all is darkened in the veil of tears,\nthen shalt thou better know His love, His heart,\nwho comes to soothe thy sorrow and thy fears.\nBe still, my soul; thy Jesus can repay\nfrom His own fullness all He takes away.\n",
        
        "Be still, my soul; the hour is hast'ning on\nwhen we shall be forever with the Lord,\nwhen disappointment, grief, and fear are gone,\nsorrow forgot, love's purest joys restored.\nBe still, my soul; when change and tears are past,\nall safe and blessed we shall meet at last."
      ]
    },
    {
      title: "Hymn 3: Nearer my God to Thee",
      verses: [
        "Nearer, my God, to thee, nearer to thee!\nE'en though it be a cross that raiseth me,\nstill all my song shall be,\nnearer, my God, to thee;\nnearer, my God, to thee, nearer to thee!",

        "Though like the wanderer, the sun gone down,\ndarkness be over me, my rest a stone;\nyet in my dreams I'd be\nnearer, my God, to thee;\nnearer, my God, to thee, nearer to thee!",

        "There let the way appear, steps unto heaven;\nall that thou sendest me, in mercy given;\nangels to beckon me\nnearer, my God, to thee;\nnearer, my God, to thee, nearer to thee!",

        "Or if, on joyful wing cleaving the sky,\nsun, moon, and stars forgot, upward I fly,\nstill all my song shall be,\nnearer, my God, to thee;\nnearer, my God, to thee, nearer to thee!"
      ]
    },
    {
      title: "Hymn 4: To Chukwu (Praise the Lord)",
      verses: [
        "Otutọ diri Chukwu n'ih'Ọ luru!\nỌ hur'uwa n'anya, nye Ọkpara-Ya,\nNke togboro ndu-Ya ikpuchi nmehie,\nMehepu uzọ ndu k'ora we bata.",

        "Kọrọs (REFRAIN)",

        "To Chukwu! To Chukwu! K'uwa nur'olu-Ya!\nTo Chukwu! To Chukwu! Ka madu dum nuria\nBiko, biakute Nna site na Jisos;\nNye Ya otuto n'ok'ihe Ọ luru!",

        "Ezi ngbaputa nk'eji obara go!\nOnye kwere ka nkwa Chineke diri,\nOnye kachasi njọ nke kwere n'ezie,\nJisos gagbaghara nmehie-ya ugbua.",

        "Kọrọs (REFRAIN)",

        "Ok'ihe Ọ zir'ayi, ok'ih'Ọ luru,\nOk'onu k'ayi nwere site na Jisos;\nM'ayi ganaṅuri onu nke kachasi,\nNeti nkpu n'ebube mgbe ayi gahu Ya."
      ]
    }
  ],

  biblePassages: [
    {
      title: "1st Bible Reading",
      reference: "Rom. 8:18-25 (NLT)",
      passage:
        "¹⁸ Yet what we suffer now is nothing compared to the glory he will reveal to us later. ¹⁹ For all creation is waiting eagerly for that future day when God will reveal who his children really are. ²⁰ Against its will, all creation was subjected to God’s curse. But with eager hope, ²¹ the creation looks forward to the day when it will join God’s children in glorious freedom from death and decay. ²²For we know that all creation has been groaning as in the pains of childbirth right up to the present time. ²³ And we believers also groan, even though we have the Holy Spirit within us as a foretaste of future glory, for we long for our bodies to be released from sin and suffering. We, too, wait with eager hope for the day when God will give us our full rights as his adopted children,[a] including the new bodies he has promised us. ²⁴ We were given this hope when we were saved. (If we already have something, we don’t need to hope[b] for it. ²⁵ But if we look forward to something we don’t yet have, we must wait patiently and confidently.)"
    },
    {
      title: "2nd Bible Reading",
      reference: "1 Thess. 4:13-18 (NLT)",
      passage:
        "¹³ And now, dear brothers and sisters, we want you to know what will happen to the believers who have died[a] so you will not grieve like people who have no hope. ¹⁴ For since we believe that Jesus died and was raised to life again, we also believe that when Jesus returns, God will bring back with him the believers who have died. ¹⁵ We tell you this directly from the Lord: We who are still living when the Lord returns will not meet him ahead of those who have died.[b] ¹⁶ For the Lord himself will come down from heaven with a commanding shout, with the voice of the archangel, and with the trumpet call of God. First, the believers who have died[c] will rise from their graves. ¹⁷ Then, together with them, we who are still alive and remain on the earth will be caught up in the clouds to meet the Lord in the air. Then we will be with the Lord forever. ¹⁸ So encourage each other with these words.",
    },
    {
      title: "3rd Bible Reading",
      reference: "Rom. 8:28-39 (NLT)",
      passage:
        "²⁸ And we know that God causes everything to work together[a] for the good of those who love God and are called according to his purpose for them. ²⁹ For God knew his people in advance, and he chose them to become like his Son, so that his Son would be the firstborn[b] among many brothers and sisters. ³⁰ And having chosen them, he called them to come to him. And having called them, he gave them right standing with himself. And having given them right standing, he gave them his glory. ³¹ What shall we say about such wonderful things as these? If God is for us, who can ever be against us? ³² Since he did not spare even his own Son but gave him up for us all, won’t he also give us everything else? ³³Who dares accuse us whom God has chosen for his own? No one—for God himself has given us right standing with himself. ³⁴ Who then will condemn us? No one—for Christ Jesus died for us and was raised to life for us, and he is sitting in the place of honor at God’s right hand, pleading for us. ³⁵ Can anything ever separate us from Christ’s love? Does it mean he no longer loves us if we have trouble or calamity, or are persecuted, or hungry, or destitute, or in danger, or threatened with death? ³⁶ (As the Scriptures say, “For your sake we are killed every day; we are being slaughtered like sheep.”[c]) ³⁷ No, despite all these things, overwhelming victory is ours through Christ, who loved us. ³⁸ And I am convinced that nothing can ever separate us from God’s love. Neither death nor life, neither angels nor demons,[d] neither our fears for today nor our worries about tomorrow—not even the powers of hell can separate us from God’s love. ³⁹ No power in the sky above or in the earth below—indeed, nothing in all creation will ever be able to separate us from the love of God that is revealed in Christ Jesus our Lord.",
    },
  ],

  tributes: [
    {
      name: "Solomon Okonta",
      message: [
        "",
        "There is so much to say about our wife, the late Mrs. Victoria Ngozi Okonta, but words may never truly be enough to capture it all.",
        "I vividly remember the first time I met her at her residence in the Obalende Police Quarters. My elder brother, her husband, had asked me to visit her, and I’ll never forget the delicious Egusi soup with pounded yam she served that Sunday afternoon. Her warmth and hospitality stayed with me from that very day.",
        "I also cannot forget how she once saved me from police embarrassment when my master wrongfully had me arrested for something I knew nothing about. She stepped in without hesitation, firm, fearless, and compassionate.",
        "She often told me she knew exactly what she was stepping into when she chose to marry my brother, especially as he was the first son. She accepted the responsibility with grace, strength, and unwavering dedication.",
        "Today, I wish they both lived longer than they did, but God knows best.",
        "Adieu, our dear wife. Good night, Sister Ngozi Okonta."
      ],
      relationship: "Brother-in-Law",
      image: ""      
    },
    {
      name: "Ifeoma",
      relationship: "Daughter",
      message: [
        "",
        "When you’re a kid, you don\’t really know your mother as a person of her own.",
         "You only know her as your mum.", "She cares for you, teaches, and guides you.", "My experience was not different from that.", "My mum was so strict when I was growing up.", "Looking back now, I think I knew she loved me, loved all of us, but it didn’t always seem that way then.", "What with the flogging and lambasting when you flaunted the rules.", "When I got older, I started to understand who she was, as a person.", "She re-introduced herself to us, sort of… My mum was so kind, she had a huge heart.", "She was funny, and a joy to be with.", "I just know that if she was not my mum, and  we were mates, she and I would have been friends.", "Ngo loved her husband and it showed.", "She was committed to him and our family.", "She sacrificed so much for us.", "It’s difficult not to love and respect someone who had to go through a lot of sacrifices for you.", "I loved my mum, passionately.", "As I grew older I respected the person I found her to be.", "The woman who loved and respected her husband no matter what.", "The mother who protected and sacrificed for her family despite the odds.", "Ngo was a strong woman.", "I remember telling my friends a while ago that I want to raise my kids exactly as my mum and dad raised me.", "They may not have had a lot of funds to be classified as rich, but the values they imbued in us, in me, would stay with me forever.", "I love you to the moon and back mum.", "You know I would have given anything to take the pain you suffered this past year.", "I really believed He was going to heal you.", "I know you wanted so much to get better, be there for us, and enjoy time with us as a family.", "But God had other plans for you.", "I can’t say I know what those plans are, but I know who our God is, and though it hurts so much, knowing that His plans are to bring us to a worthy end gives me peace and comfort.", "Thank you for being the woman you were - the Proverbs 31 woman.", "We, her children arise and call her blessed; her husband also praises her: Many women do noble things, but she surpasses them all.", "Charm is deceptive, and beauty is fleeting; but this woman who feared the LORD is to be praised.", "We honor her for all that her hands have done, her works bring her praise from every area."],
      image: "ifeoma.jpg",
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
      name: "Abiodun Adebayo Salako",
      message: [
        "ARODSSON Lagos (State Chairman)",
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
      name: "Folashade",
      message: [
        "",
        "Dear Sister Okonta, your presence in my life at the early stage of my career was a blessing. You welcomed me to TREM Benin like your blood sister and you treated me as such till I was transferred out of Benin. The relationship continued when you moved to Lagos,  I'm so grateful for the memories we shared. Your  strength, resilience and courage in the face of adversity inspired me. Your words are always soothing to my spirit whenever I call. Your generosity, warmth and hospitality to all of us in TREM Benin can not be overemphasized. You made everyone  welcome as your house door was always open to the young and old.",
        "I'll carry your legacy in my heart. Though you're no longer with us, your love and impact will never fade as your life was a gift to all of us and your generation. The impact of your advice to me can not be forgotten. Rest in peace, dear sister Okonta. You will be deeply missed, but your memory will live on in our hearts. Rest in peace and may your soul be at peace in Jesus name amen."
      ],
      relationship: "Friend",
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
      relationship: "Friend",
      image: ""
    },
    {
      name: "Joyce Ihezue",
      message: [
        "",
        "Tribute to a Beautiful Heart and a Loving Friend: Mrs Vicky Ngozi Okonta.", "Aah! I find it difficult to do this. Vicky, you were a beautiful soul, you loved to a fault, you were a cheerful giver, you loved God sincerely and it showed in your relationship with anyone that came your way. You loved your husband so dearly and your children were your heartbeat. You cherished them so much and made all the sacrifices for their well-being and education. You were the definition of a virtuous woman. Now that you are to eat the fruit of your labour, death snatched you away from us. I know you are in a better place resting. Goodnight my friend!",
        "Mrs. Joyce Ihezue (friend of the family)"
      ],
      relationship: "Friend",
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
      name: "Chekus Okonta (Co-wife)",
      message: [        
        "Tribute to My Senior Co-wife, Late Mrs. Ngozi Okonta",
        "I wish tears would allow me to fully express all I saw in you during the few years we shared as wives in the same family.",
        "I never believed you would leave us so soon, but God knows best.",
        "Aunty, you were a true role model to us. I remember how you brought us, your co-wives, together for weekly prayers, lifting up our husbands and families in faith. You will be deeply missed.",
        "You encouraged me to stay steadfast and to trust God through the journey of marriage. You were there for me during my traditional marriage, my wedding, and even my father’s burial. Though you weren’t in Lagos at the time, your presence was deeply felt.",
        "Aunty, you taught me how to forgive and to let go.",
        "Death has done its worst, but we believe that God has prepared a better place for you. That is our comfort and our hope.",
        "",
        "Adieu, Mama Ify,",
        "Adieu, nwunye dị m,",
        "Until we meet to part no more."
      ],
      relationship: "Co-wife",
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
      relationship: "Brother-in-law",
      image: ""
    },
    {
      name: "Austin, Uche, Nkechi, and Patience Kenudi Nwoko",
      message: [
        "A Tribute to my dear sister ", 
        "Today , we come together to celebrate the life of our beloved sister , Mrs Victoria Ngozi Okonta . Though she may have been taken from us too soon, her spirit will forever live on in the memories we cherish and the love we shared.",
        "Growing up with our sister was an adventure filled with laughter , mischief and unconditional love that can never be erased or replaced in our lives!", "From her siblings - Patience, Austin, Uche, & Nkechi Kenudi Nwoko"

      ],


      relationship: "Siblings",
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
    {
      name: "Deaconess Grace Ezeiruaku",
      message: [
        "Tribute to a Dear Sister",

        "Writing a tribute to a loved one is never easy—especially when that loved one is young.",

        "Sister Victoria Ngozi Okonta was a dear sister in Christ and a true child of God. We all met at The Redeemed Evangelical Mission (TREM), Festac branch.",
        "We began our journey together as young families, with our children in the children’s department, while she and her beloved husband of blessed memory served in the Men’s and Young Women’s fellowships respectively.",

        "Sister Victoria was a gentle and loving soul. You could hardly hear her raise her voice or argue with anyone. She was a true mother—not just to her biological children but also to other members of the church who lived in her home at the time.",

        "As the leader of the Young Christian Women’s Fellowship then, I can testify that she never gave me any trouble. She was always supportive—present for her nuclear family as well as for her in-laws who lived with them.",

        "Later, she relocated from Lagos to Edo State due to a civil service transfer. When she retired and returned to Lagos, we reconnected. I visited her several times before she left Festac. We kept in touch regularly—exchanging calls and prayers almost daily until she took ill.",

        "I was out of town for a while. Upon my return, our dear sister, Deaconess Joyce Ihezue, broke the sad news of Sister Victoria’s passing to me.",
        "That Sunday was especially painful. My heart immediately went to her lovely children, who were her closest companions and friends.",
        "May God now be the parent they look up to.",

        "“Precious in the sight of the Lord is the death of His saints.”",
        "Sister Victoria has gone the way of all mortals. Death is the gateway to life. She fought the good fight, she kept the faith, and I believe she will receive her crown from her Maker, whom she served wholeheartedly.",

        "My prayer is that the Holy Spirit will comfort the church she worshipped with, her beautiful children—Ifeoma, Fumnanya, and Toochukwu—her siblings, and the entire Okonta family.",

        "Good night, my dear sister.",
        "See you on the resurrection morning."
      ],
      relationship: "Friend",
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
      name: "Tochukwu",
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
  paragraphs: ["\"When suffering knocks at your door and you say there is no seat for him, he tells you not to worry because he has brought his own stool.\" ~ Chinua Achebe",
    
    "\"Ngo Baby\", as she was fondly called by her husband, a name that captured both her warmth and her spirited nature, was fearless and full of heart. She didn’t do anything halfway. Whether it was in love, friendship, work, or family, she showed up fully. You always knew where she stood, and if she believed in you, she made sure you never forgot it.",
"This isn’t a biography, how could it be? A life like hers can’t be summed up in a few pages. But to help you understand who she was and what she stood for, we’ve put together a few real-life stories from the perspective of her three children. Through them, we hope you’ll see not just our mother’s strength, but also the values she held dear, the love she gave so freely, and the principles she lived by.",
"Tap the button below to read the memories that could inspire you to embrace and carry forward the very best of who she was.",

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

    "That’s who she was. That’s who I hope to be.",

    "Tochukwu the Great:",

    "There were so many great things about growing up with my mum and dad. For a good portion of my pre-teen years, we saw more of my mum than my dad. This was because he periodically went off-shore for work. My dad did his fair share of instilling discipline in us growing up, but for my mum, it was more of a priority task. I guess it’s pretty understandable that I got beat the most out of my siblings because I'm the only male in the midst of two lovely females. What would be more surprising would be that I got beat mostly by my mum than my dad. My mum didn’t really care that I was the only boy. Maybe it’s because she knew it did not mean squat to my dad, I don’t know.",

    "Growing up I was a bit of a terror. I got into all sorts of issues. When I was about 5 years old, I went through a window while playing at a neighbour’s apartment and got a deep cut on my feet. I learnt pretty early that my mum’s worry for you fuels her wrath. Later on I would take stuff without asking, loose things she bought for me due to excessive playing, concoct mischievous pranks on my sisters and, at appropriate times, she could go ballistic or just bring out her cane and flog the living daylights out of me.",

    "When I was really bad, she would threaten to rub pepper over my body and/or eyes and my dad would staunchly refuse that. He thought that was too excessive a punishment for a child. My mother, as much as she may have wanted to, never used pepper as a punishment for me. My mum was a strong personality, very hardworking and sufficient. Yet she completely yielded under my father’s authority. When I look at how my mother lived I’m awed and humbled by her. I can only pray that my children get to have a mother like I had.",

   " Fumnaya Special:",

    "My mother was many things: loving, kind, disciplined, God-fearing. If I were to talk about her, I don't think there would be enough pages to express all of who she was. So, I'm gonna tell you about one key moment - amongst many - that changed my life forever. My mother was a disciplinarian. She punished me right.",

    "I remember this one time, I was fresh out of Junior secondary school. I had just finished my junior WAEC and was on holiday. From the time I was in JSS 2, I had been pleading with my mum to go back on a decision she had made when I was in primary 5 that I would not do my hair until after senior secondary school. She made this decision because I always used to run away from making my hair back then and I strong-armed her and my Dad to cut my hair so I wouldn't have to go through the stress of making it. After begging and pleading for 2 years, my mum reluctantly agreed that upon resumption into senior secondary school, I could make hair. I was ecstatic. I began grooming my hair waiting for my “big salon day” before senior school would begin.",

    "One faithful day during the holidays, my mum asked me to cook white rice for lunch. I was reluctant to cook it but I didn't want to jeopardize my chances of getting my hair done for senior school, so I didn't complain. I went to the kitchen, put some water in a pot, poured the rice in and set it on the gas cooker to parboil. I left the kitchen and went into my room to continue whatever it was I was doing. Before long, I heard my name from the living room, “Fumnanya!” It was my mum. “Don't let that rice burn o,” she warned. \“It won't burn\”, I replied. I heard my mother's voice again; \“You should stay in the kitchen with that rice. Don't let that rice burn o. I won't be happy with you if it does.” I responded somewhat impatient; “ ooooh… I said it will not burn na… don't worry… my eye is there.\”",

    "My eyes were not there. The rice burnt so bad, there was hardly anything edible left. My mum was so upset. She asked; “what am I going to do to you now? Which punishment would I give you that would help you understand how I feel?” The next thing I heard was; \“That hair, you're not making it again!\”",

    "I was so sad. I felt like she had destroyed my senior school experience and I hadn't even resumed. As sad as I was though and at my young teenage age, I understood why I had been punished and I remember wishing I had listened to my mum and sat with the rice in the kitchen until it was ready.",

    "I learned a life changing lesson that day: \“your mistakes have consequences.\” That lesson gave birth to these life points:",

    "- Try not to make so many mistakes in life. Some mistakes have dire consequences that follow you forever.",
    "- When you make mistakes, learn from them. Always make the best of the consequences of your mistakes.",
    "- Cling to God, the only One who is able to wipe away all your mistakes and give you a clean slate.",
    "My mother taught me this because she punished me right.",
    "I trust that these memories give you a bit of a glance into the woman she was and the life she lived. It is our hope and prayer, just as we know it would be hers, that these memories inspire you to embrace and carry forward the very best of who she was. May her light continue to shine through the lives she touched."
  ],
}
