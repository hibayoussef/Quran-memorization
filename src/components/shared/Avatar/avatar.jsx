// AvatarComponent.js
import { StyledAvatar } from "./avatar.styles"; // adjust the path if necessary

const AvatarComponent = ({ alt, src, width, height }) => {
  return (
    <>
      <StyledAvatar
        alt={alt}
        src={src}
        sx={{
          width: width,
          height: height,
        }}
      />
    </>
  );
};

export default AvatarComponent;
