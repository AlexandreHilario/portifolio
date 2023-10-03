import styled from "styled-components";

export const AreaHome = styled.div`
    .container{
        background-color: azure;
        display: flex;
        width: 1900px;
        height: 840px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .Card{
        display: flex;
        align-items: center;
        background-color: #d39088;
        border-radius: 5px;
    }

    .Card div {
        margin-left: 40px;
        margin-right: 40px;
    }

    .container div p {
        margin-top: 30px;
        margin-bottom: 330px;
        width: 200px;
        height: 100px;
    }

    .container div ul li {
        display: inline;
        margin-right: 40px;
    }

    img {
        width: 450px;
        height: 570px;
    }
`;