import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    padding: 40px 0;
    width: 15%;
    height: 100%;
    position: fixed;
    background: #000033;
    color: white;
    z-index: 2;
    width: 250px;
`

export const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    img {
        width: 30px;
    }
`

export const P = styled.p`
    font-size: 25px;
    color: white;
    transition: 0.3s;
    &:hover {
        color: blue;
        transition: 0.2s;
    }
`

export const HeaderContainer = styled.div`
    background: #000033;
    background-attachment: fixed;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    z-index: 1;
    position: fixed;
    /* gap: 300px; */
`