import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function VideoModal({ open, onClose, videoId }) {
  if (!videoId) return null;

  const url = `https://iframe.mediadelivery.net/embed/366951/${videoId}?autoplay=true&loop=false&muted=false&preload=true&responsive=true`;

  return (
    <Dialog sx={{ zIndex:"99999999"}} open={open} onClose={onClose} fullScreen>
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", top: 16, right: 16, zIndex: 10, color: "#fff" }}
      >
        <CloseIcon />
      </IconButton>
      <iframe
        src={url}
        title="Course Video"
        allow="autoplay; fullscreen"
        style={{
          border: "none",
          width: "100%",
          height: "100%",
          backgroundColor: "black",
         
        }}
      />
    </Dialog>
  );
}
