type IconProps = {
  iconName: string;
};

const Icon = (props: IconProps) => {
  const { iconName } = props;
  switch (iconName) {
    case "icon":
      return (
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5059 24.7529C7.29266 24.7529 2.25586 19.7161 2.25586 13.5029C2.25586 7.28972 7.29266 2.25293 13.5059 2.25293C19.719 2.25293 24.7559 7.28972 24.7559 13.5029C24.7559 19.7161 19.719 24.7529 13.5059 24.7529ZM13.5059 22.5029C18.4765 22.5029 22.5059 18.4735 22.5059 13.5029C22.5059 8.53236 18.4765 4.50293 13.5059 4.50293C8.53529 4.50293 4.50586 8.53236 4.50586 13.5029C4.50586 18.4735 8.53529 22.5029 13.5059 22.5029ZM9.56836 15.7529H15.7559C16.0665 15.7529 16.3184 15.5011 16.3184 15.1904C16.3184 14.8798 16.0665 14.6279 15.7559 14.6279H11.2559C9.70256 14.6279 8.44336 13.3688 8.44336 11.8154C8.44336 10.2621 9.70256 9.00293 11.2559 9.00293H12.3809V6.75293H14.6309V9.00293H17.4434V11.2529H11.2559C10.9452 11.2529 10.6934 11.5048 10.6934 11.8154C10.6934 12.1261 10.9452 12.3779 11.2559 12.3779H15.7559C17.3092 12.3779 18.5684 13.6371 18.5684 15.1904C18.5684 16.7438 17.3092 18.0029 15.7559 18.0029H14.6309V20.2529H12.3809V18.0029H9.56836V15.7529Z"
            fill="white"
          />
        </svg>
      );
    case "menu":
      return (
        <svg
          width="18"
          height="4"
          viewBox="0 0 18 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM16 0C14.9 0 14 0.9 14 2C14 3.1 14.9 4 16 4C17.1 4 18 3.1 18 2C18 0.9 17.1 0 16 0ZM9 0C7.9 0 7 0.9 7 2C7 3.1 7.9 4 9 4C10.1 4 11 3.1 11 2C11 0.9 10.1 0 9 0Z"
            fill="#7C69E6"
          />
        </svg>
      );
    case "download":
      return (
        <svg
          width="24"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="4 2 24 24"
          fill="currentColor"
        >
          <path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path>
        </svg>
      );
    case "arrow":
      return (
        <svg
          width="26"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 3 24 24"
          fill="currentColor"
        >
          <path d="M12 16L6 10H18L12 16Z"></path>
        </svg>
      );
    case "inActiveCheckIcon":
      return (
        <svg
          width="30"
          height="18"
          viewBox="3 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.87465 10.7835L13.0454 5.61279L13.8409 6.40829L7.87465 12.3745L4.29492 8.79479L5.09042 7.9993L7.87465 10.7835Z"
            fill="black"
          />
          <circle cx="9" cy="9" r="8.5" stroke="black" />
        </svg>
      );
    case "activeCheckIcon":
      return (
        <svg
          width="30"
          height="18"
          viewBox="3 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="9" r="9" fill="#7C69E6" />
          <path
            d="M7.87465 10.7835L13.0454 5.61279L13.8409 6.40829L7.87465 12.3745L4.29492 8.79479L5.09042 7.9993L7.87465 10.7835Z"
            fill="white"
          />
        </svg>
      );
    default:
      return <div></div>;
  }
};

export default Icon;
