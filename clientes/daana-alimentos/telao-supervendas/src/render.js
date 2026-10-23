// Usage: node render.js <long|short> <out.mp4> [fps] | node render.js <long|short> stills <t1,t2,...>
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');

(async () => {
  const [version, out, arg3] = process.argv.slice(2);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1536, height: 128 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, 'telao.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  const clip = { x: 0, y: 0, width: 1536, height: 128 };

  if (out === 'stills') {
    for (const t of arg3.split(',').map(Number)) {
      await page.evaluate(([v, t]) => window.__render(v, t), [version, t]);
      await page.screenshot({ path: `still_${version}_${t}.png`, clip });
    }
    await browser.close();
    return;
  }

  const fps = Number(arg3 || 30);
  const dur = await page.evaluate(v => window.__dur(v), version);
  const frames = Math.round(dur * fps);
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '12', '-pix_fmt', 'yuv420p', '-tune', 'animation',
    '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] });
  for (let i = 0; i < frames; i++) {
    await page.evaluate(([v, t]) => window.__render(v, t), [version, i / fps]);
    const buf = await page.screenshot({ clip, type: 'png' });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
  await browser.close();
  console.log('wrote', out, frames, 'frames');
})();
