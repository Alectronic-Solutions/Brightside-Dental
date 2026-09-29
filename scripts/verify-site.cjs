async page => {
  const base = 'http://localhost:3100/Brightside-Dental';
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const routes = ['', '/about', '/services', '/services/general-dentistry', '/services/cosmetic-dentistry', '/services/dental-implants', '/services/invisalign', '/services/emergency-dentistry', '/new-patients', '/contact', '/gallery', '/reviews', '/faq', '/privacy-policy', '/terms-of-use', '/accessibility', '/sitemap-page'];
  const failures = [];
  for (const width of [320, 390, 768, 1024, 1280]) {
    await page.setViewportSize({width, height:844});
    for (const route of routes) {
      const response = await page.goto(base + route);
      const state = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        main: document.querySelectorAll('main').length,
        h1: document.querySelectorAll('h1').length,
      }));
      if (response.status() !== 200 || state.overflow || state.main !== 1 || state.h1 !== 1) failures.push({width,route,status:response.status(),...state});
    }
  }
  await page.setViewportSize({width:390,height:844});
  await page.goto(base + '/contact');
  await page.getByRole('button', {name:'Open menu',exact:true}).click();
  await page.getByRole('dialog', {name:'Navigation menu'}).waitFor();
  await page.getByRole('dialog', {name:'Navigation menu'}).getByRole('button', {name:'Close menu',exact:true}).focus();
  await page.keyboard.press('Enter');
  await page.getByRole('dialog').waitFor({state:'hidden'});
  const focusRestored = await page.getByRole('button', {name:'Open menu',exact:true}).evaluate(el => el === document.activeElement);
  await page.getByRole('button', {name:'Try Appointment Request'}).click();
  const invalid = await page.locator('[aria-invalid="true"]').count();
  await page.getByRole('textbox', {name:'Full Name'}).fill('Demo Visitor');
  await page.getByRole('textbox', {name:'Phone Number'}).fill('2095550100');
  await page.getByRole('textbox', {name:'Email Address'}).fill('demo@example.com');
  await page.getByRole('combobox', {name:'Service Needed'}).selectOption('general-checkup');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', {name:'Try Appointment Request'}).click();
  const success = page.getByRole('heading',{name:'Demo appointment request received'});
  await success.waitFor();
  const successFocused = await success.evaluate(el => el === document.activeElement);
  await page.goto(base + '/services/general-dentistry');
  await page.getByRole('button',{name:'Show after',exact:true}).click();
  const slider = page.getByRole('slider');
  const after = await slider.getAttribute('aria-valuenow');
  await slider.focus();
  await page.keyboard.press('End');
  const before = await slider.getAttribute('aria-valuenow');
  await page.goto(base + '/gallery');
  await page.getByRole('button',{name:'Team',exact:true}).click();
  const team = await page.getByRole('button',{name:'Team',exact:true}).getAttribute('aria-pressed');
  await page.goto(base);
  await page.getByRole('button',{name:'Open menu',exact:true}).waitFor();
  const mobileVideos = await page.locator('video').count();
  await page.screenshot({path:'.playwright-cli/mobile-home.png'});
  await page.setViewportSize({width:1280,height:900});
  await page.reload();
  await page.getByRole('button',{name:'Pause background video',exact:true}).click();
  const paused = await page.locator('video').evaluateAll(videos => videos.every(v => v.paused));
  await page.screenshot({path:'.playwright-cli/desktop-home.png'});
  const result = {routeChecks:routes.length*5, failures, errors, focusRestored, invalid, successFocused, after, before, team, mobileVideos, paused};
  if (failures.length || errors.length || !focusRestored || invalid !== 5 || !successFocused || after !== '0' || before !== '100' || team !== 'true' || mobileVideos !== 0 || !paused) throw new Error(JSON.stringify(result));
  return result;
}
