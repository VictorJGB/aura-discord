import React from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, InputIcon, Input } from "./styles";

const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage
          userName="Diarkys"
          date="22/02/2023"
          content="Isso é uma mensagem"
        />
        <ChannelMessage
          userName="Mantaro"
          date="22/02/2023"
          content={
            <>
              <Mention>Diarkys</Mention>,Isso é uma mensagem do seu bot de
              música
            </>
          }
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
