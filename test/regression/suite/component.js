import test from 'ava';
import Nightmare from 'nightmare';

test('SFC component - default', (t) => {
  t.plan(1);
  const msg = 'should render the placeholder';
  const expected = 'Type something';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--default')
    .wait('.z-input')
    .evaluate(() => document.querySelector('.z-input > input').getAttribute('placeholder'))
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - border', (t) => {
  t.plan(1);
  const msg = 'should render the bottom border';
  const expected = '2px solid rgb(153, 153, 153)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--default')
    .wait('.z-input')
    .evaluate(() => getComputedStyle(document.querySelector('.z-input > input')).borderBottom)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - box', (t) => {
  t.plan(1);
  const msg = 'should render shadows on box input';
  const notExpected = 'none';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--box')
    .wait('.z-input')
    .evaluate(() => getComputedStyle(document.querySelector('.z-input > input')).boxShadow)
    .end()
    .then(actual => t.notDeepEqual(notExpected, actual, msg));
});

test('SFC component - borderless', (t) => {
  t.plan(1);
  const msg = 'should render borderless input';
  const expected = '0px none rgb(0, 0, 0)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--borderless')
    .wait('.z-input')
    .evaluate(() => getComputedStyle(document.querySelector('.z-input > input')).border)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - label', (t) => {
  t.plan(1);
  const msg = 'should render the label at the correct position';
  const expected = '16px';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--label')
    .wait('.z-input')
    .evaluate(() => getComputedStyle(document.querySelector('.z-input__label')).top)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - floating label', (t) => {
  t.plan(1);
  const msg = 'should float the label';
  const expected = '-8px';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--label')
    .wait('.z-input')
    .type('.z-input > input', 'Test')
    .evaluate(() => getComputedStyle(document.querySelector('.z-input__label')).top)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - success', (t) => {
  t.plan(1);
  const msg = 'should render the success color';
  const expected = 'rgb(118, 178, 69)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--colors')
    .wait('.z-input')
    .evaluate(() => getComputedStyle(document.querySelector('.z-input:nth-of-type(1) > input')).borderColor)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - warning', (t) => {
  t.plan(1);
  const msg = 'should render the warning color';
  const expected = 'rgb(224, 185, 56)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--colors')
    .wait('.z-input')
    .evaluate(() => getComputedStyle(document.querySelector('.z-input:nth-of-type(2) > input')).borderColor)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - danger', (t) => {
  t.plan(1);
  const msg = 'should render the danger color';
  const expected = 'rgb(216, 52, 63)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--colors')
    .wait('.z-input')
    .evaluate(() => getComputedStyle(document.querySelector('.z-input:nth-of-type(3) > input')).borderColor)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - error', (t) => {
  t.plan(1);
  const msg = 'should render the error color';
  const expected = 'rgb(255, 0, 0)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--colors')
    .wait('.z-input')
    .evaluate(() => getComputedStyle(document.querySelector('.z-input:nth-of-type(4) > input')).borderColor)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - prefix and suffix padding', (t) => {
  t.plan(1);
  const msg = 'should render the input padding to make room for prefixes and suffixes';
  const expected = '0px 34px';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--prefix-and-suffix')
    .wait('.z-input')
    .evaluate(() => getComputedStyle(document.querySelector('.z-input > input')).padding)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - prefix position', (t) => {
  t.plan(1);
  const msg = 'should render the prefix on the left';
  const expected = '0px';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--prefix-and-suffix')
    .wait('.z-input')
    .evaluate(() => getComputedStyle(document.querySelector('.z-input__prefix')).left)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - suffix position', (t) => {
  t.plan(1);
  const msg = 'should render the suffix on the right';
  const expected = '0px';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--prefix-and-suffix')
    .wait('.z-input')
    .evaluate(() => getComputedStyle(document.querySelector('.z-input__suffix')).right)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - disabled input', (t) => {
  t.plan(1);
  const msg = 'should render an input with some opacity';
  const expected = 0;
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--disabled-input')
    .wait('.z-input')
    .evaluate(() => {
      const inputStyle = getComputedStyle(document.querySelector('.z-input > input'));
      return parseInt(inputStyle.opacity, 10);
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - dark', (t) => {
  t.plan(1);
  const msg = 'should render an input with white text color';
  const expected = 'rgb(255, 255, 255)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--dark')
    .wait('.z-input')
    .evaluate(() => getComputedStyle(document.querySelector('.z-input > input')).color)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});
