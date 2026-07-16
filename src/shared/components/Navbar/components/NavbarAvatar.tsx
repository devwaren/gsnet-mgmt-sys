import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

type Props = {
  avatarName: string;
  onLogout?: () => void;
};

export function NavbarProfile({ avatarName, onLogout }: Props) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setOpen(false);
    }, 500); // Delay before closing
  };

  return (
    <div className="relative cursor-pointer">
      <button
        type="button"
        className="-mt-3 h-8 w-8 overflow-hidden rounded-full focus:outline-none cursor-pointer"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onFocus={handleEnter}
        onBlur={handleLeave}>
        <img
          src={avatarName}
          alt="Profile"
          className="h-full w-full object-cover"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="absolute right-0 top-full z-50 mt-2 min-w-40 rounded-lg border bg-white p-2 shadow-lg group">
            <button
              type="button"
              onClick={onLogout}
              className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-gray-100 group-hover:cursor-pointer">
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
