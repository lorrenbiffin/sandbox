import * as React from "react";
import styled from "styled-components";

const Card = styled.div.attrs((props: any) => ({
    type: 'text',
    size: props.small ? 5 : undefined,
  }))`
    border-radius: 3px;
    border: 1px solid palevioletred;
    display: block;
    margin: 0 0 1em;
    padding: ${(props: any)=>props.padding+'rem'};
  
    ::placeholder {
      color: palevioletred;
    }
`

export default function Dashboard() {
    return (
        <Card color="#f00" padding={1}>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
        </Card>
    );
}
