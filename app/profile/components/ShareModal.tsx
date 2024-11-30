import { useState } from "react";
import {
  FaCopy,
  FaEnvelopeOpenText,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";
import { FaX, FaXTwitter } from "react-icons/fa6";

interface ShareModalProps {
  pageLink: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ pageLink }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageLink);
    alert("Link copied to clipboard!");
  };

  const handleShareClick = (platform: string) => {
    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageLink}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${pageLink}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${pageLink}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${pageLink}`;
        break;
      case "gmail":
        shareUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=&su=Check%20this%20out&body=${encodeURIComponent(
          pageLink
        )}`;
        break;
      default:
        break;
    }
    window.open(shareUrl, "_blank");
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="text-3xl hover:text-gray-700 text-black"
      >
        <HiOutlineShare />
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-4 relative max-w-lg">
            <button
              className="absolute top-4 right-4"
              onClick={() => setShowModal(false)}
            >
              <FaX />
            </button>
            <h2 className="text-[22px] mb-4">Share profile</h2>

            <div className="grid grid-cols-3 lg:grid-cols-5 items-center justify-center gap-3 mb-4">
              {/* Facebook */}
              <div
                onClick={() => handleShareClick("facebook")}
                className="flex flex-col items-center cursor-pointer p-4 rounded-lg hover:bg-gray-100 transition"
              >
                <FaFacebook className="w-8 h-8 text-blue-600" />
                <span className="text-sm mt-2">Facebook</span>
              </div>

              {/* Twitter */}
              <div
                onClick={() => handleShareClick("twitter")}
                className="flex flex-col items-center cursor-pointer p-4 rounded-lg hover:bg-gray-100 transition"
              >
                <FaXTwitter className="w-8 h-8 text-black" />
                <span className="text-sm mt-2">Twitter</span>
              </div>

              {/* LinkedIn */}
              <div
                onClick={() => handleShareClick("linkedin")}
                className="flex flex-col items-center cursor-pointer p-4 rounded-lg hover:bg-gray-100 transition"
              >
                <FaLinkedin className="w-8 h-8 text-blue-600" />
                <span className="text-sm mt-2">LinkedIn</span>
              </div>

              {/* WhatsApp */}
              <div
                onClick={() => handleShareClick("whatsapp")}
                className="flex flex-col items-center cursor-pointer p-4 rounded-lg hover:bg-gray-100 transition"
              >
                <FaWhatsapp className="w-8 h-8 text-green-600" />
                <span className="text-sm mt-2">WhatsApp</span>
              </div>

              {/* Mail*/}
              <div
                onClick={() => handleShareClick("gmail")}
                className="flex flex-col items-center cursor-pointer p-4 rounded-lg hover:bg-gray-100 transition"
              >
                <FaEnvelopeOpenText className="w-8 h-8 text-black" />
                <span className="text-sm mt-2">Mail</span>
              </div>
            </div>

            <div className="flex flex-row gap-x-2 items-center justify-center space-y-2">
              <div className="bg-gray-200 rounded-lg mt-1 px-8 py-2 text-center">
                {pageLink}
              </div>

              <button
                onClick={handleCopyLink}
                className="text-black font-semibold py-2 px-3 hover:bg-gray-100 rounded-full"
              >
                <FaCopy size={26} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareModal;
