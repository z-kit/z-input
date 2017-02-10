module.exports = {
  default: (browser) => {
    browser
      .url('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=default')
      .waitForElementPresent('.z-input', 1000)
      .assert.attributeContains('.z-input > input', 'placeholder', 'Type something')
      .getCssProperty('.z-input > input', 'border-bottom', (result) => {
        browser.assert.equal(result.value, '2px solid rgb(170, 170, 170)');
      })
      .end();
  },
  box: (browser) => {
    browser
      .url('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=box')
      .waitForElementPresent('.z-input', 1000)
      .getCssProperty('.z-input > input', 'box-shadow', (result) => {
        browser.assert.equal(result.value === 'none', false);
      })
      .end();
  },
  borderless: (browser) => {
    browser
      .url('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=borderless')
      .waitForElementPresent('.z-input', 1000)
      .getCssProperty('.z-input > input', 'border', (result) => {
        browser.assert.equal(result.value, '0px none rgb(0, 0, 0)');
      })
      .end();
  },
  label: (browser) => {
    browser
      .url('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=label')
      .waitForElementPresent('.z-input', 1000)
      .getCssProperty('.z-input__label', 'top', (result) => {
        browser.assert.equal(result.value, '4px');
      })
      .click('.z-input > input')
      .getCssProperty('.z-input__label', 'top', (result) => {
        browser.assert.equal(Math.floor(parseInt(result.value, 10)) < 4, true);
      })
      .end();
  },
  colors: (browser) => {
    browser
      .url('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=colors')
      .waitForElementPresent('.z-input', 1000)
      .getCssProperty('.z-input:nth-of-type(1) > input', 'border-color', (result) => {
        browser.assert.equal(result.value, 'rgb(118, 178, 69)');
      })
      .getCssProperty('.z-input:nth-of-type(2) > input', 'border-color', (result) => {
        browser.assert.equal(result.value, 'rgb(254, 215, 102)');
      })
      .getCssProperty('.z-input:nth-of-type(3) > input', 'border-color', (result) => {
        browser.assert.equal(result.value, 'rgb(240, 58, 71)');
      })
      .getCssProperty('.z-input:nth-of-type(4) > input', 'border-color', (result) => {
        browser.assert.equal(result.value, 'rgb(255, 0, 0)');
      })
      .end();
  },
  'prefix and suffix': (browser) => {
    browser
      .url('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=prefix%20and%20suffix')
      .waitForElementPresent('.z-input', 1000)
      .getCssProperty('.z-input > input', 'padding', (result) => {
        browser.assert.equal(result.value, '0px 34px');
      })
      .getCssProperty('.z-input__prefix', 'left', (result) => {
        browser.assert.equal(result.value, '0px');
      })
      .getCssProperty('.z-input__suffix', 'right', (result) => {
        browser.assert.equal(result.value, '0px');
      })
      .end();
  },
  'disabled input': (browser) => {
    browser
      .url('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=disabled%20input')
      .waitForElementPresent('.z-input', 1000)
      .getCssProperty('.z-input > input', 'opacity', (result) => {
        browser.assert.equal(result.value, '0,5');
      })
      .end();
  },
  dark: (browser) => {
    browser
      .url('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=dark')
      .waitForElementPresent('.z-input', 1000)
      .getCssProperty('.z-input > input', 'color', (result) => {
        browser.assert.equal(result.value, 'rgba(255, 255, 255, 1)');
      })
      .end();
  },
};
