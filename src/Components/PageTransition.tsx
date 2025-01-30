import { AnimatePresence, motion } from "framer-motion";
import Stairs from "./Stairs";

export default function FadeTransition() {
	return (
		<AnimatePresence mode="wait">
			<div style={{ userSelect: "none" }}>
				<div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-[9999999999] flex">
					<Stairs />
				</div>
				<motion.div
					className="h-screen w-screen fixed bg-gray-500 top-0 pointer-events-none"
					initial={{ opacity: 1 }}
					animate={{
						opacity: 0,
						transition: { delay: 1, duration: 1, ease: "easeInOut" },
					}}
				/>
			</div>
		</AnimatePresence>
	);
}
