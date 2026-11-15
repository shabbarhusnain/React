# CSS/Tailwind Layout Structure: Poori Sequence

Is guide ka maqsad: dimaagh mein layout ka structure bana kar usay seedha code mein likhna. Design (colors, fonts, look) aap kahin se bhi dekh sakte ho, lekin **layout ka structure** yahan se seekho.

## 0. Buniyadi baatein

1. **Har cheez ek box hai.** Text, image, button, section, sab rectangle hain.
2. **Box ke 4 layers hain:** content, padding (andar ki jagah), border, margin (bahar ki jagah). Tailwind mein `border-box` pehle se on hota hai, yani `w-64 p-4` ka matlab hai ke total width 64 unit hi rahegi, padding us ke andar aa jayegi.
3. **Parent apne children ka layout decide karta hai.** Bachon ko alag alag position nahi dete. Parent par `flex` ya `grid` lagate ho aur bachon ki jagah khud ban jati hai.
4. **Boxes ek ke andar ek hote hain (nesting).** Poora page ek tree hai: page > section > container > row/grid > item.
5. **Tailwind ka unit:** `1` = 0.25rem = 4px. Yani `p-4` = 16px, `w-64` = 256px, `gap-6` = 24px.

## 1. Layout ka structure kaise sochna hai

Kisi bhi page ko code se pehle **tree** mein likho. Misal:

```
page
├── header          (row: logo | links)
├── hero            (2 columns: text | image)
├── cards section   (grid: 3 cards)
│     └── card      (column: title, text, button)
└── footer          (center text)
```

Har box par sirf 3 sawal:

1. **Is ke andar bachon ki sorat kya hai?** Ek line (`flex`), ek ke neeche ek (`flex flex-col`), jaal (`grid`), ya sirf upar neeche (normal).
2. **Is box ka apna size kya hai?** Poori width, limit wali width, ya content ke hisab se.
3. **Is ke aur bachon ke beech faasla kitna?** `gap-*`, `p-*`.

Jawab mil jaye to class likh do. Yahi poora kaam hai.

## 2. Sochne ka sequence (har page par yahi order)

1. **Page ko bade sections mein todo:** navbar, hero, features, footer.
2. **Har section ka container banao:** `mx-auto max-w-6xl px-4`
3. **Section ke andar layout type chuno:** row/column (`flex`), cards ka jaal (`grid`), ya sirf upar neeche (normal block).
4. **Sizing do.**
5. **Spacing do:** padding, margin, gap.
6. **Sirf zaroorat ho to** positioning (overlay) aur transform.
7. **Mobile pehle likho**, phir `md:` `lg:` se bare screens.

## 3. Layout: kab kya?

| Situation | Use karo |
|---|---|
| Upar neeche paragraphs, headings | kuch nahi (normal block flow) |
| Ek line mein items (navbar, buttons, icon + text) | `flex` |
| Items ek ke neeche ek, lekin align/gap chahiye | `flex flex-col` |
| Cards ka grid, 2D layout | `grid grid-cols-*` |
| Sidebar + main content | `flex` ya `grid grid-cols-[250px_1fr]` |
| Items jagah kam par neeche wrap hon | `flex flex-wrap` |
| Cheez ke upar badge/icon | `relative` parent + `absolute` child |

**Flex ke important tools**
- `justify-*` = **main axis** (row mein left-right): `justify-start`, `center`, `end`, `between`, `around`
- `items-*` = **cross axis** (row mein upar-neeche): `items-start`, `center`, `end`, `stretch`
- `flex-col` karne par axes ulat jate hain: `justify-*` ab vertical ho jata hai.
- `flex-1` = bachi hui jagah le lo. `shrink-0` = chhota mat ho. `grow` = barh jao.
- `flex-wrap` = jagah kam ho to neeche chale jao.

**Grid ke important tools**
- `grid-cols-3` = 3 barabar columns
- `col-span-2` = ek cheez 2 columns le
- `grid-cols-[250px_1fr]` = pehla fixed, doosra baki jagah
- Auto-responsive cards: `grid-cols-[repeat(auto-fit,minmax(250px,1fr))]`

**Flex ya grid?** Ek direction mein (row ya column) to flex. Rows aur columns dono ka control chahiye to grid.

## 4. Sizing

| Chahiye | Use karo |
|---|---|
| Parent ki poori width | `w-full` |
| Adhi / aik tihai | `w-1/2`, `w-1/3` |
| Poori screen ki height | `min-h-screen` (`h-screen` nahi, wajah neeche) |
| Is se bara na ho | `max-w-md`, `max-w-6xl` |
| Is se chota na ho | `min-w-0`, `min-h-[200px]` |
| Square | `size-12` ya `w-12 h-12` |
| Image/video ka ratio | `aspect-video`, `aspect-square` |
| Image box ko bhar de | `object-cover` (kat kar bhare), `object-contain` (poori dikhe) |
| Content ke hisab se | kuch mat do (auto) |

**Units:**
- `px` = fixed. Border ya chhoti cheezon ke liye.
- `rem` = font size ke hisab se. Tailwind ki default scale yahi hai.
- `%` = parent ke hisab se (`w-1/2`).
- `vh/vw` = screen ke hisab se. Mobile par browser bar ki wajah se `vh` gadbad karta hai, to `min-h-dvh` behtar hai.

**Height ka rule:** zyada tar height mat do, content se khud banne do. Height tab do jab hero section, image, ya card ka fixed look chahiye.

## 5. Spacing

| Kaam | Use karo |
|---|---|
| Siblings (bhai behen items) ke beech | **`gap-*`** (flex/grid par). Sab se saaf tareeqa |
| Box ke andar content ke liye jagah | `p-*`, `px-*`, `py-*` |
| Box ke bahar, doosri cheez se distance | `m-*`, `mt-*`, `mb-*` |
| Cheez ko horizontal center karna | `mx-auto` (width honi chahiye, jaise `max-w-*`) |
| Cheez ko right dhakelna flex mein | `ml-auto` |
| Vertical spacing block children mein | `space-y-4` |

Flex/grid mein `gap` use karo, har child par margin mat lagao.

## 6. Positioning

| Value | Matlab | Kab |
|---|---|---|
| `static` | default, normal flow | kuch nahi karna |
| `relative` | normal jagah par, lekin ab doosron ka "reference" | child ko absolute karna ho to parent par |
| `absolute` | flow se bahar, nearest `relative` parent ke hisab se | badge, close button, overlay text image par |
| `fixed` | screen ke hisab se, scroll par nahi hilta | sticky navbar, chat button |
| `sticky` | scroll tak normal, phir chipak jata hai (`sticky top-0`) | header, sidebar |

Offsets: `top-0 right-0 bottom-0 left-0`, `inset-0` (chaaron taraf 0, yani poora parent bhar do), `top-4 right-4`.
Layers ka order: `z-10`, `z-50`. Yeh sirf positioned cheezon par kaam karta hai.

**Absolute ka sab se bara jaal:** agar parent par `relative` nahi lagaya to child kisi door ke parent ya poore page ke hisab se chala jata hai.

**Absolute se center karna:**
```html
<div class="relative h-64">
  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Center</div>
</div>
```
Lekin zyada tar centering `flex items-center justify-center` se karo, wo asaan hai.

## 7. Transform

`translate-x-4`, `-translate-y-2`, `scale-110`, `rotate-6`, `origin-top-left`

- Transform **layout ko nahi badalta**: cheez visually hil jati hai, lekin us ki jagah khali rehti hai aur doosri cheezein nahi hilti.
- Isliye transform layout banane ke liye nahi, in kaamon ke liye hai: hover effects (`hover:scale-105`), animations, center trick, chhoti adjustments.
- Smooth karna: `transition duration-300`.

## 8. Responsive

Breakpoints (min-width, yani us size **aur us se bare** par lagte hain):
`sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px

```html
<div class="flex flex-col gap-4 md:flex-row">
```
Mobile par column, `md` se row. Pehle bina prefix ka mobile style, phir bare screens par override. Ulta (desktop pehle) mat likho.

Show/hide: `hidden md:block` (mobile par chhupa, md par dikhao), `md:hidden`.

## 9. Kya kis ke saath mat use karo

| Galti | Kya hota hai | Sahi |
|---|---|---|
| `flex` aur `grid` ek hi element par | ek hi `display` chalta hai | ek chuno |
| `justify-center` flex-col mein horizontal samajhna | wo vertical ho jata hai | col mein `items-center` horizontal ke liye |
| `absolute` child, parent par `relative` nahi | child galat jagah chala jata hai | parent par `relative` |
| Poora layout `absolute` se | responsive nahi rehta | flex/grid |
| `w-[500px]` fixed | chhoti screen par bahar nikal jata hai | `w-full max-w-lg` |
| `h-screen` content ke saath | content zyada ho to overflow | `min-h-screen` |
| `w-screen` | scrollbar ki wajah se horizontal scroll aa jata hai | `w-full` |
| Flex children par margin gap ke liye | ganda aur bhoolna asaan | `gap-*` |
| `mx-auto` bina width ke | center nahi hota | `max-w-*` ke saath |
| Transform se layout banana | jagah khali reh jati hai | flex/grid, transform sirf effect ke liye |
| `space-x-*` aur `gap-*` saath | double spacing | ek hi |
| Flex child mein lamba text overflow | child shrink nahi hota | child par `min-w-0` |

## 10. Dimaagh ke structure se code tak

Structure: *upar navbar jis mein logo left, links right; neeche hero jis mein left text, right image; phir 3 cards; footer.*

```html
<!-- NAVBAR: flex, logo left, links right -->
<header class="sticky top-0 z-50 border-b bg-white">
  <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
    <span class="font-bold">Logo</span>
    <ul class="hidden gap-6 md:flex">
      <li>Home</li><li>Projects</li><li>Contact</li>
    </ul>
  </nav>
</header>

<!-- HERO: mobile par column, md par row -->
<section class="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-12 md:flex-row md:py-20">
  <div class="flex-1">
    <h1 class="text-3xl font-bold md:text-5xl">Heading</h1>
    <p class="mt-4 text-gray-600">Text</p>
  </div>
  <img src="..." alt="" class="aspect-video w-full flex-1 rounded-xl object-cover md:w-1/2" />
</section>

<!-- CARDS: grid, 1 / 2 / 3 columns -->
<section class="mx-auto max-w-6xl px-4 py-12">
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div class="relative rounded-xl border p-6">
      <span class="absolute right-3 top-3 text-xs">New</span>
      <h3 class="font-semibold">Card</h3>
    </div>
    <!-- repeat -->
  </div>
</section>

<!-- FOOTER -->
<footer class="border-t py-6 text-center text-sm">© 2026</footer>
```

Rule: row hai to `flex`, jaal hai to `grid`, size ki limit hai to `max-w`, kisi cheez ke upar chipkana hai to `absolute`.

## 11. Bina baar baar browser dekhe check karna

1. Code likhne se pehle har box ka type (row/column/grid) tree mein likh lo.
2. Ek hi jagah responsive mode (DevTools, Ctrl+Shift+M) mein mobile, tablet, laptop dekho.
3. Gadbad ho to temporary `outline outline-red-500` lagao taake box ki asli hadd dikhe.
4. DevTools ke box model diagram se dekho ke jagah padding ne li, margin ne, ya size ne.

## 12. Practice ka order

1. **Flexbox Froggy** (flex samajhne ke liye)
2. **Grid Garden** (grid)
3. Ek real page (navbar + hero + cards + footer) isi sequence se banao, bina copy paste ke.
