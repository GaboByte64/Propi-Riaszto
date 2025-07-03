const warningSites = [
  // Országos, centrális
  "www.origo.hu",
  "www.mandiner.hu",
  "makronom.mandiner.hu",
  "www.magyarnemzet.hu",
  "www.vilaggazdasag.hu",
  "www.szabadfold.hu",
  "www.borsonline.hu",
  "www.figyelo.hu",
  "www.nemzetisport.hu",
  "hirado.hu",
  "hirvilag.hu",
  "www.888.hu",
  "www.pestisracok.hu",
  "www.vadhajtasok.hu",
  "www.kontra.hu",
  "www.bennfentes.hu",
  "ripost.hu",
  "www.life.hu",
  "www.she.hu",
  "www.mainap.hu",
  "www.hirnyolc.hu",
  "www.csupasport.hu",
  "www.sportslife.hu",
  "www.unilife.hu",
  "www.sulilife.hu",
  "www.newsfedd.hu",  
  "www.m4sport.hu",
  "www.m1.hu",
  "www.kemma.hu",          
  "www.beol.hu",           
  "www.delmogyar.hu",      
  "www.szegedma.hu",
  "www.duol.hu",          
  "www.boon.hu",            
  "www.haon.hu",       
  "www.heol.hu",           
  "www.feol.hu",           
  "www.bama.hu",          
  "www.szoljon.hu",         
  "www.szon.hu",            
  "www.kisalfold.hu",       
  "www.veol.hu",            
  "www.nool.hu",            
  "www.baon.hu",            
  "www.sonline.hu",       
  "www.teol.hu",            
  "www.vaol.hu",            
  "www.zaol.hu",         
  "www.metropol.hu",
  "www.lokal.hu",
  "www.24ora.hu",
  "www.hirtv.hu",
  "www.tv2.hu",
  "www.retroradio.hu",
  "www.karcfm.hu",
  "www.classfm.hu",
  "www.radió1.hu",
  "www.v4na.com",
  "www.city7.hu",
  "www.fourfourtwo.hu",
  "www.fanny.hu",
  "www.nso.hu",          
];


function showWarning() {
  const overlay = document.createElement("div");
  overlay.style = `
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: rgba(255, 255, 0, 0.95);
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    font-family: sans-serif;
    text-align: center;
    padding: 20px;
  `;
  
  overlay.innerHTML = `
    <p style="font-size: 18px; max-width: 600px;text-align: left;">
      Kedves Látogató!<br><br>
      Ön éppen egy kormányzati támogatásban részesülő weboldalt készül megnyitni.<br><br>
      Kérjük, erősítse meg, hogy tisztában van azzal, hogy az oldalon található tartalmak propagandát tartalmazhatnak, valamint azok gyűlöletkeltésre is alkalmasak lehetnek!<br><br>
    </p>
    <div style="margin-top: 20px;">
      <button id="confirm" style="margin-right: 40px; padding: 10px 20px;background-color:red;color: white;">Megerősítem!</button>
      <button id="cancel" style="padding: 10px 20px;background-color:green;color: white;">Meggondoltam magam!</button>
    </div>
  `;

  document.body.appendChild(overlay);

  document.getElementById("confirm").onclick = () => {
    overlay.remove();
  };

  document.getElementById("cancel").onclick = () => {
    history.back();
  };
}

const hostname = window.location.hostname.replace(/^www\./, "");
if (warningSites.map(site => site.replace(/^www\./, "")).includes(hostname)) {
  if (document.body) {
    showWarning();
  } else {
    window.addEventListener("DOMContentLoaded", showWarning);
  }
}
