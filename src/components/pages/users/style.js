import styled from "styled-components";

export const Container = styled.div`
    margin-left: 20%;
    margin-right: 10%;
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const Functions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
`

export const Line = styled.div`
    height: 1px;
    width: 100%;
    background-color: black;
    margin: 50px auto;
`

export const UsersContainer = styled.div`
    height: 90%;
    overflow-y: scroll;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    &::-webkit-scrollbar-track {
        padding: 2px 0;
        background-color: #fff;
    }
    &::-webkit-scrollbar {
        width: 7px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: black;
    }
    tr {
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
        }
    }
`

export const Td = styled.td`
    max-width: 100px;
    flex: 1;
`

export const UserBoxName = styled.p`
    font-size: 1.3rem;
`