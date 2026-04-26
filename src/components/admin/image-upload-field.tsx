"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Loader } from "lucide-react";
import { toast } from "sonner";
import { uploadCharacterImageAction } from "@/server/actions/media";

interface ImageUploadFieldProps {
  characterKey: string;
  currentImage: string;
  imageAlt: string;
  onUploaded?: (imageUrl: string) => void;
}

export function ImageUploadField({
  characterKey,
  currentImage,
  imageAlt,
  onUploaded,
}: ImageUploadFieldProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string>(currentImage);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const result = await uploadCharacterImageAction(characterKey, formData);
      setPreview(result.imageUrl);
      onUploaded?.(result.imageUrl);
      toast.success("Image mise a jour.");
    } catch {
      toast.error("Erreur lors de l'upload de l'image.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl border border-amber-500/20 bg-muted">
      <Image
        src={preview}
        alt={imageAlt}
        fill
        className="object-cover object-top transition-opacity group-hover:opacity-40"
      />

      <label className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 opacity-0 transition-opacity group-hover:opacity-100">
        {isUploading ? (
          <Loader className="h-10 w-10 animate-spin text-amber-500" />
        ) : (
          <>
            <Camera className="mb-2 h-10 w-10 text-white" />
            <span className="text-xs font-bold text-white">CHANGER LA COUVERTURE</span>
          </>
        )}
        <input type="file" className="hidden" onChange={handleFileChange} disabled={isUploading} accept="image/*" />
      </label>
    </div>
  );
}
