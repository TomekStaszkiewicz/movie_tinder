import styled from 'styled-components';

export const MovieContainer = styled.div`
    display: grid; 
    width: 500px;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 4fr 1fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        "Title Title Title Title"
        "Photo Photo Photo Photo"
        "Summary Summary Summary Summary"
        "AcceptBtn AcceptBtn RejectBtn RejectBtn"; 
`;

export const MovieImage = styled.img`
    grid-area: Photo;
    max-width: 100%;
`;

export const Title = styled.h1`
    grid-area: Title;
    text-align: center;
`;

export const Summary = styled.p`
    grid-area: Summary;
`

const BaseBtn = styled.button`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
`

export const AcceptButton = styled(BaseBtn)`
    grid-area: AcceptBtn;
    background-color: lightgreen;
`

export const RejectButton = styled(BaseBtn)`
    grid-area: RejectBtn;
    background-color: red;
`