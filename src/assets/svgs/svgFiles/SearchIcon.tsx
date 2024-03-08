import React from "react";

interface SearchIconProps {
  width: string;
  height: string;
  fillColor: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.7549 11.255H11.9649L11.6849 10.985C12.6649 9.845 13.2549 8.365 13.2549 6.755C13.2549 3.165 10.3449 0.255001 6.75488 0.255001C3.16488 0.255001 0.254883 3.165 0.254883 6.755C0.254883 10.345 3.16488 13.255 6.75488 13.255C8.36488 13.255 9.84488 12.665 10.9849 11.685L11.2549 11.965V12.755L16.2549 17.745L17.7449 16.255L12.7549 11.255ZM6.75488 11.255C4.26488 11.255 2.25488 9.245 2.25488 6.755C2.25488 4.265 4.26488 2.255 6.75488 2.255C9.24488 2.255 11.2549 4.265 11.2549 6.755C11.2549 9.245 9.24488 11.255 6.75488 11.255Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default SearchIcon;
