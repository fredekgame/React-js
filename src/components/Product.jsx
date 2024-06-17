const Card = ({title, children}) => {
    return <div>
        <p>{title}</p>
        <hr />
        {children}
    </div>
}

export default Card