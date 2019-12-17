import React from 'react'

const Layout:React.FunctionComponent & {Header: React.FunctionComponent}=()=>{
    return (
        React.createElement('div',null,'hello')
    )
}
Layout.Header=()=>{
    return (
        React.createElement('div',null,'hello')
    )
}

interface Layout2 extends React.FunctionComponent{
    Header: React.FunctionComponent
}
const Layout2:Layout2 = ()=>{
    return (
        React.createElement('div',null,'hello')
    )
}
Layout2.Header = ()=>{
    return (
        React.createElement('div',null,'hello')
    )
}