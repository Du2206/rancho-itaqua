/* Horário de funcionamento. 0 = domingo ... 6 = sábado.
   Cada dia é uma lista de intervalos ["abre", "fecha"]. Dia fechado: []
   TROCAR: ajuste os horários reais do restaurante. */
const HORARIOS = {
  0: [["11:00", "16:00"]],
  1: [["11:00", "15:00"]],
  2: [["11:00", "15:00"]],
  3: [["11:00", "15:00"]],
  4: [["11:00", "15:00"]],
  5: [["11:00", "15:00"]],
  6: [["11:00", "16:00"]]
};

const DIAS = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

const emMinutos = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

const formataHora = (hhmm) => {
  const [h, m] = hhmm.split(":");
  return Number(m) === 0 ? `${Number(h)}h` : `${Number(h)}h${m}`;
};

function situacao(agora = new Date()) {
  const dia = agora.getDay();
  const minutos = agora.getHours() * 60 + agora.getMinutes();

  for (const [abre, fecha] of HORARIOS[dia] || []) {
    if (minutos >= emMinutos(abre) && minutos < emMinutos(fecha)) {
      return { aberto: true, texto: `Aberto agora · até ${formataHora(fecha)}` };
    }
  }

  for (let adiante = 0; adiante < 8; adiante++) {
    const d = (dia + adiante) % 7;
    for (const [abre] of HORARIOS[d] || []) {
      if (adiante === 0 && minutos >= emMinutos(abre)) continue;
      const quando = adiante === 0 ? "hoje" : adiante === 1 ? "amanhã" : DIAS[d];
      return { aberto: false, texto: `Fechado · abre ${quando} às ${formataHora(abre)}` };
    }
  }

  return null;
}

const status = document.getElementById("status");
const atual = situacao();
if (status && atual) {
  status.textContent = atual.texto;
  status.classList.add(atual.aberto ? "status--open" : "status--closed");
  status.hidden = false;
}

const ano = document.getElementById("ano");
if (ano) ano.textContent = new Date().getFullYear();

const share = document.getElementById("share");
if (share) {
  share.addEventListener("click", async () => {
    const dados = {
      title: "Churrascaria Rancho Itaquá",
      text: "Churrasco na brasa, buffet e eventos.",
      url: location.href
    };
    try {
      if (navigator.share) {
        await navigator.share(dados);
      } else {
        await navigator.clipboard.writeText(location.href);
        const antes = share.getAttribute("aria-label");
        share.setAttribute("aria-label", "Link copiado");
        share.title = "Link copiado";
        setTimeout(() => {
          share.setAttribute("aria-label", antes);
          share.title = "";
        }, 2000);
      }
    } catch (erro) {
      /* usuário cancelou ou o navegador bloqueou: nada a fazer */
    }
  });
}
