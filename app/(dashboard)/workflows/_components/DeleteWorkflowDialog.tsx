"user client";
import { Alert } from "@/components/ui/alert";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export function DeleteWorkflowDialog({open, setOpen}: Props) {
    return <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    If you delete this workflow, you will not be able to recover it.
                    <div className="flex flex-col py-4  gap-2">
                        <p>
                            If you are sure, enter <b>{workflowName}</b> to confirm:
                        </p>
                    </div>
                </AlertDialogDescription>
            </AlertDialogHeader>
        </AlertDialogContent>
    </AlertDialog>
}