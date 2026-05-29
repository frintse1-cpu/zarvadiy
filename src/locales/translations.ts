export type Language = 'en' | 'ru' | 'uz';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Company',
      industries: 'Industries',
      markets: 'Global Markets',
      contact: 'Contact',
    },
    hero: {
      tagline: 'ZARVADIY HOLDING',
      title: 'Global Export Solutions Across Multiple Industries',
      subtitle: 'Professional export solutions connecting global B2B buyers in Europe and MENA with highly reliable, ISO-compliant supply chains.',
      cta: 'Explore Industries',
      ctaQuote: 'Request a Quote',
      statHolding: 'Holding Divisions',
      statExport: 'Export Markets',
      statQuality: 'B2B Trust Score',
    },
    holding: {
      industriesTitle: 'Key Business Divisions',
      industriesSubtitle: 'Operating distinct, world-class export operations tailored for industrial engineering and organic agricultural markets.',
      industrialCard: {
        title: 'Industrial Division',
        desc: 'Premium European industrial export operations. Supplying high-specification steel tubes, technical fittings, values, and industrial flanges for complex B2B infrastructure projects.',
        cta: 'Explore Division',
      },
      agroCard: {
        title: 'Agricultural Division',
        desc: 'Premium natural agro-export operations. Delivering exceptional sun-dried fruits, clean-sorted raisins, apricots, and nuts certified by international food safety standards.',
        cta: 'Explore Division',
      },
      process: {
        title: 'Our Visual Export Process',
        subtitle: 'From initial B2B specifications inquiry to flawless global port delivery, our operations are fully streamlined.',
        step1: { title: 'Inquiry', desc: 'Detailed technical specification and order parameters alignment.' },
        step2: { title: 'Production', desc: 'High-speed automated manufacturing or raw harvest selection.' },
        step3: { title: 'Quality Control', desc: 'Rigorously audited testing for zero tolerances and chemical standards.' },
        step4: { title: 'Shipment', desc: 'Secure custom export packing and multimodal logistics coordination.' },
        step5: { title: 'Delivery', desc: 'Flawless border clearance and container hand-off to your warehouse.' }
      },
      markets: {
        title: 'Global Export Reach',
        subtitle: 'Delivering trusted supply chains across premium international trading zones.',
        europe: 'Europe (Germany, Poland, Italy)',
        mena: 'MENA (UAE, Saudi Arabia, Egypt)',
        cis: 'CIS (Kazakhstan, Azerbaijan, Russia)',
        asia: 'Asia (India, China, Vietnam)',
        visualMap: 'Dynamic World Map Visual'
      },
      ctaBlock: {
        title: 'Start Your B2B Export Partnership',
        subtitle: 'Our multi-lingual coordinators are standing by to process your RFQ, verify standards, and issue logistics quotes within 24 hours.',
        cta: 'Send Inquiry',
        whatsapp: 'WhatsApp Export Desk'
      }
    },
    aboutPage: {
      title: 'Zarvadiy Holding Group',
      subtitle: 'Connecting industrial capacity and organic abundance with demanding international buyers.',
      storyTitle: 'Our Journey & Export Philosophy',
      storyDesc: 'Zarvadiy was founded to build trust in international supply chains. Acting as a parent holding corporation, we coordinate specialized processing facilities, raw materials extraction, and rigid testing logistics to serve European and MENA B2B clients. We merge heavy engineering supply systems with delicate natural food operations, maintaining strict professionalism and luxury standards in both worlds.',
      missionTitle: 'Holding Mission',
      missionDesc: 'To supply the global market with premium commodities and processed products, maintaining transparent B2B logistics, absolute standard compliance, and client-first relationship stewardship.',
      visionTitle: 'Holding Vision',
      visionDesc: 'To become a globally competitive multi-industry holding group, bridging rich Central Asian metallurgical and agricultural potential with premium international buyers.',
      stats: {
        purity: 'Strict Auditing',
        capacity: 'Multi-Modal Logistics',
        partners: 'Premium Buyers',
        experience: 'International Quality'
      },
      timeline: {
        title: 'Milestones of Scale',
        item1: { year: '2021', title: 'Holding Foundation', desc: 'Unifying regional export entities under the single Zarvadiy brand.' },
        item2: { year: '2022', title: 'Industrial Launch', desc: 'Exporting premium copper and steel tubes under ISO guidelines to Europe.' },
        item3: { year: '2023', title: 'Agro Division Launch', desc: 'Building high-end sorting and cleaning complexes for organic dried fruits.' },
        item4: { year: '2024', title: 'Global Trade Hub', desc: 'Opening dedicated regional logistics terminals for MENA and EU shipments.' }
      }
    },
    industrial: {
      heroTitle: 'Premium European Industrial Export',
      heroSubtitle: 'Engineering-focused supply chains delivering high-grade carbon/stainless tubes, valves, and heavy-duty fittings.',
      aboutTitle: 'About Industrial Division',
      aboutDesc: 'Our Industrial Division represents high-end B2B manufacturing and engineering capability. Operating out of specialized metal mills, we supply infrastructure developers and HVAC companies with highly durable components. We adhere to rigorous ASTM, ASME, EN, and DIN standards, providing absolute dimensional precision for demanding environments.',
      capabilities: {
        title: 'Technical Capabilities',
        subtitle: 'Employing advanced industrial processes for high-tolerance products.',
        item1: { title: 'Extrusion & Drawing', desc: 'Precision forming of seamless carbon and stainless steel piping.' },
        item2: { title: 'Induction Annealing', desc: 'Computerized thermal processing to achieve specified tensile tempers.' },
        item3: { title: 'Nondestructive Testing', desc: '100% Eddy Current and hydrostatic testing to guarantee wall integrity.' }
      },
      certifications: {
        title: 'Industrial Certifications',
        desc: 'Our processes are fully verified by elite global testing associations.'
      },
      logistics: {
        title: 'Technical Packaging & Heavy Logistics',
        desc: 'Steel and copper products require meticulous protection. We wrap items in anti-corrosive oil layers, secure ends with industrial plastic caps, and package them in heavy wooden crates strapped with steel bands. Export logistics are fully tracked across sea, rail, and road networks.'
      }
    },
    agro: {
      heroTitle: 'Premium Natural Agro Export',
      heroSubtitle: 'Fresh, sun-dried organic fruits and nuts from Central Asia, packaged under strict HACCP and food safety protocols.',
      aboutTitle: 'About Agricultural Division',
      aboutDesc: 'Our Agro Division is inspired by natural purity and high-end organic standards. Harvested at the peak of sweetness, our fruits are cleaned, laser-sorted, and packed inside modern sterile complexes. We cater to premium European grocery chains, nut packers, and confectionery makers looking for pristine, unadulterated dried fruits.',
      process: {
        title: 'Preparation & Processing Timeline',
        subtitle: 'Our products undergo a rigorous 5-stage cleaning and sorting chain to ensure premium quality.',
        step1: { title: 'Raw Selection', desc: 'Direct sourcing from partner organic orchards with strict soil audits.' },
        step2: { title: 'Eco Cleaning', desc: 'Double washing using pure fresh water channels without chemical additives.' },
        step3: { title: 'Sun Drying', desc: 'Natural drying under the intense Central Asian sun to preserve core flavor.' },
        step4: { title: 'Laser Sorting', desc: 'High-tech chromatic sorting to remove standard deviations and foreign matter.' },
        step5: { title: 'Aseptic Packing', desc: 'Vacuum packing in modern sterile boxes for extended shelf life.' }
      },
      packaging: {
        title: 'Modern Retail & Bulk Packaging',
        desc: 'We offer clean, elegant packaging options: high-barrier zipper stand-up pouches for retail, and multi-wall kraft cardboard cartons with plastic inner liners for industrial bakery/bulk orders.'
      },
      certifications: {
        title: 'Food Safety Certifications',
        desc: 'Certified organic, HACCP, ISO 22000 compliance ensuring complete food safety.'
      }
    },
    industrialProducts: {
      title: 'Industrial Portfolio',
      subtitle: 'Technical product lines engineered to withstand extreme pressures and thermal conditions.',
      viewDetails: 'View Technical Details',
      items: {
        'stainless-tubes': {
          title: 'Stainless Steel Tubes',
          shortDesc: 'Seamless anti-corrosive stainless piping for chemical, petroleum, and food industries.',
          desc: 'High-grade stainless steel tubes optimized for corrosive environments. Manufactured using advanced cold-drawing processes to achieve perfect thickness uniformity and immaculate internal surfaces.',
          overview: 'Seamless austenitic and duplex stainless steel tubing developed for harsh chemical pipelines, thermal boilers, and sanitary food environments.',
          specs: [
            { label: 'Steel Grades', value: '304/304L, 316/316L, 321, S31803' },
            { label: 'Outer Diameter', value: '6.0 mm - 219.0 mm' },
            { label: 'Wall Thickness', value: '0.5 mm - 12.0 mm' },
            { label: 'Standards', value: 'ASTM A213, ASTM A312, EN 10216-5' }
          ],
          apps: 'Industrial heat exchangers, chemical processing pipelines, marine engineering, food processing infrastructure, and aerospace hydraulic networks.',
          dims: 'Available in standard 6-meter lengths or cut-to-size. Ends can be plain, beveled, or threaded.',
          pkg: 'Bundled in waterproof plastic sheets and encased in heavy fumigated export wooden crates.',
          certs: 'ISO 9001:2015, PED 2014/68/EU, TUV Rheinland certified.',
          export: 'Europe & MENA sea containers. FOB Tashkent or CIF global destinations.'
        },
        'carbon-tubes': {
          title: 'Carbon Steel Tubes',
          shortDesc: 'Heavy-duty seamless carbon piping for oil, gas, structural, and steam applications.',
          desc: 'Seamless structural carbon pipes made to withstand extreme mechanical stress. Perfect for hydraulic lines, building skeletons, and high-pressure steam distribution systems.',
          overview: 'Industrial seamless carbon piping engineered for low-to-medium pressure pipelines, structural structural bracing, and heavy mechanical processing operations.',
          specs: [
            { label: 'Material Grades', value: 'Grade B, X42, X52, S235JR, S355J2H' },
            { label: 'Outer Diameter', value: '21.3 mm - 609.6 mm' },
            { label: 'Wall Thickness', value: '2.0 mm - 40.0 mm' },
            { label: 'Standards', value: 'ASTM A106, ASTM A53, EN 10210' }
          ],
          apps: 'Gas and petroleum transport lines, high-pressure steam utility boilers, structural framework columns, and automotive heavy axle manufacturing.',
          dims: 'Available in random lengths from 5.8m to 12.0m, or customized fixed lengths.',
          pkg: 'Bundled with heavy steel strapping bands, with anti-rust varnish oil coating and end protectors.',
          certs: 'API 5L License, CE Compliant, ISO 9001 certified.',
          export: 'Rail or flatbed truck transit across CIS and EU networks. Shipping coordination handled within 48h.'
        },
        'pipe-fittings': {
          title: 'Pipe Fittings',
          shortDesc: 'Seamless elbows, tees, couplings, and reducers for reliable leak-free piping networks.',
          desc: 'Precision copper and steel pipe fittings. Designed to handle high thermal expansion and intense pressure spikes without mechanical fatigue.',
          overview: 'High-pressure butt-welded and socket-welded piping connection components, assuring absolute sealed reliability and frictionless fluid flow.',
          specs: [
            { label: 'Fitting Types', value: 'Elbows (45°/90°/180°), Tees, Reducers, Caps' },
            { label: 'Size Range', value: 'DN15 - DN600' },
            { label: 'Standards', value: 'ASME B16.9, EN 10253, ASME B16.11' },
            { label: 'Materials', value: 'Carbon Steel, Stainless Steel, Deoxidized Copper C12200' }
          ],
          apps: 'High-pressure cooling loops, split HVAC machinery connections, water distribution pipelines, and process plant refinery arrays.',
          dims: 'Standard wall thicknesses matching schedule SCH40, SCH80, and extra heavy XXS.',
          pkg: 'Packed in multi-layer plywood boxes, secured on sturdy wooden pallets for heavy forklift handling.',
          certs: 'PED certification, material mill test certifications to EN 10204 3.1.',
          export: 'Secure air-freight or sea-freight dispatch. Full custom broker support included.'
        },
        'valves': {
          title: 'Industrial Valves',
          shortDesc: 'Premium ball, gate, globe, and check valves for high-pressure fluid flow control.',
          desc: 'High-performance shutoff and regulation valves. Engineered with precise metallic seat bounds for bubble-tight sealing and long-term operating life.',
          overview: 'Heavy industrial valves developed for strict flow regulation and emergency isolation of high-pressure gases, liquids, and abrasive slurries.',
          specs: [
            { label: 'Valve Types', value: 'Ball Valves, Gate Valves, Globe Valves, Check Valves' },
            { label: 'Pressure Ratings', value: 'Class 150 - Class 2500, PN16 - PN420' },
            { label: 'Body Materials', value: 'Cast Steel WCB, Stainless Steel CF8/CF8M, Forged A105' },
            { label: 'Standards', value: 'API 6D, API 600, BS 1868, EN 13709' }
          ],
          apps: 'Hydrocarbon refining, thermal power generation plants, water treatment complexes, and deep mining pipelines.',
          dims: 'Available in flanged, threaded, or socket welded end configurations.',
          pkg: 'Individually wrapped in heavy bubble wrap, set inside wooden cases with foam cushioning.',
          certs: 'API 6D certified, Fire-Safe certified to API 607, SIL 3 compliant.',
          export: 'Priority international container dispatch. Fully packed with export certificate of origin.'
        },
        'flanges': {
          title: 'Industrial Flanges',
          shortDesc: 'Forged slip-on, weld-neck, blind, and socket flanges for heavy pressure pipeline interfaces.',
          desc: 'Durable forged steel flanges providing reliable access and structural joining for industrial pipelines. Precision-faced surfaces ensure absolute gasket tightness.',
          overview: 'High-grade forged metal pipeline connection flanges, supporting robust mechanical assembly and simplified pipeline maintenance.',
          specs: [
            { label: 'Flange Types', value: 'Weld Neck, Slip On, Blind, Socket Weld, Threaded' },
            { label: 'Facing Types', value: 'Flat Face (FF), Raised Face (RF), Ring Joint (RTJ)' },
            { label: 'Materials', value: 'ASTM A105, A182 F304/F316, A350 LF2' },
            { label: 'Standards', value: 'ASME B16.5, ASME B16.47, EN 1092-1' }
          ],
          apps: 'Interfacing steam pipelines, high-temperature heat exchangers, pump assemblies, and high-pressure chemical storage tanks.',
          dims: 'Sizes from 1/2" to 60" nominal diameters. Precise metric and imperial drills.',
          pkg: 'Coated in anti-rust oil, protected with plastic flange cover shields, packed in wooden crates.',
          certs: 'ISO 9001, PED compliance, EN 10204 3.1 mill certifications.',
          export: 'Prompt shipping by sea containers from Riga or Bandar Abbas port, or fast overland rail.'
        }
      }
    },
    agroProducts: {
      title: 'Agricultural Catalog',
      subtitle: 'Premium wholesome organic dried fruits and nut selections sourced from pristine orchards.',
      viewDetails: 'View Product Details',
      items: {
        'raisins': {
          title: 'Premium Raisins',
          shortDesc: 'Golden, black, and red raisins sorted using chromatic high-tech laser equipment.',
          desc: 'Sun-dried grapes harvested from rich, sun-baked Central Asian valleys. Sorted by chromatic sorting machines to achieve 99.9% purity.',
          overview: 'Grade-A organic seedless raisins, sweet and rich in natural sugars. Ideal for direct snacks, bakery ingredients, and health foods.',
          origin: 'Samarkand Region, Uzbekistan. Grown in mineral-rich clay soil with natural mountain stream irrigation.',
          harvest: 'Harvested by hand in August and September. Sun-dried on special wooden racks for 14-21 days.',
          life: '12 months. Store in dry, cool conditions (+5°C to +15°C, relative humidity under 70%).',
          pkg: '10 kg bulk kraft cartons with food-grade blue polyethylene liners. Or retail stand-up pouches (250g, 500g, 1kg) with zip locks.',
          certs: 'Organic Certified, HACCP, ISO 22000:2018, Kosher & Halal certified.',
          export: 'Fully dry export trucks or ocean containers. Fast dispatch to Europe and MENA ports.'
        },
        'apricots': {
          title: 'Sun-Dried Apricots',
          shortDesc: 'Natural golden and dark brown apricots dried naturally without sulfur or artificial color additives.',
          desc: 'Deluxe organic apricots with an intense sweet-sour balance. Naturally dried to preserve nutrients, vitamins, and beautiful rich textures.',
          overview: 'Natural premium dried apricots, pitted. Soft, delicious, and highly nutritious. Free from added sugars or synthetic coloring.',
          origin: 'Fergana Valley, Uzbekistan. Sourced from organic family orchards.',
          harvest: 'Picked by hand in June and July. Pitted by hand, then dried naturally in clean shade arrays.',
          life: '12 months. Optimal storage at cold temperatures (+2°C to +8°C).',
          pkg: '4x2.5 kg vacuum packs inside 10 kg master cardboard boxes. High barrier film layers.',
          certs: 'HACCP, ISO 22000, organic compliance certifications.',
          export: 'Reefer containers or temperature-controlled truck lines. Seamless customs clearance support.'
        },
        'prunes': {
          title: 'Black Prunes',
          shortDesc: 'Juicy, soft, pitted black prunes dried and pasteurized for premium quality.',
          desc: 'Selected sweet plums processed in modern drying tunnels. Gently pasteurized to preserve high moisture content and soft, melt-in-mouth textures.',
          overview: 'Pitted sweet black prunes. Rich in fiber and antioxidants. Uniform sorting, fully sanitized, and ready for retail packaging or snack bars.',
          origin: 'Tashkent Region orchards, Uzbekistan.',
          harvest: 'August harvest. Machine and hand sorting, modern dehydration tunnels, followed by gentle steam pasteurization.',
          life: '9 months at cool storage (+5°C to +15°C).',
          pkg: '12.5 kg export-standard corrugated cartons, or customized retail packages with private label print.',
          certs: 'ISO 22000, HACCP, Halal.',
          export: 'Fast container dispatch across sea lanes or direct overland road routes.'
        },
        'nuts': {
          title: 'Premium Walnuts & Almonds',
          shortDesc: 'Shelled and unshelled premium walnuts and raw almonds calibrated for professional B2B clients.',
          desc: 'High-yield walnuts and sweet mountain almonds. Checked for moisture parameters, fully cracked, and light-calibrated for high-grade bakers.',
          overview: 'Premium walnut kernels (halves, quarters, light amber) and calibrated raw almonds. Crisp, fresh, and free from shell fragments.',
          origin: 'Bostanlyk mountains, Uzbekistan. Grown at high altitudes for concentrated nutrient rich profile.',
          harvest: 'September nut drop. Hand cracked, sorted by color sorting lasers, checked for perfect humidity (under 6%).',
          life: '9 months. Store in nitrogen flushed bags or vacuum packages at cold temperatures (+2°C to +6°C).',
          pkg: '10 kg vacuum bags inside heavy-duty cartons, or nitrogen-flushed retail zipper bags.',
          certs: 'HACCP, ISO 22000, Organic compliance.',
          export: 'Quick air-freight shipment or secure sea dry containers. Full phytosanitary certificates issued.'
        }
      }
    },
    contactPage: {
      title: 'Zarvadiy Holding Export Desk',
      subtitle: 'Request product samples, verify certification compliance, or initiate your custom B2B inquiry.',
      infoTitle: 'Holding Contact Details',
      email: 'Email',
      phone: 'Phone',
      website: 'Website',
      telegram: 'Telegram',
      linkedin: 'LinkedIn',
      instagram: 'Instagram',
      facebook: 'Facebook',
      address: 'Address',
      addressValue: '41 Bunyodkor Ave, Tashkent, 100043, Uzbekistan',
      formTitle: 'Send Your Export Inquiry',
      formSubtitle: 'Submit your technical specifications or harvest requirements. Our trade managers will reply within 24 hours.',
      formName: 'Full Name',
      formEmail: 'Business Email',
      formPhone: 'Phone / WhatsApp',
      formCompany: 'Company / Country',
      formMsg: 'Order Details / Specifications Requirements',
      formSubmit: 'Submit Request',
      formSuccess: 'Thank you! Your B2B export inquiry has been logged in our system. An export manager will contact you shortly.',
      formError: 'Please fill in all mandatory fields.'
    },
    footer: {
      desc: 'Zarvadiy LLC is a world-class multi-industry international export holding company. Connecting regional industrial and organic agricultural resources with premium buyers across Europe and MENA.',
      quickLinks: 'Holding Links',
      contactUs: 'Trading Desk',
      rights: 'All rights reserved.'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'О компании',
      industries: 'Направления',
      markets: 'Рынки сбыта',
      contact: 'Контакты',
    },
    hero: {
      tagline: 'ХОЛДИНГ ZARVADIY',
      title: 'Глобальные экспортные решения в разных отраслях',
      subtitle: 'Профессиональный экспорт, соединяющий международных B2B-покупателей в Европе и странах MENA с надежными цепочками поставок по стандартам ISO.',
      cta: 'Отрасли экспорта',
      ctaQuote: 'Запросить расчет',
      statHolding: 'Подразделения',
      statExport: 'Рынки сбыта',
      statQuality: 'Рейтинг доверия',
    },
    holding: {
      industriesTitle: 'Ключевые бизнес-направления',
      industriesSubtitle: 'Два отдельных экспортных подразделения мирового уровня, созданных под нужды промышленного и продовольственного секторов.',
      industrialCard: {
        title: 'Промышленный дивизион',
        desc: 'Высокотехнологичный экспорт промышленной продукции. Поставка труб из нержавеющей и углеродистой стали, фитингов, задвижек и фланцев для сложных инфраструктурных проектов B2B.',
        cta: 'В дивизион',
      },
      agroCard: {
        title: 'Сельскохозяйственный дивизион',
        desc: 'Премиальный экспорт органической агропродукции. Поставка отборных сухофруктов, изюма, кураги и орехов, сертифицированных по международным стандартам безопасности пищевых продуктов.',
        cta: 'В дивизион',
      },
      process: {
        title: 'Визуализация процесса экспорта',
        subtitle: 'Полностью оптимизированные этапы работы — от детального B2B-запроса до доставки в международные порты.',
        step1: { title: 'Запрос', desc: 'Согласование точных технических параметров и объемов заказа.' },
        step2: { title: 'Производство', desc: 'Автоматизированный выпуск на заводах или калиброванный сбор урожая.' },
        step3: { title: 'Контроль', desc: 'Строгая проверка в лаборатории на отсутствие дефектов и хим. примесей.' },
        step4: { title: 'Отгрузка', desc: 'Надежная экспортная упаковка груза и мультимодальная логистика.' },
        step5: { title: 'Доставка', desc: 'Быстрое таможенное оформление и передача контейнеров на ваш склад.' }
      },
      markets: {
        title: 'География поставок',
        subtitle: 'Поставляем продукцию в ключевые международные торговые зоны.',
        europe: 'Европа (Германия, Польша, Италия)',
        mena: 'Ближний Восток (ОАЭ, Саудовская Аравия, Египет)',
        cis: 'СНГ (Казахстан, Азербайджан, Россия)',
        asia: 'Азия (Индия, Китай, Вьетнам)',
        visualMap: 'Интерактивная карта мира'
      },
      ctaBlock: {
        title: 'Начните B2B-партнерство',
        subtitle: 'Наши специалисты готовы обработать ваш запрос спецификаций, проверить стандарты и выдать коммерческое предложение в течение 24 часов.',
        cta: 'Отправить запрос',
        whatsapp: 'Экспортный отдел в WhatsApp'
      }
    },
    aboutPage: {
      title: 'Холдинг «Zarvadiy Group»',
      subtitle: 'Объединяем производственный потенциал и щедрость природы региона для требовательных мировых импортеров.',
      storyTitle: 'Наша история и философия экспорта',
      storyDesc: 'Холдинг Zarvadiy был основан для построения надежных цепочек поставок на мировом рынке. Будучи материнской компанией холдинга, мы координируем работу производственных комбинатов, логистических центров и испытательных лабораторий для обслуживания B2B-клиентов в Европе и MENA. Мы успешно объединяем строгие промышленные поставки и деликатный аграрный сектор, поддерживая безупречное качество в обоих направлениях.',
      missionTitle: 'Наша миссия',
      missionDesc: 'Обеспечивать мировой рынок премиальным сырьем и продуктами переработки, поддерживая абсолютную прозрачность логистики, строгое соблюдение регламентов и интересы партнеров.',
      visionTitle: 'Наше видение',
      visionDesc: 'Стать глобально конкурентоспособным диверсифицированным холдингом, открывающим богатейший промышленный и аграрный потенциал Центральной Азии для премиальных мировых покупателей.',
      stats: {
        purity: 'Строгий аудит',
        capacity: 'Мультимодальные пути',
        partners: 'Премиум-клиенты',
        experience: 'Мировые стандарты'
      },
      timeline: {
        title: 'Этапы масштабирования',
        item1: { year: '2021', title: 'Основание холдинга', desc: 'Объединение региональных экспортеров под единым премиальным брендом Zarvadiy.' },
        item2: { year: '2022', title: 'Старт пром-направления', desc: 'Начало экспорта медных и стальных труб по стандартам ISO и EN в Европу.' },
        item3: { year: '2023', title: 'Запуск агро-дивизиона', desc: 'Строительство высокотехнологичного комплекса очистки и лазерной сортировки сухофруктов.' },
        item4: { year: '2024', title: 'Хаб глобальной торговли', desc: 'Открытие представительств и специализированных терминалов для отгрузок в MENA и ЕС.' }
      }
    },
    industrial: {
      heroTitle: 'Премиальный промышленный экспорт в Европу',
      heroSubtitle: 'Инженерные решения поставок: трубы из углеродистой и нержавеющей стали, тяжелая трубопроводная арматура.',
      aboutTitle: 'О промышленном дивизионе',
      aboutDesc: 'Промышленный дивизион представляет собой надежный конгломерат B2B-производства и поставок. Работая на базе передовых металлургических предприятий, мы снабжаем строительные, энергетические и климатические компании прочной сертифицированной продукцией. Мы строго придерживаемся стандартов ASTM, ASME, EN и DIN, гарантируя идеальную точность геометрических параметров для работы под высокими нагрузками.',
      capabilities: {
        title: 'Технологические мощности',
        subtitle: 'Передовые технологии для производства изделий с нулевыми допусками.',
        item1: { title: 'Прессование и волочение', desc: 'Выпуск бесшовных труб из углеродистой и легированной стали на волочильных станах.' },
        item2: { title: 'Индукционный отжиг', desc: 'Компьютерный контроль термообработки для придания металлу нужной прочности.' },
        item3: { title: 'Неразрушающий контроль', desc: '100% ультразвуковая, вихретоковая дефектоскопия и гидроиспытания стенок труб.' }
      },
      certifications: {
        title: 'Промышленные сертификаты',
        desc: 'Наши процессы и изделия полностью сертифицированы независимыми международными лабораториями.'
      },
      logistics: {
        title: 'Техническая упаковка и тяжелая логистика',
        desc: 'Стальные и медные изделия требуют надежной защиты. Мы покрываем металл консервационным маслом, надеваем заглушки на торцы труб, упаковываем в водонепроницаемые материалы и прочные деревянные обрешетки с фиксацией стальными лентами. Логистические операции отслеживаются по всему пути следования.'
      }
    },
    agro: {
      heroTitle: 'Натуральный агроэкспорт премиум-класса',
      heroSubtitle: 'Экологически чистые сухофрукты и орехи из Центральной Азии, упакованные по строгим регламентам HACCP и пищевой безопасности.',
      aboutTitle: 'О сельскохозяйственном дивизионе',
      aboutDesc: 'Агро-дивизион Zarvadiy ориентирован на высочайшие экологические стандарты качества, черпая вдохновение в естественной чистоте природы. Собранные на пике спелости фрукты моются, сушатся и калибруются на современном лазерном оборудовании chromatic сортировки. Мы являемся стабильным поставщиком кондитерских фабрик, торговых сетей и фасовочных производств в странах Европы и Ближнего Востока.',
      process: {
        title: 'Этапы очистки и подготовки продукции',
        subtitle: 'Сырье проходит многоуровневый цикл подготовки для удаления любых примесей и калибровки цвета.',
        step1: { title: 'Отбор сырья', desc: 'Прямые закупки у проверенных фермеров, проводящих регулярные аудиты почв.' },
        step2: { title: 'Эко-мойка', desc: 'Многократное промывание чистой водой в поточных каналах без добавления химии.' },
        step3: { title: 'Сушка на солнце', desc: 'Естественное высушивание под жарким солнцем для сохранения сладости и витаминов.' },
        step4: { title: 'Лазерный отбор', desc: 'Выявление и удаление поврежденных плодов и мелких примесей на лазерных установках.' },
        step5: { title: 'Упаковка', desc: 'Стерильная расфасовка и вакуумирование в короба для долгого сохранения свежести.' }
      },
      packaging: {
        title: 'Современная розничная и оптовая упаковка',
        desc: 'Мы предлагаем гибкие форматы упаковки: розничные дой-паки с zip-замком и высокими барьерными свойствами, а также промышленные многослойные гофрокороба с пищевыми вкладышами для оптовиков.'
      },
      certifications: {
        title: 'Стандарты пищевой безопасности',
        desc: 'Наши заводы сертифицированы по системам HACCP, ISO 22000, гарантируя полную биобезопасность и отслеживаемость.'
      }
    },
    industrialProducts: {
      title: 'Промышленный каталог',
      subtitle: 'Профессиональные линейки металлопроката и арматуры, созданные для экстремальных давлений и температур.',
      viewDetails: 'Технические параметры',
      items: {
        'stainless-tubes': {
          title: 'Трубы из нержавеющей стали',
          shortDesc: 'Бесшовные коррозионностойкие нержавеющие трубы для химической, пищевой и нефтегазовой отраслей.',
          desc: 'Трубы из нержавеющей стали аустенитных марок. Идеальное решение для агрессивных сред, производимое методом холодного волочения с безупречной чистотой внутренних стенок.',
          overview: 'Бесшовные нержавеющие трубы, спроектированные для эксплуатации на химических заводах, в котельных установках и на пищевых линиях с высокими санитарными требованиями.',
          specs: [
            { label: 'Марки стали', value: '304/304L, 316/316L, 321, S31803' },
            { label: 'Внешний диаметр', value: '6.0 мм - 219.0 мм' },
            { label: 'Толщина стенки', value: '0.5 мм - 12.0 мм' },
            { label: 'Стандарты', value: 'ASTM A213, ASTM A312, EN 10216-5' }
          ],
          apps: 'Промышленные теплообменники, трубопроводы агрессивных химреагентов, судостроение, санитарные пищевые трубопроводы, гидравлические системы высокого давления.',
          dims: 'Поставка стандартными отрезками по 6 метров или под индивидуальную длину заказчика. Концы ровные или скошенные под сварку.',
          pkg: 'Связаны стальной лентой, обернуты полиэтиленом и уложены в прочные экспортные деревянные ящики с фумигацией.',
          certs: 'ISO 9001:2015, PED 2014/68/EU, сертификация TUV Rheinland.',
          export: 'Морскими 20-футовыми контейнерами. Условия поставки FOB Ташкент или CIF порты ЕС/MENA.'
        },
        'carbon-tubes': {
          title: 'Трубы из углеродистой стали',
          shortDesc: 'Прочные бесшовные трубы для нефтепроводов, металлоконструкций и паровых линий.',
          desc: 'Бесшовные трубы повышенной механической прочности. Идеальны для гидравлических установок, опорных строительных конструкций и распределителей пара высокого давления.',
          overview: 'Промышленные бесшовные стальные трубы из конструкционных и легированных марок, предназначенные для ответственных паропроводов и механической обработки.',
          specs: [
            { label: 'Марки стали', value: 'Grade B, X42, X52, S235JR, S355J2H' },
            { label: 'Внешний диаметр', value: '21.3 мм - 609.6 мм' },
            { label: 'Толщина стенки', value: '2.0 мм - 40.0 мм' },
            { label: 'Стандарты', value: 'ASTM A106, ASTM A53, EN 10210' }
          ],
          apps: 'Магистральные нефтегазопроводы, котлы высокого давления, каркасы высотных зданий, опоры мостов, оси тяжелой техники.',
          dims: 'Немерная длина от 5.8м до 12.0м, или мерные индивидуальные отрезки.',
          pkg: 'Упакованы в связки со стальным бандажом, покрыты консервационным антикоррозийным лаком, торцы защищены заглушками.',
          certs: 'Лицензия API 5L, соответствие маркировке CE, ISO 9001.',
          export: 'Поставки ж/д вагонами или автотранспортом. Таможенное оформление и транзитные разрешения готовятся за 48 часов.'
        },
        'pipe-fittings': {
          title: 'Трубопроводные фитинги',
          shortDesc: 'Бесшовные отводы, тройники, переходы и заглушки для герметичного монтажа трубопроводов.',
          desc: 'Высокоточные соединительные элементы из стали и меди. Спроектированы для минимизации потерь давления и выдерживания частых гидроударов.',
          overview: 'Детали трубопроводов под приварку встык или муфтовое соединение, обеспечивающие герметичное разветвление и изменение направления движения сред.',
          specs: [
            { label: 'Виды изделий', value: 'Отводы крутоизогнутые (45/90/180 град.), тройники, переходы, заглушки' },
            { label: 'Диапазоны', value: 'DN15 - DN600' },
            { label: 'Стандарты', value: 'ASME B16.9, EN 10253, ASME B16.11' },
            { label: 'Материалы', value: 'Углеродистая сталь, нержавеющая сталь, медь марки C12200' }
          ],
          apps: 'Контуры систем охлаждения, обвязка чиллеров и сплит-систем, технологические обвязки заводов, водораспределительные узлы.',
          dims: 'Толщина стенок строго соответствует расчетам трубопроводов SCH40, SCH80, XXS.',
          pkg: 'Уложены в фанерные ящики на деревянных поддонах с ременной утяжкой для удобства разгрузки погрузчиками.',
          certs: 'Соответствие PED (Директива по оборудованию под давлением), сертификаты 10204 3.1.',
          export: 'Авиа или контейнерные перевозки. Полная помощь в таможенной очистке.'
        },
        'valves': {
          title: 'Промышленные задвижки и клапаны',
          shortDesc: 'Шаровые краны, задвижки, вентили и обратные клапаны для регулирования потоков сред.',
          desc: 'Надежная запорная арматура высокого давления. Герметичные уплотнения металл-металл или мягкие седла обеспечивают нулевой уровень протечек.',
          overview: 'Трубопроводная арматура для надежной отсечки и точной регулировки газообразных, жидких и вязких сред в тяжелых условиях эксплуатации.',
          specs: [
            { label: 'Типы арматуры', value: 'Шаровые краны, клиновые задвижки, проходные вентили, обратные клапаны' },
            { label: 'Классы давления', value: 'Class 150 - Class 2500, PN16 - PN420' },
            { label: 'Материалы корпуса', value: 'Сталь WCB, нержавеющая сталь CF8/CF8M, кованая сталь A105' },
            { label: 'Стандарты', value: 'API 6D, API 600, BS 1868, EN 13709' }
          ],
          apps: 'Нефтехимические заводы, тепловые электростанции, водоочистные сооружения, горнодобывающие комплексы.',
          dims: 'Фланцевые соединения, под приварку встык или резьбовые муфты.',
          pkg: 'Каждый клапан обернут амортизирующей пленкой и жестко зафиксирован в ящиках.',
          certs: 'Лицензия API 6D, пожаробезопасность API 607 (Fire-Safe), SIL 3.',
          export: 'Контейнерные отгрузки. Прилагаются сертификаты происхождения СТ-1.'
        },
        'flanges': {
          title: 'Стальные фланцы',
          shortDesc: 'Воротниковые, плоские и глухие кованые фланцы для прочных соединений труб.',
          desc: 'Кованые фланцы, обеспечивающие легкий монтаж и обслуживание промышленных трубопроводов. Высокоточная обработка зеркала фланца гарантирует герметичность.',
          overview: 'Фланцевые диски высокого давления для механического монтажа задвижек, теплообменников и соединения протяженных участков труб.',
          specs: [
            { label: 'Типы фланцев', value: 'Воротниковые (Weld Neck), Плоские (Slip On), Глухие (Blind), Резьбовые' },
            { label: 'Форма зеркала', value: 'Выступающее (RF), Плоское (FF), Под прокладку овального сечения (RTJ)' },
            { label: 'Материалы', value: 'Кованая сталь ASTM A105, нержавеющая сталь A182 F304/F316' },
            { label: 'Стандарты', value: 'ASME B16.5, ASME B16.47, EN 1092-1' }
          ],
          apps: 'Обвязка насосных станций, подключение резервуаров, теплообменников, монтаж измерительного оборудования.',
          dims: 'Номинальные размеры от 1/2" до 60" дюймов. Точная соосность крепежных отверстий.',
          pkg: 'Защита зеркала пластиковыми заглушками, покрытие консервационным воском, упаковка в ящики.',
          certs: 'ISO 9001, PED 2014/68/EU, сертификат EN 10204 3.1.',
          export: 'Отгрузка из портов Рига или Бандар-Аббас, быстрая доставка по СНГ и ЕС ж/д вагонами.'
        }
      }
    },
    agroProducts: {
      title: 'Агро-каталог',
      subtitle: 'Натуральные, спелые и богатые витаминами органические сухофрукты и орехи.',
      viewDetails: 'Подробнее о продукте',
      items: {
        'raisins': {
          title: 'Премиальный изюм',
          shortDesc: 'Светлый (золотой), черный и красный изюм, калиброванный на лазерном chromatic оборудовании.',
          desc: 'Высушенный на солнце виноград из щедрых долин Самарканда. Обработка на лазерных сепараторах гарантирует идеальную чистоту 99.9%.',
          overview: 'Бессемянный изюм высшего сорта. Имеет высокий уровень натуральных сахаров. Идеален для розничной торговли, хлебобулочных фабрик и здорового питания.',
          origin: 'Самаркандская область, Узбекистан. Выращен на плодородных почвах предгорий с поливом чистой горной водой.',
          harvest: 'Сентябрьский ручной сбор винограда. Сушка на деревянных палетах под солнцем от 14 до 21 дня.',
          life: '12 месяцев. Хранить в сухих помещениях (+5°C...+15°C, влажность воздуха до 70%).',
          pkg: 'Короба по 10 кг с прочными пищевыми полиэтиленовыми вкладышами синего цвета. Фасовка в дой-паки (250г, 500г, 1кг).',
          certs: 'Органический сертификат, HACCP, ISO 22000:2018, сертификаты Халяль и Кошер.',
          export: 'Крытые еврофуры или морские контейнеры. Быстрый экспорт в порты ЕС и Ближнего Востока.'
        },
        'apricots': {
          title: 'Натуральная курага',
          shortDesc: 'Естественно высушенные цельные плоды абрикоса без добавления диоксида серы или красителей.',
          desc: 'Спелая отборная курага без косточек с глубоким янтарно-коричневым цветом. Максимальное сохранение калия, клетчатки и природных витаминов.',
          overview: 'Мягкая натуральная курага без косточки. Не содержит сахара или химических консервантов. Сладкий, насыщенный вкус.',
          origin: 'Ферганская долина, Узбекистан — исторический центр лучших абрикосовых садов.',
          harvest: 'Сбор вручную в июне-июле. Извлечение косточки и теневая естественная сушка.',
          life: '12 месяцев. Оптимальная температура хранения (+2°C...+8°C).',
          pkg: 'Вакуумная упаковка 4х2.5 кг в плотных коробках по 10 кг для предотвращения заветривания.',
          certs: 'HACCP, ISO 22000, сертификаты органического соответствия.',
          export: 'Рефрижераторные контейнеры или автотранспорт. Полный пакет документов на таможне.'
        },
        'prunes': {
          title: 'Чернослив без косточки',
          shortDesc: 'Сочный, мягкий калиброванный чернослив, прошедший деликатную туннельную сушку и стерилизацию.',
          desc: 'Крупная спелая слива, переработанная в современных туннельных печах. Мягкая текстура и оптимальная влажность для розничной продажи и снеков.',
          overview: 'Мягкий чернослив без косточки высшего качества. Равномерный калибр, прошел бережную пастеризацию и готов к фасовке.',
          origin: 'Ташкентская область, Узбекистан.',
          harvest: 'Август. Ручной сбор, калибровка по размеру, туннельная сушка, последующая обработка паром.',
          life: '9 месяцев при хранении в прохладе (+5°C...+15°C).',
          pkg: 'Картонные ящики по 12.5 кг. Также фасовка в розничные пакеты под брендом заказчика (Private Label).',
          certs: 'ISO 22000, HACCP, Халяль.',
          export: 'Быстрые контейнерные перевозки. Фитосанитарный контроль пройден на 100%.'
        },
        'nuts': {
          title: 'Ядра грецкого ореха и миндаль',
          shortDesc: 'Очищенный светлый грецкий орех и сладкий горный миндаль, калиброванные для кондитеров.',
          desc: 'Цельные ядра грецкого ореха (1/2, 1/4) и крупный миндаль. Контроль влажности (менее 6%) гарантирует отличный хруст и долгий срок хранения.',
          overview: 'Ядра грецких орехов (светлая бабочка, четвертинки) и калиброванный сырой миндаль. Без скорлупы и посторонних примесей.',
          origin: 'Горные районы Бостанлыка, Узбекистан. Выращены в условиях перепада температур для накопления масел.',
          harvest: 'Сентябрь-октябрь. Ручная колка, лазерная сепарация ядер по цвету и размеру.',
          life: '9 месяцев. Хранение в вакуумных мешках при температурах (+2°C...+6°C) для предотвращения прогоркания.',
          pkg: 'Вакуумные пакеты по 10 кг в жестких коробах или розничные дой-паки с азотным наполнением.',
          certs: 'HACCP, ISO 22000, экологические сертификаты.',
          export: 'Авиадоставка для срочных заказов или стандартные сухие контейнеры по морю.'
        }
      }
    },
    contactPage: {
      title: 'Экспортный отдел холдинга',
      subtitle: 'Запросите образцы, спецификации или отправьте детальное техническое задание на просчет.',
      infoTitle: 'Контакты представительства',
      email: 'Эл. почта',
      phone: 'Телефон',
      website: 'Сайт',
      telegram: 'Телеграм',
      linkedin: 'Линкедин',
      instagram: 'Инстаграм',
      facebook: 'Фейсбук',
      address: 'Адрес',
      addressValue: 'Узбекистан, г. Ташкент, Чиланзарский р-н, пр. Бунёдкор, 41 (100043)',
      formTitle: 'Отправить коммерческий запрос',
      formSubtitle: 'Заполните форму заказа, и наши специалисты по международной торговле подготовят ответ за 24 часа.',
      formName: 'Ваше имя',
      formEmail: 'Эл. почта (корпоративная)',
      formPhone: 'Телефон / WhatsApp',
      formCompany: 'Компания / Страна',
      formMsg: 'Детали заказа / Требования к продукции',
      formSubmit: 'Отправить запрос',
      formSuccess: 'Спасибо! Ваш экспортный запрос зарегистрирован. Менеджер свяжется с вами в течение рабочего дня.',
      formError: 'Пожалуйста, заполните все обязательные поля.'
    },
    footer: {
      desc: 'ООО «Zarvadiy» — международный многоотраслевой экспортный холдинг. Мы поставляем промышленный металлопрокат и органическую агропродукцию премиум-класса покупателям в ЕС и странах Ближнего Востока.',
      quickLinks: 'Ссылки холдинга',
      contactUs: 'Экспортный отдел',
      rights: 'Все права защищены.'
    }
  },
  uz: {
    nav: {
      home: 'Bosh sahifa',
      about: 'Kompaniya haqida',
      industries: 'Yo‘nalishlar',
      markets: 'Eksport bozorlari',
      contact: 'Aloqalar',
    },
    hero: {
      tagline: 'ZARVADIY XOLDING',
      title: 'Turli sohalarda global eksport yechimlari',
      subtitle: 'Yevropa va Yaqin Sharq (MENA) B2B xaridorlarini ISO standartlaridagi mustahkam ta’minot zanjirlari bilan bog‘lovchi professional eksport xizmati.',
      cta: 'Eksport sohalari',
      ctaQuote: 'Narxni hisoblash',
      statHolding: 'Tarkibiy tarmoqlar',
      statExport: 'Eksport bozorlari',
      statQuality: 'Ishonch reytingi',
    },
    holding: {
      industriesTitle: 'Asosiy biznes tarmoqlari',
      industriesSubtitle: 'Sanoat va oziq-ovqat eksporti ehtiyojlari uchun maxsus tashkil etilgan jahon andozalaridagi ikkita yirik departament.',
      industrialCard: {
        title: 'Sanoat departamenti',
        desc: 'Yuqori texnologiyali sanoat eksporti. B2B infratuzilma loyihalari uchun zanglamaydigan va uglerodli po‘lat quvurlar, fitinglar, klapanlar va gardishlar yetkazib berish.',
        cta: 'Departamentga o‘tish',
      },
      agroCard: {
        title: 'Qishloq xo‘jaligi departamenti',
        desc: 'Premium organik qishloq xo‘jaligi eksporti. Xalqaro ozi-ovqat xavfsizligi standartlari bo‘yicha sertifikatlangan sarxil quritilgan mevalar, mayiz, turshak va yong‘oqlar yetkazib berish.',
        cta: 'Departamentga o‘tish',
      },
      process: {
        title: 'Eksport jarayoni bosqichlari',
        subtitle: 'Batafsil B2B so‘rovidan tortib xalqaro portlarga yetkazib berishgacha bo‘lgan to‘liq optimallashtirilgan ish oqimi.',
        step1: { title: 'So‘rov', desc: 'Aniq texnik ko‘rsatkichlar va buyurtma hajmini kelishib olish.' },
        step2: { title: 'Ishlab chiqarish', desc: 'Zavodlarda avtomatlashtirilgan ishlab chiqarish yoki saralangan hosil yig‘ish.' },
        step3: { title: 'Sifat nazorati', desc: 'Laboratoriyada qusur va kimyoviy qo‘shimchalar yo‘qligini qat’iy tekshirish.' },
        step4: { title: 'Yuklash', desc: 'Mustahkam eksport qadog‘i va ko‘p tarmoqli (multimodal) logistika.' },
        step5: { title: 'Yetkazib berish', desc: 'Tezkor bojxona rasmiylashtiruvi va konteynerlarni omboringizga topshirish.' }
      },
      markets: {
        title: 'Eksport geografiyasi',
        subtitle: 'Mahsulotlarimizni eng yirik xalqaro savdo hududlariga yetkazib beramiz.',
        europe: 'Yevropa (Germaniya, Polsha, Italiya)',
        mena: 'Yaqin Sharq (BAA, Saudiya Arabistoni, Misr)',
        cis: 'MDH (Qozog‘iston, Ozarbayjon, Rossiya)',
        asia: 'Osiyo (Hindiston, Xitoy, Vyetnam)',
        visualMap: 'Interaktiv dunyo xaritasi'
      },
      ctaBlock: {
        title: 'B2B hamkorlikni boshlang',
        subtitle: 'Bizning mutaxassislarimiz texnik ko‘rsatkichlar bo‘yicha so‘rovingizni ko‘rib chiqishga va 24 soat ichida tijorat taklifini taqdim etishga tayyor.',
        cta: 'So‘rov yuborish',
        whatsapp: 'WhatsApp eksport bo‘limi'
      }
    },
    aboutPage: {
      title: '«Zarvadiy Group» Xoldingi',
      subtitle: 'Mintaqamizning ishlab chiqarish quvvatini va tabiat in’omlarini jahon darajasidagi importyorlar uchun birlashtiramiz.',
      storyTitle: 'Tariximiz va eksport falsafamiz',
      storyDesc: 'Zarvadiy xoldingi jahon bozorida ishonchli ta’minot zanjirini yaratish maqsadida tashkil etilgan. Bosh kompaniya sifatida biz ishlab chiqarish kombinatlari, logistika markazlari va sinov laboratoriyalari faoliyatini muvofiqlashtiramiz. Biz og‘ir sanoat quvurlarini va nozik agrar tarmoqni yagona ekotizimda birlashtirib, har ikki yo‘nalishda ham mukammal sifatni ta’minlab kelmoqdamiz.',
      missionTitle: 'Missiyamiz',
      missionDesc: 'Jahon bozorini premium xomashyo va qayta ishlangan mahsulotlar bilan ta’minlash, logistikaning shaffofligini va xalqaro reglamentlarga to‘liq rioya etilishini kafolatlash.',
      visionTitle: 'Kelajak rejamiz',
      visionDesc: 'Markaziy Osiyoning boy sanoat va agrar salohiyatini premium xalqaro xaridorlarga ochib beruvchi, jahon darajasida raqobatbardosh diversifikatsiyalangan xoldingga aylanish.',
      stats: {
        purity: 'Qat’iy audit',
        capacity: 'Ko‘p tarmoqli yo‘llar',
        partners: 'Premium mijozlar',
        experience: 'Jahon standartlari'
      },
      timeline: {
        title: 'Rivojlanish bosqichlari',
        item1: { year: '2021', title: 'Xolding tashkil topishi', desc: 'Mintaqaviy eksportyorlarning yagona premium Zarvadiy brendi ostida birlashishi.' },
        item2: { year: '2022', title: 'Sanoat tarmog‘i starti', desc: 'Yevropaga ISO va EN standartlari asosida mis va po‘lat quvurlar eksportining boshlanishi.' },
        item3: { year: '2023', title: 'Agro departament ishga tushishi', desc: 'Quritilgan mevalarni tozalash va lazer yordamida saralash yuqori texnologiyali majmuasi qurilishi.' },
        item4: { year: '2024', title: 'Global savdo xabi', desc: 'Yaqin Sharq va Yevropa Ittifoqiga yuklarni jo‘natish uchun maxsus terminallar va vakolatxonalar ochilishi.' }
      }
    },
    industrial: {
      heroTitle: 'Yevropaga premium sanoat mahsulotlari eksporti',
      heroSubtitle: 'Muhandislik yechimlari: uglerodli va zanglamaydigan po‘lat quvurlar, og‘ir quvur armaturalari.',
      aboutTitle: 'Sanoat departamenti haqida',
      aboutDesc: 'Sanoat departamentimiz B2B ishlab chiqarish va yetkazib berishning mustahkam tarmog‘idir. Ilg‘or metallurgiya korxonalari bazasida faoliyat yuritib, biz qurilish, energetika va sovutish tizimlari kompaniyalarini sertifikatlangan mahsulotlar bilan ta’minlaymiz. ASTM, ASME, EN va DIN standartlariga qat’iy rioya qilib, yuqori bosim ostida ishlash uchun ideal geometrik aniqlikni kafolatlaymiz.',
      capabilities: {
        title: 'Texnik imkoniyatlar',
        subtitle: 'Nuqsonsiz va yuqori aniqlikdagi mahsulotlar ishlab chiqarish texnologiyalari.',
        item1: { title: 'Presslash va tortish', desc: 'Sovuq tortish stanoklarida choksiz uglerodli va legirlangan po‘lat quvurlar ishlab chiqarish.' },
        item2: { title: 'Induksion tovlash', desc: 'Metallga kerakli mustahkamlik va egiluvchanlik berish uchun kompyuter nazoratidagi issiqlik ishlovi.' },
        item3: { title: 'Nuqsonsiz tekshirish', desc: 'Quvur devorlarini 100% ultratovush, induksion tok va gidravlik usullarda to‘liq tekshirish.' }
      },
      certifications: {
        title: 'Sanoat sertifikatlari',
        desc: 'Bizning jarayonlarimiz va mahsulotlarimiz mustaqil xalqaro laboratoriyalar tomonidan to‘liq sertifikatlangan.'
      },
      logistics: {
        title: 'Texnik qadoqlash va og‘ir logistika',
        desc: 'Po‘lat va mis mahsulotlari ishonchli himoyani talab qiladi. Biz metallni zangga qarshi moy bilan qoplaymiz, uchlariga plastik tiqinlar taqamiz, namlikdan himoyalovchi materiallarga o‘rab, po‘lat lentalar bilan mahkamlangan yog‘och yashiklarga joylaymiz.'
      }
    },
    agro: {
      heroTitle: 'Tabiiy va yuqori sifatli agroeksport',
      heroSubtitle: 'Markaziy Osiyoning ekologik toza quritilgan mevalari va yong‘oqlari, HACCP va ozi-ovqat xavfsizligi tizimi bo‘yicha qadoqlangan.',
      aboutTitle: 'Qishloq xo‘jaligi departamenti haqida',
      aboutDesc: 'Zarvadiy agro-departamenti tabiatning tozaligidan ilhomlanib, eng yuqori ekologik standartlarga tayanadi. Pishib yetilgan mevalar yuviladi, quritiladi va zamonaviy lazer yordamida saralanadi. Biz Yevropa va Yaqin Sharq mamlakatlaridagi qandolatchilik fabrikalari, savdo tarmoqlari va qadoqlash ishlab chiqarishlarining barqaror ta’minotchisimiz.',
      process: {
        title: 'Mahsulotni tozalash va tayyorlash bosqichlari',
        subtitle: 'Xomashyo har qanday qo‘shimchalardan tozalanishi va rangiga ko‘ra saralanishi uchun ko‘p bosqichli sikldan o‘tadi.',
        step1: { title: 'Xomashyoni tanlash', desc: 'Tuproqlari muntazam tekshiriladigan ishonchli fermerlardan to‘g‘ridan-to‘g‘ri xarid qilish.' },
        step2: { title: 'Eko-yuvish', desc: 'Oqava suv kanallarida kimyoviy moddalarsiz, toza suv yordamida ko‘p marta yuvish.' },
        step3: { title: 'Quyoshda quritish', desc: 'Tabiiy shirinlik va vitaminlarni saqlab qolish uchun quyosh ostida quritish.' },
        step4: { title: 'Lazer yordamida saralash', desc: 'Shikastlangan mevalarni va mayda aralashmalarni lazer uskunalari orqali aniqlash va olib tashlash.' },
        step5: { title: 'Qadoqlash', desc: 'Sokin va steril qutilarga qadoqlash hamda uzoq vaqt yangiligini saqlash uchun vakuumlash.' }
      },
      packaging: {
        title: 'Zamonaviy chakana va ulgurji qadoqlash',
        desc: 'Biz moslashuvchan qadoqlash formatlarini taklif etamiz: zip-qulflangan chakana doypaklar va ulgurji xaridorlar uchun ichki ozi-ovqat vkladishlariga ega ko‘p qatlamli gofrokarton qutilar.'
      },
      certifications: {
        title: 'Ozi-ovqat xavfsizligi standartlari',
        desc: 'Zavodlarimiz HACCP, ISO 22000 tizimlari bo‘yicha sertifikatlangan bo‘lib, to‘liq bioxavfsizlikni kafolatlaydi.'
      }
    },
    industrialProducts: {
      title: 'Sanoat mahsulotlari katalogi',
      subtitle: 'Ekstremal bosim va haroratlar uchun mo‘ljallangan professional metall prokat va quvur armaturalari liniyalari.',
      viewDetails: 'Texnik ko‘rsatkichlar',
      items: {
        'stainless-tubes': {
          title: 'Zanglamaydigan po‘lat quvurlar',
          shortDesc: 'Kimyo, ozi-ovqat va neft-gaz tarmoqlari uchun choksiz, korroziyaga chidamli zanglamaydigan quvurlar.',
          desc: 'Austenit toifasidagi zanglamaydigan po‘lat quvurlar. Agresiv muhitlar uchun eng to‘g‘ri yechim bo‘lib, sovuq tortish usuli bilan tayyorlanadi.',
          overview: 'Kimyoviy zavodlarda, qozonxona qurilmalarida va yuqori sanitariya talablariga ega ozi-ovqat tarmoqlarida foydalanish uchun mo‘ljallangan zanglamaydigan quvurlar.',
          specs: [
            { label: 'Po‘lat markalari', value: '304/304L, 316/316L, 321, S31803' },
            { label: 'Tashqi diametri', value: '6.0 mm - 219.0 mm' },
            { label: 'Devor qalinligi', value: '0.5 mm - 12.0 mm' },
            { label: 'Standartlar', value: 'ASTM A213, ASTM A312, EN 10216-5' }
          ],
          apps: 'Sanoat issiqlik almashinuvchilari, agressiv kimyoviy moddalar quvurlari, kemasozlik, sanitariya ozi-ovqat quvurlari, yuqori bosimli gidravlik tizimlar.',
          dims: 'Standart 6 metrli o‘lchamlarda yoki buyurtmachi o‘lchamlari bo‘yicha yetkazib berish. Uchlari tekis yoki payvandlash uchun qiyalatilgan.',
          pkg: 'Po‘lat lenta bilan bog‘langan, polietilenga o‘ralgan va fumigatsiya qilingan mustahkam yog‘och yashiklarga joylangan.',
          certs: 'ISO 9001:2015, PED 2014/68/EU, TUV Rheinland sertifikati.',
          export: '20 futlik dengiz konteynerlarida. Yetkazib berish shartlari: FOB Toshkent yoki Yevropa/MENA portlariga CIF.'
        },
        'carbon-tubes': {
          title: 'Uglerodli po‘lat quvurlar',
          shortDesc: 'Neft quvurlari, metall konstruksiyalar va yuqori bosimli bug‘ liniyalari uchun choksiz quvurlar.',
          desc: 'Mexanik mustahkamligi yuqori bo‘lgan choksiz quvurlar. Gidravlik qurilmalar, bino karkaslari va yuqori bosimli bug‘ tarqatuvchilar uchun ideal.',
          overview: 'Mas’uliyatli bug‘ quvurlari va mexanik ishlov berish uchun mo‘ljallangan, konstruksion va legirlangan markalardan tayyorlangan choksiz quvurlar.',
          specs: [
            { label: 'Po‘lat markalari', value: 'Grade B, X42, X52, S235JR, S355J2H' },
            { label: 'Tashqi diametri', value: '21.3 mm - 609.6 mm' },
            { label: 'Devor qalinligi', value: '2.0 mm - 40.0 mm' },
            { label: 'Standartlar', value: 'ASTM A106, ASTM A53, EN 10210' }
          ],
          apps: 'Magistral neft-gaz quvurlari, yuqori bosimli qozonlar, baland binolar karkaslari, ko‘prik tayanchlari, og‘ir texnika o‘qlari.',
          dims: '5.8 metrdan 12.0 metrgacha bo‘lgan o‘lchamlarda yoki buyurtma asosida kesilgan quvurlar.',
          pkg: 'Po‘lat lenta bilan bog‘langan, zangga qarshi lak bilan qoplangan, uchlari plastik tiqinlar bilan himoyalangan.',
          certs: 'API 5L litsenziyasi, CE muvofiqligi, ISO 9001.',
          export: 'Vagonlar yoki yuk mashinalarida. Bojxona hujjatlari 48 soat ichida rasmiylashtiriladi.'
        },
        'pipe-fittings': {
          title: 'Quvur fitinglari',
          shortDesc: 'Quvurlarni germetik montaj qilish uchun choksiz burilishlar, uchliklar, o‘tish joylari va tiqinlar.',
          desc: 'Po‘lat va misdan tayyorlangan yuqori aniqlikdagi ulovchi elementlar. Bosim yo‘qotilishini kamaytirish va tez-tez sodir bo‘ladigan gidravlik zarbalarga bardosh berish uchun mo‘ljallangan.',
          overview: 'Payvandlanadigan yoki muftali ulanish qismlari bo‘lib, quvurlarni xavfsiz tarmoqlarga ajratish va yo‘nalishini o‘zgartirishni ta’minlaydi.',
          specs: [
            { label: 'Mahsulot turlari', value: 'Burilishlar (45/90/180 gradus), uchliklar, o‘tish fitinglari, tiqinlar' },
            { label: 'O‘lcham oralig‘i', value: 'DN15 - DN600' },
            { label: 'Standartlar', value: 'ASME B16.9, EN 10253, ASME B16.11' },
            { label: 'Materiallar', value: 'Uglerodli po‘lat, zanglamaydigan po‘lat, mis C12200' }
          ],
          apps: 'Sovutish tizimlari konturlari, chillerlar va split tizimlar montaji, zavodlar texnologik tarmoqlari, suv taqsimlash uzellari.',
          dims: 'SCH40, SCH80, XXS standartlariga to‘liq mos keladigan devor qalinliklari.',
          pkg: 'Yuklagichlar uchun qulay tarzda yog‘och poddonlardagi faner yashiklarga joylangan va bog‘langan.',
          certs: 'PED (Bosim ostidagi uskunalar direktivasi) muvofiqligi, EN 10204 3.1 sertifikatlari.',
          export: 'Havo yo‘llari yoki dengiz konteynerlarida. Bojxona rasmiylashtiruvida to‘liq ko‘mak.'
        },
        'valves': {
          title: 'Sanoat klapanlari va zдвижкаlari',
          shortDesc: 'Suyuqlik va gazlar oqimini tartibga solish uchun sharsimon kranlar, klapanlar va zдвижкаlar.',
          desc: 'Yuqori bosimli ishonchli berkituvchi armatura. Metall-metall ulanishi yoki yumshoq zichlagichlar mutlaqo oqishsiz ishlashni kafolatlaydi.',
          overview: 'Og‘ir ish sharoitlarida gaz, suyuqlik va yopishqoq muhitlarni ishonchli to‘sish va aniq tartibga solish uchun quvur armaturasi.',
          specs: [
            { label: 'Armatura turlari', value: 'Sharsimon kranlar, xanjarli zдвижкаlar, o‘tish klapanlari, qaytish klapanlari' },
            { label: 'Bosim sinflari', value: 'Class 150 - Class 2500, PN16 - PN420' },
            { label: 'Korpus materiallari', value: 'WCB po‘lat, CF8/CF8M zanglamaydigan po‘lat, A105 toblangan po‘lat' },
            { label: 'Standartlar', value: 'API 6D, API 600, BS 1868, EN 13709' }
          ],
          apps: 'Neft-kimyo zavodlari, issiqlik elektr stansiyalari, suv tozalash inshootlari, tog‘-kon majmualari.',
          dims: 'Flanesli ulanish, payvandlash yoki rezbali muftalar yordamida.',
          pkg: 'Har bir klapan amortizatsiya plyonkasiga o‘ralgan va yashiklarda mahkamlangan.',
          certs: 'API 6D litsenziyasi, API 607 bo‘yicha yong‘in xavfsizligi (Fire-Safe), SIL 3.',
          export: 'Konteynerlarda yuklash. CT-1 kelib chiqish sertifikatlari taqdim etiladi.'
        },
        'flanges': {
          title: 'Po‘lat flaneslar (gardishlar)',
          shortDesc: 'Quvurlarni mustahkam ulash uchun bo‘yinli, yassi va ko‘r soxta flaneslar.',
          desc: 'Sanoat quvurlarini oson montaj qilish va texnik xizmat ko‘rsatishni ta’minlovchi gardishlar. Yuqori aniqlikdagi ishlov berish germetiklikni kafolatlaydi.',
          overview: 'Zдвижкаlar, issiqlik almashinuvchilar va quvurlarni mexanik montaj qilish uchun yuqori bosimli flanes disklari.',
          specs: [
            { label: 'Flanes turlari', value: 'Bo‘yinli (Weld Neck), Yassi (Slip On), Ko‘r (Blind), Rezbali' },
            { label: 'Zichlash shakli', value: 'Bo‘rtmali (RF), Yassi (FF), Oval qistirmali (RTJ)' },
            { label: 'Materiallar', value: 'ASTM A105 toblangan po‘lat, A182 F304/F316 zanglamaydigan po‘lat' },
            { label: 'Standartlar', value: 'ASME B16.5, ASME B16.47, EN 1092-1' }
          ],
          apps: 'Nasos stansiyalari montaji, rezervuarlarni, issiqlik almashinuvchilarni ulash, o‘lchash uskunalarini o‘rnatish.',
          dims: '1/2" dan 60" dyumgacha bo‘lgan nominal o‘lchamlar. Mahkamlash teshiklarining aniq joylashuvi.',
          pkg: 'Zichlash yuzalari plastik qopqoqlar bilan himoyalangan, zangga qarshi mum surtilgan, yashiklarga joylangan.',
          certs: 'ISO 9001, PED 2014/68/EU, EN 10204 3.1 sertifikati.',
          export: 'Riga yoki Bandar-Abbos portlaridan dengiz orqali jo‘natish, MDH va Yevropaga temir yo‘l orqali tezkor yetkazish.'
        }
      }
    },
    agroProducts: {
      title: 'Agro-katalog',
      subtitle: 'Tabiiy, pishgan va vitaminlarga boy organik quritilgan mevalar va yong‘oqlar.',
      viewDetails: 'Mahsulot haqida batafsil',
      items: {
        'raisins': {
          title: 'Premium mayiz',
          shortDesc: 'Lazerli chromatic uskunada saralangan oltin (sariq), qora va qizil mayizlar.',
          desc: 'Samarqandning quyoshli vodiylarida yetishtirilgan va quritilgan uzumlar. Lazer yordamida 99.9% tozalik darajasida saralanadi.',
          overview: 'Oliy navli urug‘siz mayiz. Tabiiy shakar miqdori yuqori. Chakana savdo, non-bulochka fabrikalari va sog‘lom ovqatlanish uchun ideal.',
          origin: 'Samarqand viloyati, O‘zbekiston. Hosildor tog‘oldi tuproqlarida yetishtirilgan va toza tog‘ suvi bilan sug‘orilgan.',
          harvest: 'Sentyabr oyida qo‘lda terilgan. Quyosh ostida maxsus yog‘och supalarda 14 kundan 21 kungacha quritilgan.',
          life: '12 oy. Quruq xonalarda (+5°C...+15°C haroratda, namlik 70% gacha) saqlansin.',
          pkg: 'Ichki polietilen vkladishga ega 10 kg lik qutilar. 250g, 500g va 1kg lik zip-lock chakana paketlar.',
          certs: 'Organik sertifikat, HACCP, ISO 22000:2018, Halol va Kosher sertifikatlari.',
          export: 'Yopiq evro-furalar yoki dengiz konteynerlarida. Yevropa va Yaqin Sharq portlariga tezkor jo‘natish.'
        },
        'apricots': {
          title: 'Tabiiy turshak (Quritilgan o‘rik)',
          shortDesc: 'Oltingugurt dioksidi yoki kimyoviy bo‘yoqlarsiz, tabiiy ravishda quritilgan o‘riklar.',
          desc: 'Tabiiy usulda quritilgan, danaksiz o‘riklar. Kaliy, kletchatka va tabiiy vitaminlar maksimal darajada saqlangan.',
          overview: 'Yumshoq, tabiiy danaksiz turshak. Shakar yoki kimyoviy konservantlar qo‘shilmagan. Shirin va to‘yimli ta’m.',
          origin: 'Farg‘ona vodiysi, O‘zbekiston — eng sara o‘rik bog‘larining tarixiy markazi.',
          harvest: 'Iyun-iyul oylarida qo‘lda terilgan. Danagi ajratilib, soya ostida tabiiy ravishda quritilgan.',
          life: '12 oy. Saqlashning maqbul harorati (+2°C...+8°C).',
          pkg: 'Qurib qolishining oldini olish uchun 10 kg lik qutilarda 4x2.5 kg lik vakuumli paketlar.',
          certs: 'HACCP, ISO 22000, organik muvofiqlik sertifikatlari.',
          export: 'Refrijeratorli konteynerlar yoki avtotransport. Bojxonada barcha hujjatlar taqdim etiladi.'
        },
        'prunes': {
          title: 'Danaksiz чернослив (qora olxo‘ri)',
          shortDesc: 'Yumshoq, saralangan qora olxo‘ri, zamonaviy tunnel pechlarida quritilgan va sterilizatsiya qilingan.',
          desc: 'Zamonaviy tunnel pechlarida qayta ishlangan yirik shirin olxo‘ri. Chakana savdo va gazaklar uchun yumshoq tuzilish va maqbul namlik.',
          overview: 'Yumshoq, oliy sifatli danaksiz чернослив. Bir xil o‘lchamda saralangan va bug‘ yordamida pasterizatsiya qilingan.',
          origin: 'Toshkent viloyati, O‘zbekiston.',
          harvest: 'Avgust. Qo‘lda terish, o‘lchami bo‘yicha saralash, tunnel pechlarda quritish va bug‘ bilan pasterizatsiya.',
          life: '9 oy salqin joyda (+5°C...+15°C) saqlanganda.',
          pkg: '12.5 kg lik karton qutilar. Shuningdek, buyurtmachi brendi ostida chakana paketlarga qadoqlash (Private Label).',
          certs: 'ISO 22000, HACCP, Halol.',
          export: 'Tezkor konteyner tashuvlari. Fitosanitar nazoratdan 100% o‘tgan.'
        },
        'nuts': {
          title: 'Yong‘oq mag‘zi va bodom',
          shortDesc: 'Qandolatchilar uchun maxsus saralangan toza yong‘oq mag‘zi va shirin tog‘ bodomi.',
          desc: 'Butun yong‘oq mag‘izlari (1/2, 1/4) va yirik bodomlar. Namlik nazorati (6% dan kam) uzoq saqlash va ajoyib ta’mni kafolatlaydi.',
          overview: 'Yong‘oq mag‘izlari (och rangli kapalak, choraklar) va saralangan xom bodom. Po‘choqlardan butkul tozalangan.',
          origin: 'Bo‘stonliq tog‘li hududlari, O‘zbekiston. Yuqori shifobaxsh yog‘lar to‘planishi uchun tog‘ iqlimida yetishtirilgan.',
          harvest: 'Sentyabr-oktyabr. Qo‘lda chaqish, lazer yordamida rang va o‘lcham bo‘yicha saralash.',
          life: '9 oy. Achchiq bo‘lib qolishining oldini olish uchun vakuumli qoplarda (+2°C...+6°C) saqlansin.',
          pkg: 'Qattiq qutilarda 10 kg lik vakuum paketlar yoki azot to‘ldirilgan chakana zip-doypaklar.',
          certs: 'HACCP, ISO 22000, ekologik sertifikatlar.',
          export: 'Shoshilinch buyurtmalar uchun havo yo‘llari yoki dengiz orqali quruq konteynerlarda.'
        }
      }
    },
    contactPage: {
      title: 'Xolding eksport bo‘limi',
      subtitle: 'Namuna va spetsifikatsiyalarni so‘rang yoki hisob-kitob uchun buyurtma talablarini yuboring.',
      infoTitle: 'Vakolatxona aloqalari',
      email: 'Elektron pochta',
      phone: 'Telefon raqam',
      website: 'Sayt',
      telegram: 'Telegram',
      linkedin: 'LinkedIn',
      instagram: 'Instagram',
      facebook: 'Facebook',
      address: 'Manzil',
      addressValue: 'O‘zbekiston, Toshkent sh., Chilonzor tumani, Bunyodkor shoh ko‘chasi, 41-uy (100043)',
      formTitle: 'Tijorat so‘rovini yuborish',
      formSubtitle: 'Buyurtma shaklini to‘ldiring, va bizning tashqi savdo menejerlarimiz 24 soat ichida javob tayyorlashadi.',
      formName: 'Ismingiz',
      formEmail: 'Elektron pochta (korporativ)',
      formPhone: 'Telefon / WhatsApp',
      formCompany: 'Kompaniya / Davlat',
      formMsg: 'Buyurtma tafsilotlari / Mahsulot talablari',
      formSubmit: 'So‘rovni yuborish',
      formSuccess: 'Rahmat! Sizning eksport so‘rovingiz ro‘yxatga olindi. Ish kuni davomida menejer siz bilan bog‘lanadi.',
      formError: 'Iltimos, barcha majburiy maydonlarni to‘ldiring.'
    },
    footer: {
      desc: '«Zarvadiy» mas’uliyati cheklangan jamiyati — xalqaro ko‘p tarmoqli eksport xoldingi. Biz sanoat metall prokatini va organik agro mahsulotlarni Yevropa va Yaqin Sharq xaridorlariga yetkazib beramiz.',
      quickLinks: 'Xolding havolalari',
      contactUs: 'Eksport bo‘limi',
      rights: 'Barcha huquqlar himoyalangan.'
    }
  }
};
