import React from "react";

import { Container, User, Avatar, Role } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
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
      <UserRow nickname="User 01" />
      <UserRow nickname="User 02" />
      <UserRow nickname="User 03" />
      <UserRow nickname="User 04" />
      <UserRow nickname="User 05" />
      <UserRow nickname="User 06" />
      <UserRow nickname="User 07" />
      <UserRow nickname="User 08" />
      <UserRow nickname="User 09" />
      <UserRow nickname="User 10" />
      <UserRow nickname="User 11" />
      <UserRow nickname="User 12" />
      <UserRow nickname="User 13" />
      <UserRow nickname="User 14" />
      <UserRow nickname="User 15" />
      <UserRow nickname="User 16" />
      <UserRow nickname="User 17" />
      <UserRow nickname="User 18" />
      <UserRow nickname="User 19" />
      <UserRow nickname="User 20" />
    </Container>
  );
};

export default UserList;
