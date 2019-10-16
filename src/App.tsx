import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { NesList } from './List';
import { NesText } from './Text';
import { NesSNSIcon } from './SNSIcons';

const contents = ["hell", "nes", "components", "test"];
const App: React.FC = () => {
  return (
    <div className="App">
      <div style={{margin: "30px"}}>
        <NesList
          items={contents}
          isDisc={false}
        />
      </div>
      <div style={{margin: "30px"}}>
        <NesText
          textType={"primary"}
          content={"Hello NES.css primary"}
          fontSize={20}
        />
        <br/>
        <NesText
          textType={"success"}
          content={"Hello NES.css success"}
          fontSize={20}
        />
        <br />
        <NesText
          textType={"warning"}
          content={"Hello NES.css warning"}
          fontSize={20}
        />
        <br />
        <NesText
          textType={"error"}
          content={"Hello NES.css error"}
          fontSize={20}
        />
        <br />
        <NesText
          textType={"disabled"}
          content={"Hello NES.css error disabled"}
          fontSize={20}
        />
      </div>
      <div style={{ margin: "30px" }}>
        <NesSNSIcon
          snsType={"twitter"}
          iconSize={"medium"}
        />
        <NesSNSIcon
          snsType={"facebook"}
          iconSize={"medium"}
        />
        <NesSNSIcon
          snsType={"instagram"}
          iconSize={"medium"}
        />
        <NesSNSIcon
          snsType={"github"}
          iconSize={"medium"}
        />
        <NesSNSIcon
          snsType={"google"}
          iconSize={"medium"}
        />
        <NesSNSIcon
          snsType={"gmail"}
          iconSize={"medium"}
        />
        <NesSNSIcon
          snsType={"medium"}
          iconSize={"medium"}
        />
        <NesSNSIcon
          snsType={"linkedin"}
          iconSize={"medium"}
        />
        <NesSNSIcon
          snsType={"twitch"}
          iconSize={"medium"}
        />
        <NesSNSIcon
          snsType={"youtube"}
          iconSize={"medium"}
        />
        <NesSNSIcon
          snsType={"reddit"}
          iconSize={"medium"}
        />
        <NesSNSIcon
          snsType={"whatsapp"}
          iconSize={"medium"}
        />
      </div>

    </div>
  );
}

export default App;