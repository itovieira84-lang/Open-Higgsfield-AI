# Reel — convite emocionante para o Supervendas

Formato: vertical 1080 × 1920 (Reels, Stories, Status do WhatsApp), 43 s, H.264 30 fps, **sem áudio**. A música deve ser adicionada no próprio Instagram, para usar uma faixa licenciada da biblioteca do app.

## Roteiro

| Tempo | Imagem | Texto |
| --- | --- | --- |
| 0–5,4 | Ana trabalhando a terra (carrossel 01, sem o texto original) | Antes da cozinha, havia a *terra.* |
| 5,4–9,6 | Ilustração de Ana na parede vermelha (carrossel 03) | Nela, uma mulher chamada *Ana.* |
| 9,6–13,8 | Foto real: prato servido nas mãos (ensaio do Drive) | Mãos que plantavam, colhiam e reuniam todos *à mesa.* |
| 13,8–19,6 | Tipografia sobre fundo de barro | Manauê. Cocada. Bolo de aipim. Café passado na hora. → Sabores que viraram *memória.* |
| 19,6–25,2 | Retrato de Ana no porta-retrato (carrossel 11) | A neta, Vanessa dos Santos, guardou cada lembrança… / …e transformou afeto *em marca.* |
| 25,2–30,4 | Logo + 12 embalagens reais | Há mais de 20 anos, esse cuidado vai *da Bahia para a sua mesa.* |
| 30,4–35,2 | Projeção do stand (card do Supervendas) | Agora, a cozinha de Ana *abre as portas para você.* |
| 35,2–43 | Centro de Convenções + logo + datas | A cozinha DAANA vai ao *Supervendas Sergipe.* · 26, 27 e 28 de outubro · Centro de Convenções AM Malls · Venha viver essa história *com a gente.* · @daanaoficial |

## Regras aplicadas

- **Só materiais reais ou aprovados pelo cliente:** os carrosséis, o card, a ilustração oficial, as fotos do ensaio e os recortes das embalagens. Nada foi gerado por IA.
- **Logo:** sempre o arquivo original, com contorno branco sobre o vermelho.
- **Textos dos carrosséis:** foram cortados fora. As imagens não foram retocadas.
- **Zonas livres da interface do Reels:** nada importante nos ~250 px do topo nem nos ~380 px da base.

## Sugestão de música

Procure no Instagram faixas instrumentais de **violão, sanfona ou piano suave**, com clima nordestino e afetivo, e volume crescente no convite final. Exemplos de busca: "nordeste instrumental", "saudade", "forró pé de serra instrumental".

## Como renderizar de novo

```bash
cd src   # precisa de node_modules com @fontsource/playfair-display e @fontsource/montserrat, e da pasta prod/ com os recortes
node render_reel.js reel ../daana_convite_supervendas_reel.mp4 30
```

Os recortes dos produtos estão em `../telao-supervendas/src/prod/`.
