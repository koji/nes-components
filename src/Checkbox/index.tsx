import * as React from 'react';
import '../assets/nes.css';

type Props = {
  darkMode?: boolean;
  items: string[];
  // checkedPos?: number; // add checked if undefined => first
};

export class NesCheckbox extends React.Component<Props> {
  render() {
    const { darkMode, items /* checkedPos */ } = this.props;
    // const checkedNum = checkedPos ? checkedPos : 0;
    const checkboxClass = darkMode ? 'nes-checkbox is-dark' : 'nes-checkbox';
    return (
      <>
        {items.map(item => (
          <label key={`${item}`}>
            <input type="checkbox" className={checkboxClass} />
            <span>{item}</span>
          </label>
        ))}
      </>
    );
  }
}
