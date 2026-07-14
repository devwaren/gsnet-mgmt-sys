// Signature type for Destroy Image Function

type DestroyImageOptions = {
	publicId: string;
};

export type DestroyImageFunction = ({
	publicId,
}: DestroyImageOptions) => Promise<void>;

// Signature type for Upload Image Function

interface UploadImageOptions {
	file: File;
	folder?: string;
	publicId?: string;
}

interface UploadImageResult {
	url: string;
	publicId: string;
}

export type UploadImageFunction = ({
	file,
	folder,
	publicId,
}: UploadImageOptions) => Promise<UploadImageResult>;
