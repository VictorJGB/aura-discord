import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 4px 16px;
  margin-right: 4px;

  background-color: transparent;

  &.mention {
    background-color: var(--tertiary);
    opacity: 0.2;

    border-left: 2px solid var(--tertiary);
    padding-left: 14px;
  }

  & + div {
    margin-top: 13px;
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;

  background-color: var(--avatar);
  border-radius: 50%;

  &.bot {
    background-color: var(--senary);
  }
`;

export const Message = styled.div`
  min-height: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 17px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  > strong {
    color: var(--white);
    font-size: 16px;
  }

  > span {
    margin-left: 6px;

    background-color: var(--tertiary);
    color: var(--background);
    border-radius: 4px;

    padding: 4px 5px;

    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }

  > time {
    margin-left: 6px;
    color: var(--quinary);
    opacity: 0.7;
    font-size: 13px;
  }
`;

export const Content = styled.div`
  text-align: left;

  font-size: 16px;
  color: var(--foreground);
`;

export const Mention = styled.span`
  color: var(--aura);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
