"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import * as Tooltip from "@radix-ui/react-tooltip";

import { Modal } from "@/components/ui/Modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IdlDapp, RpcResponse } from "@/models/app.model";
import { axiosInstance } from "@/services/config";
import { CREATE_INDEXER } from "@/const/api.const";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, "Name is required."),
  description: z.string().min(1, "Description is required."),
  programId: z.string().min(1, "Program ID is required."),
  idlId: z.string().optional(),
  rpcId: z.string().min(1, "RPC is required."),
});

interface CreateIndexerModalProps {
  isOpen: boolean;
  onClose: () => void;
  idls: IdlDapp[];
  rpcs: RpcResponse[];
}

const CreateIndexerModal: FC<CreateIndexerModalProps> = ({
  isOpen,
  onClose,
  idls,
  rpcs,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      idlId: "",
      rpcId: "",
      name: "",
      description: "",
      programId: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      const idlId = values.idlId ? Number(values.idlId) : null;

      const payload = {
        name: values.name.trim(),
        idlId,
        rpcId: Number(values.rpcId),
        description: values.description.trim(),
        programId: values.programId.trim(),
      };

      await axiosInstance.post(CREATE_INDEXER, payload);

      toast.success("Indexer created successfully!");
      onClose();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to create indexer. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Create Indexer"
      description="Create a new Indexer space for the Program."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Indexer Name:</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Kamino Indexer"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description:</FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={isLoading}
                        placeholder="Kamino Indexer"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="programId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Program ID:</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="KLend2g3cP87fffoy8q1mQqGKjrxjC8boSyAYavgmjD"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="idlId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>IDL:</FormLabel>
                    <FormControl>
                      <Select
                        disabled={isLoading}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a table" />
                        </SelectTrigger>
                        <SelectContent>
                          {idls.map((idl) => (
                            <SelectItem key={idl.id} value={idl.id.toString()}>
                              <div className="flex items-center">
                                <span>{idl.name} -</span>
                                <span className="mx-2 font-bold">
                                  {idl.version}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <p className="text-xs italic text-warning2/30 mt-1">
                      * If you don't choose IDL, in your transform code must add
                      the schema to parser PDA data onchain
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rpcId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>RPC:</FormLabel>
                    <FormControl>
                      <Select
                        disabled={isLoading}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a table" />
                        </SelectTrigger>
                        <SelectContent>
                          {rpcs.map((rpc) => (
                            <SelectItem key={rpc.id} value={rpc.id.toString()}>
                              <div className="flex items-center">
                                <span>{rpc.cluster}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  variant="outline"
                  onClick={onClose}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  Create
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default CreateIndexerModal;
