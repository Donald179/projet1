let products = [
  {
    id:1, name:"Chemise en Faso Dan Fani", cat:"homme", type:"traditionnel",
    price:"25 000", img:"homme1.jpg",
    badge:"badge-trad", badgeLabel:"Traditionnel",
    desc:"Chemise en Faso Dan Fani. Confortable et élégante, idéale pour les grandes occasions. Motifs géométriques traditionnels en rouge et or.",
    sizes:["S","M","L","XL","XXL"]
  },
  {
    id:2, name:"Robe Wax Soleil", cat:"femme", type:"moderne",
    price:"18 500", img:"femme-moderne.jpg",
    badge:"badge-new", badgeLabel:"Nouveau",
    desc:"Robe en wax.  Coupe moderne et élégante, parfaite pour le bureau ou une sortie. Disponible en plusieurs coloris.",
    sizes:["XS","S","M","L","XL"]
  },
  {
    id:3, name:"Ensemble Enfant Festif", cat:"enfant", type:"traditionnel",
    price:"12 000", img:"enfan1.jpg",
    badge:"badge-pop", badgeLabel:"Populaire",
    desc:"Ensemble haut et pantalon pour enfant en tissu Faso Dan Fani. Parfait pour les cérémonies et fêtes de famille.",
    sizes:["2-3 ans","4-5 ans","6-7 ans","8-9 ans","10-12 ans"]
  },
  {
    id:4, name:"Complet Veste", cat:"homme", type:"moderne",
    price:"15 000", img:"homme2.jpg",
    badge:"badge-new", badgeLabel:"Nouveau",
    desc:"Complet veste, coupe slim. Design moderne pour des sortie, mariage et grand evenements.",
    sizes:["S","M","L","XL"]
  },
  {
    id:5, name:"Haut faso dafani femme", cat:"femme", type:"traditionnel",
    price:"45 000", img:"femme1.jpg",
    badge:"badge-trad", badgeLabel:"Traditionnel",
    desc:"Haut faso dafani pour femme. Confortable et élégante, idéale pour les grandes occasions. Motifs géométriques traditionnels en rouge et or.",
    sizes:["Sur mesure"]
  },
  {
    id:6, name:"Teeshirt + Pantalon", cat:"homme", type:"moderne",
    price:"11 000", img:"homme3.jpg",
    badge:"badge-pop", badgeLabel:"Populaire",
    desc:"Teeshirt plus pantalon pour des sortie entre amis. Style urbain wax. Style urban chic, idéal pour le quotidien comme pour les sorties.",
    sizes:["S","M","L","XL","XXL"]
  },
  {
    id:7, name:"Robe en faso dafani", cat:"femme", type:"traditionnel",
    price:"22 000", img:"tradi2.jpg",
    badge:"badge-trad", badgeLabel:"Traditionnel",
    desc:"Robe en faso dafani, pour des sortie et cérémonie. Design moderne et élégante.",
    sizes:["S","M","L","XL"]
  },
  {
    id:8, name:"Complet Enfant (Moderne)", cat:"enfant", type:"moderne",
    price:"9 500", img:"enfant2.jpg",
    badge:"badge-new", badgeLabel:"Nouveau",
    desc:"Jolie tenue enfant en wax coloré. Comfortable et facile à porter. Pour les petits qui veulent être stylés comme les grands !",
    sizes:["2-3 ans","4-5 ans","6-7 ans","8-9 ans"]
  },
  {
    id:9, name:"Tenu de soirée Homme", cat:"homme", type:"traditionnel",
    price:"25 000", img:"images/homme-tradi03.jpg",
    badge:"badge-new", badgeLabel:"Nouveau",
    desc:"Tenu pour homme, pour les grand sortie et cérémonies. Disponible en plusieurs modeles et couleurs.",
    sizes:["sur mesure"]
  },
  {
    id:10, name:"Tenu de gala femme", cat:"femme", type:"traditionnel",
    price:"27 000", img:"tradi3.jpg",
    badge:"badge-new", badgeLabel:"Nouveau",
    desc:"Tenu pour femme, pour les grand sortie et cérémonies. Disponible en plusieurs modeles et couleurs.",
    sizes:["Sur mesure"]
  },
  {
    id:11, name:"Tenu decontracte Homme", cat:"homme", type:"moderne",
    price:"20 000", img:"homme5.jpg",
    badge:"badge-new", badgeLabel:"Promotion",
    desc:"Jolie tenu decontracte pour homme pour les sorties entre amis",
    sizes:["S","M","L","XL"]
  },
  {
    id:12, name:"Complet jeune fille", cat:"enfant", type:"moderne",
    price:"15 000", img:"enfant3.jpg",
    badge:"badge-new", badgeLabel:"Nouveau",
    desc:"Jolie ensemble pour les petites demoiselles",
    sizes:["S","M","L","X","XL"]
  },
  {
    id:13, name:"Complet Femme-fille", cat:"femme", type:"traditionnel",
    price:"30 000", img:"femme-enfant.jpg",
    badge:"badge-new", badgeLabel:"Nouveau",
    desc:"Joli complet traditionnel pour une femme et sa fille",
    sizes:["Sur mesure"]
  },
  {
    id:14, name:"Complet jeune garcon", cat:"enfant", type:"moderne",
    price:"10 000", img:"enfant00.jpg",
    badge:"badge-new", badgeLabel:"Promotion",
    desc:"Joli ensemble pour les jeunes garcons",
    sizes:["M","L","X","XL"]
  },
  {
    id:15, name:"Debardeur de dessus", cat:"homme", type:"moderne",
    price:"5 000", img:"tenu1.jpg",
    badge:"badge-new", badgeLabel:"Promotion",
    desc:"Joli debardeur a porte sur une belle chemise",
    sizes:["l","X","XL"]
  },
  {
    id:16, name:"Tenu Homme", cat:"homme", type:"moderne",
    price:"25 000", img:"homme01.jpg",
    badge:"badge-new", badgeLabel:"Promotion",
    desc:"Jolie ensemble pour les Hommes pour les sorties et soirées",
    sizes:["Sur mesure"]
  },
  {
    id:17, name:"Hijab pour Dame", cat:"femme", type:"moderne",
    price:"15 000", img:"robe01.jpg",
    badge:"badge-new",
    desc:"Jolie Hijab pour des sortie détente",
    sizes:["M","X","L","XL"]
  },
  {
    id:18, name:"Belle Robe Hijab", cat:"femme", type:"moderne",
    price:"20 000", img:"robe02.jpg",
    badge:"badge-new", badgeLabel:"Promotion",
    desc:"Jolie Robe Hijab pour les soirée et grand évènement",
    sizes:["M","X","L","XL"]
  },
  {
    id:19, name:"Complet enfant tradi", cat:"enfant", type:"traditionnel",
    price:"12 000", img:"images/enfant-tradi02.jpg",
    badge:"badge-new", badgeLabel:"Nouveau",
    desc:"Joli ensemble pour les jeunes garcons",
    sizes:["M","L","X","XL"]
  },
  {
    id:20, name:"Complet enfant tradi", cat:"enfant", type:"traditionnel",
    price:"12 000", img:"images/enfant-tradi03.jpg",
    badge:"badge-new", badgeLabel:"Nouveau",
    desc:"Joli ensemble pour les jeunes garcons cullote plus ",
    sizes:["M","L","X","XL"]
  },
  {
    id:21, name:"Robe en Faso-Danfani avec fente", cat:"femme", type:"traditionnel",
    price:"15 000", img:"images/femme-tradi04.jpg",
    badge:"badge-new", badgeLabel:"Nouveau",
    decs:'Jolie robe en Faso Danfani avec un pantalon Blanc parfait pour des ceremonies',
    size:["X","XL","XXL"]
  },
  {
    id:22, name:"Robe en Koko-Donda", cat:"femme", type:"traditionnel",
    price:"20 000", img:"images/femme-tradi02.jpg",
    badge:"badge-new", badgeLabel:"Promotion",
    desc:"Joli robe en Koko-Donda pour vos soirée détente et rencontre",
    sizes:["M","X","XL","XXL"]
  },
  {
    id:23, name:"Robe Koko-Donda 2Pieces", cat:"femme", type:"traditionnel",
    price:"15 000", img:"images/femme-tradi03.jpg",
    badge:"badge-new", badgeLabel:"Nouveau",
    desc:"Joli robe de Koko-Donda deux pieces agréable à porter pour des sortie entre fille et pour des évènements",
    sizes:["M","X","XL","XXL"]
  },
  {
    id:24, name:"Complet Homme", name:"homme", type:"traditionnel",
    price:"25 000", img:"images/homme-tradi02.jpg",
    badge:"badge-new", badgeLabel:"Promotion",
    desc:"Joli en ensemble pour Homme parfait pour vos soirée entre Homme et sortie",
    sizes:["Sur mesure"]
  }
];
async function loadProducts() {

  const response = await fetch("http://localhost:5000/api/products");

  products = await response.json();

  renderProducts();
}

loadProducts();
let cart = [];
let currentProduct = null;
let selectedSize = '';

function renderProducts(filter='tous') {
  const grid = document.getElementById('productsGrid');
  const filtered = filter === 'tous' ? products : products.filter(p => p.cat === filter || p.type === filter);
  grid.innerHTML = filtered.map(p => `
    <div class="product-card fade-up">
      <div class="product-img" onclick="openModal(${p.id})" style="cursor:pointer">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <span class="product-badge ${p.badge}">${p.badgeLabel}</span>
        <div class="product-actions">
          <button class="btn-cart" onclick="event.stopPropagation();addToCart(${p.id})">+ Panier</button>
          <button class="btn-wa" onclick="event.stopPropagation();orderWA(${p.id})">WhatsApp</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-cat">${p.cat} · ${p.type}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price">${p.price} FCFA</div>
      </div>
    </div>
  `).join('');
  observeFadeUps();
}

function filterProducts(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProducts(cat);
  document.getElementById('boutique').scrollIntoView({behavior:'smooth'});
}

function openModal(id) {
  const p = products.find(x => x.id === id);
  currentProduct = p;
  selectedSize = '';
  document.getElementById('modalImg').src = p.img;
  document.getElementById('modalImg').alt = p.name;
  document.getElementById('modalCat').textContent = p.cat.toUpperCase() + ' · ' + p.type.toUpperCase();
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalPrice').textContent = p.price + ' FCFA';
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalSizes').innerHTML = p.sizes.map(s =>
    `<button class="size-btn" onclick="selectSize('${s}', this)">${s}</button>`
  ).join('');
  document.getElementById('modalWa').href =
    `https://wa.me/22670000000?text=Bonjour%2C%20je%20veux%20commander%20*${encodeURIComponent(p.name)}*%20à%20${encodeURIComponent(p.price)}%20FCFA`;
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function selectSize(s, btn) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedSize = s;
}

function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOnBg(e) {
  if (e.target === document.getElementById('productModal')) closeModal();
}

function addFromModal() {
  if (!selectedSize && currentProduct.sizes.length > 1) {
    showToast('⚠ Veuillez choisir une taille');
    return;
  }
  addToCart(currentProduct.id, selectedSize || currentProduct.sizes[0]);
  closeModal();
}

function addToCart(id, size='') {
  const p = products.find(x => x.id === id);
  const priceNum = parseInt(p.price.replace(/\s/g,''));
  cart.push({...p, size, priceNum, cartId: Date.now()});
  updateCartUI();
  showToast('✓ ' + p.name + ' ajouté au panier');
}

function orderWA(id) {
  const p = products.find(x => x.id === id);
  window.open(`https://wa.me/22655757299?text=Bonjour%2C%20je%20veux%20commander%20*${encodeURIComponent(p.name)}*%20à%20${encodeURIComponent(p.price)}%20FCFA`, '_blank');
}

function updateCartUI() {
  const count = cart.length;
  document.getElementById('cartCount').textContent = count;
  const total = cart.reduce((s, i) => s + i.priceNum, 0);
  document.getElementById('cartTotal').textContent = total.toLocaleString('fr-FR') + ' FCFA';

  const itemsEl = document.getElementById('cartItems');
  if (count === 0) {
    itemsEl.innerHTML = '<div class="cart-empty">Votre panier est vide 🛍</div>';
    document.getElementById('cartFooter').style.display = 'none';
  } else {
    itemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div style="font-size:0.75rem;color:var(--gris);margin-bottom:4px">${item.size ? 'Taille: ' + item.size : ''}</div>
          <div class="cart-item-price">${item.price} FCFA</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.cartId})">✕</button>
      </div>
    `).join('');
    document.getElementById('cartFooter').style.display = 'block';
  }
}

function removeFromCart(cartId) {
  cart = cart.filter(i => i.cartId !== cartId);
  updateCartUI();
}

function sendCartWA() {
  const lines = cart.map(i => `• ${i.name} (${i.size||'N/A'}) - ${i.price} FCFA`).join('%0A');
  const total = cart.reduce((s,i) => s+i.priceNum, 0).toLocaleString('fr-FR');
  window.open(`https://wa.me/22655757299?text=Bonjour%2C%20voici%20ma%20commande%20:%0A%0A${lines}%0A%0ATotal%20:%20${total}%20FCFA`, '_blank');
}

function toggleCart() {
  const panel = document.getElementById('cartPanel');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open');
  overlay.style.display = isOpen ? 'none' : 'block';
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function toggleMenu() {
  document.getElementById('main-nav').classList.toggle('menu-open');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function submitForm(e) {
  e.preventDefault();
  showToast('✓ Message envoyé ! Nous vous répondrons bientôt.');
  e.target.reset();
}

function observeFadeUps() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold: 0.1});
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// NAV scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  nav.style.boxShadow = window.scrollY > 50 ? '0 2px 20px rgba(0,0,0,0.3)' : 'none';
});

// Init
renderProducts();
observeFadeUps();
