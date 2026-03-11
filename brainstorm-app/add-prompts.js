const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('/root/.openclaw/workspace/brainstorm-app/brain.db');

const prompts = [
  // Vintage Botanical Spring (10)
  { title: 'Prompt 01: Spring Wildflower', content: 'vintage botanical illustration, spring wildflowers, lupines and California poppies, aged herbarium paper, sepia tones, scientific drawing style, 1800s naturalist journal, museum archive aesthetic, soft watercolor wash, high detail botanical print --ar 17:22 --q 2 --v 6 --stylize 150', tags: 'midjourney,prompt,botanical,spring' },
  { title: 'Prompt 02: English Garden Roses', content: 'vintage rose botanical print, English garden roses, blush pink and cream, Victorian flower catalog, aged parchment background, delicate line work, romantic shabby chic, antique seed packet label, botanical illustration --ar 17:22 --q 2 --v 6 --stylize 200', tags: 'midjourney,prompt,botanical,roses' },
  { title: 'Prompt 03: Lavender Herb Bundle', content: 'vintage lavender botanical, purple lavender sprigs, French Provence style, aged apothecary label, herbalist journal page, soft purple and sage green, rustic farmhouse aesthetic, hand-drawn botanical --ar 17:22 --q 2 --v 6 --stylize 100', tags: 'midjourney,prompt,botanical,lavender' },
  { title: 'Prompt 04: Daisy Meadow Collection', content: 'vintage daisy botanical illustration, wild meadow daisies, cream and butter yellow, cottage garden aesthetic, aged naturalist sketch, primitive folk art style, simple line drawing, nostalgic countryside --ar 17:22 --q 2 --v 6 --stylize 120', tags: 'midjourney,prompt,botanical,daisy' },
  { title: 'Prompt 05: Tulip Dutch Heritage', content: 'vintage Dutch tulip botanical, antique tulip catalog 1700s, rich burgundy and gold, Dutch Golden Age painting style, aged vellum paper, formal botanical illustration, museum quality, heritage florals --ar 17:22 --q 2 --v 6 --stylize 180', tags: 'midjourney,prompt,botanical,tulip' },
  { title: 'Prompt 06: Fern Forest Floor', content: 'vintage fern botanical print, forest floor ferns, deep green and sepia, Victorian fernery aesthetic, aged scientific journal, detailed frond illustration, naturalist field sketch, woodland cottage --ar 17:22 --q 2 --v 6 --stylize 90', tags: 'midjourney,prompt,botanical,fern' },
  { title: 'Prompt 07: Cherry Blossom Japanese', content: 'vintage cherry blossom botanical, Japanese sakura branches, soft pink and cream, ukiyo-e influence, aged washi paper texture, delicate petal illustration, zen garden aesthetic, Asian botanical art --ar 17:22 --q 2 --v 6 --stylize 220', tags: 'midjourney,prompt,botanical,cherry' },
  { title: 'Prompt 08: Sunflower Farmhouse', content: 'vintage sunflower botanical, golden sunflowers, rustic farmhouse style, aged seed catalog page, warm yellow and brown, primitive folk art, country garden aesthetic, hand-colored engraving --ar 17:22 --q 2 --v 6 --stylize 140', tags: 'midjourney,prompt,botanical,sunflower' },
  { title: 'Prompt 09: Hydrangea French Country', content: 'vintage hydrangea botanical, French country hydrangeas, soft blue and mauve, Provence garden aesthetic, aged French florilegium, romantic cottage style, delicate watercolor wash --ar 17:22 --q 2 --v 6 --stylize 190', tags: 'midjourney,prompt,botanical,hydrangea' },
  { title: 'Prompt 10: Peony Chinese Heritage', content: 'vintage peony botanical, Chinese tree peonies, coral pink and cream, traditional Chinese botanical art, aged rice paper texture, imperial garden aesthetic, heritage flower illustration --ar 17:22 --q 2 --v 6 --stylize 210', tags: 'midjourney,prompt,botanical,peony' },
  // Easter Ephemera (5)
  { title: 'Prompt 11: Vintage Easter Eggs', content: 'vintage Easter egg illustrations, ornate Victorian Easter cards, gold foil details, pastel egg designs, 1890s chromolithograph style, aged embossed paper, religious Easter symbolism, antique holiday ephemera --ar 17:22 --q 2 --v 6 --stylize 250', tags: 'midjourney,prompt,easter,vintage' },
  { title: 'Prompt 12: Easter Bunny Folk Art', content: 'vintage Easter bunny, primitive folk art style, 1800s German Osterhase, soft watercolor, aged childrens book illustration, nostalgic Easter postcard, hand-painted folk tradition, cream and pastel background --ar 17:22 --q 2 --v 6 --stylize 160', tags: 'midjourney,prompt,easter,bunny' },
  { title: 'Prompt 13: Spring Lamb Pastoral', content: 'vintage spring lamb pastoral scene, countryside Easter imagery, soft watercolor landscape, 1900s greeting card style, aged postcard aesthetic, peaceful meadow, religious Easter lamb symbolism --ar 17:22 --q 2 --v 6 --stylize 130', tags: 'midjourney,prompt,easter,lamb' },
  { title: 'Prompt 14: Easter Lily Religious', content: 'vintage Easter lily botanical, white Madonna lily, religious Easter symbolism, Victorian funeral card aesthetic, aged embossed paper, sacred flower illustration, resurrection symbolism, cream and gold --ar 17:22 --q 2 --v 6 --stylize 170', tags: 'midjourney,prompt,easter,lily' },
  { title: 'Prompt 15: Easter Basket Still Life', content: 'vintage Easter basket still life, wicker basket with eggs, 1920s commercial illustration, aged advertisement art, pastel colors, nostalgic Easter morning, hand-colored engraving style --ar 17:22 --q 2 --v 6 --stylize 140', tags: 'midjourney,prompt,easter,basket' },
  // Mother's Day Heritage (5)
  { title: 'Prompt 16: Mothers Day Carnation', content: 'vintage Mothers Day carnation, pink carnation bouquet, 1920s Mothers Day postcard, aged embossed paper, gold foil details, maternal love symbolism, antique greeting card art, soft watercolor --ar 17:22 --q 2 --v 6 --stylize 200', tags: 'midjourney,prompt,mothersday,carnation' },
  { title: 'Prompt 17: Family Heritage Rose', content: 'vintage family heritage rose, heirloom rose variety, genealogy rose chart, aged family Bible page, Victorian mourning rose symbolism, cream and sepia tones, heritage floral memorial --ar 17:22 --q 2 --v 6 --stylize 180', tags: 'midjourney,prompt,mothersday,heritage' },
  { title: 'Prompt 18: Mothers Garden Bouquet', content: 'vintage mothers garden bouquet, mixed cottage flowers, 1900s seed catalog cover, aged chromolithograph, nostalgic mothers garden, hand-painted floral arrangement, warm sunset colors --ar 17:22 --q 2 --v 6 --stylize 220', tags: 'midjourney,prompt,mothersday,bouquet' },
  { title: 'Prompt 19: Grandmas Recipe Rose', content: 'vintage recipe card with roses, aged handwritten recipe, 1950s kitchen ephemera, rose border design, cream cardstock, nostalgic family recipes, shabby chic kitchen aesthetic --ar 17:22 --q 2 --v 6 --stylize 150', tags: 'midjourney,prompt,mothersday,recipe' },
  { title: 'Prompt 20: Mothers Day Script', content: 'vintage Mothers Day calligraphy, ornate script lettering, 1800s greeting card text, aged embossed paper, gold foil flourishes, maternal poetry excerpt, Victorian sentiment card --ar 17:22 --q 2 --v 6 --stylize 190', tags: 'midjourney,prompt,mothersday,script' },
];

const stmt = db.prepare('INSERT INTO brainstorms (title, content, tags, created_at) VALUES (?, ?, ?, datetime("now"))');

let count = 0;
prompts.forEach(p => {
  stmt.run(p.title, p.content, p.tags, (err) => {
    if (err) console.error('Error:', err);
    else count++;
  });
});

stmt.finalize(() => {
  console.log(`✅ ${count} prompts added to database!`);
  db.close();
});
