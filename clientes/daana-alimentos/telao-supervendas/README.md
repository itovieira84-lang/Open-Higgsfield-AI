# Telão do stand — Supervendas Sergipe 2026

Evento: 26 a 28/10/2026, Centro de Convenções AM Malls (Sergipe).
Telão: 6 m × 0,50 m, 1536 × 128 px (12 placas de 128 × 128, pitch de ~3,9 mm).

## Arquivos

- `daana_telao_40s_previa.mp4`: história completa, 40 s em loop (H.264, 30 fps).
- `daana_telao_15s_previa.mp4`: versão curta com marca, produtos e convite, 15 s em loop.
- `sheet_all.png`: quadros-chave das duas versões.
- `src/`: código da animação (`telao.html`) e script de render (`render.js`).

## Roteiro (40 s)

| Tempo | Cena | Texto |
| --- | --- | --- |
| 0–7 | Barro + sulco atravessando a tela, logo pequena | Toda história tem uma *raiz.* |
| 7–14 | O sulco leva ao retrato de Ana | A nossa tem nome: *Ana.* |
| 14–21 | O sulco vira prateleira, com utensílios em silhueta | Trabalho na terra. *Cuidado à mesa.* |
| 21–26,5 | Vermelho DAANA, prateleira creme com 8 produtos reais | Temperos e alimentos *DAANA* |
| 26,5–31,5 | Logo oficial | Leve a DAANA para a *sua loja.* |
| 31,5–36,5 | Janela de taipa que se abre na logo | Entre. A cozinha de Ana é *sua também.* |
| 36,5–40 | Logo + @daanaoficial, retorno ao barro | — |

## Regras aplicadas

- **Logo:** sempre o arquivo original. Sobre o vermelho, vai com contorno branco, como no card do Supervendas.
- **Produtos:** recortes das fotos reais da pasta "PRODUTOS" no Drive. Nada foi gerado por IA.
- **Fontes:** Playfair Display (bold e itálico) nos textos e Montserrat no @.

## Pendências

- **Ilustração de Ana:** a que está no vídeo é provisória, recortada do card. Substituir por `src/ana_placeholder.png` e remover a etiqueta "ILUSTRAÇÃO PROVISÓRIA".
- **Placa física da logo:** confirmar se a placa da logo fica na frente do centro do telão, conforme a planta.
- **Empresa do LED:** confirmar formato, fps e se aceita MP4.

## Como renderizar de novo

```bash
cd src
npm i @fontsource/playfair-display @fontsource/montserrat playwright
node render.js long ../daana_telao_40s.mp4 30
node render.js short ../daana_telao_15s.mp4 30
```
