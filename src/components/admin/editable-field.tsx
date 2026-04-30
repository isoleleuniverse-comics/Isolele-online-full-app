"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { cn } from "@/shared/lib/utils";

interface EditableFieldProps {
  value: string;
  onSave: (newValue: string) => Promise<void>;
  className?: string;
  inputClassName?: string;
  as?: "input" | "textarea";
  placeholder?: string;
}

export function EditableField({
  value,
  onSave,
  className,
  inputClassName,
  as = "input",
  placeholder = "Click to edit",
}: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const [isSaving, setIsSaving] = useState(false);

  const handleStartEditing = () => {
    setCurrentValue(value);
    setIsEditing(true);
  };

  const handleBlur = async () => {
    const nextValue = currentValue.trim();
    const previousValue = value.trim();

    if (nextValue !== previousValue) {
      setIsSaving(true);
      try {
        await onSave(nextValue);
        toast.success("Modification enregistree.");
      } catch {
        toast.error("Erreur lors de la modification.");
        setCurrentValue(value);
      } finally {
        setIsSaving(false);
      }
    }

    setIsEditing(false);
  };

  const sharedClassName = cn(
    "border-none bg-amber-500/5 text-inherit font-inherit focus-visible:ring-1 focus-visible:ring-amber-500",
    inputClassName,
  );

  if (isEditing) {
    if (as === "textarea") {
      return (
        <Textarea
          autoFocus
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          onBlur={handleBlur}
          disabled={isSaving}
          className={cn("min-h-24", sharedClassName)}
        />
      );
    }

    return (
      <Input
        autoFocus
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
        onBlur={handleBlur}
        disabled={isSaving}
        className={sharedClassName}
      />
    );
  }

  return (
    <div
      onClick={handleStartEditing}
      className={cn(
        "cursor-pointer rounded-md p-2 transition-colors hover:bg-amber-500/5",
        isSaving && "pointer-events-none opacity-70",
        className,
      )}
    >
      {value ? value : <span className="text-muted-foreground">{placeholder}</span>}
    </div>
  );
}
