"use client";

import CustomDialogHeader from "@/components/CustomDialogHeader";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { createWorkflowSchema } from "@/schema/workflow";
import { Layers2Icon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

function CreateWorkflowDialog({ triggerText }: {triggerText?: string}) {
    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof createWorkflowSchema>>({
        resolver: zodResolver(createWorkflowSchema),
        defaultValues: {},
    })

    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button>{triggerText ?? "Create workflow"}</Button>
        </DialogTrigger>
        <DialogContent className="px-0">
            <CustomDialogHeader
                icon={Layers2Icon}
                title="Create workflow"
                subTitle="Start building your workflow"
            />
            <div className="p-6">
                
            </div>
        </DialogContent>
    </Dialog>
}

export default CreateWorkflowDialog