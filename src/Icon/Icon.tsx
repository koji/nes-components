import * as React from 'react';
import '../../node_modules/nes.css/css/nes.css';

type Props = {
  iconType: 'close' | 'trophy' | 'coin';
  iconSize: 'large' | 'medium' | 'small';
};

export class NesIcon extends React.Component<Props> {
  render() {
    const { iconType, iconSize } = this.props;
    const iconClass = `nes-icon ${iconType} is-${iconSize}`;
    return <i className={iconClass}></i>;
  }
}
