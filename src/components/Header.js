import Logo from "./Logo"

const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
            <Logo></Logo>
        </header>
    )
}

Header.defaultProps={
    title: 'hello world',
}

export default Header
