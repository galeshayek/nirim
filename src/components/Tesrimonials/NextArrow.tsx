
const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", }}
            onClick={onClick}
        />
    )
}

export default NextArrow