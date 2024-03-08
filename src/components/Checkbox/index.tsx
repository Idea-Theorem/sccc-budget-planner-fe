import classNames from 'classnames';
import React, { InputHTMLAttributes } from 'react';
import './index.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  labelText?: string;
}

const Checkbox: React.FC<Props> = (Props) => {
  const { className, labelText, ...rest } = Props;
  return (
    <label className={classNames(className, 'label-checkbox')}>
      <>
        <input type="checkbox" {...rest} />
        <span className="fake-checkbox"></span>
        {labelText && <span className='check-label-text'>{labelText}</span>}
      </>
    </label>
  );
};

export default Checkbox;
