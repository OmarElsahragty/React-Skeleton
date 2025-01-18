import { Box, Modal, styled } from "@mui/material";
import { CSSProperties, useState } from "react";

const Visual = styled("div")<{
  src: string;
  style?: CSSProperties;
}>(({ src, style }) => ({
  backgroundImage: `url(${src})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  ...style,
}));

export const Image = ({
  allowPreview = false,
  onClick,
  src,
  style,
}: {
  allowPreview?: boolean;
  onClick?: () => void;
  src: string;
  style: CSSProperties;
}) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <>
      <Visual
        src={src}
        style={style}
        onClick={() => {
          onClick && onClick();
          allowPreview && setVisibility(true);
        }}
      />

      {allowPreview && (
        <Modal open={visibility} onClose={() => setVisibility(false)}>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 24,
              left: "50%",
              outline: "none",
              p: 2,
              position: "absolute",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img src={src} alt="Image-Preview" />
          </Box>
        </Modal>
      )}
    </>
  );
};
