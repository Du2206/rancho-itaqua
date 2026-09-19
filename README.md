# Churrascaria Rancho Itaquá

Página de links (estilo Linktree) do restaurante. Site estático, sem build: é só abrir o `index.html`.

## Arquivos

| Arquivo | O que é |
| --- | --- |
| `index.html` | A página e a lista de links |
| `styles.css` | Visual (cores, botões, layout) |
| `script.js` | Horário de funcionamento, botão de compartilhar e ano do rodapé |
| `logo.png` | Logo branco (usado na página) |
| `logo-black.png` | Logo preto (reserva, para fundo claro) |
| `favicon.png` / `apple-touch-icon.png` | Ícone do site |

## O que precisa ser preenchido

Procure por `TROCAR` no `index.html` e no `script.js`. Cada link tem um comentário dizendo o que colocar:

- WhatsApp de pedidos e de eventos (formato `https://wa.me/55DDDNUMERO`)
- Link do cardápio
- Link do iFood
- Instagram e Facebook
- Google Maps
- Telefone fixo
- Endereço no rodapé
- Horários em `HORARIOS`, no começo do `script.js`

Enquanto um link não estiver configurado, o botão mostra a etiqueta laranja **ajustar link**. Para tirar a etiqueta, remova `is-pending` da classe do botão.

## Publicar

Serve em qualquer hospedagem estática. No GitHub Pages: suba o repositório, ative o Pages na branch `main` (pasta raiz) e, se for usar domínio próprio, crie um arquivo `CNAME` com o domínio dentro.
