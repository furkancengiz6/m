// Basit state ve ekran yönetimi
const screens = {
  s1: document.getElementById('screen-1'),
  s2: document.getElementById('screen-2'),
  s3: document.getElementById('screen-3'),
  s4: document.getElementById('screen-4')
}

const yesBtn = document.getElementById('yes-btn')
const noBtn = document.getElementById('no-btn')
const noNote = document.getElementById('no-note')

const cards = Array.from(document.querySelectorAll('.card'))
const ticketType = document.getElementById('ticket-type')
const ticketNote = document.getElementById('ticket-note')
const ticketNo = document.getElementById('ticket-no')
const restart = document.getElementById('restart')
const backTo1 = document.getElementById('back-to-1')
const backFromNo = document.getElementById('back-from-no')

let hayirCount = 0
let maxHayir = 7

const hayirSteps = [
  {btn:'Hayır', note:'Hmm, tam basacaktın...'},
  {btn:'Emin misin?', note:'Bir kere daha dener misin?'},
  {btn:'Gerçekten emin misin?', note:'Hayır\'ın özgüveni azalıyor.'},
  {btn:'Son kez soruyorum, emin misin??', note:'İstatistikler Evet’e işaret ediyor.'},
  {btn:'Bak pişman olacaksın...', note:'Hayır moralini toplamaya çalışıyor.'},
  {btn:'Tamam iyi düşün...', note:'Hayır pes etti. Son basışta sürpriz var 👇'},
  {btn:'Gerçekten Hayır', note:'(Kesin seçim)'}
]

function showScreen(id){
  Object.values(screens).forEach(s=>s.classList.remove('active'))
  id.classList.add('active')
}

// Hayır buton davranışları
function updateNo(){
  const step = Math.min(hayirCount, hayirSteps.length-1)
  noBtn.textContent = hayirSteps[step].btn
  noNote.textContent = hayirSteps[step].note
  // Evet büyümesi her tıklamada artar
  const scale = 1 + Math.min(hayirCount * 0.12, 0.6)
  yesBtn.style.transform = `scale(${scale})`
  if(hayirCount >= maxHayir){
    // Final: Hayır kazandı — Evet pes eder
    yesBtn.classList.add('grow-big')
    yesBtn.disabled = true
    noBtn.disabled = true
    setTimeout(()=> showFinalHayirWins(), 700)
  }
}

// Hover: eğer henüz final değilse kaç
noBtn.addEventListener('mouseenter', (e)=>{
  if(hayirCount >= maxHayir) return
  // taşıma: rastgele offset
  const parent = noBtn.parentElement.getBoundingClientRect()
  const container = document.querySelector('.container').getBoundingClientRect()
  const maxX = Math.max(0, container.width - 120)
  const maxY = Math.max(0, container.height - 40)
  const x = Math.floor(Math.random() * maxX)
  const y = Math.floor(Math.random() * maxY)
  noBtn.style.position = 'relative'
  noBtn.style.transform = `translate(${x - 20}px, ${y - 20}px)`
})

noBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  hayirCount = Math.min(hayirCount + 1, maxHayir)
  // Her tıklamada buton metni güncelle ve eveti büyüt
  updateNo()
})

function showFinalHayirWins(){
  // Evet "pes etti" animasyonu: küçülme ve devre dışı
  yesBtn.style.transition = 'transform .6s ease, opacity .5s'
  yesBtn.style.transform = 'scale(.6)'
  yesBtn.style.opacity = '0.6'
  // Göster final ekran
  showScreen(screens.s4)
}

// Evet: devam et -> seçim ekranı
yesBtn.addEventListener('click', ()=>{
  if(yesBtn.disabled) return
  // küçük lottie pulse effect (varsa)
  showScreen(screens.s2)
})

// Kart seçimi -> bilet
cards.forEach(c=> c.addEventListener('click', ()=>{
  const t = c.dataset.type
  const d = c.dataset.desc
  ticketType.textContent = t
  ticketNote.textContent = d
  ticketNo.textContent = (''+Math.floor(1000+Math.random()*9000))
  showScreen(screens.s3)
}))

restart.addEventListener('click', ()=>{
  // reset state
  hayirCount = 0
  yesBtn.disabled = false
  yesBtn.style.transform = ''
  yesBtn.classList.remove('grow-big')
  noBtn.style.transform = ''
  updateNo()
  showScreen(screens.s1)
})
backTo1.addEventListener('click', ()=> showScreen(screens.s1))
backFromNo.addEventListener('click', ()=>{
  // Kullanıcı fikrini değişirse sıfırla
  hayirCount = 0
  yesBtn.disabled = false
  yesBtn.style.opacity = '1'
  yesBtn.style.transform = ''
  noBtn.style.transform = ''
  updateNo()
  showScreen(screens.s1)
})

// başlangıç ayarı
updateNo()
// Erişilebilirlik: keyboard için son No butonu seçenekleri
noBtn.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter' || e.key === ' ') {
    e.preventDefault(); noBtn.click()
  }
})

// Küçük dokunuş: fare tekrar gelince notu güncelle
noBtn.addEventListener('mouseleave', ()=>{
  // reset küçük not pozisyonu için; görsel olarak temiz
  noBtn.style.transform = ''
})
