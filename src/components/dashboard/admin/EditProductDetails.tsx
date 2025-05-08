/* eslint-disable @typescript-eslint/no-unused-vars */
import CustomInputField from "@/components/custom-input/CustomInputField";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "@/redux/features/products/productApi";
import { IBikeResponse } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required."),
  image: z.string().optional(), // Not validating required, as file is handled separately
  description: z.string().min(1, "Description is required."),
  brand: z.string().min(1, "Brand is required."),
  price: z.number().min(1, "Price cannot be 0."),
  quantity: z.number().min(1, "Quantity cannot be 0."),
  category: z.enum(["Mountain", "Road", "Hybrid", "Electric"], {
    errorMap: () => ({ message: "Invalid category" }),
  }),
  model: z.string().min(1, "Model is required."),
});

const EditProductDetails = ({ product }: { product: IBikeResponse }) => {
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [open, setOpen] = useState(false);

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState(product.image || "");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      image: "",
      description: "",
      brand: "",
      price: 0,
      quantity: 0,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      category: "" as any,
      model: "",
    },
  });

  const { reset } = form;

  const handleImageChange = (file: File) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  useEffect(() => {
    reset({
      name: product?.name || "",
      image: product.image || "",
      description: product.description || "",
      brand: product.brand || "",
      price: product.price || 0,
      quantity: product.quantity || 0,
      category: product.category || "",
      model: product.model || "",
    });
    setPreview(product.image);
  }, [product, reset]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating product...");

    try {
      let imageUrl = data?.image;

      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "bikeStore"); // 🔒 Make sure this preset exists

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dw9zuuylj/image/upload",
          { method: "POST", body: formData }
        );
        const result = await response.json();

        if (!result.secure_url) {
          throw new Error("Image upload failed");
        }

        imageUrl = result.secure_url;
      }

      const updatedProduct = { ...data, image: imageUrl };

      const res = await updateProduct({
        data: updatedProduct,
        id: product._id,
      });

      if ("error" in res) {
        toast.error("Something went wrong", { id: toastId });
      } else {
        toast.success("Product updated successfully!", { id: toastId });
        reset();
        setImage(null);
        setOpen(false);
      }
    } catch (error) {
      toast.error("Failed to update product.");
    }
  };

  const handleDeleteProduct = async (id: string) => {
    const toastId = toast.loading("Deleting...");
    try {
      const res = await deleteProduct(id);
      if ("error" in res) {
        toast.error("Something went wrong...", { id: toastId });
      } else {
        toast.success("Deleted Product...", { id: toastId });
      }
    } catch {
      toast.error("Delete Failed...", { id: toastId });
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div onClick={() => setOpen(!open)}>
            <FaEdit className="text-black cursor-pointer mx-auto hover:scale-[1.15] w-4 h-4" />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle className="sr-only">Edit Product</DialogTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-md mx-auto space-y-4"
            >
              <CustomInputField
                name="name"
                label="Bike Name"
                placeholder="Enter product name"
                type="text"
                control={form.control}
              />

              <Label>Product Image</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleImageChange(file);
                }}
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="object-cover w-32 h-24 rounded"
                />
              )}

              <FormField
                control={form.control}
                name="description"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter description" {...field} />
                    </FormControl>
                    {fieldState.error && (
                      <p className="text-red-500">{fieldState.error.message}</p>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value || ""}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="Mountain">Mountain</SelectItem>
                            <SelectItem value="Road">Road</SelectItem>
                            <SelectItem value="Hybrid">Hybrid</SelectItem>
                            <SelectItem value="Electric">Electric</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    {fieldState.error && (
                      <p className="text-red-500">{fieldState.error.message}</p>
                    )}
                  </FormItem>
                )}
              />

              <CustomInputField
                name="model"
                label="Bike Model"
                placeholder="Enter bike model"
                type="text"
                control={form.control}
              />

              <CustomInputField
                name="brand"
                label="Brand Name"
                placeholder="Enter brand name"
                type="text"
                control={form.control}
              />

              <div className="flex items-center justify-between gap-4">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter price"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      {fieldState.error && (
                        <p className="text-red-500">
                          {fieldState.error.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter quantity"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      {fieldState.error && (
                        <p className="text-red-500">
                          {fieldState.error.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded bg-primary-black hover:shadow-md"
              >
                Update Product
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <FaTrash
        onClick={() => handleDeleteProduct(product._id)}
        className="text-red-600 cursor-pointer mx-auto hover:scale-[1.15] w-4 h-4"
      />
    </div>
  );
};

export default EditProductDetails;
