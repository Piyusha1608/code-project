'use server';

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createproduct(data) {
  const name = data.name;
  const price = data.price;
  const imageUrl = data.imageUrl;
   

  await prisma.product.create({
    data: { name, price, imageUrl }
  });

  revalidatePath("/");
}

export async function getproduct(){
    const product = await prisma.product.findMany();
    return product
}