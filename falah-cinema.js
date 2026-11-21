const moviesData = [
{title:"كثيب: الجزء الثاني",subtitle:"Dune: Part Two",type:"فيلم",year:"2024",rating:"8.8",quality:"4K IMAX",genre:"خيال علمي • ملحمة • مغامرة",poster:"https://image.tmdb.org/t/p/w780/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",description:"يتحد بول أتريدس مع تشاني والفريمن في رحلة انتقام مصيرية ضد المتآمرين الذين دمروا عائلته."},
{title:"أوبنهايمر",subtitle:"Oppenheimer",type:"فيلم",year:"2023",rating:"8.6",quality:"4K HDR",genre:"سيرة ذاتية • دراما • تاريخ",poster:"https://image.tmdb.org/t/p/w780/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",description:"قصة العالم الأمريكي جيه روبرت أوبنهايمر ودوره في تطوير القنبلة الذرية."},
{title:"بين النجوم",subtitle:"Interstellar",type:"فيلم",year:"2014",rating:"9.0",quality:"4K UHD",genre:"خيال علمي • فضاء • دراما",poster:"https://image.tmdb.org/t/p/w780/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",description:"فريق من المستكشفين يسافر عبر ثقب دودي في الفضاء لضمان بقاء البشرية."},
{title:"فارس الظلام",subtitle:"The Dark Knight",type:"فيلم",year:"2008",rating:"9.1",quality:"4K HDR",genre:"أكشن • جريمة • إثارة",poster:"https://image.tmdb.org/t/p/w780/qJ2tW6WMUDux911r6m7haRef0WH.jpg",description:"يواجه باتمان الجوكر في أعظم اختبار نفسي وجسدي لقدرته على تحقيق العدالة."},
{title:"اختلال ضال",subtitle:"Breaking Bad",type:"مسلسل",year:"2013",rating:"9.5",quality:"4K FULL",genre:"جريمة • دراما • تشويق",poster:"https://image.tmdb.org/t/p/w780/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",description:"مدرس كيمياء يكتشف إصابته بالسرطان، فتتغير حياته بصورة خطيرة."},
{title:"آخرنا",subtitle:"The Last of Us",type:"مسلسل",year:"2023",rating:"8.9",quality:"4K DOLBY",genre:"دراما • بقاء • مغامرة",poster:"https://image.tmdb.org/t/p/w780/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",description:"ناجٍ متمرس يرافق فتاة مراهقة في رحلة محفوفة بالمخاطر بعد انهيار الحضارة."},
{title:"سبايدرمان: عبر عالم العنكبوت",subtitle:"Spider-Man: Across the Spider-Verse",type:"فيلم",year:"2023",rating:"8.7",quality:"4K HDR",genre:"أنيميشن • أكشن • مغامرة",poster:"https://image.tmdb.org/t/p/w780/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",description:"ينطلق مايلز موراليس في مغامرة عبر الأكوان المتعددة."},
{title:"الاستهلال",subtitle:"Inception",type:"فيلم",year:"2010",rating:"8.8",quality:"4K UHD",genre:"خيال علمي • أكشن • غموض",poster:"https://image.tmdb.org/t/p/w780/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",description:"لص محترف يتسلل إلى الأحلام لسرقة الأسرار وزرع فكرة داخل عقل هدفه."},
{title:"صراع العروش",subtitle:"Game of Thrones",type:"مسلسل",year:"2019",rating:"9.2",quality:"4K HDR",genre:"فانتازيا • دراما • ملحمة",poster:"https://image.tmdb.org/t/p/w780/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",description:"تتصارع العائلات النبيلة للسيطرة على ويستروس مع عودة عدو قديم."},
{title:"باتمان",subtitle:"The Batman",type:"فيلم",year:"2022",rating:"8.1",quality:"4K DOLBY",genre:"جريمة • غموض • أكشن",poster:"https://image.tmdb.org/t/p/w780/74xTEgt7R36Fpooo50r9T25onhq.jpg",description:"يكشف باتمان الفساد المستشري في مدينة جوثام أثناء مطاردته للريدلر."},
{title:"أشياء غريبة",subtitle:"Stranger Things",type:"مسلسل",year:"2024",rating:"8.7",quality:"4K HDR",genre:"خيال علمي • رعب • غموض",poster:"https://image.tmdb.org/t/p/w780/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",description:"اختفاء صبي في بلدة هادئة يكشف تجارب سرية وقوى خارقة مرعبة."},
{title:"جون ويك: الفصل الرابع",subtitle:"John Wick: Chapter 4",type:"فيلم",year:"2023",rating:"8.2",quality:"4K IMAX",genre:"أكشن • إثارة • جريمة",poster:"https://image.tmdb.org/t/p/w780/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",description:"يبحث جون ويك عن طريق لهزيمة المجلس الأعلى واستعادة حريته."},
{title:"آل التنين",subtitle:"House of the Dragon",type:"مسلسل",year:"2024",rating:"8.5",quality:"4K HDR",genre:"فانتازيا • أكشن • دراما",poster:"https://image.tmdb.org/t/p/w780/t9XkeE7HzOsdQcDDDapDYh8Rrmt.jpg",description:"تاريخ عائلة تارجارين وبداية الحرب الأهلية المعروفة برقصة التنانين."},
{title:"توب غان: مافريك",subtitle:"Top Gun: Maverick",type:"فيلم",year:"2022",rating:"8.4",quality:"4K IMAX",genre:"أكشن • دراما • طيران",poster:"https://image.tmdb.org/t/p/w780/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",description:"يعود بيت ميتشل لتدريب نخبة من الطيارين لمهمة مستحيلة."},
{title:"المنتقمون: نهاية اللعبة",subtitle:"Avengers: Endgame",type:"فيلم",year:"2019",rating:"8.5",quality:"4K UHD",genre:"أكشن • خيال علمي • مغامرة",poster:"https://image.tmdb.org/t/p/w780/or06FN3Dka5tukK1e9sl16pB3iy.jpg",description:"يجتمع الأبطال المتبقون لمحاولة عكس الدمار الذي سببه ثانوس."},
{title:"بيكي بلايندرز",subtitle:"Peaky Blinders",type:"مسلسل",year:"2022",rating:"8.8",quality:"4K HDR",genre:"جريمة • دراما • تاريخي",poster:"https://image.tmdb.org/t/p/w780/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",description:"ملحمة عائلة شيلبي العصابية في مدينة برمنغهام الإنجليزية."},
{title:"جوكر",subtitle:"Joker",type:"فيلم",year:"2019",rating:"8.5",quality:"4K HDR",genre:"جريمة • دراما • إثارة",poster:"https://image.tmdb.org/t/p/w780/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",description:"يتحول آرثر فليك تدريجياً إلى رمز للفوضى والجريمة في مدينة جوثام."},
{title:"المندلوري",subtitle:"The Mandalorian",type:"مسلسل",year:"2023",rating:"8.7",quality:"4K DOLBY",genre:"خيال علمي • مغامرة • أكشن",poster:"https://image.tmdb.org/t/p/w780/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",description:"مغامرات صائد جوائز وحيد في أقاصي المجرة أثناء حمايته لكائن صغير غامض."}
];

(() => {
const root = document.getElementById("falah-movie-slider-section");
if (!root) return;

const $ = id => root.querySelector("#" + id);
const fallback = "https://placehold.co/400x600/071326/38c5ff?text=FALAH+STORE";
let current = 0;
let playing = true;
let paused = false;
let start = 0;
const duration = 4500;

const poster = $("featured-poster-img");
const backdrop = $("stage-backdrop-img");
const track = $("posters-carousel-track");
const dots = $("pagination-indicators");
const progress = $("slide-progress-bar");

function safeImage(img, url) {
img.onerror = () => { img.onerror = null; img.src = fallback; };
img.src = url;
}

function render() {
track.replaceChildren();
dots.replaceChildren();
moviesData.forEach((movie, i) => {
const card = document.createElement("button");
card.type = "button";
card.className = "poster-card cinema-thumb";
card.setAttribute("aria-label", movie.title);
const img = document.createElement("img");
img.alt = movie.title;
img.loading = "lazy";
safeImage(img, movie.poster);
const label = document.createElement("span");
label.textContent = movie.title;
card.append(img, label);
card.addEventListener("click", () => go(i));
track.append(card);

const dot = document.createElement("button");
dot.type = "button";
dot.className = "cinema-dot";
dot.setAttribute("aria-label", "الشريحة " + (i + 1));
dot.addEventListener("click", () => go(i));
dots.append(dot);
});
$("total-count-badge").textContent = moviesData.length + " عمل سينمائي";
}

function update() {
const m = moviesData[current];
safeImage(poster, m.poster);
safeImage(backdrop, m.poster);
$("featured-type-badge").textContent = m.type;
$("featured-quality-badge").textContent = m.quality;
$("featured-rating").textContent = m.rating;
$("featured-slide-counter").textContent = String(current + 1).padStart(2,"0") + " / " + String(moviesData.length).padStart(2,"0");
$("featured-year").textContent = m.year;
$("featured-genre").textContent = m.genre;
$("featured-title").textContent = m.title;
$("featured-subtitle").textContent = m.subtitle;
$("featured-desc").textContent = m.description;
[...track.children].forEach((el, i) => el.classList.toggle("active", i === current));
[...dots.children].forEach((el, i) => el.classList.toggle("active", i === current));
const active = track.children[current];
if (active) active.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"});
start = performance.now();
progress.style.width = "0%";
}

function go(index) {
current = (index + moviesData.length) % moviesData.length;
update();
}
function next() { go(current + 1); }
function previous() { go(current - 1); }

$("next-slide-btn").addEventListener("click", next);
$("prev-slide-btn").addEventListener("click", previous);

$("toggle-autoplay-btn").addEventListener("click", () => {
playing = !playing;
$("autoplay-icon").textContent = playing ? "Ⅱ" : "▶";
$("autoplay-label").textContent = playing ? "تلقائي" : "متوقف";
});

root.addEventListener("mouseenter", () => paused = true);
root.addEventListener("mouseleave", () => paused = false);

let touchX = 0;
root.addEventListener("touchstart", e => { touchX = e.changedTouches[0].screenX; }, {passive:true});
root.addEventListener("touchend", e => {
const diff = e.changedTouches[0].screenX - touchX;
if (Math.abs(diff) > 45) diff < 0 ? next() : previous();
}, {passive:true});

$("watch-now-btn").addEventListener("click", () => {
$("falah-toast-msg").textContent = "للمشاهدة تواصل مع فلاح ستور واشترك بالخدمة";
$("falah-toast").classList.add("show");
setTimeout(() => $("falah-toast").classList.remove("show"), 2800);
});
$("details-btn").addEventListener("click", () => {
const m = moviesData[current];
$("falah-toast-msg").textContent = m.title + " • " + m.year + " • " + m.rating + "/10";
$("falah-toast").classList.add("show");
setTimeout(() => $("falah-toast").classList.remove("show"), 2800);
});

function frame(now) {
if (!start) start = now;
if (playing && !paused) {
const elapsed = now - start;
progress.style.width = Math.min(100, elapsed / duration * 100) + "%";
if (elapsed >= duration) next();
}
requestAnimationFrame(frame);
}

render();
update();
requestAnimationFrame(frame);
})();
