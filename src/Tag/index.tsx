import * as React from 'react';
import '../assets/nes.css';
import styled from 'styled-components';

type Props = {
  textType: 'primary' | 'success' | 'warning' | 'error';
  item: string;
};

const ToolTag = styled.span`
  background: #eee;
  border-radius: 3px 0 0 3px;
  color: #999;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  -webkit-transition: color 0.2s;
  ::before {
    background: #fff;
    border-radius: 10px;
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
    content: '';
    height: 6px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 10px;
  }
  ::after {
    background: #fff;
    border-bottom: 13px solid transparent;
    border-left: 10px solid #eee;
    border-top: 13px solid transparent;
    content: '';
    position: absolute;
    right: 0;
    top: 0;
  }
  :hover {
    background-color: #000000;
    color: white;
  }
  :hover::after {
    border-left-color: #000000;
  }
`;

export class NesTag extends React.Component<Props> {
  render() {
    const { textType, item } = this.props;
    const textClass = `nes-text is-${textType}`;
    return <ToolTag className={textClass}>{item}</ToolTag>;
  }
}
