// "use client";

// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "sonner";
// // import { cn } from "@/lib/utils";

// interface EditableFieldProps {
//     value: string;
//     onSave: (newValue: string) => Promise<void>;
//     className?: string;
//     isTextArea?: boolean;
// }

// export function EditableField({ value, onSave, className, isTextArea = false }: EditableFieldProps): React.JSX.Element {
//     const [isEditing, setIsEditing] = useState(false);
//     const [currentValue, setCurrentValue] = useState(value);
//     const [isSaving, setIsSaving] = useState(false);

//     const handleBlur = async () => {
//         if (currentValue !== value) {
//             setIsSaving(true);
//             try {
//                 await onSave(currentValue);
//                 toast.success("Modifié avec succès !");
//             } catch (error) {
//                 toast.error("Erreur lors de la modification.");
//                 setCurrentValue(value); // Revert to original value on error
//             } finally {
//                 setIsSaving(false);
//             }
//         }
//         setIsEditing(false);
//     };

//     const Component = isTextArea ? Textarea : Input;

//     if (isEditing) {
//         return (
//             <Component
//                 autoFocus
//                 value={currentValue}
//                 onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setCurrentValue(e.target.value)}
//                 onBlur={handleBlur}
//                 disabled={isSaving}
//                 className={cn("border-none focus-visible:ring-1 focus-visible:ring-amber-500 bg-amber-500/5 p-0 text-inherit font-inherit", className)}
//             />
//         );
//     }

//     // Cas où on n'édite pas - afficher la valeur en mode lecture seule
//     return (
//         <div
//             onClick={() => setIsEditing(true)}
//             className={cn(
//                 "cursor-pointer hover:bg-amber-500/5 transition-colors p-2 rounded",
//                 className
//             )}
//         >
//             {value || <span className="text-muted-foreground">Cliquer pour éditer</span>}
//         </div>
//     );
// }
