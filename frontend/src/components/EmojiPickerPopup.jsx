import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { LuImage, LuX } from "react-icons/lu";

const EmojiPickerPopup = ({ icon, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-start gap-5 mb-6">
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-12 h-12 flex items-center justify-center text-2xl bg-n-1 text-n-9 rounded-lg">
          {icon ? (
            <img src={icon} alt="Icon" className="w-12 h-12" />
          ) : (
            <LuImage />
          )}
        </div>

        <p className="">{icon ? "Change Icon" : "Pick Icon"}</p>
      </div>

      {isOpen && (
        <div className="relative">
          <button
            className="w-7 h-7 flex items-center justify-center bg-white border border-gray-200 rounded-full absolute -top-2 -right-2 cursor-pointer z-20"
            onClick={() => setIsOpen(false)}
          >
            <LuX />
          </button>

          <EmojiPicker
            open={isOpen}
            emojiStyle="apple" // or "google", "twitter", etc.
            onEmojiClick={(emojiData) => onSelect(emojiData.imageUrl)}
          />
          {/* <EmojiPicker
            open={isOpen}
            emojiStyle="google" // important!
            lazyLoadEmojis={false} // optional but helps during debug
            onEmojiClick={(emojiData) => {
              console.log("Selected emoji:", emojiData); // <-- Debug here
              onSelect(emojiData.imageUrl);
            }}
          /> */}
        </div>
      )}
    </div>
  );
};

export default EmojiPickerPopup;
