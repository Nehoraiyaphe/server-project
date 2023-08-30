const Footer = () => {
    const date = new Date();

    return (
        <div style={{ background: "yellow", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <p>nehorai yaphe</p>
            <p>time: {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
            <p>date: {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</p>
        </div>
    );
};

export default Footer;