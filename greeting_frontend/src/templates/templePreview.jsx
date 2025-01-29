const TempleEmailTemplate = ({ template, userDetails }) => {
    return (
        <table width="100%" border="0" cellPadding="0" cellSpacing="0">
            <tr>
                <td valign="top">
                    <div>
                        <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                            <tbody>
                                <tr>
                                    <td align="center">
                                        {template.banner &&
                                        (template.banner.endsWith(".gif") ||
                                            template.banner.endsWith(".png") ||
                                            template.banner.endsWith(".jpg") ||
                                            template.banner.endsWith(".jpeg")) ? (
                                            <img
                                                src={template.banner}
                                                alt="Banner Image"
                                                style={{
                                                    width: "70%",
                                                    maxWidth: "300px",
                                                    height: "auto",
                                                    borderRadius: "8px",
                                                }}
                                            />
                                        ) : (
                                            <img
                                                src="https://cdn.templates.unlayer.com/assets/1676265088672-cake.png"
                                                alt="Default Birthday Cake"
                                                style={{
                                                    width: "70%",
                                                    maxWidth: "300px",
                                                    height: "auto",
                                                    borderRadius: "8px",
                                                }}
                                            />
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div style={{ margin: "10px 0px", textAlign: "center" }}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div style={{ textAlign: "left", marginLeft: "180px" }}>
                                                <p>
                                                    <b
                                                        className="namaste-text"
                                                        style={{
                                                            color: "#5a0901",
                                                            fontSize: "20px",
                                                        }}
                                                    >
                                                        Namaste{" "}
                                                        <span style={{ textTransform: "uppercase" }}>
                                                            {userDetails.last_name} {userDetails.first_name}
                                                        </span>
                                                    </b>
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table
                                border="0"
                                cellSpacing="0"
                                cellPadding="0"
                                width="800"
                                align="center"
                                style={{
                                    textAlign: "left",
                                    backgroundColor: "#ffaf4d",
                                    border: "5px solid #5a0901",
                                    lineHeight: "20px",
                                    fontFamily: "Verdana, Geneva, sans-serif",
                                    color: "#000000",
                                    fontSize: "13px",
                                }}
                            >
                                <tbody>
                                    <tr>
                                        <td valign="top">
                                            <div align="center">
                                                <table
                                                    border="0"
                                                    cellSpacing="0"
                                                    cellPadding="0"
                                                    width="800"
                                                    align="center"
                                                >
                                                    <tr>
                                                        <td>
                                                            <div
                                                                style={{
                                                                    float: "right",
                                                                    width: "80%",
                                                                    marginRight: "20px",
                                                                }}
                                                            >
                                                                <p
                                                                    style={{
                                                                        fontStyle: "normal",
                                                                        fontSize: "15px",
                                                                        textAlign: "justify",
                                                                        fontFamily: "'Georgia', serif",
                                                                    }}
                                                                >
                                                                    {template.templeDescription}
                                                                </p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div
                                                style={{
                                                    textAlign: "center",
                                                    backgroundColor: "#ed6f0e",
                                                    padding: "18px",
                                                    borderRadius: "8px",
                                                    margin: "10px 10px",
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        fontSize: "25px",
                                                        fontWeight: "bold",
                                                        color: "#ffffff",
                                                        fontFamily: "'Georgia', serif, cursive",
                                                        margin: "0",
                                                    }}
                                                >
                                                    Happy Birthday
                                                </p>
                                            </div>
                                            <div style={{ textAlign: "center" }}>
                                                <p
                                                    style={{
                                                        fontFamily: "'Georgia', serif",
                                                        textAlign: "center",
                                                        fontSize: "18px",
                                                        margin: "0",
                                                        marginTop: "15px",
                                                    }}
                                                >
                                                    Our mission is to make our community a better place. Your
                                                    support is essential to achieving this goal. Please
                                                    consider donating today.
                                                </p>
                                                <table cellSpacing="0" cellPadding="0" style={{ margin: "2% auto" }}>
                                                    <tr>
                                                        <td>
                                                            <img
                                                                src={template.paypalQrCode}
                                                                alt="PayPal"
                                                                style={{
                                                                    width: "140px",
                                                                    height: "140px",
                                                                    marginTop: "15px",
                                                                    marginBottom: "20px",
                                                                }}
                                                            />
                                                        </td>
                                                        <td>
                                                            <img
                                                                src={template.zelleQrCode}
                                                                alt="Zelle"
                                                                style={{
                                                                    width: "140px",
                                                                    height: "140px",
                                                                    marginTop: "15px",
                                                                    marginBottom: "20px",
                                                                }}
                                                            />
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div
                                                style={{
                                                    color: "black",
                                                    textAlign: "center",
                                                    margin: "10px auto",
                                                    fontSize: "18px",
                                                    fontFamily: "'Georgia', serif",
                                                }}
                                            >
                                                <p>For further details and the latest information:</p>
                                                <p>
                                                    Please visit the temple website{" "}
                                                    <b>{template.websiteUrl}</b>
                                                </p>
                                            </div>
                                            <footer style={{ padding: "10px", marginTop: "20px" }}>
                                                <div
                                                    style={{
                                                        textAlign: "left",
                                                        fontFamily: "'Georgia', serif",
                                                        fontSize: "18px",
                                                        color: "#000",
                                                    }}
                                                >
                                                    <b>ADDRESS AND OTHER INFORMATION</b>
                                                    <br />
                                                    <br />
                                                    {template.address}
                                                    <br />
                                                    Tax ID # {template.taxId}
                                                    <br />
                                                    Phone: {template.phone}; Fax: {template.fax}
                                                    <br />
                                                    {template.websiteUrl}
                                                    <br />
                                                </div>
                                                <div>
                                                    <b>Stay Connected:</b>&nbsp;
                                                    <a href={template.facebookUrl}>
                                                        <img
                                                            src="https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png"
                                                            alt="Facebook"
                                                            style={{
                                                                width: "40px",
                                                                height: "40px",
                                                                marginTop: "10px",
                                                                borderRadius: "10px",
                                                            }}
                                                        />
                                                    </a>
                                                    &nbsp;&nbsp;
                                                    <a href={template.twitterUrl}>
                                                        <img
                                                            src="https://imageio.forbes.com/specials-images/imageserve/64f8e481ed69b0d89df9e2c7/Twitter-rebrands-to-X/960x0.png?format=png&width=960"
                                                            alt="Twitter"
                                                            style={{
                                                                width: "40px",
                                                                height: "40px",
                                                                marginTop: "10px",
                                                                borderRadius: "10px",
                                                            }}
                                                        />
                                                    </a>
                                                    &nbsp;&nbsp;
                                                    <a href={template.instagramUrl}>
                                                        <img
                                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                                                            alt="Instagram"
                                                            style={{
                                                                width: "40px",
                                                                height: "40px",
                                                                marginTop: "10px",
                                                                borderRadius: "10px",
                                                            }}
                                                        />
                                                    </a>
                                                </div>
                                            </footer>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    );
};

export default TempleEmailTemplate;
