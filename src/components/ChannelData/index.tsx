import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, InputIcon, Input } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(19).keys()).map((n) => (
          <ChannelMessage
            key={n}
            userName="Diarkys"
            date="22/02/2023"
            content="Isso é um mensagem"
          />
        ))}

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
          hasMention
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
