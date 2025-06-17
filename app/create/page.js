'use client';
// import { Button } from "@/components/ui/button";
// import { getproduct,createproduct } from "./actions";
// import { useEffect,useState } from "react";
// import { useForm } from "react-hook-form";

// export default function CreatePage() {
//   const [person,setPerson] = useState([]);
//    const {register,reset,handleSubmit} =useForm();
//    async function submit(){
//     //console.log("Button is pressed");
//     await createproduct();
//   }
//    async function gettingproduct(){
//     const product = await getproduct();
//     setPerson(product)
//     console.log(product);
//   }
//     async function afterSubmit(data){
//      console.log(data);
//      await createproduct(data);
//      reset()
//      await gettingproduct()
//   }
//     useEffect(()=>{
//     gettingproduct();
// },[])
//   return (
//      <>
//   <button onClick={submit}>add in db</button>
// <br/>
// <button onClick={gettingproduct}>get product</button>
// <form onSubmit={handleSubmit(afterSubmit)}>
//    <input {...register('name')}/>
//    <input {...register('price')}/>
//    <input {...register('imageUrl')}/>
//   <Button type='submit'>Submit</Button>
//  </form>


  {/* {
  person.map((index)=>(
    <div key={index.id}>
        name:{index.name}
        price:{index.price}
        imageUrl:{index.imageUrl}
       <br/>
    </div>
  ))
} */}


// </>
//   );
// }

// 'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getproduct, createproduct } from "./actions";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function CreatePage() {
  const [person, setPerson] = useState([]);
  const { register, reset, handleSubmit } = useForm();

  async function submit() {
    await createproduct();
  }

  async function gettingproduct() {
    const product = await getproduct();
    setPerson(product);
    console.log(product);
  }

  async function afterSubmit(data) {
    console.log(data);
    await createproduct(data);
    reset();
    await gettingproduct();
  }

  useEffect(() => {
    gettingproduct();
  }, []);

  return (
    <>
      <div className="p-4 flex gap-4">
        <Button onClick={submit} variant="outline">Add in DB</Button>
        <Button onClick={gettingproduct} variant="secondary">Get Product</Button>
      </div>

      <Card className="max-w-md mx-auto my-6 shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl">Add New Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(afterSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" placeholder="Enter product name" {...register('name')} />
            </div>
            <div>
              <Label htmlFor="price">Price</Label>
              <Input id="price" type="number" placeholder="Enter price" {...register('price')} />
            </div>
            <div>
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input id="imageUrl" placeholder="Enter image URL" {...register('imageUrl')} />
            </div>
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </CardContent>
      </Card>

      {/* <div className="p-4 space-y-3">
        {person.map((item) => (
          <div key={item.id} className="border p-4 rounded-md shadow-sm">
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Price:</strong> ₹{item.price}</p>
            <p><strong>Image URL:</strong> {item.imageUrl}</p>
          </div>
        ))}
      </div> */}
    </>
  );
}
