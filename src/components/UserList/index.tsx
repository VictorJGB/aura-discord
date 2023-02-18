import React from "react";

import { Container, User, Avatar, Role } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Diarkys" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Mantaro" isBot />
    </Container>
  );
};

export default UserList;
