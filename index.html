<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Ultimate Random Enemy Generator</title>
<style>
  body {
    font-family: sans-serif;
    padding: 20px;
    background: #1e1e1e;
    color: #f0f0f0;
  }
  h1 { margin-bottom: 10px; }
  .buttons { display: flex; gap: 10px; margin-bottom: 20px; }
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    background: #444;
    color: #fff;
    transition: background 0.2s, transform 0.1s;
  }
  button:hover { background: #666; }
  button:active { transform: scale(0.97); }

  .enemy {
    position: relative;
    background: #2c2c2c;
    margin-bottom: 20px;
    border-radius: 8px;
    opacity: 0;
    animation: fadeIn 0.4s ease forwards;
    border: 2px solid #333;
    transition: box-shadow 0.3s, border-color 0.3s;
  }
  .boss {
    border-color: gold;
    box-shadow: 0 0 10px gold;
    background: linear-gradient(145deg, #2c2c2c, #3a3000);
  }

  @keyframes fadeIn { to { opacity: 1; } }
  @keyframes fadeOut { to { opacity: 0; } }
  @keyframes floatEnemy { 0% { transform: translateY(0); } 100% { transform: translateY(-5px); } }

  /* Element glows */
  .fire { border-color: #ff4500; box-shadow: 0 0 10px #ff4500; }
  .water { border-color: #1e90ff; box-shadow: 0 0 10px #1e90ff; }
  .wind { border-color: #ccc; box-shadow: 0 0 10px #ccc; }
  .earth { border-color: #228b22; box-shadow: 0 0 10px #228b22; }
  .lightning { border-color: #f9ff00; box-shadow: 0 0 10px #f9ff00; }
  .ice { border-color: #a0e0ff; box-shadow: 0 0 10px #a0e0ff; }
  .poison { border-color: #6a0dad; box-shadow: 0 0 10px #6a0dad; }
  .shadow { border-color: #555; box-shadow: 0 0 10px #555; }
  .light { border-color: #ffd700; box-shadow: 0 0 10px #ffd700; }
  .arcane { border-color: #b873ff; box-shadow: 0 0 10px #b873ff; }
  .nature { border-color: #32cd32; box-shadow: 0 0 10px #32cd32; }
  .spirit { border-color: #f0f8ff; box-shadow: 0 0 10px #f0f8ff; }

  /* Loot glow by rarity */
  .common { color: #ccc; text-shadow: 0 0 2px #ccc; }
  .rare { color: #1e90ff; text-shadow: 0 0 5px #1e90ff; }
  .epic { color: #a020f0; text-shadow: 0 0 8px #a020f0; }
  .legendary { color: #fbc02d; text-shadow: 0 0 10px #fbc02d, 0 0 20px #fbc02d; display: inline-block; animation: float 1.2s ease-in-out infinite alternate; }
  .mythic { color: #ff1493; text-shadow: 0 0 12px #ff1493, 0 0 24px #ff1493; display: inline-block; animation: float 1.2s ease-in-out infinite alternate; }
  .divine { color: #00ffff; text-shadow: 0 0 12px #00ffff, 0 0 24px #00ffff; display: inline-block; animation: float 1.2s ease-in-out infinite alternate; }

  @keyframes float { 0% { transform: translateY(0px); } 100% { transform: translateY(-6px); } }

  /* Drift sparkle style */
  .sparkle { position: absolute; width: 4px; height: 4px; border-radius: 50%; pointer-events: none; opacity: 0; animation: drift 1.5s forwards; }
  @keyframes drift { 0% { transform: translate(0,0) scale(1); opacity: 1; } 100% { transform: translate(var(--x), var(--y)) scale(1.2); opacity: 0; } }
</style>
</head>
<body>

<h1>🔥 Ultimate Random Enemy Generator ⚔️</h1>
<div class="buttons">
  <button id="generate">Generate Enemy</button>
  <button id="clear">Clear Enemies</button>
</div>
<div id="enemyList"></div>

<script>
// Helpers
function randomChoice(arr) { return arr[Math.floor(Math.random()*arr.length)]; }

// Adjectives
const adjectives = ["Fierce","Ancient","Tiny","Shadowy","Savage","Corrupted","Enraged","Cunning","Mystic","Vicious","Silent","Wild","Infernal","Frozen","Electric","Venomous","Ghastly","Raging","Brutal","Cursed","Divine","Mighty","Swift","Stealthy","Burning","Spectral","Arcane","Stone","Thunderous","Twisted","Bloodthirsty","Dreadful","Ironclad","Phantom","Lurking","Shadowed","Vengeful","Golden","Ethereal","Plagued","Shimmering","Rotted","Frostbitten","Blazing","Haunted","Toxic","Stormy","Spiritbound","Emerald","Obsidian","Crystal","Radiant","Darkened","Luminous","Ancientborn"];

// Names
const names = ["Goblin","Specter","Slime","Wolf","Elemental","Ogre","Reaper","Imp","Wraith","Troll","Skeleton","Zombie","Dragonling","Ghoul","Harpy","Banshee","Golem","Phantom","Lich","Spider","Mimic","Serpent","Hydra","Wyvern","Vampire","Bat","Beast","Fiend","Shade","Kraken","Chimera","Minotaur","Demon","Pixie","Fairy","Kobold","Cyclops","Salamander","Wisp","Drake","Wolverine","Raptor","Cobra","Oni","Succubus","Incubus","Necromancer","Shadebeast","Frostling","Firebrand","Stormcaller","Earthshaker","Spiritwalker","Nightstalker","Venomfang"];

// Types
const types = [
  { name: "Melee", emoji: "⚔️" }, { name: "Ranged", emoji: "🏹" }, { name: "Caster", emoji: "🔮" },
  { name: "Assassin", emoji: "🗡️" }, { name: "Tank", emoji: "🛡️" }, { name: "Summoner", emoji: "🐾" },
  { name: "Berserker", emoji: "🔥" }, { name: "Sniper", emoji: "🎯" }, { name: "Healer", emoji: "💖" },
  { name: "Mage", emoji: "✨" }, { name: "Necromancer", emoji: "☠️" }, { name: "Elementalist", emoji: "🌪️" },
  { name: "Rogue", emoji: "🌙" }, { name: "Shaman", emoji: "🪶" }, { name: "Warlock", emoji: "💀" }
];

// Elements
const elements = [
  { name: "Fire", emoji: "🔥", color: "#ff4500" }, { name: "Water", emoji: "💧", color: "#1e90ff" },
  { name: "Wind", emoji: "🌪️", color: "#ccc" }, { name: "Earth", emoji: "🌱", color: "#228b22" },
  { name: "Lightning", emoji: "⚡", color: "#f9ff00" }, { name: "Ice", emoji: "❄️", color: "#a0e0ff" },
  { name: "Poison", emoji: "☠️", color: "#6a0dad" }, { name: "Shadow", emoji: "🌑", color: "#555" },
  { name: "Light", emoji: "🌞", color: "#ffd700" }, { name: "Arcane", emoji: "💫", color: "#b873ff" },
  { name: "Nature", emoji: "🌸", color: "#32cd32" }, { name: "Spirit", emoji: "🪶", color: "#f0f8ff" }
];

// Loot rarities & items
const lootRarities = [
  { name: "🪓 Common", class: "common" }, { name: "🟦 Uncommon", class: "rare" },
  { name: "🟩 Rare", class: "rare" }, { name: "🟪 Epic", class: "epic" },
  { name: "🟨 Legendary", class: "legendary" }, { name: "💎 Mythic", class: "mythic" },
  { name: "🌟 Divine", class: "divine" }
];
const lootItems = ["Sword","Bow","Staff","Dagger","Amulet","Ring","Armor","Wand","Helm","Shield","Gauntlets","Boots","Cape","Potion","Scroll","Orb","Talisman","Scepter","Lance","Crossbow","Grimoire","Crystal","Charm","Pendant","Totem","Bracer","Mask","Crown","Belt","Gemstone","Lantern"];

// Enemy generator
function generateEnemy() {
  const isBoss = Math.random() < 0.05;
  const type = randomChoice(types);
  const element = randomChoice(elements);
  const name = `${isBoss ? "💀 Boss " : ""}${type.emoji} ${randomChoice(adjectives)} ${randomChoice(names)}`;

  // Stats
  const hp = isBoss ? Math.floor(Math.random()*300)+500 : Math.floor(Math.random()*50)+50;
  const mp = isBoss ? Math.floor(Math.random()*200)+100 : Math.floor(Math.random()*30)+20;
  const strength = isBoss ? Math.floor(Math.random()*50)+50 : Math.floor(Math.random()*15)+5;
  const dexterity = isBoss ? Math.floor(Math.random()*40)+20 : Math.floor(Math.random()*15)+5;
  const intelligence = isBoss ? Math.floor(Math.random()*50)+40 : Math.floor(Math.random()*20)+5;
  const defense = isBoss ? Math.floor(Math.random()*40)+20 : Math.floor(Math.random()*10)+5;
  const resistance = isBoss ? Math.floor(Math.random()*50)+20 : Math.floor(Math.random()*10)+5;
  const speed = isBoss ? Math.floor(Math.random()*30)+20 : Math.floor(Math.random()*15)+5;
  const luck = isBoss ? Math.floor(Math.random()*20)+10 : Math.floor(Math.random()*10)+1;

  let weakness;
  do { weakness = randomChoice(elements); } while(weakness.name===element.name);

  const loot = { rarity: randomChoice(lootRarities), element: randomChoice(elements), item: randomChoice(lootItems) };

  return { name, type, hp, mp, strength, dexterity, intelligence, defense, resistance, speed, luck, strengthElement: element, weakness, loot, isBoss };
}

// Sparkles
function createDriftSparkles(container, color, count=15) {
  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.background = color;
    const dx = Math.random()*40-20;
    const dy = Math.random()*40-20;
    sparkle.style.setProperty('--x', `${dx}px`);
    sparkle.style.setProperty('--y', `${dy}px`);
    sparkle.style.left = `${Math.random()*container.offsetWidth}px`;
    sparkle.style.top = `${Math.random()*container.offsetHeight}px`;
    container.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1600);
  }
}

// Display
function displayEnemy(enemy) {
  const container = document.createElement('div');

  // Size & border based on stats
  const baseSize = 12;
  container.style.padding = `${baseSize + enemy.hp/50}px`;
  container.style.borderWidth = `${2 + enemy.strength/30}px`;

  // Glow for casters
  let glowIntensity = enemy.intelligence / 5;
  if (["Caster","Mage","Warlock","Elementalist","Necromancer","Shaman"].includes(enemy.type.name)) {
    container.style.boxShadow = `0 0 ${glowIntensity*2}px ${enemy.strengthElement.color}`;
  }

  // Floating speed by DEX
  const floatSpeed = Math.max(0.5, 2 - enemy.dexterity/100);
  container.style.animation = `fadeIn 0.4s ease forwards, floatEnemy ${floatSpeed}s ease-in-out infinite alternate`;

  const sparkleCount = 15 + Math.floor(enemy.luck / 2);

  container.className = `enemy ${enemy.strengthElement.name.toLowerCase()}` + (enemy.isBoss ? ' boss' : '');
  container.innerHTML = `
    <strong>${enemy.name}</strong> (${enemy.type.name})<br>
    ❤️ HP: ${enemy.hp} | 🔵 MP: ${enemy.mp}<br>
    💪 STR: ${enemy.strength} | 🏃 DEX: ${enemy.dexterity} | 🧠 INT: ${enemy.intelligence}<br>
    🛡️ DEF: ${enemy.defense} | ✨ RES: ${enemy.resistance} | ⚡ SPD: ${enemy.speed} | 🍀 LUCK: ${enemy.luck}<br>
    ⚡ Strength Element: <span class="${enemy.strengthElement.name.toLowerCase()}">${enemy.strengthElement.emoji} ${enemy.strengthElement.name}</span><br>
    ❌ Weakness: <span class="${enemy.weakness.name.toLowerCase()}">${enemy.weakness.emoji} ${enemy.weakness.name}</span><br>
    🎁 Loot: <span class="loot ${enemy.loot.rarity.class}">${enemy.loot.rarity.name} ${enemy.loot.element.emoji} ${enemy.loot.element.name} ${enemy.loot.item}</span>
  `;

  document.getElementById('enemyList').prepend(container);
  createDriftSparkles(container, enemy.strengthElement.color, sparkleCount);

  if (enemy.isBoss) createDriftSparkles(container, '#ffd700', sparkleCount);
  if (['legendary','mythic','divine'].includes(enemy.loot.rarity.class)) {
    const lootElem = container.querySelector('.loot');
    createDriftSparkles(lootElem, '#fbc02d', sparkleCount+10);
  }
}

// Buttons
document.getElementById('generate').addEventListener('click', () => displayEnemy(generateEnemy()));
document.getElementById('clear').addEventListener('click', () => document.getElementById('enemyList').innerHTML='');
</script>

</body>
</html>
