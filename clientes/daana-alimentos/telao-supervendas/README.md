# Telão do stand — Supervendas Sergipe 2026

Evento: 26 a 28/10/2026, Centro de Convenções AM Malls (Sergipe).
Telão: 6 m × 0,50 m, 1536 × 128 px (12 placas de 128 × 128, pitch de ~3,9 mm).
A placa física da logo DAANA fica **na frente do centro do telão**, cobrindo cerca de 15% (± 250 px no meio).

## Arquivos

| Arquivo | Uso |
| --- | --- |
| `daana_telao_40s_centro-livre.mp4` | **Para o evento**: história completa (40 s), sem nada importante atrás da placa |
| `daana_telao_15s_centro-livre.mp4` | **Para o evento**: versão curta (15 s), sem nada importante atrás da placa |
| `daana_telao_40s.mp4` / `daana_telao_15s.mp4` | Versões com a tela inteira livre, para usar sem a placa (outros eventos, redes) |
| `simulacao_com_placa_15s.mp4` | Só para aprovação: simula a placa sobre o vídeo. **Não exibir no telão** |
| `sheet_all.png` | Quadros-chave das versões de tela inteira |
| `src/` | Código da animação (`telao.html`) e script de render (`render.js`) |

Todos em H.264, 30 fps, em loop sem corte.

## Versões com centro livre

- **Zonas seguras:** esquerda de 24 a 600 px, direita de 936 a 1512 px. Entre 600 e 936 só passa fundo.
- **As frases se dividem em duas metades,** e a placa física vira parte da leitura. Exemplos:
  - "Toda história | tem uma *raiz.*"
  - "Temperos e alimentos | [placa DAANA] | produtos"
  - "Leve a DAANA | para a *sua loja.*"
- **Retrato de Ana:** fica na metade direita, ao lado de "*Ana.*".
- **Fim:** "@daanaoficial" à esquerda e as faixas da marca saindo da placa para a direita.

## Roteiro (40 s)

| Tempo | Cena | Texto |
| --- | --- | --- |
| 0–7 | Barro + sulco atravessando a tela | Toda história tem uma *raiz.* |
| 7–14 | Retrato de Ana (ilustração oficial) | A nossa tem nome: *Ana.* |
| 14–21 | O sulco vira prateleira, com utensílios em silhueta | Trabalho na terra. *Cuidado à mesa.* |
| 21–26,5 | Vermelho DAANA, prateleira creme com produtos reais | Temperos e alimentos *DAANA* |
| 26,5–31,5 | Logo oficial | Leve a DAANA para a *sua loja.* |
| 31,5–36,5 | Barro / janela de taipa | Entre. A cozinha de Ana é *sua também.* |
| 36,5–40 | Logo + @daanaoficial, retorno ao barro | — |

## Regras aplicadas

- **Logo:** sempre o arquivo original. Sobre o vermelho, vai com contorno branco, como no card do Supervendas.
- **Produtos:** recortes das fotos reais da pasta "PRODUTOS" no Drive. Nada foi gerado por IA.
- **Ana:** recorte do rosto da ilustração oficial (`../ana/ana-ilustracao-oficial.png`).
- **Fontes:** Playfair Display (bold e itálico) nos textos e Montserrat no @.

## Pendências

- **Empresa do LED:** confirmar formato, fps e se aceita MP4.
- **Teste no local:** testar no telão montado, para conferir a leitura e a posição exata da placa.

## Como renderizar de novo

```bash
cd src
npm i @fontsource/playfair-display @fontsource/montserrat playwright
node render.js longC ../daana_telao_40s_centro-livre.mp4 30
node render.js shortC ../daana_telao_15s_centro-livre.mp4 30
PLAQUE=1 node render.js shortC ../simulacao_com_placa_15s.mp4 30   # simulação da placa
node render.js long ../daana_telao_40s.mp4 30
node render.js short ../daana_telao_15s.mp4 30
```

Se a placa estiver em outra posição ou tiver outra largura, basta ajustar `LX` e `RX` nas versões `longC` e `shortC` em `telao.html`.
