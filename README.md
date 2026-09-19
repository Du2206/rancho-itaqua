# Churrascaria Rancho Itaquá

No ar em <https://du2206.github.io/rancho-itaqua/>

Página de links do restaurante. Site estático, sem build: é só abrir o `index.html`.

## Estrutura

| Caminho | O que é |
| --- | --- |
| `index.html` | A página inteira (layout, textos e links) |
| `assets/` | Logo, ícones dos apps de delivery e a fonte Sora |
| `vendor/` | Runtime da página e o React, servidos daqui mesmo, sem CDN |
| `favicon.png` / `apple-touch-icon.png` | Ícone do site |

A página veio de um artifact exportado. O bundle de 724 KB foi desempacotado: as imagens, fontes e scripts que estavam embutidos em base64 viraram arquivos de verdade, então dá pra trocar uma imagem ou um link sem mexer no resto.

## Onde editar

Tudo fica no `index.html`:

- **Links dos botões**: nos `href` de cada `<a>` (cardápio digital, WhatsApp, iFood, Keeta, 99Food e eventos)
- **Endereço, telefone, @ do Instagram e o texto "Quem somos"**: no `data-props` do script no fim do arquivo
- **Horário de funcionamento**: no método `aberto()`, também no fim do arquivo. Os números são minutos desde a meia-noite (660 = 11h, 930 = 15h30). O aviso de aberto/fechado no topo se atualiza sozinho a cada minuto

## Publicar

Já está no GitHub Pages, servindo a branch `main` a partir da raiz. Todo `git push` na `main` republica o site sozinho, em cerca de um minuto.

Para usar domínio próprio, crie um arquivo `CNAME` na raiz com o domínio dentro e aponte o DNS para o GitHub.
