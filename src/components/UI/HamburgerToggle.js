import { motion } from 'framer-motion';

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="currentColor"
        strokeLinecap="round"
        {...props}
    />
);

const HamburgerToggle = ({ toggle, isOpen }) => (
    <button onClick={toggle} className="text-gray-700">
        <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            initial={false}
            animate={isOpen ? "open" : "closed"}
        >
            <Path
                variants={{
                    closed: { d: "M 2 5 L 22 5" },
                    open: { d: "M 4 4 L 20 20" },
                }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 12 L 22 12", opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 19 L 22 19" },
                    open: { d: "M 4 20 L 20 4" },
                }}
            />
        </motion.svg>
    </button>
);

export default HamburgerToggle;
