import test from 'ava';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import input from '../../../src/component';

configure({ adapter: new Adapter() });

const ZInput = input(React.createElement);

test('Input', (t) => {
  const msg = 'should render';
  const actual = shallow(<ZInput />).html();
  const expected = shallow(
    <div className="z-input">
      <input type="text" />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Attributes', (t) => {
  const msg = 'should pass through';
  const actual = shallow(<ZInput placeholder="Type something" />).html();
  const expected = shallow(
    <div className="z-input">
      <input placeholder="Type something" type="text" />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Custom type', (t) => {
  const msg = 'should be supported';
  const actual = shallow(<ZInput type="email" placeholder="Type something" />).html();
  const expected = shallow(
    <div className="z-input">
      <input type="email" placeholder="Type something" />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Box input', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZInput box />).html();
  const expected = shallow(
    <div className="z-input z-input--box">
      <input type="text" />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Borderless input', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZInput borderless />).html();
  const expected = shallow(
    <div className="z-input z-input--borderless">
      <input type="text" />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Floating label', (t) => {
  const msg = 'should render';
  const actual = shallow(<ZInput label="Type something" />).html();
  const expected = shallow(
    <div className="z-input z-input--label">
      <input type="text" />
      <label className="z-input__label">Type something</label>
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Automatic label for', (t) => {
  const msg = 'should be enabled';
  const actual = shallow(<ZInput id="test" label="Type something" />).html();
  const expected = shallow(
    <div className="z-input z-input--label">
      <input id="test" type="text" />
      <label className="z-input__label" htmlFor="test">Type something</label>
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Success modifier', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZInput success />).html();
  const expected = shallow(
    <div className="z-input z-input--success">
      <input type="text" />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Warning modifier', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZInput warning />).html();
  const expected = shallow(
    <div className="z-input z-input--warning">
      <input type="text" />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Danger modifier', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZInput danger />).html();
  const expected = shallow(
    <div className="z-input z-input--danger">
      <input type="text" />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Custom color', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZInput color="blue" />).html();
  const expected = shallow(
    <div className="z-input">
      <input style={{ borderColor: 'blue' }} type="text" />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Prefix', (t) => {
  const msg = 'should be supported';
  const actual = shallow(<ZInput prefix="Test" />).html();
  const expected = shallow(
    <div className="z-input z-input--prefix">
      <input type="text" />
      <div className="z-input__prefix">Test</div>
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Suffix', (t) => {
  const msg = 'should be supported';
  const actual = shallow(<ZInput suffix="Test" />).html();
  const expected = shallow(
    <div className="z-input z-input--suffix">
      <input type="text" />
      <div className="z-input__suffix">Test</div>
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Disabled inputs', (t) => {
  const msg = 'should be supported';
  const actual = shallow(<ZInput disabled />).html();
  const expected = shallow(
    <div className="z-input">
      <input type="text" disabled />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Dark mode', (t) => {
  const msg = 'should be supported';
  const actual = shallow(<ZInput dark />).html();
  const expected = shallow(
    <div className="z-input z-input--dark">
      <input type="text" />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Manual open label', (t) => {
  const msg = 'should be supported';
  const actual = shallow(<ZInput label="Test" isOpen />).html();
  const expected = shallow(
    <div className="z-input z-input--label z-input--open">
      <input type="text" />
      <label className="z-input__label">Test</label>
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Manual closed label', (t) => {
  const msg = 'should be supported';
  const actual = shallow(<ZInput label="Test" isOpen={false} />).html();
  const expected = shallow(
    <div className="z-input z-input--label z-input--closed">
      <input type="text" />
      <label className="z-input__label">Test</label>
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});
