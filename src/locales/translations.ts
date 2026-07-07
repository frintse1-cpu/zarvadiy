export type Language = 'en' | 'ru' | 'uz';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Company',
      industries: 'Industries',
      markets: 'Global Markets',
      contact: 'Contact'
    },
    hero: {
      tagline: 'Multi-Industry B2B Holding Platform',
      title: 'Two Business Worlds. One Global Standards Ecosystem.',
      subtitle: 'Connecting international B2B buyers with reliable, high-quality industrial copper metallurgy and ecologically pure organic agricultural harvests.',
      cta: 'Explore Divisions',
      ctaQuote: 'Request Sourcing Quote',
      statHolding: 'Industrial & Agro Divisions',
      statExport: 'Target Export Corridors',
      statQuality: 'HACCP & ISO Quality Compliant'
    },
    holding: {
      industriesTitle: 'Our Divisions',
      industriesSubtitle: 'Two independent business verticals operating under international quality, compliance, and supply chain standards.',
      industrialCard: {
        title: 'Industrial Division',
        desc: 'Copper pipelines, pancake coils, level wound coils, straight tubes, and structural fittings for HVAC, electrical, plumbing, and mechanical OEMs worldwide.',
        cta: 'View Industrial Division'
      },
      agroCard: {
        title: 'Agricultural Division',
        desc: 'Organic sun-dried apricots, chromatically sorted seedless raisins, dark prunes, and walnuts processed under strict HACCP guidelines for European packing chains.',
        cta: 'View Agro Division'
      },
      process: {
        title: 'Export Process',
        subtitle: 'Our structured international trade workflow guarantees total transparency, rigorous laboratory controls, and secure logistics handling from initial inquiry to final delivery.',
        step1: {
          title: '01 / Sourcing RFQ',
          desc: 'Submit technical drawings, calibration specifications, volume metrics, and destination Incoterms directly to our commercial trading desk.'
        },
        step2: {
          title: '02 / Sourcing & Production',
          desc: 'Metallurgical raw materials are processed or organic harvests are prepared at our certified processing hubs under ISO controls.'
        },
        step3: {
          title: '03 / Quality Assurance',
          desc: 'Third-party inspections, non-destructive testing for copper, and chromatic sorting for dried fruits guarantee perfect product compliance.'
        },
        step4: {
          title: '04 / Export Logistics',
          desc: 'Custom heavy export wrapping, robust wooden cradles, or vacuum polymer cases are deployed for seamless sea and overland transit.'
        },
        step5: {
          title: '05 / Secure Destination Delivery',
          desc: 'Shipments clear import corridors safely, with full traceability certificates, customs clearance support, and port-to-warehouse handovers.'
        }
      },
      markets: {
        title: 'International Markets',
        subtitle: 'We connect Central Asia raw material sources directly to distribution hubs across Europe, MENA, and Asia.',
        europe: 'Regular container shipments to industrial plants and food packaging facilities in Germany, Poland, and Southern Europe.',
        mena: 'Direct ocean freight to major B2B trading zones in the UAE, Saudi Arabia, and North African markets.',
        cis: 'Direct container shipments and rail logistics across neighboring Central Asian republics.',
        asia: 'Reliable supply chains linking manufacturers and wholesale buyers in East and South Asia.'
      },
      ctaBlock: {
        title: 'Get in Touch About Export & Logistics',
        subtitle: 'Our trade coordinators can provide pricing, compliance documents, and arrange sample shipments for your company.',
        whatsapp: 'Contact via WhatsApp'
      },
      badgeIndustrial: 'STEEL & METALLURGY',
      badgeAgro: 'ORGANIC CERTIFIED',
      industriesHeadline: 'Two Business Worlds. One Global Standards Ecosystem.'
    },
    industrial: {
      heroTitle: 'B2B Sourcing and Export of Certified Industrial Copper Products',
      heroSubtitle: 'Connecting international manufacturers with high-purity copper tubes, coils, and fittings sourced from vetted regional refineries in Central Asia.',
      aboutDesc: 'Zarvadiy Industrial Division is an export-oriented sourcing partner specializing in high-specification copper products. Sourcing strictly from vetted metallurgical refineries in Central Asia, we coordinate third-party compliance inspections and verified dimensional controls to deliver products that meet DIN, ASTM, and EN standards. Our products serve as vital links in international HVAC, refrigeration, and electrical grids.',
      capabilities: {
        item1: {
          title: 'Verified Quality Control',
          desc: 'We facilitate rigorous third-party ultrasonic and eddy-current inspections at our partner facilities to verify wall integrity and ensure zero leaks.'
        },
        item2: {
          title: 'Certified Metallurgical Purity',
          desc: 'We source high-purity copper (99.9% Cu-DHP and Cu-ETP), backed by certified mill test reports (MTR) for maximum thermal and electrical conductivity.'
        },
        item3: {
          title: 'Heavy Export Packaging & Logistics',
          desc: 'We coordinate secure cargo packing in heavy timber crates or steel-banded reels, optimizing container loading to prevent transit oxidation.'
        }
      },
      certifications: {
        title: 'International Quality Certifications',
        desc: 'Our manufacturing partners maintain robust global standards, audited regularly by independent inspection groups.'
      },
      logistics: {
        desc: 'To support seamless European and MENA deliveries, our specialized logistics desk handles all customs documentation, material certificate coordination (EN 10204 3.1), and port clearance for FOB, CIF, CFR, and FCA Incoterms.'
      }
    },
    industrialProducts: {
      title: 'Copper Portfolio',
      subtitle: 'Explore our specialized, high-conductivity copper catalog, calibrated for demanding industrial applications.',
      viewDetails: 'Technical Specifications',
      items: {
        'pancake-coils': {
          title: 'Copper Pancake Coils',
          shortDesc: 'Single or double-layer coils for refrigeration, air conditioning, and split-system hookups.',
          overview: 'Our copper pancake coils are manufactured from high-purity Cu-DHP alloy, thoroughly cleaned and capped to maintain internal dryness. They feature excellent ductility, allowing for easy bending and installation in narrow HVAC cavities.',
          specs: [
            { label: 'Alloy Grade', value: 'Cu-DHP (UNS C12200) / Purity 99.90% Min' },
            { label: 'Standard Temper', value: 'Soft Annealed (O60)' },
            { label: 'Outer Diameter', value: '1/4" to 7/8" (6.35 mm to 22.22 mm)' },
            { label: 'Wall Thickness', value: '0.030" to 0.045" (0.76 mm to 1.14 mm)' },
            { label: 'Cleanliness Limit', value: 'Residue Max 0.038 g/m² (Exceeds ASTM B280)' }
          ],
          apps: 'Air conditioning installations, commercial refrigeration setups, heat pumps, fluid lines, and general split-system connection lines.',
          dims: 'Supplied in standard coil lengths of 50ft (15.24m) or 100ft (30.48m), individually wrapped in high-strength clear shrink wrap and packed into protective cardboard boxes.',
          pkg: 'Stowed in double-corrugated master boxes, shrink-wrapped on heavy wooden pallets. Moisture absorber bags are placed inside every box to prevent discoloration.',
          certs: 'Certified compliant with ASTM B280, EN 12735-1, and AS/NZS 1571. Supplied with full material test report (MTR) according to EN 10204 3.1.',
          export: 'Available for immediate export on FOB Riga/Tashkent, CIF Hamburg, CIF Rotterdam, and CIF Jebel Ali Incoterms.'
        },
        'lwc-coils': {
          title: 'Level Wound Coils (LWC)',
          shortDesc: 'Massive, highly-efficient copper reels designed for automated heat exchanger manufacturing lines.',
          overview: 'Level Wound Coils (LWC) are designed for automated OEM assembly systems. Sourced with outstanding dimensional uniformity, they enable high-speed decoiling and bending without mechanical jamming or thickness variations.',
          specs: [
            { label: 'Alloy Grade', value: 'Cu-DHP / Cu-DLP / Cu-ETP' },
            { label: 'Standard Temper', value: 'Light Annealed / Soft Annealed' },
            { label: 'Outer Diameter', value: '5.0 mm to 19.05 mm' },
            { label: 'Wall Thickness', value: '0.28 mm to 1.20 mm' },
            { label: 'Coil Weight', value: '100 kg to 300 kg per reel' }
          ],
          apps: 'Automated manufacturing of condenser and evaporator coils for commercial air conditioners, radiators, and industrial heat exchangers.',
          dims: 'Customized coil widths and traverse winding spacing based on OEM decoiling system requirements. Reels feature cardboard, plastic, or steel-mesh cores.',
          pkg: 'Mounted on wooden or metal reels, strapped with high-tensile steel bands, and wrapped in thick multilayer shrink-film to prevent dust ingress.',
          certs: 'Produced in full compliance with EN 12735-2, ASTM B743, and ISO 9001 quality management guidelines.',
          export: 'Available for bulk contract shipping on FCA Tashkent, FOB Riga, CIF Genoa, and CIF Jebel Ali.'
        },
        'acr-tubes': {
          title: 'ACR Straight Tubes',
          shortDesc: 'Rigid, high-cleanliness copper pipes ideal for plumbing, gas pipelines, and heating plants.',
          overview: 'ACR Straight Tubes are rigid copper pipes manufactured to maintain extreme structural straightness and absolute interior hygiene. Ends are plugged with airtight caps immediately after production to prevent debris contamination.',
          specs: [
            { label: 'Alloy Grade', value: 'Cu-DHP / Cu-ETP (Purity 99.9%)' },
            { label: 'Standard Temper', value: 'Hard Drawn (H80) / Half-Hard (H58)' },
            { label: 'Outer Diameter', value: '3/8" to 4-1/8" (9.52 mm to 104.78 mm)' },
            { label: 'Wall Thickness', value: '0.035" to 0.120" (0.89 mm to 3.05 mm)' },
            { label: 'Length Range', value: '3.0 meters to 6.0 meters' }
          ],
          apps: 'Medical gas pipelines, vacuum supply systems, central heating distribution networks, steam lines, domestic water plumbing, and heavy-duty HVAC piping.',
          dims: 'Available in standard lengths of 3.0m, 5.8m (for optimal loading into 20ft containers), and 6.0m. Custom wall profiles are available for high-pressure systems.',
          pkg: 'Bundled with heavy steel strapping, protected by end-caps, and nested in heavy-duty long wooden crates to prevent bending and surface scratches.',
          certs: 'Certified compliant with ASTM B88, ASTM B819 (Medical Gas), and EN 1057 European plumbing standards.',
          export: 'Exported under strict customs clearance on FOB Tashkent, CIF Riga, CIF Hamburg, and CIF Alexandria.'
        },
        'insulated-tubes': {
          title: 'Pre-Insulated Copper Tubes',
          shortDesc: 'Copper lines coated in durable, weather-resistant polyethylene insulation for fast split-system setups.',
          overview: 'Pre-insulated copper tubes are coated in high-performance cross-linked polyethylene foam (PE). The insulation prevents condensation, minimizes thermal losses, and resists extreme weather conditions, making split-system installations incredibly rapid.',
          specs: [
            { label: 'Alloy Grade', value: 'Cu-DHP (UNS C12200) / Purity 99.9%' },
            { label: 'Insulation Type', value: 'Cross-Linked Closed-Cell PE Foam' },
            { label: 'Operating Temp', value: '-40°C to +120°C' },
            { label: 'Thermal Conduct.', value: '0.035 W/(m·K) at 20°C' },
            { label: 'Fire Rating', value: 'Class B-s1-d0 (EN 13501-1) / Flame Retardant' }
          ],
          apps: 'Connecting outdoor and indoor units of residential and commercial split air conditioning systems, heat pump piping, and chilled water loops.',
          dims: 'Offered in dual-line (liquid & gas) insulated pairs or single lines in lengths of 20m, 30m, and 50m coils.',
          pkg: 'Coils are individually packed in thick protective plastic bags, packed in heavy cardboard boxes, and loaded onto export pallets.',
          certs: 'Certified to EN 12735-1, ASTM B280, and DIN 4102-1 fire standards. RoHS compliant.',
          export: 'Available for global distribution on FOB Riga, CIF Hamburg, and CIF Jebel Ali.'
        },
        'pipe-fittings': {
          title: 'Precision Copper Fittings',
          shortDesc: 'Seamless solder-joint elbows, tees, couplings, and reducers for leakproof copper pipe systems.',
          overview: 'Our precision copper fittings are manufactured from seamless, high-grade copper tubes. They have extremely close tolerance boundaries to ensure smooth capillary action during soft or hard soldering, establishing absolute hermetic sealing.',
          specs: [
            { label: 'Alloy Grade', value: 'Cu-DHP (UNS C12200) / Purity 99.9%' },
            { label: 'Types Available', value: 'Elbows (90° & 45°), Tees, Couplings, Reducers, Caps' },
            { label: 'Diameter Range', value: '1/4" to 4-1/8" (6.35 mm to 104.78 mm)' },
            { label: 'Wall Thickness', value: 'Sized to match Type K, L, M, and EN 1254-1 Tubes' },
            { label: 'Connection Type', value: 'Solder joint (Capillary End)' }
          ],
          apps: 'Solder connections in HVAC networks, industrial gas systems, residential plumbing, refrigeration plants, and gas distribution grids.',
          dims: 'Dimensions precisely calibrated in metric and imperial standards according to ASME B16.22 and EN 1254-1 guidelines.',
          pkg: 'Packed in small moisture-proof plastic bags (50-100 pcs), packed in thick cardboard master cartons, and palletized.',
          certs: 'Manufactured according to ASME B16.22, EN 1254-1, and CE PED directive 2014/68/EU standards.',
          export: 'Shipped under bulk orders on FCA Tashkent, FOB Riga, CIF Hamburg, and CIF Genoa.'
        },
        'capillary-tubes': {
          title: 'Copper Capillary Tubes',
          shortDesc: 'Ultra-precision copper tubes with microscopic inside diameters for refrigeration metering devices.',
          overview: 'Zarvadiy Copper Capillary Tubes feature ultra-smooth interior walls and microscopic internal tolerances. They serve as mechanical expansion devices in cooling systems, regulating the precise flow of refrigerant with maximum reliability.',
          specs: [
            { label: 'Alloy Grade', value: 'Cu-DHP / Cu-ETP Purity 99.9%' },
            { label: 'Inside Diameter', value: '0.50 mm to 2.50 mm (Tolerance ±0.01 mm)' },
            { label: 'Outside Diameter', value: '1.20 mm to 4.00 mm' },
            { label: 'Standard Temper', value: 'Hard Drawn / Light Drawn' },
            { label: 'Internal Polish', value: 'Absolute mirror finish, free of grease and oil residue' }
          ],
          apps: 'Refrigerant flow metering in household refrigerators, freezers, showcases, automotive cooling circuits, and miniature medical chiller systems.',
          dims: 'Supplied in precise pre-cut straight lengths (1.0m to 3.0m) or custom coil bundles up to 50 kg.',
          pkg: 'Tubes are blown with dry nitrogen to eliminate humidity, ends are hermetically sealed, and they are packed in solid wooden boxes.',
          certs: 'Fully compliant with EN 12735-1 and ASTM B360 specifications.',
          export: 'Exported on FOB Tashkent, CIF Rotterdam, CIF Hamburg, and CIF Jebel Ali.'
        }
      }
    },
    agro: {
      heroTitle: 'Premium Dried Fruits & Nuts Sourced from Eurasian Orchards',
      heroSubtitle: 'Calibrated raisins, sun-dried apricots, pitted prunes, and premium walnuts processed under strict HACCP and ISO 22000 food safety certifications.',
      aboutDesc: 'Zarvadiy Agricultural Division coordinates pure, ecologically grown fruit harvests from the historical Samarkand and Fergana valleys. Benefiting from over 300 days of intense yearly solar radiation and mineral-rich glacier irrigation, our agricultural goods acquire rich sugars and intense flavors naturally. We run dedicated chromatic sorting, laser cleaning, and vacuum packaging to deliver flawless shipments to Europe and the Middle East.',
      process: {
        title: 'Calibrated Processing',
        subtitle: 'Our advanced 5-stage cleaning and drying framework ensures zero foreign particles, optimal moisture preservation, and absolute biosecurity.',
        step1: {
          title: '01 / Sourcing & Sorting',
          desc: 'Freshly harvested crops are gathered from our contracted premium farms and subject to manual screening and initial sorting.'
        },
        step2: {
          title: '02 / Hydraulic Washing & Calibration',
          desc: 'Fruits undergo multi-stage deep hydraulic washing to remove organic dust, and are sized through mechanical vibrating sieves.'
        },
        step3: {
          title: '03 / Dynamic Drying & Dehydration',
          desc: 'Dried fruits are stabilized in advanced low-temperature dry air chambers to preserve vitamins, natural taste, and soft texture.'
        },
        step4: {
          title: '04 / Chromatic Laser Separation',
          desc: 'High-speed optical laser separators inspect each individual fruit, removing discolorations, micro-defects, and foreign debris.'
        },
        step5: {
          title: '05 / Vacuum & Modified Packaging',
          desc: 'Processed goods are stowed in modified atmosphere pouch bags, barrier cans, or bulk cartons for absolute fresh arrivals globally.'
        }
      },
      packaging: {
        desc: 'Zarvadiy supplies high-barrier packaging to preserve agricultural freshness across global B2B supply lines. We offer fully branded Stand-Up Pouch bags with zip locks, rigid gas-flushed round cans, and thick double-corrugated bulk master boxes on pre-fumigated wooden pallets.'
      },
      certifications: {
        title: 'HACCP & ISO Food Safety Compliance',
        desc: 'Our processing plants enforce extreme sanitation controls to guarantee organic purity and biological safety for premium retail packers.'
      }
    },
    agroProducts: {
      title: 'Agricultural Catalog',
      subtitle: 'Pure solar dehydration yields rich sugars, pristine moisture parameters, and premium size calibration.',
      viewDetails: 'Sourcing Parameters',
      items: {
        raisins: {
          title: 'Golden & Black Raisins',
          shortDesc: 'Calibrated seedless raisins, chromatically laser-separated for absolute purity.',
          overview: 'Our seedless raisins are sourced from sweet, sun-ripened grapes of Samarkand. Subjected to extensive mechanical washing, stem removal, and color sorting, they feature zero stalks and 99.9% chromatic purity.',
          origin: 'Samarkand, Bukhara, and Tashkent agricultural regions, Uzbekistan.',
          harvest: 'Harvested in late August to September. Available for export year-round under climate-controlled storage.',
          life: '12 Months when stored between +5°C and +15°C in dry conditions.',
          pkg: '10 kg bulk double-corrugated cardboard boxes, or customized retail standup pouches (100g to 1kg) with gas flushing.',
          certs: 'Certified HACCP, ISO 22000, and Halal. Zero chemical pesticide residues.',
          export: 'Shipped globally in 20ft FCL container loads (approx 20,000 kg). Available on FOB Riga, CIF Rotterdam, and CIF Jebel Ali.'
        },
        apricots: {
          title: 'Sun-Dried Pitted Apricots (Kuraga)',
          shortDesc: 'Plump, naturally dried apricots of beautiful orange tone, high moisture calibrated.',
          overview: 'Our dried apricots are carefully pitted and dehydrated in natural shade. This preserving process keeps the fruit extremely tender, maintaining high levels of natural vitamin A, iron, and potassium.',
          origin: 'Fergana Valley and Namangan orchards, Uzbekistan.',
          harvest: 'Harvested in June to July. Export shipments are dispatched immediately after climate-controlled storage.',
          life: '12 Months under cold storage (+2°C to +8°C).',
          pkg: '5 kg or 10 kg bulk boxes, vacuum-sealed PE bags inside master boxes, or pre-packed standup pouches.',
          certs: 'HACCP, ISO 22000, Halal compliant, and tested for sulphur dioxide parameters (EU regulation compliant).',
          export: 'Available for containerized export on FOB Tashkent, CIF Hamburg, CIF Rotterdam, and CIF Jebel Ali.'
        },
        prunes: {
          title: 'Premium Sun-Dried Black Prunes',
          shortDesc: 'Sweet, pitted black prunes, stabilized at optimal moisture for long shelf life.',
          overview: 'Selected from juicy dark plums, our prunes are dehydrated under controlled warm air to guarantee uniform drying and prevent fermentation. They have rich, natural sugar content and deep dietary fibers.',
          origin: 'Samarkand Valley and Fergana region, Uzbekistan.',
          harvest: 'Plums harvested in August. Dehydrated immediately to capture maximum nutrients.',
          life: '12 Months under climate-controlled storage (0°C to +8°C).',
          pkg: '10 kg bulk cartons, vacuum bags, or protective retail pouches.',
          certs: 'ISO 22000, HACCP, Halal, phytosanitary certified.',
          export: 'Delivered globally in refrigerated containers. FOB Riga/Tashkent, CIF Hamburg, CIF Rotterdam, CIF Genoa.'
        },
        nuts: {
          title: 'Calibrated Walnut Kernels',
          shortDesc: 'Light halves and quarters of extraordinary buttery flavor, calibrated to size.',
          overview: 'Zarvadiy walnuts are manually cracked and hand-sorted to preserve beautiful whole halves. They are separated by color (Light Halves, Light Quarters, Amber Halves) and thoroughly blown to eliminate shells and dust.',
          origin: 'Bostanlyk and Fergana mountain foothills, Uzbekistan.',
          harvest: 'Gathered in September to October. Shelled, hand-selected, and packed fresh.',
          life: '9 Months when stored under vacuum at +2°C to +6°C.',
          pkg: '10 kg bulk cartons packed under nitrogen gas, vacuum barrier packs (5 kg), or small standup retail pouches.',
          certs: 'HACCP food safety compliant, non-GMO, phytosanitary cleared.',
          export: 'Available for rapid truck and container transport. FCA Tashkent, FOB Riga, CIF Rotterdam, CIF Hamburg.'
        }
      }
    },
    aboutPage: {
      title: 'Our International Export Philosophy',
      subtitle: 'Forging a professional, highly reliable bridge between the mineral and agricultural riches of Central Asia and sophisticated global buyers.',
      storyTitle: 'The Zarvadiy Sourcing Legacy',
      storyDesc: 'Founded to consolidate regional trade channels, Zarvadiy LLC represents a unique ecosystem that combines high-grade copper metallurgy with premium-quality agricultural exports. Operating from our central logistics hub in Tashkent, we coordinate extraction, processing, compliance audits, and global logistics under one cohesive management system.',
      missionTitle: 'Our Strategic Mission',
      missionDesc: 'To provide international manufacturers and retail packagers with absolute stability in supply, delivering materials of extreme purity and food ingredients of pristine organic standards.',
      visionTitle: 'Our Future Vision',
      visionDesc: 'To be recognized as the premier multi-industry B2B export holding from Central Asia, driving local manufacturing standards to match the zero-defect expectations of Europe and the MENA region.',
      approach: {
        tag: 'OUR APPROACH',
        title: 'Built on Standards, Not Promises',
        subtitle: 'What guides how we operate, from day one.',
        item1: {
          title: 'Direct Trade Model',
          desc: 'No unnecessary intermediaries — we work directly with suppliers and buyers to keep pricing transparent and lead times short.'
        },
        item2: {
          title: 'Certified Industrial Standards',
          desc: 'Our copper tubes meet EN 12735 specifications for HVAC and refrigeration applications, verified before every shipment.'
        },
        item3: {
          title: 'Two Focused Divisions',
          desc: 'Industrial and Agro operate as dedicated verticals, each with its own sourcing, documentation, and quality process.'
        },
        item4: {
          title: 'Founder-Led Operations',
          desc: 'Every contract, document, and client relationship is handled directly — no outsourced sales teams, no disconnect between promise and delivery.'
        }
      }
    },
    whyUs: {
      standards: {
        title: 'Rigorous Compliance',
        desc: 'Our copper is checked via ultrasonic eddy-current tests; our dried fruits are chromatically sorted by laser.'
      },
      supply: {
        title: 'Supply Stability',
        desc: 'Direct long-term agreements with refineries and farms protect our global buyers from seasonal price and volume shocks.'
      },
      comm: {
        title: 'B2B Sourcing Ease',
        desc: 'Multi-lingual trade desks, absolute clarity on Incoterms, and full transparency on transport routes.'
      },
      team: {
        title: 'Experienced Team',
        desc: 'Experienced logistics and compliance experts managing every customs procedure and phytosanitary certificate.'
      }
    },
    contactPage: {
      title: 'Start a Sourcing Consultation',
      subtitle: 'Request product samples, technical specifications, or shipping quotes from our trade specialists.',
      infoTitle: 'Our Trading Offices',
      email: 'Corporate Email',
      phone: 'Direct Line',
      address: 'Head Office',
      addressValue: 'Osh Street 57, Yashnobod District, Tashkent, Uzbekistan',
      formTitle: 'Send an Inquiry (RFQ)',
      formSubtitle: 'Describe your requirements and our trade desk will reply with pricing and delivery terms within 24 hours.',
      formSuccess: 'Thank you! Your inquiry has been sent to our trade desk. A coordinator will contact you shortly.',
      formError: 'Error! Please fill out all required fields marked with an asterisk (*).',
      formName: 'Full Name',
      formEmail: 'Business Email',
      formPhone: 'Contact Number',
      formCompany: 'Company Name',
      formMsg: 'Sourcing Requirements',
      formSubmit: 'Submit Request'
    },
    footer: {
      desc: 'Zarvadiy LLC is an export-oriented trading company supplying high-quality copper metallurgy and calibrated organic agricultural harvests globally from Central Asia.',
      quickLinks: 'Navigation',
      contactUs: 'Head Office',
      rights: 'All rights reserved.',
      credits: 'Built with care.'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'О компании',
      industries: 'Отрасли',
      markets: 'Международные рынки',
      contact: 'Контакты'
    },
    hero: {
      tagline: 'Многопрофильный B2B Экспортный Холдинг',
      title: 'Два направления бизнеса — единые международные стандарты.',
      subtitle: 'Надёжные поставки высококачественной медной металлургии для промышленности и экологически чистых сухофруктов и орехов для европейских фасовочных сетей.',
      cta: 'Наши направления',
      ctaQuote: 'Отправить запрос',
      statHolding: 'Промышленное и аграрное направления',
      statExport: 'Международные рынки',
      statQuality: 'Стандарты HACCP и ISO 22000'
    },
    holding: {
      industriesTitle: 'Наши Направления',
      industriesSubtitle: 'Два независимых направления бизнеса, работающих по международным стандартам качества, безопасности и контроля поставок.',
      industrialCard: {
        title: 'Промышленное направление',
        desc: 'Поставки медных бухт (Pancake), труб LWC для теплообменников, прямых труб ACR и фитингов для HVAC, систем отопления, водоснабжения и электротехники по всему миру.',
        cta: 'Перейти в промышленный раздел'
      },
      agroCard: {
        title: 'Аграрное направление',
        desc: 'Натуральная курага теневой сушки, калиброванный изюм лазерной сепарации, чернослив и ядра грецкого ореха. Полное соответствие стандартам HACCP для дистрибьюторов в ЕС.',
        cta: 'Перейти в аграрный раздел'
      },
      process: {
        title: 'Процесс экспорта',
        subtitle: 'Отлаженный цикл международной торговли обеспечивает полную прозрачность, лабораторный контроль и безопасную доставку груза.',
        step1: {
          title: '01 / Запрос и Спецификация',
          desc: 'Отправьте нам технические чертежи, калибровки, объемы и желаемые Инкотермс на рассмотрение нашего торгового отдела.'
        },
        step2: {
          title: '02 / Производство и Подготовка',
          desc: 'Металл проходит вытяжку, а аграрная продукция сортируется на наших сертифицированных хабах под строгим контролем ISO.'
        },
        step3: {
          title: '03 / Контроль Качества',
          desc: 'Обязательные вихретоковые тесты для медных труб и лазерная сепарация для сухофруктов гарантируют 99.9% чистоты продукта.'
        },
        step4: {
          title: '04 / Упаковка и Погрузка',
          desc: 'Надежные деревянные ложементы, стальные катушки или вакуумные полимерные пакеты предотвращают любые повреждения при транспортировке.'
        },
        step5: {
          title: '05 / Доставка Покупателю',
          desc: 'Груз благополучно проходит таможню с полным пакетом документов (EN 10204 3.1, фитосанитарный контроль) до склада заказчика.'
        }
      },
      markets: {
        title: 'Международные рынки',
        subtitle: 'Мы связываем сырьевую базу Центральной Азии с производственными и дистрибьюторскими центрами Европы, Ближнего Востока и Азии.',
        europe: 'Регулярные контейнерные поставки на промышленные заводы и фасовочные предприятия Германии, Польши и Южной Европы.',
        mena: 'Прямые морские фрахты в ключевые торговые зоны ОАЭ, Саудовской Аравии и стран Северной Африки.',
        cis: 'Железнодорожные и автомобильные маршруты в соседние страны СНГ.',
        asia: 'Надёжные цепочки поставок для промышленных предприятий и оптовых импортёров Восточной и Южной Азии.'
      },
      ctaBlock: {
        title: 'Обсудите поставку и логистику с нашей командой',
        subtitle: 'Наши специалисты предоставят прайс-листы, спецификации и организуют отправку образцов для вашей лаборатории.',
        whatsapp: 'Написать в WhatsApp'
      },
      badgeIndustrial: 'СТАЛЬ И МЕТАЛЛУРГИЯ',
      badgeAgro: 'ОРГАНИЧЕСКИЙ СЕРТИФИКАТ',
      industriesHeadline: 'Два направления бизнеса — единые международные стандарты.'
    },
    industrial: {
      heroTitle: 'Поставки Медного Проката из Узбекистана для Мировой Промышленности',
      heroSubtitle: 'Поставки медных труб, бухт и фитингов напрямую от ведущих металлургических заводов Центральной Азии.',
      aboutDesc: 'Промышленный дивизион Zarvadiy — экспортно-ориентированная торговая компания, специализирующаяся на поставках медного проката. Работая напрямую с сертифицированными заводами-партнерами Центральной Азии, мы координируем независимый контроль геометрии и чистоты сплавов для соответствия стандартам DIN, ASTM и EN. Наша продукция используется в критических узлах систем кондиционирования и электросетях.',
      capabilities: {
        item1: {
          title: 'Контроль Качества Партнеров',
          desc: 'Вся продукция наших партнеров проходит ультразвуковое исследование вихревыми токами для выявления мельчайших дефектов стенок.'
        },
        item2: {
          title: 'Чистота Сплавов',
          desc: 'Мы поставляем медь высшей степени очистки (99.9% Cu-DHP и Cu-ETP) с предоставлением подробных заводских сертификатов испытаний.'
        },
        item3: {
          title: 'Экспортная Упаковка',
          desc: 'Продукция упаковывается в прочные деревянные ящики или на стальные катушки с влагопоглотителями для защиты при транспортировке.'
        }
      },
      certifications: {
        title: 'Международная Сертификация',
        desc: 'Наши заводы-партнеры сертифицированы по международным стандартам и проходят регулярный независимый технический аудит.'
      },
      logistics: {
        desc: 'Наш логистический отдел берет на себя оформление таможенных деклараций, сертификатов качества (EN 10204 3.1) и организует доставку на условиях Инкотермс FOB, CIF, CFR, FCA.'
      }
    },
    industrialProducts: {
      title: 'Каталог Медного Проката',
      subtitle: 'Высококачественная медная продукция с превосходной проводимостью для сложных инженерных систем.',
      viewDetails: 'Технические характеристики',
      items: {
        'pancake-coils': {
          title: 'Медные бухты (Pancake)',
          shortDesc: 'Однослойные и двухслойные спиральные бухты для кондиционирования и холодильных систем.',
          overview: 'Медные бухты типа Pancake изготавливаются из раскисленной фосфором меди Cu-DHP с высокой степенью чистоты. Внутренняя поверхность полностью осушается и закрывается герметичными колпачками для защиты от пыли и влаги. Обладают отличной пластичностью для гибки.',
          specs: [
            { label: 'Марка сплава', value: 'Cu-DHP (UNS C12200) / Чистота мин. 99.90%' },
            { label: 'Состояние', value: 'Мягкий отожженный (O60)' },
            { label: 'Наружный диаметр', value: 'от 1/4" до 7/8" (6.35 мм - 22.22 мм)' },
            { label: 'Толщина стенки', value: 'от 0.030" до 0.045" (0.76 мм - 1.14 мм)' },
            { label: 'Чистота поверхности', value: 'Остаток загрязнений макс. 0.038 г/м² (выше ASTM B280)' }
          ],
          apps: 'Монтаж сплит-систем, торговое холодильное оборудование, тепловые насосы, кондиционирование зданий.',
          dims: 'Поставляются в бухтах длиной 15.24 м (50 футов) или 30.48 м (100 футов). Каждая бухта упакована в термоусадочную пленку.',
          pkg: 'Укладываются в жесткие картонные коробки на европаллетах с влагопоглотителями для исключения потемнения меди.',
          certs: 'Соответствие ASTM B280, EN 12735-1, AS/NZS 1571. Сертификат EN 10204 тип 3.1.',
          export: 'Экспорт на условиях FOB Рига/Ташкент, CIF Гамбург, Роттердам, Джебель-Али.'
        },
        'lwc-coils': {
          title: 'Трубы LWC (Level Wound Coils)',
          shortDesc: 'Массивные послойно упорядоченные бухты для автоматических линий производства теплообменников.',
          overview: 'Бухты LWC предназначены для автоматизированных сборочных линий OEM-производителей. Высокая точность намотки и стабильность геометрии исключают сбои и замятия при размотке на высоких скоростях.',
          specs: [
            { label: 'Марка сплава', value: 'Cu-DHP / Cu-DLP / Cu-ETP' },
            { label: 'Состояние', value: 'Мягкий / Полутвердый отжиг' },
            { label: 'Наружный диаметр', value: 'от 5.0 мм до 19.05 мм' },
            { label: 'Толщина стенки', value: 'от 0.28 мм до 1.20 мм' },
            { label: 'Вес бухты', value: 'от 100 кг до 300 кг' }
          ],
          apps: 'Массовое производство испарителей и конденсаторов автомобильных радиаторов, бытовых и промышленных систем охлаждения.',
          dims: 'Послойная намотка на картонные, пластиковые или металлические сердечники под требования разматывающих систем.',
          pkg: 'Фиксация стальной лентой, плотная обмотка термоусадочной пленкой на усиленных деревянных поддонах.',
          certs: 'Соответствие стандартам EN 12735-2, ASTM B743, аудит ISO 9001.',
          export: 'Доставка крупных партий на условиях FCA Ташкент, FOB Рига, CIF Генуя, Джебель-Али.'
        },
        'acr-tubes': {
          title: 'Прямые медные трубы ACR',
          shortDesc: 'Rigid-трубы повышенной жесткости для водоснабжения, газопроводов и котельных.',
          overview: 'Жесткие прямые трубы ACR производятся с обеспечением идеальной прямолинейности и зеркальной чистоты внутренней поверхности. Концы труб закрываются герметичными заглушками для предотвращения попадания сора.',
          specs: [
            { label: 'Марка сплава', value: 'Cu-DHP / Cu-ETP (Чистота 99.9%)' },
            { label: 'Состояние', value: 'Твердотянутые (H80) / Полутвердые (H58)' },
            { label: 'Наружный диаметр', value: 'от 3/8" до 4-1/8" (9.52 мм - 104.78 мм)' },
            { label: 'Толщина стенки', value: 'от 0.89 мм до 3.05 мм' },
            { label: 'Длина отрезков', value: 'от 3.0 до 6.0 метров' }
          ],
          apps: 'Магистрали медицинских газов, вакуумные установки, котельные, системы отопления и высоконагруженные фреонопроводы.',
          dims: 'Стандартные длины 3.0 м и 5.8 м (для идеальной загрузки 20-футовых контейнеров) или 6.0 м.',
          pkg: 'Связки труб обтягиваются стальными лентами, концы защищены колпачками, упаковываются в прочные длинные деревянные ящики.',
          certs: 'Сертификация ASTM B88, ASTM B819 (Medical Gas), европейский стандарт EN 1057.',
          export: 'Экспортное оформление на условиях FOB Ташкент, CIF Рига, CIF Гамбург, Александрия.'
        },
        'insulated-tubes': {
          title: 'Изолированные медные трубы',
          shortDesc: 'Медные трубы в заводской изоляции из вспененного полиэтилена для быстрой прокладки трасс.',
          overview: 'Предварительно изолированные трубы защищены слоем высококачественного сшитого полиэтилена (PE). Изоляция предотвращает появление конденсата, снижает теплопотери и устойчива к агрессивным атмосферным воздействиям.',
          specs: [
            { label: 'Марка сплава', value: 'Cu-DHP (UNS C12200) / Чистота 99.9%' },
            { label: 'Тип изоляции', value: 'Сшитый пенополиэтилен с закрытыми порами' },
            { label: 'Рабочая температура', value: 'от -40°C до +120°C' },
            { label: 'Теплопроводность', value: '0.035 Вт/(м·К) при 20°C' },
            { label: 'Класс огнестойкости', value: 'B-s1-d0 (EN 13501-1) / Самозатухающий' }
          ],
          apps: 'Прокладка соединительных трасс кондиционеров и тепловых насосов, трубопроводы холодоснабжения.',
          dims: 'Поставляются в виде одиночных труб или спаренных трасс (газ + жидкость) в бухтах по 20, 30 и 50 метров.',
          pkg: 'Бухты помещаются в прочные индивидуальные полиэтиленовые мешки и плотные картонные коробки.',
          certs: 'EN 12735-1, ASTM B280, DIN 4102-1. Соответствие экологическим нормам RoHS.',
          export: 'Регулярные поставки на условиях FOB Рига, CIF Гамбург, Джебель-Али.'
        },
        'pipe-fittings': {
          title: 'Медные фитинги',
          shortDesc: 'Бесшовные угольники, тройники, муфты и переходники под пайку для медных систем.',
          overview: 'Наши высокоточные фитинги изготавливаются из бесшовных медных труб. Минимальные допуски размеров гарантируют идеальный капиллярный эффект при пайке мягким или твердым припоем, обеспечивая полную герметичность.',
          specs: [
            { label: 'Марка сплава', value: 'Cu-DHP (UNS C12200) / Чистота 99.9%' },
            { label: 'Виды изделий', value: 'Отводы (90° и 45°), Тройники, Муфты, Переходники, Заглушки' },
            { label: 'Диапазон диаметров', value: 'от 1/4" до 4-1/8" (6.35 мм - 104.78 мм)' },
            { label: 'Толщина стенки', value: 'Соответствует стандартам труб классов K, L, M и EN 1254-1' },
            { label: 'Тип соединения', value: 'Капиллярный раструб под пайку' }
          ],
          apps: 'Монтаж разветвленных систем кондиционирования, холодильных установок, разводка отопления и водоснабжения.',
          dims: 'Геометрия полностью откалибрована по метрической и дюймовой сеткам ASME B16.22 / EN 1254-1.',
          pkg: 'Фасовка в герметичные пакеты (по 50-100 шт.), укладываемые в картонные коробки на поддонах.',
          certs: 'Стандарты ASME B16.22, EN 1254-1, директива CE PED 2014/68/EU.',
          export: 'Оптовые отгрузки на условиях FCA Ташкент, FOB Рига, CIF Гамбург, Генуя.'
        },
        'capillary-tubes': {
          title: 'Медные капиллярные трубки',
          shortDesc: 'Высокоточные трубки с микроскопическим внутренним диаметром для регулирования потока хладагента.',
          overview: 'Капиллярные медные трубки Zarvadiy отличаются идеально гладкими внутренними стенками и жесткими допусками внутреннего диаметра. Служат надежным дросселирующим элементом в холодильных контурах.',
          specs: [
            { label: 'Марка сплава', value: 'Cu-DHP / Cu-ETP Чистота 99.9%' },
            { label: 'Внутренний диаметр', value: 'от 0.50 мм до 2.50 мм (допуск ±0.01 мм)' },
            { label: 'Наружный диаметр', value: 'от 1.20 мм до 4.00 мм' },
            { label: 'Состояние', value: 'Нагартованное (твердое) / Полутвердое' },
            { label: 'Чистота канала', value: 'Зеркальная поверхность без следов масел (продувка азотом)' }
          ],
          apps: 'Бытовые холодильники, морозильные лари, холодильные витрины, автомобильные кондиционеры.',
          dims: 'Поставляются в мерных отрезках от 1.0 до 3.0 метров или в намотках до 50 кг.',
          pkg: 'Концы трубок герметично сплющиваются, бухты упаковываются в плотные фанерные ящики.',
          certs: 'Соответствие спецификациям EN 12735-1 и ASTM B360.',
          export: 'Экспорт на условиях FOB Ташкент, CIF Роттердам, Гамбург, Джебель-Али.'
        }
      }
    },
    agro: {
      heroTitle: 'Натуральные Сухофрукты и Орехи из Садов Самарканда',
      heroSubtitle: 'Калиброванный изюм, курага теневой сушки, чернослив и ядра грецкого ореха, сертифицированные по стандартам HACCP и ISO 22000.',
      aboutDesc: 'Аграрный дивизион Zarvadiy поставляет экологически чистую продукцию из садов Самаркандской и Ферганской долин. Благодаря 300+ солнечным дням в году и поливу талой ледниковой водой, наши фрукты накапливают максимальное количество фруктозы и витаминов. Мы используем оптическую сортировку и лазерную очистку, гарантируя безупречную чистоту для фасовочных фабрик Европы.',
      process: {
        title: 'Калиброванная Сортировка',
        subtitle: 'Пятиступенчатая система очистки, калибровки и бережной сушки исключает наличие примесей и сохраняет мягкую текстуру.',
        step1: {
          title: '01 / Сбор и Первичный Отбор',
          desc: 'Свежий урожай собирается с лучших контрактных садов и проходит ручную калибровку.'
        },
        step2: {
          title: '02 / Гидравлическая Мойка',
          desc: 'Фрукты бережно промываются в каскадных мойках для полного удаления пыли и веточек.'
        },
        step3: {
          title: '03 / Низкотемпературная Сушка',
          desc: 'Фрукты обезвоживаются в дегидраторах теплого воздуха для полного сохранения витаминов.'
        },
        step4: {
          title: '04 / Лазерная Сепарация',
          desc: 'Оптические сортировщики сканируют каждую ягоду, мгновенно удаляя дефекты цвета и мелкие соринки.'
        },
        step5: {
          title: '05 / Упаковка в Модифицированной Среде',
          desc: 'Готовый продукт фасуется в вакуумные пакеты, дой-паки или bulk-коробки для длительной свежести.'
        }
      },
      packaging: {
        desc: 'Мы предлагаем разнообразную экспортную упаковку для сохранения свежести сухофруктов: прочные дой-паки с замком zip-lock, жесткие жестяные банки с инертным газом и стандартные 10-килограммовые bulk-коробки на паллетах.'
      },
      certifications: {
        title: 'Контроль Безопасности HACCP',
        desc: 'Наши обрабатывающие предприятия работают в строгом соответствии с санитарными требованиями HACCP и ISO 22000.'
      }
    },
    agroProducts: {
      title: 'Агро Каталог',
      subtitle: 'Натуральная сушка сохраняет сладость, мягкость и идеальные показатели влажности.',
      viewDetails: 'Характеристики сырья',
      items: {
        raisins: {
          title: 'Изюм светлый и темный',
          shortDesc: 'Калиброванный кишмиш без косточек, очищенный на лазерных установках.',
          overview: 'Наш изюм кишмиш производится из отборного самаркандского винограда. После прохождения лазерной очистки и удаления плодоножек продукт имеет чистоту 99.9% и готов к использованию в кондитерском деле.',
          origin: 'Самаркандская и Ташкентская области, Узбекистан.',
          harvest: 'Сбор винограда в августе-сентябре. Круглогодичные поставки со складов с климат-контролем.',
          life: '12 месяцев при температуре от +5°C до +15°C в сухом помещении.',
          pkg: 'Bulk-коробки по 10 кг, либо фасованные брендированные дой-паки от 100 г до 1 кг с азотным заполнением.',
          certs: 'Сертификаты HACCP, ISO 22000, Халяль. Проверка на отсутствие остаточных пестицидов.',
          export: 'Контейнерные партии (20 футов FCL, около 20 000 кг). Условия FOB Рига, CIF Гамбург, Роттердам, Джебель-Али.'
        },
        apricots: {
          title: 'Курага экстра (Теневая сушка)',
          shortDesc: 'Мягкие крупные абрикосы без косточек, высушенные естественным теневым способом.',
          overview: 'Абрикосы бережно очищаются от косточек и высушиваются в тени, что позволяет плодам сохранить естественный ярко-оранжевый цвет, высокую влажность и максимальное содержание калия и железа.',
          origin: 'Сады Наманганской области и Ферганской долины, Узбекистан.',
          harvest: 'Сбор плодов в июне-июле. Контролируемая влажность при хранении.',
          life: '12 месяцев при температуре от +2°C до +8°C.',
          pkg: 'Картонные коробки по 5 или 10 кг, вакуумные пакеты внутри коробок, дой-паки.',
          certs: 'HACCP, ISO 22000, Халяль. Продукт полностью соответствует европейским лимитам на содержание диоксида серы.',
          export: 'Контейнерные отгрузки на условиях FOB Ташкент, CIF Гамбург, Роттердам, Джебель-Али.'
        },
        prunes: {
          title: 'Чернослив без косточек',
          shortDesc: 'Мясистый чернослив оптимальной влажности с высоким содержанием пектина.',
          overview: 'Полученный из сочных темных слив, наш чернослив проходит мягкую сушку теплым воздухом. Это гарантирует отсутствие брожения и сохраняет богатый вкус и пищевые волокна.',
          origin: 'Самаркандский оазис, Узбекистан.',
          harvest: 'Сбор слив в августе. Моментальная сушка для сохранения витаминной базы.',
          life: '12 месяцев в прохладном месте (от 0°C до +8°C).',
          pkg: 'Bulk-картон по 10 кг, вакуумные мешки, розничные зип-пакеты.',
          certs: 'ISO 22000, HACCP, Халяль, фитосанитарные сертификаты.',
          export: 'Доставка рефрижераторами. FOB Рига/Ташкент, CIF Гамбург, Роттердам, Генуя.'
        },
        nuts: {
          title: 'Ядро грецкого ореха (Бабочка)',
          shortDesc: 'Светлые половинки и четвертины грецкого ореха с нежным маслянистым вкусом.',
          overview: 'Наши грецкие орехи раскалываются бережным ручным способом для сохранения целых половинок («бабочка»). Орех калибруется по цвету (Extra Light, Light, Amber) и тщательно очищается от перегородок и пыли.',
          origin: 'Предгорья Бостанлыкского района, Узбекистан.',
          harvest: 'Сбор ореха в сентябре-октябре. Упаковка сразу после колки на специализированных линиях.',
          life: '9 месяцев в вакуумированной упаковке при температуре от +2°C до +6°C.',
          pkg: 'Bulk-коробки по 10 кг с заполнением азотом, вакуумные пакеты по 5 кг, брендированные дой-паки.',
          certs: 'Соответствие HACCP, отсутствие ГМО, фитосанитарные допуски для ЕС.',
          export: 'Доставка автотранспортом и контейнерами. FCA Ташкент, FOB Рига, CIF Роттердам, Гамбург.'
        }
      }
    },
    aboutPage: {
      title: 'Как мы работаем',
      subtitle: 'Надёжный мост между сырьевыми ресурсами Центральной Азии и требовательными B2B-клиентами по всему миру.',
      storyTitle: 'О компании Zarvadiy',
      storyDesc: 'Zarvadiy LLC была создана для объединения экспортных каналов и формирования профессиональной инфраструктуры поставок. Из нашего офиса в Ташкенте мы координируем полный цикл: от закупки сырья до лабораторного контроля и таможенного оформления.',
      missionTitle: 'Наша миссия',
      missionDesc: 'Обеспечивать стабильные поставки для производственных предприятий и фасовочных фабрик, строго соблюдая технические спецификации и обеспечивая бесперебойную логистику.',
      visionTitle: 'Наши цели',
      visionDesc: 'Стать надёжным экспортным партнёром из Центральной Азии, поставляющим продукцию в соответствии с требованиями рынков ЕС и Ближнего Востока.',
      approach: {
        tag: 'НАШ ПОДХОД',
        title: 'Стандарты, а не обещания',
        subtitle: 'Принципы, которыми мы руководствуемся с первого дня работы.',
        item1: {
          title: 'Прямая торговая модель',
          desc: 'Без лишних посредников — мы работаем напрямую с поставщиками и покупателями, обеспечивая прозрачное ценообразование и короткие сроки поставки.'
        },
        item2: {
          title: 'Сертифицированные промышленные стандарты',
          desc: 'Наши медные трубы соответствуют спецификациям EN 12735 для систем HVAC и холодильного оборудования — проверяется перед каждой отгрузкой.'
        },
        item3: {
          title: 'Два специализированных направления',
          desc: 'Промышленное и аграрное направления работают как самостоятельные вертикали, каждое со своими процессами закупки, документооборота и контроля качества.'
        },
        item4: {
          title: 'Управление на уровне основателей',
          desc: 'Каждый контракт, документ и клиентские отношения ведутся напрямую — без аутсорсинговых отделов продаж, без разрыва между обещанием и исполнением.'
        }
      }
    },
    whyUs: {
      standards: {
        title: 'Контроль стандартов',
        desc: 'Вихретоковые тесты для каждой партии меди, лазерная сортировка каждой ягоды изюма.'
      },
      supply: {
        title: 'Стабильность объемов',
        desc: 'Прямые контракты с производителями защищают наших импортеров от сезонных перепадов цен.'
      },
      comm: {
        title: 'B2B сервис',
        desc: 'Многоязычные торговые менеджеры, ясность в юридических вопросах и четкие маршруты перевозок.'
      },
      team: {
        title: 'Опытная команда',
        desc: 'Профессиональные декларанты и логисты, контролирующие каждый таможенный и фитосанитарный допуск.'
      }
    },
    contactPage: {
      title: 'Начать консультацию по поставке',
      subtitle: 'Запросите образцы продукции, технические спецификации или расчёт логистики у наших специалистов.',
      infoTitle: 'Наши торговые офисы',
      email: 'Корпоративная электронная почта',
      phone: 'Номер телефона',
      address: 'Головной офис',
      addressValue: 'Узбекистан, г. Ташкент, Яшнабадский р-н, ул. Ош, 57',
      formTitle: 'Отправить запрос (RFQ)',
      formSubtitle: 'Опишите ваши требования, и наш отдел ответит с расчётом цены и условий доставки в течение 24 часов.',
      formSuccess: 'Спасибо! Ваш запрос успешно отправлен. Наш координатор свяжется с вами в ближайшее время.',
      formError: 'Ошибка! Пожалуйста, заполните все обязательные поля, отмеченные звёздочкой (*).',
      formName: 'Полное имя',
      formEmail: 'Корпоративная электронная почта',
      formPhone: 'Номер телефона',
      formCompany: 'Название компании',
      formMsg: 'Требования к заказу',
      formSubmit: 'Отправить запрос'
    },
    footer: {
      desc: 'ООО Zarvadiy — экспортно-ориентированная торговая компания, осуществляющая поставки высококачественного медного проката и калиброванной агропродукции по всему миру.',
      quickLinks: 'Разделы сайта',
      contactUs: 'Головной офис',
      rights: 'Все права защищены.',
      credits: 'Разработано с вниманием к качеству.'
    }
  },
  uz: {
    nav: {
      home: 'Bosh sahifa',
      about: 'Kompaniya haqida',
      industries: 'Tarmoqlar',
      markets: 'Xalqaro bozorlar',
      contact: 'Aloqa'
    },
    hero: {
      tagline: 'Ko‘p Tarmoqli B2B Eksport Xoldingi',
      title: 'Xalqaro Eksport Va B2B Sourcing Yechimlari',
      subtitle: 'Nufuzli xalqaro B2B xaridorlari uchun sanoat mis metallurgiyasi va ekologik toza quritilgan mevalarni ishonchli va kafolatlangan yetkazib berish.',
      cta: 'Bizning bo‘limlar',
      ctaQuote: 'Narxni hisoblashni so‘rash',
      statHolding: 'Sanoat va Agro Departamenti',
      statExport: 'Eksport koridorlari',
      statQuality: 'HACCP va ISO 22000 standartlari'
    },
    holding: {
      industriesTitle: 'Bizning Yo‘nalishlar',
      industriesSubtitle: 'Yuqori xalqaro sifat, sanitariya va yetkazib berish nazorati standartlarida faoliyat yurituvchi ikkita mustaqil biznes dunyosi.',
      industrialCard: {
        title: 'Sanoat Departamenti',
        desc: 'Butun dunyo bo‘ylab HVAC, issiqlik almashinuvchilari, suv va gaz tizimlari uchun mis quvurlari, LWC buxtalari, ACR to‘g‘ri quvurlari va mis fitinglarini eksport qilish.',
        cta: 'Sanoat bo‘limiga o‘tish'
      },
      agroCard: {
        title: 'Qishloq Xo‘jaligi Departamenti',
        desc: 'HACCP standartlarida tayyorlangan tabiiy soya quritilgan o‘rik (turshak), kalibrlangan lazerli mayiz, olxo‘ri qoqi (chernosliv) va yong‘oq mag‘zi eksporti.',
        cta: 'Agro bo‘limiga o‘tish'
      },
      process: {
        title: 'Eksport jarayoni',
        subtitle: 'Xalqaro savdoning mukammal tizimi to‘liq shaffoflikni, laboratoriya nazoratini va yukning xavfsiz yetkazilishini kafolatlaydi.',
        step1: {
          title: '01 / So‘rov va Texnik Shartlar',
          desc: 'Bizga kerakli o‘lchamlar, hajmlar va kerakli Inkoterms shartlarini savdo bo‘limimizga yuboring.'
        },
        step2: {
          title: '02 / Ishlab Chiqarish',
          desc: 'Mis quvurlari tortiladi, qishloq xo‘jaligi mahsulotlari esa sertifikatlangan xablarimizda saralanadi.'
        },
        step3: {
          title: '03 / Sifat Nazorati',
          desc: 'Mis quvurlari uchun magnit-induksion testlar va quritilgan mevalar uchun lazerli chromatic saralash 99.9% tozalikni beradi.'
        },
        step4: {
          title: '04 / Eksportbop Qadoqlash',
          desc: 'Yukning shikastlanishini oldini olish uchun mustahkam yog‘och qutilar va vakuum qadoqlar qo‘llaniladi.'
        },
        step5: {
          title: '05 / Xaridorga Yetkazish',
          desc: 'Yuk barcha sertifikatlar (EN 10204 3.1, fitosanitariya) bilan birga mijoz omborigacha xavfsiz yetkaziladi.'
        }
      },
      markets: {
        title: 'Xalqaro bozorlar',
        subtitle: 'Markaziy Osiyoning boy xomashyo bazalarini Yevropa, Yaqin Sharq va Osiyoning yirik savdo va sanoat tarmoqlari bilan bog‘laymiz.',
        europe: 'Germaniya, Polsha va Janubiy Yevropadagi sanoat zavodlari hamda qadoqlash korxonalariga doimiy eksport.',
        mena: 'BAA, Saudiya Arabistoni va Shimoliy Afrika portlariga to‘g‘ridan-to‘g‘ri dengiz konteyner yetkazmalari.',
        cis: 'Qo‘shni MDH mamlakatlariga tezkor temir yo‘l va avtotransport koridorlari.',
        asia: 'Sharqiy va Janubiy Osiyodagi yirik importyorlar va ulgurji savdogarlar uchun ishonchli ta’minot zanjiri.'
      },
      ctaBlock: {
        title: 'Eksport va logistika bo’yicha biz bilan bog’laning',
        subtitle: 'Mutaxassislarimiz tezkor ravishda narxlar, texnik shartlarni taqdim etadi va laboratoriyangiz uchun namunalar yuborishni tashkil qiladi.',
        whatsapp: 'WhatsApp orqali bog’lanish'
      },
      badgeIndustrial: 'PO’LAT VA METALLURGIYA',
      badgeAgro: 'ORGANIK SERTIFIKATLANGAN',
      industriesHeadline: 'Ikki biznes yo’nalishi — yagona xalqaro standartlar asosida.'
    },
    industrial: {
      heroTitle: 'Sanoat uchun yuqori sifatli mis mahsulotlari eksporti',
      heroSubtitle: 'Vaqti sinovdan o‘tgan Central Osiyo zavodlaridan yuqori sifatli mis quvurlari, g‘altaklari va fitinglarini xalqaro miqyosda yetkazib berish.',
      aboutDesc: 'Zarvadiy Sanoat Departamenti — yuqori sifatli mis mahsulotlarini eksport qilishga ixtisoslashgan savdo kompaniyasidir. Markaziy Osiyodagi hamkor metallurgiya zavodlari bilan to‘g‘ridan-to‘g‘ri aloqalar o‘rnatib, biz DIN, ASTM va EN standartlariga muvofiq mahsulot yetkazib berish, mustaqil sifat nazorati va logistika jarayonlarini muvofiqlashtiramiz.',
      capabilities: {
        item1: {
          title: 'Kafolatlangan Sifat Nazorati',
          desc: 'Hamkor zavodlarda ishlab chiqarilgan har bir partiya devor butunligini tekshirish uchun ultratovushli va girdobli oqim sinovlaridan o‘tkaziladi.'
        },
        item2: {
          title: 'Metallurgik Soflik',
          desc: 'Biz eng yuqori tozalik darajasidagi (99.9% Cu-DHP va Cu-ETP) misni taqdim etamiz, bu esa rasmiy laboratoriya sertifikatlari bilan tasdiqlanadi.'
        },
        item3: {
          title: 'Eksportbop Qadoqlash Xizmati',
          desc: 'Mahsulotlar namlik va deformatsiyalardan himoyalangan mustahkam yog‘och qutilarga yoki po‘lat g‘altaklarga xavfsiz qadoqlanadi.'
        }
      },
      certifications: {
        title: 'Xalqaro Sertifikatlar',
        desc: 'Hamkor zavodlarimiz xalqaro sifat sertifikatlariga ega va muntazam ravishda mustaqil texnik auditdan o‘tadi.'
      },
      logistics: {
        desc: 'Logistika bo‘limimiz bojxona deklaratsiyalarini rasmiylashtirish, sifat sertifikatlarini (EN 10204 3.1) taqdim etish va FOB, CIF, CFR, FCA shartlarida yetkazishni ta’minlaydi.'
      }
    },
    industrialProducts: {
      title: 'Mis Mahsulotlari Katalogi',
      subtitle: 'Murakkab muhandislik tizimlari uchun mukammal o‘tkazuvchanlikka ega yuqori sifatli mis mahsulotlari.',
      viewDetails: 'Texnik xususiyatlari',
      items: {
        'pancake-coils': {
          title: 'Mis Pancake buxtalari',
          shortDesc: 'Konditsionerlash va sovutish tizimlari uchun bir va ikki qavatli spiral mis buxtalari.',
          overview: 'Mis Pancake buxtalari yuqori tozalikdagi Cu-DHP mis qotishmasidan tayyorlanadi. Ichki yuzasi to‘liq quritiladi va chang hamda namlikdan himoya qilish uchun germetik qopqoqlar bilan yopiladi. Bukish uchun juda plastik.',
          specs: [
            { label: 'Qotishma markasi', value: 'Cu-DHP (UNS C12200) / Sofligi min. 99.90%' },
            { label: 'Holati', value: 'Yumshoq tovlangan (O60)' },
            { label: 'Tashqi diametri', value: '1/4" dan 7/8" gacha (6.35 mm - 22.22 mm)' },
            { label: 'Devor qalinligi', value: '0.030" dan 0.045" gacha (0.76 mm - 1.14 mm)' },
            { label: 'Ichki tozalik', value: 'Qoldiq ifloslanish maks. 0.038 g/m² (ASTM B280 dan yuqori)' }
          ],
          apps: 'Split-tizimlarni o‘rnatish, savdo sovutish uskunalari, issiqlik nasoslari, binolarni konditsionerlash.',
          dims: 'Uzunligi 15.24 m (50 fut) yoki 30.48 m (100 fut) bo‘lgan buxtalarda yetkaziladi. Har biri alohida o‘ralgan.',
          pkg: 'Qattiq karton qutilarda, yevropalletlarda namlik yutuvchilar bilan birga joylanadi.',
          certs: 'ASTM B280, EN 12735-1, AS/NZS 1571 standartlari. EN 10204 3.1 sertifikati.',
          export: 'FOB Riga/Toshkent, CIF Gamburg, Rotterdam, Jebel Ali shartlarida eksport.'
        },
        'lwc-coils': {
          title: 'LWC quvurlari (Level Wound Coils)',
          shortDesc: 'Issiqlik almashinuvchilarini ishlab chiqaruvchi avtomatlashtirilgan liniyalar uchun yirik buxtalar.',
          overview: 'LWC buxtalari OEM ishlab chiqaruvchilarining avtomatlashtirilgan yig‘uv liniyalari uchun mo‘ljallangan. Yuqori aniqlikdagi o‘ram va barqaror geometriya yuqori tezlikda uzluksiz ishlashni ta’minlaydi.',
          specs: [
            { label: 'Qotishma markasi', value: 'Cu-DHP / Cu-DLP / Cu-ETP' },
            { label: 'Holati', value: 'Yumshoq / Yarim qattiq tovlangan' },
            { label: 'Tashqi diametri', value: '5.0 mm dan 19.05 mm gacha' },
            { label: 'Devor qalinligi', value: '0.28 mm dan 1.20 mm gacha' },
            { label: 'Buxta vazni', value: '100 kg dan 300 kg gacha' }
          ],
          apps: 'Avtomobil radiatorlari, maishiy va sanoat sovutish tizimlari uchun kondensator va bug‘latgichlarni ishlab chiqarish.',
          dims: 'Avtomat uzatish tizimlari talablariga mos ravishda karton, plastik yoki metall g‘altaklarga qatlamli o‘ram.',
          pkg: 'Po‘lat lenta bilan mustahkamlanadi, mustahkam yog‘och palletlarda plyonka bilan zich o‘raladi.',
          certs: 'EN 12735-2, ASTM B743 standartlari, ISO 9001 auditi.',
          export: 'FCA Toshkent, FOB Riga, CIF Genuya, Jebel Ali shartlarida yirik partiyalarda yetkazish.'
        },
        'acr-tubes': {
          title: 'ACR to‘g‘ri mis quvurlari',
          shortDesc: 'Suv ta’minoti, gaz quvurlari va qozonxonalar uchun yuqori qattiqlikdagi to‘g‘ri quvurlar.',
          overview: 'Qattiq ACR to‘g‘ri quvurlari mukammal to‘g‘rilik va ichki yuzaning oynasimon tozaligi bilan ishlab chiqariladi. Chang tushmasligi uchun quvur uchlari maxsus germetik qopqoqlar bilan yopiladi.',
          specs: [
            { label: 'Qotishma markasi', value: 'Cu-DHP / Cu-ETP (Sofligi 99.9%)' },
            { label: 'Holati', value: 'Qattiq tortilgan (H80) / Yarim qattiq (H58)' },
            { label: 'Tashqi diametri', value: '3/8" dan 4-1/8" gacha (9.52 mm - 104.78 mm)' },
            { label: 'Devor qalinligi', value: '0.89 mm dan 3.05 mm gacha' },
            { label: 'Uzunligi', value: '3.0 dan 6.0 metrgacha' }
          ],
          apps: 'Tibbiy gaz magistrallari, vakuum qurilmalari, qozonxonalar, isitish tizimlari va yuqori bosimli freon quvurlari.',
          dims: 'Standart uzunliklar 3.0 m, 5.8 m (20 futlik konteynerlarga yuklash uchun qulay) yoki 6.0 m.',
          pkg: 'Quvurlar bog‘lamlari po‘lat lenta bilan mahkamlanadi, uchlari qopqoqlar bilan yopiladi va mustahkam yog‘och qutilarga joylanadi.',
          certs: 'ASTM B88, ASTM B819 (Medical Gas) sertifikatlari, EN 1057 standarti.',
          export: 'FOB Toshkent, CIF Riga, CIF Gamburg, Iskandariya shartlarida bojxona rasmiylashtiruvi.'
        },
        'insulated-tubes': {
          title: 'Izolyatsiyalangan mis quvurlari',
          shortDesc: 'Trassalarni tezkor yotqizish uchun ko‘pikli polietilen qobiqli tayyor mis quvurlari.',
          overview: 'Oldindan izolyatsiyalangan quvurlar yuqori sifatli tikilgan polietilen (PE) qatlami bilan himoyalangan. Izolyatsiya kondensat hosil bo‘lishini oldini oladi, issiqlik yo‘qotilishini kamaytiradi.',
          specs: [
            { label: 'Qotishma markasi', value: 'Cu-DHP (UNS C12200) / Purity 99.9%' },
            { label: 'Izolyatsiya turi', value: 'Yopiq porali tikilgan penopolietilen' },
            { label: 'Ishchi harorat', value: '-40°C dan +120°C gacha' },
            { label: 'Issiqlik o‘tkazuvch.', value: '20°C haroratda 0.035 Vt/(m·К)' },
            { label: 'Yong‘inga chidaml.', value: 'B-s1-d0 (EN 13501-1) / O‘z-o‘zidan o‘chadigan' }
          ],
          apps: 'Konditsionerlar va issiqlik nasoslarining ulovchi trassalarini yotqizish, sovuq suv quvurlari.',
          dims: 'Yakka quvur yoki juftlashtirilgan trassalar (gaz + suyuqlik) ko‘rinishida 20, 30 va 50 metrlik buxtalarda yetkaziladi.',
          pkg: 'Buxtalar mustahkam polietilen qoplarga va qalin karton qutilarga joylashtiriladi.',
          certs: 'EN 12735-1, ASTM B280, DIN 4102-1. RoHS ekologik normalariga muvofiqlik.',
          export: 'FOB Riga, CIF Gamburg, Jebel Ali shartlarida muntazam yetkazib berish.'
        },
        'pipe-fittings': {
          title: 'Mis fitinglari',
          shortDesc: 'Mis tizimlari uchun payvandlanadigan choksiz tirsaklar, uchliklar, muftalar va o‘tish fitinglari.',
          overview: 'Bizning yuqori aniqlikdagi fitinglarimiz choksiz mis quvurlaridan tayyorlanadi. O‘lchamlarning minimal farqlari payvandlash jarayonida mukammal kapillyar effektni va to‘liq germetiklikni kafolatlaydi.',
          specs: [
            { label: 'Qotishma markasi', value: 'Cu-DHP (UNS C12200) / Purity 99.9%' },
            { label: 'Mahsulot turlari', value: 'Tirsaklar (90° va 45°), Uchliklar, Muftalar, O‘tish fitinglari, Qopqoqlar' },
            { label: 'Diametr diapazoni', value: '1/4" dan 4-1/8" gacha (6.35 mm - 104.78 mm)' },
            { label: 'Devor qalinligi', value: 'K, L, M sinfidagi quvurlar va EN 1254-1 standartlariga mos' },
            { label: 'Ulanish turi', value: 'Payvandlash uchun kapillyar ulanish' }
          ],
          apps: 'Konditsionerlash, sovutish qurilmalari, isitish va suv ta’minotining tarmoqlangan tizimlarini montaj qilish.',
          dims: 'Geometriya ASME B16.22 / EN 1254-1 standartlariga muvofiq to‘liq kalibrlangan.',
          pkg: 'Muhrlangan paketlarga (50-100 donadan) qadoqlanadi va palletlardagi karton qutilarga joylanadi.',
          certs: 'ASME B16.22, EN 1254-1 standartlari, CE PED 2014/68/EU direktivasi.',
          export: 'FCA Toshkent, FOB Riga, CIF Gamburg, Genuya shartlarida eksport.'
        },
        'capillary-tubes': {
          title: 'Mis kapillyar quvurlari',
          shortDesc: 'Xladagent oqimini tartibga solish uchun mikroskopik ichki diametrli yuqori aniqlikdagi ingichka quvurlar.',
          overview: 'Zarvadiy kapillyar mis quvurlari ichki yuzasining silliqligi va ichki diametrining minimal og‘ishi bilan ajralib turadi. Sovutish tizimlarida xladagent sarfini aniq sozlaydi.',
          specs: [
            { label: 'Qotishma markasi', value: 'Cu-DHP / Cu-ETP Sofligi 99.9%' },
            { label: 'Ichki diametri', value: '0.50 mm dan 2.50 mm gacha (ruxsat etilgan farq ±0.01 mm)' },
            { label: 'Tashqi diametri', value: '1.20 mm dan 4.00 mm gacha' },
            { label: 'Holati', value: 'Qattiq tortilgan / Yarim qattiq' },
            { label: 'Kanal tozaligi', value: 'Yog‘sizlantirilgan oynasimon sirt (azot bilan tozalangan)' }
          ],
          apps: 'Maishiy muzlatgichlar, muzlatish sandiqlari, savdo vitrinalari, avtomobil konditsionerlari.',
          dims: '1.0 metrdan 3.0 metrgacha bo‘lgan o‘lchamlarda yoki 50 kg gacha bo‘lgan buxtalarda etkazib beriladi.',
          pkg: 'Quvur uchlari germetik tarzda ezib yopiladi, buxtalar mustahkam fanera qutilarga joylanadi.',
          certs: 'EN 12735-1 va ASTM B360 standartlariga muvofiqlik.',
          export: 'FOB Toshkent, CIF Rotterdam, Gamburg, Jebel Ali shartlarida eksport.'
        }
      }
    },
    agro: {
      heroTitle: 'Evrosiyo Bog‘laridan Tabiiy Quritilgan Mevalar Va Yong‘oqlar',
      heroSubtitle: 'HACCP va ISO 22000 standartlariga muvofiq qayta ishlangan saralangan mayiz, soya quritilgan o‘rik, chernosliv va yong‘oq mag‘zi eksporti.',
      aboutDesc: 'Zarvadiy Qishloq Xo‘jaligi Departamenti — Samarqand va Farg‘ona vodiysining eng sara bog‘laridan ekologik toza mahsulotlarni yetkazib beradi. Yiliga 300 dan ortiq quyoshli kunlar va tog‘ muzliklarining toza suvlari mevalarimizning shirin va vitaminlarga boy bo‘lishini ta’minlaydi. Biz optik saralash va lazerli tozalash texnologiyalaridan foydalangan holda 99.9% tozalik darajasini kafolatlaymiz.',
      process: {
        title: 'Kalibrlangan Saralash',
        subtitle: '5 bosqichli tozalash, o‘lchamlarga ajratish va quritish tizimi mevalarning barcha ozuqaviy qiymatini saqlab qoladi.',
        step1: {
          title: '01 / Sifat nazorati va qabul qilish',
          desc: 'Yangi yig‘ib olingan hosil hamkor bog‘larimizdan qabul qilinadi va qo‘lda saralanadi.'
        },
        step2: {
          title: '02 / Shlangi Yuvish Va O‘lchamlash',
          desc: 'Mevalar chang va iflosliklardan to‘liq tozalash uchun kaskadli yuvish tizimidan o‘tadi.'
        },
        step3: {
          title: '03 / Past Haroratli Quritish',
          desc: 'Barcha vitaminlar va tabiiy ta’mni saqlab qolish uchun mevalar issiq havo dehidratatorlarida quritiladi.'
        },
        step4: {
          title: '04 / Lazerli Optik Ajratish',
          desc: 'Lazerli uskunalar har bir mevani skanerlab, rangi noto‘g‘ri bo‘lgan yoki mayda nuqsonli mevalarni ajratadi.'
        },
        step5: {
          title: '05 / Himoyalangan Muhitda Qadoqlash',
          desc: 'Tayyor mahsulotlar uzoq vaqt yangi turishi uchun vakuum qoplarga yoki bulk-kartonlarga qadoqlanadi.'
        }
      },
      packaging: {
        desc: 'Quritilgan mevalarning yangiligini saqlash uchun turli xil eksport qadoqlarini taklif etamiz: zip-lock qulflanadigan mustahkam doy-paklar, germetik tunuka bankalar va palletlarda joylangan standart 10-kilogrammlik bulk-kartonlar.'
      },
      certifications: {
        title: 'HACCP Oziq-Ovqat Xavfsizligi Nazorati',
        desc: 'Qayta ishlash korxonalarimiz HACCP va ISO 22000 xalqaro sanitariya va xavfsizlik talablariga qat’iy rioya qilgan holda ishlaydi.'
      }
    },
    agroProducts: {
      title: 'Agro Katalog',
      subtitle: 'Tabiiy quritish mevalarning tabiiy shirinligini, yumshoqligini va namlik muvozanatini saqlaydi.',
      viewDetails: 'Xomashyo xususiyatlari',
      items: {
        raisins: {
          title: 'Oltin va Qora Mayiz',
          shortDesc: 'Urug‘siz kalibrlangan mayiz, lazerli uskunalarda to‘liq tozalangan.',
          overview: 'Bizning urug‘siz mayizlarimiz Samarqandning shirin uzumlaridan tayyorlanadi. Lazerli tozalash va bandlaridan ajratish bosqichlaridan so‘ng mahsulot 99.9% tozalikka ega bo‘lib, to‘g‘ridan-to‘g‘ri iste’molga tayyor holda eksport qilinadi.',
          origin: 'Samarqand va Toshkent viloyatlari bog‘lari, O‘zbekiston.',
          harvest: 'Uzum yig‘imi avgust-sentabr oylarida. Harorat nazorat qilinadigan omborlardan yil bo‘yi yetkazib berish.',
          life: 'Quruq joyda +5°C dan +15°C gacha haroratda 12 oy saqlash mumkin.',
          pkg: '10 kg bulk-karton qutilar, yoki azot bilan to‘ldirilgan 100 g dan 1 kg gacha bo‘lgan doy-pak paketlar.',
          certs: 'HACCP, ISO 22000, Halol sertifikatlari. Pestitsidlar qoldig‘i yo‘qligi tekshirilgan.',
          export: 'Konteyner partiyalari (20 futlik FCL, taxminan 20 000 kg). FOB Riga, CIF Gamburg, Rotterdam, Jebel Ali.'
        },
        apricots: {
          title: 'Soya quritilgan o‘rik (Kuraga)',
          shortDesc: 'Tabiiy soya usulida quritilgan, yumshoq va yirik danaksiz o‘rik qoqi.',
          overview: 'O‘riklar ehtiyotkorlik bilan danagidan ajratiladi va soyada quritiladi. Bu usul mevaning tabiiy to‘q sariq rangini, yuqori namligini hamda kaliy va temir kabi minerallarini to‘liq saqlab qoladi.',
          origin: 'Namangan viloyati va Farg‘ona vodiysi bog‘lari, O‘zbekiston.',
          harvest: 'Iyun-iyul oylarida yig‘ib olinadi va namlik darajasi qat’iy nazorat qilinadi.',
          life: '+2°C dan +8°C gacha haroratda 12 oy saqlanadi.',
          pkg: '5 yoki 10 kg lik bulk-kartonlar, qutining ichidagi vakuum qoplari, doy-paklar.',
          certs: 'HACCP, ISO 22000, Halol muvofiqligi. Yevropa Ittifoqining oltingugurt dioksidi bo‘yicha normalariga mos.',
          export: 'FOB Toshkent, CIF Gamburg, Rotterdam, Jebel Ali shartlarida konteynerli eksport.'
        },
        prunes: {
          title: 'Danaksiz olxo‘ri qoqi (Chernosliv)',
          shortDesc: 'Optimal namlikda quritilgan, go‘shtdor va shirin chernosliv.',
          overview: 'Sersuv qora olxo‘rilardan tayyorlangan chernosliv issiq havo yordamida yumshoq quritiladi. Bu mevaning achib qolishini oldini oladi va tabiiy tolalarni saqlaydi.',
          origin: 'Samarqand viloyati bog‘lari, O‘zbekiston.',
          harvest: 'Avgust oyida yig‘ib olinadi. Vitaminlar bazasini saqlash uchun darhol quritishga yuboriladi.',
          life: 'Salqin joyda (0°C dan +8°C gacha) 12 oy saqlanadi.',
          pkg: '10 kg bulk-kartonlar, vakuum qoplar, chakana sotish uchun zip-paketlar.',
          certs: 'ISO 22000, HACCP, Halol, fitosanitariya sertifikatlari.',
          export: 'Muzlatgichli yuk mashinalari va konteynerlarda yetkazish. FOB Riga/Toshkent, CIF Gamburg, Rotterdam, Genuya.'
        },
        nuts: {
          title: 'Yong‘oq mag‘zi (Nimta - Butterfly)',
          shortDesc: 'Yengil sarg‘ish tusli va yoqimli yog‘li ta’mga ega saralangan yong‘oq mag‘izlari.',
          overview: 'Yong‘oqlarimiz butun yarimta mag‘izni («butterfly») saqlab qolish uchun ehtiyotkorlik bilan qo‘lda chaqiladi. Mag‘izlar rangiga ko‘ra (Extra Light, Light, Amber) saralanadi va qobiqlardan to‘liq tozalanadi.',
          origin: 'Bo‘stonliq tog‘ yonbag‘irlari va Farg‘ona vodiysi, O‘zbekiston.',
          harvest: 'Sentabr-oktabr oylarida yig‘ib olinadi. Colishdan so‘ng darhol azotli qadoqlarga joylanadi.',
          life: 'Vakuumli qadoqda +2°C dan +6°C gacha haroratda 9 oy saqlanadi.',
          pkg: 'Azot to‘ldirilgan 10 kg bulk-kartonlar, 5 kg vakuumli qoplar, doy-paklar.',
          certs: 'HACCP talablariga muvofiqlik, GMO-siz, Yevropa uchun fitosanitariya ruxsatnomalari.',
          export: 'Avtotransport va konteynerlarda yetkazish. FCA Toshkent, FOB Riga, CIF Rotterdam, Gamburg.'
        }
      }
    },
    aboutPage: {
      title: 'Xalqaro Eksport Falsafamiz',
      subtitle: 'Markaziy Osiyoning boy tabiiy va mineral resurslarini jahon bozoridagi talabchan B2B xaridorlari bilan bog‘lovchi ishonchli ko‘prik.',
      storyTitle: 'Zarvadiy Holding Tarixi',
      storyDesc: 'Zarvadiy LLC holdingi eksport kanallarini birlashtirish va professional yetkazib berish infratuzilmasini yaratish maqsadida tashkil etilgan. Toshkentdagi logistika markazimizdan biz resurslarni tayyorlash, laboratoriya tahlillari va bojxona rasmiylashtiruvini to‘liq nazorat qilamiz.',
      missionTitle: 'Bizning Missiyamiz',
      missionDesc: 'Aniq texnik shartlarga qat’iy rioya qilish va uzluksiz logistika orqali xalqaro ishlab chiqaruvchilar va qadoqlash korxonalariga barqaror ta’minot kafolatini berish.',
      visionTitle: 'Kelajakdagi Rejalarimiz',
      visionDesc: 'Yevropa va Yaqin Sharq bozorlarida nol nuqsonli sifat standartlariga muvofiq ishlaydigan Markaziy Osiyodagi eng yirik ko‘p tarmoqli B2B eksport xoldingiga aylanish.',
      approach: {
        tag: 'BIZNING YONDASHUVIMIZ',
        title: 'Va\u2019dalarga emas, standartlarga asoslanganmiz',
        subtitle: 'Birinchi kundan bizni yo\u2018naltirib kelayotgan tamoyillar.',
        item1: {
          title: 'To\u2018g\u2018ridan-to\u2018g\u2018ri savdo modeli',
          desc: 'Ortiqcha vositachilarsiz — biz ta\u2019minotchilar va xaridorlar bilan bevosita ishlaymiz, bu shaffof narxlash va qisqa yetkazib berish muddatlarini ta\u2019minlaydi.'
        },
        item2: {
          title: 'Sertifikatlangan sanoat standartlari',
          desc: 'Mis quvurlarimiz HVAC va sovutish tizimlari uchun EN 12735 talablariga javob beradi — har bir yetkazmadan oldin tekshiriladi.'
        },
        item3: {
          title: 'Ikkita ixtisoslashgan yo\u2018nalish',
          desc: 'Sanoat va Agro yo\u2018nalishlari mustaqil tarmoq sifatida ishlaydi, har birining o\u2018z ta\u2019minot, hujjat aylanmasi va sifat nazorati jarayoni bor.'
        },
        item4: {
          title: 'Asoschi tomonidan boshqariladigan faoliyat',
          desc: 'Har bir shartnoma, hujjat va mijoz bilan aloqa bevosita amalga oshiriladi — tashqi sotuv bo\u2018limlarisiz, va\u2019da bilan bajarilish o\u2018rtasidagi farqsiz.'
        }
      }
    },
    whyUs: {
      standards: {
        title: 'Standartlar nazorati',
        desc: 'Har bir mis partiyasi uchun magnit testlar, har bir izum donasini lazerli saralash.'
      },
      supply: {
        title: 'Barqaror ta’minot',
        desc: 'Ishlab chiqaruvchilar bilan to‘g‘ridan-to‘g‘ri shartnomalar importyorlarimizni narxlar tebranishidan himoya qiladi.'
      },
      comm: {
        title: 'B2B savdo xizmati',
        desc: 'Ko‘p tilli savdo menejerlari, huquqiy masalalarning aniqligi va logistika yo‘nalishlarining ravshanligi.'
      },
      team: {
        title: 'Tajribali jamoa',
        desc: 'Har bir bojxona va fitosanitariya ruxsatnomalarini nazorat qiluvchi tajribali deklarantlar va logistlar.'
      }
    },
    contactPage: {
      title: 'Savdo Konsultatsiyalarini Boshlash',
      subtitle: 'Mahsulot namunalari, texnik chizmalar, narxlar yoki logistika hisob-kitoblarini mutaxassislarimizdan so‘rang.',
      infoTitle: 'Bizning Savdo Ofislarimiz',
      email: 'Elektron pochta',
      phone: 'Savdo bo‘limi telefoni',
      address: 'Bosh ofis',
      addressValue: 'O‘zbekiston, Toshkent sh., Yashnobod tumani, Osh ko‘chasi, 57',
      formTitle: 'So’rov / Tijorat so’rovi (RFQ) yuborish',
      formSubtitle: 'Buyurtmangizning texnik parametrlarini kiriting va bizning savdo bo‘limimiz 24 soat ichida narx va logistika hisob-kitobini taqdim etadi.',
      formSuccess: 'Rahmat! Sizning so‘rovingiz savdo bo‘limimizga muvaffaqiyatli yuborildi. Tez orada savdo koordinatori siz bilan bog‘lanadi.',
      formError: 'Xato! Iltimos, yulduzcha (*) bilan belgilangan barcha majburiy maydonlarni to‘ldiring.',
      formName: 'To’liq ism',
      formEmail: 'Korporativ e-pochta',
      formPhone: 'Telefon raqami',
      formCompany: 'Kompaniya nomi',
      formMsg: 'Buyurtma tafsilotlari / Ta’minot talablari',
      formSubmit: 'So’rov yuborish'
    },
    footer: {
      desc: 'Zarvadiy MChJ — jahon bozorlariga yuqori sifatli mis metallurgiyasi mahsulotlari va kalibrlangan agro mahsulotlarni uzluksiz yetkazib beruvchi xalqaro eksport xoldingidir.',
      quickLinks: 'Sayt bo‘limlari',
      contactUs: 'Bosh ofis',
      rights: 'Barcha huquqlar himoyalangan.',
      credits: 'Premium standartlar asosida ishlab chiqilgan.'
    }
  }
};