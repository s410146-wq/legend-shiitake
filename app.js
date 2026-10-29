const timelineData = [
  { day: 'DAY 01', icon: '🌱', title: '菌種入袋', text: '把健康的菌種放入培養包，為一場慢慢發生的成長做好準備。', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80' },
  { day: 'DAY 14', icon: '🌿', title: '菌絲蔓延', text: '白色菌絲像細小的根，逐漸佔滿整個培養包。', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80' },
  { day: 'DAY 28', icon: '🍄', title: '菇蕾冒出', text: '第一批小菇蕾探出頭，菇房裡每天都有新的驚喜。', active: true, image: 'https://images.unsplash.com/photo-1504545102780-26774c1d8d1e?auto=format&fit=crop&w=600&q=80' },
  { day: 'DAY 35', icon: '🧺', title: '採收時刻', text: '傘面飽滿、香氣正好，輕輕旋下就是餐桌上的美味。', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80' }
];
document.getElementById('timeline').innerHTML = timelineData.map(item => `<article class="timeline-card ${item.active ? 'active' : ''}"><img class="timeline-image" src="${item.image}" onerror="this.onerror=null;this.src='assets/mushroom-stage.svg'" alt="${item.title}的示意照片" /><div class="timeline-icon">${item.icon}</div><div class="day">${item.day}</div><h3>${item.title}</h3><p>${item.text}</p></article>`).join('');

const recipes = {
  快速: { title: '香菇滑蛋拌飯', label: 'TODAY\'S PICK · 15 MIN', text: '香菇的鮮、蛋的柔，拌進一碗熱呼呼的白飯。今天就用最簡單的方式，好好吃飯。', meta: '難度 ★☆☆', aroma: '香氣 ★★★' },
  療癒: { title: '香菇豆腐暖暖湯', label: 'TODAY\'S PICK · 30 MIN', text: '把香菇、豆腐和青菜交給一鍋熱湯，讓香氣慢慢填滿廚房，也把今天的疲憊煮軟。', meta: '難度 ★☆☆', aroma: '暖度 ★★★' },
  清爽: { title: '香菇時蔬溫沙拉', label: 'TODAY\'S PICK · 20 MIN', text: '煎到微焦的香菇搭配爽脆蔬菜，再淋一點柑橘醬汁，清爽卻很有飽足感。', meta: '難度 ★★☆', aroma: '清爽 ★★★' }
};
const recipeLibrary = [
  {title:'香菇滑蛋拌飯',time:'15 分鐘',tag:'快速',image:'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80'},
  {title:'香菇豆腐暖暖湯',time:'30 分鐘',tag:'療癒',image:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80'},
  {title:'香菇時蔬溫沙拉',time:'20 分鐘',tag:'清爽',image:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80'},
  {title:'奶油香菇起司吐司',time:'12 分鐘',tag:'快速',image:'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80'},
  {title:'照燒香菇雞肉串',time:'35 分鐘',tag:'療癒',image:'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80'},
  {title:'蒜香香菇青菜麵',time:'18 分鐘',tag:'清爽',image:'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80'}
];
document.getElementById('recipeLibrary').innerHTML = recipeLibrary.map(item => `<article class="recipe-card"><img src="${item.image}" onerror="this.onerror=null;this.src='assets/mushroom-stage.svg'" alt="${item.title}" /><div><span>${item.tag} · ${item.time}</span><h3>${item.title}</h3><button class="recipe-card-btn" data-recipe="${item.title}">加入今日靈感 →</button></div></article>`).join('');
let currentStyle = '快速';
document.querySelectorAll('.chip').forEach(btn => btn.addEventListener('click', () => { const group = btn.parentElement; group.querySelectorAll('.chip').forEach(b => b.classList.remove('active')); btn.classList.add('active'); if (group.id === 'styles') currentStyle = btn.dataset.value; }));
document.querySelectorAll('.time').forEach(btn => btn.addEventListener('click', () => { btn.parentElement.querySelectorAll('.time').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }));
const toast = document.getElementById('toast');
document.getElementById('findRecipe').addEventListener('click', () => { const recipe = recipes[currentStyle]; document.querySelector('.result-label').textContent = recipe.label; document.querySelector('.result-copy h3').textContent = recipe.title; document.querySelector('.result-copy p').textContent = recipe.text; document.querySelector('.result-meta span').textContent = recipe.meta; document.querySelector('.result-meta span:nth-child(2)').textContent = recipe.aroma; document.getElementById('recipeResult').scrollIntoView({ behavior: 'smooth', block: 'center' }); toast.textContent = '已為你換上一道今日靈感！'; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2200); });
document.getElementById('recipeMore').addEventListener('click', e => { e.preventDefault(); toast.textContent = '食譜步驟：香菇切片 → 炒香 → 加蛋液 → 蓋上白飯！'; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3000); });
document.querySelectorAll('.recipe-card-btn').forEach(btn => btn.addEventListener('click', () => { const target = recipeLibrary.find(item => item.title === btn.dataset.recipe); document.querySelector('.result-label').textContent = `TODAY'S PICK · ${target.time.toUpperCase()}`; document.querySelector('.result-copy h3').textContent = target.title; document.querySelector('.result-copy p').textContent = '把傳奇香菇放進今天的料理，簡單幾步就能讓餐桌多一點香氣與故事。'; document.getElementById('recipeResult').scrollIntoView({behavior:'smooth', block:'center'}); }));
