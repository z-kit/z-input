/**
 * Copyright (c) 2017 z-kit contributors.
 * @license MIT LICENSE
 * https://github.com/z-kit/z-input
 */

import styles from './style.css';

// Global to local style mappings, works even if using CSS modules
const classnames = {
  wrapper: styles['z-input'] || 'z-input',
  hasLabel: styles['z-input--label'] || 'z-input--label',
  hasSuccess: styles['z-input--success'] || 'z-input--success',
  hasWarning: styles['z-input--warning'] || 'z-input--warning',
  hasDanger: styles['z-input--danger'] || 'z-input--danger',
  hasError: styles['z-input--error'] || 'z-input--error',
  hasPrefix: styles['z-input--prefix'] || 'z-input--prefix',
  hasSuffix: styles['z-input--suffix'] || 'z-input--suffix',
  isDark: styles['z-input--dark'] || 'z-input--dark',
  isBorderless: styles['z-input--borderless'] || 'z-input--borderless',
  isBox: styles['z-input--box'] || 'z-input--box',
  prefix: styles['z-input__prefix'] || 'z-input__prefix',
  suffix: styles['z-input__suffix'] || 'z-input__suffix',
  label: styles['z-input__label'] || 'z-input__label',
};

export function ZInput(e) {
  return ({
    label,
    prefix,
    suffix,
    color,
    success,
    warning,
    danger,
    error,
    dark,
    borderless,
    box,
    ...props }) => {
    const inputProps = {
      type: props.type || 'text',
      ...props,
    };
    if (color) {
      if (inputProps.style) inputProps.style.borderColor = color;
      else inputProps.style = { borderColor: color };
    }
    const eInput = e('input', inputProps);
    const labelProps = { className: classnames.label };
    if (inputProps.name) labelProps.for = inputProps.name;
    const eLabel = label ? e('label', labelProps, label) : null;
    const ePrefix = prefix ? e('div', {}, prefix) : null;
    const eSuffix = suffix ? e('div', {}, suffix) : null;
    const classes = [classnames.wrapper];
    if (label) classes.push(classnames.hasLabel);
    if (success) classes.push(classnames.hasSuccess);
    if (warning) classes.push(classnames.hasWarning);
    if (danger) classes.push(classnames.hasDanger);
    if (error) classes.push(classnames.hasError);
    if (dark) classes.push(classnames.isDark);
    if (prefix) classes.push(classnames.hasPrefix);
    if (suffix) classes.push(classnames.hasSuffix);
    if (borderless) classes.push(classnames.isBorderless);
    if (box) classes.push(classnames.isBox);
    const className = classes.join(' ');
    return e('div', { className }, [eInput, eLabel, ePrefix, eSuffix]);
  };
}

export default ZInput;
