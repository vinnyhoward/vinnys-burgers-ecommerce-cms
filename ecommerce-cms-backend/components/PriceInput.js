/* eslint-disable import/no-unresolved */
import React from 'react';
import { string, func, shape } from 'prop-types';
import PatchEvent, {
  set,
  unset,
  number,
} from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const formatMoney = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format;

export default function PriceInput({
  type: { title, description, name },
  value,
  onChange,
  inputComponent,
}) {
  return (
    <div>
      <h2>
        {title} - {value ? formatMoney(value / 100) : ''}
      </h2>
      <p>{description}</p>
      <input
        type={name}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
        ref={inputComponent}
        {...{ value }}
      />
    </div>
  );
}

PriceInput.focus = function () {
  this._inputElement.focus();
};

PriceInput.propTypes = {
  type: shape({
    title: string,
    options: shape({
      min: number,
      max: number,
      step: number,
    }),
  }),
  value: number,
  onChange: func,
  inputComponent: string,
};
