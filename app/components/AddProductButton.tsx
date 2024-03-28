"use client"

import { useTransition } from "react";
import { addProductToDatabase } from "../actions/serverAction";

function AddProductButton() {
    const [isPending, startTransition] = useTransition();
    const formData = new FormData();
    formData.append("product", "Macbook Pro");
    formData.append("price", "1299.99")
    return (

        <button className="fixed border bg-green-500  text-white p-2 rounded-md w-47 right-10 bottom-10"
            onClick={() => startTransition(() => addProductToDatabase(formData))}>
            Add
        </button >
    )
}
export default AddProductButton;