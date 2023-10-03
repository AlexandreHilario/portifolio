import styled from "styled-components";

export const AreaHeader = styled.div`
    height: 100px;
    background-color: #9fb39b;
    z-index: 999;
    position: sticky;
    top: 0;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: auto;
        height: 100px;
        
    }
    
    h1, h2 {
        display: inline-block;
        margin-left: 20px;
        color: #3b3e37;
    }
    
    
    nav ul {
        display: flex;
        gap: 20px;
        padding: 0;
        list-style: none;
        margin-right: 20px;
    }
    
    a{
        color: #3b3e37;
        text-decoration: none;
    }
`;