import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// One storage that handles both images + audio
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    if (file.mimetype.startsWith("image/")) {
      return {
        folder: "society_reports/images",
        resource_type: "image",
      };
    }
    if (file.mimetype.startsWith("audio/")) {
      return {
        folder: "society_reports/audio",
        resource_type: "video", // 👈 Cloudinary treats audio as video
      };
    }
    return {
      folder: "society_reports/others",
      resource_type: "auto",
    };
  },
});

export const uploadReport = multer({ storage });
const technicianStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "technician_uploads",
    resource_type: "image"
  },
});

export const uploadTechnician = multer({ storage: technicianStorage });
export default cloudinary;
