# 🎨 TAILWIND CSS COMPLETE MASTER GUIDE (Designers to Developers)

> **Is Guide ko Kaise Istemal Karein:**  
> Yeh file khaas tor par un logon ke liye banayi gayi hai jo **Photoshop, Illustrator, Word, aur PowerPoint** pehle se jante hain. Jab bhi aapko koi component (Navbar, Card, Form, Sidebar, Modal, Grid) banana ho, bas `Cmd + F` (ya `Ctrl + F`) daba kar uska naam likhein aur classes utha lein.

---

## 📑 TABLE OF CONTENTS (Index)
1. [Do Divs ka Khel (Parent + Child Master Combinations)](#1-do-divs-ka-khel-parent--child-master-combinations)
2. [Flexbox ki Mukammal Tafseel (Sirf Flex vs Combinations)](#2-flexbox-ki-mukammal-tafseel-sirf-flex-vs-combinations)
3. [Grid System (Galleries, Cards & Dashboards)](#3-grid-system-galleries-cards--dashboards)
4. [Size, Width, Height & Artboard Rules](#4-size-width-height--artboard-rules)
5. [Spacing: Padding (Andar) aur Margin (Bahar)](#5-spacing-padding-andar-aur-margin-bahar)
6. [Positioning & Layers (Photoshop Layers ki Tarah)](#6-positioning--layers-photoshop-layers-ki-tarah)
7. [Typography (MS Word & PowerPoint Text Formatting)](#7-typography-ms-word--powerpoint-text-formatting)
8. [Colors, Gradients, Borders & Shadows (Illustrator Styling)](#8-colors-gradients-borders--shadows-illustrator-styling)
9. [Images, Videos & Aspect Ratio Control](#9-images-videos--aspect-ratio-control)
10. [Responsive Design (Mobile, Tablet, Laptop Screen Sizes)](#10-responsive-design-mobile-tablet-laptop-screen-sizes)
11. [Interactive States & Animations (Hover, Focus, Group Hover)](#11-interactive-states--animations-hover-focus-group-hover)
12. [Ready-to-Use UI Recipes (Copy-Paste Components)](#12-ready-to-use-ui-recipes-copy-paste-components)

---

## 1. Do Divs ka Khel (Parent + Child Master Combinations)

Illustrator mein jaise ek **Outer Frame (Group)** hota hai aur uske andar **Objects** hotay hain, web design mein kuch cheezein aisi hain jo akele div se nahi bantin—unke liye **Parent Div** aur **Child Div** dono par classes lagani parti hain:

### A. Screen ke Bilkul Beech mein Koi Box Lana (Perfect Center)
* **Parent Div par:** `min-h-screen flex justify-center items-center`
  * *Wajah:* `min-h-screen` parent ko poori screen jitna lamba karta hai, `flex` alignment chalu karta hai, `justify-center` left-right se center karta hai, aur `items-center` upar-neeche se center karta hai.
* **Child Div par:** `w-full max-w-md p-6`
  * *Wajah:* Child apni chaudai (width) set kar ke bilkul screen ke center mein ruk jata hai.

### B. Image ke Upar Badge ya Text Likhna (Overlay / Layering)
* **Parent Div par:** `relative w-64 h-64`
  * *Wajah:* `relative` ek boundary wall bana deta hai taake andar wali cheez is box se bahar na bhage.
* **Child 1 (`<img>`):** `w-full h-full object-cover`
  * *Wajah:* Image poore box ko bhar deti hai.
* **Child 2 (Badge `<span>`):** `absolute top-3 right-3 bg-red-600 text-white px-2 py-1 text-xs rounded`
  * *Wajah:* `absolute` is badge ko hawa mein utha kar parent ke top-right konay par chipka deta hai.

### C. Sidebar + Main Content Layout (Dashboard ki Tarah)
* **Parent Div par:** `flex min-h-screen`
  * *Wajah:* Sidebar aur Main Content ko ek hi row mein aamne-saamne rakhta hai.
* **Child 1 (Sidebar):** `w-64 bg-gray-900 text-white`
  * *Wajah:* Sidebar ki chaudai 256px (`w-64`) fix kar di.
* **Child 2 (Main Screen):** `flex-1 bg-gray-100 p-8`
  * *Wajah:* `flex-1` ka matlab hai *"Sidebar ke baad screen ki jitni bhi bachi hui jagah hai, woh saari main gher loon"*.

### D. Card mein Footer/Button ko Hamesha Neeche Chipkana
* **Parent Card Div par:** `flex flex-col justify-between h-96 p-5 border rounded-xl`
  * *Wajah:* Card ki height fix (`h-96`) hai aur `justify-between` upar wale text ko top par aur neeche wale button ko bottom par dhakel deta hai.
* **Child 1 (Title + Description Wrapper):** `<div>...</div>` (Yeh top par rahega).
* **Child 2 (Button):** `<button>...</button>` (Yeh hamesha card ke bilkul neeche chipka rahega, chahe text kam ho ya zyada).

### E. Parent par Hover Karne se Child ka Rang Badalna (`group` + `group-hover`)
* **Parent Div par:** `group p-6 bg-white hover:bg-blue-600 rounded-xl`
  * *Wajah:* `group` poore card ko ek group bana deta hai.
* **Child Heading par:** `text-gray-900 group-hover:text-white`
  * *Wajah:* Jab aap card ke kisi bhi hissay par mouse layenge, toh heading khud-ba-khud white ho jayegi.

---

## 2. Flexbox ki Mukammal Tafseel (Sirf Flex vs Combinations)

Flexbox ko samajhne ke liye har class ka akela aur mil kar kaam dekhein:

| Class Combination | Kya Hota Hai (Asar) | Kab aur Kahan Use Karein |
| :--- | :--- | :--- |
| **`flex`** (Akela) | Andar ke saare items ek **horizontal line (Row)** mein left side se chipak kar khare ho jate hain. | Jab 2-3 icons ya buttons ko ek line mein lana ho. |
| **`flex flex-col`** | Items ki direction badal jati hai; ab woh **upar se neeche (Column)** ek ke neeche ek aate hain. | Forms, Cards, ya Mobile menus ke andar items rakhne ke liye. |
| **`flex justify-start`** | Saare items row ke **shuru (Left)** mein rehte hain (Default). | Normal left-aligned lists ke liye. |
| **`flex justify-center`** | Saare items row ke **bilkul darmiyan (Horizontal Center)** mein aa jate hain. | Pagination buttons ya hero section ke buttons center karne ke liye. |
| **`flex justify-end`** | Saare items row ke **aakhir (Right)** mein chale jate hain. | Modal ke "Cancel / Save" buttons ko right corner par bhejne ke liye. |
| **`flex justify-between`** | Pehla item **bilkul left** par, aakhri item **bilkul right** par, aur beech walon mein barabar fasla. | **Navbar** (Logo left par, Menu links right par). |
| **`flex justify-around`** | Har item ke left aur right par barabar khali jagah chori jati hai. | Stats ya features icons ko barabar phailane ke liye. |
| **`flex items-start`** | Items upar ki line (**Top**) se chipak kar align hotay hain. | Jab ek item chota ho aur doosra lamba, aur dono ko top se barabar rakhna ho. |
| **`flex items-center`** | Items upar-neeche se **bilkul darmiyan (Vertical Middle)** mein aa jate hain. | Icon aur Text ko ek line mein bilkul seedha rakhne ke liye. |
| **`flex items-end`** | Items neeche ki line (**Bottom**) se chipak kar align hotay hain. | Price tag (e.g. `$99` bara aur `/month` chota) ko neeche se align karne ke liye. |
| **`flex flex-wrap`** | Agar ek line mein jagah khatam ho jaye toh items katne ke bajaye **agli line mein** chale jate hain. | Tags, chips, ya filter buttons ki list ke liye. |
| **`gap-2`, `gap-4`, `gap-8`** | Flex ke andar har item ke darmiyan saaf suthra fasla dalta hai (`gap-4` = 16px). | Har `flex` container ke saath lazmi lagayein taake items aapas mein na chipkein. |

---

## 3. Grid System (Galleries, Cards & Dashboards)

Jab aapko **Rows aur Columns (Tables/Cards)** banane hon toh `flex` ke bajaye `grid` zyada aasaan hota hai:

* **Grid Chalu Karna:** `grid`
* **Columns Banana:**
  * `grid-cols-1` (1 Column)
  * `grid-cols-2` (2 Barabar Columns)
  * `grid-cols-3` (3 Barabar Columns)
  * `grid-cols-4` (4 Barabar Columns)
  * `grid-cols-12` (12 Columns — Complex layouts ke liye)
* **Columns ke Darmiyan Fasla:** `gap-4` (har taraf se), `gap-x-6` (sirf left-right), `gap-y-4` (sirf upar-neeche).
* **Kisi Ek Item ko Zyada Jagah Dena (Span):**
  * `col-span-2` (Yeh item 2 columns ki jagah akela lega).
  * `col-span-full` (Yeh item poori row ki jagah lega).

---

## 4. Size, Width, Height & Artboard Rules

Tailwind mein numbers ka ek aasaan formula hai: **Number × 4 = Pixels** (Maslan `w-4` = `16px`, `w-10` = `40px`).

### Width (Chaudai)
* **Fixed Sizes:** `w-4` (16px), `w-8` (32px), `w-12` (48px), `w-20` (80px), `w-40` (160px), `w-64` (256px), `w-96` (384px).
* **Percentage Widths:**
  * `w-full` (100% — Parent jitni poori width)
  * `w-1/2` (50% — Aadhi width)
  * `w-1/3` (33.3%), `w-2/3` (66.6%)
  * `w-1/4` (25%), `w-3/4` (75%)
* **Screen Width:** `w-screen` (Poori monitor/mobile screen ki width).
* **Auto / Content Jitni:** `w-fit` (Jitna andar text hai, bas utni hi width lega).
* **Max Width (Container ke liye):** `max-w-sm` (384px), `max-w-md` (448px), `max-w-lg` (512px), `max-w-xl` (576px), `max-w-4xl` (896px), `max-w-6xl` (1152px), `max-w-7xl` (1280px).

### Height (Unchai)
* **Fixed Sizes:** `h-8` (32px), `h-10` (40px — Buttons/Inputs ke liye best), `h-16` (64px — Navbar ke liye best), `h-64` (256px).
* **Full / Screen Height:**
  * `h-full` (Parent jitni 100% height).
  * `h-screen` (Monitor screen jitni 100% height).
  * `min-h-screen` (Kam az kam screen jitni height, agar content zyada ho toh barh sakti hai).

---

## 5. Spacing: Padding (Andar) aur Margin (Bahar)

* **Padding (`p`):** Box ki border aur andar ke text ke darmiyan jagah.
* **Margin (`m`):** Box ki border se bahar doosre box ke darmiyan fasla.

| Direction | Padding Class | Margin Class | Matlab |
| :--- | :--- | :--- | :--- |
| **Charon Taraf** | `p-4` | `m-4` | Top, Bottom, Left, Right har taraf 16px. |
| **Left & Right (X-axis)** | `px-6` | `mx-6` | Left aur Right dono taraf 24px. |
| **Top & Bottom (Y-axis)** | `py-3` | `my-3` | Upar aur Neeche dono taraf 12px. |
| **Sirf Upar (Top)** | `pt-4` | `mt-4` | Sirf upar se 16px. |
| **Sirf Neeche (Bottom)** | `pb-4` | `mb-4` | Sirf neeche se 16px. |
| **Sirf Left** | `pl-4` | `ml-4` | Sirf left se 16px. |
| **Sirf Right** | `pr-4` | `mr-4` | Sirf right se 16px. |
| **Center Karna** | — | `mx-auto` | Kisi fixed-width box ko left-right se center mein lana. |

---

## 6. Positioning & Layers (Photoshop Layers ki Tarah)

* **`static`:** Normal behavior (Default).
* **`relative`:** Apni asli jagah par rehte hue child elements ke liye boundary banna.
* **`absolute`:** Parent (`relative`) ke andar hawa mein tairna. Iske saath position batani parti hai:
  * `top-0`, `bottom-0`, `left-0`, `right-0` (Bilkul konay par).
  * `top-4`, `right-4` (Konay se 16px andar).
  * `inset-0` (`top-0 right-0 bottom-0 left-0` — Poore parent ko dhamp lena, jaise dark overlay).
* **`fixed`:** Screen ke kisi hissay par hamesha ke liye chipak jana (Scroll karne par bhi nahi hilta — jaise Chat button ya Modal).
* **`sticky top-0`:** Shuru mein normal rehta hai, lekin scroll kar ke jab screen ke top par pahunche toh wahin chipak jata hai (Modern Navbar ke liye best).
* **Z-Index (Layer Order):** `z-0`, `z-10`, `z-20`, `z-50` (Jiska number bara hoga woh layer sab se upar dikhegi).

---

## 7. Typography (MS Word & PowerPoint Text Formatting)

### Font Size
* `text-xs` (12px — Chotay labels/badges)
* `text-sm` (14px — Secondary text/buttons)
* `text-base` (16px — Normal paragraph)
* `text-lg` (18px), `text-xl` (20px)
* `text-2xl` (24px), `text-3xl` (30px — Section Headings)
* `text-4xl` (36px), `text-5xl` (48px), `text-6xl` (60px — Hero Banner Headings)

### Font Weight (Motai)
* `font-thin` (100), `font-light` (300), `font-normal` (400)
* `font-medium` (500 — Buttons aur nav links ke liye best)
* `font-semibold` (600 — Subheadings ke liye best)
* `font-bold` (700 — Headings ke liye), `font-extrabold` (800)

### Text Styling & Alignment
* **Alignment:** `text-left`, `text-center`, `text-right`, `text-justify`
* **Transform:** `uppercase` (SAB BARE HURUF), `lowercase` (sab chotay), `capitalize` (Har Lafz Ka Pehla Harf Bara)
* **Decoration:** `underline`, `line-through` (Kata hua text, jaise purani price), `no-underline`
* **Line Height (Lines ke darmiyan gap):** `leading-tight` (Headings), `leading-normal`, `leading-relaxed` (Paragraphs)
* **Letter Spacing:** `tracking-tight`, `tracking-normal`, `tracking-wide`, `tracking-widest`
* **Text Overflow (Lamba text katna):**
  * `truncate` (Ek line ke baad text khud `...` ban jayega).
  * `line-clamp-2` (2 lines ke baad `...` ban jayega — Blog cards ke liye best).

---

## 8. Colors, Gradients, Borders & Shadows (Illustrator Styling)

### Colors ka System
Har rang ke saath **50 se 950** tak numbers hotay hain (`50` sab se halka, `500` asli rang, `950` sab se gehra):
* **Text Color:** `text-gray-800`, `text-blue-600`, `text-red-500`, `text-emerald-600`
* **Background Color:** `bg-white`, `bg-black`, `bg-slate-900`, `bg-blue-50` (halka neela)
* **Opacity (Halka karna):** `bg-black/50` (50% transparent black), `text-white/80` (80% visible white)

### Gradients
* `bg-gradient-to-r from-blue-600 to-indigo-600` (Left se Right gradient)
* `bg-gradient-to-br from-purple-600 via-pink-500 to-red-500` (Top-Left se Bottom-Right 3 rangon ka gradient)

### Borders (Stroke)
* **Border Lagana:** `border` (1px), `border-2` (2px), `border-4` (4px)
* **Sirf Ek Taraf Border:** `border-t` (Top), `border-b` (Bottom), `border-l` (Left), `border-r` (Right)
* **Border Color:** `border-gray-200`, `border-blue-500`
* **Border Style:** `border-solid`, `border-dashed` (File upload box ke liye best), `border-dotted`

### Border Radius (Konay Gol Karna)
* `rounded-none` (Bilkul chokor)
* `rounded-sm`, `rounded` (4px), `rounded-md` (6px), `rounded-lg` (8px — Buttons/Inputs)
* `rounded-xl` (12px), `rounded-2xl` (16px — Cards)
* `rounded-full` (9999px — Poora Gol Circle ya Pill Button)

### Shadows & Effects
* **Drop Shadow:** `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`
* **Blur (Glassmorphism):** `bg-white/20 backdrop-blur-lg`
* **Opacity:** `opacity-0` (Ghayab), `opacity-50` (Aadha halka), `opacity-100` (Poora wazeh)

---

## 9. Images, Videos & Aspect Ratio Control

* **`object-cover`:** Image ko khinchay ya pichkay bina poore box mein fit karta hai (Faltu hissa crop ho jata hai).
* **`object-contain`:** Poori image ko box ke andar dikhata hai bina kate (Logos ke liye best).
* **`aspect-square`:** Box ko hamesha `1:1` (Square) rakhta hai.
* **`aspect-video`:** Box ko hamesha `16:9` (YouTube video size) rakhta hai.
* **`overflow-hidden`:** Parent box se bahar nikalti hui image ya konon ko kaat deta hai.

---

## 10. Responsive Design (Mobile, Tablet, Laptop Screen Sizes)

Tailwind **Mobile-First** hai. Jo class bina prefix ke likhi jati hai woh **Mobile** par chalti hai, aur bari screens ke liye prefix lagate hain:

* **(Bina prefix):** Mobile (`0px` aur upar)
* **`sm:`** Bari Mobile / Choti Tablet (`640px`+)
* **`md:`** Tablet / iPad (`768px`+)
* **`lg:`** Laptop (`1024px`+)
* **`xl:`** Bara Monitor (`1280px`+)

**Misal (Responsive Grid & Text):**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">Responsive Heading</h1>
</div>
```
*(Mobile par 1 column aur chota text, Tablet par 2 columns, aur Laptop par 4 columns aur bara text!)*

---

## 11. Interactive States & Animations (Hover, Focus, Group Hover)

* **`hover:`** Mouse upar le jane par: `hover:bg-blue-700 hover:scale-105`
* **`focus:`** Input field par click karne par: `focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`
* **`active:`** Button dabate waqt: `active:scale-95`
* **`disabled:`** Jab button band ho: `disabled:opacity-50 disabled:cursor-not-allowed`
* **Smooth Transition:** `transition-all duration-300 ease-in-out` (Har tabdeeli ko jhatke ke bajaye smooth banata hai).
* **Built-in Animations:**
  * `animate-spin` (Loading spinner ghumane ke liye)
  * `animate-pulse` (Skeleton loading effect ke liye)
  * `animate-bounce` (Arrow ya icon ko uchalne ke liye)

---

## 12. Ready-to-Use UI Recipes (Copy-Paste Components)

### 1. Professional Navbar (Sticky + Glass Effect)
```html
<nav class="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200">
  <div class="text-2xl font-bold text-blue-600">BrandName</div>
  <div class="hidden md:flex items-center gap-8 text-gray-600 font-medium">
    <a href="#" class="hover:text-blue-600 transition">Home</a>
    <a href="#" class="hover:text-blue-600 transition">Posts</a>
    <a href="#" class="hover:text-blue-600 transition">Dashboard</a>
  </div>
  <button class="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition cursor-pointer">
    Login
  </button>
</nav>
```

### 2. Blog / Product Card (Image + Badge + Hover Effect)
```html
<div class="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
  <div class="relative h-48 w-full overflow-hidden">
    <img src="image.jpg" alt="Cover" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
    <span class="absolute top-3 left-3 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
      Featured
    </span>
  </div>
  <div class="p-5">
    <h3 class="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition truncate">
      Card ka Title Yahan Aayega
    </h3>
    <p class="mt-2 text-sm text-gray-600 line-clamp-2">
      Yeh card ki mukhtasir tafseel hai jo 2 lines ke baad khud hi dots ban jayegi.
    </p>
  </div>
</div>
```

### 3. Center Login / Signup Form Card
```html
<div class="min-h-screen flex justify-center items-center bg-gray-100 px-4">
  <div class="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
    <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
    <form class="flex flex-col gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" placeholder="you@example.com" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input type="password" placeholder="••••••••" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <button type="submit" class="w-full py-2.5 mt-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold rounded-lg transition cursor-pointer">
        Sign In
      </button>
    </form>
  </div>
</div>
```

### 4. Popup Modal (Screen ke Beech mein Overlay ke Saath)
```html
<div class="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-xs p-4">
  <div class="w-full max-w-lg bg-white rounded-2xl p-6 shadow-2xl">
    <div class="flex justify-between items-center border-b pb-3 mb-4">
      <h3 class="text-xl font-bold text-gray-900">Modal Title</h3>
      <button class="text-gray-400 hover:text-gray-700 text-2xl cursor-pointer">&times;</button>
    </div>
    <p class="text-gray-600 mb-6">Kya aap waqai is post ko delete karna chahte hain?</p>
    <div class="flex justify-end gap-3">
      <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer">Cancel</button>
      <button class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg cursor-pointer">Delete</button>
    </div>
  </div>
</div>
```
