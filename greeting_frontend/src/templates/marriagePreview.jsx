const marriagePreview = ({template = {}, userDetails = {}, age = "10"}) => {
    const husbandName = userDetails.husband_name || "Mohan";
    const wifeName = userDetails.wife_name || "Rasmika";
    const bannerImage = template.banner && /\.(gif|png|jpe?g)$/i.test(template.banner)
      ? template.banner
      : "https://cdn.templates.unlayer.com/assets/1676265088672-cake.png";
    const title = template.title || "Happy Anniversary";
    const description = template.description || "Wishing you both a lifetime of love, happiness, and cherished memories. May your journey together continue to be filled with joy and affection!";
  
    return (
      <body style="margin: 0; padding: 0; font-family: 'Open Sans', sans-serif; background-color: #f8f8f8;">
        <table
          role="presentation"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="max-width: 600px; margin: 20px auto; background-color: #521c25; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);"
        >
          {/* Banner Image */}
          <tr>
            <td style="text-align: center; padding: 20px 0;">
              <img
                src={bannerImage}
                alt="Anniversary Banner"
                style="width: 70%; max-width: 300px; height: auto; border-radius: 8px;"
              />
            </td>
          </tr>
  
          {/* Anniversary Title and Couple Names */}
          <tr>
            <td style="padding: 20px; text-align: center; color: #ffffff;">
              <h1
                style="margin: 0; font-size: 40px; font-weight: bold; color: #e7afb5; text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);"
              >
                {title}
              </h1>
  
              <p
                style="font-size: 24px; margin: 20px 0; font-weight: normal; color: #ffe5e7; line-height: 1.6;"
              >
                <span
                  style="font-size: 50px; font-family: 'Brush Script MT', cursive; color: #d4757e;"
                >
                  {husbandName}
                </span>
                <span
                  style="font-size: 40px; font-family: 'Brush Script MT', cursive; color: #ffc6cc; margin: 0 15px;"
                >
                  &
                </span>
                <span
                  style="font-size: 50px; font-family: 'Brush Script MT', cursive; color: #d4757e;"
                >
                  {wifeName}
                </span>
              </p>
  
              <p style="font-size: 20px; color: #ff909b; line-height: 1.5; margin: 10px 100px;">
                Celebrating {age} Wonderful Years Together
              </p>
              <p style="font-size: 16px; line-height: 1.5; margin: 20px 60px; color: #ffdede;">
                {description}
              </p>
            </td>
          </tr>
  
          {/* Footer */}
          <tr>
            <td
              style="background-color: #521c25; color: #ffdede; text-align: center; padding: 15px; font-size: 14px;"
            >
              <p style="margin: 5px 0;">&copy; 2024 Your Anniversary Team. All rights reserved.</p>
              <p style="margin: 5px 0;">
                If you have any questions, contact us at{" "}
                <a
                  href="mailto:hr@incrivelsoft.com"
                  style="color: #ffdede; text-decoration: underline;"
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
  

export default marriagePreview;