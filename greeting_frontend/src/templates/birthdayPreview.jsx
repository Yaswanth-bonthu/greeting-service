const birthdayPreview = ({ template, userDetails, age }) => {
    const userFirstName = userDetails?.first_name || "Ravi";
    const userLastName = userDetails?.last_name || "Kiran";
    const userAge = age || "18";

    return (
        <div style={{ margin: 0, padding: 0, fontFamily: "'Open Sans', sans-serif", height: "600px", }}>
            <table 
                role="presentation" 
                cellPadding="0" 
                cellSpacing="0" 
                border="0" 
                style={{
                    maxWidth: "600px",
                    margin: "20px auto",
                    backgroundColor: "#ffdede",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
                }}
            >
                <tbody>
                    <tr>
                        <td style={{ 
                            backgroundColor: "#bb395e", 
                            color: "#ffffff", 
                            textAlign: "center", 
                            padding: "30px"
                        }}>
                            <h1 style={{ 
                                margin: 0, 
                                fontSize: "36px", 
                                fontWeight: "bold", 
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" 
                            }}>
                                Happy {userAge}th Birthday, {userFirstName} {userLastName}!
                            </h1>
                            <p style={{ 
                                margin: "5px 0 0", 
                                fontSize: "20px", 
                                fontWeight: "300", 
                                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" 
                            }}>
                                Wishing you a day filled with love and joy!
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td style={{ textAlign: "center", padding: "20px" }}>
                            {template.banner && /\.(gif|png|jpe?g)$/i.test(template.banner) ? (
                                <img 
                                    src={template.banner} 
                                    alt="Banner Image" 
                                    style={{ 
                                        width: "70%", 
                                        maxWidth: "300px", 
                                        height: "auto", 
                                        borderRadius: "8px" 
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
                                        borderRadius: "8px" 
                                    }}
                                />
                            )}
                        </td>
                    </tr>

                    <tr>
                        <td style={{ padding: "20px", textAlign: "center", color: "#bb395e" }}>
                            <h2 style={{ margin: "10px 0", fontSize: "24px", fontWeight: "400" }}>
                                Enjoy Your Special Day!
                            </h2>
                            <p style={{ fontSize: "16px", lineHeight: "1.5", margin: "10px 0 20px" }}>
                                We’re thrilled to celebrate your {userAge}th birthday with you. 
                                As a token of our appreciation, here’s a little surprise to make your day even more memorable. 
                                Have a fantastic birthday, {userFirstName} {userLastName}!
                            </p>
                            <p style={{ fontSize: "16px", lineHeight: "1.5", margin: "10px 0 20px" }}>
                                {template?.description || ""}
                            </p>
                            <p style={{ fontSize: "16px", lineHeight: "1.5", margin: "10px 0 20px" }}>Warm wishes,</p>
                            <p style={{ fontSize: "16px", lineHeight: "1.5", margin: "10px 0 20px" }}>
                                {template.from || "Incrivelsoft Team"}
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td style={{ 
                            backgroundColor: "#bb395e", 
                            color: "#ffdede", 
                            textAlign: "center", 
                            padding: "15px", 
                            fontSize: "14px"
                        }}>
                            <p style={{ margin: "5px 0" }}>&copy; 2025 incrivelSoft. All rights reserved.</p>
                            <p style={{ margin: "5px 0" }}>
                                If you have any questions, contact us at 
                                <a href="mailto:hr@incrivelsoft.com" style={{ color: "#ffdede" }}>
                                    hr@incrivelsoft.com
                                </a>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default birthdayPreview;
