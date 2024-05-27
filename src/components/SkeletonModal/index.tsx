import { Skeleton } from "@/components/ui/skeleton";

const SkeletonModal = () => {
	return (
		<Skeleton className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-32 bg-neutral-700" />
	);
};

export default SkeletonModal;
