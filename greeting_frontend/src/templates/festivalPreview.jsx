const FestivalPreview = ({ template }) => {
    return (
        <body style={{ margin: "0", padding: "0", fontFamily: "Arial, sans-serif", color: "#ffffff" }}>
            <table
                role="presentation"
                cellPadding="0"
                cellSpacing="0"
                border="0"
                style={{
                    maxWidth: "600px",
                    margin: "20px auto",
                    background: "#020d21",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                }}
            >
                {/* Image Section */}
                <tr>
                    <td style={{ textAlign: "center" }}>
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
                                alt="Default Festival Image"
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

                {/* Title and Description */}
                <tr>
                    <td style={{ padding: "40px", textAlign: "center" }}>
                        <h1
                            style={{
                                margin: "0",
                                fontSize: "32px",
                                fontStyle: "italic",
                                fontWeight: "bold",
                                color: "#ffcc33",
                                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
                                fontFamily: "serif",
                            }}
                        >
                            {template.title || "Cheers to New Beginnings!"}
                        </h1>

                        <p
                            style={{
                                fontSize: "16px",
                                lineHeight: "1.8",
                                margin: "30px 0",
                                color: "#e0e0e0",
                            }}
                        >
                            {template.description ||
                                "As we welcome 2025, let’s embrace new opportunities, celebrate friendships, and cherish the memories that shape our lives. Here's to a year of success, happiness, and endless possibilities!"}
                        </p>

                        {/* Address Section */}
                        <p
                            style={{
                                fontSize: "14px",
                                margin: "20px",
                                color: "#c0c0c0",
                                lineHeight: "1.5",
                            }}
                        >
                            Whether you're celebrating this special moment with loved ones at home or creating unforgettable memories elsewhere, we send our heartfelt wishes to you and yours.
                        </p>

                        {/* From Section */}
                        <p
                            style={{
                                fontSize: "16px",
                                margin: "20px",
                                color: "#c0c0c0",
                                lineHeight: "1.5",
                            }}
                        >
                            Sent with warm wishes and gratitude, <br />
                            <span
                                style={{
                                    color: "#ffcc33",
                                    fontStyle: "italic",
                                    fontFamily: "serif",
                                }}
                            >
                                {template.from || "Your Team"}
                            </span>
                        </p>
                    </td>
                </tr>

                {/* Footer */}
                <tr>
                    <td
                        style={{
                            backgroundColor: "#041026",
                            color: "#ffffff",
                            textAlign: "center",
                            padding: "15px",
                            fontSize: "12px",
                        }}
                    >
                        <p style={{ margin: "5px 0" }}>
                            &copy; 2025 incrivelSoft. All rights reserved.
                        </p>
                        <p style={{ margin: "5px 0" }}>
                            If you have any questions, contact us at{" "}
                            <a
                                href="mailto:hr@incrivelsoft.com"
                                style={{ color: "#ffdede" }}
                            >
                                hr@incrivelsoft.com
                            </a>
                        </p>
                    </td>
                </tr>
            </table>
        </body>
    );
};

export default FestivalPreview;
