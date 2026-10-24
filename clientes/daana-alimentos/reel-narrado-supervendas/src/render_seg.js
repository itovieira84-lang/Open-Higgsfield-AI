// Usage: node render_seg.js <page.html> <version> <out.mp4> <startFrame> <endFrame> [fps]
// Renders a frame range so long videos can be split across parallel processes.
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');
(async () => {
  const [html, version, out, s, e, fpsArg] = process.argv.slice(2);
  const fps = Number(fpsArg || 30), start = Number(s), end = Number(e);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, html));
  await page.evaluate(async () => {
    await Promise.all(['700 50px Playfair', 'italic 700 50px Playfair', '800 34px Montserrat', '700 34px Montserrat'].map(f => document.fonts.load(f)));
    await document.fonts.ready;
  });
  await page.waitForTimeout(500);
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '16', '-pix_fmt', 'yuv420p', out], { stdio: ['pipe', 'inherit', 'inherit'] });
  for (let i = start; i < end; i++) {
    await page.evaluate(([v, t]) => window.__render(v, t), [version, i / fps]);
    const buf = await page.screenshot({ type: 'jpeg', quality: 95, clip: { x: 0, y: 0, width: 1080, height: 1920 } });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  }
  ff.stdin.end(); await new Promise(r => ff.on('close', r)); await browser.close();
  console.log('seg done', out);
})();
