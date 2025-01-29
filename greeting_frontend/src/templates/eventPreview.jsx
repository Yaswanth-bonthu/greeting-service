const eventPreview = ({template, userDetails=null}) => {
    const userFirstName = userDetails?.first_name || "Guest";
    const userLastName = userDetails?.last_name || "";
    const eventDate = template.date ? new Date(template.date) : new Date();
    const formattedDay = eventDate.getDate();
    const formattedMonth = new Intl.DateTimeFormat("en-US", { month: "short" }).format(eventDate);
    const eventTime = template.time || "5 PM";
    const eventAddress = template.address || "123 Beach Road, Near RK Beach, Visakhapatnam, Andhra Pradesh 530002";
  
    return (
      <div style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
        <div
          style="max-width: 600px; margin: 20px auto; background-color: #d9eae4; border-radius: 10px; 
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden;"
        >
          {/* Header */}
          <div style="background-color: #b49d80; color: #ffffff; text-align: center; padding: 20px;">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold;">
              Mr/Mrs {userFirstName} {userLastName}, You're Invited!
            </h1>
            <h2 style="margin: 5px 0; font-size: 18px; font-weight: normal;">
              Join us for a special occasion: {template.title || "Custom Event"}
            </h2>
          </div>
  
          {/* Subheading */}
          <div style="text-align: center; color: #b49d80; font-size: 20px; margin: 10px 0;">
            <h3>Celebrating Innovation and Togetherness</h3>
          </div>
  
          {/* Image Section */}
          <div style="text-align: center; padding: 10px;">
            {template.banner &&
            /\.(gif|png|jpe?g)$/i.test(template.banner) ? (
              <img
                src={template.banner}
                alt="Event Banner"
                style="width: 70%; max-width: 300px; height: auto; border-radius: 8px;"
              />
            ) : (
              <img
                src="https://cdn.templates.unlayer.com/assets/1676265088672-cake.png"
                alt="Default Event Image"
                style="width: 70%; max-width: 300px; height: auto; border-radius: 8px;"
              />
            )}
          </div>
  
          {/* Event Details */}
          <div
            style="text-align: center; font-size: 16px; color: #555555; margin: 20px; line-height: 1.6;"
          >
            {template.description ||
              "Welcome to our special event! Customize this message to include details about the occasion, such as what to expect, activities planned, or any important information. Make it personal and engaging!"}
          </div>
  
          {/* Date and Time */}
          <div
            style="text-align: center; margin: 20px 0; display: flex; justify-content: center; 
            align-items: center; font-size: 18px;"
          >
            <div style="color: #b49d80; font-weight: bold; margin: 0 10px;">
              {formattedDay}
            </div>
            <div style="width: 2px; height: 60px; background-color: #b49d80;"></div>
            <div
              style="font-size: 40px; font-weight: bold; margin: 0 10px; color: #333333;"
            >
              {formattedMonth}
            </div>
            <div style="width: 2px; height: 60px; background-color: #b49d80;"></div>
            <div style="color: #b49d80; font-weight: bold; margin: 0 10px;">
              {eventTime}
            </div>
          </div>
  
          {/* Venue */}
          <div
            style="text-align: center; font-size: 16px; color: #555555; margin: 20px; line-height: 1.5;"
          >
            <strong
              style="display: block; color: #333333; margin-bottom: 5px;"
            >
              Venue:
            </strong>
            <div style="margin: 0 80px;">{eventAddress}</div>
            <br />
            <em>Join us for a memorable event at one of the most beautiful locations!</em>
          </div>
  
          {/* Footer */}
          <div
            style="background-color: #b49d80; color: #ffffff; text-align: center; 
            padding: 15px; font-size: 14px;"
          >
            <p style="margin: 5px 0;">&copy; 2024 incrivelSoft. All rights reserved.</p>
            <p style="margin: 5px 0;">
              If you have any questions, contact us at{" "}
              <a
                href="mailto:hr@incrivelsoft.com"
                style="color: #ffffff; text-decoration: underline;"
              >
                hr@incrivelsoft.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  

export default eventPreview;