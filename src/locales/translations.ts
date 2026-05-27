export type Language = 'en' | 'ru' | 'uz';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      operations: 'Operations',
      contact: 'Contact',
    },
    hero: {
      tagline: 'ZARVADIY LLC',
      title: 'Premium International Copper Exporter',
      subtitle: 'Reliable supply solutions for global markets. Exporting premium copper tubes, coils, and fittings for industrial excellence across Europe, MENA, and Southeast Asia.',
      cta: 'Request Quotation',
      statProducts: 'Premium Products',
      statExport: 'Export Countries',
      statQuality: 'Quality Compliance',
    },
    products: {
      title: 'Copper Product Portfolio',
      subtitle: 'Premium copper solutions engineered for HVAC, refrigeration and industrial systems worldwide.',
      viewDetails: 'View Specifications',
      types: {
        tubes: {
          title: 'Copper Tubes',
          shortDesc: 'High-performance copper tubes for HVAC, plumbing and industrial systems.',
          desc: 'Our copper tubes are manufactured to meet the highest global standards, ensuring excellent thermal conductivity, corrosion resistance, and durability. Ideal for air conditioning, heating systems, and water transportation.',
          specs: [
            { label: 'Outer Diameter', value: '4.76 mm - 54.0 mm' },
            { label: 'Wall Thickness', value: '0.35 mm - 2.0 mm' },
            { label: 'Standard', value: 'ASTM B280, EN 12735-1, JIS H3300' },
            { label: 'Temper', value: 'Soft annealed or Hard drawn' }
          ]
        },
        fittings: {
          title: 'Copper Fittings',
          shortDesc: 'Precision-engineered copper fittings for reliable and leak-free piping connections.',
          desc: 'Engineered with absolute precision, our copper fittings ensure safe, leak-free, and permanent connections in copper pipe lines. Resistant to high pressure and thermal expansion, they are perfect for plumbing and cooling loops.',
          specs: [
            { label: 'Fitting Types', value: 'Elbows, Tees, Couplings, Reducers, Bends' },
            { label: 'Size Range', value: '6.35 mm - 108 mm' },
            { label: 'Standard', value: 'ASME B16.22, EN 1254-1' },
            { label: 'Material', value: 'Deoxidized High Phosphorus Copper (C12200)' }
          ]
        },
        pancake: {
          title: 'Pancake Coils',
          shortDesc: 'Flexible copper pancake coils optimized for refrigeration and air conditioning systems.',
          desc: 'Specially coiled and packaged for easy handling and transport, pancake coils are highly flexible and clean inside. They are extensively used in split air conditioner installations, refrigeration units, and maintenance services.',
          specs: [
            { label: 'Outer Diameter', value: '6.35 mm - 19.05 mm' },
            { label: 'Length', value: '15m, 30m, 50ft (Custom lengths available)' },
            { label: 'Standard', value: 'ASTM B280, EN 12735-1' },
            { label: 'Internal Surface', value: 'Super clean, capped ends' }
          ]
        },
        lwc: {
          title: 'LWC Coils',
          shortDesc: 'Level wound copper coils manufactured for industrial heat exchange and cooling applications.',
          desc: 'Level Wound Coils (LWC) are designed for automated production lines, such as HVAC manufacturing. Spooled onto reels, they minimize production downtime and ensure smooth, continuous processing.',
          specs: [
            { label: 'Outer Diameter', value: '4.76 mm - 15.88 mm' },
            { label: 'Coil Weight', value: '80 kg - 150 kg (Standard/Jumbo reels)' },
            { label: 'Standard', value: 'ASTM B743, EN 12735-1' },
            { label: 'Application', value: 'Condensers, Evaporators, Radiators' }
          ]
        },
        grooved: {
          title: 'Inner Grooved Tubes',
          shortDesc: 'Inner grooved copper tubes engineered for enhanced heat transfer efficiency in HVAC systems.',
          desc: 'Featuring high-precision internal grooves, these tubes increase the internal surface area and create turbulence in the refrigerant flow. This dramatically improves heat transfer efficiency compared to smooth tubes.',
          specs: [
            { label: 'Outer Diameter', value: '5.0 mm - 9.52 mm' },
            { label: 'Groove Depth', value: '0.12 mm - 0.25 mm' },
            { label: 'Standard', value: 'ASTM B280, JIS H3300' },
            { label: 'Efficiency Gain', value: 'Up to 30% increase in heat transfer' }
          ]
        }
      }
    },
    whyUs: {
      title: 'Built For Long-Term Global Partnerships',
      subtitle: 'Supplying premium copper solutions with reliability, consistency and global export focus.',
      standards: {
        title: 'International Standards',
        desc: 'Quality-controlled copper products aligned with global industrial and HVAC requirements.'
      },
      supply: {
        title: 'Reliable Supply',
        desc: 'Stable sourcing, large production capacity, and dependable export operations for international partners.'
      },
      comm: {
        title: 'Fast Communication',
        desc: 'Responsive support, multilingual coordinators, and efficient order processing for overseas buyers.'
      },
      team: {
        title: 'Export-Oriented Team',
        desc: 'Specialized international trade professionals focused on supplying Europe, MENA and Southeast Asian markets.'
      }
    },
    aboutPage: {
      title: 'About Zarvadiy LLC',
      subtitle: 'Leading the regional copper supply chain with absolute commitment to quality and partnership.',
      storyTitle: 'Our Journey & Commitment',
      storyDesc: 'Zarvadiy LLC is a prominent export enterprise based in Uzbekistan, a country rich in mineral resources and industrial capacity. We specialize in distributing and exporting high-grade copper tubes, fittings, and coils to demanding international markets. Our strategic geographical position allows us to serve clients across Europe, the MENA region, and Southeast Asia with competitive lead times and robust logistics.',
      missionTitle: 'Mission & Vision',
      missionDesc: 'To empower international cooling, heating, and construction industries by providing copper solutions of outstanding quality and purity. We aim to build enduring partnerships based on mutual trust, transparency, and top-tier logistics coordination.',
      stats: {
        purity: '99.9% Purity',
        capacity: '12,000+ Tons/Year',
        partners: '20+ Global Clients',
        experience: 'Modern Facilities'
      }
    },
    operationsPage: {
      title: 'Operations & Quality Compliance',
      subtitle: 'A close look at our high-tech manufacturing processes, rigorous inspection, and export logistics.',
      prodTitle: 'Modern Manufacturing',
      prodDesc: 'Our partner production lines are equipped with state-of-the-art extrusion and drawing machinery. Every copper tube is formed from 99.9% pure copper cathodes, undergoing cold drawing, internal cleaning, and induction annealing to achieve specified dimensions and metallurgical tempers.',
      qcTitle: 'Rigorous Quality Laboratory',
      qcDesc: 'Quality is verified at every stage of the manufacturing process. In our quality control labs, we perform eddy current testing (electromagnetic inspection), mechanical tensile tests, dimension tolerances verification, and internal residue tests to ensure absolute compliance with ASTM, EN, and JIS standards.',
      pkgTitle: 'Export-Grade Packaging & Logistics',
      pkgDesc: 'To ensure copper products arrive in pristine condition, we package coils and tubes in heavy-duty wooden crates, wrapped in moisture-proof plastic, and sealed with end caps. Our logistics team handles all international customs compliance, shipping coordination, and certificates of origin for sea, rail, and road transit.',
      processSteps: [
        { title: 'Cathode Melting', desc: 'Melting high-purity copper cathodes (99.99%) in oxygen-free environments.' },
        { title: 'Extrusion & Drawing', desc: 'Forming raw copper tubes through high-pressure extrusion and successive cold drawing stages.' },
        { title: 'Annealing & Treating', desc: 'Controlling hardness and ductility using precision computer-controlled heat treatment.' },
        { title: 'QC Testing', desc: '100% Eddy Current testing to check for micro-cracks and flaws in the tube walls.' }
      ]
    },
    contactPage: {
      title: 'Connect With Our Export Office',
      subtitle: 'Let’s discuss your copper specifications, delivery terms, and long-term partnership options.',
      infoTitle: 'Contact Details',
      email: 'Email',
      phone: 'Phone',
      website: 'Website',
      telegram: 'Telegram',
      linkedin: 'LinkedIn',
      instagram: 'Instagram',
      facebook: 'Facebook',
      address: 'Address',
      addressValue: 'Tashkent, Uzbekistan',
      formTitle: 'Send an Inquiry',
      formSubtitle: 'Fill out the form below and our export managers will contact you within 24 hours.',
      formName: 'Your Name',
      formEmail: 'Email Address',
      formPhone: 'Phone Number',
      formCompany: 'Company Name',
      formMsg: 'Message / Specifications Requirement',
      formSubmit: 'Submit Inquiry',
      formSuccess: 'Thank you! Your inquiry has been sent successfully. Our team will contact you shortly.',
      formError: 'Please fill in all required fields.'
    },
    footer: {
      desc: 'Zarvadiy LLC is a premier international copper exporter from Uzbekistan, supplying copper tubes, coils, and fittings for industrial excellence worldwide.',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      rights: 'All rights reserved.'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'О компании',
      products: 'Продукция',
      operations: 'Производство',
      contact: 'Контакты',
    },
    hero: {
      tagline: 'ООО «ZARVADIY»',
      title: 'Премиальный Экспортер Медной Продукции',
      subtitle: 'Надежные решения для глобальных рынков. Экспорт высококачественных медных труб, фитингов и бухт для промышленного превосходства в Европу, страны Ближнего Востока и Юго-Восточную Азию.',
      cta: 'Запросить коммерческое предложение',
      statProducts: 'Премиум Продукция',
      statExport: 'Страны Экспорта',
      statQuality: 'Стандарты Качества',
    },
    products: {
      title: 'Каталог Медной Продукции',
      subtitle: 'Медные решения премиум-класса, разработанные для систем кондиционирования (HVAC), охлаждения и промышленных сетей.',
      viewDetails: 'Характеристики',
      types: {
        tubes: {
          title: 'Медные Трубы',
          shortDesc: 'Высокопроизводительные медные трубы для систем кондиционирования, отопления и водоснабжения.',
          desc: 'Наши медные трубы производятся в соответствии с жесткими мировыми стандартами, гарантируя отличную теплопроводность, устойчивость к коррозии и долговечность. Идеально подходят для климатических систем, отопления и трубопроводов.',
          specs: [
            { label: 'Внешний Диаметр', value: '4.76 мм - 54.0 мм' },
            { label: 'Толщина Стенки', value: '0.35 мм - 2.0 мм' },
            { label: 'Стандарты', value: 'ASTM B280, EN 12735-1, JIS H3300' },
            { label: 'Состояние (Твердость)', value: 'Мягкие отожженные или Твердые' }
          ]
        },
        fittings: {
          title: 'Медные Фитинги',
          shortDesc: 'Высокоточные фитинги для надежного и герметичного соединения медных трубопроводов.',
          desc: 'Спроектированные с высокой точностью, наши медные фитинги гарантируют безопасные и герметичные соединения на долгие годы. Устойчивы к высокому давлению и температурным расширениям.',
          specs: [
            { label: 'Виды Фитингов', value: 'Углы, Тройники, Муфты, Переходники, Обводы' },
            { label: 'Диапазон Размеров', value: '6.35 мм - 108 мм' },
            { label: 'Стандарты', value: 'ASME B16.22, EN 1254-1' },
            { label: 'Материал', value: 'Раскисленная медь с высоким содержанием фосфора (C12200)' }
          ]
        },
        pancake: {
          title: 'Бухты «Панкейк»',
          shortDesc: 'Гибкие медные бухты плоской намотки для монтажа кондиционеров и холодильного оборудования.',
          desc: 'Специально свернуты и упакованы для удобства транспортировки и установки. Обладают высокой гибкостью и абсолютно чистой внутренней поверхностью. Широко применяются при установке сплит-систем.',
          specs: [
            { label: 'Внешний Диаметр', value: '6.35 мм - 19.05 мм' },
            { label: 'Длина', value: '15м, 30м, 50 футов (Возможна индивидуальная длина)' },
            { label: 'Стандарты', value: 'ASTM B280, EN 12735-1' },
            { label: 'Внутренняя Поверхность', value: 'Суперчистая, концы закрыты заглушками' }
          ]
        },
        lwc: {
          title: 'Бухты LWC (Послойная намотка)',
          shortDesc: 'Медные бухты упорядоченной намотки на катушках для промышленного производства теплообменников.',
          desc: 'Бухты LWC разработаны для автоматизированных линий заводов-производителей HVAC. Намотка на жесткие катушки сводит к минимуму остановки производства и гарантирует беспрерывную обработку.',
          specs: [
            { label: 'Внешний Диаметр', value: '4.76 мм - 15.88 мм' },
            { label: 'Вес Катушки', value: '80 кг - 150 кг (Стандартные/Jumbo)' },
            { label: 'Стандарты', value: 'ASTM B743, EN 12735-1' },
            { label: 'Область Применения', value: 'Конденсаторы, Испарители, Радиаторы' }
          ]
        },
        grooved: {
          title: 'Внутренне Оребренные Трубы',
          shortDesc: 'Медные трубы с внутренним оребрением для максимальной теплопередачи в кондиционерах.',
          desc: 'За счет спиральных микроканавок на внутренней поверхности увеличивается площадь контакта и создается турбулентность в потоке хладагента. Это повышает эффективность теплообмена до 30% по сравнению с гладкой трубой.',
          specs: [
            { label: 'Внешний Диаметр', value: '5.0 мм - 9.52 мм' },
            { label: 'Глубина Канавок', value: '0.12 мм - 0.25 мм' },
            { label: 'Стандарты', value: 'ASTM B280, JIS H3300' },
            { label: 'Эффективность', value: 'До 30% выше эффективность теплопередачи' }
          ]
        }
      }
    },
    whyUs: {
      title: 'Создано для Долгосрочного Партнерства',
      subtitle: 'Поставка медных решений премиум-класса с фокусом на надежность, стабильность и мировой экспорт.',
      standards: {
        title: 'Международные Стандарты',
        desc: 'Строгий контроль качества медных изделий, соответствующих промышленным требованиям.'
      },
      supply: {
        title: 'Надежные Поставки',
        desc: 'Стабильные источники сырья, большие мощности и выверенные экспортные маршруты для зарубежных клиентов.'
      },
      comm: {
        title: 'Быстрая Коммуникация',
        desc: 'Оперативная поддержка, многоязычные менеджеры и эффективное согласование заказов.'
      },
      team: {
        title: 'Экспортная Команда',
        desc: 'Профессионалы внешней торговли, сфокусированные на рынках Европы, Ближнего Востока и Азии.'
      }
    },
    aboutPage: {
      title: 'О компании ООО «Zarvadiy»',
      subtitle: 'Лидерство в региональных поставках меди с абсолютной приверженностью качеству и партнерству.',
      storyTitle: 'Наша История и Ценности',
      storyDesc: 'ООО «Zarvadiy» — ведущее экспортное предприятие, базирующееся в Узбекистане, стране с богатыми залежами полезных ископаемых и развитым промышленным потенциалом. Мы специализируемся на дистрибуции и экспорте высококачественных медных труб, фитингов и бухт на требовательные зарубежные рынки. Наше стратегическое географическое положение позволяет оперативно поставлять продукцию в Европу, на Ближний Восток и в Азию.',
      missionTitle: 'Наша Миссия',
      missionDesc: 'Обеспечивать международную индустрию климатического оборудования и строительства медными решениями безупречной чистоты и надежности. Мы стремимся к созданию долгосрочных партнерских отношений, основанных на честности, открытости и профессиональной логистике.',
      stats: {
        purity: 'Чистота 99.9%',
        capacity: '12,000+ Тонн/Год',
        partners: '20+ Партнеров',
        experience: 'Современные Заводы'
      }
    },
    operationsPage: {
      title: 'Технологии и Контроль Качества',
      subtitle: 'Детальный обзор нашего высокотехнологичного производства, испытательной лаборатории и логистики.',
      prodTitle: 'Современное Производство',
      prodDesc: 'Наши партнерские заводы оснащены передовыми экструзионными и волочильными станками. Каждая медная труба изготавливается из катодной меди чистотой не менее 99.9% и проходит процессы холодного волочения, очистки внутренней поверхности и индукционного отжига для достижения нужных размеров и пластичности.',
      qcTitle: 'Испытательная Лаборатория',
      qcDesc: 'Контроль качества осуществляется на каждом этапе производства. В лабораториях проводятся дефектоскопия вихревыми токами (обнаружение скрытых микротрещин), механические испытания на растяжение, проверка геометрических допусков и тесты на отсутствие химических примесей на внутренних стенках труб.',
      pkgTitle: 'Упаковка и Экспортная Логистика',
      pkgDesc: 'Для предотвращения повреждений трубы упаковываются в прочные деревянные ящики, обертываются влагозащитной пленкой, а концы закрываются пластиковыми заглушками. Наш логистический отдел полностью сопровождает таможенное оформление и транспортные процедуры по ж/д, авто и морским путям.',
      processSteps: [
        { title: 'Плавка Катодов', desc: 'Плавка медных катодов чистотой 99.99% в бескислородной среде.' },
        { title: 'Прессование и Волочение', desc: 'Формование первичных труб прессованием и последующее многократное холодное волочение.' },
        { title: 'Отжиг в Печах', desc: 'Контроль жесткости и гибкости с помощью термической обработки под контролем компьютеров.' },
        { title: 'Дефектоскопия вихретоком', desc: '100%-ный контроль вихретоковым методом для обнаружения мельчайших пор и трещин.' }
      ]
    },
    contactPage: {
      title: 'Свяжитесь с Экспортным Отделом',
      subtitle: 'Обсудите спецификации продукции, условия поставки (Incoterms) и возможности партнерства.',
      infoTitle: 'Контактные Данные',
      email: 'Эл. почта',
      phone: 'Телефон',
      website: 'Сайт',
      telegram: 'Телеграм',
      linkedin: 'Линкедин',
      instagram: 'Инстаграм',
      facebook: 'Фейсбук',
      address: 'Адрес',
      addressValue: 'Ташкент, Узбекистан',
      formTitle: 'Отправить Запрос',
      formSubtitle: 'Заполните форму ниже, и наши специалисты свяжутся с вами в течение 24 часов.',
      formName: 'Ваше Имя',
      formEmail: 'Адрес Эл. Почты',
      formPhone: 'Номер Телефона',
      formCompany: 'Название Компании',
      formMsg: 'Сообщение / Требования к спецификации',
      formSubmit: 'Отправить Запрос',
      formSuccess: 'Спасибо! Ваш запрос успешно отправлен. Мы свяжемся с вами в ближайшее время.',
      formError: 'Пожалуйста, заполните все обязательные поля.'
    },
    footer: {
      desc: 'ООО «Zarvadiy» — ведущий международный экспортер медных труб, фитингов и бухт из Узбекистана, поставляющий продукцию для промышленных нужд по всему миру.',
      quickLinks: 'Быстрые ссылки',
      contactUs: 'Контакты',
      rights: 'Все права защищены.'
    }
  },
  uz: {
    nav: {
      home: 'Bosh sahifa',
      about: 'Kompaniya haqida',
      products: 'Mahsulotlar',
      operations: 'Ishlab chiqarish',
      contact: 'Aloqa',
    },
    hero: {
      tagline: 'ZARVADIY MChJ',
      title: 'Premium Xalqaro Mis Eksportyori',
      subtitle: 'Global bozorlar uchun ishonchli ta’minot yechimlari. Yevropa, Yaqin Sharq va Janubi-Sharqiy Osiyo sanoat tarmoqlari uchun yuqori sifatli mis quvurlar, fitinglar va rulonlar eksporti.',
      cta: 'Narx so‘rovini yuborish',
      statProducts: 'Premium Mahsulotlar',
      statExport: 'Eksport Davlatlari',
      statQuality: 'Sifat Standartlari',
    },
    products: {
      title: 'Mis Mahsulotlari Portfoliosi',
      subtitle: 'HVAC (havoni sovutish va isitish), muzlatish va sanoat tizimlari uchun maxsus ishlab chiqilgan yuqori sifatli mis yechimlari.',
      viewDetails: 'Xususiyatlari',
      types: {
        tubes: {
          title: 'Mis Quvurlar',
          shortDesc: 'HVAC, santexnika va sanoat tizimlari uchun yuqori samarali mis quvurlar.',
          desc: 'Bizning mis quvurlarimiz eng yuqori jahon standartlariga javob beradigan tarzda ishlab chiqariladi, bu esa ajoyib issiqlik o‘tkazuvchanligi, korroziyaga chidamliligi va uzoq umr ko‘rishini ta’minlaydi.',
          specs: [
            { label: 'Tashqi Diametri', value: '4.76 mm - 54.0 mm' },
            { label: 'Devor Qalinligi', value: '0.35 mm - 2.0 mm' },
            { label: 'Standart', value: 'ASTM B280, EN 12735-1, JIS H3300' },
            { label: 'Holati (Qattiqligi)', value: 'Yumshoq tovlangan yoki Qattiq tortilgan' }
          ]
        },
        fittings: {
          title: 'Mis Fitinglar',
          shortDesc: 'Mis quvurlarini ishonchli va oqishsiz ulash uchun yuqori aniqlikdagi fitinglar.',
          desc: 'Mutlaqo aniqlik bilan ishlab chiqilgan mis fitinglarimiz quvur tarmoqlarida xavfsiz va germetik ulanishlarni kafolatlaydi. Yuqori bosim va harorat kengayishlariga bardoshli.',
          specs: [
            { label: 'Fiting Turlari', value: 'Tirsaklar, Uchliklar, Muftalar, O‘tish joylari' },
            { label: 'O‘lchamlar oralig‘i', value: '6.35 mm - 108 mm' },
            { label: 'Standart', value: 'ASME B16.22, EN 1254-1' },
            { label: 'Material', value: 'Rangsizlantirilgan yuqori fosforli mis (C12200)' }
          ]
        },
        pancake: {
          title: 'Pancake Rulonlari',
          shortDesc: 'Konditsioner va sovutish tizimlari uchun qulay yassi o‘ralgan mis rulonlar.',
          desc: 'Tashish va o‘rnatish uchun qulay tarzda o‘ralgan va qadoqlangan. Yuqori egiluvchanlikka va mutlaqo toza ichki yuzaga ega. Split konditsionerlarni o‘rnatishda keng qo‘llaniladi.',
          specs: [
            { label: 'Tashqi Diametri', value: '6.35 mm - 19.05 mm' },
            { label: 'Uzunligi', value: '15m, 30m, 50ft (Buyurtma asosida uzunliklar mavjud)' },
            { label: 'Standart', value: 'ASTM B280, EN 12735-1' },
            { label: 'Ichki yuzasi', value: 'O‘ta toza, uchlari plastik qopqoqlar bilan yopilgan' }
          ]
        },
        lwc: {
          title: 'LWC Rulonlari (Qatlamli o‘ram)',
          shortDesc: 'HVAC ishlab chiqaruvchi sanoat tarmoqlari uchun g‘altaklarda po‘lat simli mis rulonlar.',
          desc: 'LWC (Level Wound Coils) avtomatlashtirilgan ishlab chiqarish liniyalari uchun mo‘ljallangan bo‘lib, mis quvurni g‘altakdan uzluksiz tortib olish imkoniyatini beradi.',
          specs: [
            { label: 'Tashqi Diametri', value: '4.76 mm - 15.88 mm' },
            { label: 'G‘altak Og‘irligi', value: '80 kg - 150 kg (Standart yoki Jumbo g‘altaklar)' },
            { label: 'Standart', value: 'ASTM B743, EN 12735-1' },
            { label: 'Qo‘llanilishi', value: 'Kondensatorlar, Evaporatorlar, Radiatorlar' }
          ]
        },
        grooved: {
          title: 'Ichki Qovurg‘ali Quvurlar',
          shortDesc: 'HVAC tizimlarida issiqlik almashinuvini maksimal oshiruvchi ichki yuzasi qovurg‘ali quvurlar.',
          desc: 'Quvur ichidagi maxsus spiral qovurg‘alar freon bilan kontakt maydonini kengaytirib, turbulent oqim hosil qiladi. Bu issiqlik almashinuvini silliq quvurga nisbatan 30% gacha oshiradi.',
          specs: [
            { label: 'Tashqi Diametri', value: '5.0 mm - 9.52 mm' },
            { label: 'Qovurg‘a chuqurligi', value: '0.12 mm - 0.25 mm' },
            { label: 'Standart', value: 'ASTM B280, JIS H3300' },
            { label: 'Samaradorlik', value: 'Issiqlik almashinuvining 30% gacha o‘sishi' }
          ]
        }
      }
    },
    whyUs: {
      title: 'Uzoq Muddatli Global Hamkorliklar Uchun',
      subtitle: 'Ishonchlilik, barqarorlik va global eksportga yo‘naltirilganlik bilan mis mahsulotlari yetkazib berish.',
      standards: {
        title: 'Xalqaro Standartlar',
        desc: 'Global sanoat va HVAC talablariga to‘liq javob beruvchi sifat nazoratidan o‘tgan mahsulotlar.'
      },
      supply: {
        title: 'Ishonchli Yetkazib berish',
        desc: 'Katta ishlab chiqarish quvvati, barqaror xomashyo va xorijiy hamkorlar uchun mustahkam logistika.'
      },
      comm: {
        title: 'Tezkor Muloqot',
        desc: 'Tezkor javoblar, ko‘p tilli mutaxassislar va buyurtmalarni samarali muvofiqlashtirish.'
      },
      team: {
        title: 'Eksportga Yo‘naltirilgan Jamoa',
        desc: 'Yevropa, Yaqin Sharq va Janubi-Sharqiy Osiyo bozorlariga mis yetkazib beruvchi tashqi savdo mutaxassislari.'
      }
    },
    aboutPage: {
      title: 'Zarvadiy MChJ Haqida',
      subtitle: 'Sifatga va ishonchli hamkorlikka sodiqlik bilan mintaqaviy mis ta’minoti zanjirida yetakchilik.',
      storyTitle: 'Bizning Yo‘limiz va Qadriyatlar',
      storyDesc: 'Zarvadiy MChJ O‘zbekistonda joylashgan yirik eksport korxonasi bo‘lib, mis va mineral resurslarga boy ushbu mintaqaning sanoat salohiyatini namoyon etadi. Biz jahon bozorlariga yuqori sifatli mis quvurlar, fitinglar va rulonlar yetkazib berishga ixtisoslashganmiz. Qulay geografik joylashuvimiz Yevropa, Yaqin Sharq va Osiyodagi mijozlarimizga logistikani tezkor amalga oshirish imkonini beradi.',
      missionTitle: 'Bizning Missiyamiz',
      missionDesc: 'Xalqaro sovutish, isitish va qurilish sanoatini mukammal tozalikdagi mis quvurlari bilan ta’minlash. Biz o‘zaro ishonch, ochiqlik va mukammal logistikaga asoslangan uzoq yillik hamkorlik aloqalarini o‘rnatishga intilamiz.',
      stats: {
        purity: '99.9% Tozalik',
        capacity: '12,000+ Tonna/Yil',
        partners: '20+ Global Hamkorlar',
        experience: 'Zamonaviy Zavodlar'
      }
    },
    operationsPage: {
      title: 'Texnologiyalar va Sifat Nazorati',
      subtitle: 'Ishlab chiqarish jarayoni, laboratoriya sinovlari va eksport logistikasi haqida batafsil ma’lumot.',
      prodTitle: 'Zamonaviy Ishlab chiqarish',
      prodDesc: 'Hamkor zavodlarimiz ilg‘or ekstruziya va sovuq tortish uskunalari bilan jihozlangan. Har bir mis quvur 99.9% toza mis katodlaridan eritilib, kerakli geometrik aniqlik va egiluvchanlikka erishish uchun sovuq tortish, ichki tozalash va induksion tovlash jarayonlaridan o‘tkaziladi.',
      qcTitle: 'Qattiq Laboratoriya Nazorati',
      qcDesc: 'Sifat har bir bosqichda tekshiriladi. Laboratoriyalarimizda uyurmali toklar yordamida nuqsonlarni aniqlash (mikroskopik yoriqlar uchun), mexanik cho‘zilish sinovlari, geometrik toleranslarni o‘lchash hamda quvurning ichki yuzasidagi qoldiqlar tahlil qilinadi.',
      pkgTitle: 'Eksport Qadoqlash va Logistika',
      pkgDesc: 'Quvurlar va rulonlar shikastlanmasligi uchun mustahkam yog‘och yashiklarga joylanadi, namlikdan himoyalovchi plyonka bilan o‘raladi va uchlariga plastik tiqinlar taqiladi. Logistika bo‘limimiz temir yo‘l, avto va dengiz yo‘llari orqali bojxona va hujjatlashtirish ishlarini to‘liq boshqaradi.',
      processSteps: [
        { title: 'Katodlarni Eritish', desc: '99.99% tozalikdagi mis katodlarini kislorodsiz muhitda eritish.' },
        { title: 'Ekstruziya va Tortish', desc: 'Mis quvurlarni presslash va ketma-ket sovuq tortish orqali shakllantirish.' },
        { title: 'Tovlash Pechlari', desc: 'Kompyuter nazorati ostida issiqlik ishlovi berish orqali egiluvchanlik darajasini boshqarish.' },
        { title: 'Gidravlik va Tok Sinovlari', desc: 'Devorlardagi mayda yoriqlarni aniqlash uchun 100% induksion/uyurmali tok bilan tekshirish.' }
      ]
    },
    contactPage: {
      title: 'Eksport Bo‘limi bilan Bog‘lanish',
      subtitle: 'Mis quvurlar o‘lchamlari, yetkazib berish shartlari (Incoterms) va hamkorlik imkoniyatlarini muhokama qiling.',
      infoTitle: 'Aloqa Ma’lumotlari',
      email: 'Elektron pochta',
      phone: 'Telefon raqam',
      website: 'Sayt',
      telegram: 'Telegram',
      linkedin: 'LinkedIn',
      instagram: 'Instagram',
      facebook: 'Facebook',
      address: 'Manzil',
      addressValue: 'Toshkent, O‘zbekiston',
      formTitle: 'So‘rov Yuborish',
      formSubtitle: 'Quyidagi shaklni to‘ldiring va bizning menejerlarimiz 24 soat ichida siz bilan bog‘lanishadi.',
      formName: 'Ismingiz',
      formEmail: 'Elektron Pochta Manzili',
      formPhone: 'Telefon Raqamingiz',
      formCompany: 'Kompaniya Nomi',
      formMsg: 'Xabar / Texnik talablar va o‘lchamlar',
      formSubmit: 'So‘rovni Yuborish',
      formSuccess: 'Rahmat! Sizning so‘rovingiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog‘lanamiz.',
      formError: 'Iltimos, barcha majburiy maydonlarni to‘ldiring.'
    },
    footer: {
      desc: 'Zarvadiy MChJ O‘zbekistondan yuqori sifatli mis quvurlar, fitinglar va rulonlar eksport qiluvchi yirik korxona bo‘lib, butun dunyodagi sanoat tarmoqlariga xizmat ko‘rsatadi.',
      quickLinks: 'Tezkor havolalar',
      contactUs: 'Aloqa',
      rights: 'Barcha huquqlar himoyalangan.'
    }
  }
};
