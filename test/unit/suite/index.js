import test from 'ava';
import React from 'react';
import { renderJSX, JSX } from 'jsx-test-helpers';
import input from '../../../src/component';

const ZInput = input(React.createElement);

test('Input', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<ZInput />);
  const expected = JSX(
    <div className="z-input">
      <input type="text" />
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Attributes', (t) => {
  const msg = 'should pass through';
  const actual = renderJSX(<ZInput placeholder="Type something" />);
  const expected = JSX(
    <div className="z-input">
      <input placeholder="Type something" type="text" />
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Custom type', (t) => {
  const msg = 'should be supported';
  const actual = renderJSX(<ZInput type="email" placeholder="Type something" />);
  const expected = JSX(
    <div className="z-input">
      <input type="email" placeholder="Type something" />
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Box input', (t) => {
  const msg = 'should be available';
  const actual = renderJSX(<ZInput box />);
  const expected = JSX(
    <div className="z-input z-input--box">
      <input type="text" />
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Borderless input', (t) => {
  const msg = 'should be available';
  const actual = renderJSX(<ZInput borderless />);
  const expected = JSX(
    <div className="z-input z-input--borderless">
      <input type="text" />
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Floating label', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<ZInput label="Type something" />);
  const expected = JSX(
    <div className="z-input z-input--label">
      <input type="text" />
      <label className="z-input__label">Type something</label>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Automatic label for', (t) => {
  const msg = 'should be enabled';
  const actual = renderJSX(<ZInput name="test" label="Type something" />);
  const expected = JSX(
    <div className="z-input z-input--label">
      <input name="test" type="text" />
      <label for="test" className="z-input__label">Type something</label>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Success modifier', (t) => {
  const msg = 'should be available';
  const actual = renderJSX(<ZInput success />);
  const expected = JSX(
    <div className="z-input z-input--success">
      <input type="text" />
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Warning modifier', (t) => {
  const msg = 'should be available';
  const actual = renderJSX(<ZInput warning />);
  const expected = JSX(
    <div className="z-input z-input--warning">
      <input type="text" />
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Danger modifier', (t) => {
  const msg = 'should be available';
  const actual = renderJSX(<ZInput danger />);
  const expected = JSX(
    <div className="z-input z-input--danger">
      <input type="text" />
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Custom color', (t) => {
  const msg = 'should be available';
  const actual = renderJSX(<ZInput color="blue" />);
  const expected = JSX(
    <div className="z-input">
      <input style={{ borderColor: 'blue' }} type="text" />
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Prefix', (t) => {
  const msg = 'should be supported';
  const actual = renderJSX(<ZInput prefix="Test" />);
  const expected = JSX(
    <div className="z-input z-input--prefix">
      <input type="text" />
      <div className="z-input__prefix">Test</div>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Suffix', (t) => {
  const msg = 'should be supported';
  const actual = renderJSX(<ZInput suffix="Test" />);
  const expected = JSX(
    <div className="z-input z-input--suffix">
      <input type="text" />
      <div className="z-input__suffix">Test</div>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Disabled inputs', (t) => {
  const msg = 'should be supported';
  const actual = renderJSX(<ZInput disabled />);
  const expected = JSX(
    <div className="z-input">
      <input type="text" disabled />
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Dark mode', (t) => {
  const msg = 'should be supported';
  const actual = renderJSX(<ZInput dark />);
  const expected = JSX(
    <div className="z-input z-input--dark">
      <input type="text" />
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});
