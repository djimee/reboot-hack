import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    padding-top: 6rem;
`

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const UserDetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5rem;
    background-color: #D3D3D3;
    border-radius: 50px;
`

export const Circle = styled.div`
    display: flex;
    width: 150px;
    height: 150px;
    background-color: green;
    border-radius: 50%;
    margin: 0 0 3rem 0;
`