/* ==========================================================================
   LA ONDA — MASSAS ARTESANAIS, MOLHOS, PIZZAS & PRATOS PRONTOS
   Desde 1974 • Tradição Italiana & Empório de Congelados
   Application Engine & Master Logic • Onira Labs
   ========================================================================== */

// Client Contact & Operational Data (Cardápio Oficial Físico)
const CLIENT_CONFIG = {
  name: 'La Onda Massas Artesanais',
  slogan: 'Qualidade desde 1974',
  whatsapp: '5554999917779',          // WhatsApp Oficial 1
  whatsappAlt: '5554999721777',       // WhatsApp Oficial 2
  pixKey: '5554999917779',            // Chave Pix
  pixName: 'AL Lunelli Indústria de Alimentos Ltda',
  deliveryFee: 10.00,
  address: 'Rua Tronca, 3184 – Rio Branco, Caxias do Sul - RS',
  promoMolhos: 'COMPRE 4 E LEVE 5 nos molhos de 300g'
};

// Curated Gastronomic Image Library (Fotografia Culinária Curada em Alta Resolução)
const IMAGES = {
  // Pizzas Salgadas
  pizzaCalabresa: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=700&q=80',
  pizzaCamarao: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80',
  pizzaCarnePanela: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=700&q=80',
  pizzaQueijos: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=700&q=80',
  pizzaBacon: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=700&q=80',
  pizzaFrangoCatupiry: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80',
  pizzaJamonFigo: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=700&q=80',
  pizzaMargherita: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=700&q=80',
  pizzaMussarela: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
  pizzaPerugia: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=700&q=80',
  pizzaCogumelos: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&w=700&q=80',

  // Pizzas Doces
  pizzaCalifornia: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=80',
  pizzaChocBranco: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
  pizzaChocBrancoNozes: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
  pizzaChocPreto: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80',
  pizzaChocMeia: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=700&q=80',
  pizzaMms: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=700&q=80',

  // Massas Recheadas
  agnoline: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=700&q=80',
  cappeletti: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80',
  conchiglioni: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=700&q=80',
  nhoqueDiSole: 'assets/nhoque.jpg',
  ravioliQueijos: 'https://images.unsplash.com/photo-1587740908075-9e245070dfaa?auto=format&fit=crop&w=700&q=80',
  ravioliMelNozes: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80',
  rondellisGiulian: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=700&q=80',
  tortei: 'assets/tortei.jpg',
  tortelloneRicota: 'https://images.unsplash.com/photo-1587740908075-9e245070dfaa?auto=format&fit=crop&w=700&q=80',
  tortelloneCarne: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=700&q=80',

  // Massas Lisas
  fettuccine: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=700&q=80',
  fettuccineEspinafre: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80',
  fidellini: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=700&q=80',
  macarrao: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=700&q=80',
  macarraoTricolor: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80',
  nhoqueFormolo: 'assets/nhoque.jpg',
  spaghetti: 'https://images.unsplash.com/photo-1572441713132-c542fc4fe282?auto=format&fit=crop&w=700&q=80',

  // Molhos
  molhoAlfredo: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=700&q=80',
  molhoCarbonara: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=700&q=80',
  molhoCogumelos: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80',
  molhoCodorna: 'https://images.unsplash.com/photo-1572441713132-c542fc4fe282?auto=format&fit=crop&w=700&q=80',
  molhoTatu: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=700&q=80',
  molhoNoccioli: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=700&q=80',
  molhoPesto: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&w=700&q=80',
  molhoQuatroQueijos: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=700&q=80',
  molhoTomatesSecos: 'https://images.unsplash.com/photo-1572441713132-c542fc4fe282?auto=format&fit=crop&w=700&q=80',
  molhoMoela: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=700&q=80',
  molhoFrango: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=700&q=80',

  // Carnes & Especiais
  alcatraImperial: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',
  parmegianaFrango: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80',
  bifeParmegiana: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80',
  carnePanela: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80',
  codornasRecheadas: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=700&q=80',
  escondidinho: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80',
  fileParmegiana: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80',
  frangoCremoso: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=700&q=80',
  fricasseFrango: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=700&q=80',
  tatuRecheado: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',

  // Lasanhas
  lasanhaBolonhesa: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=700&q=80',
  lasanhaVerde: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=700&q=80',
  lasanhaCarnePanela: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=700&q=80',
  lasanhaEspinafre: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=700&q=80',
  lasanhaFrango: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=700&q=80',
  lasanhaQueijos: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=700&q=80',
  lasanhaRose: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=700&q=80',

  // Panquecas
  panquecaCarneMoida: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=700&q=80',
  panquecaCarnePanela: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=700&q=80',
  panquecaFrangoQueijo: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=700&q=80',
  panquecaMilhoQueijo: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=700&q=80',

  // Diversos
  caldoSopa: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80',
  caldoGalinha: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80',
  feijaoBacon: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=700&q=80',
  lentilhaCalabresa: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=700&q=80',
  pien: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80'
};

// Database Oficial dos Produtos (La Onda — Fiel ao Cardápio Físico Oficial)
const PRODUCTS_DATA = [
  // =========================================================================
  // 1. PIZZAS ARTESANAIS COM MASSA ITALIANA (25cm)
  // =========================================================================
  {
    id: 'pizza-calabresa',
    title: 'Pizza Calabresa Artesanal',
    category: 'pizzas',
    desc: 'Massa italiana de longa fermentação de 25cm, molho de tomate natural, queijo mussarela colonial e calabresa fatiada nobre.',
    portions: [{ name: 'Pizza 25cm (Serve 1-2 pessoas)', price: 51.00 }],
    badge: 'Clássica',
    badgeType: 'artesanal',
    image: IMAGES.pizzaCalabresa,
    hint: '25cm • Massa italiana de longa fermentação'
  },
  {
    id: 'pizza-camarao',
    title: 'Pizza de Camarão Selecionado',
    category: 'pizzas',
    desc: 'Camarões selecionados salteados com ervas, molho artesanal e queijo gratinado em massa italiana de longa fermentação.',
    portions: [{ name: 'Pizza 25cm (Serve 1-2 pessoas)', price: 74.00 }],
    badge: 'Especial da Casa',
    badgeType: 'gold',
    image: IMAGES.pizzaCamarao,
    hint: '25cm • Camarões nobres salteados'
  },
  {
    id: 'pizza-carne-panela',
    title: 'Pizza Carne de Panela',
    category: 'pizzas',
    desc: 'Suculenta carne bovina desfiada apurada lentamente na panela de ferro com tempero da família e queijo gratinado.',
    portions: [{ name: 'Pizza 25cm (Serve 1-2 pessoas)', price: 59.00 }],
    badge: 'Sabor da Casa',
    badgeType: 'gold',
    image: IMAGES.pizzaCarnePanela,
    hint: '25cm • Carne de panela desfiada macia'
  },
  {
    id: 'pizza-cinco-queijos',
    title: 'Pizza Cinco Queijos Nobre',
    category: 'pizzas',
    desc: 'Combinação refinada de mussarela colonial, provolone defumado, gorgonzola aromático, parmesão e queijo cremoso.',
    portions: [{ name: 'Pizza 25cm (Serve 1-2 pessoas)', price: 61.00 }],
    badge: 'Super Queijo',
    badgeType: 'gold',
    image: IMAGES.pizzaQueijos,
    hint: '25cm • 5 queijos nobres gratinados'
  },
  {
    id: 'pizza-corn-bacon',
    title: 'Pizza Corn & Bacon Crocante',
    category: 'pizzas',
    desc: 'Cubos de bacon douradinho crocante, milho verde doce selecionado e mussarela colonial sobre massa artesanal.',
    portions: [{ name: 'Pizza 25cm (Serve 1-2 pessoas)', price: 67.00 }],
    badge: 'Crocante',
    badgeType: 'artesanal',
    image: IMAGES.pizzaBacon,
    hint: '25cm • Bacon crocante e milho doce'
  },
  {
    id: 'pizza-frango-catupiry',
    title: 'Pizza Frango com Catupiry',
    category: 'pizzas',
    desc: 'Peito de frango cozido e desfiado temperado artesanalmente com generosa cobertura de Catupiry legítimo.',
    portions: [{ name: 'Pizza 25cm (Serve 1-2 pessoas)', price: 59.00 }],
    badge: 'Tradicional',
    badgeType: 'artesanal',
    image: IMAGES.pizzaFrangoCatupiry,
    hint: '25cm • Frango suculento e Catupiry genuíno'
  },
  {
    id: 'pizza-jamon-figo',
    title: 'Pizza Jamón com Figo Nobre',
    category: 'pizzas',
    desc: 'Sofisticada harmonia agridoce de presunto tipo jamón espanhol curado com lâminas delicadas de figo e queijo derretido.',
    portions: [{ name: 'Pizza 25cm (Serve 1-2 pessoas)', price: 65.00 }],
    badge: 'Gourmet',
    badgeType: 'gold',
    image: IMAGES.pizzaJamonFigo,
    hint: '25cm • Jamón espanhol e figo nobre'
  },
  {
    id: 'pizza-margherita',
    title: 'Pizza Margherita Italiana',
    category: 'pizzas',
    desc: 'O consagrado clássico italiano: molho de tomates frescos pelados, mussarela de alta fusão e folhas de manjericão fresco.',
    portions: [{ name: 'Pizza 25cm (Serve 1-2 pessoas)', price: 47.00 }],
    badge: 'Tradição',
    badgeType: 'artesanal',
    image: IMAGES.pizzaMargherita,
    hint: '25cm • Manjericão fresco colhido no dia'
  },
  {
    id: 'pizza-mussarela',
    title: 'Pizza Mussarela Especial',
    category: 'pizzas',
    desc: 'Cobertura farta de pura mussarela colonial cremosa, tomates em rodelas e orégano fresco sobre massa aerada e leve.',
    portions: [{ name: 'Pizza 25cm (Serve 1-2 pessoas)', price: 48.00 }],
    badge: 'Clássica',
    badgeType: 'artesanal',
    image: IMAGES.pizzaMussarela,
    hint: '25cm • Queijo derretido no ponto perfeito'
  },
  {
    id: 'pizza-perugia',
    title: 'Pizza Perúgia Típica',
    category: 'pizzas',
    desc: 'Inspirada na Úmbria italiana: calabresa especial moída com temperos da serra, queijo derretido e toque de ervas finas.',
    portions: [{ name: 'Pizza 25cm (Serve 1-2 pessoas)', price: 56.00 }],
    badge: 'Especialidade',
    badgeType: 'gold',
    image: IMAGES.pizzaPerugia,
    hint: '25cm • Receita histórica da Úmbria'
  },
  {
    id: 'pizza-quatro-queijos',
    title: 'Pizza Quatro Queijos Tradicional',
    category: 'pizzas',
    desc: 'Mussarela colonial, provolone defumado, queijo gorgonzola e parmesão maturado em perfeita harmonia.',
    portions: [{ name: 'Pizza 25cm (Serve 1-2 pessoas)', price: 52.00 }],
    badge: 'Mais Pedida',
    badgeType: 'gold',
    image: IMAGES.pizzaQueijos,
    hint: '25cm • Quatro queijos nobres fundidos'
  },
  {
    id: 'pizza-tres-cogumelos',
    title: 'Pizza Três Cogumelos Gourmet',
    category: 'pizzas',
    desc: 'Trio nobre de cogumelos frescos salteados no azeite extravirgem com alho dourado e queijo gratinado.',
    portions: [{ name: 'Pizza 25cm (Serve 1-2 pessoas)', price: 62.00 }],
    badge: 'Gourmet',
    badgeType: 'gold',
    image: IMAGES.pizzaCogumelos,
    hint: '25cm • Cogumelos frescos salteados'
  },

  // =========================================================================
  // 2. PIZZAS DOCES (25cm)
  // =========================================================================
  {
    id: 'pizza-california-doce',
    title: 'Pizza Califórnia Doce',
    category: 'pizzas-doces',
    desc: 'Massa artesanal coberta com queijo suave e frutas nobres em calda (pêssego, figo, abacaxi) gratinadas ao forno.',
    portions: [{ name: 'Pizza 25cm (Serve 1-2 pessoas)', price: 68.00 }],
    badge: 'Clássica da Serra',
    badgeType: 'gold',
    image: IMAGES.pizzaCalifornia,
    hint: '25cm • Frutas em calda selecionadas e queijo'
  },
  {
    id: 'pizza-chocolate-branco',
    title: 'Pizza Chocolate Branco Nobre',
    category: 'pizzas-doces',
    desc: 'Cobertura generosa de puro chocolate branco artesanal derretido e cremoso sobre massa italiana crocante.',
    portions: [{ name: 'Pizza 25cm (Serve 1-2 pessoas)', price: 55.00 }],
    badge: 'Sobremesa',
    badgeType: 'artesanal',
    image: IMAGES.pizzaChocBranco,
    hint: '25cm • Puro chocolate branco nobre'
  },
  {
    id: 'pizza-chocolate-branco-nozes',
    title: 'Pizza Chocolate Branco com Nozes',
    category: 'pizzas-doces',
    desc: 'Chocolate branco cremoso salpicado generosamente com pedaços crocantes de nozes nobres selecionadas da serra.',
    portions: [{ name: 'Pizza 25cm (Serve 1-2 pessoas)', price: 62.00 }],
    badge: 'Especial Doces',
    badgeType: 'gold',
    image: IMAGES.pizzaChocBrancoNozes,
    hint: '25cm • Chocolate branco com nozes crocantes'
  },
  {
    id: 'pizza-chocolate-preto',
    title: 'Pizza Chocolate Preto ao Leite',
    category: 'pizzas-doces',
    desc: 'Chocolate preto ao leite nobre e aveludado derretido sobre a massa de pizza artesanal quentinha.',
    portions: [{ name: 'Pizza 25cm (Serve 1-2 pessoas)', price: 55.00 }],
    badge: 'Favorita',
    badgeType: 'artesanal',
    image: IMAGES.pizzaChocPreto,
    hint: '25cm • Chocolate ao leite artesanal'
  },
  {
    id: 'pizza-chocolate-meia-a-meia',
    title: 'Pizza Chocolate Meia a Meia',
    category: 'pizzas-doces',
    desc: 'Metade chocolate preto ao leite e metade chocolate branco nobre derretidos lado a lado.',
    portions: [{ name: 'Pizza 25cm (Serve 1-2 pessoas)', price: 55.00 }],
    badge: 'Mais Pedida',
    badgeType: 'gold',
    image: IMAGES.pizzaChocMeia,
    hint: '25cm • O melhor dos dois chocolates'
  },
  {
    id: 'pizza-m-ms',
    title: 'Pizza M&M\'s Crocante',
    category: 'pizzas-doces',
    desc: 'Base nobre de chocolate derretido coberta com confeitos coloridos e crocantes de M&M\'s legítimos.',
    portions: [
      { name: 'Base Chocolate Preto c/ M&M\'s (25cm)', price: 64.00 },
      { name: 'Base Chocolate Branco c/ M&M\'s (25cm)', price: 64.00 }
    ],
    badge: 'Alegria da Casa',
    badgeType: 'gold',
    image: IMAGES.pizzaMms,
    hint: '25cm • Escolha chocolate preto ou branco'
  },

  // =========================================================================
  // 3. MASSAS RECHEADAS (450g / 500g)
  // =========================================================================
  {
    id: 'massa-agnoline',
    title: 'Agnoline Artesanal Colonial',
    category: 'massas-recheadas',
    desc: 'Massa finíssima dobrada à mão com recheio tradicional de carnes nobres e temperos coloniais. Perfeito em caldo ou molho.',
    portions: [{ name: 'Pacote 450g (Serve 2-3 pessoas)', price: 38.00 }],
    badge: 'Tradição Colonial',
    badgeType: 'gold',
    image: IMAGES.agnoline,
    hint: 'Pacote 450g • Ideal para caldo ou servir com molho'
  },
  {
    id: 'massa-cappeletti-frango-espinafre',
    title: 'Cappeletti Frango com Espinafre',
    category: 'massas-recheadas',
    desc: 'Cappeletti artesanal recheado com peito de frango temperado e espinafre fresco. Feito especialmente para servir com molho.',
    portions: [{ name: 'Pacote 450g (Serve 2-3 pessoas)', price: 39.00 }],
    badge: 'Feito à Mão',
    badgeType: 'artesanal',
    image: IMAGES.cappeletti,
    hint: 'Pacote 450g • Feito para servir com molhos da casa'
  },
  {
    id: 'massa-conchiglioni-mussarela',
    title: 'Conchiglioni de Mussarela',
    category: 'massas-recheadas',
    desc: 'Conchas grandes de massa grano duro recheadas com queijo mussarela colonial que estica ao cortar. Perfeito para gratinar.',
    portions: [{ name: 'Pacote 450g (Serve 2-3 pessoas)', price: 45.00 }],
    badge: 'Gratinar no Forno',
    badgeType: 'gold',
    image: IMAGES.conchiglioni,
    hint: 'Pacote 450g • Recheio generoso de queijo'
  },
  {
    id: 'massa-nhoque-di-sole',
    title: 'Nhoque Recheado Di Sole',
    category: 'massas-recheadas',
    desc: 'Nhoque de batata macio e recheado, produzido pela consagrada Nhoqueria Di Sole. Escolha seu sabor favorito.',
    portions: [
      { name: 'Mussarela (500g)', price: 42.00 },
      { name: 'Mussarela com Manjericão (500g)', price: 42.00 },
      { name: 'Quatro Queijos (500g)', price: 42.00 },
      { name: 'Calabresa (500g)', price: 42.00 },
      { name: 'Damasco com Cream Cheese (500g)', price: 42.00 }
    ],
    badge: 'Nhoqueria Di Sole',
    badgeType: 'gold',
    image: IMAGES.nhoqueDiSole,
    hint: 'Pacote 500g • Produzido pela Nhoqueria Di Sole'
  },
  {
    id: 'massa-ravioli-quatro-queijos',
    title: 'Ravióli de Quatro Queijos',
    category: 'massas-recheadas',
    desc: 'Massa fresca recheada com blend nobre de 4 queijos derretidos. Sabor equilibrado que harmoniza com molhos vermelhos ou brancos.',
    portions: [{ name: 'Pacote 450g (Serve 2-3 pessoas)', price: 46.50 }],
    badge: 'Quatro Queijos',
    badgeType: 'gold',
    image: IMAGES.ravioliQueijos,
    hint: 'Pacote 450g • R$ 46,50 etiqueta oficial'
  },
  {
    id: 'massa-ravioli-mussarela-mel-nozes',
    title: 'Ravióli de Mussarela, Mel e Nozes',
    category: 'massas-recheadas',
    desc: 'Combinação nobre e refinada: mussarela suave, fio de mel puro e pedacinhos crocantes de nozes da serra.',
    portions: [{ name: 'Pacote 450g (Serve 2-3 pessoas)', price: 51.00 }],
    badge: 'Seleção Nobre',
    badgeType: 'gold',
    image: IMAGES.ravioliMelNozes,
    hint: 'Pacote 450g • R$ 51,00 etiqueta oficial'
  },
  {
    id: 'massa-rondellis-giulian',
    title: 'Rondellis Pastifício Giulian',
    category: 'massas-recheadas',
    desc: 'Rondellis artesanais enrolados com perfeição pelo renomado Pastifício Giulian. Escolha seu recheio artesanal.',
    portions: [
      { name: 'Tomate Seco e Queijo (420g)', price: 44.00 },
      { name: 'Figo e Queijo (420g)', price: 44.00 },
      { name: 'Cebola Caramelizada (420g)', price: 44.00 },
      { name: 'Presunto e Queijo (420g)', price: 44.00 },
      { name: 'Damasco com Gorgonzola (420g)', price: 44.00 }
    ],
    badge: 'Pastifício Giulian',
    badgeType: 'gold',
    image: IMAGES.rondellisGiulian,
    hint: 'Pacote 420g • Produzido pelo Pastifício Giulian'
  },
  {
    id: 'massa-tortei-tradicional',
    title: 'Tortéi Colonial de Moranga',
    category: 'massas-recheadas',
    desc: 'A grande paixão da Serra Gaúcha: massa fresca recheada com moranga cabotiá assada, queijo colonial e noz-moscada.',
    portions: [{ name: 'Pacote 450g (Serve 2-3 pessoas)', price: 28.50 }],
    badge: 'Campeão de Vendas',
    badgeType: 'gold',
    image: IMAGES.tortei,
    hint: 'Pacote 450g • A autêntica receita da Serra'
  },
  {
    id: 'massa-tortellone-ricota',
    title: 'Tortellone de Ricota com Ervas',
    category: 'massas-recheadas',
    desc: 'Tortellone de massa fresca artesanal recheado com ricota fresca leve e tempero delicado de ervas finas aromáticas.',
    portions: [{ name: 'Pacote 450g (Serve 2-3 pessoas)', price: 42.00 }],
    badge: 'Leve & Aromático',
    badgeType: 'artesanal',
    image: IMAGES.tortelloneRicota,
    hint: 'Pacote 450g • Delicado e saboroso'
  },
  {
    id: 'massa-tortellone-carne-panela',
    title: 'Tortellone de Carne de Panela',
    category: 'massas-recheadas',
    desc: 'Recheio farto e suculento de carne bovina cozida lentamente na panela de ferro com tempero da nona.',
    portions: [{ name: 'Pacote 450g (Serve 2-3 pessoas)', price: 54.75 }],
    badge: 'Assinatura',
    badgeType: 'gold',
    image: IMAGES.tortelloneCarne,
    hint: 'Pacote 450g • Recheio nobre de carne de panela'
  },

  // =========================================================================
  // 4. MASSAS LISAS (450g / 500g)
  // =========================================================================
  {
    id: 'massa-fettuccine',
    title: 'Fettuccine Tradicional com Ovos',
    category: 'massas-lisas',
    desc: 'Fitas de massa fresca com ovos selecionados, textura porosa perfeita para abraçar os molhos da La Onda.',
    portions: [{ name: 'Pacote 450g (Serve 2-3 pessoas)', price: 17.50 }],
    badge: 'Massa Fresca',
    badgeType: 'artesanal',
    image: IMAGES.fettuccine,
    hint: 'Pacote 450g • Cozimento rápido al dente'
  },
  {
    id: 'massa-fettuccine-espinafre',
    title: 'Fettuccine de Espinafre Natural',
    category: 'massas-lisas',
    desc: 'Massa verde artesanal com espinafre fresco e ovos. Cor vibrante e sabor suave que harmoniza com molhos brancos e de queijo.',
    portions: [{ name: 'Pacote 450g (Serve 2-3 pessoas)', price: 21.00 }],
    badge: 'Massa Verde',
    badgeType: 'artesanal',
    image: IMAGES.fettuccineEspinafre,
    hint: 'Pacote 450g • 100% espinafre natural'
  },
  {
    id: 'massa-fidellini',
    title: 'Fidellini para Sopas e Caldos',
    category: 'massas-lisas',
    desc: 'Massa fininha e delicada, perfeita para acompanhar caldos caseiros reconfortantes e sopas de galinha caipira.',
    portions: [{ name: 'Pacote 300g', price: 13.50 }],
    badge: 'Delicado',
    badgeType: 'artesanal',
    image: IMAGES.fidellini,
    hint: 'Pacote 300g • Ideal para caldos e sopas'
  },
  {
    id: 'massa-macarrao',
    title: 'Macarrão Tradicional da Casa',
    category: 'massas-lisas',
    desc: 'Massa artesanal caseira com corte tradicional, textura firme e sabor autêntico de almoço de domingo em família.',
    portions: [{ name: 'Pacote 450g (Serve 2-3 pessoas)', price: 17.50 }],
    badge: 'Caseiro',
    badgeType: 'artesanal',
    image: IMAGES.macarrao,
    hint: 'Pacote 450g • Tradição italiana'
  },
  {
    id: 'massa-macarrao-tricolor',
    title: 'Macarrão Tricolor Natural',
    category: 'massas-lisas',
    desc: 'Combinação alegre e saborosa de três massas naturais: tradicional com ovos, verde com espinafre e avermelhado com tomate.',
    portions: [{ name: 'Pacote 450g (Serve 2-3 pessoas)', price: 21.00 }],
    badge: 'Tricolor Natural',
    badgeType: 'artesanal',
    image: IMAGES.macarraoTricolor,
    hint: 'Pacote 450g • Sem corantes artificiais'
  },
  {
    id: 'massa-nhoque-formolo',
    title: 'Nhoque Formolo de Batatas',
    category: 'massas-lisas',
    desc: 'O consagrado nhoque de batatas selecionadas produzido pela tradicional e centenária Massas Formolo. Leve e macio.',
    portions: [{ name: 'Pacote 500g (Serve 2-3 pessoas)', price: 16.00 }],
    badge: 'Massas Formolo',
    badgeType: 'gold',
    image: IMAGES.nhoqueFormolo,
    hint: 'Pacote 500g • Produzido pela Massas Formolo'
  },
  {
    id: 'massa-spaghetti',
    title: 'Spaghetti Tradicional',
    category: 'massas-lisas',
    desc: 'O corte mais querido do mundo, produzido artesanalmente para ficar perfeitamente al dente com qualquer molho.',
    portions: [{ name: 'Pacote 450g (Serve 2-3 pessoas)', price: 17.50 }],
    badge: 'Al Dente',
    badgeType: 'artesanal',
    image: IMAGES.spaghetti,
    hint: 'Pacote 450g • O clássico indispensável'
  },

  // =========================================================================
  // 5. MOLHOS ARTESANAIS (PROMOÇÃO: COMPRE 4 E LEVE 5 nos potes de 300g)
  // =========================================================================
  {
    id: 'molho-alfredo',
    title: 'Molho Alfredo Aveludado',
    category: 'molhos',
    desc: 'Creme de leite fresco, manteiga nobre colonial, queijo parmesão ralado na hora e pimenta branca suave.',
    portions: [
      { name: 'Pote 410g', price: 31.00 },
      { name: 'Pote Família 820g', price: 62.00 }
    ],
    badge: 'Super Cremoso',
    badgeType: 'gold',
    image: IMAGES.molhoAlfredo,
    hint: 'Disponível em 410g e 820g • Base cremosa de parmesão'
  },
  {
    id: 'molho-carbonara',
    title: 'Molho Carbonara Clássico',
    category: 'molhos',
    desc: 'Molho cremoso apurado com pedacinhos dourados de bacon crocante, queijo colonial e pimenta moída na hora.',
    portions: [{ name: 'Pote 300g', price: 27.00 }],
    badge: 'Compre 4 Leve 5 ⭐',
    badgeType: 'gold',
    image: IMAGES.molhoCarbonara,
    hint: 'Pote 300g • Entra na promoção Compre 4 e Leve 5'
  },
  {
    id: 'molho-cogumelos-sugo',
    title: 'Molho Cogumelos ao Sugo',
    category: 'molhos',
    desc: 'Cogumelos frescos salteados no azeite e reduzidos em molho de tomates maduros pelados com ervas finas.',
    portions: [{ name: 'Pote 300g', price: 28.00 }],
    badge: 'Compre 4 Leve 5 ⭐',
    badgeType: 'gold',
    image: IMAGES.molhoCogumelos,
    hint: 'Pote 300g • Entra na promoção Compre 4 e Leve 5'
  },
  {
    id: 'molho-da-codorna',
    title: 'Molho da Codorna (sem carne)',
    category: 'molhos',
    desc: 'Molho especial apurado com o rico caldo do cozimento aromático da codorna temperada com vinho e especiarias da serra.',
    portions: [{ name: 'Pote 300g', price: 17.00 }],
    badge: 'Compre 4 Leve 5 ⭐',
    badgeType: 'artesanal',
    image: IMAGES.molhoCodorna,
    hint: 'Pote 300g • Entra na promoção Compre 4 e Leve 5'
  },
  {
    id: 'molho-do-tatu',
    title: 'Molho do Tatu (sem carne)',
    category: 'molhos',
    desc: 'Molho apurado com o caldo dourado e suculento do assado de tatu bovino com legumes e tempero de panela.',
    portions: [{ name: 'Pote 300g', price: 17.00 }],
    badge: 'Compre 4 Leve 5 ⭐',
    badgeType: 'artesanal',
    image: IMAGES.molhoTatu,
    hint: 'Pote 300g • Entra na promoção Compre 4 e Leve 5'
  },
  {
    id: 'molho-noccioli-especial',
    title: 'Molho Noccioli Especial c/ Nozes',
    category: 'molhos',
    desc: 'O molho assinatura da La Onda: fusão aveludada de queijos cremosos salpicada com nozes crocantes selecionadas.',
    portions: [{ name: 'Pote 300g', price: 28.00 }],
    badge: 'Assinatura La Onda',
    badgeType: 'gold',
    image: IMAGES.molhoNoccioli,
    hint: 'Pote 300g • Entra na promoção Compre 4 e Leve 5'
  },
  {
    id: 'molho-pesto-genoves',
    title: 'Molho Pesto Genovês',
    category: 'molhos',
    desc: 'Manjericão fresco aromático colhido no dia, azeite de oliva extravirgem, castanhas e queijo parmesão maturado.',
    portions: [{ name: 'Pote 170g', price: 27.50 }],
    badge: 'Pesto Fresco',
    badgeType: 'artesanal',
    image: IMAGES.molhoPesto,
    hint: 'Pote 170g • Aroma intenso e fresco de manjericão'
  },
  {
    id: 'molho-quatro-queijos',
    title: 'Molho Quatro Queijos Cremoso',
    category: 'molhos',
    desc: 'Fusão cremosa de gorgonzola, provolone defumado, mussarela colonial e parmesão maturado com creme de leite fresco.',
    portions: [{ name: 'Pote 300g', price: 27.00 }],
    badge: 'Compre 4 Leve 5 ⭐',
    badgeType: 'gold',
    image: IMAGES.molhoQuatroQueijos,
    hint: 'Pote 300g • Entra na promoção Compre 4 e Leve 5'
  },
  {
    id: 'molho-tomates-secos',
    title: 'Molho de Tomates Secos',
    category: 'molhos',
    desc: 'Tomates secos artesanais combinados com ervas aromáticas e azeite extravirgem em molho encorpado.',
    portions: [{ name: 'Pote 300g', price: 27.00 }],
    badge: 'Compre 4 Leve 5 ⭐',
    badgeType: 'artesanal',
    image: IMAGES.molhoTomatesSecos,
    hint: 'Pote 300g • Entra na promoção Compre 4 e Leve 5'
  },
  {
    id: 'molho-tradicional-gourmet',
    title: 'Molho Tradicional c/ Moela',
    category: 'molhos',
    desc: 'Molho vermelho rústico encorpado com pedacinhos macios de moela colonial picadinha, rico em tradição e sabor de nona.',
    portions: [{ name: 'Pote 300g', price: 26.00 }],
    badge: 'Compre 4 Leve 5 ⭐',
    badgeType: 'gold',
    image: IMAGES.molhoMoela,
    hint: 'Pote 300g • Entra na promoção Compre 4 e Leve 5'
  },
  {
    id: 'molho-vermelho-frango',
    title: 'Molho Vermelho c/ Frango Desfiado',
    category: 'molhos',
    desc: 'Peito de frango cozido e desfiado em molho de tomates maduros refogados lentamente com alho, cebola e cheiro-verde.',
    portions: [{ name: 'Pote 300g', price: 26.00 }],
    badge: 'Compre 4 Leve 5 ⭐',
    badgeType: 'artesanal',
    image: IMAGES.molhoFrango,
    hint: 'Pote 300g • Entra na promoção Compre 4 e Leve 5'
  },

  // =========================================================================
  // 6. CARNES & PRATOS ESPECIAIS
  // =========================================================================
  {
    id: 'carne-alcatra-imperial',
    title: 'Alcatra Imperial da Casa',
    category: 'carnes',
    desc: 'Cortes nobres de alcatra marinados no tempero imperial secreto da La Onda. Carne macia, suculenta e saborosa.',
    portions: [
      { name: 'Porção 400g (Serve 1-2 pessoas)', price: 37.50 },
      { name: 'Porção 800g (Serve 3-4 pessoas)', price: 75.00 }
    ],
    badge: 'Especialidade',
    badgeType: 'gold',
    image: IMAGES.alcatraImperial,
    hint: 'R$ 37,50 (400g) / R$ 75,00 (800g) • Marinada especial'
  },
  {
    id: 'carne-parmegiana-frango',
    title: 'À Parmegiana de Frango',
    category: 'carnes',
    desc: 'Filés de peito de frango empanados e dourados com crosta sequinha, molho de tomate natural e mussarela gratinada.',
    portions: [{ name: 'Bandeja 580g (Serve 2 pessoas)', price: 45.00 }],
    badge: 'Gratinado',
    badgeType: 'gold',
    image: IMAGES.parmegianaFrango,
    hint: 'Bandeja 580g • Pronto para aquecer e servir'
  },
  {
    id: 'carne-bife-parmegiana',
    title: 'Bife Bovino à Parmegiana',
    category: 'carnes',
    desc: 'Bifes bovinos selecionados, empanados artesanalmente com crosta crocante, molho sugo encorpado e bastante queijo.',
    portions: [
      { name: 'Porção Média 600g (Serve 2 pessoas)', price: 64.50 },
      { name: 'Porção Família 1,2kg (Serve 4 pessoas)', price: 129.00 }
    ],
    badge: 'Mais Pedido',
    badgeType: 'gold',
    image: IMAGES.bifeParmegiana,
    hint: 'Disponível em 600g e 1,2kg • Suculento e farto'
  },
  {
    id: 'carne-de-panela',
    title: 'Carne de Panela Tradicional',
    category: 'carnes',
    desc: 'Carne bovina de primeira cozida demoradamente na panela de ferro com temperos coloniais até desmanchar no garfo.',
    portions: [{ name: 'Bandeja 500g (Serve 2 pessoas)', price: 55.00 }],
    badge: 'Sabor da Nona',
    badgeType: 'artesanal',
    image: IMAGES.carnePanela,
    hint: 'Bandeja 500g • Molho denso e aromático'
  },
  {
    id: 'carne-codornas-recheadas',
    title: 'Codornas Recheadas Assadas',
    category: 'carnes',
    desc: 'Codornas inteiras selecionadas, recheadas com farofa artesanal rica e assadas até ficarem douradas e perfumadas.',
    portions: [
      { name: '1 Unidade Recheada (400g)', price: 41.00 },
      { name: '2 Unidades Recheadas (800g)', price: 82.00 }
    ],
    badge: 'Alta Gastronomia',
    badgeType: 'gold',
    image: IMAGES.codornasRecheadas,
    hint: 'Disponível em 1 un (400g) ou 2 un (800g)'
  },
  {
    id: 'carne-escondidinho',
    title: 'Escondidinho de Carne de Panela',
    category: 'carnes',
    desc: 'Purê aveludado cremoso recheado com carne de panela desfiada e coberto com queijo colonial tostado.',
    portions: [
      { name: 'Porção Média 500g (Serve 2 pessoas)', price: 41.00 },
      { name: 'Porção Família 1kg (Serve 4 pessoas)', price: 82.00 }
    ],
    badge: 'Cremoso',
    badgeType: 'gold',
    image: IMAGES.escondidinho,
    hint: 'Disponível em 500g e 1kg • Cobertura gratinada'
  },
  {
    id: 'carne-file-parmegiana',
    title: 'Filé Mignon à Parmegiana Nobre',
    category: 'carnes',
    desc: 'O corte mais nobre da culinária: filé mignon macio empanado com crosta crocante, molho de tomate pelado e queijo derretido.',
    portions: [
      { name: 'Porção Média 600g (Serve 2 pessoas)', price: 74.50 },
      { name: 'Porção Família 1,2kg (Serve 4 pessoas)', price: 149.00 }
    ],
    badge: 'Filé Mignon Nobre',
    badgeType: 'gold',
    image: IMAGES.fileParmegiana,
    hint: 'Disponível em 600g e 1,2kg • Filé mignon de primeira'
  },
  {
    id: 'carne-frango-cremoso-quatro-queijos',
    title: 'Frango Cremoso com 4 Queijos',
    category: 'carnes',
    desc: 'Iscas suculentas de peito de frango envolvidas em molho cremoso aos quatro queijos e gratinadas ao forno.',
    portions: [
      { name: 'Porção Média 525g', price: 41.00 },
      { name: 'Porção Família 1,05kg', price: 82.00 }
    ],
    badge: 'Super Cremoso',
    badgeType: 'gold',
    image: IMAGES.frangoCremoso,
    hint: 'Disponível em 525g e 1,05kg • Molho 4 queijos denso'
  },
  {
    id: 'carne-fricasse-frango',
    title: 'Fricassê de Frango c/ Purê Cremoso',
    category: 'carnes',
    desc: 'Frango desfiado cremoso com requeijão e milho sobre farta camada de purê de batata artesanal e queijo tostado.',
    portions: [
      { name: 'Porção Média 500g', price: 39.00 },
      { name: 'Porção Família 1kg', price: 78.00 }
    ],
    badge: 'Conforto',
    badgeType: 'gold',
    image: IMAGES.fricasseFrango,
    hint: 'Disponível em 500g e 1kg • Purê aveludado e frango'
  },
  {
    id: 'carne-tatu-recheado',
    title: 'Tatu Bovino c/ Calabresa',
    category: 'carnes',
    desc: 'Peça macia de tatu bovino recheada com calabresa nobre e temperos coloniais, fatiada e imersa no molho do próprio assado.',
    portions: [
      { name: 'Porção 400g (Serve 1-2 pessoas)', price: 38.00 },
      { name: 'Porção 800g (Serve 3-4 pessoas)', price: 76.00 }
    ],
    badge: 'Tradição Gaúcha',
    badgeType: 'gold',
    image: IMAGES.tatuRecheado,
    hint: 'Disponível em 400g e 800g • Fatiado em molho de assado'
  },

  // =========================================================================
  // 7. LASANHAS GRATINADAS (550g e 1Kg)
  // =========================================================================
  {
    id: 'lasanha-carne-bolonhesa',
    title: 'Lasanha de Carne à Bolonhesa',
    category: 'lasanhas',
    desc: 'Camadas generosas de massa artesanal, carne bovina moída apurada lentamente em molho de tomate pelado e queijo derretido.',
    portions: [
      { name: 'Porção Média 550g', price: 45.75 },
      { name: 'Porção Família 1kg', price: 81.75 }
    ],
    badge: 'Campeã de Vendas',
    badgeType: 'gold',
    image: IMAGES.lasanhaBolonhesa,
    hint: 'Disponível em 550g e 1kg • Pronta para assar'
  },
  {
    id: 'lasanha-carne-massa-verde',
    title: 'Lasanha de Carne com Massa Verde',
    category: 'lasanhas',
    desc: 'Massa artesanal verde de espinafre intercalada com molho bolonhesa clássico e mussarela colonial gratinada.',
    portions: [
      { name: 'Porção Média 550g', price: 45.75 },
      { name: 'Porção Família 1kg', price: 81.75 }
    ],
    badge: 'Massa Verde',
    badgeType: 'gold',
    image: IMAGES.lasanhaVerde,
    hint: 'Disponível em 550g e 1kg • Massa de espinafre fresco'
  },
  {
    id: 'lasanha-carne-panela',
    title: 'Lasanha de Carne de Panela',
    category: 'lasanhas',
    desc: 'Carne bovina desfiada com tempero de família entre camadas de massa fresca caseira e muito queijo colonial derretido.',
    portions: [
      { name: 'Porção Média 550g', price: 47.75 },
      { name: 'Porção Família 1kg', price: 85.50 }
    ],
    badge: 'Especial La Onda',
    badgeType: 'gold',
    image: IMAGES.lasanhaCarnePanela,
    hint: 'Disponível em 550g e 1kg • Recheio de carne de panela'
  },
  {
    id: 'lasanha-espinafre',
    title: 'Lasanha de Espinafre c/ Bechamel',
    category: 'lasanhas',
    desc: 'Recheio suave de espinafre fresco com molho bechamel aveludado e queijo colonial gratinado dourado.',
    portions: [
      { name: 'Porção Média 550g', price: 42.50 },
      { name: 'Porção Família 1kg', price: 76.50 }
    ],
    badge: 'Vegetariana',
    badgeType: 'artesanal',
    image: IMAGES.lasanhaEspinafre,
    hint: 'Disponível em 550g e 1kg • Leve e cremosa'
  },
  {
    id: 'lasanha-frango',
    title: 'Lasanha de Frango Cremosa',
    category: 'lasanhas',
    desc: 'Peito de frango cozido e desfiado em molho aromático com camadas generosas de queijo mussarela derretido.',
    portions: [
      { name: 'Porção Média 550g', price: 45.75 },
      { name: 'Porção Família 1kg', price: 81.75 }
    ],
    badge: 'Clássica',
    badgeType: 'artesanal',
    image: IMAGES.lasanhaFrango,
    hint: 'Disponível em 550g e 1kg • Frango desfiado suculento'
  },
  {
    id: 'lasanha-quatro-queijos',
    title: 'Lasanha Quatro Queijos Gratinada',
    category: 'lasanhas',
    desc: 'Mussarela colonial, provolone defumado, gorgonzola e parmesão maturado fundidos em molho branco especial.',
    portions: [
      { name: 'Porção Média 550g', price: 46.75 },
      { name: 'Porção Família 1kg', price: 84.50 }
    ],
    badge: 'Super Queijo',
    badgeType: 'gold',
    image: IMAGES.lasanhaQueijos,
    hint: 'Disponível em 550g e 1kg • Quatro queijos nobres fundidos'
  },
  {
    id: 'lasanha-rose-carne-verde',
    title: 'Lasanha Rosé c/ Massa Verde',
    category: 'lasanhas',
    desc: 'Massa verde com molho rosé cremoso (tomate pelado e creme fresco), carne bovina selecionada e queijo gratinado.',
    portions: [
      { name: 'Porção Média 550g', price: 45.75 },
      { name: 'Porção Família 1kg', price: 81.75 }
    ],
    badge: 'Sofisticada',
    badgeType: 'gold',
    image: IMAGES.lasanhaRose,
    hint: 'Disponível em 550g e 1kg • Massa verde e molho rosé'
  },

  // =========================================================================
  // 8. PANQUECAS SEM MOLHO (400g - 4 unidades)
  // =========================================================================
  {
    id: 'panqueca-carne-moida',
    title: 'Panquecas de Carne Moída (4 un)',
    category: 'panquecas',
    desc: '4 panquecas artesanais sem molho (400g) recheadas com carne moída de primeira temperada com alho, cebola e cheiro-verde.',
    portions: [{ name: 'Bandeja 400g (4 unidades)', price: 36.00 }],
    badge: 'Clássica',
    badgeType: 'artesanal',
    image: IMAGES.panquecaCarneMoida,
    hint: '4 unidades (400g) • Sirva com molhos La Onda'
  },
  {
    id: 'panqueca-carne-panela',
    title: 'Panquecas de Carne de Panela (4 un)',
    category: 'panquecas',
    desc: '4 panquecas de massa fininha sem molho (400g) recheadas com carne bovina de panela desfiada e suculenta.',
    portions: [{ name: 'Bandeja 400g (4 unidades)', price: 38.00 }],
    badge: 'Saborosa',
    badgeType: 'gold',
    image: IMAGES.panquecaCarnePanela,
    hint: '4 unidades (400g) • Sirva com molhos La Onda'
  },
  {
    id: 'panqueca-frango-queijo',
    title: 'Panquecas Frango com Queijo (4 un)',
    category: 'panquecas',
    desc: '4 panquecas sem molho (400g) recheadas com frango desfiado cremoso e queijo mussarela colonial derretido.',
    portions: [{ name: 'Bandeja 400g (4 unidades)', price: 38.00 }],
    badge: 'Mais Pedida',
    badgeType: 'gold',
    image: IMAGES.panquecaFrangoQueijo,
    hint: '4 unidades (400g) • Sirva com molhos La Onda'
  },
  {
    id: 'panqueca-milho-queijo',
    title: 'Panquecas Milho com Queijo (4 un)',
    category: 'panquecas',
    desc: '4 panquecas sem molho (400g) recheadas com milho verde doce selecionado e queijo colonial derretido.',
    portions: [{ name: 'Bandeja 400g (4 unidades)', price: 38.00 }],
    badge: 'Vegetariana',
    badgeType: 'artesanal',
    image: IMAGES.panquecaMilhoQueijo,
    hint: '4 unidades (400g) • Sirva com molhos La Onda'
  },

  // =========================================================================
  // 9. DIVERSOS DO LA ONDA & SOPAS
  // =========================================================================
  {
    id: 'diverso-caldo-sopa-1l',
    title: 'Caldo de Sopa Tradicional (1L)',
    category: 'diversos',
    desc: 'Caldo rico apurado por horas com carne e legumes frescos. A base perfeita para preparar agnoline, fidellini ou sopa.',
    portions: [{ name: 'Garrafa 1 Litro', price: 29.75 }],
    badge: '100% Caseiro',
    badgeType: 'gold',
    image: IMAGES.caldoSopa,
    hint: 'Garrafa 1 Litro • Perfeito com Agnoline e Fidellini'
  },
  {
    id: 'diverso-caldo-galinha-caipira',
    title: 'Caldo c/ Galinha Caipira (1,2kg)',
    category: 'diversos',
    desc: 'Caldo encorpado e reconfortante apurado com pedaços suculentos de galinha caipira e legumes coloniais da serra.',
    portions: [{ name: 'Pote 1,2kg', price: 39.75 }],
    badge: 'Galinha Caipira',
    badgeType: 'gold',
    image: IMAGES.caldoGalinha,
    hint: 'Pote 1,2kg • Rico em sabor e nutrição'
  },
  {
    id: 'diverso-feijao-bacon-calabresa',
    title: 'Feijão com Bacon e Calabresa',
    category: 'diversos',
    desc: 'Feijão colonial cozido no capricho com pedacinhos dourados de bacon, rodelas de calabresa fatiada e tempero caseiro.',
    portions: [{ name: 'Pote 500g', price: 36.50 }],
    badge: 'Feito na Hora',
    badgeType: 'artesanal',
    image: IMAGES.feijaoBacon,
    hint: 'Pote 500g • Tempero colonial da serra'
  },
  {
    id: 'diverso-lentilha-calabresa',
    title: 'Lentilha com Calabresa da Serra',
    category: 'diversos',
    desc: 'Lentilha macia e nutritiva cozida com calabresa nobre, legumes frescos e temperos aromáticos coloniais.',
    portions: [{ name: 'Pote 500g', price: 36.50 }],
    badge: 'Reconfortante',
    badgeType: 'artesanal',
    image: IMAGES.lentilhaCalabresa,
    hint: 'Pote 500g • Prato reconfortante e prático'
  },
  {
    id: 'diverso-pien-tradicional',
    title: 'Piên Tradicional Colonial (250g)',
    category: 'diversos',
    desc: 'A legítima iguaria colonial italiana feita com miúdos selecionados, queijo e tempero verde para enriquecer seu caldo de sopa.',
    portions: [{ name: 'Pacote 250g', price: 20.00 }],
    badge: 'Tradição Italiana',
    badgeType: 'gold',
    image: IMAGES.pien,
    hint: 'Pacote 250g • O autêntico piên de Caxias do Sul'
  }
];

// Application State
let currentCategory = 'all';
let searchQuery = '';
let cart = [];
let activeModalProduct = null;
let selectedPortionIndex = 0;
let selectedProductState = 'Congelado Artesanal';
let modalQuantity = 1;
let deliveryType = 'entrega'; // 'entrega' ou 'retirada'
let paymentMethod = 'pix';    // 'pix', 'cartao', 'dinheiro'

// Format Currency BRL
function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  renderCategories();
  renderHighlights();
  renderProducts();
  setupEventListeners();
  setupFloatingCTA();
  updateCartUI();

  // Register Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// Setup DOM Event Listeners
function setupEventListeners() {
  // Desktop Search
  const searchInputDesktop = document.getElementById('search-input');
  if (searchInputDesktop) {
    searchInputDesktop.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderHighlights();
      renderProducts();
    });
  }

  // Mobile Search
  const searchInputMobile = document.getElementById('search-input-mobile');
  if (searchInputMobile) {
    searchInputMobile.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderHighlights();
      renderProducts();
    });
  }

  // Cart Drawer Triggers
  const openCartBtn = document.getElementById('btn-open-cart');
  const closeCartBtn = document.getElementById('btn-close-cart');
  const continueShoppingBtn = document.getElementById('btn-continue-shopping');
  const cartOverlay = document.getElementById('cart-overlay');

  if (openCartBtn) openCartBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

  // Delivery / Pickup Toggle
  const tabDelivery = document.getElementById('tab-delivery');
  const tabPickup = document.getElementById('tab-pickup');
  const addressBlock = document.getElementById('address-field-block');
  const pickupInfo = document.getElementById('pickup-info-msg');

  if (tabDelivery && tabPickup) {
    tabDelivery.addEventListener('click', () => {
      deliveryType = 'entrega';
      tabDelivery.classList.add('active');
      tabPickup.classList.remove('active');
      if (addressBlock) addressBlock.style.display = 'block';
      if (pickupInfo) pickupInfo.style.display = 'none';
      updateCartUI();
    });

    tabPickup.addEventListener('click', () => {
      deliveryType = 'retirada';
      tabPickup.classList.add('active');
      tabDelivery.classList.remove('active');
      if (addressBlock) addressBlock.style.display = 'none';
      if (pickupInfo) pickupInfo.style.display = 'flex';
      updateCartUI();
    });
  }

  // Payment Selector
  const payPix = document.getElementById('pay-pix');
  const payCard = document.getElementById('pay-card');
  const payCash = document.getElementById('pay-cash');
  const pixBox = document.getElementById('pix-payment-box');

  if (payPix && payCard && payCash) {
    payPix.addEventListener('click', () => {
      paymentMethod = 'pix';
      payPix.classList.add('active');
      payCard.classList.remove('active');
      payCash.classList.remove('active');
      if (pixBox) pixBox.style.display = 'block';
    });

    payCard.addEventListener('click', () => {
      paymentMethod = 'cartao';
      payCard.classList.add('active');
      payPix.classList.remove('active');
      payCash.classList.remove('active');
      if (pixBox) pixBox.style.display = 'none';
    });

    payCash.addEventListener('click', () => {
      paymentMethod = 'dinheiro';
      payCash.classList.add('active');
      payPix.classList.remove('active');
      payCard.classList.remove('active');
      if (pixBox) pixBox.style.display = 'none';
    });
  }

  // Pix Copy Button
  const btnPixCopy = document.getElementById('btn-copy-pix');
  if (btnPixCopy) {
    btnPixCopy.addEventListener('click', copyPixKey);
  }

  // WhatsApp Order Submission
  const btnSubmitOrder = document.getElementById('btn-submit-order');
  if (btnSubmitOrder) {
    btnSubmitOrder.addEventListener('click', submitOrderViaWhatsApp);
  }

  // Modal Controls
  const modalCloseBtn = document.getElementById('modal-close');
  const modalBackdrop = document.getElementById('product-modal');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  // Modal Quantity
  const btnQtyMinus = document.getElementById('modal-qty-minus');
  const btnQtyPlus = document.getElementById('modal-qty-plus');
  if (btnQtyMinus) {
    btnQtyMinus.addEventListener('click', () => {
      if (modalQuantity > 1) {
        modalQuantity--;
        document.getElementById('modal-qty-val').innerText = modalQuantity;
        updateModalTotal();
      }
    });
  }
  if (btnQtyPlus) {
    btnQtyPlus.addEventListener('click', () => {
      modalQuantity++;
      document.getElementById('modal-qty-val').innerText = modalQuantity;
      updateModalTotal();
    });
  }

  // Modal Add Button
  const btnConfirmAdd = document.getElementById('btn-modal-add-cart');
  if (btnConfirmAdd) {
    btnConfirmAdd.addEventListener('click', confirmAddFromModal);
  }

  // Header Scroll Effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });
}

// Render Categories Tab Strip
function renderCategories() {
  const container = document.getElementById('categories-container');
  if (!container) return;

  const categories = [
    { id: 'all', name: 'Todos os Pratos', icon: 'utensils' },
    { id: 'pizzas', name: 'Pizzas Artesanais', icon: 'pizza' },
    { id: 'pizzas-doces', name: 'Pizzas Doces', icon: 'sparkles' },
    { id: 'massas-recheadas', name: 'Massas Recheadas', icon: 'chef-hat' },
    { id: 'massas-lisas', name: 'Massas Lisas', icon: 'package' },
    { id: 'molhos', name: 'Molhos Artesanais', icon: 'flame' },
    { id: 'carnes', name: 'Carnes & Especiais', icon: 'drumstick' },
    { id: 'lasanhas', name: 'Lasanhas Gratinadas', icon: 'layers' },
    { id: 'panquecas', name: 'Panquecas (4 un)', icon: 'circle-dot' },
    { id: 'diversos', name: 'Diversos & Sopas', icon: 'soup' }
  ];

  container.innerHTML = categories.map(cat => {
    const count = cat.id === 'all' 
      ? PRODUCTS_DATA.length 
      : PRODUCTS_DATA.filter(p => p.category === cat.id).length;

    return `
      <button class="category-tab ${cat.id === currentCategory ? 'active' : ''}" onclick="selectCategory('${cat.id}')">
        <i data-lucide="${cat.icon}"></i>
        <span>${cat.name}</span>
        <span class="count">${count}</span>
      </button>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

// Render Priority Highlights (⭐ Destaques & Mais Pedidos)
function renderHighlights() {
  const grid = document.getElementById('highlights-grid');
  const section = document.getElementById('destaques-section');
  if (!grid) return;

  const highlightIds = [
    'massa-tortei-tradicional',
    'pizza-camarao',
    'lasanha-carne-bolonhesa',
    'carne-file-parmegiana'
  ];
  const highlightProducts = highlightIds.map(id => PRODUCTS_DATA.find(p => p.id === id)).filter(Boolean);

  if (searchQuery || currentCategory !== 'all') {
    if (section) section.style.display = 'none';
    return;
  } else {
    if (section) section.style.display = 'block';
  }

  grid.innerHTML = highlightProducts.map(product => {
    const defaultPortion = product.portions[0];
    const hasMultiplePortions = product.portions.length > 1;

    return `
      <div class="highlight-card" onclick="openProductModal('${product.id}')" style="cursor: pointer;">
        <div class="highlight-card-img-wrap">
          <img src="${product.image}" alt="${product.title}" class="highlight-card-img" loading="lazy" />
          <span class="highlight-badge-pill">⭐ Mais Pedido</span>
        </div>
        <div class="highlight-card-body">
          <h3 class="highlight-card-title">${product.title}</h3>
          <p class="highlight-card-desc">${product.desc}</p>
          <div class="highlight-card-footer">
            <div class="highlight-price">${formatBRL(defaultPortion.price)}</div>
            <button class="btn-highlight-add" onclick="event.stopPropagation(); openProductModal('${product.id}')">
              <i data-lucide="plus"></i>
              <span>${hasMultiplePortions ? 'Escolher' : 'Pedir'}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

// Change Active Category
window.selectCategory = function(catId) {
  currentCategory = catId;
  renderCategories();
  renderHighlights();
  renderProducts();

  // Smooth scroll to catalog grid
  const catalogEl = document.querySelector('.catalog-section');
  if (catalogEl && catId !== 'all') {
    catalogEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById('products-grid');
  const countLabel = document.getElementById('products-count-label');
  if (!grid) return;

  let filtered = PRODUCTS_DATA.filter(product => {
    const matchCat = (currentCategory === 'all' || product.category === currentCategory);
    const matchSearch = product.title.toLowerCase().includes(searchQuery) ||
                        product.desc.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  if (countLabel) {
    countLabel.innerText = `${filtered.length} ${filtered.length === 1 ? 'item disponível' : 'itens disponíveis'}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <i data-lucide="search-x" style="font-size: 3rem; margin-bottom: 12px; opacity: 0.5;"></i>
        <h3 style="font-family: var(--font-title); font-size: 1.3rem; margin-bottom: 6px; color: var(--text-main);">Nenhum prato encontrado</h3>
        <p>Tente buscar por outro termo ou selecione uma categoria diferente acima.</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  // Molhos Special Promo Banner when in Molhos category
  let promoHtml = '';
  if (currentCategory === 'molhos') {
    promoHtml = `
      <div style="grid-column: 1 / -1; background: linear-gradient(135deg, #7F1D1D 0%, #991B1B 100%); color: #fff; padding: 16px 20px; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 8px; box-shadow: 0 4px 14px rgba(127,29,29,0.25);">
        <div style="display: flex; align-items: center; gap: 14px;">
          <div style="width: 44px; height: 44px; border-radius: 50%; background: #F59E0B; color: #7F1D1D; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; font-weight: 900; flex-shrink: 0;">5x4</div>
          <div>
            <h4 style="font-family: var(--font-title); font-size: 1.05rem; font-weight: 700; margin: 0; color: #fff;">PROMOÇÃO OFICIAL: COMPRE 4 E LEVE 5</h4>
            <p style="font-size: 0.85rem; margin: 2px 0 0 0; color: rgba(255,255,255,0.9);">Válida exclusivamente para potes de 300g. Monte sua seleção!</p>
          </div>
        </div>
        <span style="background: rgba(255,255,255,0.2); padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; white-space: nowrap;">Imperdível</span>
      </div>
    `;
  }

  grid.innerHTML = promoHtml + filtered.map(product => {
    const defaultPortion = product.portions[0];
    const hasMultiplePortions = product.portions.length > 1;

    return `
      <div class="product-card">
        <div class="product-card-img-wrap">
          <img src="${product.image}" alt="${product.title}" class="product-card-img" loading="lazy" />
          <span class="card-badge ${product.badgeType || ''}">${product.badge}</span>
        </div>
        <div class="product-card-body">
          <div class="product-card-header">
            <h3 class="product-title">${product.title}</h3>
          </div>
          <p class="product-desc">${product.desc}</p>
          <div class="product-portions-hint">
            <i data-lucide="info"></i>
            <span>${product.hint}</span>
          </div>
          <div class="product-card-footer">
            <div class="product-price-box">
              <span class="price-prefix">${hasMultiplePortions ? 'A partir de' : 'Preço'}</span>
              <span class="product-price">${formatBRL(defaultPortion.price)}</span>
            </div>
            <button class="btn-add-product" onclick="openProductModal('${product.id}')">
              <i data-lucide="plus"></i>
              <span>${hasMultiplePortions ? 'Escolher' : 'Adicionar'}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

// Open Product Modal
window.openProductModal = function(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  activeModalProduct = product;
  selectedPortionIndex = 0;
  selectedProductState = 'Congelado Artesanal';
  modalQuantity = 1;

  const modal = document.getElementById('product-modal');
  const img = document.getElementById('modal-product-img');
  const title = document.getElementById('modal-product-title');
  const desc = document.getElementById('modal-product-desc');
  const portionsContainer = document.getElementById('modal-portions-container');
  const stateContainer = document.getElementById('modal-state-container');
  const obsInput = document.getElementById('modal-obs');
  const qtyVal = document.getElementById('modal-qty-val');

  if (img) img.src = product.image;
  if (title) title.innerText = product.title;
  if (desc) desc.innerText = product.desc;
  if (obsInput) obsInput.value = '';
  if (qtyVal) qtyVal.innerText = modalQuantity;

  // Render Portion Cards
  if (portionsContainer) {
    portionsContainer.innerHTML = product.portions.map((portion, idx) => `
      <div class="portion-option-card ${idx === 0 ? 'selected' : ''}" onclick="selectModalPortion(${idx})">
        <span class="portion-name">${portion.name}</span>
        <span class="portion-price">${formatBRL(portion.price)}</span>
      </div>
    `).join('');
  }

  // Render State Selector for fresh/frozen massas
  if (stateContainer) {
    if (product.category === 'massas-recheadas' || product.category === 'massas-lisas') {
      selectedProductState = 'Fresco (para preparar hoje)';
      stateContainer.innerHTML = `
        <div class="modal-section-title">
          <span>Ponto da Massa</span>
          <span class="tag">Obrigatório</span>
        </div>
        <div class="state-selector-grid">
          <div class="state-card selected" onclick="selectModalState(this, 'Fresco (para preparar hoje)')">
            <i data-lucide="sparkles"></i> Fresco (Para Hoje)
          </div>
          <div class="state-card" onclick="selectModalState(this, 'Congelado (para estocar)')">
            <i data-lucide="snowflake"></i> Congelado (Prático)
          </div>
        </div>
      `;
    } else {
      selectedProductState = 'Congelado Artesanal';
      stateContainer.innerHTML = '';
    }
  }

  updateModalTotal();
  if (modal) modal.classList.add('active');
  if (window.lucide) window.lucide.createIcons();
};

// Select Portion inside Modal
window.selectModalPortion = function(idx) {
  selectedPortionIndex = idx;
  const cards = document.querySelectorAll('.portion-option-card');
  cards.forEach((card, i) => {
    if (i === idx) card.classList.add('selected');
    else card.classList.remove('selected');
  });
  updateModalTotal();
};

// Select Product State (Fresco vs Congelado)
window.selectModalState = function(el, stateText) {
  selectedProductState = stateText;
  const cards = document.querySelectorAll('.state-card');
  cards.forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
};

// Update Modal Confirm Button Total
function updateModalTotal() {
  if (!activeModalProduct) return;
  const portion = activeModalProduct.portions[selectedPortionIndex];
  const total = portion.price * modalQuantity;
  const btn = document.getElementById('btn-modal-add-cart');
  if (btn) {
    btn.innerHTML = `
      <i data-lucide="shopping-bag"></i>
      <span>Adicionar • ${formatBRL(total)}</span>
    `;
    if (window.lucide) window.lucide.createIcons();
  }
}

// Close Modal
function closeModal() {
  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.remove('active');
  activeModalProduct = null;
}

// Confirm Add from Modal
function confirmAddFromModal() {
  if (!activeModalProduct) return;
  const portion = activeModalProduct.portions[selectedPortionIndex];
  const obs = document.getElementById('modal-obs')?.value.trim() || '';

  const cartItem = {
    id: `${activeModalProduct.id}-${selectedPortionIndex}-${Date.now()}`,
    productId: activeModalProduct.id,
    title: activeModalProduct.title,
    portionName: portion.name,
    unitPrice: portion.price,
    state: selectedProductState,
    obs: obs,
    quantity: modalQuantity
  };

  const addedTitle = activeModalProduct.title;
  cart.push(cartItem);
  saveCartToStorage();
  updateCartUI();
  closeModal();

  showToast(`✓ ${modalQuantity}x ${addedTitle} adicionado ao pedido!`);
}

// Cart Drawer Operations
function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.add('active');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Update Cart Quantity
window.updateCartItemQty = function(itemId, delta) {
  const item = cart.find(i => i.id === itemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== itemId);
  }
  saveCartToStorage();
  updateCartUI();
};

// Remove Item from Cart
window.removeCartItem = function(itemId) {
  cart = cart.filter(i => i.id !== itemId);
  saveCartToStorage();
  updateCartUI();
  showToast('Item removido do carrinho.');
};

// Update Cart UI Elements
function updateCartUI() {
  const badge = document.getElementById('cart-badge');
  const container = document.getElementById('cart-items-list');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const deliveryRow = document.getElementById('cart-delivery-row');
  const deliveryVal = document.getElementById('cart-delivery-val');
  const totalEl = document.getElementById('cart-total-val');
  const footer = document.getElementById('cart-footer-section');
  const clearHeaderBtn = document.getElementById('cart-clear-header');
  const clearDrawerBtn = document.getElementById('btn-clear-cart');
  const clearFloatingBtn = document.getElementById('cart-clear-floating');
  const floatingBar = document.getElementById('floating-cart-bar');
  const floatingCount = document.getElementById('floating-cart-count');
  const floatingTotal = document.getElementById('floating-cart-total');

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) badge.innerText = totalCount;

  // Toggle Clear Buttons
  if (clearHeaderBtn) {
    clearHeaderBtn.style.display = totalCount > 0 ? 'inline-flex' : 'none';
  }
  if (clearDrawerBtn) {
    clearDrawerBtn.style.display = totalCount > 0 ? 'inline-flex' : 'none';
  }
  if (clearFloatingBtn) {
    clearFloatingBtn.style.display = totalCount > 0 ? 'inline-flex' : 'none';
  }

  // Floating Mobile Order Bar
  if (floatingBar) {
    floatingBar.classList.toggle('visible', totalCount > 0);
  }
  if (floatingCount) {
    floatingCount.innerText = `${totalCount} ${totalCount === 1 ? 'item' : 'itens'}`;
  }

  if (cart.length === 0) {
    if (container) {
      container.innerHTML = `
        <div class="cart-empty-state">
          <i data-lucide="shopping-bag"></i>
          <p>Seu pedido está vazio no momento.<br>Escolha suas massas, molhos e pratos favoritos!</p>
        </div>
      `;
    }
    if (footer) footer.style.display = 'none';
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  if (footer) footer.style.display = 'flex';

  // Render items
  if (container) {
    container.innerHTML = cart.map(item => `
      <div class="cart-item-card">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-portion">${item.portionName}${item.state && item.state !== 'Congelado Artesanal' ? ` • ${item.state}` : ''}</div>
          ${item.obs ? `<div class="cart-item-obs">Obs: ${item.obs}</div>` : ''}
          <div class="cart-item-bottom">
            <div class="cart-item-price">${formatBRL(item.unitPrice * item.quantity)}</div>
            <div class="cart-item-qty-control">
              <button class="btn-cart-qty" onclick="updateCartItemQty('${item.id}', -1)" aria-label="Diminuir">-</button>
              <span class="cart-item-qty">${item.quantity}</span>
              <button class="btn-cart-qty" onclick="updateCartItemQty('${item.id}', 1)" aria-label="Aumentar">+</button>
            </div>
            <button class="btn-remove-item" onclick="removeCartItem('${item.id}')" title="Remover" aria-label="Remover item">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Financial Totals
  const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const delivery = (deliveryType === 'entrega') ? CLIENT_CONFIG.deliveryFee : 0;
  const total = subtotal + delivery;

  if (subtotalEl) subtotalEl.innerText = formatBRL(subtotal);
  if (deliveryRow && deliveryVal) {
    if (deliveryType === 'entrega') {
      deliveryRow.style.display = 'flex';
      deliveryVal.innerText = formatBRL(delivery);
    } else {
      deliveryRow.style.display = 'none';
    }
  }

  // Order Total in Emerald Green (#10B981)
  if (totalEl) totalEl.innerText = formatBRL(total);
  if (floatingTotal) floatingTotal.innerText = formatBRL(total);

  if (window.lucide) window.lucide.createIcons();
}

// Copy Pix Key with Dynamic 2.5s Green Feedback (MANDATÓRIO CONVENÇÃO)
function copyPixKey() {
  const btn = document.getElementById('btn-copy-pix');
  navigator.clipboard.writeText(CLIENT_CONFIG.pixKey).then(() => {
    if (btn) {
      btn.classList.add('copied');
      btn.innerHTML = `<i data-lucide="check"></i> <span>✓ Chave Pix Copiada!</span>`;
      if (window.lucide) window.lucide.createIcons();

      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = `<i data-lucide="copy"></i> <span>Copiar Chave Pix (${CLIENT_CONFIG.pixKey})</span>`;
        if (window.lucide) window.lucide.createIcons();
      }, 2500);
    }
    showToast('Chave Pix copiada com sucesso!');
  }).catch(() => {
    showToast(`Chave Pix: ${CLIENT_CONFIG.pixKey}`);
  });
}

// Confirmation Modal & Clear Cart Functions
function askClearCart() {
  if (cart.length === 0) {
    showToast('O pedido já está vazio.');
    return;
  }
  const overlay = document.getElementById('confirm-clear');
  const text = document.getElementById('confirm-clear-text');
  const totalQty = cart.reduce((sum, i) => sum + (Number(i.quantity) || 0), 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);

  if (text) {
    const itemLabel = totalQty === 1 ? '1 item' : `${totalQty} itens`;
    text.innerHTML = `Você vai remover <strong>${itemLabel}</strong>, no valor de <strong>${formatBRL(subtotal)}</strong>.`;
  }
  if (overlay) {
    overlay.hidden = false;
    overlay.removeAttribute('hidden');
    overlay.style.display = 'flex';
    if (window.lucide) window.lucide.createIcons();
  }
}

function closeClearModal() {
  const overlay = document.getElementById('confirm-clear');
  if (overlay) {
    overlay.hidden = true;
    overlay.setAttribute('hidden', '');
    overlay.style.display = 'none';
  }
}

function confirmClearCart() {
  cart = [];
  saveCartToStorage();
  closeClearModal();
  updateCartUI();
  showToast('🗑️ Pedido limpo com sucesso.');
}

window.askClearCart = askClearCart;
window.clearCart = askClearCart;
window.closeClearModal = closeClearModal;
window.confirmClearCart = confirmClearCart;

// Submit Order via WhatsApp (PADRÃO OFICIAL COMANDA ONIRA.FLY)
function submitOrderViaWhatsApp() {
  if (cart.length === 0) {
    showToast('🍝 Adicione ao menos um item ao pedido.');
    return;
  }

  const nameInput = document.getElementById('customer-name');
  const addressInput = document.getElementById('customer-address');

  const customerName = nameInput?.value.trim() || '';
  const customerAddress = addressInput?.value.trim() || '';

  if (deliveryType === 'entrega' && !customerAddress) {
    showToast('📍 Por favor, informe o endereço completo de entrega.');
    if (addressInput) {
      addressInput.classList.add('input-error');
      addressInput.focus();
      addressInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => addressInput.classList.remove('input-error'), 3500);
    }
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const delivery = (deliveryType === 'entrega') ? CLIENT_CONFIG.deliveryFee : 0;
  const total = subtotal + delivery;

  // Format Comanda String
  let text = `_pedido via site by Onira.fly_\n\n`;

  if (deliveryType === 'entrega') {
    text += `*Solicitação de Tele-Entrega*\n\n`;
  } else {
    text += `*Solicitação de Retirada no balcão*\n\n`;
  }

  // Items Checklist
  cart.forEach(item => {
    text += `*${item.quantity}x* ${item.title} · ${item.portionName}\n`;
    if (item.state && item.state !== 'Congelado Artesanal') {
      text += `+ Ponto: ${item.state}\n`;
    }
    if (item.obs) {
      text += `_Obs: ${item.obs}_\n`;
    }
    text += `*${formatBRL(item.unitPrice * item.quantity)}*\n\n`;
  });

  text += `*Itens: ${formatBRL(subtotal)}*\n`;
  if (deliveryType === 'entrega') {
    text += `Entrega: ${formatBRL(delivery)}\n`;
    text += `*Total: ${formatBRL(total)}*\n\n`;
  } else {
    text += `Entrega: Retirada no Balcão (Grátis)\n`;
    text += `*Total: ${formatBRL(subtotal)}*\n\n`;
  }

  // Customer & Payment Details
  if (customerName) {
    text += `*${customerName}*\n`;
  }
  if (deliveryType === 'entrega' && customerAddress) {
    text += `${customerAddress}\n`;
  }

  if (paymentMethod === 'pix') {
    text += `Pagamento em Pix — combinamos a chave por aqui\n\n`;
  } else if (paymentMethod === 'cartao') {
    text += `Pagamento no cartão — favor levar a maquininha\n\n`;
  } else {
    text += `Pagamento em dinheiro — avisar se precisar de troco\n\n`;
  }

  text += `_Enviado pelo site da ${CLIENT_CONFIG.name}_`;

  const waUrl = `https://wa.me/${CLIENT_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
  
  // Safe navigation with fallback for popup blockers
  const win = window.open(waUrl, '_blank');
  if (!win || win.closed || typeof win.closed === 'undefined') {
    window.location.href = waUrl;
  }
}
window.submitOrderViaWhatsApp = submitOrderViaWhatsApp;

// LocalStorage Cart Persistence
function saveCartToStorage() {
  localStorage.setItem('la_onda_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('la_onda_cart');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        cart = parsed.filter(item => item && typeof item === 'object' && item.id && item.title && typeof item.unitPrice === 'number' && typeof item.quantity === 'number');
      } else {
        cart = [];
      }
    }
  } catch (e) {
    console.error('Error loading cart:', e);
    cart = [];
  }
}

// Toast Notification
function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'app-toast';
    document.body.appendChild(toast);
  }

  toast.innerText = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// Floating Mobile CTA
function setupFloatingCTA() {
  const floatingBar = document.getElementById('floating-cart-bar');
  if (floatingBar) {
    floatingBar.addEventListener('click', openCartDrawer);
  }
}
