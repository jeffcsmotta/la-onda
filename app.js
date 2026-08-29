/* ==========================================================================
   LA ONDA — MASSAS ARTESANAIS, MOLHOS & PRATOS PRONTOS
   Application Engine & Master Logic • Onira Labs
   ========================================================================== */

// Client Contact & Operational Data
const CLIENT_CONFIG = {
  name: 'La Onda Massas Artesanais',
  whatsapp: '5554999917779', // WhatsApp Oficial da La Onda
  pixKey: '5554999917779',   // Chave Pix
  pixName: 'AL Lunelli Indústria de Alimentos Ltda',
  deliveryFee: 10.00,
  address: 'Rua Tronca, 3184 – Rio Branco, Caxias do Sul - RS'
};

// Culinary Image Library
const IMAGES = {
  tortei: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80',
  nhoque: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=700&q=80',
  lasanha: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=700&q=80',
  canelone: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=700&q=80',
  capeletti: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=700&q=80',
  ravioli: 'https://images.unsplash.com/photo-1587740908075-9e245070dfaa?auto=format&fit=crop&w=700&q=80',
  talharim: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=700&q=80',
  bolonhesa: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=700&q=80',
  sugo: 'https://images.unsplash.com/photo-1572441713132-c542fc4fe282?auto=format&fit=crop&w=700&q=80',
  quatroqueijos: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=700&q=80',
  funghi: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80',
  pesto: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&w=700&q=80',
  parmegiana: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80',
  dobradinha: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=700&q=80',
  polenta: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80',
  galeto: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=700&q=80',
  tiramisu: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=80',
  sagu: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=700&q=80',
  suco: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
  vinho: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=80'
};

// Database of Artisanal Products (La Onda — Empório de Congelados)
const PRODUCTS_DATA = [
  // --- PIZZAS DE LONGA FERMENTAÇÃO ---
  {
    id: 'pizza-camarao',
    title: 'Pizza de Camarão Selecionado',
    category: 'pizzas',
    desc: 'Massa artesanal de longa fermentação, farinha italiana, camarões selecionados salteados e queijo gratinado.',
    portions: [
      { name: 'Pizza Média (Serve 2-3 pessoas)', price: 48.00 }
    ],
    badge: 'Especial da Casa',
    badgeType: 'gold',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80',
    hint: 'Longa fermentação natural • Massa leve e crocante'
  },
  {
    id: 'pizza-4-queijos',
    title: 'Pizza Quatro Queijos Especial',
    category: 'pizzas',
    desc: 'Molho de tomate artesanal, mussarela colonial, provolone defumado, gorgonzola e parmesão maturado.',
    portions: [
      { name: 'Pizza Média (Serve 2-3 pessoas)', price: 45.00 }
    ],
    badge: 'Mais Pedida',
    badgeType: 'gold',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
    hint: 'Aquecer no forno pré-aquecido a 200°C por 10-12 min'
  },
  {
    id: 'pizza-calabresa',
    title: 'Pizza Calabresa Artesanal',
    category: 'pizzas',
    desc: 'Calabresa fatiada nobre, cebola roxa fininha, molho de tomate natural e orégano fresco da serra.',
    portions: [
      { name: 'Pizza Média (Serve 2-3 pessoas)', price: 40.00 }
    ],
    badge: 'Clássica',
    badgeType: 'artesanal',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=700&q=80',
    hint: 'Massa aerada e crocante'
  },
  {
    id: 'pizza-mussarela',
    title: 'Pizza Mussarela Tradicional',
    category: 'pizzas',
    desc: 'Mussarela cremosa de alta fusão, rodelas de tomate fresco, azeitonas pretas e manjericão.',
    portions: [
      { name: 'Pizza Média (Serve 2-3 pessoas)', price: 40.00 }
    ],
    badge: 'Tradicional',
    badgeType: 'artesanal',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=700&q=80',
    hint: 'Queijo derretido no ponto perfeito'
  },

  // --- NHOQUES & MASSAS ---
  {
    id: 'nhoque-noccioli',
    title: 'Nhoque de Batata Noccioli',
    category: 'massas',
    desc: 'Nhoque artesanal de batata servido com molho 4 queijos cremoso, tiras de peito de peru defumado e nozes pecan.',
    portions: [
      { name: 'Bandeja 500g (Serve 2 pessoas)', price: 40.00 },
      { name: 'Bandeja 1kg (Serve 4 pessoas)', price: 76.00 }
    ],
    badge: 'Assinatura La Onda',
    badgeType: 'gold',
    image: IMAGES.nhoque,
    hint: 'Prato nobre e reconfortante • Receita exclusiva'
  },
  {
    id: 'nhoque-recheado-calabresa',
    title: 'Nhoque Recheado com Calabresa & Mussarela',
    category: 'massas',
    desc: 'Bolinhas de nhoque de batata recheadas com calabresa moída fininha e mussarela derretida por dentro.',
    portions: [
      { name: 'Bandeja 500g (Serve 2 pessoas)', price: 43.00 },
      { name: 'Bandeja 1kg (Serve 4 pessoas)', price: 80.00 }
    ],
    badge: 'Recheado à Mão',
    badgeType: 'gold',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=700&q=80',
    hint: 'Massa macia com recheio abundante'
  },
  {
    id: 'nhoque-recheado-mussarela-catupiry',
    title: 'Nhoque Recheado Mussarela & Catupiry',
    category: 'massas',
    desc: 'Combinação ultra cremosa de queijo mussarela colonial e Catupiry genuíno.',
    portions: [
      { name: 'Bandeja 500g (Serve 2 pessoas)', price: 43.00 },
      { name: 'Bandeja 1kg (Serve 4 pessoas)', price: 80.00 }
    ],
    badge: 'Super Cremoso',
    badgeType: 'gold',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80',
    hint: 'Harmoniza com Molho Sugo ou Bolonhesa'
  },
  {
    id: 'nhoque-recheado-mussarela',
    title: 'Nhoque Recheado com Mussarela Colonial',
    category: 'massas',
    desc: 'Recheio suave de puro queijo mussarela colonial que estica ao cortar.',
    portions: [
      { name: 'Bandeja 500g (Serve 2 pessoas)', price: 40.00 },
      { name: 'Bandeja 1kg (Serve 4 pessoas)', price: 76.00 }
    ],
    badge: 'Artesanal',
    badgeType: 'artesanal',
    image: IMAGES.nhoque,
    hint: 'Sem conservantes • Batatas frescas selecionadas'
  },
  {
    id: 'tortei-artesanal',
    title: 'Tortéi Colonial de Moranga com Especiarias',
    category: 'massas',
    desc: 'Massa fina artesanal recheada com moranga cabotiá assada, especiarias nobres e queijo colonial ralado.',
    portions: [
      { name: 'Bandeja 500g (Serve 2 pessoas)', price: 35.00 },
      { name: 'Bandeja 1kg (Serve 4 pessoas)', price: 65.00 }
    ],
    badge: 'Mais Vendido',
    badgeType: 'gold',
    image: IMAGES.tortei,
    hint: 'Tradição italiana da Serra Gaúcha'
  },

  // --- LASANHAS & PANQUECAS DE FORNO ---
  {
    id: 'lasanha-bolonhesa',
    title: 'Lasanha à Bolonhesa Gratinada',
    category: 'lasanhas',
    desc: 'Camadas generosas de massa artesanal, carne moída apurada por horas, molho de tomate e queijo derretido.',
    portions: [
      { name: 'Porção Média 650g', price: 45.00 },
      { name: 'Porção Família 1.3kg', price: 82.00 }
    ],
    badge: 'Campeã de Vendas',
    badgeType: 'gold',
    image: IMAGES.lasanha,
    hint: 'Pronta para aquecer no forno ou micro-ondas'
  },
  {
    id: 'lasanha-3-queijos',
    title: 'Lasanha Três Queijos Especiais',
    category: 'lasanhas',
    desc: 'Mussarela colonial, provolone aromático e parmesão maturado com molho bechamel aveludado.',
    portions: [
      { name: 'Porção Média 650g', price: 43.00 },
      { name: 'Porção Família 1.3kg', price: 78.00 }
    ],
    badge: 'Super Queijo',
    badgeType: 'gold',
    image: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=700&q=80',
    hint: 'Gratinada douradinha'
  },
  {
    id: 'lasanha-abobrinha-frango',
    title: 'Lasanha de Abobrinha com Frango Desfiado',
    category: 'lasanhas',
    desc: 'Fatias finas de abobrinha fresca, frango desfiado suculento e molho branco com ervas finas.',
    portions: [
      { name: 'Porção Média 650g', price: 47.00 },
      { name: 'Porção Família 1.3kg', price: 86.00 }
    ],
    badge: 'Leve & Saborosa',
    badgeType: 'artesanal',
    image: IMAGES.lasanha,
    hint: 'Equilíbrio perfeito de sabor e leveza'
  },
  {
    id: 'lasanha-tradicional',
    title: 'Lasanha Tradicional da Cantina',
    category: 'lasanhas',
    desc: 'Receita histórica com molho de tomate pelado, presunto selecionado e mussarela colonial.',
    portions: [
      { name: 'Porção Média 650g', price: 43.00 },
      { name: 'Porção Família 1.3kg', price: 78.00 }
    ],
    badge: 'Tradicional',
    badgeType: 'artesanal',
    image: IMAGES.lasanha,
    hint: 'O autêntico almoço de domingo'
  },
  {
    id: 'panqueca-brocolis',
    title: 'Panqueca de Brócolis com Palmito',
    category: 'lasanhas',
    desc: 'Massa fininha e leve recheada com brócolis fresco, palmito nobre e molho branco gratinado.',
    portions: [
      { name: 'Bandeja com 3 Unidades (500g)', price: 35.00 }
    ],
    badge: 'Vegetariana',
    badgeType: 'artesanal',
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=700&q=80',
    hint: 'Perfeita para uma refeição prática e saudável'
  },
  {
    id: 'panqueca-3-queijos',
    title: 'Panqueca Três Queijos Gratinada',
    category: 'lasanhas',
    desc: 'Panquecas artesanais recheadas com mix de queijos derretidos e coberta com molho sugo.',
    portions: [
      { name: 'Bandeja com 3 Unidades (500g)', price: 40.00 }
    ],
    badge: 'Gratinada',
    badgeType: 'gold',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=700&q=80',
    hint: 'Queijo derretendo a cada garfada'
  },

  // --- MOLHOS ARTESANAIS ---
  {
    id: 'molho-camarao',
    title: 'Molho de Camarão Especial',
    category: 'molhos',
    desc: 'Camarões selecionados em redução de tomates frescos, azeite de oliva e toque de ervas finas.',
    portions: [
      { name: 'Pote 400g', price: 26.00 }
    ],
    badge: 'Premium',
    badgeType: 'gold',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80',
    hint: 'Ideal para nhoques, massas e pizzas'
  },
  {
    id: 'molho-bolonhesa',
    title: 'Molho Bolonhesa Artesanal',
    category: 'molhos',
    desc: 'Carne bovina de primeira apurada lentamente com tomates pelados e tempero verde fresco.',
    portions: [
      { name: 'Pote 500g', price: 20.00 },
      { name: 'Pote 1kg', price: 38.00 }
    ],
    badge: '8h de Cozimento',
    badgeType: 'gold',
    image: IMAGES.bolonhesa,
    hint: 'O clássico indispensável para sua massa'
  },
  {
    id: 'molho-4-queijos',
    title: 'Molho Quatro Queijos Cremoso',
    category: 'molhos',
    desc: 'Gorgonzola, provolone, mussarela e parmesão com creme de leite fresco.',
    portions: [
      { name: 'Pote 500g', price: 22.00 },
      { name: 'Pote 1kg', price: 40.00 }
    ],
    badge: 'Aveludado',
    badgeType: 'gold',
    image: IMAGES.quatroqueijos,
    hint: 'Combina perfeitamente com Nhoque Noccioli e Tortéi'
  },
  {
    id: 'molho-frango',
    title: 'Molho de Frango Desfiado',
    category: 'molhos',
    desc: 'Peito de frango cozido e desfiado em molho de tomate colonial aromático.',
    portions: [
      { name: 'Pote 500g', price: 22.00 }
    ],
    badge: 'Caseiro',
    badgeType: 'artesanal',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=700&q=80',
    hint: 'Recheio leve e saboroso'
  },
  {
    id: 'molho-sugo',
    title: 'Molho ao Sugo Rústico',
    category: 'molhos',
    desc: '100% tomates maduros selecionados, azeite extravirgem, alho dourado e folhas frescas de manjericão.',
    portions: [
      { name: 'Pote 500g', price: 18.00 }
    ],
    badge: '100% Natural',
    badgeType: 'artesanal',
    image: IMAGES.sugo,
    hint: 'Sem conservantes e sem acidez'
  },
  {
    id: 'molho-sugo-branco',
    title: 'Molho Branco Bechamel Colonial',
    category: 'molhos',
    desc: 'Manteiga colonial, leite fresco e toque suave de noz-moscada ralada na hora.',
    portions: [
      { name: 'Pote 500g', price: 18.00 }
    ],
    badge: 'Clássico',
    badgeType: 'artesanal',
    image: IMAGES.quatroqueijos,
    hint: 'Base nobre para gratinar massas e panquecas'
  },

  // --- PRODUTOS ESPECIAIS & EMPÓRIO ---
  {
    id: 'carnes-selecionadas',
    title: 'Cortes & Carnes Nobres Selecionadas',
    category: 'emporio',
    desc: 'Porções selecionadas de carnes temperadas para preparos especiais e almoços em família.',
    portions: [
      { name: 'Porção Especial (aprox. 800g)', price: 60.00 }
    ],
    badge: 'Empório',
    badgeType: 'gold',
    image: IMAGES.parmegiana,
    hint: 'Cortes nobres com tempero colonial'
  },
  {
    id: 'vinhos-importados',
    title: 'Vinhos Finos & Seleção Especial',
    category: 'emporio',
    desc: 'Rótulos selecionados para harmonização com massas, nhoques e pizzas artesanais.',
    portions: [
      { name: 'Garrafa 750ml (Tinto Nobre)', price: 80.00 },
      { name: 'Garrafa 750ml (Branco Fino)', price: 80.00 }
    ],
    badge: 'Adega',
    badgeType: 'gold',
    image: IMAGES.vinho,
    hint: 'Harmonização perfeita para sua mesa'
  },
  {
    id: 'azeites-premium',
    title: 'Azeite de Oliva Extravirgem Premium',
    category: 'emporio',
    desc: 'Azeite de oliva de baixa acidez, prensado a frio, ideal para finalização de pratos e saladas.',
    portions: [
      { name: 'Garrafa 500ml', price: 50.00 }
    ],
    badge: 'Importado',
    badgeType: 'gold',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=80',
    hint: 'Acidez máxima 0,2%'
  },
  {
    id: 'produtos-coloniais',
    title: 'Kit Produtos Coloniais da Serra',
    category: 'emporio',
    desc: 'Seleção especial de queijo colonial curado e salame serrano artesanal.',
    portions: [
      { name: 'Pacote Especialidade Local', price: 30.00 }
    ],
    badge: 'Serra Gaúcha',
    badgeType: 'artesanal',
    image: IMAGES.polenta,
    hint: 'Tradição colonial de Caxias do Sul'
  }
];

// Application State
let currentCategory = 'all';
let searchQuery = '';
let cart = [];
let activeModalProduct = null;
let selectedPortionIndex = 0;
let selectedProductState = 'Fresco (para preparar hoje)';
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

  // Delivery Switcher Buttons
  const btnDelivery = document.getElementById('btn-type-delivery');
  const btnPickup = document.getElementById('btn-type-pickup');
  const addressGroup = document.getElementById('delivery-address-group');

  if (btnDelivery && btnPickup) {
    btnDelivery.addEventListener('click', () => {
      deliveryType = 'entrega';
      btnDelivery.classList.add('active');
      btnPickup.classList.remove('active');
      if (addressGroup) addressGroup.style.display = 'block';
      updateCartUI();
    });

    btnPickup.addEventListener('click', () => {
      deliveryType = 'retirada';
      btnPickup.classList.add('active');
      btnDelivery.classList.remove('active');
      if (addressGroup) addressGroup.style.display = 'none';
      updateCartUI();
    });
  }

  // Payment Switcher Buttons
  const payPix = document.getElementById('pay-pix');
  const payCard = document.getElementById('pay-card');
  const payCash = document.getElementById('pay-cash');
  const pixBox = document.getElementById('pix-helper-box');

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
    { id: 'all', name: 'Todos os Produtos', icon: 'utensils' },
    { id: 'pizzas', name: 'Pizzas Artesanais', icon: 'pizza' },
    { id: 'massas', name: 'Nhoques & Massas', icon: 'sparkles' },
    { id: 'lasanhas', name: 'Lasanhas & Panquecas', icon: 'chef-hat' },
    { id: 'molhos', name: 'Molhos Especiais', icon: 'flame' },
    { id: 'emporio', name: 'Adega & Empório', icon: 'wine' }
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

  const highlightIds = ['nhoque-noccioli', 'pizza-camarao', 'lasanha-bolonhesa', 'tortei-artesanal'];
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

  grid.innerHTML = filtered.map(product => {
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
  selectedProductState = 'Fresco (para preparar hoje)';
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

  // Render State Selector for fresh items
  if (stateContainer) {
    if (product.category === 'massas' || product.category === 'pratos') {
      stateContainer.innerHTML = `
        <div class="modal-section-title">
          <span>Ponto do Produto</span>
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
          <p>Seu pedido está vazio no momento.<br>Escolha suas massas e molhos favoritos!</p>
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
          <div class="cart-item-portion">${item.portionName} • ${item.state}</div>
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

// Submit Order via WhatsApp (PADRÃO OFICIAL COMANDA ONIRA.FLY - SEÇÃO 11)
function submitOrderViaWhatsApp() {
  if (cart.length === 0) {
    showToast('🥟 Adicione ao menos um item ao pedido.');
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
    text += `+ Ponto: ${item.state}\n`;
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
    cart = [];
  }
}

// Toast Notifications (Responsive Width Conformance)
function showToast(message) {
  const existing = document.querySelector('.toast-container');
  if (existing) existing.remove();

  const container = document.createElement('div');
  container.className = 'toast-container';

  const box = document.createElement('div');
  box.className = 'toast-box';
  box.innerHTML = `<i data-lucide="check-circle" style="color: var(--accent-light); flex-shrink: 0;"></i> <span>${message}</span>`;

  container.appendChild(box);
  document.body.appendChild(container);

  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    container.style.opacity = '0';
    container.style.transition = 'opacity 0.3s ease';
    setTimeout(() => container.remove(), 300);
  }, 2800);
}

// Floating Onira Proposal Widget (.onira-cta) (RETRÁTIL & TRANSPARENTE AO SCROLL)
function setupFloatingCTA() {
  const cta = document.getElementById('onira-cta');
  const closeBtn = document.getElementById('onira-cta-close');
  if (!cta) return;

  // 1. Alternância para modo recolhido (não some nunca da tela)
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      cta.classList.toggle('collapsed');
    });
  }

  // 2. Transparência suave durante o scroll
  let isScrolling;
  window.addEventListener('scroll', () => {
    cta.classList.add('scrolling');
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      cta.classList.remove('scrolling');
    }, 180);
  }, { passive: true });
}
