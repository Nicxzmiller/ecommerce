import styled from'styled-components'


export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: ;
margin: 0.5rem;
background: transparent;
border:0.04rem solid;
border-radius:0.5rem;
cursor:pointer;
transition: all 0.5s ease-in-out;
&:hover{
    background:var(--mainDark);
}
&:focus{
   outline:none; 
}
`;

export const NavButton = styled.button`
text-transform: capitalize;
font-size: ;
margin: 0.4rem;
background: transparent;
border-radius:0.5rem;
cursor:pointer;
transition: all 0.5s ease-in-out;
&:hover{
    background:var(--mainDark);
}
&:focus{
   outline:none; 
}
`;
