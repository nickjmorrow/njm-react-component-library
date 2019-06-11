import * as React from "react";
import { DefaultIconSvg } from "~/components/atoms/icons";
import { IconProps } from "~/components/atoms/icons/types";

export const JenkinsCIIcon: React.SFC<IconProps> = ({
  sizeVariant,
  colorVariant = "core",
  ...svgProps
}) => {
  return (
    <DefaultIconSvg
      {...svgProps}
      colorVariant={colorVariant}
      sizeVariant={sizeVariant}
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 48 48"
      width="96px"
      height="96px"
    >
      <path
        style={{fill: '#FFE0B2'}}
        d="M15.2,33.5c-0.5,0.3-8.2,5.2-8.2,5.5c0,0.4,0,0.4,0,0.4L8.4,43h31.2c0,0,1.5-4.8,1.4-6  c0-0.6-5-3.9-5-3.9s3.9-3.9,4-12.4c0-0.8,0-1.6-0.1-2.4C39.2,8.7,33.1,5.3,26.7,5c-6.5-0.2-10.1,2.8-10.1,2.8s-4.1,1.4-4.5,4.7  c0,0-3.2,0.6-1.5,7.1C9.3,20.6,9,22,9,23c0,1.3,0.4,2.8,1.2,3.7c1.7,1.8,3.1,1.4,3.1,1.4S13.9,31.3,15.2,33.5z"
      />
      <path
        style={{fill:"#F44336" }}
        d="M36.8,36.9C36.6,35.6,36,35,34.7,35h-0.1l-0.1,0c-0.4,0.1-1,0.3-2.7,1.5l-1,0.7  C30.6,37.1,30.3,37,30,37c-0.5,0-0.9,0.2-1.3,0.5l-1-0.5L26,36.1c-0.9-0.4-1.8-0.7-2.5-0.7c-0.5,0-0.9,0.1-1.3,0.3  c-0.5,0.4-0.7,1-0.6,1.8c0,0.4,0.1,0.9,0.1,1.3c0.2,2.1,0.3,3.6,2.3,3.7c0.1,0,0.2,0,0.3,0c1.1,0,2.4-0.4,3.6-1.3l0.9-0.6  c0.3,0.2,0.7,0.4,1.1,0.4c0.5,0,0.9-0.2,1.2-0.4l1.4,0.3c0.6,0.1,1.1,0.2,1.6,0.2l0.4,0c0.5,0,1,0,1.5-0.3c0.6-0.3,0.9-1,0.9-2.1  c0-0.5-0.1-1-0.1-1.4L36.8,36.9z"
      />
      <path
        style={{fill:"#FFFFFF" }}
        d="M21.7,38.9c0-0.4-0.1-0.8-0.1-1.3c-0.1-0.6,0-1,0.2-1.4c-5-0.1-6.6-2.7-6.6-2.7s-0.3,1.6,1.1,3.4  c2.1,2.5,5.3,2.8,5.3,2.8h0.2C21.8,39.5,21.8,39.2,21.7,38.9z"
      />
      <path
        style={{fill:"#546E7A" }}
        d="M22.9,43l-0.7-1.4c-0.1-0.3-0.2-0.6-0.3-1.1l-0.1-0.7l-0.7-0.1c-0.9-0.2-3.1-0.8-4.7-2.7  c-0.5-0.6-0.8-1.3-1-2L15,33.7l-1.1,0.7c-2,1.3-5.3,3.4-6.4,4.3l-0.6,0.5L8.4,43L22.9,43L22.9,43z"
      />
      <path
        style={{fill:"#455A64" }}
        d="M12.2,43h10.7l-0.7-1.4c-0.1-0.3-0.2-0.6-0.3-1.1l-0.1-0.7l-0.7-0.1c-0.9-0.2-3.1-0.8-4.7-2.7  c-0.1-0.1-0.2-0.3-0.3-0.4L11,40L12.2,43z"
      />
      <path
        style={{fill:"#546E7A" }}
        d="M40.7,36.5c-0.6-0.6-2.4-1.9-3.1-2.4l-0.7-0.5c-0.2,0.2-0.6,0.7-1.3,1.2l0.7,0.7  c0.3,0.3,0.5,0.8,0.6,1.3l0,0.3c0.1,0.4,0.1,0.9,0.1,1.4c0,1.7-0.6,2-0.9,2.1c-0.2,0.1-0.5,0.2-0.8,0.2l0.1,2h4.1l0.2-0.7  c0.5-1.6,1.1-3.9,1.2-4.9l0-0.5L40.7,36.5z"
      />
      <path
        style={{fill:"#455A64" }}
        d="M39.6,43l0.2-0.7c0.3-0.8,0.5-1.9,0.8-2.8l-3.7-2c0,0.3,0.1,0.7,0.1,1.1c0,1.7-0.6,2-0.9,2.1  c-0.2,0.1-0.5,0.2-0.8,0.2l0.1,2L39.6,43L39.6,43z"
      />
      <path
        style={{fill:"#616161" }}
        d="M10.3,19.8C10.3,19.8,10.4,19.7,10.3,19.8L10.3,19.8l0.1-0.1c0.5-0.4,1.2-0.7,1.8-0.7  c0.6,0,0.9,0.2,1.2,0.3c1.3,0.7,1.6,2,1.7,2.9l0,0l0,0.1l0,0.1c0.6-0.2,1.2-0.4,1.4-0.5c0-0.1,0-0.3-0.1-0.6  c-0.1-0.4-0.2-0.9-0.4-1.4c-0.4-1.1-0.3-2.5,0.3-4.3l0.1-0.2c0.1-0.4,0.3-0.8,0.3-1.1c0-0.3,0.1-0.6,0.1-0.7c0-0.3-0.1-0.5-0.2-0.8  l-0.2-0.5l0.3-0.5c0.9-1.5,4.2-6.5,10.9-6.5c0.2,0,0.4,0,0.7,0l-0.2,0C27.7,5.1,27.2,5,26.7,5c-0.2,0-0.5,0-0.7,0l0,0  c-5.4,0-8.7,2.3-9.3,2.7l-0.1,0.1l-0.1,0.1c-0.6,0.2-3.7,1.5-4.3,4.2L12,12.4l-0.4,0.2c-0.4,0.2-0.7,0.5-0.9,0.9  c-0.7,1.2-0.8,3-0.3,5.5l0.1,0.5L10.1,20c0,0-0.1,0.1-0.1,0.1C10.1,20,10.2,19.9,10.3,19.8z"
      />
      <rect
        x="28"
        y="41"
        style={{fill:"#263238" }}
        width="6"
        height="2"
      />
      <path
        style={{fill:"#263238" }}
        d="M14.2,22.4c-0.1-0.9-0.4-1.7-1.1-2.1c-0.3-0.1-0.5-0.2-0.8-0.2c-0.5,0-1.1,0.2-1.6,0.9l-0.7-2  c0.9-0.5,1.7-0.8,2.5-0.8c0.5,0,1,0.1,1.5,0.3c0.4,0.2,0.8,0.5,1.1,0.8c-0.2-1.4,0.1-2.9,0.5-4.1c0.2-0.5,0.3-1,0.4-1.3  c0.1-0.6,0-0.7-0.2-1c-1.9,0.2-3.5,0.7-3.5,0.7l-0.5-1.9c0.1,0,2.1-0.6,4.4-0.8l0.7-0.1l0.3,0.6c0,0,0.1,0.1,0.1,0.2  c0.3,0.3,0.7,0.9,0.8,1.9c0,0.2,0,0.6-0.1,0.9c-0.1,0.5-0.3,0.9-0.4,1.5c-0.4,1.2-0.7,2.6-0.3,3.6c0.2,0.6,0.3,1.2,0.4,1.6  c0.1,0.4,0.2,1.3-0.2,1.6c-0.4,0.3-2.7,1-2.7,1S14.3,23.3,14.2,22.4z"
      />
      <path
        style={{fill:"#263238" }}
        d="M17.5,12.6l-1.8-0.8c0-0.1,3.7-8.2,13-7.6l-0.1,2C20.6,5.8,17.5,12.6,17.5,12.6z"
      />
      <g>
        <path
          style={{fill:"#FFFFFF" }}
          d="M22,36.2c-5.1,0-6.8-2.7-6.8-2.7s-0.3,1.6,1.1,3.4c2.1,2.5,5.3,2.8,5.3,2.8"
        />
        <path
          style={{fill:"#263238" }}
          d="M21.5,40.7c-0.1,0-3.6-0.4-5.9-3.2c-1.7-2.2-1.4-4-1.3-4.2l0.5-2.6l1.4,2.3c0.1,0.1,1.5,2.2,5.9,2.2   v2c-2.1,0-3.7-0.4-4.9-1c0,0,0,0,0,0.1c1.8,2.1,4.5,2.4,4.6,2.4L21.5,40.7z"
        />
      </g>
      <path
        style={{fill:"#263238" }}
        d="M34.7,42c-0.1,0-0.2,0-0.3,0c-1.8,0-3.5-0.6-3.6-0.6l0.7-1.9c0,0,1.4,0.5,2.8,0.5l0.1,0  c0.5,0,1,0,1.3-0.1C36,39.7,36,39,36,38.6c0-0.4-0.1-0.9-0.1-1.3l0-0.3c-0.1-0.8-0.4-1.1-1.2-1.1c-0.6,0.1-2.5,1.5-3.2,2L31,38.3  l-1.2-1.6l0.4-0.3c1.9-1.4,3.4-2.4,4.4-2.4c1.8,0,2.9,1,3.2,2.8l0,0.3c0.1,0.4,0.1,1,0.2,1.5c0,1.5-0.4,2.6-1.4,3  C35.9,42,35.3,42,34.7,42z"
      />
      <path
        style={{fill:"#263238" }}
        d="M24.3,43.6c-0.1,0-0.2,0-0.3,0c-2.9-0.2-3.1-2.5-3.2-4.6c0-0.4-0.1-0.8-0.1-1.2  c-0.2-1.6,0.5-2.4,1-2.8c1.3-0.9,3.3-0.5,4.8,0.2l3,1.6l-0.9,1.8l-3-1.6c-1.2-0.6-2.4-0.7-2.7-0.4c-0.2,0.2-0.2,0.6-0.2,0.9  c0.1,0.4,0.1,0.9,0.1,1.3c0.2,2.4,0.4,2.7,1.4,2.8c2.1,0.2,4.2-1.8,4.2-1.9l1.4,1.4C29.6,41.3,27.2,43.6,24.3,43.6z"
      />
      <path
        style={{fill:"#263238" }}
        d="M21,15.4c0,0-0.2,0.6-0.6,0.6c-0.2,0-0.4-0.4-0.4-0.8c0-1.2,0.8-2.7,1.6-3.4c0.6-0.5,1.4-0.8,2.3-0.8  c0.4,0,0.9,0,1.3,0.2c0.5,0.2,0.8,0.6,0.8,1.4c0,0,0,0.4-1.3,0.4c-0.8,0-1.8,0.1-2.2,0.5C22.1,13.9,21.5,14.3,21,15.4z"
      />
      <path
        style={{fill:"#263238" }}
        d="M26.4,21c-0.5,0-1.1-0.1-1.6-0.2c-0.6-0.1-0.9-0.7-0.7-1.2l0.2-0.3c0.1-0.2,0.3-0.3,0.5-0.3  c0.1,0,0.2,0,0.3,0c0.8,0.2,2,0.2,2.4,0.2c-0.5-1.9-0.4-3.3-0.1-3.3s1.1,2.3,1.5,2.8c0.4,0.5,0.3,1.1-0.1,1.5  C28.1,20.8,27.3,21,26.4,21z"
      />
      <path
        style={{fill:"#263238" }}
        d="M36.4,21c-0.2,0-0.3,0-0.5,0c-0.6-0.1-0.9-0.5-0.9-1.1c0,0,0.1-0.9,0.6-0.9c0.4,0,0.9,0.2,1.1,0.2  C36.5,18,36.2,16,36.5,16c0.3,0,1,2.4,2.4,3.3c0.4,0.3,0.4,0.9-0.2,1.3C37.9,20.9,37.2,21,36.4,21z"
      />
      <path
        style={{fill:"#263238" }}
        d="M38.3,14.5c-0.2-0.8-1.1-1.5-2.1-1.8C34.9,12.4,34,13,34,13c0-0.9,0.7-1.6,1-1.7  c0.4-0.2,0.6-0.3,1-0.3c2.1,0,2.9,1.3,3.6,2.6L38.3,14.5z"
      />
      <path
        style={{fill:"#263238" }}
        d="M31.9,27c-0.1,0-0.3,0-0.4,0c0,0,0,0,0,0c-0.7,0-1.3-0.2-1.7-0.7c-0.8-0.9-0.9-2.1-0.6-2.3  c0.3-0.2,0.5,0.5,1.5,0.8c0,0,0.7,0.1,0.9,0.1c0.2,0,0.3,0,0.5,0c1.3,0,2.4-0.3,2.8-0.6C35,24.2,35,24,35,24c0,0,0-0.3-1.3-1.5  c-1.3-1.2-1.7-2.7-1.7-4c0-1.5,0.2-2.5,0.4-2.5c0.3,0,0.6,3.2,2.7,5c1.5,1.3,1.9,2.2,1.9,3.1c0,0.9-0.5,1.4-0.8,1.7  C35.1,26.8,33.3,27,31.9,27z"
      />
      <path
        style={{fill:"#263238" }}
        d="M31.4,30c-3.1-0.1-4.7-2-4.7-2s3.5,0.3,5.8,0.3V30H31.4z"
      />
      <path
        style={{fill:"#263238" }}
        d="M33.6,30v-0.9v-0.9c0.2-0.1,1.8,0.1,3.6-0.6C36.8,29.7,33.7,30,33.6,30z"
      />
      <path
        style={{fill:"#263238" }}
        d="M29.1,33c-2.2,0-3.3-0.6-4.1-3.2c0,0-0.1-0.2,0.2-0.3s0.4,0.1,0.4,0.1c0.4,1.1,2.1,1.4,4.2,1.4  c0.1,0,0.2,0,0.3,0c1,0,3,0,3,0s-0.4,2-2.5,2C30.3,33,29.3,33,29.1,33z"
      />
      <path
        style={{fill:"#263238" }}
        d="M29,37c-3.2,0-5.7-1-8.4-3.9c-1.5-1.6-1.5-3.7-1.3-3.9s0.5,1.2,1.7,2.5c2.4,2.6,5.8,3.4,8.7,3.2  c3.8-0.3,5.4-2.5,5.7-2.7l1.7,1.2c-0.1,0.1-2.4,3.1-7.2,3.5C29.5,37,29.3,37,29,37z"
      />
      <path
        style={{fill:"#263238" }}
        d="M13.4,29l-0.1-1l-0.1-1c0,0,0.2-0.1,0.6-0.4c0.3-0.2,0.6-0.2,0.9,0l0.5,0.4c0.3,0.3,0.3,0.8,0,1.1  C14.3,28.9,13.5,29,13.4,29z"
      />
      <path
        style={{fill:"#263238" }}
        d="M13,23l1.6,0.6c-0.1-0.4-0.6-2.2-2-2.6c-0.4-0.1-1.1,0.2-1.2,0.9c0,0,0,0.2,0,0.3c0,0,0,0.1,0,0.1  C11.5,24,13,25,13,25V23z"
      />
      <path
        style={{fill:"#263238" }}
        d="M30,42c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S31.7,42,30,42z M30,38c-0.5,0-1,0.4-1,1s0.4,1,1,1  s1-0.4,1-1S30.6,38,30,38z"
      />
      <path
        style={{fill:"#263238" }}
        d="M39.6,44H8.4c-0.4,0-0.8-0.2-0.9-0.6l-1.4-3.5C6,39.6,6,39.5,6,39.3l0-0.4c0.1-1,5.7-4.5,7.9-5.8  c-0.7-1.5-1.2-3.1-1.4-4.1c-0.8-0.1-1.8-0.5-3-1.7C8.4,26.2,8,24.3,8,23c0-0.9,0.2-2.4,1.4-3.7c-0.6-2.7-0.5-4.8,0.4-6.2  c0.4-0.7,0.9-1,1.3-1.3c0.8-3.1,4.1-4.5,4.9-4.9c0.8-0.6,4.5-3.1,10.7-2.9c8.4,0.3,13.6,5.5,14.2,14.2C41,19,41,19.8,41,20.6  c0,6.5-2.3,10.5-3.5,12.1c4.5,3.1,4.5,3.6,4.5,4.1c0.1,1.3-1.1,5.2-1.5,6.4C40.4,43.7,40,44,39.6,44z M9.1,42h29.7  c0.6-1.9,1.1-3.9,1.2-4.7c-0.6-0.6-2.7-2.2-4.6-3.4c-0.2-0.2-0.4-0.4-0.4-0.7s0.1-0.6,0.3-0.8c0,0,3.6-3.7,3.7-11.7  c0-0.7,0-1.5-0.1-2.3C38.2,8,30.9,6.2,26.6,6c-6-0.2-9.4,2.5-9.5,2.6c-0.1,0.1-0.2,0.1-0.3,0.2c0,0-3.5,1.2-3.8,3.9  c-0.1,0.4-0.4,0.8-0.8,0.9c-0.7,0.2-1.8,1.7-0.7,5.9c0.1,0.4,0,0.8-0.3,1c-1,0.8-1.1,2-1.1,2.6c0,1.2,0.4,2.4,1,3  c1.2,1.3,2.1,1.1,2.1,1.1c0.3-0.1,0.6,0,0.8,0.1c0.2,0.2,0.4,0.4,0.4,0.7c0,0,0.5,3.1,1.8,5.1c0.1,0.2,0.2,0.5,0.1,0.8  c-0.1,0.3-0.2,0.5-0.5,0.6c-0.7,0.4-6.3,4-7.7,5L9.1,42z M40.1,37.4L40.1,37.4L40.1,37.4z"
      />
    </DefaultIconSvg>
  );
};